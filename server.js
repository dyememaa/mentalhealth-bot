const express = require('express');
const cors = require('cors');  
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Simple mental health chatbot API
app.post('/chat', (req, res) => {
    const { message } = req.body;
    let response = "I'm here to listen. 💬";

    if (message.toLowerCase().includes('anxious')) {
        response = "Try this: Inhale for 4 seconds, hold for 4, exhale for 4. 🌬️";
    } else if (message.toLowerCase().includes('sad')) {
        response = "It’s okay to feel sad. Want me to share a positive quote? 🌈";
    } else if (message.toLowerCase().includes('lonely')) {
        response = "You are not alone. Would you like to try a grounding exercise? 🫂";
    }

    res.json({ reply: response });
});

app.listen(port, () => {
    console.log(`Mental Health Bot is running on port ${port}`);
});
