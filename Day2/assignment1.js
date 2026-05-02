// Question 1: The Guest List Formatter
// Goal: Practice Template Literals and Array Methods.
// Write a function called formatGuests that takes an array of names. The function should:
// Remove the first name from the list (it’s the host, not a guest).
// Add "Guest: " before each remaining name using .map().
// Return a single string where each guest is on a new line.




// let guests = ["Alice", "Bob", "Charlie"];

// function formatGuests() {
//     guests.shift();
//     console.log(guests)
//     console.log(guests.map(guest => "Guest : " + guest));
// }

// formatGuests();


function formatGuests(names) {
  names.shift(); // remove host

  return names
    .map(name => `Guest: ${name}`)
    .join("\n");
}

// Example
console.log(formatGuests(["John", "Alice", "Bob", "Charlie"]));