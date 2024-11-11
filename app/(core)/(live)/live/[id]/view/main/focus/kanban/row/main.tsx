import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import Link from 'next/link';
import { useContext } from 'react';
import { PublicSpaceKanbanTask } from '../task/main';

export function PublicSpaceKanbanRow({ title, tasks, status }) {
  const spaceMainController = useContext(ContextForSpaceMain);
  return (
    <div className='flex flex-col overflow-auto border-b-[1px] border-slate-300 border-opacity-30'>
      <div className='flex flex-row items-center space-x-[1rem] pb-[1rem]'>
        <Link
          href={`${spacesMap.spaces.id.focus.link(spaceMainController.state.objId)}`}
        >
          <GlassWindowFrame
            roundedFx={roundedFx['rounded-full']}
            borderFx={borderFx['border-around']}
          >
            <GlassWindowContents className='flex flex-row items-center space-x-[1rem] px-[1rem] py-[0.5rem]'>
              <h2 className='text-lg font-semibold text-slate-300'>{title}</h2>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          </GlassWindowFrame>
        </Link>
      </div>
      <div
        className={`pb-[1rem flex h-full cursor-pointer flex-row space-x-[1rem] overflow-auto rounded`}
      >
        {tasks.map((task) => (
          <PublicSpaceKanbanTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
