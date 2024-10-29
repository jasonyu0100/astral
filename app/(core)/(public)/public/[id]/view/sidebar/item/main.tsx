import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { useControllerForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/server/model/space/chapter/main';
import { glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import { ContextForPublicSpace, PublicSpacePage } from '../../../page';

export function PublicSpaceSidebarItem() {
  const chapter = useContext(ContextForSpaceChapterObj);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const publicSpaceController = useContext(ContextForPublicSpace);
  const selected =
    chapterListController.state.objId === chapter.id &&
    publicSpaceController.state.page === PublicSpacePage.CHAPTERS;
  const postListController = useControllerForUserPostListFromChapter(
    chapter.id,
  );

  return (
    <>
      {postListController.state.objs.length > 0 ? (
        <GlassWindowFrame
          className='w-full flex-shrink-0'
          roundedFx={roundedFx.rounded}
        >
          <GlassWindowContents
            className='flex cursor-pointer flex-col space-y-[1rem] p-[1rem]'
            onClick={() => {
              publicSpaceController.actions.updatePage(
                PublicSpacePage.CHAPTERS,
              );
              chapterListController.actions.stateActions.select(chapter);
            }}
          >
            <h1 className='text-xl font-bold text-slate-300'>
              {chapter.title}
            </h1>
            <p className='text-sm font-light text-slate-300'>
              {chapter.description}
            </p>
          </GlassWindowContents>
          {selected && <GlassWindowPane glassFx={glassFx['glass-10']} />}
        </GlassWindowFrame>
      ) : (
        <></>
      )}
    </>
  );
}
