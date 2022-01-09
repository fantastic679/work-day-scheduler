var today = moment();
var todayString = today.format("Do") + " of " + today.format("MMMM") + ", " + today.format("YYYY");
$("#currentDay").text(todayString);
// var asdasd = document.getElementById("currentDay");
// asdasd.textContent = todayString;

$("[time24]").each(function() {
    if (parseInt($(this).attr("time24")) < today.hours()) {
        $(this).addClass("past");
    } else if (parseInt($(this).attr("time24")) == today.hours()) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
});