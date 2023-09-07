function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// const typed = new typed('p.section__text__p2',{
//   Strings:['Frontend Developer','Fullstack Developer','Web Designer'],
//   typeSpeed:100,
//   backSpeed:100,
//   backdelay:1000,
//   loop:true
// });
// scrollReveal({
//   distance:'80px',
//   duration:2000,
//   delay:200
// });

// scrollReveal().reveal('.section__pic-container',{origin:'bottom'});