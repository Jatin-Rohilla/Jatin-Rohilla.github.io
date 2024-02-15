let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});


function openResume() {
  window.open(
    'https://drive.google.com/file/d/12HUHU4pv8N1hXYGmdXys3VacGJmQQdqm/view?usp=sharing',
    '_blank'
  );
}

function paddingFunction() {
  let x = doccument.getElementById("home")
  x.style.padding = "100px"
}

document.querySelector("form").addEventListener("submit", saveFile );



function saveFile(e) {

  e.preventDefault()


  let Formdata = JSON.parse(localStorage.getItem("portfolioData")) || []

  let name=document.getElementById("fname").value
  let email=document.getElementById("email").value
  let text=document.getElementById("subject").value
  
  let data = {
    "name": name,
    "email": email,
    "text": text
  }
  Formdata.push(data)
  localStorage.setItem("portfolioData", JSON.stringify(Formdata))
}

const sections = document.querySelectorAll("#home, #about, #skills, #projects, #github, #contact, #footer");


// Get all the navigation links
const navScroll = document.querySelectorAll('#nav-bar a');

// Function to highlight the current section in the navigation menu
function highlightNavLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navScroll.forEach(link => link.classList.remove('active'));
    navScroll[index].classList.add('active');
}

// Add event listener for scroll
window.addEventListener('scroll', highlightNavLink);


