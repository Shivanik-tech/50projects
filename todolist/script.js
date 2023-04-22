const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');
//event-listner
todoButton.addEventListener("click",addTodo);
todoList.addEventListener('click',deleteCheck)
//function
function addTodo(event){
    //prevent form from submittiong
    event.preventDefault();
    //todo div
    const todoDiv=document.createElement('div');
    todoDiv.classList.add('todo')
    //create li
    const newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // checkmark button
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>'
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton)
    //complete trash mark button
    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    //clear todo Input value
    todoInput.value=""
}
function deleteCheck(e){
    const item=e.target;
    //ddelete todo
    if(item.classList[0]==="trash-btn"){
        var todo=item.parentElement;
        //Animation
        todo.classList.add('fall')
        
            todo.remove()
        
    }
    //check mark
    if(item.classList[0]==="completed-btn")
    var todo =item.parentElement;
    todo.classList.toggle("completed")
}