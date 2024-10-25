import OpenAI from 'openai';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {}

interface ControllerActions {
  getImageResponse: (prompt: string) => Promise<OpenAI.Images.Image[]>;
  getMessageResponse: (message: string) => Promise<string | null>;
  transcribeAudio: (audioBlob: Blob) => Promise<string | null>; // New method
}

export const useControllerForOpenAi = (): Controller => {
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

  const transcribeAudio = async (audioBlob: Blob) => {
    const openai = getOpenAiClient();
    console.log(audioBlob);

    // Create FormData to send the audio file
    const formData = new FormData();
    formData.append('file', audioBlob, 'audio.wav'); // Preferred filename

    try {
      const response = await openai.audio.transcriptions.create({
        model: 'whisper-1', // Use the appropriate Whisper model
        file: formData.get('file'), // Attach the audio file
        response_format: 'text', // Expected response format
      });
      return response;
    } catch (error) {
      console.error('Error during audio transcription:', error);
      return null; // Handle error case
    }
  };

  return {
    state: {},
    actions: {
      getImageResponse,
      getMessageResponse,
      transcribeAudio, // Expose the new method
    },
  };
};
