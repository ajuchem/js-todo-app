// Problem: user interaction doesnt provide desired results.
// Solution: add interactivity so the user can manage daily tasks.

var taskInput = document.getElementById('new-task'); // new-task
var addButton = document.getElementsByTagName('button')[0]; // first button
var incompleteTasksHolder = document.getElementById('incomplete-tasks'); // incomplete-task
var completedTasksHolder = document.getElementById('completed-tasks'); // completed-task

// New task list item
var createNewTaskElement = function(taskString) {
  // create list item
  var listItem = ;

  // input (checkbox)
  // label
  // input (text)
  // button.edit
  // button.delete
  // each element needs to be modified and appended
  return listItem;
}

// Add a new task
var addTask = function() {
  console.log('Add task...');
    // Create a new list item w/ the text from #new-task:
  var listItem = createNewTaskElement('Some new task');

  // append list item to incompleteTasksHolder
}

// Edit an existing task
var editTask = function() {
  console.log('Edit task...');
  // When edit btn pressed
    // if parent class .editMode
      // switch from .editMode
      // label text become input's value
    // else
      // switch to .editMode
      // input value becomes labe's text

    // toggle .editMode on the parent
}

// Delete an existing task
var deleteTask = function() {
  console.log('Delete task...');
  // when btn is pressed
    // remove parent list item from the ul
}

// Mark as completed
var taskCompleted = function() {
  console.log('Task completed...');
  // when checkbox is checked
    // append task list item to #completed-tasks
}

// Mark as incomplete
var taskIncomplete = function() {
  console.log('Task incomplete...');
  // when the checkbox is unchecked
    // append the task list item to the #incomplete-tasks
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log('Bind list item events');
  // select taskListItem children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector('button.edit');
  var deleteButton = taskListItem.querySelector('button.delete');

  // bind editTask to edit button
  editButton.onclick = editTask;

  // bind deleteTask to delete button
  deleteButton.onclick = deleteTask;

  // bind checkBoxEventHandler to checkbox
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
for (var i= 0; i < incompleteTasksHolder.children.length; i++) {
  // for each list item
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
