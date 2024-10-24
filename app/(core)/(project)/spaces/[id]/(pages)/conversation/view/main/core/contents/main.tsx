import { ContextForConversationMessageList } from '@/(server)/controller/conversation/message/list';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ImageBackground } from '@/components/background/img/main';
import { AbsoluteHolder } from '@/components/holder/main';
import { useContext } from 'react';
import { SpacesConversationConversations } from './conversations/main';
import { SpacesConversationEmpty } from './empty/main';
import { SpacesConversationMessages } from './messages/list/main';
import { SpacesConversationStatusContents } from './status/main';

export function SpacesConversationContents() {
  const messageListController = useContext(ContextForConversationMessageList);
  const chapterListController = useContext(ContextForSpaceChapterList);
  return (
    <div
      className='relative flex w-full flex-col items-center'
      style={{ height: 'calc(100% - 4rem)' }}
    >
      <ImageBackground
        src={chapterListController.state.currentObj?.bg}
        active
      />
      <AbsoluteHolder>
        {messageListController.state.objs.length === 0 ? (
          <SpacesConversationEmpty />
        ) : (
          <div className='relative h-full w-full'>
            <SpacesConversationConversations />
            <SpacesConversationStatusContents />
            <SpacesConversationMessages />
          </div>
        )}
      </AbsoluteHolder>
    </div>
  );
}
