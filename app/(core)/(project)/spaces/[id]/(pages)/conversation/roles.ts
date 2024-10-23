export enum ConversationRole {
  NoteTaker = 'Note Taker',
  Questioner = 'Questioner',
  Answerer = 'Answerer',
  Storyteller = 'Storyteller',
  Empathizer = 'Empathizer',
}

export const roleDescriptions: { [key in ConversationRole]: string } = {
  [ConversationRole.NoteTaker]: `As the Note Taker, you facilitate the conversation, ensuring that each participant has an opportunity to contribute. Your role is to keep the dialogue flowing smoothly, maintaining a balanced and inclusive environment within the space.`,
  [ConversationRole.Answerer]: `As the Answerer, your role is to respond to questions posed by the Questioner, providing thoughtful and informative answers that enhance the chapter's narrative. Your insights help shape the direction of the conversation, adding depth and clarity to the space.`,
  [ConversationRole.Questioner]: `As the Questioner, your role is to ask insightful questions that help shape the narrative of the chapter, ensuring that each scene stays on course and aligns with the space's creative goals. Your inquiries keep the conversation dynamic and moving forward.`,
  [ConversationRole.Storyteller]: `As the Storyteller, you weave narratives that enrich the chapter with vivid details and engaging scenarios. Your stories bring scenes to life, adding depth to the conversation and ensuring the space remains vibrant and imaginative.`,
  [ConversationRole.Empathizer]: `As the Empathizer, you connect emotionally with others in the space, aligning your contributions with the emotional undercurrents of the chapter. Your ability to relate and respond with empathy keeps the conversation heartfelt and engaging.`,
};
