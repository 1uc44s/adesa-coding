const navShow = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
  
    burger.addEventListener('click',()=>{
      nav.classList.toggle('nav-active');
  
      links.forEach((link,index)=>{
        if (link.style.animation) {
          link.style.animation = '';
        }else{
          link.style.animation = `linksFade 0.5s ease forwards ${index / 5 + 0.2}s`;
        }
      });
  
      burger.classList.toggle('close');
    });
  }

navShow();

let slideIndex = 2;
    slideShow(slideIndex);

    function slideRoute(n) {
        slideShow(slideIndex += n);
    }

    function currentSlide(n) {
        slideShow(slideIndex = n);
    }

    function slideShow(n) {
        let i;
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display="none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";

        dots[slideIndex-1].className +=" active";
    }

    