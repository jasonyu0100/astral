export enum ConversationRole {
  NoteTaker = '📝 Note Taker',
  Questioner = '❓ Questioner',
  Answerer = '💬 Answerer',
  Summariser = '📚 Summariser',
  Moderator = '🛡️ Moderator',
  Collaborator = '🤝 Collaborator',
  Visionary = '🌟 Visionary',
  Connector = '🔗 Connector',
  Critic = '🧐 Critic',
  Reflector = '🔍 Reflector',
  Timekeeper = '⏳ Timekeeper',
}

export const roleDescriptions: { [key in ConversationRole]: string } = {
  [ConversationRole.NoteTaker]: `As the Note Taker, you facilitate the conversation, ensuring that each participant has an opportunity to contribute. Your role is to keep the dialogue flowing smoothly, maintaining a balanced and inclusive environment within the space.`,
  [ConversationRole.Questioner]: `As the Questioner, your role is to ask insightful questions that help shape the narrative of the chapter, ensuring that each scene stays on course and aligns with the space's creative goals. Your inquiries keep the conversation dynamic and moving forward.`,
  [ConversationRole.Answerer]: `As the Answerer, your role is to respond to questions posed by the Questioner, providing thoughtful and informative answers that enhance the chapter's narrative. Your insights help shape the direction of the conversation, adding depth and clarity to the space.`,
  [ConversationRole.Summariser]: `As the Summariser, you synthesize the key points of the conversation, capturing the essence of each scene and highlighting the most important details. Your summaries help keep the dialogue focused and on track, ensuring that the chapter's narrative remains cohesive and engaging.`,
  [ConversationRole.Moderator]: `As the Moderator, you oversee the conversation, ensuring that each participant adheres to the space's guidelines and stays on topic. Your role is to maintain a respectful and inclusive environment, mediating any conflicts or disruptions that may arise during the dialogue.`,
  [ConversationRole.Collaborator]: `As a Collaborator, your role is to work together with the other participants to co-create the chapter's narrative, sharing ideas, insights, and perspectives to shape the dialogue. Your collaborative efforts help build a cohesive and engaging story within the space.`,
  [ConversationRole.Visionary]: `As the Visionary, you inspire others by providing a forward-thinking and imaginative outlook on the conversation. Your role is to introduce new concepts, expand the narrative scope, and drive the conversation in innovative directions.`,
  [ConversationRole.Connector]: `As the Connector, your role is to bridge gaps between ideas and participants, drawing connections that enhance the collaborative nature of the space. You ensure that all voices are heard and that the conversation is woven together seamlessly.`,
  [ConversationRole.Critic]: `As the Critic, you provide constructive feedback on ideas and narrative elements. Your role is to challenge assumptions and push the dialogue toward deeper, more refined insights, helping to identify any potential flaws or improvements.`,
  [ConversationRole.Reflector]: `As the Reflector, you mirror the group’s ideas and emotions, providing a space for reflection. Your role is to ensure the group remains self-aware, and you help participants understand how their contributions fit into the bigger picture.`,
  [ConversationRole.Timekeeper]: `As the Timekeeper, you ensure the conversation remains on track in terms of timing and agenda. Your role is to monitor the pacing, ensuring that the discussion progresses efficiently without losing focus on key goals.`,
};
