import { conversationDbWrapper } from '@/(server)/client/conversation/main';
import { conversationMessageDbWrapper } from '@/(server)/client/conversation/message/main';
import { conversationModel } from '@/(server)/model/conversation/main';
import { conversationMessageModel } from '@/(server)/model/conversation/message/main';

export const conversationMap = {
  db: conversationDbWrapper,
  model: conversationModel,
  message: {
    model: conversationMessageModel,
    db: conversationMessageDbWrapper,
  },
};
