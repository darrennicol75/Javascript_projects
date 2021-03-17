// DEFINE OUR UI VARS 

const form = document.querySelector('#task-form'); // use # if using querySelector and grabbing id's
const taskList = document.querySelector('.collection'); 
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter'); 
const taskInput = document.querySelector('#task');

// load all event listeners 
loadEventListeners(); 

function loadEventListeners(){
    // DOM Load event
    document.addEventListener('DOMContentLoaded', getTasks);
    // submit load enent
    form.addEventListener('submit', addTask);
    // remove task event
    taskList.addEventListener('click',removeTask);
    // clear task event button
    clearBtn.addEventListener('click', clearTasks);
    // filter through tasks 
    filter.addEventListener('keyup', filterTasks);
}

// get tasks from Local Storage
function getTasks(){
    let tasks; 
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        
        const li = document.createElement('li');
        li.className = 'collection-item'; 
        li.appendChild(document.createTextNode(task));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content'; 
        link.innerHTML = '<i class="fa fa-remove"></i>'; 
        li.appendChild(link);
        taskList.appendChild(li);

    });
}

// add task with if statement to ensure it is not submitted empty
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task'); //if not task added return alert
    }
    //create li element i.e. a task! 
    const li = document.createElement('li');
    // add a class
    li.className = 'collection-item'; 
    //create text node and append to li i.e. add text to li 
    li.appendChild(document.createTextNode(taskInput.value));
    // create a new link element (the delete icon)
    const link = document.createElement('a');
    // add class 
    link.className = 'delete-item secondary-content'; // secondary content required for x icon
    // add icon html 
    link.innerHTML = '<i class="fa fa-remove"></i>'; 
    // append the link to li
    li.appendChild(link); 
    //append li to ul
    taskList.appendChild(li);

    //store in local storage 
    storeTaskInLocalStorage(taskInput.value); 

    //clear input 
    taskInput.value= '';

    e.preventDefault();
}

// store task 

function storeTaskInLocalStorage(task){
    let tasks; 
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks)); 
}

// remove task 
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        //console.log(e.target); 
        if(confirm('Are you sure?')){ // confirm uses an alert to confirm
        e.target.parentElement.parentElement.remove();
        
        // remove from LS
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);

        }
    }
}
// remove from LS 
function removeTaskFromLocalStorage(taskItem){
    let tasks; 
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// clear tasks button
function clearTasks(){
    //loop with while loop or taskList.innerHTML = ''; SLOWER WAY
    while(taskList.firstChild){ 
        taskList.removeChild(taskList.firstChild);
    }

    // clear from ls 
    clearTasksFromLocalStorage(); 

}

// clear tasks from LS 
function clearTasksFromLocalStorage(){
    localStorage.clear();
}

// filter tasks function 
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.getElementsByClassName.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}