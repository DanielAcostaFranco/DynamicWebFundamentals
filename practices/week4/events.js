let tasks = [];

function newTask() {
  const taskInput = document.getElementById('todo').value;
  
  if (taskInput) {
    const task = { detail: taskInput, completed: false };
    tasks.push(task);
    renderTasks(tasks);
  }
}

document.getElementById('submitTask').addEventListener('click', newTask);

function renderTasks(tasks) {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = ''; // Clear previous tasks
  
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.classList.toggle('strike', task.completed);
    
    li.innerHTML = `
      <p>${task.detail}</p>
      <div>
        <span data-action="delete">❎</span>
        <span data-action="complete">✅</span>
      </div>
    `;
    
    todoList.appendChild(li);
  });
}

function manageTasks(event) {
  const target = event.target;
  
  if (target.dataset.action === 'delete') {
    const taskElement = target.closest('li');
    removeTask(taskElement);
  } else if (target.dataset.action === 'complete') {
    const taskElement = target.closest('li');
    completeTask(taskElement);
  }
}

document.getElementById('todoList').addEventListener('click', manageTasks);

function removeTask(taskElement) {
  tasks = tasks.filter((task) => task.detail !== taskElement.querySelector('p').innerText);
  taskElement.remove();
}

function completeTask(taskElement) {
  const taskIndex = tasks.findIndex((task) => task.detail === taskElement.querySelector('p').innerText);
  tasks[taskIndex].completed = !tasks[taskIndex].completed;
  taskElement.classList.toggle('strike');
}
