const currentDate = moment().format('dddd, MMMM Do, YYYY');

const workHours = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

// Get Current Date and Time
$('#currentDay').append(currentDate);


// loop through workHours
$.each(workHours, (function (i, hour) {
    console.log(hour)
    // add new Row element with class row
    const newRowElement = $('<section>');
    $('.container').append(newRowElement);
    $('section').addClass('row');

    // add new work hour element with class hour & p element
    const newTimeElement = $('<div>');
    const newPElement = $('<p>');
    newRowElement.append(newTimeElement);
    newTimeElement.addClass('hour');
    newTimeElement.append(newPElement);

    // print workHours to time element
    newPElement.text(hour);

    // add new input element with class task
    const newInputElement = $('<textarea>');
    newRowElement.append(newInputElement);

    // add new button element with class saveBtn
    const newButtonElement = $('<button>');
    newRowElement.append(newButtonElement);
    newButtonElement.addClass('saveBtn');

    // add new button icon with class far fa-save
    const newButtonIcon = $('<i>');
    newButtonElement.append(newButtonIcon);
    newButtonIcon.addClass('far fa-save');
}));