let cohorts = [
   {
      name: "Ada",
      status: "Tier 2",
      count: 13,
   },
   {
      name: "Babbage",
      status: "Tier 1",
      count: 13,
   },
   {
      name: "Charlie",
      status: "Tier 2",
      count: 13,
   },
   {
      name: "Delta",
      status: "Tier 2",
      count: 13,
   },
];

function clearTable() {
   $("tbody").empty();
}

function setup() {
   clearTable();
   let rowElement = $("<tr></tr>");
   cohorts.forEach((element) => {
      let rowElement = $("<tr class='cohortRow'></tr>");
      rowElement.append(
         "<td>" +
            element.name +
            "</td><td>" +
            element.count +
            "</td><td>" +
            element.status +
            "</td><td><button class='myBtn'>Delete</button></td>"
      );
      $("table tbody").append(rowElement);
   });

   $(".myBtn").on("click", function () {
      $(this).parent().parent().remove();
   });

   $("#cohortAdd").on("click", function () {
      console.log("test");
   });
}

$("document").ready(setup);

function addInput() {
   $("form").append();
}
