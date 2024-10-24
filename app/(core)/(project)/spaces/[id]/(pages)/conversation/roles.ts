export enum ConversationRole {
  NoteTaker = 'Note Taker',
  Summariser = 'Summariser',
  Questioner = 'Questioner',
  Answerer = 'Answerer',
  Moderator = 'Moderator',
  Collaborator = 'Collaborator',
}

export const roleDescriptions: { [key in ConversationRole]: string } = {
  [ConversationRole.NoteTaker]: `As the Note Taker, you facilitate the conversation, ensuring that each participant has an opportunity to contribute. Your role is to keep the dialogue flowing smoothly, maintaining a balanced and inclusive environment within the space.`,
  [ConversationRole.Summariser]: `As the Summariser, you synthesize the key points of the conversation, capturing the essence of each scene and highlighting the most important details. Your summaries help keep the dialogue focused and on track, ensuring that the chapter's narrative remains cohesive and engaging.`,
  [ConversationRole.Questioner]: `As the Questioner, your role is to ask insightful questions that help shape the narrative of the chapter, ensuring that each scene stays on course and aligns with the space's creative goals. Your inquiries keep the conversation dynamic and moving forward.`,
  [ConversationRole.Answerer]: `As the Answerer, your role is to respond to questions posed by the Questioner, providing thoughtful and informative answers that enhance the chapter's narrative. Your insights help shape the direction of the conversation, adding depth and clarity to the space.`,
  [ConversationRole.Moderator]: `As the Moderator, you oversee the conversation, ensuring that each participant adheres to the space's guidelines and stays on topic. Your role is to maintain a respectful and inclusive environment, mediating any conflicts or disruptions that may arise during the dialogue.`,
  [ConversationRole.Collaborator]: `As a Collaborator, your role is to work together with the other participants to co-create the chapter's narrative, sharing ideas, insights, and perspectives to shape the dialogue. Your collaborative efforts help build a cohesive and engaging story within the space.`,
};
