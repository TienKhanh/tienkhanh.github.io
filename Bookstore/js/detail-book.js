// $(document).ready(function(){
//     var origin_url = window.location.href;
//     var key = origin_url.split("?")[1];
//     var id = key.split("=")[1];

//     function formatNumber(num) {
//         return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
//     }

//     $.get(`http://localhost:3000/book_items?${key}`, function (data) {
//         // console.log(data);
//         console.log(data[0].old_price!="")
//         var detail_book = $(".detail-book");
//         detail_book.html("");
//         detail_book.append(`
//             <div class="image-book-detail">
//                 <img src="${data[0].img}" alt="">
//             </div>
//             <div class="content-book-detail">
//                 <div class="order-info">
//                     <div class="book-title">
//                         <h1>${data[0].title}</h1>
//                     </div>
//                     <div class="rating-box">
//                         <i class="fas fa-star"></i>
//                         <i class="fas fa-star"></i>
//                         <i class="fas fa-star"></i>
//                         <i class="fas fa-star-half-alt"></i>
//                         <i class="far fa-star"></i>
//                         (&nbsp;5&nbsp;đánh giá)
//                     </div>

//                     <div class="price-box">
//                         <div class="card-price">
//                             <strong>Giá bìa: </strong>
//                             <span class="old-price">${data[0].old_price != "" ? formatNumber(data[0].old_price) : formatNumber(data[0].new_price)}đ</span>
//                         </div>
//                         <div class="card-price">
//                             <strong>Giá bán: </strong>
//                             <span class="new-price">${formatNumber(data[0].new_price)}đ</span>
//                         </div>
//                     </div>
//                     <div class="number-cart">
//                         <strong>Số lượng: </strong>
//                         <div class="quantity">
//                             <input type="button" value="-" class="minus">
//                             <input type="tel" class="qty" value="1">
//                             <input type="button" value="+" class="plus">
//                         </div>
//                     </div>
//                     <div class="order-btn-box">
//                         <button class="buy-now">Mua ngay</button>
//                         <button class="add-to-cart">Thêm vào giỏ hàng</button>
//                     </div>
//                 </div>
//                 <div class="detail-event-cart">
//                     <div class="event-title">Ưu đãi liên quan</div>
//                     <div class="event-item">Miễn phí vận chuyển từ đơn hàng 200k trong Hà Nội và từ 300k các khu vực khác</div>
//                     <div class="event-item">Giảm ngay 5% (tối đa 50k) cho lần đầu mua hàng</div>
//                     <div class="event-item">Nhập mã "QRMEGA": Giảm ngay 10%, thanh toán qua VNPAY</div>
//                     <div class="event-item">Hoàn 30%, tối đa 100K, thanh toán ví Moca</div>

//                 </div>
//             </div>
//         `);
     
//     });

// });


function addCart() {
    console.log('add cart')
}

function buyNow(){
    console.log('Buy now')
    window.location.href = "check-cart.html";
}

var count = 1
var qty = document.querySelector(".qty");

function plus(){
    count++
    qty.value = count
}
function minus(){
    if(count > 1){
        count--
        qty.value = count
    }
}