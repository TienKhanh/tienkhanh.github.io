$(document).ready(function(){

    $(".book-category").hover(function(){
        $(".opacity-screen").toggle();
    });

    $('.main-slider').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        nav:true,
        navText : ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    });

    $('.book-list-box').owlCarousel({
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
    $('.release-list').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:10,
        responsive:{
            600:{
                items:3
            }
        },
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
    });

    var old_book_item_max_height = $(".old-books .owl-stage-outer").height(); 
    console.log(old_book_item_max_height);
    $(".book-item").innerHeight(old_book_item_max_height);

});