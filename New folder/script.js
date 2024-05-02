document.addEventListener('DOMContentLoaded', function () {
  const addTodoForm = document.getElementById('add-todo-form');
  const newTodoInput = document.getElementById('new-todo');
  const todoList = document.getElementById('todo-list');

  addTodoForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const todoText = newTodoInput.value.trim();
    if (!todoText) return;

    const todoItem = createTodoItem(todoText);
    todoList.appendChild(todoItem);

    saveTodoToLocalStorage(todoText);
    newTodoInput.value = '';
  });

  function createTodoItem(todoText) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    const textSpan = document.createElement('span');
    textSpan.classList.add('text');
    textSpan.textContent = todoText;
    todoItem.appendChild(textSpan);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
      todoItem.remove();
      removeTodoFromLocalStorage(todoText);
    });
    todoItem.appendChild(deleteButton);

    return todoItem;
  }

  function saveTodoToLocalStorage(todoText) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todoText);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function removeTodoFromLocalStorage(todoText) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter(todo => todo !== todoText);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function loadTodosFromLocalStorage() {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => {
      const todoItem = createTodoItem(todo);
      todoList.appendChild(todoItem);
    });
  }

  loadTodosFromLocalStorage();
});

document.addEventListener('DOMContentLoaded', function () {
    // Load tasks from localStorage
    // Add event listeners for tab clicks
  });
  
  function openTab(evt, tabName) {
    // Get all elements with class="tabcontent" and hide them
    // Get all elements with class="tablinks" and remove the class "active"
    // Show the current tab, and add an "active" class to the button that opened the tab
  }
  