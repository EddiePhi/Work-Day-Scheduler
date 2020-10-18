let currentDay = document.getElementById('currentDay');
//let currentDay = $('#currentDay')
currentDay.textContent = moment().format('MMMM Do YYYY');
//currentDay.text(moment().format('MMMM Do YYYY'));

let container = $('.container');
let inputGroup = $('.input-group');
let inputEl = $('.form-control');


let workDetails = [];
let workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

// CONSIDER USING TEXTAREA TAG INSTEAD.

//For Loop with jQuery
for (let i = 0; i < workHours.length; i++){
    //Variables need to be in for loop, otherwise only an unordered list for workHours.length - 1 will appear.
    let timeBlock = $('<div>');
    let ulEl = $('<ul>');
    let listEl = $('<li>');
    let saveEl = $('<li>');
    
    //Set new Unordered List
    ulEl.attr('class', 'list-group list-group-horizontal')
    container.append(ulEl);
    
    //Set Work Hour block to the left
    timeBlock.attr('class', 'list-group-item');
    timeBlock.text(workHours[i]);
    ulEl.append(timeBlock);
    console.log(timeBlock);

    //Set Idle Work Detail block in the middle
    listEl.attr('class', 'list-group-item workDetail' + i);
    listEl.text(workHours[i] + ' Details');
    ulEl.append(listEl)

    //Set Save Button to the right
    saveEl.attr('class', 'list-group-item saveButton' + i);
    saveEl.text(workHours[i] + ' Save');
    ulEl.append(saveEl)
};

// Replace static List Element with input element on click.
$('.list-group-item').click(function(){
    // https://api.jquery.com/replacewith/
    $(this).replaceWith(inputEl);
    inputEl.replaceWith($(this));
});


{/* <ul class="list-group list-group-horizontal">
      <li class="list-group-item">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Morbi leo risus</li>
    </ul>

    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">First and last name</span>
      </div>
      <input type="text" aria-label="First name" class="form-control">
      <input type="text" aria-label="Last name" class="form-control">
    </div> */}


// Attempt to use $.each method per Stack Overflow
    // let workHours = { 
    //     workHour: [
    //         {hour : "9AM"},
    //         {hour : "10AM"}, 
    //         {hour : "11AM"},
    //         {hour : "12PM"}, 
    //         {hour : "1PM"},
    //         {hour : "2PM"},
    //         {hour : "3PM"},
    //         {hour : "4PM"},
    //         {hour : "5PM"}       
    //     ]
    // };

    // $.each(workHours.workHour, function (i) {
    //         $.each(workHours.workHour[i], function (key, val) {
    //             timeBlock.attr('id', 'timeBlock' + val);
    //             console.log(timeBlock);
    //         });
    //     });

    //https://stackoverflow.com/questions/6208052/jquery-each-for-objects
        // var data = { "programs": [ { "name":"zonealarm", "price":"500" }, { "name":"kaspersky", "price":"200" } ] };

        // $.each(data.programs, function (i) {
        //     $.each(data.programs[i], function (key, val) {
        //         alert(key + val);
        //     });
        // });


