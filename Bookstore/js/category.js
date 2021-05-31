$(document).ready(function () {

    var category_filter = {};
    var supplier_filter = {};

    var sort_view = $("ul.sort-list li a.active").attr("sort-view");
    var sort_str = `_sort=created_at&_order=desc`;
    var search_str = "";

    // render dữ liệu khi lần đầu vào tan category
    renderUI();

    $("ul.sort-list li a").click((event) => {
        event.preventDefault();
        $("ul.sort-list li a").removeClass("active");
        event.target.classList.add("active");
        sort_view = event.target.getAttribute("sort-view");
        if (sort_view == "created_at") {
            sort_str = `_sort=created_at&_order=desc`;
        } else if (sort_view == "number_order") {
            sort_str = `_sort=number_order&_order=desc`;
        } else if (sort_view == "min_price") {
            sort_str = `_sort=new_price&_order=asc`;
        } else if (sort_view == "max_price") {
            sort_str = `_sort=new_price&_order=desc`;
        } else {
            sort_str = `_sort=discount_percent&_order=desc`;
        }
        renderUI();
    });

    // Xử lý dữ liệu khi sử dụng các bộ lọc
    var filter_item = $(".filter-item");
    filter_item.click((event) => {
        event.target.classList.toggle("checked");

        let search_type = event.target.getAttribute("filter-type");
        let search_key = event.currentTarget.id;

        // Thêm hoặc bớt phần tử của các bộ lọc
        if (search_type == "category") {
            if (category_filter[search_key]) {
                delete category_filter[search_key];
            } else {
                category_filter[search_key] = search_key;
            }

        }
        if (search_type == "supplier") {
            if (supplier_filter[search_key]) {
                delete supplier_filter[search_key];
            } else {
                supplier_filter[search_key] = search_key;
            }

        }
        search_str = "";
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
        renderUI()
    });

    function renderUI() {
        let search_url = `http://localhost:3000/book_items?${search_str}&${sort_str}`;
        console.log(search_url);
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
    }

    // Hàm format giá tiền
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

});

