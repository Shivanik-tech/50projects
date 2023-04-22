const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');
//event-listner
todoButton.addEventListener("click",addTodo);
//function
function addTodo(event){
    //prevent form from submittiong
    event.preventDefault();
    //todo div
    const todoDiv=document.createElement('div');
    todoDiv.classList.add('todo')
    //create li
    const newTodo=document.createElement('li');
    newTodo.innerText='hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //complete checkmark button
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>'
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton)
    //complete trash mark button
    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>'
    trashButton.classList.add("completed-btn");
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
}