import { ContextForSpaceChapterObj } from '@/(model)/space/chapter/main';
import { StormChapterChatAdd } from './chat/add/main';
import { StormChapterChat } from './chat/main';
import { StormChapterHeader } from './header/main';
import { useContext } from 'react';
import { ContextForChatObj } from '@/(model)/space/chapter/chat/main';
import { ActiveChapterHeaderContainer } from './header/container/active/main';
import { InactiveChapterHeaderContainer } from './header/container/inactive/main';
import { ContextForSpaceChapterList } from '@/(model)/(controller)/space/chapter/list';
import { ContextForChapterChatList } from '@/(model)/(controller)/space/chapter/chat/list';

export function StormChapter() {
  const chapter = useContext(ContextForSpaceChapterObj);
  const chatListController = useContext(ContextForChapterChatList);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const active = chapterListController.actions.stateActions.checkActive(chapter);

  return (
    <>
      {active ? (
        <ActiveChapterHeaderContainer>
          <StormChapterHeader />
          {chatListController.state.objs.map((chat) => (
            <ContextForChatObj.Provider value={chat} key={chat.id}>
              <StormChapterChat key={chat.id} />
            </ContextForChatObj.Provider>
          ))}
          <StormChapterChatAdd />
        </ActiveChapterHeaderContainer>
      ) : (
        <InactiveChapterHeaderContainer>
          <StormChapterHeader />
        </InactiveChapterHeaderContainer>
      )}
    </>
  );
}
