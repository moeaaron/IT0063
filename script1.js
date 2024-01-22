// JavaScript Code

 

// script1.js

 

function function_change_color() {
  const elementsToChange = document.querySelectorAll('body *');

  elementsToChange.forEach(element => {
    element.style.color = 'gold'; // Text color
    element.style.backgroundColor = 'green'; // Inside border color
    element.style.borderColor = 'gold'; // Border color
  });
}
