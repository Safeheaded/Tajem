$(function(){

    /* 
        =============
        STICKY NAVBAR
        =============
    */

    var nav = $('#primary-nav').offset().top;

    var Scroll = function(){
        var wTop = $(window).scrollTop();

        if(wTop > nav){
            $('#primary-nav').addClass('sticky');
            $('#primary-nav').removeClass('no-sticky');
        }
        else{
            $('#primary-nav').removeClass('sticky');
            $('#primary-nav').addClass('no-sticky');
        }
    }
    Scroll();
    $(window).scroll(function(){
        Scroll();
    });
     /* 
        =============
        SHOW MOBILE NAV
        =============
    */

    $('#burger-menu').click(function(){
        $('#mobile-nav').addClass('m-nav-show');
    });
    $('#close, #mobile-nav li').click(function(){
        $('#mobile-nav').removeClass('m-nav-show');
    });
    /* 
        =============
        SCROLLS
        =============
    */
    $.scrollTo(0);

    $('#left-section, #nav-content ul li, #mobile-nav ul li').click(function(){
        var target = $(this).attr('data-target');
        $.scrollTo(target, 500);
    });



	$('#last-form').focus(function(){
	
	$('#last-form').css("textAlign","left");
});
$('#last-form').blur(function(){
	
	$('#last-form').css("textAlign","center");
});
});