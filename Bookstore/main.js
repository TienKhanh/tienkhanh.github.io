$(document).ready(function(){

    $(".book-category").hover(function(){
        $(".opacity-screen").toggle();
    });

    $('.owl-carousel').owlCarousel({
        nav:true,
        navText : ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    var old_book_item_max_height = $(".old-books .owl-stage-outer").height(); 
    console.log(old_book_item_max_height);
    $(".book-item").innerHeight(old_book_item_max_height);

});