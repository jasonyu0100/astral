import { GlassAreaPane } from '@/(components)/(glass)/area/pane/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForChapterSessionUpdateList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import { ContextForUpdateEdit } from '../../main';

export function SpaceSessionUpdateFormDetails() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sessionUpdateListController = useContext(
    ContextForChapterSessionUpdateList,
  );
  const updateEditController = useContext(ContextForUpdateEdit);

  return (
    <div className='flex flex-col space-y-[0.5rem]'>
      <p className='text-xs font-bold text-slate-300'>Title</p>
      <GlassWindowFrame
        className='h-[2rem] w-full'
        roundedFx={roundedFx['rounded']}
      >
        <GlassWindowContents>
          <input
            className='h-full w-full bg-transparent p-[0.5rem] font-bold text-slate-500 outline-none'
            value={updateEditController.title}
            onChange={(e) => updateEditController.setTitle(e.target.value)}
          />
        </GlassWindowContents>
        <GlassAreaPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
      <p className='text-xs font-bold text-slate-300'>Description</p>
      <GlassWindowFrame className='w-full' roundedFx={roundedFx['rounded']}>
        <GlassWindowContents>
          <textarea
            className='h-full w-full resize-none bg-transparent p-[0.5rem] font-bold text-slate-500 outline-none'
            value={updateEditController.description}
            onChange={(e) =>
              updateEditController.setDescription(e.target.value)
            }
          />
        </GlassWindowContents>
        <GlassAreaPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
