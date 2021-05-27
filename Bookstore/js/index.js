$(document).ready(function () {
    $(".book-category").hover(function () {
        $(".opacity-screen").toggle();
    });

    $(".search-logo").click(()=>{
        $(".search-box").toggleClass("dropdown-search-open");
    });
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }
    // Buoc 1: get data tu json server o day
    // http://localhost:3000/book_items?category_like=2&&category_like=1&&supier_like=2

    
    $.get("http://localhost:3000/book_items", function (data) {
        // Lay data xong thi check xem lay thanh cong khong, neu thanh cong thi update data vao DOM
        if (data && data.length > 0) {
            var book_list = "";
            data.forEach(item => {
                book_list = "";
                if (item.flashsale){
                    book_list = $(".flashsale-books .book-list-box");
                }else if(item.monthly_ranking) {
                    book_list = $(".ranking-books .book-list-box");
                }
                if (book_list != "") {
                    book_list.trigger('add.owl.carousel', [`
                    <div class="book-item">
                    <div class="book-image">
                        <a href="">
                            <img src="${item.img}" alt="">
                        </a>

                    </div>
                    <div class="book-info">
                        <div class="book-section-header">
                            <a href="" class="book-title">
                                <h3>${item.title}</h3>
                            </a>
                        </div>
                        <div class="new-price">${formatNumber(item.new_price)}đ</div>
                        <div class="old-price">${formatNumber(item.old_price)}đ</div>
                        <div class="rating-box">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <i class="far fa-star"></i>
                            &nbsp;5&nbsp;đánh giá
                        </div>
                    </div>
                </div>`]).trigger('refresh.owl.carousel');
                }

            });

        }
    });

    $('.book-list-box').owlCarousel({
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $(".book-category").hover(function () {
        $(".opacity-screen").toggle();
    });

    $('.main-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    });

    $('.release-list').owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: 10,
        responsive: {
            600: {
                items: 3
            }
        },
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
    });

});