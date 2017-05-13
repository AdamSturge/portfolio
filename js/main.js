$(document).ready(function(){
    new WOW().init();


    // --------------- BEGIN TESTIMONIAL ------------ // 
    $("#testimonial-slider").owlCarousel({
        paginationSpeed : 500,      
        singleItem:true,
        autoPlay: 10000,
    });
    // -------------- END TESTIMONIAL -------------- //

    // ---------------BEGIN COUNTER ---------------  //
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // ------------- END COUNTER ------------------ //

    // ------------- BEGIN NAV BAR ----------------- //
    function toggleNavCollapse()
    {
        if(50<$(".navbar").offset().top)
        {
            $(".navbar-fixed-top").addClass("top-nav-collapse")
        }
        else
        {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    }
    toggleNavCollapse();

    $(window).scroll(toggleNavCollapse);$(function(){$("a.page-scroll").bind("click",function(b){var a=$(this);$("html, body").stop().animate({scrollTop:$(a.attr("href")).offset().top-50},1500,"easeInOutExpo",function(){a.blur()});b.preventDefault()})});$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()});
    //------------ END NAV BAR -----------------------//
    
    // ------------ BEGIN IMAGE HOVER ---------------------//
    $(".post-image").hover(
         function() {
            $(this).attr("src", $(this).attr("animated-src"));
        },
        function() {
            $(this).attr("src", $(this).attr("static-src"));
        }                         
    );                  
    // ------------ END IMAGE HOVER ---------------------//
    
    // ------------ BEGIN HEADER TYPED TEXT -------------//
    $("#slider-txt").typed({
        strings: ["Hello World"],
        typeSpeed: 40,
        loop : false
    });
    // ----------- END HEADER TYPED TEXT ---------------//
});




