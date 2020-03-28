const currentDate = moment().format('dddd, MMMM Do, YYYY')
const workHours = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']

// Get Current Date and Time
$('#currentDay').append(currentDate)

// On page load
$('document').ready(function () {
    $.each(workHours, function (i, hour) {
        const newRow = $('.container').append('<div class="row">')
        const newHour = $('.row').append('<div class="hour">').text(hour)
        const newInput = $('.row').append('<input type="text" class="task">')
        const newButton = $('.row').append('<button class="saveBtn">')
        const newSaveIcon = $('.saveBtn').append('<i class="far fa-save">')
        // printRows(hour)
        console.log(hour)
    })
})

// Loop through workHours and print content


// add row and elements to page
function printRows(hour) {
}

$(".saveBtn").on('click', function () {
    console.log("click")
    // grab input text with data attr
})

