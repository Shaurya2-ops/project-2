const prompts = [
    "Describe a futuristic world where AI controls everything.",
    "Write a creative story about an AI-powered assistant that gains emotions.",
    "Generate an engaging product description for a smart gadget.",
    "Imagine a conversation between a human and an AI 50 years in the future.",
    "Write a marketing ad for a virtual reality AI companion."
];

function generatePrompt() {
    let userInput = document.getElementById("userInput").value.trim();
    
    if (userInput === "") {
        document.getElementById("output").textContent = "Please enter a topic!";
        return;
    }

    let randomIndex = Math.floor(Math.random() * prompts.length);
    document.getElementById("output").textContent = `Prompt: ${userInput} - ${prompts[randomIndex]}`;
}
