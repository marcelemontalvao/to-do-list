//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
    todoButton.addEventListener('click', addTodo);
    todoList.addEventListener('click', checkTask);
    todoList.addEventListener('click', removeTask);


//Functions
function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault();
    
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo);

    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //CHECK TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //APPEND TO LIST
    todoList.appendChild(todoDiv);
   
    //MY CODE
    /*
    if(event.target){
    todoList.innerHTML = `
    <div class="todo">
        <li class="todo-item">hey</li>
        <button class="complete-btn">
            <i class="fas fa-check">adfa</i>;
        </button>
        <button class="trash-btn">
            <i class="fas fa-trash">adfa</i>;
        </button>    
    </div>
`
    }
    */
   clearInputValue();
}

function clearInputValue() {
    todoInput.value = "";
}

function checkTask(e) {
    const item = e.target;
    //CHECK MARK 
    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }

}

function removeTask(e) {
    const item = e.target;
    //DELETE TODO 
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.remove();
    }
}
 
