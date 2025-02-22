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
    sendSummaryRequest(userInput);
  }
  
  function sendSummaryRequest(paragraph) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/generate_summary', true);
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