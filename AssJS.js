// JavaScript Document
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.header').addClass("sticky");
        }else{
            $('.header').removeClass("sticky");
        }
    });


    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.header .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

});