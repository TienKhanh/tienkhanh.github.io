$(document).ready(function () {

    let default_Params = {
        key: `name_like=`,
        page: 1,
        limit: 5,
        sort: ""
    }

    // Tìm kiếm từ khóa
    $("#search-name").keyup(function (event) {
        let key = $("#search-name").val();

        if (event.which == 13) {
            // Giữ nguyên default_Params, chỉ thay đổi key.
            let params = { ...default_Params, key: `name_like=${key}` }
            reUpdateDom(params)
        }
    });


    const reUpdateDom = (obj = default_Params) => {

        let { page, key, limit, sort } = obj;
        let url = `http://localhost:3000/listStudent?_page=${page}&_limit=${limit}&${key}&_sort=${sort}`;

        $("#body-data").html("");
        $.get(url, function (data, status) {
            data.forEach(item => {
                $("#body-data").append(`
                <tr>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td>${item.email}</td>
                    <td>${item.description}</td>
                    <td class="data-delete" data-id="${item.id}">Xóa</td>
                    <td class="data-update">
                        <button type="button" style="border:none;background:none;outline:none;" data-toggle="modal" data-target="#updateId${item.id}" data-id="${item.id}">
                            Update
                        </button>
                    
                    
                        <div class="modal fade" id="updateId${item.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div>
                                            <label for="">Id</label>
                                            <input type="text" id="field-id-${item.id}" value="${item.id}">
                                        </div>
                                        <div>
                                            <label for="">Name</label>
                                            <input type="text" id="field-name-${item.id}" value="${item.name}">
                                        </div>
                                        <div>
                                            <label for="">Age</label>
                                            <input type="text" id="field-age-${item.id}" value="${item.age}">
                                        </div>
                                        <div>
                                            <label for="">Email</label>
                                            <input type="text" id="field-email-${item.id}" value="${item.email}">
                                        </div>
                                        <div>
                                            <label for="">Description</label>
                                            <input type="text" id="field-description-${item.id}" value="${item.description}">
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary onUpdate" data-id=${item.id}>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                `)
            });

            deleteClick();
            updateClick();
            // createPagination();
        });
    }

    // const createPagination = () => {
    //     $.get(`http://localhost:3000/listStudent`, function(data){
    //         let totalItem = data.length;
    //         let perPage = 5;
    //         let countPagination = Math.ceil(totalItem/perPage);
    //         // console.log(countPagination)
    //     })
    // }
    const deleteClick = () => {
        $(".data-delete").click(function (event) {
            let { id } = event.currentTarget.dataset;
            $.ajax({
                url: `http://localhost:3000/listStudent/${id}`, // url data you want to delete
                type: 'DELETE',
                success: function (result) {
                    reUpdateDom();
                }
            });
        });
    }

    const updateClick = () => {
        $(".onUpdate").click(function () {
            let id = $(this).attr("data-id");
            let name = $(`#field-name-${id}`).val();
            let email = $(`#field-email-${id}`).val();
            let age = $(`#field-age-${id}`).val();
            let description = $(`#field-description-${id}`).val();
            let data = { name, age, email, description }
            console.log(data)
            $.ajax({
                type: "PUT",
                url: `http://localhost:3000/listStudent/${id}`,
                data: data,
                success: function (result) {
                    let key = $("#search-name").val();
                    reUpdateDom(`name_like=${key}`);
                    $(`#updateId${id}`).modal("hide");
                    $('.modal-backdrop').remove();
                },
                dataType: 'json'
            });
        });
    }

    // Hiển thị nội dung 
    reUpdateDom()

    $(".page-item").click(function (event) {
        // event.target chạy ra DOM hiện tại
        // let page = $(event.target).text();
        let page = event.target.innerText;
        let params = { ...default_Params, page }
        reUpdateDom(params)
    });
    $("#up-sort-name").click(function (event) {
        let params = { ...default_Params, sort: `name&_order=asc` }
        reUpdateDom(params)
    });
    $("#down-sort-name").click(function (event) {
        let params = { ...default_Params, sort: `name&_order=desc` }
        reUpdateDom(params)
    });

    $("#onAdd").click(function () {
        let name = $("#field-name").val();
        let age = parseInt($("#field-age").val());
        let email = $("#field-email").val();
        let data = { name, age, email, description: true }
        $.ajax({
            type: "POST",
            url: `http://localhost:3000/listStudent`,
            data: JSON.stringify(data),
            success: function (result) {
                let key = $("#search-name").val();
                reUpdateDom(`name_like=${key}`);
                $("#exampleModal").modal("hide");
            },
            contentType: 'application/json'


            
        });
    });


});