$(document).ready(function () {
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    var category_filter = {};
    var supplier_filter = {};

    var filter_item = $(".filter-item");

    filter_item.click((event) => {
        event.target.classList.toggle("checked");

        let search_type = event.target.getAttribute("filter-type");
        let search_key = event.currentTarget.id;
        let search_str = "";

        // Thêm hoặc bớt phần tử của các bộ lọc
        if(search_type == "category"){
            if (category_filter[search_key]) {
                delete category_filter[search_key];
            } else {
                category_filter[search_key] = search_key;
            }
            
        }
        if(search_type == "supplier"){
            if (supplier_filter[search_key]) {
                delete supplier_filter[search_key];
            } else {
                supplier_filter[search_key] = search_key;
            }
            
        }

        // Chạy vòng lặp qua từng phần tử của các bộ lọc
        for (item in category_filter) {
            search_str += `category_like=${item}&`;
        }

        for (item in supplier_filter) {
            search_str += `supplier_like=${item}&`;
        }

        // Bỏ & cuối cùng của search string
        if (search_str != "") {
            search_str = search_str.slice(0, search_str.length - 1);
        }
        
        // Tạo url vào json server và in ra kết quả
        
        let search_url = `http://localhost:3000/book_items?${search_str}`;

        console.log(search_url)

        $.get(search_url, function (data) {
            let product_list = $(".category-product .product-list");
            let list_str = "";
            if (data && data.length > 0) {
                data.forEach(item => {
                    list_str += `
                    <div class="book-item col-md-3">
                        <div class="book-image">
                            <a href="detail-book.html?id=${item.id}">
                                <img src="${item.img}" alt="">
                            </a>

                        </div>
                        <div class="book-info">
                            <div class="book-section-header">
                                <a href="detail-book.html?id=${item.id}" class="book-title">
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
                product_list.html("");
                product_list.append(list_str);
            } else {
                product_list.html(`<p class="no-item">Không tìm thấy kết quả nào</p>`);
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