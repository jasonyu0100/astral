import { ContextForUserPostListFromChapter } from '@/(server)/controller/post/list-from-chapter';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ImageBackground } from '@/components/background/img/main';
import { GlassAreaContainer } from '@/components/glass/area/main';
import { AbsoluteHolder } from '@/components/holder/main';
import { useContext } from 'react';
import { SpacesPostComments } from './comments/main';
import { SpacesPostEmpty } from './empty/main';
import { SpacesPostMain } from './main/main';

export function SpacesPostContents() {
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
          name={SpacesPostContents.name}
          sizeFx='w-full h-full'
          className={`flex flex-col overflow-auto`}
        >
          <div className='flex flex-grow flex-col'>
            {postLightController.state.objId ? (
              <>
                <SpacesPostMain />
                <SpacesPostComments />
              </>
            ) : (
              <SpacesPostEmpty />
            )}
          </div>
        </GlassAreaContainer>
      </AbsoluteHolder>
    </div>
  );
}
