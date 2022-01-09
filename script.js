var today = moment();
var todayString = today.format("Do") + " of " + today.format("MMMM") + ", " + today.format("YYYY");
$("#currentDay").text(todayString);
// var asdasd = document.getElementById("currentDay");
// asdasd.textContent = todayString;