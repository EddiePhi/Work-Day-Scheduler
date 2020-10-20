let currentDay = document.getElementById('currentDay');
//let currentDay = $('#currentDay')
currentDay.textContent = moment().format('MMMM Do YYYY');
// moment().format('MMMM Do YYYY, h:mm:ss a'); returns a string

let container = $('.container');
let inputGroup = $('.input-group');
let inputEl = $('.form-control');
let timeBlock = $('<div>');
let ulEl = $('ul');
let textEl = $('<textarea>');
let saveEl = $('<li>');

let workHours = [9 + " am", 10 + " am", 11 + " am", 12 + " pm", 1 + " pm", 2 + " pm", 3 + " pm", 4 + " pm", 5 + " pm",];





//Reference current items in HTML textarea tags
let detailsArr = [
  $('.details0').val(), 
  $('.details1').val(), 
  $('.details2').val(), 
  $('.details3').val(), 
  $('.details4').val(), 
  $('.details5').val(), 
  $('.details6').val(), 
  $('.details7').val(), 
  $('.details8').val()
];

//Does Local storage need to work with {} to work right?
// let currentDetails = {
//   detail0: detailsArr[0],
//   detail1: detailsArr[1],
//   detail2: detailsArr[2],
//   detail3: detailsArr[3],
//   detail4: detailsArr[4],
//   detail5: detailsArr[5],
//   detail6: detailsArr[6],
//   detail7: detailsArr[7],
//   detail8: detailsArr[8],
//   //https://stackoverflow.com/questions/7866275/access-non-numeric-object-properties-by-index
//   test9: "meow",
//   key: function(i) {
//     return this[Object.keys(this)[i]];
//   }
// };
//obj.key(9); // "meow"
// console.log(currentDetails);


//Set up timeblocks
let i;

for (i = 0; i < workHours.length; i++){
  let details = $('.details' + i);
  let list = $('.list' + i);
  let save = $('.save' + i);

  list.attr('class', 'list-group list-group-horizontal list' + i);
  container.append(list);

  
  details.attr('class', 'list-group-item color details' + i);
  list.append(details);

  
  save.attr('class', 'list-group-item color save' + i);
  save.text('Save');
  list.append(save);
  save.click(setStorage);

};

function setStorage(){

  let getStorage = localStorage.getItem("savedDetails") || "[]";
  JSON.parse(getStorage);
  
  //Replace old array with updated array?
  detailsArr = detailsArr;

  localStorage.setItem("savedDetails", JSON.stringify(detailsArr));
  console.log(localStorage);
};

//Coloring function Inspiration from lpham2525's github profile with permission from contributor
//https://github.com/lpham2525/dayplanner/blob/master/assets/javascript/script.js

let currentTime = parseInt(moment().format('H'))

function bgColor(element) {
  const timeVal = parseInt(element.attr('id'));
  if (timeVal < currentTime) {
    element.css('backgroundColor', 'lightGrey')
  } else if (timeVal > currentTime) {
    element.css('backgroundColor', 'lightGreen')
  } else {
    element.css('backgroundColor', 'red')
  }
}

//Check time block vs real time.
function checkTime() {
  $('.list-group-horizontal').each(function () {
    bgColor($(this))
  });
}

checkTime();

//Check every 15 minutes
setInterval(checkTime, 90000)





// for (i = 0; i < workHours.length; i++){
//   //Set Idle Work Detail block in the middle
//   let details = $('.details' + i)
//   details.attr('class', 'list-group-item details' + i);
//   details.text(JSON.parse(localStorage.getItem("savedDetails")));
//   $('.list' + i).append(details);
// };

// for (i = 0; i < workHours.length; i++){
//   //Set Save Button to the right
//   let save = $('.save' + i)
//   save.attr('class', 'list-group-item save' + i);
//   save.text('Save');
//   $('.list' + i).append(save);
// };



  //https://stackoverflow.com/questions/7866275/access-non-numeric-object-properties-by-index
  // var obj = {
  //   dog: "woof",
  //   cat: "meow",
  //   key: function(n) {
  //       return this[Object.keys(this)[n]];
  //   }
  // };
  // obj.key(1); // "meow"

  // console.log(currentDetails);

// for (i = 0; i < workHours.length; i++){
//   $('.save' + i).click(setStorage);
// };




//https://api.jquery.com/text/  --> for use of .val()




//this for loop is causing overwrite issues with
//Set new Unordered List
// let list0 = $('<ul>');
// list0.attr('class', 'list-group list-group-horizontal list' + 0);
// container.append(list0);

// let list1 = $('<ul>');
// list1.attr('class', 'list-group list-group-horizontal list' + 1);
// container.append(list1);

// let list2 = $('<ul>');
// list2.attr('class', 'list-group list-group-horizontal list' + 2);
// container.append(list2);

// let list3 = $('<ul>');
// list3.attr('class', 'list-group list-group-horizontal list' + 3);
// container.append(list3);

// let list4 = $('<ul>');
// list4.attr('class', 'list-group list-group-horizontal list' + 4);
// container.append(list4);

// let list5 = $('<ul>');
// list5.attr('class', 'list-group list-group-horizontal list' + 5);
// container.append(list5);

// let list6 = $('<ul>');
// list6.attr('class', 'list-group list-group-horizontal list' + 6);
// container.append(list6);

// let list7 = $('<ul>');
// list7.attr('class', 'list-group list-group-horizontal list' + 7);
// container.append(list7);

// let list8 = $('<ul>');
// list8.attr('class', 'list-group list-group-horizontal list' + 8);
// container.append(list8);
  
  



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


