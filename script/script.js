const task = document.getElementById('todo-item');
const taskList = document.getElementById('task-list');

function clearTasks() {
    taskList.innerHTML = '';
    localStorage.removeItem('data');
}

function addTask() {
    if (task.value === '') {
        alert('Cannot Add An Empty Task!');
    } else {
        const li = document.createElement('li');
        li.className = 'dark:text-white';
        li.innerHTML = task.value;
        
        const span = document.createElement('span');
        span.innerHTML = '&times;';
        li.appendChild(span);
        
        taskList.appendChild(li);
        
        task.value = '';
        saveItem();
    }
}

function saveItem() {
    localStorage.setItem('data', taskList.innerHTML);
}

function displayData() {
    const list = localStorage.getItem('data');
    if (list) {
        taskList.innerHTML = list;
    }
}

displayData();

document.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveItem();
    }
});


console.log(taskList.innerHTML)