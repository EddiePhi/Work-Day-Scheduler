
//SEE LINE 54 FOR NEEDED EDITS! KEEP IN MIND NOTE ON LINE 22!

let currentDay = document.getElementById('currentDay');
//let currentDay = $('#currentDay')
currentDay.textContent = moment().format('MMMM Do YYYY');
//currentDay.text(moment().format('MMMM Do YYYY'));

let container = $('.container');
let inputGroup = $('.input-group');
let inputEl = $('.form-control');

//Variables need to be in for loop, otherwise only an unordered list for workHours.length - 1 will appear.
let timeBlock = $('<div>');
let ulEl = $('<ul>');
let textEl = $('<textarea>');
let saveEl = $('<li>');


let workDetails = [];
let workHours = [];

//Able to save multiple items in Array from setStorage()
let detailsArr = ['test'];


    
//Set new Unordered List
ulEl.attr('class', 'list-group list-group-horizontal')
container.append(ulEl);

//Set Work Hour block to the left
timeBlock.attr('class', 'list-group-item');
timeBlock.text('Test Time');
ulEl.append(timeBlock);

//Set Idle Work Detail block in the middle
textEl.attr('class', 'list-group-item workDetail');
textEl.text(JSON.parse(localStorage.getItem("savedDetails")));
ulEl.append(textEl);

//Set Save Button to the right
saveEl.attr('class', 'list-group-item saveButton');
saveEl.text('Test Save');
ulEl.append(saveEl);

// let currentDetails = {};

// console.log(currentDetails);


$('.saveButton').click(setStorage);



//https://api.jquery.com/text/  --> for use of .val()
function setStorage(){

  let getStorage = localStorage.getItem("savedDetails") || [];
  currentDetails = JSON.parse(getStorage);
  console.log(localStorage);

  // detailsArr.push(currentDetails);
  // console.log(detailsArr);

  //Need tow ork on scope of textEl to not override itself in local Storage
  localStorage.setItem("savedDetails", JSON.stringify(textEl.val()));
  console.log(localStorage);
  
};


  
  



//Local Storage Assistance from class TA - Paul Laird
  
// function setStorage(arr){
//   localStorage.setItem("savedScores", JSON.stringify(arr));
// };

// Submit Score afterwards
// function submitScore(){
//   let scoresArr = []; 
//   let currentScore = document.getElementById("fieldEl").value + ": " + totalScore;

//   const newScore = {
//     score: currentScore
//   };

//   let getStorage = localStorage.getItem("savedScores") || "[]";
//   scoresArr = JSON.parse(getStorage);
//   console.log(scoresArr);

//   scoresArr.push(newScore);

//   timeEl.textContent = "SCORES";
//   secEl.textContent = currentScore;
  
//   Unable to elegantly display scores.
//   for (let i = 0; i < scoresArr.length; i++){
//     mainEl.append(JSON.stringify(scoresArr[i].score.split('"')));
//   };



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


