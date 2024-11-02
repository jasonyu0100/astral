import { conversationDbWrapper } from '@/architecture/client/conversation/main';
import { conversationMessageDbWrapper } from '@/architecture/client/conversation/message/main';
import { conversationModel } from '@/architecture/model/conversation/main';
import { conversationMessageModel } from '@/architecture/model/conversation/message/main';

export const conversationMap = {
  db: conversationDbWrapper,
  model: conversationModel,
  message: {
    model: conversationMessageModel,
    db: conversationMessageDbWrapper,
  },
};
