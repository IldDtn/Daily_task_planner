
// display current date:
var today = moment();
$("#currentDay").text(today.format("D MMM YYYY"));

// need to get currentTime to decide css class:
var currentTime = moment().format('hh a');
console.log(currentTime);

var startOfBusiness = moment(09, 'hh');
var timeFormat = startOfBusiness.format('hh A');

var container = $('.container')

while (startOfBusiness.hour() < 19) {
    
      var timeBlock = document.createElement('div');
      $('div').addClass('time');
      $('div .time').text(timeFormat);                  
      container.append(startOfBusiness.format('HHA'));          
      var textAreaNi = document.createElement('textarea');
      $('textarea').text('Task description');
      container.append(textAreaNi);
      var button = document.createElement('button')
      $('button').addClass('save');
      $('button').text('Save');
      container.append(button);
      button.addEventListener("click", alertmsg);
      
      startOfBusiness.add(1, 'hours');
      
      
};

// the button has not been added yet so it fails, needs to be inside loop


function alertmsg () {

      
      const msg = $('#msg');
      $('#msg').removeClass("hide");
      setTimeout(function () {
            msg.textContent = 'Item has been added to localStorage';
            $('#msg').addClass("hide");
        }, 2000);

};

//       var inputs = JSON.parse(localStorage.getItem("inputs")) || [];
//       inputs.push(textAreaNi.value); 
//       localStorage.setItem('inputs', JSON.stringify(textAreaNi));  

//       // add feedback
//   });

