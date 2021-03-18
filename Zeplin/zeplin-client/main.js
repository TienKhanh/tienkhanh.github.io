$(document).ready(function () {
    // let arrProduct = [
    //     {
    //         id: 1,
    //         img: 'images/card-wine-1.jpg',
    //         title: '샤또 마고 매그넘',
    //         regular_price: '259,000원',
    //         old_price: "",
    //         discount_price: "",
    //     },
    //     {
    //         id: 2,
    //         img: 'images/card-wine-2.jpg',
    //         title: '라미 울지 로드 빈야드 샤르도네',
    //         regular_price: '',
    //         old_price: "180,000원",
    //         discount_price: "168,000원",
    //     },
    //     {
    //         id: 3,
    //         img: 'images/card-wine-3.jpg',
    //         title: '도멘 페로 미노 샹볼 뮈지니 프르미에 크뤼 라 콩브 도르보 울트라 비에유 빈뉴',
    //         regular_price: '39,000원',
    //         old_price: "",
    //         discount_price: "",
    //     },
    //     {
    //         id: 4,
    //         img: 'images/card-wine-4.jpg',
    //         title: '마르께스 데 까사 콘차 까베르네 소비뇽',
    //         regular_price: '',
    //         old_price: "259,000원",
    //         discount_price: "248,000원",
    //     }
    // ];
    
    // function renderProduct() {

    //     arrProduct.forEach((item, index) => {
    //         $(".section-1 .section-body .row, .section-4 .section-body .row, .section-5 .section-body .row").append(`
    //         <div class="col-12 col-sm-6 col-md-4 col-lg-3 product-item">
    //             <div class="product-box">
    //                 <img src="${item.img}" alt="">
    //                 <div class="sale"></div>
    //                 <p>SALE</p>
    //                 <div class="heart-list-wish" data-id="${item.id}">
    //                     <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
    //                         <defs>
    //                             <path id="oqun1glwya" d="M16 31.959l-.472-.469C11.885 27.881 0 15.632 0 9.555 0 4.285 3.978 0 8.868 0c2.73 0 5.362 1.417 7.037 3.79l.095.136.093-.134C17.77 1.417 20.401 0 23.133 0 28.022 0 32 4.286 32 9.555c0 6.189-13.94 20.34-15.53 21.933l-.47.47z"/>
    //                         </defs>
    //                         <g fill="none" fill-rule="evenodd">
    //                             <g>
    //                                 <g transform="translate(-376 -733) translate(376 733)">
    //                                     <use fill="#333" xlink:href="#oqun1glwya"/>
    //                                 </g>
    //                             </g>
    //                         </g>
    //                     </svg>                                     
    //                 </div>
    //                 <div class="glass-list-wish">
    //                     <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
    //                         <defs>
    //                             <path id="yqanp6kdsa" d="M24.645 11.043c-.081 1.609-.534 3.141-1.31 4.433-1.26 2.104-3.478 3.539-5.93 3.839-2.473.306-4.883-.578-6.772-2.48-.971-.976-1.66-2.247-1.99-3.669-.424-1.844-.424-3.798.005-5.644l1.437-6.198h12.747l.002.011c.013.055.023.108.034.164l1.135 4.898c.372 1.59.72 3.09.642 4.646m.65-4.95l-1.148-4.962C24.003.425 23.918 0 23.357 0H9.604l-.586.052-1.662 7.169c-.474 2.04-.474 4.2-.002 6.244.382 1.662 1.192 3.152 2.34 4.304 1.749 1.755 3.863 2.711 6.133 2.867v10.04h-4.91V32h11.146v-1.324H17.15v-10.02c.138-.01.276-.009.412-.026 2.859-.348 5.441-2.019 6.91-4.473.886-1.478 1.404-3.222 1.496-5.046.087-1.747-.3-3.409-.674-5.018"/>
    //                         </defs>
    //                         <g fill="none" fill-rule="evenodd">
    //                             <g>
    //                                 <g transform="translate(-184 -720) translate(184 720)">
    //                                     <mask id="prbvdrdn3b" fill="#fff">
    //                                         <use xlink:href="#yqanp6kdsa"/>
    //                                     </mask>
    //                                     <use fill="#050000" xlink:href="#yqanp6kdsa"/>
    //                                     <g fill="#333" mask="url(#prbvdrdn3b)">
    //                                         <path d="M0 0H32V32H0z"/>
    //                                     </g>
    //                                 </g>
    //                             </g>
    //                         </g>
    //                     </svg>                                        
    //                 </div>
    //             </div>
    //             <div class="product-title">${item.title}</div>
    //             ${item.regular_price != "" ? `<span class="regular-price">${item.regular_price}</span>` : ``}
    //             ${item.old_price != "" ? `<span class="old-price">${item.old_price}</span>` : ``}
    //             ${item.discount_price != "" ? `<span class="discount-price">${item.discount_price}</span>` : ``}
                
    //         </div>
    //         `);
            
    //     });
    // }

    function renderProduct() {
        $.get(`http://localhost:3000/arrProduct`, function(data, status){
            data.forEach(item => {
                $(".section-1 .section-body .row, .section-4 .section-body .row, .section-5 .section-body .row").append(`
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 product-item">
                        <div class="product-box">
                            <img src="${item.img}" alt="">
                            <div class="sale"></div>
                            <p>SALE</p>
                            <div class="heart-list-wish" data-id="${item.id}">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
                                    <defs>
                                        <path id="oqun1glwya" d="M16 31.959l-.472-.469C11.885 27.881 0 15.632 0 9.555 0 4.285 3.978 0 8.868 0c2.73 0 5.362 1.417 7.037 3.79l.095.136.093-.134C17.77 1.417 20.401 0 23.133 0 28.022 0 32 4.286 32 9.555c0 6.189-13.94 20.34-15.53 21.933l-.47.47z"/>
                                    </defs>
                                    <g fill="none" fill-rule="evenodd">
                                        <g>
                                            <g transform="translate(-376 -733) translate(376 733)">
                                                <use fill="#333" xlink:href="#oqun1glwya"/>
                                            </g>
                                        </g>
                                    </g>
                                </svg>                                     
                            </div>
                            <div class="glass-list-wish">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
                                    <defs>
                                        <path id="yqanp6kdsa" d="M24.645 11.043c-.081 1.609-.534 3.141-1.31 4.433-1.26 2.104-3.478 3.539-5.93 3.839-2.473.306-4.883-.578-6.772-2.48-.971-.976-1.66-2.247-1.99-3.669-.424-1.844-.424-3.798.005-5.644l1.437-6.198h12.747l.002.011c.013.055.023.108.034.164l1.135 4.898c.372 1.59.72 3.09.642 4.646m.65-4.95l-1.148-4.962C24.003.425 23.918 0 23.357 0H9.604l-.586.052-1.662 7.169c-.474 2.04-.474 4.2-.002 6.244.382 1.662 1.192 3.152 2.34 4.304 1.749 1.755 3.863 2.711 6.133 2.867v10.04h-4.91V32h11.146v-1.324H17.15v-10.02c.138-.01.276-.009.412-.026 2.859-.348 5.441-2.019 6.91-4.473.886-1.478 1.404-3.222 1.496-5.046.087-1.747-.3-3.409-.674-5.018"/>
                                    </defs>
                                    <g fill="none" fill-rule="evenodd">
                                        <g>
                                            <g transform="translate(-184 -720) translate(184 720)">
                                                <mask id="prbvdrdn3b" fill="#fff">
                                                    <use xlink:href="#yqanp6kdsa"/>
                                                </mask>
                                                <use fill="#050000" xlink:href="#yqanp6kdsa"/>
                                                <g fill="#333" mask="url(#prbvdrdn3b)">
                                                    <path d="M0 0H32V32H0z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>                                        
                            </div>
                        </div>
                        <div class="product-title">${item.title}</div>
                        ${item.regular_price != "" ? `<span class="regular-price">${item.regular_price}</span>` : ``}
                        ${item.old_price != "" ? `<span class="old-price">${item.old_price}</span>` : ``}
                        ${item.discount_price != "" ? `<span class="discount-price">${item.discount_price}</span>` : ``}
                        
                    </div>
                    `);
            });
        })
    }
    renderProduct()

    $(".heart-list-wish").click(function (event) {
        console.log("heart-list-wish click ok");

        let listWish = JSON.parse(localStorage.getItem('listWish') || '[]')
        console.log(listWish)

        // let idClick = event.currentTarget.dataset.id;
        let idClick = $(this).attr('data-id');
        let isExist = false;
        for (i = 0; i < listWish.length; i++) {
            if (idClick == listWish[i].id) {
                isExist = true;
                listWish.splice(i, 1);
                $(this).removeClass('active');
            }
        }
        if (!isExist) {
            listWish.push({ id: idClick });
            $(this).addClass('active');
        }

        localStorage.setItem('listWish', JSON.stringify(listWish));
        if (listWish.length == 0) {
            $('.heart-number').html("")
        } else {
            $('.heart-number').html(listWish.length)
        }

    });



    let item_width = $(".product-item:first-child").width();
    $(".redline").width(item_width);

    $(window).scroll(function () {
        let item_width = $(".product-item:first-child").width();
        $(".redline").width(item_width);
    });



});