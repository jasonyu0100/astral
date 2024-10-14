import { ContextForConversationMessageList } from '@/(server)/controller/conversation/message/list';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ImageBackground } from '@/ui/background/img/main';
import { AbsoluteHolder } from '@/ui/holder/main';
import { useContext } from 'react';
import { SpacesSpaceConversations } from './conversations/main';
import { SpacesSpaceEmpty } from './empty/main';
import { SpacesSpaceMessages } from './messages/list/main';

export function SpacesSpaceContents() {
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
          <SpacesSpaceEmpty />
        ) : (
          <>
            <SpacesSpaceMessages />
          </>
        )}
        <SpacesSpaceConversations />
      </AbsoluteHolder>
    </div>
  );
}
