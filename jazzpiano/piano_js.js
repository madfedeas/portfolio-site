/*----------------------------------------------------------------------------------------------
Author: Madison Federin-Easley
Date: 1/19/2021
Revision no. 5.0
------------------------------------------------------------------------------------------------*/

// Declare global variables
let globalRoot;
let displaykeyboard = document.forms[3];
let oldScale = [];

/*************************************************************************************************
chooseRoot - user clicks root key on top keyboard, which is saved and displayed in bottom keyboard
** Inputs: root (this.value of button)
** Outputs: None
**************************************************************************************************/
function chooseRoot(root){
    // Sets global variable
    globalRoot = root;
    // Looping through lower keyboard/third form (which would be index 2 in the webpage)
    for (let i = 0; i < displaykeyboard.length; i++){
        // Values 1-12 match those of the upper keyboard
        if (displaykeyboard.elements[i].value == globalRoot){
            // Adds word "root" to button on new line
            displaykeyboard.elements[i].innerText += "\nRoot";
            // Adds class that turns text (brighter) green
            displaykeyboard.elements[i].classList.add("root");
        }
    }
}

/*************************************************************************************************
chooseExtension - user chooses extension, which is printed and displayed in bottom keyboard
** Inputs: note (this.value of button), and ext (this.id) of button
** Outputs: None
**************************************************************************************************/
function chooseExtension(note,ext){
    // window makes dynamic variables, does the math adding number of half steps from root
    // parseFloat converting the values (strings) into numbers
    // Variable name has prefix new, then the name of the extension (ex. newmaj3)
    window['new'+ext] = parseFloat(globalRoot) + parseFloat(note);
    // Looping through lower keyboard/third form (which would be forms index 2 in the webpage)
    for (let j = 0; j < displaykeyboard.length; j++){
        // Whatever value was calculated, find the matching one in the lower keyboard buttons
        if (displaykeyboard.elements[j].value == window['new'+ext]){
            // Adds the extension name to button on new line, class turns text red
            displaykeyboard.elements[j].innerText += "\n" + ext;
            displaykeyboard.elements[j].classList.add("ext");
        }
    }
}

/*************************************************************************************************
chooseScale - user chooses scale based on root key, erases previously chosen scale
** Inputs: choice (this.value of button)
** Outputs: None
**************************************************************************************************/
function chooseScale(choice){
    // Start by going back to previously picked scale
    for (m in oldScale){
        for (let n = 0; n < displaykeyboard.length; n++){
            // Loops through bottom keyboard and removes all class instances of scl
            // See below for when/why class is added to buttons
            displaykeyboard.elements[n].classList.remove("scl");
        }
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
    // Double for loop first loops through newScale array
    for (k in newScale){
        // Then loops through lower keyboard
        for (let l = 0; l < displaykeyboard.length; l++){
            // If a value in the array matches a value on the keyboard (one of the notes in the scale)
            if (document.forms[3].elements[l].value == newScale[k]){
                // Adds class that turns that note name a different color (magenta-ish) and bolds the text
                displaykeyboard.elements[l].classList.add("scl");
            }
        }
    }
    // Sets current scale (newScale) to variable oldScale (see beginning of function)
    oldScale = newScale;
}

/*************************************************************************************************
resetPage - reloads the page when you want to pick a new root or scale
** Inputs: None
** Outputs: None
**************************************************************************************************/
const resetPage = () => window.location.reload();