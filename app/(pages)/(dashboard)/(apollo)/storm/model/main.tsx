import { StormContextObj, exampleStormContext } from "./context/main";
import { StormChatObj, exampleStormChat } from "./point/chat/main";
import {
  StormMessageObj,
  exampleStormMessages,
  exampleYouMessage,
} from "./point/chat/message/main";
import { StormPointObj, exampleStormPoint } from "./point/main";

export const stormModel: {
  context: {
    chat: {
      messages: {
        message: {
          example: StormMessageObj;
        };
        example: StormMessageObj[];
      };
      example: StormChatObj;
    };
    example: StormContextObj;
  };
  point: {
    chat: {
      messages: {
        message: {
          example: StormMessageObj;
        };
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
        message: {
          example: exampleYouMessage,
        },
        example: exampleStormMessages,
      },
      example: exampleStormChat,
    },
    example: exampleStormContext,
  },
  point: {
    chat: {
      messages: {
        message: {
          example: exampleYouMessage,
        },
        example: exampleStormMessages,
      },
      example: exampleStormChat,
    },
    example: exampleStormPoint,
  },
};
