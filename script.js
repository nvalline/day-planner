const currentDate = moment().format('dddd, MMMM Do, YYYY');

const workHours = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

// Get Current Date and Time
$('#currentDay').append(currentDate);


// loop through workHours
$.each(workHours, (function (i, hour) {
    console.log(hour)
    // add new Row element with class row
    let newRowElement = $('.container').append('<section>');
    $('section').addClass('row');

    // add new work hour element with class hour
    let newTimeElement = $('.row').append('<div>');
    newTimeElement.children('div').addClass('time-block hour');
    $('.hour').text(hour);

    // add new input element with class task
    let newInputElement = $('.row').append('<textarea>');

    // add new button element with class saveBtn
    let newButtonElement = $('.row').append('<button>');
    newTimeElement.children('button').addClass('saveBtn');

    // add new button icon with class far fa-save
    let newButtonIcon = $('button').append('<i>');
    newButtonIcon.children('i').addClass('far fa-save');
}));