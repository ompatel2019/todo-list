const task = document.getElementById('todo-item');
var taskList = document.getElementById('task-list');

function clearTasks() {
    taskList.innerHTML = ''
    localStorage.removeItem('data');
}

function addTask() {

    if (task.value === '') {
        alert('Cannot Add An Empty Task!')
    } else {
        const newTask = document.createElement('li');
        newTask.innerHTML = task.value;
        taskList.append(newTask);
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

    console.log(e.target.tagName);
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.removeItem();
    }
});



