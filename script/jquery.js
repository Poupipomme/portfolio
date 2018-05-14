$(document).ready(function(){
    $('.parallax').parallax( {
        responsiveThreshold: 993
    });
    $(".sb-container").scrollBox();
    $("tooltipped").tooltip();
});

/*$("body").niceScroll();

$('enter_link').click(function() {
  $(this).parent().fadeOut(500);
});*/

$(function() {
    /**
    * Smooth scrolling to page anchor on click
    **/
    $("a[href*='#']:not([href='#'])").click(function() {
        if (location.hostname == this.hostname && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,""))
        {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length )
            {
                $("html, body").animate( {
                  scrollTop: anchor.offset().top
                }, 1500);
            }
        }
    });
});
