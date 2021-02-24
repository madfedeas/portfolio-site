/**************************************************************************************************************
Author: Madison Federin-Easley
Introduction to HTML/CSS & Introduction to JavaScript
Date: 1/23/2021
Revision no. 1.0
***************************************************************************************************************/
const getJSON = function(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
    var status = xhr.status;
    // try around the if-else statement checking the webpage status
    try {
        // If I change 200 to something else (or if there's an actual problem), will throw error
        if (status === 200) {
            callback(null, xhr.response); // This declared null here....(a)
        }
        else {
            callback(status);
            // Throw my defined error where the error occurs
            throw err1;
        }
    }
    // err1 is "caught" here
    catch(err1){
        var myownError = document.getElementById("errormessage");
        // Writes the error message with a link to the requested url
        myownError.innerHTML = "Unable to connect to the <a href=\"https://jsonplaceholder.typicode.com/\">url</a>";
    }
    };
    xhr.send();
    };

    // Function called first to get text
    getJSON('https://jsonplaceholder.typicode.com/todos', function(err, data) {
    if (err != null) { // (a)...Is what is being tested here
            alert('Something went wrong: ' + err);
    }
    else {
        // Finds id in DOM
        const aside1 = document.getElementById("todo1");
        // "Replaces" <p> tag text with title from that particular index under jsonplaceholder.typicode.com/todos
        aside1.innerHTML = data[1].title;

        // Repeat for the other <p> tags in the aside
        const aside2 = document.getElementById("todo2");
        aside2.innerHTML = data[6].title;

        const aside3 = document.getElementById("todo3");
        aside3.innerHTML = data[10].title;

        const aside4 = document.getElementById("todo4");
        // Can choose different indexes, chose these based on length
        aside4.innerHTML = data[15].title;

        const aside5 = document.getElementById("todo5");
        aside5.innerHTML = data[18].title;
    }
    });

    // Function called again to get images
    getJSON('https://jsonplaceholder.typicode.com/photos', function(err, data) {
        // Did not need if/else statement to check for same error
        
        // Finds id in DOM (they are in a span)
        const firstPhoto = document.getElementById("first");
        // Creates an <img /> tag with image and title taken from jsonplaceholder.typicode.com/photos
        firstPhoto.innerHTML = "<img src=\"" + data[99].url + "\" title=\"" + data[99].title + "\" />";

        // Repeat for the other spans to add 4 photos
        const secondPhoto = document.getElementById("second");
        secondPhoto.innerHTML = "<img src=\"" + data[0].url + "\" title=\"" + data[0].title + "\" />";

        const thirdPhoto = document.getElementById("third");
        thirdPhoto.innerHTML = "<img src=\"" + data[2].url + "\" title=\"" + data[2].title + "\" />";

        const fourthPhoto = document.getElementById("fourth");
        fourthPhoto.innerHTML = "<img src=\"" + data[95].url + "\" title=\"" + data[95].title + "\" />";
    });