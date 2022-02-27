// selectors
const todoInput = document.querySelector('#todoItem');
const todoButton = document.querySelector('#enterButton');
const deleteButton = document.querySelector('.delete-btn');
const todoList = document.querySelector('#todoList');

// event listeners
todoButton.addEventListener("click", addTodo); 
todoList.addEventListener("click", deleteTodo); 
todoList.addEventListener("click", completedTodo); 

//functions
function addTodo(event){
    //prevents default value
    event.preventDefault();
    //creates todo DIV
    const todoItemDiv = document.createElement('div');
    todoItemDiv.classList.add("todo"); 
    // creates li item
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-Item");
    //stick it inside the div 
    todoItemDiv.appendChild(newTodo);
    //completed button
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("completed-btn");
    todoItemDiv.appendChild(completedButton);
    //delete button
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = '<i class="fas fa-x"></i>';
    deleteButton.classList.add("delete-btn");
    todoItemDiv.appendChild(deleteButton);
    //append the entire div to list
    todoList.append(todoItemDiv);
    //clear input box after entry
    todoInput.value = ""
} 

function deleteTodo(e){
    const btn = e.target;
    if (btn.classList[0]==="delete-btn"){
        //remove the parent element of the button which is the todoItemDiv
        btn.parentElement.remove(); 
        console.log("hello");
    } 
}

function completedTodo(e){
    const btn = e.target;
    if (btn.classList[0]==="completed-btn"){
        btn.parentElement.classList.toggle('completed');
    } 
}