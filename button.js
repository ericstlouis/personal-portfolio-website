const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll("nav .container ul li");
const main = document.querySelector(".mainContainer");

main.addEventListener('scroll', () => {
  let current ='';
  
sections.forEach(section => {
  const scrollPosition = main.scrollTop
  const sectionTop = section.offsetTop;
  const sectionHeight = section.clientHeight;
  if( scrollPosition >= (sectionTop - sectionHeight /3)) {
    current = section.getAttribute("id")
  }

  
})
navLi.forEach(li => {
  li.classList.remove('active');
  if(li.classList.contains(current)) {
    li.classList.add('active')
  }
})
})


function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
 






























// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelector(".menu").addEventListener('click', () => {
//         document.getElementById("sideNav").style.width = "100%";
//     })

//     document.querySelector(".menuExit").addEventListener('click', () => {
//         document.getElementById("sideNav").style.width = "0%";
//     })
// })
