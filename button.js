//menu open and close function
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


//dot container slider js

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll("nav .container ul li");
const main = document.querySelector(".mainContainer");

main.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const scrollPosition = main.scrollTop
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollPosition >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute("id")
    }


  })
  navLi.forEach(li => {
    li.classList.remove('active');
    if (li.classList.contains(current)) {
      li.classList.add('active')
    }
  })
})

})



//slider
const delay = 3000; //ms

const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
  if (next) {
    current += current > maxLeft ? -100 : current * -1;
  } else {
    current = current < 0 ? current + 100 : maxLeft;
  }

  slides.style.left = current + "%";
}

let autoChange = setInterval(changeSlide, delay);
const restart = function() {
  clearInterval(autoChange);
  autoChange = setInterval(changeSlide, delay);
};

// Controls
document.querySelector(".next-slide").addEventListener("click", function() {
  changeSlide();
  restart();
});

document.querySelector(".prev-slide").addEventListener("click", function() {
  changeSlide(false);
  restart();
});
