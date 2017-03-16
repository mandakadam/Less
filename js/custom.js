
var sidebarToggle = false;

$('.easy-sidebar-toggle').click(function(e) {
    e.preventDefault();
    var self = this;
  	
    if(sidebarToggle){
    	sidebarToggle = false;
	    $(self).removeClass("active");
		$('html').removeClass('easy-sidebar-active');
		$('#mContainer').removeClass('toggled');
		$('.navbar.easy-sidebar').removeClass('toggled');
		$('.overlayNav').hide();
    }
    else{
    	sidebarToggle = true;
    	$(self).addClass("active");
    	$('html').addClass('easy-sidebar-active');
		$('#mContainer').addClass('toggled');
		$('.navbar.easy-sidebar').addClass('toggled');
		$('.overlayNav').show();
    }
});

$('#mContent').on('swiperight', function(e){
	sidebarToggle = false;
    $('.easy-sidebar-toggle').trigger('click');
});
$('#top_listHolding').on('swiperight', function(e){
	sidebarToggle = false;
    $('.easy-sidebar-toggle').trigger('click');
});

$(document).on('swipeleft', function(e){
	sidebarToggle = true;
    $('.easy-sidebar-toggle').trigger('click');
});

$('.overlayNav').on('click', function(e){
	sidebarToggle = true;
    $('.easy-sidebar-toggle').trigger('click');
});


// $(window).scroll(function(){
//   var sticky = $('.sticky'),
//       scroll = $(window).scrollTop();

//   if (scroll >= 100) sticky.addClass('fixed');
//   else sticky.removeClass('fixed');
// });


var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
var sticky = $('.sticky');

mywindow.scroll(function () {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
        sticky.addClass('fixed');
        up = !up;
        console.log(up);
    } else if(newscroll < mypos && up) {
        sticky.removeClass('fixed');
        up = !up;
    }
    mypos = newscroll;
});

if ($('#back-to-top').length) {
	var scrollTrigger = 100;
    var  backToTop = function () {
        if (mypos > scrollTrigger) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}


  $('#cp1').colorpicker().on('changeColor', function(e) {
 		less.modifyVars({ '@color1' : e.color.toHex()});
  });
