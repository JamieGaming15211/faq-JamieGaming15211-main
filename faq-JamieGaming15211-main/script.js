// declared a variable for the input
const question1 = document.querySelector("#question-1");

// attach an event listener to the input
question1.addEventListener("click", showHideAnswer1);

// defined a function that describes what should happen
// when the button is clicked
function showHideAnswer1() {
  const answer1 = document.querySelector("#answer-1");
  answer1.classList.toggle("closed-answer");
}

// declared a variable for the input
const question2 = document.querySelector("#question-2");

// attach an event listener to the input
question2.addEventListener("click", showHideAnswer2);

// defined a function that describes what should happen
// when the button is clicked
function showHideAnswer2() {
  const answer2 = document.querySelector("#answer-2");
  answer2.classList.toggle("closed-answer");
}

// declared a variable for the input
const question3 = document.querySelector("#question-3");

// attach an event listener to the input
question3.addEventListener("click", showHideAnswer3);

// defined a function that describes what should happen
// when the button is clicked
function showHideAnswer3() {
  const answer3 = document.querySelector("#answer-3");
  answer3.classList.toggle("closed-answer");
}

// declared a variable for the input
const question4 = document.querySelector("#question-4");

// attach an event listener to the input
question4.addEventListener("click", showHideAnswer4);

// defined a function that describes what should happen
// when the button is clicked
function showHideAnswer4() {
  const answer4 = document.querySelector("#answer-4");
  answer4.classList.toggle("closed-answer");
}

// declared a variable for the input
const question5 = document.querySelector("#question-5");

// attach an event listener to the input
question5.addEventListener("click", showHideAnswer5);

// defined a function that describes what should happen
// when the button is clicked
function showHideAnswer5() {
  const answer5 = document.querySelector("#answer-5");
  answer5.classList.toggle("closed-answer");
}
