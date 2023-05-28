// Function to prompt the user with a text box and get their input
function promptInput(message) {
    return prompt(message);
}

// Function to display an alert message
function showAlert(message) {
    alert(message);
}

// Function to start the conversation with ChatGPT
function startChat() {
    // Prompt the user for their message
    const userInput = promptInput("Enter your message:");

    // Send the user's message to the server
    const url = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    const data = {
        'prompt': userInput,
        'max_tokens': 50,
        'temperature': 0.7
    };
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
        // Retrieve the generated chatbot response
        const chatbotResponse = response.choices[0].text.trim();

        // Display the chatbot response in an alert
        showAlert("ChatGPT: " + chatbotResponse);

        // Start the conversation again
        startChat();
    })
    .catch(error => {
        console.error('Error:', error);
        showAlert('An error occurred. Please try again.');
    });
}

// Start the chat
startChat();
