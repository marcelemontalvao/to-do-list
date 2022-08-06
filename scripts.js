const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

function addTodo() {
    todoList.innerHTML += `
    <div class="todo">
        <li class="todo-item">${todoInput.value}</li>
        <button class="complete-btn" onclick="checkTask(event)">
            <i class="fas fa-check"></i>
        </button>
        <button class="trash-btn" onclick="removeTask(event)">
            <i class="fas fa-trash"></i>
        </button>
    </div>     
    `    
    clearInputValue();
}

function addInputValue() {

    const newTodo = document.querySelector('.todo-item');
    newTodo.innerHTML = todoInput.value;
}

function clearInputValue() {
    todoInput.value = "";
}

function checkTask(event) {
    const item = event.target;
    const todo = item.parentNode;
    todo.classList.toggle("completed");
}

function removeTask(event) {
    const item = event.target;
    const todo = item.parentNode;
    todo.remove();
}