const todoList = []; // Empty array


function addTodo() {
    const inputElement = document.querySelector(".js-todo-input");
    const name = inputElement.value;

    todoList.push(name);
    console.log(todoList);

    inputElement.value = ""; // Resetar texto do text box
}