$(document).ready(function () {
    let cat_filter = {};
    let origin_url = window.location.href;

    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    $("a.category-filter").click((event) => {
        event.preventDefault();
        let key = event.currentTarget.id;

        if (cat_filter[key]) {
            delete cat_filter[key]
        } else {
            cat_filter[key] = key;
        }

        let search = "";
        for(item in cat_filter){
            search += `category_like=${item}&`;
        }
        if(search != ""){
           s = search.slice(0,search.length-1);
        }
        let search_url = `http://localhost:3000/book_items?${s}`;
        console.log(search_url)
        $.get(search_url, function (data) {
            if (data && data.length > 0) {
                let product_list = $(".category-product .product-list");
                let list_str = "";
                product_list.html("");
                data.forEach(item => {
                    list_str +=`
                    <div class="book-item col-md-3">
                        <div class="book-image">
                            <a href="detail-book.html">
                                <img src="${item.img}" alt="">
                            </a>

                        </div>
                        <div class="book-info">
                            <div class="book-section-header">
                                <a href="detail-book.html" class="book-title">
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
                    </div>
                    `;
                });
                // console.log(list_str)
                product_list.append(list_str);
            }
        });
    });



    // let vanhoc_input = $('.filter_input')
    // vanhoc_input.click((event)=>{
    //     console.log(`event`, event)
    //     let key = event.currentTarget.id
    //     // debugger
    //     if(filter[key]) {
    //         delete filter[key]
    //     } else {
    //         filter[key] = key
    //     }


    //     let str = ''
    //     for(item in filter) {
    //         console.log(`item`, item)
    //         str += `category_like=${item}&`
    //     }
    //     if(str){
    //         str.slice(0,str.length-1)
    //     }
    //     let url = `${window.location.href}?${str}`
    //     window.location.replace(url)
    // })

});