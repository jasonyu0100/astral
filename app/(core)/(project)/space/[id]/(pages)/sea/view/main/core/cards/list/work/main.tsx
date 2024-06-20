import { ContextForChapterItemList } from '@/(server)/(controller)/space/chapter/update/item/chapter-list';
import {
  ChapterUpdateItemObj,
  ChapterUpdateItemVariant,
  ContextForChapterUpdateItemObj,
} from '@/(server)/(model)/space/chapter/update/item/main';
import { useContext } from 'react';
import { SpaceSeaCardChapter } from '../../card/variants/chapter/main';
import { SpaceSeaCardChat } from '../../card/variants/chat/main';
import { SpaceSeaCardConversation } from '../../card/variants/conversation/main';
import { SpaceSeaCardIdea } from '../../card/variants/idea/main';
import { SpaceSeaCardScene } from '../../card/variants/scene/main';
import { SpaceSeaCardVerse } from '../../card/variants/verse/main';

export function SpaceSeaWorkCards() {
  const updateItemListController = useContext(ContextForChapterItemList);

  function renderCard(updateItem: ChapterUpdateItemObj) {
    switch (updateItem.variant) {
      case ChapterUpdateItemVariant.CHAPTER:
        return <SpaceSeaCardChapter />;
      case ChapterUpdateItemVariant.SCENE:
        return <SpaceSeaCardScene />;
      case ChapterUpdateItemVariant.CHAT:
        return <SpaceSeaCardChat />;
      case ChapterUpdateItemVariant.VERSE:
        return <SpaceSeaCardVerse />;
      case ChapterUpdateItemVariant.IDEA:
        return <SpaceSeaCardIdea />;
      case ChapterUpdateItemVariant.CONVERSATION:
        return <SpaceSeaCardConversation />;
      default:
        return <SpaceSeaCardIdea />;
    }
  }

  return (
    <div className='flex w-full flex-row flex-wrap gap-[1rem] pb-[2rem]'>
      {updateItemListController.state.objs.map((updateItem) => (
        <ContextForChapterUpdateItemObj.Provider value={updateItem}>
          {renderCard(updateItem)}
        </ContextForChapterUpdateItemObj.Provider>
      ))}
    </div>
  );
}
