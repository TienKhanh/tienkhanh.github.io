const book_items = [
    {
        "id": 1,
        "title": "Để con được ốm",
        "img": "https://raw.githubusercontent.com/TienKhanh/tienkhanh.github.io/main/Bookstore/images/list-books/%C4%90%E1%BB%83%20Con%20%C4%90%C6%B0%E1%BB%A3c%20%E1%BB%90m%20-76-95-20.jpg",
        "new_price": 69700,
        "old_price": 85000,
        "rating": 4.5,
        "review": 18,
        "flashsale": false,
        "monthly_ranking": false,
        "category": "sachtrongnuoc,nuoidaycon",
        "supplier": "nhanam",
        "created_at": "2021-05-29T00:01:00.000Z",
        "number_order": 210,
        "discount_percent": 0.18
    },
    {
        "id": 2,
        "title": "Khi hơi thở hóa thinh không",
        "img": "https://raw.githubusercontent.com/TienKhanh/tienkhanh.github.io/main/Bookstore/images/list-books/Khi%20h%C6%A1i%20th%E1%BB%9F%20h%C3%B3a%20thinh%20kh%C3%B4ng%20-%2087-109-20.jpg",
        "new_price": 87000,
        "old_price": 109000,
        "rating": 5,
        "review": 20,
        "flashsale": true,
        "monthly_ranking": false,
        "category": "sachtrongnuoc,tieusu-hoiky",
        "supplier": "nxbtre",
        "created_at": "2021-05-29T00:01:00.000Z",
        "number_order": 15,
        "discount_percent": 0.20
    },
    {
        "id": 3,
        "title": "Cho tôi xin một vé đi tuổi thơ",
        "img": "https://raw.githubusercontent.com/TienKhanh/tienkhanh.github.io/main/Bookstore/images/list-books/Cho%20T%C3%B4i%20Xin%20M%E1%BB%99t%20V%C3%A9%20%C4%90i%20Tu%E1%BB%95i%20Th%C6%A1%20-64-80-20.jpg",
        "new_price": 64000,
        "old_price": "",
        "rating": 5,
        "review": 10,
        "flashsale": true,
        "monthly_ranking": false,
        "category": "sachtrongnuoc,vanhoc",
        "supplier": "nxbtre",
        "created_at": "2021-05-31T00:01:00.000Z",
        "number_order": 21,
        "discount_percent": 0
    },
    {
        "id": 4,
        "title": "Con về không phải bởi phép màu",
        "img": "https://raw.githubusercontent.com/TienKhanh/tienkhanh.github.io/main/Bookstore/images/list-books/Con%20V%E1%BB%81%20Kh%C3%B4ng%20Ph%E1%BA%A3i%20B%E1%BB%9Fi%20Ph%C3%A9p%20M%C3%A0u%20-%2057-72-20.jpg",
        "new_price": 57500,
        "old_price": 72000,
        "rating": 5,
        "review": 20,
        "flashsale": true,
        "monthly_ranking": false,
        "category": "sachtrongnuoc,tieusu-hoiky",
        "supplier": "nxbtre",
        "created_at": "2021-05-28T00:01:00.000Z",
        "number_order": 102,
        "discount_percent": 0.20
    },
    {
        "id": 5,
        "title": "Rèn luyện tư duy phản biện",
        "img": "https://raw.githubusercontent.com/TienKhanh/tienkhanh.github.io/main/Bookstore/images/list-books/R%C3%A8n%20luy%E1%BB%87n%20t%C6%B0%20duy%20ph%E1%BA%A3n%20bi%E1%BB%87n%20-%2077-99-22.jpg",
        "new_price": 77000,
        "old_price": "",
        "rating": 5,
        "review": 20,
        "flashsale": true,
        "monthly_ranking": false,
        "category": "sachtrongnuoc,tamly-kynangsong",
        "supplier": "nxbtre",
        "created_at": "2021-05-27T00:01:00.000Z",
        "number_order": 290,
        "discount_percent": 0
    },
    {
        "id": 6,
        "title": "Về nhà với mẹ",
        "img": "https://raw.githubusercontent.com/TienKhanh/tienkhanh.github.io/main/Bookstore/images/list-books/V%E1%BB%81%20nh%C3%A0%20v%E1%BB%9Bi%20m%E1%BA%B9%20-%2075-89-15.jpg",
        "new_price": 75000,
        "old_price": 89000,
        "rating": 4.5,
        "review": 10,
        "flashsale": true,
        "monthly_ranking": false,
        "category": "sachtrongnuoc,vanhoc",
        "supplier": "nhanam",
        "created_at": "2021-05-27T00:01:00.000Z",
        "number_order": 340,
        "discount_percent": 0.16
    },
    {
        "id": 7,
        "title": "Đừng nói chuyện với cô ấy",
        "img": "https://github.com/TienKhanh/tienkhanh.github.io/blob/main/Bookstore/images/list-books/%C4%90%E1%BB%ABng%20n%C3%B3i%20chuy%E1%BB%87n%20v%E1%BB%9Bi%20c%C3%B4%20%E1%BA%A5y%20-100-126-20.jpg?raw=true",
        "new_price": 100000,
        "old_price": 126000,
        "rating": 5,
        "review": 10,
        "flashsale": true,
        "monthly_ranking": false,
        "category": "sachtrongnuoc,vanhoc",
        "supplier": "nhanam",
        "created_at": "2021-05-26T00:01:00.000Z",
        "number_order": 500,
        "discount_percent": 0.21
    },
    {
        "id": 8,
        "title": "Nguồn gốc tội lỗi",
        "img": "https://raw.githubusercontent.com/TienKhanh/tienkhanh.github.io/main/Bookstore/images/list-books/ngu%E1%BB%93n%20g%E1%BB%91c%20t%E1%BB%99i%20l%E1%BB%97i%20-137-168-18.jpg",
        "new_price": 137000,
        "old_price": 168000,
        "rating": 5,
        "review": 10,
        "flashsale": false,
        "monthly_ranking": true,
        "category": "sachtrongnuoc,vanhoc",
        "supplier": "nhanam",
        "created_at": "2021-05-26T00:01:00.000Z",
        "number_order": 120,
        "discount_percent": 0.18
    },
    {
        "id": 9,
        "title": "Tâm lý học tội phạm",
        "img": "https://raw.githubusercontent.com/TienKhanh/tienkhanh.github.io/main/Bookstore/images/list-books/t%C3%A2m%20l%C3%BD%20h%E1%BB%8Dc%20t%E1%BB%99i%20ph%E1%BA%A1m%20-%20122-149-18.jpg",
        "new_price": 122000,
        "old_price": 149000,
        "rating": 5,
        "review": 10,
        "flashsale": false,
        "monthly_ranking": true,
        "category": "sachtrongnuoc,tamly-kynangsong",
        "supplier": "nhanam",
        "created_at": "2021-05-25T00:01:00.000Z",
        "number_order": 390,
        "discount_percent": 0.18
    },
    {
        "id": 10,
        "title": "Phẩm chất tốt của các doanh nhân",
        "img": "https://github.com/TienKhanh/tienkhanh.github.io/blob/main/Bookstore/images/list-books/Ph%E1%BA%A9m%20Ch%E1%BA%A5t%20T%E1%BB%91t%20C%E1%BB%A7a%20C%C3%A1c%20Doanh%20Nh%C3%A2n%20-23.5-47.50.jpg?raw=true",
        "new_price": 23500,
        "old_price": 47500,
        "rating": 5,
        "review": 10,
        "flashsale": false,
        "monthly_ranking": true,
        "category": "sachtrongnuoc,thieunhi",
        "supplier": "nhanam",
        "created_at": "2021-05-23T00:01:00.000Z",
        "number_order": 170,
        "discount_percent": 0.51
    },
    {
        "id": 11,
        "title": "Cái bóng của bí mật",
        "img": "https://github.com/TienKhanh/tienkhanh.github.io/blob/main/Bookstore/images/list-books/C%C3%A1i%20B%C3%B3ng%20C%E1%BB%A7a%20B%C3%AD%20M%E1%BA%ADt%20-%2054-108-50.jpg?raw=true",
        "new_price": 54000,
        "old_price": 108000,
        "rating": 5,
        "review": 18,
        "flashsale": false,
        "monthly_ranking": true,
        "category": "sachtrongnuoc,vanhoc",
        "supplier": "nhanam",
        "created_at": "2021-05-23T00:01:00.000Z",
        "number_order": 150,
        "discount_percent": 0.50
    },
    {
        "id": 12,
        "title": "Kiếp nào ta cũng tìm thấy nhau",
        "img": "https://github.com/TienKhanh/tienkhanh.github.io/blob/main/Bookstore/images/list-books/Ki%E1%BA%BFp%20N%C3%A0o%20Ta%20C%C5%A9ng%20T%C3%ACm%20Th%E1%BA%A5y%20Nhau%20-62-85-27.jpg?raw=true",
        "new_price": 62000,
        "old_price": 87000,
        "rating": 5,
        "review": 6,
        "flashsale": true,
        "monthly_ranking": true,
        "category": "sachtrongnuoc,tamly-kynangsong",
        "supplier": "nhanam",
        "created_at": "2021-05-22T00:01:00.000Z",
        "number_order": 80,
        "discount_percent": 0.29
    },
    {
        "id": 13,
        "title": "Hoàng tử bé",
        "img": "https://github.com/TienKhanh/tienkhanh.github.io/blob/main/Bookstore/images/list-books/Ho%C3%A0ng%20T%E1%BB%AD%20B%C3%A9%20-22.5-25-10.jpg?raw=true",
        "new_price": 22500,
        "old_price": 25000,
        "rating": 5,
        "review": 10,
        "flashsale": false,
        "monthly_ranking": true,
        "category": "sachtrongnuoc,thieunhi",
        "supplier": "nhanam",
        "created_at": "2021-05-22T00:01:00.000Z",
        "number_order": 215,
        "discount_percent": 0.10
    },
    {
        "id": 14,
        "title": "Cà phê cùng Tony",
        "img": "https://github.com/TienKhanh/tienkhanh.github.io/blob/main/Bookstore/images/list-books/C%C3%A0%20Ph%C3%AA%20C%C3%B9ng%20Tony%20-63-90-30.jpg?raw=true",
        "new_price": 63000,
        "old_price": 90000,
        "rating": 5,
        "review": 10,
        "flashsale": false,
        "monthly_ranking": true,
        "category": "sachtrongnuoc,vanhoc",
        "supplier": "nhanam",
        "created_at": "2021-05-22T00:01:00.000Z",
        "number_order": 320,
        "discount_percent": 0.30
    },
    {
        "id": 15,
        "title": "Món quà từ cánh chim",
        "img": "https://github.com/TienKhanh/tienkhanh.github.io/blob/main/Bookstore/images/list-books/M%C3%B3n%20Qu%C3%A0%20T%E1%BB%AB%20C%C3%A1nh%20Chim%20-82.5-165-50.png?raw=true",
        "new_price": 82000,
        "old_price": 165000,
        "rating": 5,
        "review": 20,
        "flashsale": false,
        "monthly_ranking": true,
        "category": "sachtrongnuoc,vanhoc",
        "supplier": "nhanam",
        "created_at": "2021-05-21T00:01:00.000Z",
        "number_order": 20,
        "discount_percent": 0.50
    },
    {
        "id": 16,
        "title": "Đời ngắn đừng ngủ dài",
        "img": "https://github.com/TienKhanh/tienkhanh.github.io/blob/main/Bookstore/images/list-books/%C4%90%E1%BB%9Di%20Ng%E1%BA%AFn%20%C4%90%E1%BB%ABng%20Ng%E1%BB%A7%20D%C3%A0i%20-%2057-75-24.jpg?raw=true",
        "new_price": 57000,
        "old_price": 75000,
        "rating": 5,
        "review": 18,
        "flashsale": false,
        "monthly_ranking": true,
        "category": "sachtrongnuoc,tamly-kynangsong",
        "supplier": "nhanam",
        "created_at": "2021-05-20T00:01:00.000Z",
        "number_order": 130,
        "discount_percent": 0.24
    }
];