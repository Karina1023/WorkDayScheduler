$(document).ready(function() {
    $('#currentDay').text(moment().format("MMMM, Do YYYY, h:mm:ss a"));
    
//use this to compare to timeblocks
    var currentHour = moment().hours()
    console.log(currentHour)
    $(".time-block").each(function() {
        //this is targeting the id on the timeblock and making it a number
    var blockId = parseInt($(this).attr("id"))
    })
    
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
