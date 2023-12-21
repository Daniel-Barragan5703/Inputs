

let fname1 = document.getElementById("fname");
let lname1 = document.getElementById("lname");


let button_check = document.getElementById("btn_check");
button_check.addEventListener("click", checkAnswers);

let radio_html = document.getElementById("html");
let radio_css = document.getElementById("css");
let radio_js = document.getElementById("java");

let check_idk = document.getElementById("checkbox_idk");
let check_vocational = document.getElementById("checkbox_vocational");
let check_college = document.getElementById("checkbox_college");
let check_military = document.getElementById("checkbox_military");


function checkAnswers() {


  alert(fname1.value);
alert(lname1.value);


  if (radio_html.checked == true) {
    alert("Html is your favorite");
  }
  if (radio_css.checked == true) {
    alert("CSS is your favorite");
  }
  if (radio_js.checked == true) {
    alert("Javascript is your favorite");
  }

  if (select_grade_level.value == "none")
{
alert("selected none");
}
if (select_grade_level.value == "Freshmen")
{
alert("selected freshmen");
}
if (select_grade_level.value == "Sophmore")
{
alert("selected sophmore");
}

if (select_grade_level.value == "Junior")
{
alert("selected junior");
}

if (select_grade_level.value == "Senior")
{
alert("selected senior");
}

if (check_idk.checked == true)
{
  alert("I have no idea");
}

if (check_vocational.checked == true)
{
  alert("Vocational is planned");
}

if (check_college.checked == true)
{
  alert("college is planned");
}

if (check_military.checked == true)
{
  alert("military is planned");
}

alert(text_age.textContent);

}

let select_grade_level = document.getElementById("Grade_level");

let slider_age = document.getElementById("my_slider");
let text_age = document.getElementById("text_age");

slider_age.addEventListener("input",update_slider_text);

function update_slider_text()
{
  text_age.textContent = "Age = " + slider_age.value;

}

