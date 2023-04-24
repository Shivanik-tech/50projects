const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");
const filterOption=document.querySelector('.filter-todo')
//event-listner
document.addEventListener("DOMContentLoaded",getTodos)
todoButton.addEventListener("click",addTodo);
todoList.addEventListener('click',deleteCheck)
filterOption.addEventListener("click",filterTodo)
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
    //add todo to localstorage
    saveLocalTodos(todoInput.value);
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
        // //Animation
        // todo.classList.add('fall')
        
            todo.remove()
        
    }
    //check mark
    if(item.classList[0]==="completed-btn")
    var todo =item.parentElement;
    todo.classList.toggle("completed")
}
function filterTodo(e){
 const todos=todoList.childNodes;
 todos.forEach(function(todo){
    switch(e.target.value){
        case "all":
            todo.style.display='flex';
            break;
        case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display='flex';
                }else{
                    todo.style.display='none';
                }
                break;
        case "uncompleted":
            if(!todo.classList.contains("uncompleted")){
                todo.style.display='flex';
            }else{
                todo.style.display='none';
            }
            break;
    }
 }) 
    
 }
 //filterTodo function didnt worked
 function saveLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos))
 }
 function getTodos(){
    console.log("hello")
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach(function(todo){
    //todo div
    const todoDiv=document.createElement('div');
    todoDiv.classList.add('todo')
    //create li
    const newTodo=document.createElement('li');
    newTodo.innerText=todo;
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
    
    })
 }
