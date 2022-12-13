
// display current date:
var today = moment();
$("#currentDay").text(today.format("D MMM YYYY"));

// need to get currentTime to decide css class:
var currentTime = moment().format('hh a');
var currentTime2 = moment().format('hh');


// create variables to show dates on planner:
var startOfBusiness = moment(09, 'hh');
var timeFormat = startOfBusiness.format('hh A');
var container = $('.container')

while (startOfBusiness.hour() < 19) {
      
      // create div that holds time, addclass, add time to div and append them to parent container
      var timeBlock = document.createElement('div');
      $('div').addClass('time');
      $('div .time').text(timeFormat);    
      container.append(startOfBusiness.format('HHA')); 
      console.log(startOfBusiness.format('HHA'));       
      
      // create text area, add task description, and append them to parent container
      var textAreaNi = document.createElement('textarea');
      $('textarea').attr('placeholder', 'Task Description');
      container.append(textAreaNi);

      // add color code, past = grey, current = pink, future = green, 
      if (currentTime2 === startOfBusiness.format('HH')) {
            $('textarea').addClass('current');
      } else if (currentTime2 > startOfBusiness.format('HH')) {
            $('textarea').addClass('past');
      } else if ((currentTime2 < startOfBusiness.format('HH'))){
            $('textarea').addClass('past');
      };

       // create save button, add class, add "Save" as textcontent and append it to parent container
      var button = document.createElement('button')
      $('button').addClass('save');
      $('button').addClass("fa-solid fa-floppy-disk");
      container.append(button);

      // add eventlistener, when button is clicked alert message appears informing items have been added to local storage 
      button.addEventListener("click", alertmsg);

      // add eventlistener, when button is clicked items should be added to local storage 
      button.addEventListener("click", localSt);
      
      // increment hour by one
      startOfBusiness.add(1, 'hours');
      
      
};

// function to create pop-up alert message

function alertmsg () {

      
      const msg = $('#msg');
      $('#msg').removeClass("hide");
      setTimeout(function () {
            msg.textContent = 'Item has been added to localStorage';
            $('#msg').addClass("hide");
        }, 2000);

};

// approach 1 , save items as array of items 


function localSt() {
      var taskList = [];
      if (taskList.length === 0) {
            (localStorage.getItem('tasklist'));
      } else {
            JSON.parse(localStorage.getItem('tasklist'));
      }                                                                         // first need to get existing loc storage if empty do not parse?
      taskList.push(textAreaNi.value);                                           // add new item
      JSON.stringify(localStorage.setItem('tasklist', taskList));               // return updated storage


};

// approach 2 save tasks as a list of objects.

// var tasks = [
// {
//       task: 'take out trash '
// },

// {
// task: 'washing up'
// }];















