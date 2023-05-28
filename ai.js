const apiKey = "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";
const apiUrl = "https://api.openai.com/v1/engines/davinci-codex/completions";

async function sendMessage(message) {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      prompt: message,
      max_tokens: 50  // Adjust the number of tokens as per your needs
    })
  });

  const data = await response.json();
  const reply = data.choices[0].text.trim();
  return reply;
}

// Example usage
async function chat() {
  const userMessage = "Hello, how are you?";
  const botReply = await sendMessage(userMessage);
  console.log("Bot:", botReply);
}

chat();
