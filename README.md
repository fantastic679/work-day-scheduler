# Work Day Scheduler

## [Git repo](https://github.com/fantastic679/work-day-scheduler)

## [Live demo](https://fantastic679.github.io/work-day-scheduler/)

## Introduction

This is a simple calendar application that allows a user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery. The Moment.js library is used to manipulate the date and time.

## Functionality

Users are presented with a calendar for the day featuring working hours (9AM to 5PM). The rows of the calendar represent hours of the day, which are automatically colour coded based on whether the hour has passed (grey), is currently passing (red) or is yet to be passed (green). Users have the ability to add or modify text corresponding to each hour and save this text. The information is saved locally on the computer and can be restored on re-opening the page (provided the local storage is not tampered with).

One aspect that is of note is that once the day has passed, the storage will not automatically clear. That is, events from the previous day will be retained if they have not been removed.

## Screenshot
![A user clicks on slots on the color-coded calendar and edits the events.](/screenshot.png?raw=true)

## Marking criteria

This scheduler was completed as part of the USyd Coding Bootcamp. The CSS file and a skeleton HTML file were provided. The following were the criteria for this particular homework task.

### Criteria

GIVEN I am using a daily planner to create a schedule
* 😍 WHEN I open the planner THEN the current day is displayed at the top of the calendar
* 😍 WHEN I scroll down THEN I am presented with timeblocks for standard business hours
* 😍 WHEN I view the timeblocks for that day THEN each timeblock is color coded to indicate whether it is in the past, present, or future
* 😍 WHEN I click into a timeblock THEN I can enter an event
* 😍 WHEN I click the save button for that timeblock THEN the text for that event is saved in local storage
* 😍 WHEN I refresh the page THEN the saved events persist

### Key
* 😍 = fulfilled
* 😭 = unfulfilled

## Contact

Email me at stevenphan@msn.com.