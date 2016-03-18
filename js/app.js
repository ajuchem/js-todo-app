// Problem: user interaction doesnt provide desired results.
// Solution: add interactivity so the user can manage daily tasks.

var taskInput = document.getElementById('new-task'); // new-task
var addButton = document.getElementsByTagName('button')[0]; // first button
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
  var listItem = createNewTaskElement('Some new task');
  // Append list item to incompleteTasksHolder
  incompleteTasksHolder.appendChild(listItem);

}

// Edit an existing task
var editTask = function() {
  console.log('Edit task...');
  // When edit btn pressed
    // If parent class .editMode
      // Switch from .editMode
      // Label text become input's value
    // Else
      // Switch to .editMode
      // Input value becomes labe's text

    // Toggle .editMode on the parent
}

// Delete an existing task
var deleteTask = function() {
  console.log('Delete task...');
  // When btn is pressed
    // Remove parent list item from the ul
}

// Mark as completed
var taskCompleted = function() {
  console.log('Task completed...');
  // When checkbox is checked
    // Append task list item to #completed-tasks
}

// Mark as incomplete
var taskIncomplete = function() {
  console.log('Task incomplete...');
  // When the checkbox is unchecked
    // Append the task list item to the #incomplete-tasks
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

// Set the click handler to the addTask function
addButton.onclick = addTask;

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
