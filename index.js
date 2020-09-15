// Add the Expense by CLICK.
document.querySelector("#addExpenseBtn").addEventListener("click", function() {
  var addExpenseKey = this.innerHTML;
  listeners(addExpenseKey);
});

// Add the Expense with KEYBOARD.
document.addEventListener("keydown", function(event) {
  listeners(event.key);
});

function addExpense() {

  // GET the information from the INPUTS.
  var nameInput = document.querySelector("#nameInput").value;

  var dateInput = document.querySelector("#dateInput").value;

  var amountInput = document.querySelector("#amountInput").value;

  // ADD the information to the Table.
  // Create New Table Row.
  var newTableRow = document.createElement("tr");

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
  buttonTdCellBtn.setAttribute("type", "button");
  buttonTdCellBtn.setAttribute("class", "deleteBtn");
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
  var appendTable = document.querySelector(".table");
  appendTable.appendChild(newTableRow);

  // Take Out the "No expenses" Table Row.
  var tableBodyLength = document.querySelectorAll("tr").length;

  if (tableBodyLength === 3) {
    var removeFirstTr = document.querySelector("#noExpense");
    removeFirstTr.remove();
  } else {
    console.log("You have " + tableBodyLength + " lines of expenses.");
  }

  //Refreshing the INPUTS to it inicial state.
  document.querySelector("#nameInput").value = "";
  document.querySelector("#nameInput").placeholder;
  document.querySelector("#dateInput").value = " ";
  document.querySelector("#amountInput").value = " ";

  addNoExpenseTr.remove();
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
      removeAllExpense();
      break;

    default:
      console.log(key);

  }
}

//Function to Remove All Data with DELETE
function removeAllExpense() {

  var tBody = document.querySelector("table");
  var rowCount = tBody.rows.length;

  for (var i = rowCount - 1; i > 0; i--) {
    tBody.deleteRow(i);
  }

  // Refresh that there's no DATA.
  // var addNoExpenseTr = document.createElement("tr");
  // var addNoExpenseTd = document.createElement("td");
  // addNoExpenseTd.setAttribute("colspan", "4");
  // var addNoExpenseText = document.createTextNode("No expenses added yet!");
  //
  // addNoExpenseTd.appendChild(addNoExpenseText);
  // addNoExpenseTr.appendChild(addNoExpenseTd);
  //
  // var tableBody = document.querySelector("table");
  // tableBody.appendChild(addNoExpenseTr);

}
