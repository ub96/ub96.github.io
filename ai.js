document.addEventListener("DOMContentLoaded", function() {
    var chatWindow = document.getElementById("chat-window");
    var messageBox = document.getElementById("message-box");

    messageBox.addEventListener("keydown", function(event) {
        if (event.key === "Enter" && messageBox.value.trim() !== "") {
            var message = messageBox.value.trim();

            // Clear the message box
            messageBox.value = "";

            // Create a new chat bubble for the user message
            createChatBubble("user", message);

            // Generate a response for the user message
            var response = generateResponse(message);

            // Create a new chat bubble for the response
            createChatBubble("chatzi", response);
        }
    });

    function createChatBubble(sender, message) {
        var bubble = document.createElement("div");
        bubble.classList.add("chat-bubble");
        bubble.classList.add(sender === "user" ? "user" : "chatzi");
        bubble.textContent = message;

        chatWindow.appendChild(bubble);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function generateResponse(message) {
        // Replace this with your own logic to generate responses
        var response = "I'm Chatzi Buddy! How can I assist you today?";
        return response;
    }
});
