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
  analyzeImage: (imageUrl: string) => Promise<string | null>; // New method for analyzing images
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
        model: 'gpt-4-turbo',
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

  const analyzeImage = async (imageUrl: string) => {
    const openai = getOpenAiClient();

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini', // Ensure you are using the correct model for image analysis
        messages: [
          {
            role: 'user',
            content: 'What’s in this image?',
          },
        ],
        images: [
          {
            url: imageUrl,
          },
        ],
      });
      return response.choices[0].message.content; // Assuming the model returns the analysis in this format
    } catch (error) {
      console.error('Error during image analysis:', error);
      return null; // Handle error case
    }
  };

  return {
    state: {},
    actions: {
      getImageResponse,
      getMessageResponse,
      transcribeAudio, // Expose the audio transcription method
      analyzeImage, // Expose the new image analysis method
    },
  };
};
