import { ContextForUserPostListFromChapter } from '@/(server)/controller/post/list-from-chapter';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ImageBackground } from '@/components/background/img/main';
import { GlassAreaContainer } from '@/components/glass/area/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AbsoluteHolder } from '@/components/holder/main';
import { AstralAddIcon } from '@/icons/add/main';
import { glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import { ContextForSpacesPostModals } from '../../../../modal/controller/main';
import { SpacesPostComments } from './comments/main';
import { SpacesPostMain } from './main/main';

export function SpacesPostContents() {
  const postLightController = useContext(ContextForUserPostListFromChapter);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const spacesPostModalController = useContext(ContextForSpacesPostModals);

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
              <div className='flex h-full w-full items-center justify-center'>
                <GlassWindowFrame
                  className='aspect-video w-[600px]'
                  roundedFx={roundedFx.rounded}
                >
                  <GlassWindowContents
                    className='flex w-full cursor-pointer flex-col items-center justify-center space-y-[1rem] p-[1rem]'
                    onClick={() => {
                      spacesPostModalController.addPostController.open();
                    }}
                  >
                    <div className='flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-blue-500'>
                      <AstralAddIcon />
                    </div>
                  </GlassWindowContents>
                  <GlassWindowPane glassFx={glassFx['glass-20']} />
                </GlassWindowFrame>
              </div>
            )}
          </div>
        </GlassAreaContainer>
      </AbsoluteHolder>
    </div>
  );
}
