import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { glassFx } from '@/(style)/data';
import { useContext } from 'react';

export function SpaceProgressSessionUpdates() {
  const sessionUpdateListController = useContext(
    ContextForSessionUpdateOfChapterList,
  );
  const added = sessionUpdateListController.state.objs.filter(
    (obj) => obj.added,
  );
  const notAdded = sessionUpdateListController.state.objs.filter(
    (obj) => !obj.added,
  );

  return (
    <div className='flex flex-col space-y-[1rem]'>
      <p className='text-xs font-bold text-slate-300'>Updates</p>
      <GlassWindowFrame>
        <GlassWindowContents className='flex w-full flex-col divide-y-[1px] divide-slate-500 divide-opacity-30'>
          {added.map((item) => (
            <GlassWindowFrame className='w-full'>
              <GlassWindowContents className='text-md p-[0.5rem] font-bold text-slate-500'>
                {item.variant.toLowerCase()} {item.title}
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            </GlassWindowFrame>
          ))}
          {notAdded.map((item) => (
            <GlassWindowFrame className='w-full'>
              <GlassWindowContents className='text-md p-[0.5rem] font-bold text-slate-500'>
                {item.variant.toLowerCase()} update
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            </GlassWindowFrame>
          ))}
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
