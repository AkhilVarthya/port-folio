
const slideButton = document.getElementById('slide');
const sections = document.querySelectorAll('section');
let currentIndex = 0;

slideButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % sections.length;

  sections.forEach((section, index) => {
    const offset = (index - currentIndex + sections.length) % sections.length;
    section.style.transform = `translateX(${offset * 100}%)`;
  });
});



// const sections = document.querySelectorAll('section');
const headerLinks = document.querySelectorAll('.header-links');

headerLinks.forEach((link, index) => {
  if (index<3){
  link.addEventListener('click', () => {
    sections.forEach((section, sectionIndex) => {
      if (sectionIndex === index) {
        section.style.transform = `translateX(0)`;
      } else {
        const offset = (sectionIndex - index + sections.length) % sections.length;
        section.style.transform = `translateX(${offset * 100}%)`;
      }
    });
  });
}
});


// clicking icons to show sections

const icons = document.querySelectorAll(".icon");

  icons.forEach((icon, index) => {
    if (index<3){

      icon.addEventListener("click", () => {
        sections.forEach((section, sectionIndex) => {
           if (sectionIndex === index) {
          section.style.transform = `translateX(0)`;
        } else {
          const offset = (sectionIndex - index + sections.length) % sections.length;
          section.style.transform = `translateX(${offset * 100}%)`;
        }
      })
      });
    }
  });