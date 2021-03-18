$(document).ready(function () {

    // Tìm kiếm từ khóa
    $("#search-name").keyup(function (event) {
        let key = $("#search-name").val();

        if (event.which == 13) {
            console.log(event)
            reUpdateDom(`name_like=${key}`);
        }
    });

    const reUpdateDom = (key) => {
        let url = "";
        if(key == ""){
            url = `http://localhost:3000/listStudent`;
        }else{
            url = `http://localhost:3000/listStudent?${key}`;
        }
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
        });

    }

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
            let data = { name, age, email, description}
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
    

    $("#onAdd").click(function () {
        let name = $("#field-name").val();
        let age = $("#field-age").val();
        let email = $("#field-email").val();
        let data = { name, age, email, description: "Add new" }
        $.ajax({
            type: "POST",
            url: `http://localhost:3000/listStudent`,
            data: data,
            success: function (result) {
                let key = $("#search-name").val();
                reUpdateDom(`name_like=${key}`);
                $("#exampleModal").modal("hide");
            },
            dataType: 'json'
        });
    });


});