import { SpaceSeaCardConversation } from '../../variants/conversation/main';
import { SpaceSeaCardIdea } from '../../variants/idea/main';

export function SpaceSeaWorkCards() {
  return (
    <div className='flex w-full flex-row flex-wrap gap-[1rem] pb-[2rem]'>
      {/* <ContextForSpaceChapterObj.Provider
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
      ))} */}
      <SpaceSeaCardIdea />
      <SpaceSeaCardConversation />
    </div>
  );
}
