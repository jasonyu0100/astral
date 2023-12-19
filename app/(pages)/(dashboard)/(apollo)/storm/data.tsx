// MESSAGE

export interface YouMessage {
  date: Date;
  message: string;
}

export interface PartnerMessage {
  date: Date;
  message: string;
}

export type Message = YouMessage | PartnerMessage;

export const defaultYouMessage: YouMessage = {
  date: new Date("2023-12-19"),
  message: "Hello World",
};

export const defaultPartnerMessage: PartnerMessage = {
  date: new Date("2023-12-19"),
  message: "Hello World",
};

export const defaultMessages: Message[] = [
  defaultYouMessage,
  defaultYouMessage,
  defaultYouMessage,
  defaultPartnerMessage,
];

// APOLLO

export interface ApolloStorm {
  chat: ApolloChat;
}

export interface ApolloChat {
  messages: Message[];
}

export const defaultApolloChat: ApolloChat = {
  messages: defaultMessages,
};

export const defaultApolloStorm: ApolloStorm = {
  chat: defaultApolloChat,
};

// CONSTELLATION
export interface ConstellationStorm {
  chat: ConstellationChat;
}

export interface ConstellationChat {
  messages: Message[];
}

export const defaultConstellationChat: ConstellationChat = {
  messages: defaultMessages,
};

export const defaultConstellationStorm: ConstellationStorm = {
  chat: defaultConstellationChat,
};
