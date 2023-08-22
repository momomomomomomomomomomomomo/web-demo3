$(".earth").hover(function() {
     $(".sun").css("backgroundColor","yellow")
     setTimeout(() => {$(".sun").css("backgroundColor","#FAF0E6");
          
     }, 1000);

     });
     var swiper = new Swiper(".mySwiper", {
          slidesPerview: 1,
          grabCoursor: true,
          loop: true,
          pagination: {
               el : ".swiper-pagination",
               clickable: true,
     
          },
          navigation: {
               nextEl: ".swiper-button-next",
               prevEl: ".swiper-button-prev",
     
          },
     });





