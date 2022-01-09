var today = moment();

// Restored previously saved items from local memory
// NOTE items from previous day will carry forward if note cleared
$("textarea").each(function() {
    $(this).val(localStorage.getItem($(this).attr("time24")));
});

// Display current date
var todayString = today.format("Do") + " of " + today.format("MMMM") + ", " + today.format("YYYY");
$("#currentDay").text(todayString);

// Change textarea colour based on current time
$("[time24]").each(function() {
    if (parseInt($(this).attr("time24")) < today.hours()) {
        $(this).addClass("past");
    } else if (parseInt($(this).attr("time24")) == today.hours()) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
});

// On clicking save button, store corresponding text input in local memory
$(".container")[0].addEventListener("click", function(event) {
    const isButton = event.target.nodeName == "BUTTON";
    if (isButton) {
        var index = event.target.parentElement.querySelector("textarea").getAttribute("time24");
        var data = event.target.parentElement.querySelector("textarea").value;
        localStorage.setItem(index, data);
    }
} );
