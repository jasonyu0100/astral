export enum ConversationRole {
  Channel = '📝 Channel',
  Answerer = '💬 Answerer',
  Questioner = '❓ Questioner',
  Summariser = '📚 Summariser',
  Ideator = '💡 Ideator',
  Creative = '🎨 Creative',
  Scripter = '📜 Scripter',
  Visionary = '🌟 Visionary',
  Connector = '🔗 Connector',
  Critic = '🧐 Critic',
  Reflector = '🔍 Reflector',
}

export const roleDescriptions: { [key in ConversationRole]: string } = {
  [ConversationRole.Channel]: `As the Note Taker, you facilitate the conversation, ensuring that each participant has an opportunity to contribute. Your role is to keep the dialogue flowing smoothly, maintaining a balanced and inclusive environment within the space.`,
  [ConversationRole.Questioner]: `As the Questioner, your role is to ask insightful questions that help shape the narrative of the chapter, ensuring that each scene stays on course and aligns with the space's creative goals. Your inquiries keep the conversation dynamic and moving forward.`,
  [ConversationRole.Answerer]: `As the Answerer, your role is to respond to questions posed by the Questioner, providing thoughtful and informative answers that enhance the chapter's narrative. Your insights help shape the direction of the conversation, adding depth and clarity to the space.`,
  [ConversationRole.Summariser]: `As the Summariser, you synthesize the key points of the conversation, capturing the essence of each scene and highlighting the most important details. Your summaries help keep the dialogue focused and on track, ensuring that the chapter's narrative remains cohesive and engaging.`,
  [ConversationRole.Ideator]: `As the Ideator, you generate creative ideas and solutions that drive the conversation forward, adding depth and complexity to the chapter's narrative. Your role is to inspire others with your innovative thinking and imaginative contributions.`,
  [ConversationRole.Creative]: `As the Creative, you bring artistic flair and originality to the conversation, infusing the space with your unique perspective and vision. Your role is to add color and creativity to the chapter's narrative, making it more engaging and dynamic.`,
  [ConversationRole.Scripter]: `As the Scripter, you help shape the dialogue and narrative structure of the chapter, ensuring that each scene flows smoothly and logically. Your role is to craft compelling dialogue and storylines that captivate the audience and enhance the overall experience.`,
  [ConversationRole.Visionary]: `As the Visionary, you inspire others by providing a forward-thinking and imaginative outlook on the conversation. Your role is to introduce new concepts, expand the narrative scope, and drive the conversation in innovative directions.`,
  [ConversationRole.Connector]: `As the Connector, your role is to bridge gaps between ideas and participants, drawing connections that enhance the collaborative nature of the space. You ensure that all voices are heard and that the conversation is woven together seamlessly.`,
  [ConversationRole.Critic]: `As the Critic, you provide constructive feedback on ideas and narrative elements. Your role is to challenge assumptions and push the dialogue toward deeper, more refined insights, helping to identify any potential flaws or improvements.`,
  [ConversationRole.Reflector]: `As the Reflector, you mirror the group’s ideas and emotions, providing a space for reflection. Your role is to ensure the group remains self-aware, and you help participants understand how their contributions fit into the bigger picture.`,
};
