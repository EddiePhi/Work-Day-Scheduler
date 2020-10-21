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

let getStorage = localStorage.getItem("savedDetails") || "[]";
let storageParse = JSON.parse(getStorage);


//Reference current items in HTML textarea tags


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
  storageParse;
  console.log(typeof storageParse)

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

//Run time check every 15 minutes
setInterval(checkTime, 90000)






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



    // $.each(workHours.workHour, function (i) {
    //         $.each(workHours.workHour[i], function (key, val) {
    //             timeBlock.attr('id', 'timeBlock' + val);
    //             console.log(timeBlock);
    //         });
    //     });


