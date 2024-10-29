import { ImageBackground } from '@/components/background/img/main';
import { GlassAreaContainer } from '@/components/glass/area/main';
import { AbsoluteHolder } from '@/components/holder/main';
import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { useContext } from 'react';
import { SpacesPagesEmpty } from './empty/main';
import { SpacesPagesMain } from './main/main';

export function SpacesPagesContents() {
  const postLightController = useContext(ContextForUserPostListFromChapter);
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <div className='relative' style={{ width: '100%', height: '100%' }}>
      <ImageBackground
        src={chapterListController.state.currentObj?.bg}
        // active
      />
      <AbsoluteHolder>
        <GlassAreaContainer
          name={SpacesPagesContents.name}
          sizeFx='w-full h-full'
          className={`flex flex-col overflow-auto`}
        >
          {postLightController.state.objId ? (
            <SpacesPagesMain />
          ) : (
            <SpacesPagesEmpty />
          )}
        </GlassAreaContainer>
      </AbsoluteHolder>
    </div>
  );
}
