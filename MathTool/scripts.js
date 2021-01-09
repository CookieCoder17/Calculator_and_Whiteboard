var visibleSwitchb = document.getElementById("Wboard");
var visibleSwitcha = document.getElementById("outerbox");
var historyList = document.getElementById("historybox");
var visibleSwitchc = document.getElementById("Whiteboard");
function clickHere1() {
		visibleSwitcha.style.display = "block";
		visibleSwitchb.style.display = "none";
		visibleSwitchc.style.display = "none";
}
function clickHere2() {
		visibleSwitchb.style.display = "block";
		visibleSwitcha.style.display = "none";
		visibleSwitchc.style.display = "block";
}
function insert(num){
	document.getElementById('output1').value = document.getElementById("output1").value + num;
}
function clean(){
	document.getElementById('output1').value = "";
}
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

function penup(){
	painting = false;
	master.beginPath();
}
function pendown(){
	painting = true;
}
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
function redmarker(){
	master.strokeStyle = "red";
}
function bluemarker(){
	master.strokeStyle = "blue";
}
function greenmarker(){
	master.strokeStyle = "green";
}
function blackmarker(){
	master.strokeStyle = "black";
}
function whitemarker(){
	master.strokeStyle = "white";
	master.lineCap = "round";
	master.lineWidth = 8;
}
function boarderaser(){
	master.clearRect(0,0, canvas.width,canvas.height);
}
canvas.addEventListener("mousedown", pendown);
canvas.addEventListener("mouseup", penup);
// For Download Image
function downloadIMG() {
	var imageName = prompt("Please input the Image Name");
	var canvasDataURL = canvas.toDataURL();
	var a = document.createElement('a');
	a.href = canvasDataURL;
	a.download = imageName || 'sample';
        a.click();
}
