import { VerticalDivider } from '@/(components)/(line)/divider/vertical/main';
import { ContextForChapterItemList } from '@/(server)/(controller)/space/chapter/update/item/chapter-list';
import { ChapterUpdateItemVariant } from '@/(server)/(model)/space/chapter/update/item/main';
import { ChapterUpdateItemObj } from '@/graphql/API';
import { useContext } from 'react';
import { SpaceSeaCardChapter } from './card/variants/chapter/main';
import { SpaceSeaCardChat } from './card/variants/chat/main';
import { SpaceSeaCardConversation } from './card/variants/conversation/main';
import { SpaceSeaCardIdea } from './card/variants/idea/main';
import { SpaceSeaCardScene } from './card/variants/scene/main';
import { SpaceSeaCardVerse } from './card/variants/verse/main';
import { SpaceSeaEditForm } from './form/main';
import { SpaceSeaEditNext } from './next/main';
import { SpaceSeaEditPrev } from './prev/main';

export function SpaceSeaCardEdit() {
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
    <div className='flex h-full w-full flex-row items-center justify-between space-x-[4rem]'>
      <SpaceSeaEditPrev
        onClick={() => updateItemListController.actions.stateActions.goPrev()}
      />
      <VerticalDivider />
      {/* <ContextForChapterUpdateItemObj.Provider
        value={updateItemListController.state.currentObj}
      >
        <SpaceSeaEditCard>
          {renderCard(updateItemListController.state.currentObj)}
        </SpaceSeaEditCard>
      </ContextForChapterUpdateItemObj.Provider> */}
      <SpaceSeaEditForm />
      <VerticalDivider />
      <SpaceSeaEditNext
        onClick={() => updateItemListController.actions.stateActions.goNext()}
      />
    </div>
  );
}
