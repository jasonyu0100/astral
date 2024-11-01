import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForUserPostObj } from '@/server/model/post/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import { SpacesPreviewChapterPostDescription } from './description/main';

export function SpacesPreviewChapterPosts() {
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <>
      {postListController.state.objs.map((obj) => (
        <>
          <ContextForUserPostObj.Provider value={obj}>
            <GlassWindowFrame
              className='p-[1rem]'
              borderFx={borderFx['border-around']}
              roundedFx={roundedFx.rounded}
            >
              <GlassWindowContents>
                <SpacesPreviewChapterPostDescription />
                {/* <SpacesPreviewChapterPostContents /> */}
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-10']} />
            </GlassWindowFrame>
          </ContextForUserPostObj.Provider>
        </>
      ))}
    </>
  );
}
