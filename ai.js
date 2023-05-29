const apiKey = "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";
const apiUrl = "https://api.openai.com/v1/engines/davinci-codex/completions";

function displayBotReply(reply) {
  alert("Bot: " + reply);
}

async function sendMessage() {
  while (true) {
    const userMessage = prompt("User:");

    if (!userMessage) {
      break;
    }

    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage === "exit") {
      break;
    }

    try {
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

      if (response.status === 401) {
        throw new Error("Unauthorized: Invalid API key or insufficient permissions.");
      }

      if (response.ok) {
        const data = await response.json();

        if (data && data.choices && data.choices.length > 0) {
          const botReply = data.choices[0].text.trim();
          displayBotReply(botReply);
        } else {
          console.error("Invalid response from the API");
        }
      } else {
        console.error("Error from the API:", response.status);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
}

// Example usage
sendMessage();
