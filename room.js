const chatForm = document.getElementById("chatForm");
const messages = document.getElementById("messages");

// Retrieve messages from local storage and display them
if (localStorage.getItem("messages")) {
  messages.innerHTML = localStorage.getItem("messages");
}

chatForm.addEventListener("submit", function(event) {
  event.preventDefault(); 
  const name = sessionStorage.getItem('name'); 

  const messageInput = document.getElementById("message");
  const message = messageInput.value;

  messages.innerHTML += "<p><strong>" + name + ":</strong> " + message + "</p>";

  // Save messages to local storage
  localStorage.setItem("messages", messages.innerHTML);

  messageInput.value = '';
});

