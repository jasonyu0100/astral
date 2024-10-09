import { chapterConversationDbWrapper } from '@/(server)/client/conversation/main';
import { conversationMessageDbWrapper } from '@/(server)/client/conversation/message/main';
import { chapterConversationModel } from '@/(server)/model/conversation/main';
import { conversationMessageModel } from '@/(server)/model/conversation/message/main';

export const conversationMap = {
  db: chapterConversationDbWrapper,
  model: chapterConversationModel,
  message: {
    model: conversationMessageModel,
    db: conversationMessageDbWrapper,
  },
};
