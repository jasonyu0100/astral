import { ImageBackground } from '@/components/background/img/main';
import { GlassAreaContainer } from '@/components/glass/area/main';
import { AbsoluteHolder } from '@/components/holder/main';
import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { useContext } from 'react';
import { SpacesPreviewEmpty } from './empty/main';
import { SpacesPreviewMain } from './main/main';

export function SpacesPreviewContents() {
  const postListController = useContext(ContextForUserPostListFromChapter);
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <div className='relative' style={{ width: '100%', height: '100%' }}>
      <ImageBackground
        src={chapterListController.state.currentObj?.bg}
        // active
      />
      <AbsoluteHolder>
        <GlassAreaContainer
          name={SpacesPreviewContents.name}
          sizeFx='w-full h-full'
          className={`flex flex-col overflow-auto`}
        >
          {postListController.state.objId ? (
            <SpacesPreviewMain />
          ) : (
            <SpacesPreviewEmpty />
          )}
        </GlassAreaContainer>
      </AbsoluteHolder>
    </div>
  );
}
