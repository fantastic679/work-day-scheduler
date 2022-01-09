var today = moment();

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


$(".container")[0].addEventListener("click", function(event) {
    const isButton = event.target.nodeName == "BUTTON";
    // $(this).find("textarea").css( "background-color", "red" );

    // if you clicked button...
    if (isButton) {
        // if you the corresponding textbox
        var index = event.target.parentElement.querySelector("textarea").getAttribute("time24");
        // event.target.parentElement.querySelector("textarea").style.color = "red";
        var data = event.target.parentElement.querySelector("textarea").value;
        console.log(index + ": " + data);
        localStorage.setItem(index, data);
    }
} );

$("textarea").each(function() {
    $(this).val(localStorage.getItem($(this).attr("time24")));
});