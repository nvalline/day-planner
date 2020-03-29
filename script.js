let taskItems = [];

const currentDate = moment().format('dddd, MMMM Do, YYYY');
const currentTime = moment().format('H');

const workHours = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

// Get Current Date and Time
$('#currentDay').append(currentDate);


// loop through workHours
$.each(workHours, (function (i, hour) {
    // add new Row element with class row
    const newRowElement = $('<section>').addClass('row');
    $('.container').append(newRowElement);

    // add new work hour element with class hour & p element
    const newTimeElement = $('<div>').addClass('hour');
    const newPElement = $('<p>').addClass('time-block');
    newRowElement.append(newTimeElement);
    newTimeElement.append(newPElement);

    // print workHours to time element
    newPElement.text(hour);

    // add new input element with class task
    const newInputElement = $('<textarea>').attr('data-id', i);
    newRowElement.append(newInputElement);

    // add new button element with class saveBtn
    const newButtonElement = $('<button>').addClass('saveBtn').attr('data-id', i);
    newRowElement.append(newButtonElement);

    // add new button icon with class far fa-save
    const newButtonIcon = $('<i>').addClass('far fa-save');
    newButtonElement.append(newButtonIcon);

    const dataHours = newInputElement.data('id') + 9;
    if (dataHours > currentTime) {

        newInputElement.addClass('future');
    } else if (dataHours < currentTime) {
        newInputElement.addClass('past');
    } else {
        newInputElement.addClass('present');
    }
}));

// add click listner on saveBtn
$('.saveBtn').on('click', function (event) {
    console.log(event)
    const buttonId = $(this).data();
    const textareaId = event.currentTarget.previousSibling.dataset.id;
    const textareaValue = event.currentTarget.previousSibling.value;
    console.log("Button ID: " + JSON.stringify(buttonId))
    console.log(textareaId)
    console.log(textareaValue)
    if (textareaValue === '') {
        return
    } else {
        taskItems.push({ textareaId: textareaId, textareaValue: textareaValue });
        console.log(taskItems)
    }
})
