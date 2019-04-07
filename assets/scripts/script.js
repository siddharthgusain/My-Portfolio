$(document).ready(function(){
    // loading superslider
    $('#slides').superslides({
        animation:'fade',
        play:5000,
        pagination:false
    });
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

    // loading easypie chart
    $(function() {
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
    });
});

