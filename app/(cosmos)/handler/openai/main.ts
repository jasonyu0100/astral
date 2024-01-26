import { MessageObj } from "@/tables/storm/chat/message/main";
import OpenAI from "openai";

export const useOpenAI = () => {
    const getMessageResponse = async (userMessage: MessageObj) => {
      const handleGenerate = async (prompt: string) => {
        const openai = new OpenAI({
          apiKey: process.env.NEXT_PUBLIC_OPEN_AI_APIKEY,
          dangerouslyAllowBrowser: true,
        });
        const completion = await openai.chat.completions.create({
          messages: [
            {
              role: 'system',
              content: 'You are a helpful assistant designed to output JSON.',
            },
            { role: 'user', content: prompt },
          ],
          model: 'gpt-3.5-turbo-1106',
        });
        console.log(completion);
        return completion.choices[0].message.content;
      };
      const response = await handleGenerate(userMessage.message);
      return response;
    }

    return {
        getMessageResponse
    }
}