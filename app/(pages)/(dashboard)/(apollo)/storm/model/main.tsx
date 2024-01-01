import { StormContextObj } from "./context/main";
import { StormChatObj } from "./point/chat/main";
import {
  StormMessageObj,
  exampleStormMessages,
  exampleYouMessage,
} from "./point/chat/message/main";
import { StormPointObj } from "./point/main";

export const stormModel: {
  context: {
    chat: {
      messages: {
        message: StormMessageObj;
        example: StormMessageObj[];
      };
      example: StormChatObj;
    };
    example: StormContextObj;
  };
  point: {
    chat: {
      messages: {
        message: StormMessageObj;
        example: StormMessageObj[];
      };
      example: StormChatObj;
    };
    example: StormPointObj;
  };
} = {
  context: {
    chat: {
      messages: {
        message: exampleYouMessage,
        example: exampleStormMessages,
      },
      example: { messages: exampleStormMessages },
    },
    example: {
      chat: { messages: exampleStormMessages },
    },
  },
  point: {
    chat: {
      messages: {
        message: exampleYouMessage,
        example: exampleStormMessages,
      },
      example: { messages: exampleStormMessages },
    },
    example: {
      chat: { messages: exampleStormMessages },
    },
  },
};
