let fname = document.getElementByID("fname");
let lname = document.getElementByID("lname");

alert(fname.value);
fname.value = "Thomas";

let radio_html = document.getElementByID("html");
let radio_css = document.getElementByID("css");
let radio_js = document.getElementByID("javascript");

let check_idk = document.getElementByID("checkbox_idk");
let check_vocational = document.getElementById("checkbox_vocational");
let check_college = document.getElementById("checkbox_college");
let check_military = document.getElementById("checkbox_military");

check_idk.checked = true; 
alert(check_vocational.checked);

