// Method to make the functions run after the page is ready.
$( document ).ready(function() {

    // Call the getCurrentDay and createTimeBlocks functions.
    getCurrentDay();
    createTimeBlocks();
    saveButton(); 

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
    
    // Looping time 9am-5am.
    // start with 9 for 9am and with the length from 9-18.
    for (let i=9; i < 18; i++) {

        // Create a row for schedule blocks.
        // Add class and set data time as the index numbers to be used 
        // when deciding which color to display for past, present, and future schedule.
        let timeBlockRow = $("<div>");
        timeBlockRow.addClass("row");
        timeBlockRow.attr("data-time", `${i}`);

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
        scheduleColEl.attr("id", `text${i}`);

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
        timeBlockRow.append(hourColEl, scheduleColEl, saveBtnColEl);
        
        // Append all the collected elements to the class container.
        $(".container").append(timeBlockRow);
    };
};

// Save button method. 
function saveButton() {

    // Get the save button class.
    let saveBtn = $(".saveBtn");

    // After the save button click,
    // get the schedule hour and schedule text value and
    // set those values to the localstorage with 
    // schedule hour as the key and the get schedule as its value. 
    saveBtn.on("click", function() {

        let getScheduleHour = $(this).attr('id');
        let getSchedule = $(this).parent().children(".description").val();
        localStorage.setItem(getScheduleHour, getSchedule);
    });
};