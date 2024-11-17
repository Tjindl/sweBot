import {GoogleGenerativeAI} from "@google/generative-ai";
  
const apiKey = "AIzaSyCIzivBUc0YWefTbnbMz-SFlCaB6Hgu7B8"
const genAI = new GoogleGenerativeAI(apiKey);
  
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "You are a chatbot for software engineers and programmers",
});
  
const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};
  
async function run(input) {
    const chatSession = model.startChat({
        generationConfig,
        history: [],
    });
    const result = await chatSession.sendMessage(input);
    return result.response.text();
}
  
export default run