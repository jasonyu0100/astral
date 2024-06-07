import OpenAI from 'openai';

export const useOpenAIController = () => {
  const getOpenAiClient = () => {
    const openai = new OpenAI({
      apiKey: process.env.OPEN_AI_APIKEY,
      dangerouslyAllowBrowser: true,
    });
    return openai;
  };

  const getMessageResponse = async (message: string) => {
    const openai = getOpenAiClient();
    const handleGenerate = async (prompt: string) => {
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant designed to output text.',
          },
          { role: 'user', content: prompt },
        ],
        model: 'gpt-3.5-turbo-1106',
      });
      return completion.choices[0].message.content;
    };
    const response = await handleGenerate(message);
    return response;
  };

  const getImageResponse = async (prompt: string) => {
    const openai = getOpenAiClient();
    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: prompt,
      n: 1,
      size: '1024x1024',
    });
    return response.data;
  };

  return {
    getImageResponse,
    getMessageResponse,
  };
};
