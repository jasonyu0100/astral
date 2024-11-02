import { ContextForConversationMessageList } from '@/architecture/controller/conversation/message/list';
import { createContext, RefObject, useContext, useEffect } from 'react';

interface Controller {
  scrollToBottom: () => void;
}

export const ContextForConversationScrollToBottom = createContext(
  {} as Controller,
);

export function useControllerForMessageScrollToBottom(
  ref: RefObject<HTMLDivElement>,
): Controller {
  const messageListController = useContext(ContextForConversationMessageList);

  const scrollToBottom = () => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageListController.state?.objs]);

  return {
    scrollToBottom,
  };
}
