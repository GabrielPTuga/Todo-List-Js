const todoList = [{
    name: "Faze almoço",
    doDate: "2022-06-03"
},{
    name: "Estudar MD",
    doDate: "2025-06-11"
}]; // Empty array

renderTodoList();

function renderTodoList() {
    let todoListHTML = "";

    for (let i = 0;i<todoList.length;i++) {
        const todoObj = todoList[i];
        // const name = todoObj.name;
        //const doDate = todoObj.doDate;
        const {name, doDate} = todoObj
        const html = `<div>${name}</div> <div>${doDate}</div> <button class="remove-button js-remove">Remove</button> `;
        todoListHTML += html;
    }

    console.log(todoListHTML);

    document.querySelector(".js-todo-list").innerHTML = todoListHTML;

    //console.log(document.querySelectorAll(".js-remove"))
    document.querySelectorAll(".js-remove").forEach((deleteButton, index) => {
        deleteButton.addEventListener("click",() => {
            todoList.splice(index,1);
            renderTodoList();
        });
    })

    // Quando o forEach é executado o "index" deixa de exixstir
    // Ou seja não é possivel aceder os index por console.log(index)
}

function addTodo() {
    const inputElement = document.querySelector(".js-todo-input");
    const name = inputElement.value;

    const dateInput = document.querySelector(".js-box")
    const doDate = dateInput.value

    todoList.push({
        //name: name,
        //doDate: doDate,
        name,
        doDate
    });
    console.log(todoList);

    inputElement.value = ""; // Resetar texto do text box
    renderTodoList();
}
