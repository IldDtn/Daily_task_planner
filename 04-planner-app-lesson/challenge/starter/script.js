
// display current date:
var today = moment();
$("#currentDay").text(today.format("D MMM YYYY"));

// need to get currentTime to decide css class:
var currentTime = moment().format('hh a');
console.log(currentTime);

var startOfBusiness = moment(09, 'hh');
var timeFormat = startOfBusiness.format('hh A');

var container = $('.container')

while (startOfBusiness.hour() < 18) {
    // console.log(startOfBusiness.format('hh A'));
      var timeBlock = document.createElement('div');
      $('div').addClass('time');
      $('div .time').text(timeFormat);
      container.append(timeBlock);                        
      var textArea = document.createElement('textarea')
      $('textarea').text('Task description');
      container.append(textArea);
      var button = document.createElement('button')
      $('button').addClass('save');
      $('button').text('Save');
      container.append(button);
      var nextHour = startOfBusiness.add(1, 'hours'); // returning 18pm instead of 10am
      
};




// create eventlistener for "Save" button

var saveButton = $('.save');
saveButton.click(function(){
    // local storage 
    // feedback
  });

