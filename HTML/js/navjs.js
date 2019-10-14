//Slider expansion selector

const menuNav = document.querySelector(".menu-nav");

//Hamburger animation selector

const menuBarTop = document.querySelector(".top");
const menuBarMiddle = document.querySelector(".middle");
const menuBarBottom = document.querySelector(".bottom");

// CLICK EVENT ON HAMBURGER

const menuBtn = document.querySelector(".hamburger");

menuBtn.addEventListener("click", () => {
  //Expansion
  menuNav.classList.toggle("expanded")
  //Animation
  menuBtn.classList.toggle("hamburger-animate")
  menuBarMiddle.classList.toggle("middle-animate");
  menuBarTop.classList.toggle("top-animate");
  menuBarBottom.classList.toggle("bottom-animate");
});



//slider js



var sliderTag = $('.slider');
      var sliderItems = sliderTag.find('.item');
      var slideCount = sliderItems.length;
      var nextSlide = 1;
      var slidernavigatourActive = sliderTag.find('.slide_menu ul li');
      var timeOut = 4000;
      function slider(){
          if(nextSlide > slideCount) {
              nextSlide = 1;
          }
          if (nextSlide < 1)  {
              nextSlide = slideCount;
          }
          sliderItems.fadeOut(200);
          sliderItems.eq(nextSlide - 1).fadeIn(600);
          slidernavigatourActive.removeClass('active_slide');
          slidernavigatourActive.eq(nextSlide - 1).addClass('active_slide');
          nextSlide++;

      }
      slider();
      var sliderInterval = setInterval(slider, timeOut);

      sliderTag.mouseleave(function () {
          clearInterval(sliderInterval);
          sliderInterval = setInterval(slider, timeOut);
      });

      function nextSlid(){
          slider();
      }
      function prevSlide(){
        nextSlide = nextSlide - 2;
        slider();
      }
      function slideClick(index){
          nextSlide = index;
          slider();
      }
      $('.slider .slide_menu li').click(function () {
          clearInterval(sliderInterval);
          var index = $(this).index();
          slideClick(index + 1);
      });
      $('.next').click(function () {
          clearInterval(sliderInterval);
          nextSlid();
      });
      $('.prev').click(function () {
          clearInterval(sliderInterval);
          prevSlide();
      });