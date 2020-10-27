// When the user open the planner the current day is displayed at the top of the calendar.
let currentDay = moment().format("dddd" + ", " + "MMMM Do");
$("#currentDay").text(currentDay);