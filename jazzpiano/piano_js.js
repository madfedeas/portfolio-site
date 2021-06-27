/*----------------------------------------------------------------------------------------------
Author: Madison Federin-Easley
Date: 6/25/2021
Revision no. 6.0
------------------------------------------------------------------------------------------------*/

// Declare global variables
let globalRoot = "";
let oldRootBtn = "";
let oldExtBtn = "";
let oldSclBtn = "";
// displayKeys is the second piano on the page, where the buttons change value/color
const displayKeys = document.forms[3];
// Empty array to store note values to make a scale
let oldScale = [];
// Empty object to store note values and piano keys names that user selects
let oldRootExts = {};

/*************************************************************************************************
chooseRoot - user clicks root key on top keyboard, which is saved and displayed in bottom keyboard
** Inputs: root (this.value of button), note (this.id of button)
** Outputs: None
**************************************************************************************************/
const chooseRoot = (root, note) => {
    // Removes class (background color) from button of previously selected root
    if (oldRootBtn !== ""){
        document.getElementById(oldRootBtn).classList.remove("rootbtn");
    }
    // Adds the class/background to the newly selected button
    document.getElementById(note).classList.add("rootbtn");
    // Sets the global variable
    globalRoot = root;
    // Loop through the array of the old root and its extensions
    for (let val in oldRootExts){
        // And loops through the lower keyboard
        for (let key = 0; key < displayKeys.length; key++){
            // First removes all instances of class scl from the lower keyboard
            // A new root will have different notes in its scales
            displayKeys.elements[key].classList.remove("scl");
            // When the value in the array matches a value on the lower keyboard
            if (displayKeys.elements[key].value == val){
                // Reset to the original button text and removes any root or extension classes (colors)
                displayKeys.elements[key].innerText = oldRootExts[val];
                displayKeys.elements[key].classList.remove("root");
                displayKeys.elements[key].classList.remove("ext");
            }
        }
    }
    // Removes class (background color) from previously selected extension and scale buttons
    if (oldExtBtn !== ""){
        document.getElementById(oldExtBtn).classList.remove("extbtn");
    }
    if (oldSclBtn !== ""){
        document.getElementById(oldSclBtn).classList.remove("sclbtn");
    }
    // Resets the object and array once all the keys have been reverted to normal
    oldRootsExts = {};
    oldScale = [];
    // Looping through lower keyboard/third form (which would be index 2 in the webpage)
    for (let i = 0; i < displayKeys.length; i++){
        // Values 1-12 match those of the upper keyboard
        if (displayKeys.elements[i].value == globalRoot && !displayKeys.elements[i].innerText.includes("Root")){
            // Saves ext value and original text to object so buttons can be reset (as seen above)
            oldRootExts[root] = displayKeys.elements[i].innerText;
            // Adds word "Root" to button on new line
            // Won't print "Root" if it's already present (second condition in if statement)
            displayKeys.elements[i].innerText += "\nRoot";
            // Adds class that turns text (brighter) green and bolds
            displayKeys.elements[i].classList.add("root");
        }
    }
    // Saves id of selected button to global variable
    oldRootBtn = note;
}

/*************************************************************************************************
chooseExtension - user chooses extension, which is printed and displayed in bottom keyboard
** Inputs: note (this.value of button), and ext (this.id) of button
** Outputs: None
**************************************************************************************************/
const chooseExtension = (note, ext) => {
    // Removes class (background color) from button of previously selected extension
    if (oldExtBtn !== ""){
        document.getElementById(oldExtBtn).classList.remove("extbtn");
    }
    // Adds the class/background to the newly selected button
    document.getElementById(ext).classList.add("extbtn");

    // window makes dynamic variables, does the math adding number of half steps from root
    // parseFloat converting the values (strings) into numbers
    // Variable name has prefix new, then the name of the extension (ex. newmaj3)
    window['new'+ext] = parseFloat(globalRoot) + parseFloat(note);

    // Looping through lower keyboard/third form (which would be forms index 2 in the webpage)
    for (let j = 0; j < displayKeys.length; j++){
        // Whatever value was calculated, find the matching one in the lower keyboard buttons
        if (displayKeys.elements[j].value == window['new'+ext] && !displayKeys.elements[j].innerText.includes(ext)){
            // Adds ext value and original text to array
            oldRootExts[window['new'+ext]] = displayKeys.elements[j].innerText;
            // Adds the extension name to button on new line, class turns text red and bolds
            // Won't print name if it's already present (second condition in if statement)
            displayKeys.elements[j].innerText += "\n" + ext;
            displayKeys.elements[j].classList.add("ext");
        }
    }
    // Saves id of selected button to global variable
    oldExtBtn = ext;
}

/*************************************************************************************************
chooseScale - user chooses scale based on root key, erases previously chosen scale
** Inputs: choice (this.value of button)
** Outputs: None
**************************************************************************************************/
const chooseScale = (choice) => {
    // Start by removing class (background color) from button of previously selected scale
    if (oldSclBtn !== ""){
        document.getElementById(oldSclBtn).classList.remove("sclbtn");
    }
    // Adds the class/background color to the newly selected scale button
    document.getElementById(choice).classList.add("sclbtn");
    // Removes all previous class instances of scl so new scale can be displayed
    for (let m = 0; m < displayKeys.length; m++){
        displayKeys.elements[m].classList.remove("scl");
    }

    let newScale = [];
    numRoot = parseFloat(globalRoot);
    // Adds root (type = number) to first element in array
    newScale.push(numRoot);
    switch (choice){
        case "major" :
            // Adds the half steps from the root for the major scale into the array
            newScale.push(numRoot+2,numRoot+4,numRoot+5,numRoot+7,numRoot+9,numRoot+11,numRoot+12);
            break;
        case "nmin" : //2 min3 4 5 b13 b7
            newScale.push(numRoot+2,numRoot+3,numRoot+5,numRoot+7,numRoot+8,numRoot+10,numRoot+12);
            break;
        case "hmin" : //2 min3 4 5 b13 maj7
            newScale.push(numRoot+2,numRoot+3,numRoot+5,numRoot+7,numRoot+8,numRoot+11,numRoot+12);
            break;
        case "mmin" : //2 min3 4 5 6 maj7
            newScale.push(numRoot+2,numRoot+3,numRoot+5,numRoot+7,numRoot+9,numRoot+11,numRoot+12);
            break;
        case "wh" : //2 min3 4 b5 #5 6 maj7
            newScale.push(numRoot+2,numRoot+3,numRoot+5,numRoot+6,numRoot+8,numRoot+9,numRoot+11,numRoot+12);
            break;
        case "hw" : //b9 min3 maj3 b5 5 6 b7
            newScale.push(numRoot+1,numRoot+3,numRoot+4,numRoot+6,numRoot+7,numRoot+9,numRoot+10,numRoot+12);
            break;
        case "wt" : //2 maj3 b5 #5 b7
            newScale.push(numRoot+2,numRoot+4,numRoot+6,numRoot+8,numRoot+10,numRoot+12);
            break;  
        case "alt" : //b9 min3 maj3 b5 #5 b7
            newScale.push(numRoot+1,numRoot+3,numRoot+4,numRoot+6,numRoot+8,numRoot+10,numRoot+12);
            break;
        case "dor": //2 min3 4 5 6 b7
            newScale.push(numRoot+2,numRoot+3,numRoot+5,numRoot+7,numRoot+9,numRoot+10,numRoot+12);
            break;
        case "phr" : //b9 min3 4 b5 #5 b7
            newScale.push(numRoot+1,numRoot+3,numRoot+5,numRoot+7,numRoot+8,numRoot+10,numRoot+12);
            break;    
        case "lyd" : //2 maj3 b5 5 6 maj7
            newScale.push(numRoot+2,numRoot+4,numRoot+6,numRoot+7,numRoot+9,numRoot+11,numRoot+12);
            break; 
        case "mix" : //2 maj3 4 5 6 b7
            newScale.push(numRoot+2,numRoot+4,numRoot+5,numRoot+7,numRoot+9,numRoot+10,numRoot+12);
            break;                      
        case "aeo" : //2 min3 4 5 #5 b7
            newScale.push(numRoot+2,numRoot+3,numRoot+5,numRoot+7,numRoot+8,numRoot+10,numRoot+12);
            break;  
        case "loc" : //b9 min3 4 b5 #5 b7
            newScale.push(numRoot+1,numRoot+3,numRoot+5,numRoot+6,numRoot+8,numRoot+10,numRoot+12);
            break;
        default:
            break;
    }
    // Double for-loop first loops through newScale array
    for (k in newScale){
        // Then loops through lower keyboard
        for (let l = 0; l < displayKeys.length; l++){
            // If a value in the array matches a value on the keyboard (one of the notes in the scale)
            if (document.forms[3].elements[l].value == newScale[k]){
                // Adds class that turns that note name a different color and bolds the text
                displayKeys.elements[l].classList.add("scl");
            }
        }
    }
    // Sets current scale (newScale) to variable oldScale (see beginning of function)
    oldScale = newScale;
    // Saves id of selected button to global variable
    oldSclBtn = choice;
}

/*************************************************************************************************
playAudio - plays an audio file when button is pressed
** Inputs: id (this.id of button)
** Outputs: None
**************************************************************************************************/
const playAudio = (id) => {
    const audioDir = ".\\PianoAudio\\";
    let audioFile = audioDir.concat(id, ".mp3");
    let e = document.createElement("audio");

    if (e.canPlayType("audio/mp3")){
        e.setAttribute("src", audioFile);
        e.setAttribute("autoplay", "autoplay");
        document.body.appendChild(e);
    }
}

/*************************************************************************************************
resetPage - reloads the page when you want to pick a new root or scale
** Inputs: None
** Outputs: None
**************************************************************************************************/
const resetPage = () => window.location.reload();