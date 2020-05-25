let employees = [
   {
      firstName: "Tony",
      lastName: "Stark",
      employeeID: "001",
      employeeTitle: "Iron Man",
      employeeSalary: 70000,
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
      lastName: "Odinson",
      employeeID: "003",
      employeeTitle: "God of Thunder",
      employeeSalary: 125000,
   },
   {
      firstName: "Bruce",
      lastName: "Banner",
      employeeID: "004",
      employeeTitle: "Hulk",
      employeeSalary: 118000,
   },
   {
      firstName: "Natasha",
      lastName: "Romonov",
      employeeID: "005",
      employeeTitle: "Black Widow",
      employeeSalary: 45000,
   },
   {
      firstName: "Peter",
      lastName: "Parker",
      employeeID: "006",
      employeeTitle: "Intern",
      employeeSalary: 90000,
   },
   {
      firstName: "James",
      lastName: "Bond",
      employeeID: "007",
      employeeTitle: "Secret Agent Man",
      employeeSalary: 50000,
   },
   {
      firstName: "Clint",
      lastName: "Barton",
      employeeID: "008",
      employeeTitle: "Hawkeye",
      employeeSalary: 45000,
   },
   {
      firstName: "T'Challa",
      lastName: "son of T'Chaka",
      employeeID: "009",
      employeeTitle: "Black Panther",
      employeeSalary: 105000,
   },
   {
      firstName: "Wanda",
      lastName: "Maximoff",
      employeeID: "010",
      employeeTitle: "Scarlett Witch",
      employeeSalary: 110000,
   },
   {
      firstName: "Carol",
      lastName: "Danvers",
      employeeID: "011",
      employeeTitle: "Captain Marvel",
      employeeSalary: 205000,
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
   let eID = Number($("#employeeID").val());
   console.log(typeof eID);
   let eTitle = $("#employeeTitle").val();
   let eSalary = Number($("#employeeSalary").val());
   console.log(typeof eSalary);
   if (
      fName === "" ||
      lName === "" ||
      eID === "" ||
      eTitle === "" ||
      eSalary === ""
   ) {
      alert("Please fill out all inputs!");
   } else if (typeof eSalary != "number") {
      alert("Annual Salary and ID must be numbers!");
   } else {
      employees.push({
         firstName: fName,
         lastName: lName,
         employeeID: eID,
         employeeTitle: eTitle,
         employeeSalary: eSalary,
      });
   }

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
   if (totalMonthly > 20000) {
      $("#total").css("background-color", "rgb(255, 184, 184)");
   }
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
