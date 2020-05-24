let employees = [
   {
      firstName: "Tony",
      lastName: "Stark",
      employeeID: "001",
      employeeTitle: "Iron Man",
      employeeSalary: 100000,
   },
   {
      firstName: "Steve",
      lastName: "Rogers",
      employeeID: "002",
      employeeTitle: "Captain 'Murrica",
      employeeSalary: 78000,
   },
   {
      firstName: "Thor",
      lastName: "Something",
      employeeID: "003",
      employeeTitle: "God of Thunder",
      employeeSalary: 67000,
   },
   {
      firstName: "Bruce",
      lastName: "Banner",
      employeeID: "004",
      employeeTitle: "Hulk",
      employeeSalary: 98000,
   },
   {
      firstName: "Natasha",
      lastName: "Romonov",
      employeeID: "005",
      employeeTitle: "Black Widow",
      employeeSalary: 75000,
   },
];

let rowElement = $("<tr class='employeeRow'></tr>");

function clearTable() {
   $("tbody").empty();
}

function setup() {
   clearTable();
   addRow();
   totalMonth();
}

// Add array object function
$("#addButton").on("click", function () {
   let fName = $("#firstName").val();
   let lName = $("#lastName").val();
   let eID = $("#employeeID").val();
   let eTitle = $("#employeeTitle").val();
   let eSalary = parseInt($("#employeeSalary").val());
   employees.push({
      firstName: fName,
      lastName: lName,
      employeeID: eID,
      employeeTitle: eTitle,
      employeeSalary: eSalary,
   });

   clearTable();
   addRow();
   totalMonth();

   console.log(employees);
});

// Add Row function
function addRow() {
   employees.forEach((element) => {
      let rowElement = $("<tr class='employeeRow'></tr>");
      rowElement.append(
         "<td>" +
            element.firstName +
            "</td><td>" +
            element.lastName +
            "</td><td>" +
            element.employeeID +
            "</td><td>" +
            element.employeeTitle +
            "</td><td>" +
            element.employeeSalary +
            "</td><td id='myBtn'><button>Delete</button></td>"
      );
      $("table tbody").append(rowElement);

      //   remove row/array object function
      $(rowElement).on("click", "#myBtn", function (event) {
         let del = $(this).parent();
         del.fadeOut(function () {
            del.remove();
            totalMonth();
            objRemove();
         });
      });
   });
}

$("document").ready(setup);

// add total function
function totalMonth() {
   let tables = document.getElementById("tableBody");
   let sumVal = 0;

   for (let i = 0; i < tables.rows.length; i++) {
      let someSal = Number(tables.rows[i].cells[4].innerText);

      sumVal += someSal;
   }
   totalMonthly = Math.round(sumVal / 12);
   $("#total").text("Total Monthly: $" + totalMonthly);
}

// remove deleted object from array
function objRemove() {
   let tables = document.getElementById("tableBody");
   let tempArr = [];
   console.log(tables.rows.length);
   for (let i = 0; i < tables.rows.length; i++) {
      let id = tables.rows[i].cells[2].innerText;
      console.log(id);
      employees.forEach((element) => {
         if (element.employeeID === id) {
            tempArr.push(element);
         }
      });
   }
   employees = tempArr;
   console.log(employees);
}
