document.addEventListener("DOMContentLoaded", function() {
    var chatziBuddyIcon = document.getElementById("chatzi-buddy-icon");
    var chatziBuddy = document.getElementById("chatzi-buddy");
    var chatWindow = document.getElementById("chat-window");
    var messageBox = document.getElementById("message-box");

    chatziBuddyIcon.addEventListener("click", function() {
        chatziBuddy.style.display = "block";
    });

    messageBox.addEventListener("keydown", function(event) {
        if (event.key === "Enter" && messageBox.value.trim() !== "") {
            var message = messageBox.value.trim();

            createChatBubble("user", message);

            var response = generateResponse(message);

            createChatBubble("chatzi", response);

            messageBox.value = "";
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
