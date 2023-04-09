let taskList = document.getElementById("taskList");

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let task = taskInput.value.trim();

  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  let taskItem = document.createElement("li");
  taskItem.innerHTML = task;

  let editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.onclick = function() { editTask(this); };

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = function() { deleteTask(this); };

  taskItem.appendChild(editButton).style.fontSize="14px";
  taskItem.appendChild(deleteButton).style.fontSize="14px";
  taskList.appendChild(taskItem).style.fontSize="18px";

  taskInput.value = "";
}

function editTask(editButton) {
  let taskItem = editButton.parentElement;
  let task = taskItem.firstChild;

  let newTask = prompt("Edit task:", task.textContent);

  if (newTask === null || newTask.trim() === "") {
    return;
  }

  task.textContent = newTask;
}

function deleteTask(deleteButton) {
  let taskItem = deleteButton.parentElement;
  taskList.removeChild(taskItem);
}
