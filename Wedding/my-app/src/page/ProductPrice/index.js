import React from 'react'
import Header from '../../component/common/Header'
import Footer from '../../component/common/Footer'
import ShowProductPrice from '../../component/ShowProductPrice'

const ProductPrice = () => {
    
    const ListProductPrice = [
        {
            header: "Gói chụp Daisy",
            data: [
                {
                    img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/ProductPrice/1.jpg?raw=true",
                    title: "Daisy",
                    description: "Ảnh phóng Hàn Quốc",
                    price: "3,900,000",
                    content: [
                        {
                            label: "02 ảnh phóng size 50×75"
                        },
                        {
                            label: "01 ảnh bàn"
                        },
                        {
                            label: "Copy toàn bộ file gốc và file những ảnh"
                        },
                        {
                            label: "01 váy ngày chụp"
                        },
                        {
                            label: "01 vest chụp"
                        },
                        {
                            label: "Hoa chụp phụ kiện chụp đầy đủ"
                        },
                        {
                            label: "Khách hàng được lựa chọn trang phục theo sở thích,hình ảnh được chụp theo yêu cầu khách hàng"
                        },
                    ],
                    gift: [
                        {
                            label: "“Bộ voucher mua nhẫn cưới, vest cưới, hoa cưới từ các thương hiệu uy tín hàng đầu tại Việt Nam."
                        },
                        {
                            label: "Tổng giá trị lên đến 7.000.000″"
                        },
                        {
                            label: "Copy toàn bộ file gốc và file những ảnh"
                        },
                        {
                            label: "Miễn phí 01 váy thiết kế Ely mặc trong ngày cưới"
                        },
                        {
                            label: "Mượn miễn phí áo dài ngày ăn hỏi"
                        },
                        {
                            label: "Tặng phí trang điểm ngày cưới"
                        }
                    ]
                },
                {
                    img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/Home/Comment/39900495_2187804601294710_8118125377903132672_o-684x1024.jpg?raw=true",
                    title: "Daisy Sliver",
                    description: "Gói phim trường Hàn Quốc độc quyền Ely",
                    price: "5,900,000",
                    content: [
                        {
                            label: "Giảm trực tiếp 500.000VNĐ và tặng miễn phí 1 ảnh trang trí giá 200.000VNĐ khi đặt lịch online từ 17/05 – 31/05/2021"
                        },
                        {
                            label: "Bộ khung Hàn Quốc treo tường HOẶC Album size 25×25"
                        },
                        {
                            label: "02 ảnh phóng size 50×75 ép gỗ cao cấp"
                        },
                        {
                            label: "01 ảnh bàn 15×21"
                        },
                        {
                            label: "Video ảnh lồng nhạc Full HD"
                        },
                        {
                            label: "Trang điểm làm tóc theo từng concept trang phục"
                        },
                        {
                            label: "02 váy ngày chụp từ BST Ely cao cấp"
                        },
                        {
                            label: "Trang phục tự chọn của cô dâu – chú rể"
                        },
                        {
                            label: "02 vest ngày chụp"
                        },
                        {
                            label: "Trả toàn bộ file ảnh gốc và file chỉnh sửa"
                        },
                        {
                            label: "Hoa cưới và các phụ kiện đi kèm trong ngày chụp"
                        },
                        {
                            label: "Khách hàng được lựa chọn trang phục theo sở thích, dưới sự hỗ trợ tư vấn của đội ngũ nhân viên nhiệt tình, giàu kinh nghiệm"
                        },
                    ],
                    gift: [
                        {
                            label: "“Bộ voucher mua nhẫn cưới, vest cưới, hoa cưới từ các thương hiệu uy tín hàng đầu tại Việt Nam."
                        },
                        {
                            label: "Tổng giá trị lên đến 7.000.000″"
                        },
                        {
                            label: "Copy toàn bộ file gốc và file những ảnh"
                        },
                        {
                            label: "Miễn phí 01 váy thiết kế Ely mặc trong ngày cưới"
                        },
                        {
                            label: "Mượn miễn phí áo dài ngày ăn hỏi"
                        },
                        {
                            label: "Tặng phí trang điểm ngày cưới"
                        }
                    ]
                },
                {
                    img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/ProductPrice/2.jpg?raw=true",
                    title: "Daisy Diamond",
                    description: "Gói phim trường Hàn Quốc độc quyền Ely",
                    price: "6,900,000",
                    content: [
                        {
                            label: "Giảm trực tiếp 700.000VNĐ và tặng miễn phí 1 ảnh trang trí giá 200.000VNĐ khi đặt lịch online từ 17/05 – 31/05/2021"
                        },
                        {
                            label: "Bộ khung Hàn Quốc treo tường HOẶC Album size 30×30"
                        },
                        {
                            label: "02 ảnh phóng size 60×90 ép gỗ cao cấp"
                        },
                        {
                            label: "01 ảnh bàn 15×21"
                        },
                        {
                            label: "Video ảnh lồng nhạc Full HD"
                        },
                        {
                            label: "Trang điểm làm tóc theo từng concept trang phục"
                        },
                        {
                            label: "02 váy ngày chụp từ BST Ely cao cấp"
                        },
                        {
                            label: "Trang phục tự chọn của cô dâu – chú rể"
                        },
                        {
                            label: "02 vest ngày chụp"
                        },
                        {
                            label: "Trả toàn bộ file ảnh gốc và file chỉnh sửa"
                        },
                        {
                            label: "Hoa cưới và các phụ kiện đi kèm trong ngày chụp"
                        },
                        {
                            label: "Khách hàng được lựa chọn trang phục theo sở thích, dưới sự hỗ trợ tư vấn của đội ngũ nhân viên nhiệt tình, giàu kinh nghiệm"
                        },
                    ],
                    gift: [
                        {
                            label: "“Bộ voucher mua nhẫn cưới, vest cưới, hoa cưới từ các thương hiệu uy tín hàng đầu tại Việt Nam."
                        },
                        {
                            label: "Tổng giá trị lên đến 7.000.000″"
                        },
                        {
                            label: "Copy toàn bộ file gốc và file những ảnh"
                        },
                        {
                            label: "Miễn phí 01 váy thiết kế Ely mặc trong ngày cưới"
                        },
                        {
                            label: "Mượn miễn phí áo dài ngày ăn hỏi"
                        },
                        {
                            label: "Tặng phí trang điểm ngày cưới"
                        }
                    ]
                },
            ]
        },
        {
            header: "Gói chụp Peony",
            data: [
                {
                    img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/ProductPrice/3.jpg?raw=true",
                    title: "Daisy",
                    description: "Ảnh phóng Hàn Quốc",
                    price: "3,900,000",
                    content: [
                        {
                            label: "02 ảnh phóng size 50×75"
                        },
                        {
                            label: "01 ảnh bàn"
                        },
                        {
                            label: "Copy toàn bộ file gốc và file những ảnh"
                        },
                        {
                            label: "01 váy ngày chụp"
                        },
                        {
                            label: "01 vest chụp"
                        },
                        {
                            label: "Hoa chụp phụ kiện chụp đầy đủ"
                        },
                        {
                            label: "Khách hàng được lựa chọn trang phục theo sở thích,hình ảnh được chụp theo yêu cầu khách hàng"
                        },
                    ],
                    gift: [
                        {
                            label: "“Bộ voucher mua nhẫn cưới, vest cưới, hoa cưới từ các thương hiệu uy tín hàng đầu tại Việt Nam."
                        },
                        {
                            label: "Tổng giá trị lên đến 7.000.000″"
                        },
                        {
                            label: "Copy toàn bộ file gốc và file những ảnh"
                        },
                        {
                            label: "Miễn phí 01 váy thiết kế Ely mặc trong ngày cưới"
                        },
                        {
                            label: "Mượn miễn phí áo dài ngày ăn hỏi"
                        },
                        {
                            label: "Tặng phí trang điểm ngày cưới"
                        }
                    ]
                },
                {
                    img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/ProductPrice/4.jpg?raw=true",
                    title: "Daisy",
                    description: "Ảnh phóng Hàn Quốc",
                    price: "3,900,000",
                    content: [
                        {
                            label: "02 ảnh phóng size 50×75"
                        },
                        {
                            label: "01 ảnh bàn"
                        },
                        {
                            label: "Copy toàn bộ file gốc và file những ảnh"
                        },
                        {
                            label: "01 váy ngày chụp"
                        },
                        {
                            label: "01 vest chụp"
                        },
                        {
                            label: "Hoa chụp phụ kiện chụp đầy đủ"
                        },
                        {
                            label: "Khách hàng được lựa chọn trang phục theo sở thích,hình ảnh được chụp theo yêu cầu khách hàng"
                        },
                    ],
                    gift: [
                        {
                            label: "“Bộ voucher mua nhẫn cưới, vest cưới, hoa cưới từ các thương hiệu uy tín hàng đầu tại Việt Nam."
                        },
                        {
                            label: "Tổng giá trị lên đến 7.000.000″"
                        },
                        {
                            label: "Copy toàn bộ file gốc và file những ảnh"
                        },
                        {
                            label: "Miễn phí 01 váy thiết kế Ely mặc trong ngày cưới"
                        },
                        {
                            label: "Mượn miễn phí áo dài ngày ăn hỏi"
                        },
                        {
                            label: "Tặng phí trang điểm ngày cưới"
                        }
                    ]
                },
            ]
        },
        {
            header: "Gói chụp Peony",
            data: [
                {
                    img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/ProductPrice/5.jpg?raw=true",
                    title: "Daisy",
                    description: "Ảnh phóng Hàn Quốc",
                    price: "3,900,000",
                    content: [
                        {
                            label: "02 ảnh phóng size 50×75"
                        },
                        {
                            label: "01 ảnh bàn"
                        },
                        {
                            label: "Copy toàn bộ file gốc và file những ảnh"
                        },
                        {
                            label: "01 váy ngày chụp"
                        },
                        {
                            label: "01 vest chụp"
                        },
                        {
                            label: "Hoa chụp phụ kiện chụp đầy đủ"
                        },
                        {
                            label: "Khách hàng được lựa chọn trang phục theo sở thích,hình ảnh được chụp theo yêu cầu khách hàng"
                        },
                    ],
                    gift: [
                        {
                            label: "“Bộ voucher mua nhẫn cưới, vest cưới, hoa cưới từ các thương hiệu uy tín hàng đầu tại Việt Nam."
                        },
                        {
                            label: "Tổng giá trị lên đến 7.000.000″"
                        },
                        {
                            label: "Copy toàn bộ file gốc và file những ảnh"
                        },
                        {
                            label: "Miễn phí 01 váy thiết kế Ely mặc trong ngày cưới"
                        },
                        {
                            label: "Mượn miễn phí áo dài ngày ăn hỏi"
                        },
                        {
                            label: "Tặng phí trang điểm ngày cưới"
                        }
                    ]
                },
                {
                    img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/ProductPrice/6.jpg?raw=true",
                    title: "Daisy",
                    description: "Ảnh phóng Hàn Quốc",
                    price: "3,900,000",
                    content: [
                        {
                            label: "02 ảnh phóng size 50×75"
                        },
                        {
                            label: "01 ảnh bàn"
                        },
                        {
                            label: "Copy toàn bộ file gốc và file những ảnh"
                        },
                        {
                            label: "01 váy ngày chụp"
                        },
                        {
                            label: "01 vest chụp"
                        },
                        {
                            label: "Hoa chụp phụ kiện chụp đầy đủ"
                        },
                        {
                            label: "Khách hàng được lựa chọn trang phục theo sở thích,hình ảnh được chụp theo yêu cầu khách hàng"
                        },
                    ],
                    gift: [
                        {
                            label: "“Bộ voucher mua nhẫn cưới, vest cưới, hoa cưới từ các thương hiệu uy tín hàng đầu tại Việt Nam."
                        },
                        {
                            label: "Tổng giá trị lên đến 7.000.000″"
                        },
                        {
                            label: "Copy toàn bộ file gốc và file những ảnh"
                        },
                        {
                            label: "Miễn phí 01 váy thiết kế Ely mặc trong ngày cưới"
                        },
                        {
                            label: "Mượn miễn phí áo dài ngày ăn hỏi"
                        },
                        {
                            label: "Tặng phí trang điểm ngày cưới"
                        }
                    ]
                },
            ]
        },
        {
            header: "Gói chụp Peony",
            data: [
                {
                    img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/ProductPrice/7.jpg?raw=true",
                    title: "Daisy",
                    description: "Ảnh phóng Hàn Quốc",
                    price: "3,900,000",
                    content: [
                        {
                            label: "02 ảnh phóng size 50×75"
                        },
                        {
                            label: "01 ảnh bàn"
                        },
                        {
                            label: "Copy toàn bộ file gốc và file những ảnh"
                        },
                        {
                            label: "01 váy ngày chụp"
                        },
                        {
                            label: "01 vest chụp"
                        },
                        {
                            label: "Hoa chụp phụ kiện chụp đầy đủ"
                        },
                        {
                            label: "Khách hàng được lựa chọn trang phục theo sở thích,hình ảnh được chụp theo yêu cầu khách hàng"
                        },
                    ],
                    gift: [
                        {
                            label: "“Bộ voucher mua nhẫn cưới, vest cưới, hoa cưới từ các thương hiệu uy tín hàng đầu tại Việt Nam."
                        },
                        {
                            label: "Tổng giá trị lên đến 7.000.000″"
                        },
                        {
                            label: "Copy toàn bộ file gốc và file những ảnh"
                        },
                        {
                            label: "Miễn phí 01 váy thiết kế Ely mặc trong ngày cưới"
                        },
                        {
                            label: "Mượn miễn phí áo dài ngày ăn hỏi"
                        },
                        {
                            label: "Tặng phí trang điểm ngày cưới"
                        }
                    ]
                },
                {
                    img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/ProductPrice/8.jpg?raw=true",
                    title: "Daisy",
                    description: "Ảnh phóng Hàn Quốc",
                    price: "3,900,000",
                    content: [
                        {
                            label: "02 ảnh phóng size 50×75"
                        },
                        {
                            label: "01 ảnh bàn"
                        },
                        {
                            label: "Copy toàn bộ file gốc và file những ảnh"
                        },
                        {
                            label: "01 váy ngày chụp"
                        },
                        {
                            label: "01 vest chụp"
                        },
                        {
                            label: "Hoa chụp phụ kiện chụp đầy đủ"
                        },
                        {
                            label: "Khách hàng được lựa chọn trang phục theo sở thích,hình ảnh được chụp theo yêu cầu khách hàng"
                        },
                    ],
                    gift: [
                        {
                            label: "“Bộ voucher mua nhẫn cưới, vest cưới, hoa cưới từ các thương hiệu uy tín hàng đầu tại Việt Nam."
                        },
                        {
                            label: "Tổng giá trị lên đến 7.000.000″"
                        },
                        {
                            label: "Copy toàn bộ file gốc và file những ảnh"
                        },
                        {
                            label: "Miễn phí 01 váy thiết kế Ely mặc trong ngày cưới"
                        },
                        {
                            label: "Mượn miễn phí áo dài ngày ăn hỏi"
                        },
                        {
                            label: "Tặng phí trang điểm ngày cưới"
                        }
                    ]
                },
                {
                    img: "https://github.com/tienkhoa96/tienkhoa96.github.io/blob/master/Figma/Img/ProductPrice/9.jpg?raw=true",
                    title: "Daisy",
                    description: "Ảnh phóng Hàn Quốc",
                    price: "3,900,000",
                    content: [
                        {
                            label: "02 ảnh phóng size 50×75"
                        },
                        {
                            label: "01 ảnh bàn"
                        },
                        {
                            label: "Copy toàn bộ file gốc và file những ảnh"
                        },
                        {
                            label: "01 váy ngày chụp"
                        },
                        {
                            label: "01 vest chụp"
                        },
                        {
                            label: "Hoa chụp phụ kiện chụp đầy đủ"
                        },
                        {
                            label: "Khách hàng được lựa chọn trang phục theo sở thích,hình ảnh được chụp theo yêu cầu khách hàng"
                        },
                    ],
                    gift: [
                        {
                            label: "“Bộ voucher mua nhẫn cưới, vest cưới, hoa cưới từ các thương hiệu uy tín hàng đầu tại Việt Nam."
                        },
                        {
                            label: "Tổng giá trị lên đến 7.000.000″"
                        },
                        {
                            label: "Copy toàn bộ file gốc và file những ảnh"
                        },
                        {
                            label: "Miễn phí 01 váy thiết kế Ely mặc trong ngày cưới"
                        },
                        {
                            label: "Mượn miễn phí áo dài ngày ăn hỏi"
                        },
                        {
                            label: "Tặng phí trang điểm ngày cưới"
                        }
                    ]
                },
            ]
        },
        
    ]

    return (
        <>
            <Header/>
            <ShowProductPrice dataList={ListProductPrice}/>
            <Footer />
        </>
    )
}

export default ProductPrice