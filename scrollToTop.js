// Get the button:
let mybutton = document.getElementById("mainPageBtn");


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// For å scrolle til produkter-page
function scrollToProducts() {
  const element = document.getElementById("produktSection");
  element.scrollIntoView({ behavior: 'smooth' });
}
