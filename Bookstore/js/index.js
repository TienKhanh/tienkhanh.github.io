$(document).ready(function () {
    $('html').on('click', function (event) {
        var target = $(event.target);
        console.log(target)
        if (target.is('i.fas.fa-search')) {
            $(".search-box").toggleClass("dropdown-search-open");
        } else {
            $(".search-box").removeClass("dropdown-search-open");
        }
    });


    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    $(".btn-back-top").hide();
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $(".btn-back-top").show();
        } else {
            $(".btn-back-top").hide();
        }
    });

    $(".btn-back-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
    });

    // http://localhost:3000/book_items?category_like=2&&category_like=1&&supier_like=2



    // Buoc 1: get data tu json server o day

    $.get("http://localhost:3000/book_items", function (data) {
        // Lay data xong thi check xem lay thanh cong khong, neu thanh cong thi update data vao DOM
        if (data && data.length > 0) {
            var flashsale_list = $(".flashsale-books .book-list-box");
            var monthly_ranking_list = $(".ranking-books .book-list-box");
            var bestseller_list = "";

            data.forEach(item => {
                book_list = "";
                if (item.flashsale) {
                    flashsale_list.trigger('add.owl.carousel', [`
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
                            <div class="new-price">${formatNumber(item.new_price)}??</div>
                            <div class="old-price">${formatNumber(item.old_price)}??</div>
                            <div class="rating-box">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                                <i class="far fa-star"></i>
                                &nbsp;5&nbsp;????nh gi??
                            </div>
                        </div>
                    </div>`]).trigger('refresh.owl.carousel');
                } else if (item.monthly_ranking) {
                    monthly_ranking_list.trigger('add.owl.carousel', [`
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
                            <div class="new-price">${formatNumber(item.new_price)}??</div>
                            <div class="old-price">${formatNumber(item.old_price)}??</div>
                            <div class="rating-box">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                                <i class="far fa-star"></i>
                                &nbsp;5&nbsp;????nh gi??
                            </div>
                        </div>
                    </div>`]).trigger('refresh.owl.carousel');
                }
            });

            $(".book-item").height("391.21px");
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