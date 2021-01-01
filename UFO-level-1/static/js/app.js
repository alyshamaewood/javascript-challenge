// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
// console.log(data);

// Step 1: Loop Through `data` and console.log each ufo report object
// data.forEach(function(ufoReport) {
//   // console.log(ufoReport);
// });

// // Step 2:  Use d3 to append one table row `tr` for each ufo report object
// data.forEach(function(ufoReport) {
//   // console.log(ufoReport);
//   var row = tbody.append("tr");
// });

// // Step 3:  Use `Object.entries` to console.log each ufo report value
// data.forEach(function(ufoReport) {
//   // console.log(ufoReport);
//   var row = tbody.append("tr");

//   Object.entries(ufoReport).forEach(function([key, value]) {
//     // console.log(key, value);
//   });
// });


function runReport(data){
// Step 4: Use d3 to update each cell's text with
// ufo report values (date, city, state, country, shape, duration, comments)
  data.forEach(function(ufoReport) {
  // console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      // console.log(key, value);
      // Append a cell to the row for each value
      // in the ufo report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

}

// Select the button
var button = d3.select("#filter-btn");

// Select the form
// var form = d3.select(".form-group");

// Create event handlers 
button.on("click", runEnter);
// form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  tbody.html("");

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(ufo_sighting => ufo_sighting.datetime === inputValue);
  runReport(filteredData);
  console.log(filteredData);

};

runReport(tableData);