// https://flex-box.net/js-smoothscroll/
// を参照しました。
const links = document.querySelectorAll('a[href^="#"]');
for ( let i = 0; i < links.length; i++ ) {
  links[i].addEventListener('click', (e) => {
    e.preventDefault();

    let href = links[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      console.log(href) 


    const elemY = targetElement.getBoundingClientRect().top;
    const scrollY = window.pageYOffset;
    const top = elemY + scrollY;

    window.scroll({
      top: top - 60, 
      behavior: 'smooth' 
    });
    document.getElementById('navbarNavDropdown').classList.remove("show");
  });
}


$('#accordionBtn').click(function(){
  $('.beneath').toggleClass('hide');
})

objectFitImages();

var objectFitImages = require('object-fit-images');