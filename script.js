let taskItems = [];
let textareaId = '';
let textareaValue = '';

const currentDate = moment().format('dddd, MMMM Do, YYYY');
const currentTime = moment().format('H');

const workHours = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

// Get Current Date and Time
$('#currentDay').append(currentDate);

init();

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
    const newInputElement = $('<textarea>');
    newInputElement.attr('data-id', i).attr('id', 'textarea-' + i);
    newRowElement.append(newInputElement);

    // add new button element with class saveBtn
    const newButtonElement = $('<button>').addClass('saveBtn').attr('data-id', i);
    newRowElement.append(newButtonElement);

    // add new button icon with class far fa-save
    const newButtonIcon = $('<i>').addClass('far fa-save');
    newButtonElement.append(newButtonIcon);

    const dataHours = newInputElement.data('id') + 9;
    if (dataHours > currentTime) {
        newInputElement.addClass('future').removeClass('present');
    } else if (dataHours < currentTime) {
        newInputElement.addClass('past').removeClass('future');
    } else {
        newInputElement.addClass('present').removeClass('past');
    }

    renderTasks();
}));

// add click listner on saveBtn
$('.saveBtn').on('click', function (event) {
    textareaId = event.currentTarget.previousSibling.dataset.id;
    textareaValue = event.currentTarget.previousSibling.value.trim();
    if (textareaValue === '') {
        return
    } else {
        taskItems.push({ textareaId: textareaId, textareaValue: textareaValue });
    }
    storeTasks();
})
console.log(taskItems)

function init() {
    let storedTasks = JSON.parse(localStorage.getItem('taskItems'));

    if (storeTasks !== null) {
        taskItems = storedTasks;
    }
}

function storeTasks() {
    localStorage.setItem('taskItems', JSON.stringify(taskItems));
}

function renderTasks() {
    let taskIndex = '';
    let taskValue = '';

    for (let j = 0; j < taskItems.length; j++) {
        taskIndex = taskItems[j].textareaId;
        taskValue = taskItems[j].textareaValue;

        $('#textarea-' + taskIndex).val(taskValue);
    }
}