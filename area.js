// area.js

function calculateArea(length, width) {

  let area = length * width;
  debugger; 

  return area;

}

let area = calculateArea(5, 10);

console.log('Area of the rectangle:', area); // Should output 50

// Here's a step-by-step guide to using the debugger with the provided code:

// Understanding the Code:
// The calculateArea function multiplies length and width to calculate the area of a rectangle.
// Using the Debugger Statement:
// The debugger statement pauses execution right before the area calculation.
// Running the Script with Debugging Enabled:
// Run node inspect area.js in the terminal.
// Type cont to hit the debugger statement.
// Type repl to inspect the variables.
// Inspecting Variables:
// Type length and width to see their values.
// Back out of the repl by pressing Ctrl + C
// Type next to step to the next line and see how area is calculated.
// Type repl again.
// Type area to see its value after calculation.
