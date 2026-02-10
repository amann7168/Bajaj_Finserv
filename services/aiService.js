const axios = require("axios");

exports.askAI = async (question) => {
  try {
     const API_KEY = "AIzaSyAvEHec-GLRQAsLd2HvY8mdZNslffc5e9s"; 
    
     const modelPath = "models/gemini-2.0-flash-lite"; 
    
     const url = `https://generativelanguage.googleapis.com/v1beta/${modelPath}:generateContent?key=${API_KEY}`;

    const response = await axios.post(url, {
      contents: [{
        parts: [{ text: `${question} Answer in exactly one single word.` }]
      }]
    });

    const aiText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!aiText) return "Result";

     return aiText.trim().split(/\s+/)[0].replace(/[^\w]/gi, '');

  } catch (error) {
     if (error.response?.status === 429) {
      console.log("Quota hit, using fallback word.");
      return "Busy";
    }
    
    console.log("AI ERROR:", error.response?.data || error.message);
    return "AI_Error";
  }
};