$(document).ready(function() {
    $('#currentDay').text(moment().format("MMMM, Do YYYY, h:mm:ss a"));
    
//assign savebtn click listener for user input and time stamp
    $(".saveBtn").on("click", function () {
        //get nearby values
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
// set items in local storage
       localStorage.setItem(time, text);

    })
    //load any saved data from localstorage 
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));


    function hourTracker() {
        //get current number of hours
        var currentHour = moment().hour();
//loop over time blocks
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockHour, currentHour)
   //if else statements
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
    
        })

    }
    hourTracker();

})

//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar

//WHEN I scroll down
//THEN I am presented with timeblocks for standard business hours

//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//WHEN I click into a timeblock
//THEN I can enter an event
//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist

// conditional statement between first two variables (if time on block is less than current time then...)

// make a click event that will save whatever is typed in the middle;local storage. click event will be on save button
// make the information that has been saved persist on the page. localstorage.get (keeps info there) for each hour block
// local storage.set for saving 
