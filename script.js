//Clear the output screen
function clr() {
    document.getElementById("output-screen").value = "";
}

//Delete the last character
function del() {
    let currentValue = document.getElementById("output-screen").value;
    document.getElementById("output-screen").value = currentValue.slice(0, -1);
}

//Display clicked button value
function display(value) {
    document.getElementById("output-screen").value += value;
}

//Calculate the result and display it on the screen
function calculate() {
    let expression = document.getElementById("output-screen").value;
    try {
        let result = eval(expression);
        document.getElementById("output-screen").value = result;
    } catch (error) {
        document.getElementById("output-screen").value = "Error";
    }
}