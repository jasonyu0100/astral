import { GoogleGenerativeAI } from '@google/generative-ai';

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export const useGeminiController = () => {
  const getMessageResponse = async (message: string) => {
    const prompt = `You are a helpful assistant designed to output text. ${message}`;
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const response = (await model.generateContent(prompt)).response;
    const text = response.text();
    return text;
  };

  return {
    getMessageResponse,
  };
};
