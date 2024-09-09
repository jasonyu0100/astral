import { ContextForConversationMessageList } from '@/(server)/controller/space/chapter/scene/conversation/message/list';
import { RefObject, useContext, useEffect } from 'react';

export function ControllerForMessageScrollToBottom(
  ref: RefObject<HTMLDivElement>,
) {
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
    ref,
    scrollToBottom,
  };
}
