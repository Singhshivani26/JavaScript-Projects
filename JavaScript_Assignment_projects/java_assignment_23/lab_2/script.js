// Get references to HTML elements
const todoForm = document.getElementById("todo-form");
const taskNameInput = document.getElementById("task-name");
const taskStatusSelect = document.getElementById("task-status");
const todoList = document.getElementById("todo-list");
const filterButtons = document.querySelectorAll("#filter button");

// Initialize todos array and load from LocalStorage
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Render todo items
function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.className = todo.status;
        li.innerHTML = `
            <span>${todo.name}</span>
            <button class="edit" onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

// Add a new todo
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskName = taskNameInput.value.trim();
    const taskStatus = taskStatusSelect.value;

    if (taskName) {
        const newTodo = {
            name: taskName,
            status: taskStatus
        };
        todos.push(newTodo);
        saveTodos();
        renderTodos();
        taskNameInput.value = "";
    } else {
        alert("Please enter a task name!");
    }
});

// Edit an existing task
function editTask(index) {
    const todo = todos[index];
    const newName = prompt("Edit task:", todo.name);
    if (newName) {
        todos[index].name = newName;
        saveTodos();
        renderTodos();
    }
}

// Delete a task
function deleteTask(index) {
    if (confirm("Are you sure you want to delete this task?")) {
        todos.splice(index, 1);
        saveTodos();
        renderTodos();
    }
}

// Save todos to LocalStorage
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Filter todos
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.id;
        let filteredTodos;
        if (filter === "all") {
            filteredTodos = todos;
        } else {
            filteredTodos = todos.filter(todo => todo.status === filter);
        }
        renderFilteredTodos(filteredTodos);
    });
});

// Render filtered todos
function renderFilteredTodos(filteredTodos) {
    todoList.innerHTML = "";
    filteredTodos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.className = todo.status;
        li.innerHTML = `
            <span>${todo.name}</span>
            <button class="edit" onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

// Initialize by rendering todos
renderTodos();
