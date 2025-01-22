export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { message } = req.body;
        const apiKey = "AIzaSyBR7nikmPliqLQ62jAIz94FwjkPNTsHf88"; // Ganti dengan kunci API yang valid

        try {
            // Mengirim permintaan ke API Google Generative AI
            const response = await fetch("https://api.generativeai.google/v1/models/gemini:generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`
                },
                body: JSON.stringify({ prompt: message })
            });

            const data = await response.json();
            const reply = data?.candidates?.[0]?.content || "Sorry, I didn't understand that.";
            res.status(200).json({ reply }); // Kirimkan respons kembali ke frontend
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ error: 'Failed to fetch data from AI API' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' }); // Jika bukan POST, beri respons error
    }
}
