import { StormContextObj, exampleStormContext } from "./context/main";
import { StormChatObj, exampleStormChat } from "./point/chat/main";
import {
  StormMessageObj,
  exampleStormMessages,
  exampleYouMessage,
} from "./point/chat/message/main";
import {
  StormPointObj,
  exampleStormChats,
  exampleStormPoint,
  exampleStormPoints,
} from "./point/main";

export const stormModel: {
  context: {
    chats: {
      chat: {
        messages: {
          message: {
            example: StormMessageObj;
          };
          example: StormMessageObj[];
        };
        example: StormChatObj;
      };
      example: StormChatObj[];
    };
    example: StormContextObj;
  };
  points: {
    point: {
      chats: {
        chat: {
          messages: {
            message: {
              example: StormMessageObj;
            };
            example: StormMessageObj[];
          };
          example: StormChatObj;
        };
        example: StormChatObj[];
      };
      example: StormPointObj;
    };
    example: StormPointObj[];
  };
} = {
  context: {
    chats: {
      chat: {
        messages: {
          message: {
            example: exampleYouMessage,
          },
          example: exampleStormMessages,
        },
        example: exampleStormChat,
      },
      example: exampleStormChats,
    },
    example: exampleStormContext,
  },
  points: {
    point: {
      chats: {
        chat: {
          messages: {
            message: {
              example: exampleYouMessage,
            },
            example: exampleStormMessages,
          },
          example: exampleStormChat,
        },
        example: exampleStormChats,
      },
      example: exampleStormPoint,
    },
    example: exampleStormPoints,
  },
};
