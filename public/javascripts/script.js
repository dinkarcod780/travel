document.addEventListener("DOMContentLoaded",function(){
    console.log("DOMContentLoaded event fired.");
    var backgrounds =[
        "/images/swiper-slide-1.jpg",
        "/images/swiper-slide-2.jpg",
        "/images/swiper-slide-3.jpg",
    ];
    
    function changeBackground(){
        var randomBg=backgrounds[Math.floor(Math.random() * backgrounds.length)];
        document.querySelector(".part1").style.backgroundImage='url(' + randomBg +')';
        console.log("Background changed to: ", randomBg);
    }
    
    changeBackground();
    setInterval(changeBackground,1000);
    });
    
    const menu = document.querySelector(".nav-left i");
    const cross = document.querySelector(".cross");
    
    const tl = gsap.timeline();
    
    tl.to(".nav-right",{
        x:-299,
        duration:0.7
    })
    tl.from(".nav-right>li >a",{
        x:200,
        // opacity:0,
        stagger:.4,
        duration:0.6
    })
    tl.pause()
    
    menu.addEventListener("click",function(){
        tl.play()
    })
    cross.addEventListener("click",function(){
        tl.reverse()
    })
    
    
    
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    
      const heart = document.querySelectorAll(".footer-left i");
    heart.forEach((e)=>{
       
        e.addEventListener("click", function() {
            console.log(e)
            if(e.classList[0] ==="ri-heart-3-line"){
                e.classList.remove("ri-heart-3-line");
                e.classList.add("ri-heart-3-fill");
             }else{
                 e.classList.remove("ri-heart-3-fill");
                 e.classList.add("ri-heart-3-line");
             }
             
         });
    })