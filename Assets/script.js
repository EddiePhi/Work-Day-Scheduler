let currentDay = $('#currentDay');
currentDay.text(moment().format('MMMM Do YYYY'));
// moment().format('MMMM Do YYYY, h:mm:ss a'); returns a string

let container = $('.container');
let workHours = [9 + " am", 10 + " am", 11 + " am", 12 + " pm", 1 + " pm", 2 + " pm", 3 + " pm", 4 + " pm", 5 + " pm",];

//Get localStorage values when page first loads
let getStorage = localStorage.getItem("savedDetails") || "[]";
let storageParse = JSON.parse(getStorage);

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

  //within for loop
  save.click(setStorage);
};

//Set current items in HTML textarea tags
$('.details0').val(storageParse[0] || ""), 
$('.details1').val(storageParse[1] || ""), 
$('.details2').val(storageParse[2] || ""), 
$('.details3').val(storageParse[3] || ""), 
$('.details4').val(storageParse[4] || ""), 
$('.details5').val(storageParse[5] || ""), 
$('.details6').val(storageParse[6] || ""), 
$('.details7').val(storageParse[7] || ""), 
$('.details8').val(storageParse[8] || "")

function setStorage(){
  
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

//Coloring function Inspiration from LanChi Pham's GitHub profile with permission from LanChi.
//Pham, L. (2020). dayplanner/script.js. GitHub. https://github.com/lpham2525/dayplanner/blob/master/assets/javascript/script.js

//Convert moment.js string value to string
let currentTime = parseInt(moment().format('H'))

function bgColor(element) {
  //Locate value where id attribute is located for element calling the function.
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
    bgColor($(this));
  });
}

//Initialize on page load
checkTime();



  //https://stackoverflow.com/questions/7866275/access-non-numeric-object-properties-by-index
  // var obj = {
  //   dog: "woof",
  //   cat: "meow",
  //   key: function(n) {
  //       return this[Object.keys(this)[n]];
  //   }
  // };
  // obj.key(1); // "meow"








