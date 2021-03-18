$(document).ready(function () {

    $("#search-name").keyup(function (e) {
        if (e.which == 13) {
            $("tbody").html("");
            $.get(`http://localhost:3000/listStudent?name_like=${e.target.value}`, function (data, status) {
                data.forEach(item => {
                    $("tbody").append(`
            <tr>
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>${item.email}</td>
                <td>${item.description}</td>
                <td class="data-delete" data-id="${item.id}">xoá</td>
                <td class="data-update" data-id="${item.id}">Update</td>
            </tr>
            `)
                });
            });
        }
    });

    const reUpdateDom = () => {
        $.get(`http://localhost:3000/listStudent`, function (data, status) {
            // lay du lieu xong thi lam gi -> in danh sach học viên vào bảng

            let newDowmString = ''

            data.forEach(item => {
                newDowmString = newDowmString + `
                         <tr>
                         <td>${item.name}</td>
                         <td>${item.age}</td>
                         <td>${item.email}</td>
                         <td>${item.description}</td>
                         <td class="data-delete" data-id="${item.id}">xoá</td>
                         <td class="data-update" data-id="${item.id}">Update</td>
                     </tr>
                     `
            })


            let wrapBodyData = `<tbody id="body-data"> ${newDowmString} </tbody>`

            $("#body-data").replaceWith(wrapBodyData);
            listenClick()
        })
    }

    const listenClick = () => {
        $(".data-delete").click(function (event) {
            let { id } = event.currentTarget.dataset
            $.ajax({
                url: `http://localhost:3000/listStudent/${id}`,
                type: 'DELETE',
                success: function (result) {

                    // replaceWith lai body data
                    reUpdateDom()

                }
            });
        })
    }


    $.get(`http://localhost:3000/listStudent`, function (data, status) {
        data.forEach(item => {
            $("tbody").append(`
            <tr>
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>${item.email}</td>
                <td>${item.description}</td>
                <td class="data-delete" data-id="${item.id}">Xóa</td>
                <td class="data-update" data-id="${item.id}">Update</td>
            </tr>
            `)
        });
        listenClick()
    });

    $("#onAdd").click(function () {
        // Lấy data của 3 field 
        let name = $("#field-name").val();
        let age = $("#field-age").val();
        let email = $("#field-email").val();

        $.ajax({
            type: "POST",
            url: `http://localhost:3000/listStudent`,
            data: {
                name,
                age,
                email,
                description: "note"
            },
            success: function(result){
                reUpdateDom()
                $('#exampleModal').modal('hide')
            },
            dataType: 'json' // Có thể có hoặc không, vì đã có giá trị mặc định
        });
    });

});

// function onDelete(id){
//     console.log("id",id)
// }