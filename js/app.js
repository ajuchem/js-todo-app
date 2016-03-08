// Problem: user interaction doesnt provide desired results.
// Solution: add interactivity so the user can manage daily tasks.

var taskInput = document.getElementById('new-task');
var addButton = document.getElementsByTagName('button')[0]; // first btn
var incompleteTasksHolder = document.getElementById('incomplete-task');
var completedTasksHolder = document.getElementById('completed-task');
// Add a new task
var addTask = function() {
  console.log('Add task...');
  // When button is pressed
  // Create a new list item w/ the text from #new-task:
    // input (checkbox)
    // label
    // input (text)
    // button.edit
    // button.delete
    // each element needs to be modified and appended
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
  console.log('Completed task...');
  // when checkbox is checked
    // append task list item to #completed-task
}

// Mark as incomplete
var taskIncompleted = function() {
  console.log('Incomplete task...');
  // when the checkbox is unchecked
    // append #incomplete-task
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  // select its children
  // bind editTask to edit btn
  // bind deleteTask to delete btn
  // bind checkBoxEventHandler to checkbox
}

// Set the click handler to the addTask function
addButton.onclick = addTask;

// Cycle over incompleteTasksHolder ul list items
  //for each list item
    // bind events to list item's children (taskCompleted)


    // Cycle over completedTasksHolder ul list items
      //for each list item
        // bind events to list item's children (taskIncompleted)
