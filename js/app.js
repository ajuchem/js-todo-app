// Problem: user interaction doesnt provide desired results.
// Solution: add interactivity so the user can manage daily tasks.

// Add a new task
  // When button is pressed
  // Create a new list item w/ the text from #new-task:
    // input (checkbox)
    // label
    // input (text)
    // button.edit
    // button.delete
    // each element needs to be modified and appended

// Edit an existing task
  // When edit btn pressed
    // if parent class .editMode
      // switch from .editMode
      // label text become input's value
    // else
      // switch to .editMode
      // input value becomes labe's text

    // toggle .editMode on the parent

// Delete an existing task
  // when btn is pressed
    // remove parent list item from the ul

// Mark as completed
  // when checkbox is checked
    // append task list item to #completed-task

// Mark as incomplete
  // when the checkbox is unchecked
    // append #incomplete-task
