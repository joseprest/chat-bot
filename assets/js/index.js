const message = {
  'data': {
    'context': ['My bags haven\'t arrived', 'My trip got disrupted', 'I don\'t feel well', 'Emergency', 'Others'],
    'type': 'list',
  },
  'data-0': {
    'context': ['Yes', 'No'],
    'type': 'single',
    'answer': 'Oh no 😩 I\'ll get you sorted right away. Are you still in the baggage area?'
  },
  'data-1': {
    'context': ['Yes', 'No'],
    'type': 'single',
    'answer': 'Oh no 😩 I\'ll get you sorted right away. Are you still in the baggage area?'
  },
  'data-2': {
    'context': ['Yes', 'No'],
    'type': 'single',
    'answer': 'Oh no 😩 I\'ll get you sorted right away. Are you still in the baggage area?'
  },
  'data-3': {
    'context': ['Yes', 'No'],
    'type': 'single',
    'answer': 'Oh no 😩 I\'ll get you sorted right away. Are you still in the baggage area?'
  },
  'data-4': {
    'context': ['Yes', 'No'],
    'type': 'single',
    'answer': 'Oh no 😩 I\'ll get you sorted right away. Are you still in the baggage area?'
  },
  'data-0-0': {
    'type': 'single',
    'action': 'photo',
    'answer': 'Great. Now look for Delta\'s lost baggage counter - ask for the lost bags receipt, and take a photo of it'
  },
  'data-0-1': {
    'type': 'single',
    'action': 'photo',
    'answer': 'Great. Now look for Delta\'s lost baggage counter - ask for the lost bags receipt, and take a photo of it'
  },
  'data-1-0': {
    'type': 'single',
    'action': 'photo',
    'answer': 'Great. Now look for Delta\'s lost baggage counter - ask for the lost bags receipt, and take a photo of it'
  },
  'data-1-1': {
    'type': 'single',
    'action': 'photo',
    'answer': 'Great. Now look for Delta\'s lost baggage counter - ask for the lost bags receipt, and take a photo of it'
  },
  'data-2-0': {
    'type': 'single',
    'action': 'photo',
    'answer': 'Great. Now look for Delta\'s lost baggage counter - ask for the lost bags receipt, and take a photo of it'
  },
  'data-2-1': {
    'type': 'single',
    'action': 'photo',
    'answer': 'Great. Now look for Delta\'s lost baggage counter - ask for the lost bags receipt, and take a photo of it'
  },
  'data-3-0': {
    'type': 'single',
    'action': 'photo',
    'answer': 'Great. Now look for Delta\'s lost baggage counter - ask for the lost bags receipt, and take a photo of it'
  },
  'data-3-1': {
    'type': 'single',
    'action': 'photo',
    'answer': 'Great. Now look for Delta\'s lost baggage counter - ask for the lost bags receipt, and take a photo of it'
  },
  'data-4-0': {
    'type': 'single',
    'action': 'photo',
    'answer': 'Great. Now look for Delta\'s lost baggage counter - ask for the lost bags receipt, and take a photo of it'
  },
  'data-4-1': {
    'type': 'single',
    'action': 'photo',
    'answer': 'Great. Now look for Delta\'s lost baggage counter - ask for the lost bags receipt, and take a photo of it'
  },
}

let id = 'data';

$( document ).ready(function() {
  setTimeout(function() {
    $("#messages-box").css('margin-top','49px');
    setTimeout(function() {
      $($(".messages")[0]).append('<div class="message-box"><span class="message supporting have-img">How can I help?</span></div>');
      scrollUp();
      add_support_to_ul(message[id]);
    }, 2000);
  }, 500);
});

function add_support_to_ul(datas) {
  $('#support-questions').css('transform', 'translateY(100%)');
  $("#support-questions").attr('class', 'support-items ' + datas.type);
  $("#support-questions").empty();
  setTimeout(function() {
    if(datas['context']) {
      datas['context'].forEach( function(data, index) {
        $("#support-questions").append('<li class="support-item" index="' + id + '-' + index + '" onClick="onSupportItem(event)">'+ data + '</li>');
      });
    } else if(datas['action'] == 'photo') {
      $("#support-questions").append('<li class="support-item take_photo" onClick="onTakePhoto(event)">Take a Photo</li>');
      $("#support-questions").append('<li class="support-item take_photo" onClick="onUploadPhoto(event)">Browse Photos</li>');
    }
    $('#support-questions').css('transform', 'translateY(0)');
    if(datas.answer)
      setTimeout(function() {
        $($(".messages")[0]).append('<div class="message-box"><span class="message supporting have-img">' + datas.answer + '</span></div>');
        scrollUp();
      }, 500);
  }, 700);
}

function onSupportItem(e) {
  $($(".messages")[0]).append('<div class="message-box user"><span class="message">' + $(e.target).text() + '</span></div>');
  scrollUp();
  id = $(e.target).attr('index');
  add_support_to_ul(message[id]);
}

function onTakePhoto(e) {
  console.log('take photo');
}

function onUploadPhoto(e) {
  console.log('upload photo');
}

function scrollUp() {

}