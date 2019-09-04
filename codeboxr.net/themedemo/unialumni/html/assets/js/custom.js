"use strict";

jQuery(document).ready(function($){
    //your custom js code here

});


function myFunction() {
	var radio = document.getElementById("radio");
	radio.getElementsByClassName("col-12 col-sm-4")[2].style.display = "none";
	radio.getElementsByClassName("col-12 col-sm-4")[3].style.display = "";
}

