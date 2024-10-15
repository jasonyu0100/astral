import { ContextForUserPostListFromChapter } from '@/(server)/controller/post/list-from-chapter';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ImageBackground } from '@/ui/background/img/main';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { AbsoluteHolder } from '@/ui/holder/main';
import { useContext } from 'react';
import { SpacesFlightComments } from './comments/main';
import { SpacesFlightEmpty } from './empty/main';
import { SpacesFlightMain } from './main/main';

export function SpacesFlightContents() {
  const postLightController = useContext(ContextForUserPostListFromChapter);
  const chapterListController = useContext(ContextForSpaceChapterList);
  return (
    <div className='relative' style={{ width: '100%', height: '100%' }}>
      <ImageBackground
        src={chapterListController.state.currentObj?.bg}
        active
      />
      <AbsoluteHolder>
        <GlassAreaContainer
          name={SpacesFlightContents.name}
          sizeFx='w-full h-full'
          className={`flex flex-col overflow-auto`}
        >
          <div className='flex flex-grow flex-col'>
            {postLightController.state.objId ? (
              <>
                <SpacesFlightMain />
                <SpacesFlightComments />
              </>
            ) : (
              <SpacesFlightEmpty />
            )}
          </div>
        </GlassAreaContainer>
      </AbsoluteHolder>
    </div>
  );
}
