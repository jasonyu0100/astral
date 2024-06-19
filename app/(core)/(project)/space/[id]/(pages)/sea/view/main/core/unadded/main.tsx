import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ContextForChatConversationList } from '@/(server)/(controller)/space/chapter/chat/conversation/list';
import { ContextForChapterChatList } from '@/(server)/(controller)/space/chapter/chat/list';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForChapterSceneList } from '@/(server)/(controller)/space/chapter/scene/list';
import { ContextForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { useContext } from 'react';
import { SpaceSeaUnaddedCard } from './card/main';

export function SpaceSeaCoreUnadded() {
  const sceneListController = useContext(ContextForChapterSceneList);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const chatListController = useContext(ContextForChapterChatList);
  const conversationListController = useContext(ContextForChatConversationList);
  const verseListController = useContext(ContextForChapterVerseList);

  return (
    <div className='flex w-full flex-col space-y-[2rem] overflow-auto p-[2rem]'>
      <p className='text-2xl font-bold text-white'>Unadded</p>
      <HorizontalDivider />

      <div className='w-full overflow-auto'>
        <div className='gao-[1rem] flex flex-row flex-wrap gap-[1rem]'>
          <SpaceSeaUnaddedCard>
            <p>{chapterListController.state.currentObj?.title}</p>
            <br />
            <ul className='list-disc text-sm font-medium'>
              <li>Scene A</li>
              <li>Chat B</li>
              <li>Verse C</li>
            </ul>
          </SpaceSeaUnaddedCard>
          {sceneListController.state.objs.map((scene, index) => (
            <SpaceSeaUnaddedCard>
              <p>Scene - {scene.title}</p>
              <br />
              <ul className='list-disc text-sm font-medium'>
                <li>Idea A</li>
                <li>Idea B</li>
                <li>Idea C</li>
              </ul>
            </SpaceSeaUnaddedCard>
          ))}
          {chatListController.state.objs.map((chat, index) => (
            <SpaceSeaUnaddedCard>
              <p>Chat - {chat.title}</p>
              <br />
              <ul className='list-disc text-sm font-medium'>
                <li>Conversation A</li>
                <li>Conversation A</li>
                <li>Conversation A</li>
              </ul>
            </SpaceSeaUnaddedCard>
          ))}
          {verseListController.state.objs.map((verse, index) => (
            <SpaceSeaUnaddedCard>
              <p>Verse - {verse.title}</p>
              <br />
              <ul className='list-disc text-sm font-medium'>
                <li>Comment A</li>
                <li>Comment A</li>
                <li>Comment A</li>
              </ul>
            </SpaceSeaUnaddedCard>
          ))}
        </div>
      </div>
    </div>
  );
}
