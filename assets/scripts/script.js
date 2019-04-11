
// Loader
$(window).on("load",function(){
    $(".loader-container .loader").fadeOut(500,function(){
        $(".loader-container").fadeOut(500);
    });
});

$(document).ready(function(){
    
    //loading type.js
    var typed=new Typed(".typed",{
        strings:["Web Developer.","Student."],
        typeSpeed:100,
        loop:true,
        startDelay:1000,
        showCursor:false
    });
    // loading owl carousal
    $('.owl-carousel').owlCarousel({
        loop:true,
        items:4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:5
            }
        }
    });

    var skillsTopOffset = $('.skills-section').offset().top;
    $(window).scroll(function(){
        if(window.pageYOffset > skillsTopOffset-$(window).height()+200){
            // loading easypie chart
            $('.chart').easyPieChart({
                easing:'easeInOut',
                barColor:'#fff',
                trackColor:false,
                scaleColor:false,
                lineWidth:4,
                size:152,
                onStep:function(from,to,percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });

    $("#navigation li a").click(function(event){
        event.preventDefault();
        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html,body").animate({ scrollTop:targetPosition - 70 },"slow");

    });

    const nav=$("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll",stickyNavigation);

    function stickyNavigation(){
        var body=$("body");

        if($(window).scrollTop() >= navTop){
            body.css("padding-top",nav.outerHeight()+"px");
            body.addClass("fixed-nav");
        }
        else {
            body.css("padding-top",0);
            body.removeClass("fixed-nav");
        }
    }

    
});

