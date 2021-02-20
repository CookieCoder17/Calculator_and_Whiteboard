// Elements from the html file
var visibleSwitchb = document.getElementById("Wboard");
var visibleSwitcha = document.getElementById("outerbox");
var historyList = document.getElementById("historybox");
var visibleSwitchc = document.getElementById("Whiteboard");

/**
 * Displays the calculator, and hides the whiteboard
 */
function clickHere1() {
		visibleSwitcha.style.display = "block";
		visibleSwitchb.style.display = "none";
		visibleSwitchc.style.display = "none";
}

/**
 * Displays the whiteboard, and hides the calculator
 */
function clickHere2() {
		visibleSwitchb.style.display = "block";
		visibleSwitcha.style.display = "none";
		visibleSwitchc.style.display = "block";
}

/**
 * Inserts an integer into the output screen of the calculator
 */
function insert(num){
	document.getElementById('output1').value = document.getElementById("output1").value + num;
}

/**
 * Clears the output screen of the calculator
 */
function clean(){
	document.getElementById('output1').value = "";
}

/**
 * Displays the calculation in both the whiteboard and the calculator
 */
function displayAns(){
	var ans = eval(document.getElementById("output1").value);
	document.getElementById("output1").value = ans;	
	document.getElementById("historybox").value = ans;
}

// For the Canvas 
var canvas = document.querySelector("#Whiteboard");
canvas.height = 450;
canvas.width =  1000;
var master = canvas.getContext('2d');
let painting = false;

/**
 * Starts a new path whenever the mouse is up
 */
function penup(){
	painting = false;
	master.beginPath();
}

/**
 * Starts painting when the mouse is down
 */
function pendown(){
	painting = true;
}

/**
 * Displays the drawing
 */
function drawingoverboard(event){
	if (!painting){
	 return;
	}
	master.lineWidth = 4;
	master.lineCap = "butt";
	var x = event.clientX - 242;
	var y = event.clientY - 84;
	master.lineTo(x,y);
	master.stroke();
} 

/**
 * Changes the color to red
 */
function redmarker(){
	master.strokeStyle = "red";
}

/**
 * Changes the color to blue
 */
function bluemarker(){
	master.strokeStyle = "blue";
}

/**
 * Changes the color to green
 */
function greenmarker(){
	master.strokeStyle = "green";
}

/**
 * Changes the color to black
 */
function blackmarker(){
	master.strokeStyle = "black";
}

/**
 * Changes the color to white
 */
function whitemarker(){
	master.strokeStyle = "white";
	master.lineCap = "round";
	master.lineWidth = 8;
}

/**
 * Earses the whole whiteboard
 */
function boarderaser(){
	master.clearRect(0,0, canvas.width,canvas.height);
}
// Event Listeners
canvas.addEventListener("mousedown", pendown);
canvas.addEventListener("mouseup", penup);

/**
 * Downloads the sketch drawn into the whiteboard as a png file
 * Prompts the user to input a name for the file 
 */ 
function downloadIMG() {
	var imageName = prompt("Please input the Image Name");
	var canvasDataURL = canvas.toDataURL();
	var a = document.createElement('a');
	a.href = canvasDataURL;
	a.download = imageName || 'sample';
        a.click();
}
