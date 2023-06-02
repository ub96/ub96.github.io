document.addEventListener("DOMContentLoaded", function() {
    var chatziBuddyIcon = document.getElementById("chatzi-buddy-icon");
    var menu = document.querySelector(".menu");
    var menuChatGptOption = document.getElementById("menu-chatgpt");
    var menuOpenChatOption = document.getElementById("menu-open-chat");
    var chatziBuddy = document.getElementById("chatzi-buddy");
    var chatWindow = document.getElementById("chat-window");
    var messageBox = document.getElementById("message-box");

    chatziBuddyIcon.addEventListener("click", function() {
        menu.style.display = "block";
    });

    menuChatGptOption.addEventListener("click", function() {
        menu.style.display = "none";
        chatziBuddy.style.display = "block";
    });

    menuOpenChatOption.addEventListener("click", function() {
        menu.style.display = "none";
        chatziBuddy.style.display = "none";
    });

    messageBox.addEventListener("keydown", function(event) {
        if (event.key === "Enter" && messageBox.value.trim() !== "") {
            var message = messageBox.value.trim();

            createChatBubble("user", message);

            var response = generateResponse(message);

            createChatBubble("chatzi", response);

            speak(response); // Speak the response

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

    function speak(text) {
        var utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    }

    function generateResponse(message) {
        // Replace this with your own logic to generate responses
        var response = "I'm Chatzi Buddy! How can I assist you today?";
        return response;
    }
});
