// Method to make the function run after the page is ready.
$( document ).ready(function() {

    getCurrentDay();

    // Time blocks for strandard business hours
    // Looping time 9am-5am.
    // start with 9 for 9am and with the length from 9-18.
    for (let i=9; i < 18; i++) {

        // Create a row for schedule blocks.
        // Add class and add id with the time index, so it will be convenient to call the row.
        let timeBlockRow = $("<div>");
        timeBlockRow.addClass("row");
        timeBlockRow.attr("id", `row${i}`);

        // Create a hours column.
        // Add classes and set the text to the 9am-5pm.
        // Create a new variable for time format to be put inside the hours column.
        let hourColEl = $("<div>");
        hourColEl.addClass("col-sm-2 hour");
        
        if (i <= 11) {
            hourColEl.text(i + "AM");
        }
        else if (i === 12) {
            hourColEl.text(i + "PM");
        }
        else {
            hourColEl.text(i-12 + "PM");
        };

        // Create a schedule column.
        // Add classes, textarea tag, and id for the textarea.
        // Append the schedule textarea to the schedule column div
        let scheduleColEl = $("<div>");
        scheduleColEl.addClass("col-sm-8 past");

        let scheduleTextEl = $("<textarea>");
        scheduleTextEl.addClass("description");
        scheduleTextEl.attr("id", `text${i}`);

        scheduleColEl.append(scheduleTextEl);


        // Create a save button column.
        // Add class, button tag, and id into it.
        // Add save logo inside the button.
        // Append save button logo to the button tag.
        // Append save button element to the save button parent column.
        let saveBtnColEl = $("<div>");
        saveBtnColEl.addClass("col-sm-2");
        
        let saveBtnEl = $("<button>");
        saveBtnEl.addClass("saveBtn");
        saveBtnEl.attr("id", `${i}`);

        let saveLogoEl = $("<i>");
        saveLogoEl.addClass("fas fa-save");

        saveBtnEl.append(saveLogoEl);
        saveBtnColEl.append(saveBtnEl);


        // Append hour column, schedule column, and save button column to the time block row.
        timeBlockRow.append(hourColEl);
        timeBlockRow.append(scheduleColEl);
        timeBlockRow.append(saveBtnColEl);

        $(".container").append(timeBlockRow);
    };
});

// When the user open the planner the current day is displayed at the top of the calendar.
function getCurrentDay() {
    let currentDay = moment().format("dddd, MMMM Do");
    $("#currentDay").text(currentDay);
}