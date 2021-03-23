$(document).ready(function () {
    // render dữ liệu ra ngoài màn hình hiển thị với hàm renderUI
    const renderUI = () => {
        $.get(`http://localhost:3000/todoList`, function (data) {
            $(".todo-list").html("");
            if (data.length == 0) {
                $(".todo-list").html(`<p class="todos-empty">Không có ghi chú.</p>`);
            } else {
                data.forEach(item => {
                    $(".todo-list").append(`
                        <div class="todo-item ${item.status ? 'active-todo' : ''}">
                            <div class="todo-item-title">
                                <input type="checkbox" ${item.status ? 'checked' : ''} class="toggleTodo" data-id="${item.id}">
                                <p>${item.title}</p>
                            </div>
                            <div class="option">
                                <button class="btn btn-update" data-id="${item.id}">
                                    <img src="https://buihien0109.github.io/HTML5-Games/DOM-project/todo/img/pencil.svg" alt="icon">
                                </button>
                                <button class="btn btn-delete" data-id="${item.id}">
                                    <img src="https://buihien0109.github.io/HTML5-Games/DOM-project/todo/img/remove.svg" alt="icon">
                                </button>
                            </div>
                        </div>
                    `);
                });
            }
            toggleTodo()
            deleteTodo()
            updateTodo()

        })
    }
    renderUI()

    // Update
    const updateTodo = () => {
        $(".btn-update").click(function (event) {
            let title = "";
            let { id } = event.currentTarget.dataset;
            $.get(`http://localhost:3000/todoList/`, function (data) {
                data.forEach(item => {
                    if (item.id == id) {
                        title = item.title;
                        $("#todo-input").val(title);
                        $("#todo-input").attr("data-id", item.id);
                        $("#todo-input").attr("data-status", item.status);
                        $("#todo-input").focus();
                        $("#btn-add").text("CẬP NHẬT");
                    }
                });

            });
        });
    }




    // Delete
    const deleteTodo = () => {
        $(".btn-delete").click(function (event) {
            let { id } = event.currentTarget.dataset;
            console.log(id)
            $.ajax({
                url: `http://localhost:3000/todoList/${id}`, // url data you want to delete
                type: 'DELETE',
                success: function (result) {
                    // renderUI();
                }
            });
        });
    }



    // Toggle todo, hiện gặp vấn đề với boolean khi update vào json
    const toggleTodo = () => {
        $(".toggleTodo").click(function (event) {
            let { id } = event.currentTarget.dataset;
            console.log(id)
            $.get(`http://localhost:3000/todoList`, function (data) {
                data.forEach(item => {
                    if (item.id == id) {
                        let title = item.title;
                        let status = 0;
                        console.log(item.status)
                        console.log(status)
                        data = { title: title, status: status }
                        $.ajax({
                            type: "PUT",
                            url: `http://localhost:3000/todoList/${id}`,
                            data: data,
                            success: function (result) {
                                renderUI()
                            },
                            dataType: 'json'
                        });

                    }
                })

            });

        });
    }

    $("#btn-add").click(function () {
        let t = $("#btn-add").text();
        console.log(t)
        if (t == "CẬP NHẬT") {
            let title = $("#todo-input").val();
            let id = $("#todo-input").attr("data-id");
            let status = $("#todo-input").attr("data-status");
            $.ajax({
                type: "PUT",
                url: `http://localhost:3000/todoList/${id}`,
                data: { id, title, status },
                success: function (result) {
                    $("#todo-input").val("");
                    $("#todo-input").attr("data-id", "");
                    $("#todo-input").attr("data-status", "");
                    $("#btn-add").text("THÊM");
                    renderUI()
                },
                dataType: 'json'
            });

        }
    });


});