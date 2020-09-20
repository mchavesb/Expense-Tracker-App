// Add the Expense by CLICK.
document.querySelector("#addExpenseBtn").addEventListener("click", function() {
  var addExpenseKey = this.innerHTML;
  listeners(addExpenseKey);
});

// Add the Expense with KEYBOARD.
document.addEventListener("keydown", function(event) {
  listeners(event.key);
});

// Remove Row with click.
document.querySelector("#tBody").addEventListener("click", function(event) {
  if (event.target.className === "deleteBtn") {
    var row = event.target.parentNode.parentNode;
    row.remove();
  }

  if (document.querySelector("#tBody").rows.length === 1) {
    document.querySelector("#noExpense").classList.remove("hide");
  }
});

// Function to Add Expense.
function addExpense() {

  // GET the information from the INPUTS.
  var nameInput = document.querySelector("#nameInput").value;

  var dateInput = document.querySelector("#dateInput").value;

  var amountInput = document.querySelector("#amountInput").value;

  // ADD the information to the Table.
  // Create New Table Row.
  var newTableRow = document.createElement("tr");
  newTableRow.setAttribute("class", "jRows");

  // Create the "Name Input" Data Cell.
  var nameTdCell = document.createElement("td");
  var nameTdText = document.createTextNode(nameInput);

  // Create the "Data Input" Data Cell.
  var dateTdCell = document.createElement("td");
  var dateTdText = document.createTextNode(dateInput);

  // Create the "Amount Input" Data Cell.
  var amountTdCell = document.createElement("td");
  var amountTdText = document.createTextNode("$" + amountInput);

  // Create the "Delete Button" Data Cell.
  var buttonTdCell = document.createElement("td");
  var buttonTdCellBtn = document.createElement("button");
  buttonTdCellBtn.setAttribute("class", "deleteBtn");
  buttonTdCellBtn.setAttribute("type", "button");
  var buttonTdText = document.createTextNode("❌");

  // Append "Name", "Date", "Amount" & Button - To the Table Row.
  nameTdCell.appendChild(nameTdText);
  newTableRow.appendChild(nameTdCell);

  dateTdCell.appendChild(dateTdText);
  newTableRow.appendChild(dateTdCell);

  amountTdCell.appendChild(amountTdText);
  newTableRow.appendChild(amountTdCell);

  buttonTdCellBtn.appendChild(buttonTdText);
  buttonTdCell.appendChild(buttonTdCellBtn);
  newTableRow.appendChild(buttonTdCell);

  // Append All to the Table.
  var appendTable = document.querySelector("#tBody");
  appendTable.appendChild(newTableRow);

  // Hide the "No expenses" Table Row.
  document.querySelector("#noExpense").classList.add("hide");

  //Refreshing the INPUTS to it inicial state.
  document.querySelector("#nameInput").value = "";
  document.querySelector("#nameInput").placeholder;
  document.querySelector("#dateInput").value = "";
  document.querySelector("#dateInput").placeholder;
  document.querySelector("#amountInput").value = " ";

}

// Switch for the listeneres.
function listeners(key) {

  switch (key) {
    case "Add Expense":
      addExpense();
      break;

    case "Enter":
      addExpense();
      break;

    case "Backspace":
      removeAllRows();
      break;

    default:

  }
}

// Function to remove all Rows.
function removeAllRows() {
  // Remove all items.
  var body = document.querySelector("#tBody");
  body.innerHTML = "";

  // Create the NO Expense again.
  var newTr = document.createElement("tr");
  var newTd = document.createElement("td");
  newTd.setAttribute("colspan", "4");
  newTd.setAttribute("id", "noExpense");
  var newTdText = document.createTextNode("No expenses added yet!");

  // Append it to the tBody.
  newTd.appendChild(newTdText);
  newTr.appendChild(newTd);

  body.appendChild(newTr);

}
