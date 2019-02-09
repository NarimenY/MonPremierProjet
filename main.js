$('.bold').click(function(){
	$("p").css('font-weight','bold')
	
})	
$('.italic').click(function(){
	//console.log("test")
	$("p").css('font-style','italic')
})
$('.underline').click(function(){
    //console.log("underline")
	$("p").css("text-decoration","underline")
})
$('#fonts').change(function(e){
	var x=e.currentTarget.value
	$('p').css('font-family',x)
})
$('#size').change(function(e){
	var x=e.currentTarget.value
	$('p').css('font-size',x)


})

/*($('p').css('font-weight')
})



/*

//var element = document.querySelector('p').fontFamily="'Bree Serif', serif"
$("p").click(function (){
//function changeStyle() {

	let css =Selector("p").css('font-Weight','')
	if (css == "") {
		Selector("p").css('font-Weight','bold');
	} else if(css == "bold")  {
		Selector("p").css('font-Weight','');
	}
});


	function changeFontFamily(){
		//let font = document.querySelector("#fonts").value;
		//if (font===""){
		Selector("p").css('fontFamily','Arial');	
		Selector("p").css('fontFamily','Verdana');
	//} else if (front==="Arial"){
	//	document.querySelector("p").style.fontFamily = "Verdana";
	}
function changeItalic() {

	let style =Selector("p").css('fontStyle','');
	if (style === "") {
		Selector("p").css('fontStyle','italic');
	} else if(style === "italic")  {
		Selector("p").css('fontStyle', "");
	}
}

function changeUnderlined() {
	let style = Selector("p").css.('extDecoration','');
	if (style==="") {
		Selector("p").css('textDecoration','underline overline');
	} else if (style==="underline overline") {
		Selector("p").css('textDecoration',"");

	}
}
function changeFontSize() {
	//sconsole.log(document.querySelector("#size").selectedIndex);
	if (Selector("#size").selectedIndex==0)
		{Selector("p").css('fontSize',"30px");}
	else
	if (Selector("#size").selectedIndex==1)
		{Selector("p").css('fontSize',"20px");}
	else if (Selector("#size").selectedIndex==2)
		{Selector("p").css('fontSize',"50px");}
	else
		{Selector("p").css('fontSize',"60px");}

	//}	
}	


	//document.querySelector("p").style.fontSize = "25px";
	//	document.querySelector("p").style.fontSize= "50px";
	//	document.querySelector("p").style.fontSize = "60px";




//function disableBtn() {


//function enableBtn() {
//    document.getElementByclass(".myButton").disabled = false;

*/