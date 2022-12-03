//video
window.addEventListener("load", function () {
    let video = this.window.document.querySelector("#video");
    video.play();
    video.loop = true;
});

//menu hamburguer
$("i").click(function () {
    $("ul").toggleClass("open");
});

// lightbox galeria
$(document).ready(function () {
    $('.grid').isotope({
        itemSelector: '.item',
    });

})

// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        }
    },
});


//iniciando AOS fades
AOS.init({
    duration: 2000,
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  //cards
if ($(window).width() < 768) {
    var swiper = new Swiper(".aboutInner", {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesperGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
} else {
    var swiper = new Swiper(".aboutInner", {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesperGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

