import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { roundedFx } from '@/style/data';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';
import { ContextForPublicSpace, PublicSpacePage } from '../../../page';

export function PublicSpaceSpace() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const spaceMainController = useContext(ContextForSpaceMain);
  const publicSpaceController = useContext(ContextForPublicSpace);

  return (
    <GlassWindowFrame
      className='h-full flex-grow'
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents className='flex flex-col space-y-[2rem] overflow-auto'>
        <div className='flex w-full flex-row items-center space-x-[1rem]'>
          <div className='flex w-full flex-col space-y-[1rem]'>
            <img
              className='max-h-[600px] w-full'
              src={chapterListController.state.currentObj?.bg}
            />
            <h1 className='text-2xl font-bold text-slate-300'>
              <span
                onClick={() => {
                  publicSpaceController.actions.updatePage(
                    PublicSpacePage.SPACE,
                  );
                }}
              >
                {spaceMainController.state.obj?.title}
              </span>
            </h1>
            <p className='text-lg font-bold text-slate-300'>
              {spaceMainController.state.obj?.description}
            </p>
          </div>
        </div>
        <div className='space-y-[0.5rem]'>
          <p className=' text-sm font-light text-white'>
            {getFormattedDate(
              new Date(spaceMainController.state.obj?.created ?? ''),
            )}
          </p>
        </div>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
