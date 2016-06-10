$(document).ready(function(){
    $('#custom-links').hover(function(){
        $(this).css("color: darkred");
    })
    $('.fa').hover(function(){
        $(this).toggleClass('fa-hover');
    })
    $('.nav').click(function(e){
       $('.nav a').removeClass('active');
       $(this).addClass('active');
    })
    
    $('#vertical-retail').hover(function(){
        var retail = $('.verticals')[0];
        if(retail.style.display == 'none') {
            retail.style.display = 'block';
        } else {
            retail.style.display = 'none';
        }
    })
});