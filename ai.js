const apiKey = "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";
const apiUrl = "https://api.openai.com/v1/engines/davinci-codex/completions";

function displayBotReply(reply) {
  alert("Bot: " + reply);
}

async function sendMessage() {
  const userMessage = prompt("User:"); // Use a text box to get user input

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      prompt: userMessage,
      max_tokens: 50  // Adjust the number of tokens as per your needs
    })
  });

  const data = await response.json();
  const botReply = data.choices[0].text.trim();

  displayBotReply(botReply);
}

// Example usage
sendMessage();
