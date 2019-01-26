//var element = document.querySelector('p').fontFamily="'Bree Serif', serif";

function changeStyle() {

	let style = document.querySelector("p").style.fontWeight;
	if (style == "") {
		document.querySelector("p").style.fontWeight = "bold";
	} else if(style == "bold")  {
		document.querySelector("p").style.fontWeight = "";
	}
}


	function changeFontFamily(){
		//let font = document.querySelector("#fonts").value;
		//if (font===""){
		document.querySelector("p").style.fontFamily = "Arial";	
		document.querySelector("p").style.fontFamily = "Verdana";
	//} else if (front==="Arial"){
	//	document.querySelector("p").style.fontFamily = "Verdana";
	}
function changeItalic() {

	let style = document.querySelector("p").style.fontStyle;
	if (style === "") {
		document.querySelector("p").style.fontStyle = "italic";
	} else if(style === "italic")  {
		document.querySelector("p").style.fontStyle = "";
	}
}

function changeUnderlined() {
	let style = document.querySelector("p").style.textDecoration;
	if (style==="") {
		document.querySelector("p").style.textDecoration="underline overline";
	} else if (style==="underline overline") {
		document.querySelector("p").style.textDecoration="";

	}
}
function changeFontSize (){
		document.querySelector("p").style.fontSize = "25px";
		document.querySelector("p").style.fontSize= "50px";
		document.querySelector("p").style.fontSize = "60px";

	}


//function disableBtn() {


//function enableBtn() {
//    document.getElementByclass(".myButton").disabled = false;

