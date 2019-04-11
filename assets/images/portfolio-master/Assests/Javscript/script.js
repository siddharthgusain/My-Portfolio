$(window).on("load",function() {
    $('.loader .inner').fadeOut(2500,function() {
        $('.loader').fadeOut(750);
    });
});
$(document).ready(function() {
    var typed=new Typed(".typed", {
        strings : ["Web Developer.","Web Designer.","Student."],
        typeSpeed : 100,
        loop : true,
        startDelay : 500,
        backDelay : 500,
        showCursor : false,
        backSpeed :100,
    });
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
            992 : {
                items :4
            }
        }
    });
    $('.scroll').cuteScroll({
        barColor: "black" ,
        barHeight: false,
        barWidth: false,
        barMinHeight: "6rem",
        barMaxHeight: "auto",
        barOpacity: 0.4,
        barBorderRadius: "1rem",
        barDraggable: true,
        barClass: "cuteScroll-bar",
        railColor: "black",
        railWidth: false,
        railIndent: false,
        railOpacity: 0.1,
        railBorderRadius: "1rem",
        railVisible: false,
        railClass: "cuteScroll-rail",
        scrollerIndent: "0.1rem",
        scrollerPosition: "right",
        scrollerWidth: "0.4rem",
        scrollerAlwaysVisible: false,
        scrollerHideDelay: 1000,
        scrollerFadeOutSpeed: "slow",
        scrollerFadeInSpeed: "fast",
        pageScroll: true,
        wheelStep: 120,
        touchSwipeStrengthFactor: 1.25,
        touchSwipeFadingFactor: 0.075,
        touchSwipeVelocityThreshold: 0.5,
        touchSwipeDistanceThreshold: 10,
        touchSwipeTimeAdjustmentThreshold: 500,
        touchSwipeIterationMinDistance: 0.2,
        touchSwipeIterationTimeout: 5,
        touchMoveFactor: 1.1,
        height: "20rem",
        width: "100%",
        addClass: false,
        removeClass: false,
        addCss: false,
        removeCss: false,
        wrapperClass: "cuteScroll-wrapper",
        onContentChange: false,
        onContentChangeShow: true,
        remove: false,
        jumpToTop: false,
        jumpToBottom: false,
        alert: false
        
      });
    $('#top').click(function() {
        $('html,body').animate({
            scrollTop : 0 },
            'cubic-bezier(0.1, 0.7, 1.0, 0.1)');
        });
        $(".nav-item").click(function() {
            $('html,body').animate({
                scrollTop : $($(this).attr('href')).offset().top },500,'linear');
            });
    var skilloffsettop = $("#skills").offset().top;
    $(window).scroll(function() {
        if(window.pageYOffset > skilloffsettop - $(window).height() + 100)
        {
            $('.chart').easyPieChart({
                easing : 'easeInOut',
                barColor :'#fff',
                trackColor : false,
                scaleColor : false,
                lineWidth : 4,
                onStep : function(from,to,percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
        });
        }
    });
    $('.nav-toggle').click(function(e) {
  
        e.preventDefault();
        $("html").toggleClass("openNav");
        $(".nav-toggle").toggleClass("active");
      
      });
      $('.message').click(function() {
          $('html,body').animate({
              scrollTop : $($(this).attr('href')).offset().top },1000,'linear');
          });
      $('.logo').click(function() {
          $('html,body').animate({
              scrollTop : $($(this).attr('href')).offset().top },1000,'linear');
          });
});
