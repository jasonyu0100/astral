import { ContextForChapterChatList } from '@/(server)/(controller)/space/chapter/chat/list';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForChapterSceneList } from '@/(server)/(controller)/space/chapter/scene/list';
import { ContextForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { ContextForChapterChatObj } from '@/(server)/(model)/space/chapter/chat/main';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { ContextForChapterSceneObj } from '@/(server)/(model)/space/chapter/scene/main';
import { ContextForChapterVerseObj } from '@/(server)/(model)/space/chapter/verse/main';
import { useContext } from 'react';
import { SpaceSeaCardChapter } from './variants/chapter/main';
import { SpaceSeaCardChat } from './variants/chat/main';
import { SpaceSeaCardScene } from './variants/scene/main';
import { SpaceSeaCardVerse } from './variants/verse/main';

export function SpaceSeaCards() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sceneListController = useContext(ContextForChapterSceneList);
  const chatListController = useContext(ContextForChapterChatList);
  const verseListController = useContext(ContextForChapterVerseList);

  return (
    <div className='flex w-full flex-row flex-wrap gap-[1rem] pb-[2rem]'>
      <ContextForSpaceChapterObj.Provider
        value={chapterListController.state.currentObj}
      >
        <SpaceSeaCardChapter />
      </ContextForSpaceChapterObj.Provider>
      {sceneListController.state.objs.map((scene) => (
        <ContextForChapterSceneObj.Provider value={scene}>
          <SpaceSeaCardScene />
        </ContextForChapterSceneObj.Provider>
      ))}
      {chatListController.state.objs.map((chat) => (
        <ContextForChapterChatObj.Provider value={chat}>
          <SpaceSeaCardChat />
        </ContextForChapterChatObj.Provider>
      ))}
      {verseListController.state.objs.map((verse) => (
        <ContextForChapterVerseObj.Provider value={verse}>
          <SpaceSeaCardVerse />
        </ContextForChapterVerseObj.Provider>
      ))}
    </div>
  );
}
