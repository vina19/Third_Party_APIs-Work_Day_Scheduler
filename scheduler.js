// Method to make the functions run after the page is ready.
$( document ).ready(function() {

    // Call the getCurrentDay and createTimeBlocks functions.
    getCurrentDay();
    createTimeBlocks(); 

});

// Function for when the user open the planner the current day is displayed at the top of the calendar.
function getCurrentDay() {
    let currentDay = moment().format("dddd, MMMM Do");
    $("#currentDay").text(currentDay);
}

// Time blocks for strandard business hours.
function createTimeBlocks() {

    // Create new variable for grabbing the current hours
    let currentHour = moment().format("HH");
    console.log(currentHour);
    
    // Looping time 9am-5am.
    // start with 9 for 9am and with the length from 9-18.
    for (let i=9; i < 18; i++) {

        // Create a row for schedule blocks.
        // Add class, set data time, and add id with the time index, so it will be convenient to call the row.
        let timeBlockRow = $("<div>");
        timeBlockRow.addClass("row");
        timeBlockRow.attr("data-time", `${i}`);
        timeBlockRow.attr("id", `row${i}`);

        // Create a hours column.
        // Add classes and set the text to the 9am-5pm.
        let hourColEl = $("<div>");
        hourColEl.addClass("col-sm-2 hour");

        // Create if statement for the hour AM/PM format to be put inside the hours column.
        if (i <= 11) {
            hourColEl.text(i + "am");
        }
        else if (i === 12) {
            hourColEl.text(i + "pm");
        }
        else {
            hourColEl.text(i-12 + "pm");
        };

        // Create a schedule column.
        // Add textarea element, classes and id for the textarea.
        let scheduleColEl = $("<textarea>");
        scheduleColEl.addClass("col-sm-8 past description");
        scheduleColEl.attr("id", "text");

        // if statement to decide which color to display for the past, present, and future schedules.
        if ( timeBlockRow.data("time") == currentHour ) {
            
            scheduleColEl.addClass("present");
        }
        else if ( currentHour < timeBlockRow.data("time") ) {
          
            scheduleColEl.addClass("future");
        }

        // Create a save button column.
        // Add class and id into it.
        // Add save logo inside the button.
        // Append save button logo to the button tag.
        let saveBtnColEl = $("<button>");
        saveBtnColEl.addClass("col-md-1 saveBtn");
        saveBtnColEl.attr("id", `${i}`);

        let saveLogoEl = $("<i>");
        saveLogoEl.addClass("fas fa-save");

        saveBtnColEl.append(saveLogoEl);

        // Append hour column, schedule column, and save button column to the time block row.
        timeBlockRow.append(hourColEl);
        timeBlockRow.append(scheduleColEl);
        timeBlockRow.append(saveBtnColEl);

        // Append all the collected elements to the class container.
        $(".container").append(timeBlockRow);
    };
}