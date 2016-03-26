// Problem: user interaction doesnt provide desired results.
// Solution: add interactivity so the user can manage daily tasks.

var taskInput = document.getElementById('new-task'); // new-task
var addButton = document.getElementsByTagName('button')[0]; // first button
addButton.disabled = true;
var incompleteTasksHolder = document.getElementById('incomplete-tasks'); // incomplete-task
var completedTasksHolder = document.getElementById('completed-tasks'); // completed-task

// New task list item
var createNewTaskElement = function(taskString) {
  // Create list item
  var listItem = document.createElement('li');

  // input (checkbox)
  var checkBox = document.createElement('input');
  // label
  var label = document.createElement('label');
  // input (text)
  var editInput = document.createElement('input');
  // button.edit
    var editButton = document.createElement('button');
  // button.delete
    var deleteButton = document.createElement('button');

  // Each element needs modifying

  checkBox.type = 'checkbox';
  editInput.type = 'text';

  editButton.innerText = 'Edit';
  editButton.className = 'edit';
  deleteButton.innerText = 'Delete';
  deleteButton.className = 'delete';

  label.innerText = taskString;

  // Each element needs appending
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}

// Add a new task
var addTask = function() {
  console.log('Add task...');
    // Create a new list item w/ the text from #new-task:
  var listItem = createNewTaskElement(taskInput.value);
  // Append list item to incompleteTasksHolder
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);

  taskInput.value = '';
}

// Edit an existing task
var editTask = function() {
  console.log('Edit task...');

  var listItem = this.parentNode;
  var editButton = listItem.querySelector('button.edit');
  var editInput = listItem.querySelector('input[type=text]');
  var label = listItem.querySelector('label');
  var containsClass = listItem.classList.contains('editMode');

  // If parent class .editMode
  if(containsClass) {
    // Switch from .editMode
    // Label text become input's value
    editButton.innerText = "Edit";
    label.innerText = editInput.value;
  } else {
    // Switch to .editMode
    // Input value becomes labe's text
    editButton.innerText = "Save";
    editInput.value = label.innerText;
    }

  // Toggle .editMode on the list item
  listItem.classList.toggle('editMode');

}

// Delete an existing task
var deleteTask = function() {
  console.log('Delete task...');
  var listItem = this.parentNode;
  var ul = listItem.parentNode;

  // Remove parent list item from the ul
  ul.removeChild(listItem);
}

// Mark as completed
var taskCompleted = function() {
  console.log('Task completed...');
  // Append task list item to #completed-tasks
  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}

// Mark as incomplete
var taskIncomplete = function() {
  console.log('Task incomplete...');
  // Append the task list item to the #incomplete-tasks
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log('Bind list item events');
  // Select taskListItem children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector('button.edit');
  var deleteButton = taskListItem.querySelector('button.delete');

  // bind editTask to edit button
  editButton.onclick = editTask;

  // Bind deleteTask to delete button
  deleteButton.onclick = deleteTask;

  // Bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;
}

var ajaxRequest = function() {
  console.log('AJAX request');
}

// Set the click handler to the addTask function
addButton.addEventListener('click', addTask);
addButton.addEventListener('click', ajaxRequest);

// This will monitor the task input box and disable/unable button
taskInput.addEventListener('input', function() {
  if(this.value === "") {
    addButton.disabled = true;
  } else {
    addButton.disabled = false;
  }
})

// Cycle over incompleteTasksHolder ul list items
for (var i= 0; i < incompleteTasksHolder.children.length; i++) {
  // for each list item
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}



// Cycle over completedTasksHolder ul list items
for (var i= 0; i < completedTasksHolder.children.length; i++) {
  // for each list item
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
