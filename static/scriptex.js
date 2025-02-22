// script.js

function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    var chatMessages = document.getElementById('chat-messages');

    var userMessageContainer = document.createElement('div');
    userMessageContainer.className = 'message-container';

    var userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message user-message';
    userMessageDiv.textContent = userInput;

    userMessageContainer.appendChild(userMessageDiv);
    chatMessages.appendChild(userMessageContainer);

    chatMessages.scrollTop = chatMessages.scrollHeight;
    document.getElementById('user-input').value = '';

    // Send user input to Python program via AJAX
    $.ajax({
        type: "POST",
        url: "/generate_summary",
        data: {
            paragraph: userInput
        },
        success: function(response) {
            var botMessageContainer = document.createElement('div');
            botMessageContainer.className = 'message-container';

            var botMessageDiv = document.createElement('div');
            botMessageDiv.className = 'message bot-message';
            botMessageDiv.textContent = response;

            botMessageContainer.appendChild(botMessageDiv);
            chatMessages.appendChild(botMessageContainer);

            chatMessages.scrollTop = chatMessages.scrollHeight;
            document.getElementById('user-input').value = '';
        }
    });

}
function sendSummaryRequest() {
    var paragraph = document.getElementById('user-input').value;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/summary', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        if (xhr.status === 200) {
            var summary = xhr.responseText;
            displaySummary(summary);
        }
    };
    xhr.send(`paragraph=${paragraph}`);
}

function displaySummary(summary) {
    var chatMessages = document.getElementById('chat-messages');
    var botMessageContainer = document.createElement('div');
    botMessageContainer.className = 'message-container';

    var botMessageDiv = document.createElement('div');
    botMessageDiv.className = 'message bot-message';
    botMessageDiv.textContent = summary;

    botMessageContainer.appendChild(botMessageDiv);

    chatMessages.appendChild(botMessageContainer);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
// function sendMessage() {
//   var userInput = document.getElementById('user-input').value;
//   var chatMessages = document.getElementById('chat-messages');

//   var userMessageContainer = document.createElement('div');
//   userMessageContainer.className = 'message-container';
//   userMessageContainer.id = 'user-message-container';

//   var userMessageDiv = document.createElement('div');
//   userMessageDiv.className = 'message user-message';
//   userMessageDiv.textContent = userInput;

//   userMessageContainer.appendChild(userMessageDiv);

//   chatMessages.appendChild(userMessageContainer);
//   chatMessages.scrollTop = chatMessages.scrollHeight;

//   // Send AJAX request to Flask app to generate summary
//   $.ajax({
//     url: '/summary',
//     type: 'POST',
//     data: { paragraph: userInput },
//     success: function(response) {
//       // Display the summary
//       document.getElementById('summary').style.display = 'block';
//       document.getElementById('summary-text').textContent = response.summary;

//       // Create bot message container
//       var botMessageContainer = document.createElement('div');
//       botMessageContainer.className = 'message-container';
//       botMessageContainer.id = 'bot-message-container';

//       // Create bot message div
//       var botMessageDiv = document.createElement('div');
//       botMessageDiv.className = 'message bot-message';
//       botMessageDiv.textContent = response.summary;

//       // Append bot message div to bot message container
//       botMessageContainer.appendChild(botMessageDiv);

//       // Append bot message container to chat messages
//       chatMessages.appendChild(botMessageContainer);
//       chatMessages.scrollTop = chatMessages.scrollHeight;
//     }
//   });

//   document.getElementById('user-input').value = '';
// }