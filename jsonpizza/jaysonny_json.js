/*----------------------------------------------------------------------------------------------
Author: Madison Federin-Easley
CSE-41208 Introduction to JavaScript
Date: 2/15/2021
Revision no. 5.1
------------------------------------------------------------------------------------------------*/

// JSON string provided
const json = '{ "menu": { "slice of pizza": "2.00", "toppings":' +
            '{ "pepperoni": ".25", "meatballs": ".35", "mushrooms": ".40", "olives": ".20"},' +
        '"sides": { "potato salad": "1.25", "hummus": "2.50", "caesar salad": "3.50", "garden salad": "2.25"},' +
        '"drinks": { "soda": { "small": "1.95", "medium": "2.20", "large": "2.50"},' +
            '"juice": "2.00", "water": "1.25" } } }';

    // Declares constant menu to be made from JSON string
    const myMenuObject = JSON.parse(json);
    const menu = myMenuObject.menu;
    // Blank string to be filled with text after cycling through menu object
    let content = "";

    for (var i in menu) {
        if (i === "slice of pizza"){
            // Adds text to content that includes HTML <label> and <select>
            // Separate data-* set to item price
            content += "<label for=\"" + i + "\">" +  i + ": $" + menu[i] +
            " <select id=\"" + i + "\" data-price=\"" + menu[i] + "\" name=\"" + i + "\">" +
            // Option values saved as the quantity of slices
            "<option value=\"none\">--</option>" +
            "<option value=\"1\">1</option>" +
            "<option value=\"2\">2</option>" +
            "<option value=\"3\">3</option>" +
            "<option value=\"4\">4</option> </select> </label> <br>";
        }
        else {
            // Only slice of pizza has an accompanying price, prints headers for each menu section
            content += "<h4>" + i + ":</h4>";
        }
        if (i === "toppings"){
            for (var j in menu[i]){
                // Adds checkboxes to content with the names of the toppings as name and id, values are price of toppings
                content += "<label for=\"" + j + "\"><input id=\"" + j + "\" type=\"checkbox\" name=\"" + i + "\" value=\"" + menu[i][j] + "\" />" +
                // Also adds text that shows the topping name and price
                j + ": $0" + menu[i][j] + "</label> ";
            }
        }
        else if (i === "sides"){
            for (j in menu[i]){
                content += "<label for=\"" + j + "\">" + j + ": $" + menu[i][j] +
                " <select id=\"" + j + "\" data-price=\"" + menu[i][j] + "\" name=\"" + j + "\">" +
                "<option value=\"none\">--</option>" +
                "<option value=\"1\">1</option>" +
                "<option value=\"2\">2</option>" +
                "<option value=\"3\">3</option>" +
                "<option value=\"4\">4</option> </select></label> <br>";
            }
        }
        else if (i ==="drinks"){
            for (j in menu[i]){
                if (j !== "soda"){
                    // Two different If statements for soda and other drinks
                    //S aving drink name, quantity order (value) and price under data-price
                    content += "<br><label for=\"" + menu[i][j] + "\">" + j + ": $" + menu[i][j] +
                    " <select id=\" " + j + "\"data-price=\"" + menu[i][j] + "\" name=\"" + j + "\">" +
                    "<option value=\"none\">--</option>" +
                    "<option value=\"1\">1</option>" +
                    "<option value=\"2\">2</option>" +
                    "<option value=\"3\">3</option>" +
                    "<option value=\"4\">4</option> </select></label>";
                }
                else if (j === "soda"){
                    // Soda doesn't have a price, its sizes do, so only need to print soda name and quantity
                    content += "<label for=\"" + j + "\">" + j +
                    ": <select id=\"" + j + "\" name=\"" + j + "\">" +
                    "<option value=\"none\">--</option>" +
                    "<option value=\"1\">1</option>" +
                    "<option value=\"2\">2</option>" +
                    "<option value=\"3\">3</option>" +
                    "<option value=\"4\">4</option> </select></label> <br>";
                    //
                    for (var k in menu[i][j]){
                        content += "<label for=\"" + k + "\"><input id=\"" + k + "\" type=\"radio\" name=\"soda size\" value=\"" + menu[i][j][k] + "\" />" +
                        k + ": $" + menu[i][j][k] + "</label> ";
                    }
                }
            }
        }
    }
    // Prints two different buttons, one for saving the order (Q2), the other for printing it (Q3)
    content += "<br><br><button type=\"button\" value=\"Save Order\" onclick=\"saveOrder()\">Save Order</button>" +
    "<br><br><button type=\"submit\" value=\"Your Order\" onclick=\"showOrder()\">Your Order</button>"
    // Content printed inside <form> with id="fullMenu", entire form written via JavaScript
    document.getElementById("fullMenu").innerHTML = content;

/*************************************************************************************************
saveOrder - cycles through form and saves selected values and id's in empty object,
object is then stored as a JSON string in local storage
** Inputs: None
** Outputs: None
**************************************************************************************************/
    var saveOrder = () => {
        // Declares blank number and array variables to be added to
        let toppingCount = 0;
        let myChoicesObject = {};

        // Cycling through full length of form printed above
        for (let a=0; a<document.forms[0].length; a++){
            if (document.forms[0].elements[a].localName === "select" && document.forms[0].elements[a].name !== "soda"){
                // Finds all dropdown options that are marked with a quantity ordered (for pizza slice, sides, drinks)
                if (document.forms[0].elements[a].value !== "none"){
                    // Saves the name, value (quantity ordered) and dataset.price (price) in three separate variables
                    let myKey = document.forms[0].elements[a].name;
                    let myValue = document.forms[0].elements[a].value;
                    let myPrice = document.forms[0].elements[a].dataset.price;
                    // Adds variables to myChoicesObject as new properties, use name + additional key words for the property name
                    myChoicesObject["total " + myKey + " ordered"] = myValue;
                    myChoicesObject[myKey + " price"] = myPrice;
                }
            }
            // Separate else-if statement for soda
            else if (document.forms[0].elements[a].localName === "select" && document.forms[0].elements[a].name === "soda"){
                if (document.forms[0].elements[a].value !== "none"){
                    // Soda does not have a price, so does not save a variable for price
                    let myKey = document.forms[0].elements[a].name;
                    let myValue = document.forms[0].elements[a].value;
                    // Adds only one property to myChoicesObject
                    myChoicesObject["total " + myKey + " ordered"] = myValue;
                }
            }
            else if (document.forms[0].elements[a].type === "checkbox" && document.getElementsByName("slice of pizza")[0].value !== "none"){
                // Will not check toppings if user didn't order pizza slice, name[0] finds the <input> with name="slice of pizza" and checks value
                if (document.forms[0].elements[a].checked === true){
                    // Increments each time a topping is checked, should increment from 1-4 toppings depending on how many selected
                    toppingCount++;
                    let myKey = document.forms[0].elements[a].name;
                    let myPrice = document.forms[0].elements[a].value;
                    let myChoice = document.forms[0].elements[a].id;
                    // Name for topping property includes current value of toppingCount
                    myChoicesObject[myKey + " " + toppingCount + " choice"] = myChoice;
                    myChoicesObject[myKey + " " + toppingCount + " price"] = myPrice;
                }
            }
            else if (document.forms[0].elements[a].type === "radio" && document.getElementsByName("soda")[0].value !== "none"){
                // Will not print size if user didn't order soda, name[0] finds the <input> with name="soda" and checks value
                if (document.forms[0].elements[a].checked === true){
                    let myKey = document.forms[0].elements[a].name;
                    let myPrice = document.forms[0].elements[a].value;
                    let myChoice = document.forms[0].elements[a].id;
                    myChoicesObject[myKey + " choice"] = myChoice;
                    myChoicesObject[myKey + " price"] = myPrice;
                }
            }
        }
        // Stringify the final object, saves into local storage with key "Full Order"
        localStorage.setItem("Full Order", JSON.stringify(myChoicesObject));
    }
/*************************************************************************************************
End function saveOrder()
*************************************************************************************************/

/*************************************************************************************************
showOrder - takes JSON string in local storage and turns into object, prints keys and
values in different <p> tags> for pizza order, sides order, and drinks order, and calculates the
total price of the order
** Inputs: None
** Outputs: None
**************************************************************************************************/
    var showOrder = () => {
        // Prevents form from submitting, so selected will print and stay on the page
        event.preventDefault();

        // Creating empty variables to fill with text
        let pizSelected = "";
        let sideSelected = "";
        let bevSelected = "";
        // Creating empty arrays and variable to fill with values (totals and prices)
        let pizCost = [];
        let sidesCost = [];
        let bevCost = [];
        let myTotal = 0;

        // Take string stored in local storage, turns into object
        var myOrder = JSON.parse(localStorage.getItem("Full Order"));
        // Cycle through the object with values for the order
        for (var y in myOrder){
            // Put all the data about pizza and toppings in <p> tag for pizza
            if (y.includes("pizza") || y.includes("topping")){
                if (y.includes("total")){
                    // Adds key and value to text to be printed
                    pizSelected += y + ": " + myOrder[y] + "<br>";
                    // Adds value to the end of the array (in this case, total slices)
                    // But first turns that value into a number
                    pizCost.push(parseFloat(myOrder[y]));
                }
                else if (y.includes("choice")){
                    pizSelected += y + ": " + myOrder[y] + "<br>";
                }
                else if (y.includes("price")){
                    // Adds number (price of pizza slice or toppings) to array
                    pizCost.push(parseFloat(myOrder[y]));
                }
            } // Put all the data about sides in the <p> tag for sides
            else if (y.includes("salad") || y.includes("hummus")){
                if (y.includes("total")){
                    sideSelected += y + ": " + myOrder[y] + "<br>";
                    sidesCost.push(parseFloat(myOrder[y]));
                }
                else if (y.includes("price")){
                    sidesCost.push(parseFloat(myOrder[y]));
                }
            } // Put all the data about juice, water, or soda in the <p> tag for drinks
            else if (y.includes("juice") || y.includes("water") || y.includes("soda")){
                if (y.includes("total")){
                    bevSelected += y + ": " + myOrder[y] + "<br>";
                    bevCost.push(parseFloat(myOrder[y]));
                }
                else if (y.includes("choice")){
                    bevSelected += y + ": " + myOrder[y] + "<br>";
                }
                else if (y.includes("price")){
                    bevCost.push(parseFloat(myOrder[y]));
                }
            }
        }
        // Starting after the first index (which will be the total number of slices ordered)
        for (let x=1; x < pizCost.length; x++){
            // Multiply the total number of slices (pizCost[0]) by price of slice and price of each topping
            myTotal += pizCost[0]*pizCost[x];
        }
        // Steps up by 2 each loop iteration, stops before last index (length-1)
        for (let x=0; x < sidesCost.length-1; x=x+2){
            // Multiplies pairs, totals*prices
            myTotal += sidesCost[x]*sidesCost[x+1];
        }
        // Same as sides array
        for (let x=0; x < bevCost.length-1; x=x+2){
            myTotal += bevCost[x]*bevCost[x+1];
        }
        // Prints the text saved above in different <p> tags, separating by pizza, side orders, and drinks
        document.getElementById("yourpizzaorder").innerHTML = pizSelected;
        document.getElementById("yoursideorder").innerHTML = sideSelected;
        document.getElementById("yourbevorder").innerHTML = bevSelected;
        // Printing the total cost of order in the last paragraph with 2 decimal places
        document.getElementById("yourtotal").innerHTML = "<span id=\"money\">Your total is $" + myTotal.toFixed(2) + "</span>";
    }
/*************************************************************************************************
End function saveOrder()
*************************************************************************************************/