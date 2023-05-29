const apiKey = "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";
const apiUrl = "https://api.openai.com/v1/engines/davinci-codex/completions";

function displayBotReply(reply) {
  alert("Bot: " + reply);
}

async function sendMessage() {
  while (true) {
    const userMessage = prompt("User:");

    if (userMessage.toLowerCase() === "exit") {
      break;
    }

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        prompt: userMessage,
        max_tokens: 50
      })
    });

    const data = await response.json();
    const botReply = data.choices[0].text.trim();

    displayBotReply(botReply);
  }
}

// Example usage
sendMessage();
