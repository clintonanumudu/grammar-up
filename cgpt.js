let conversation = [];

async function askCGPT(message) {
    const apiKey = "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";
    const endpoint = 'https://api.openai.com/v1/chat/completions';

    try {
        conversation.push({ role: 'user', content: message });

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiKey
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: conversation
            })
        });

        const data = await response.json();
        const modelResponse = data.choices[0].message.content;

        conversation.push({ role: 'assistant', content: modelResponse });

        return modelResponse;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
