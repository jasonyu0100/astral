import { profileMap } from '@/(core)/(dashboard)/profile/[id]/map';
import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { ContextForTaskListFromSpace } from '@/architecture/controller/task/list-from-space';
import { exampleFileElement } from '@/architecture/model/elements/file/main';
import { TaskStatus } from '@/architecture/model/task/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { AstralBackIndicatorIcon } from '@/icons/back/main';
import { AstralEditIcon } from '@/icons/edit/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';

export function PublicSpaceSidebarSpace() {
  const spaceMainController = useContext(ContextForSpaceMain);
  const taskListController = useContext(ContextForTaskListFromSpace);
  const tasks = taskListController.state.objs;
  const pending = tasks.filter(
    (task) => task.taskStatus === TaskStatus.PENDING,
  );
  const current = tasks.filter(
    (task) => task.taskStatus === TaskStatus.CURRENT,
  );
  const done = tasks.filter((task) => task.taskStatus === TaskStatus.DONE);

  return (
    <div className='flex flex-col space-y-[1rem]'>
      <div className='flex w-full flex-row items-center justify-between space-x-[1rem]'>
        <div className='flex w-full flex-row items-center justify-between'>
          <div className='flex h-[3rem] w-[3rem] flex-shrink-0 flex-row items-center justify-center rounded-full bg-slate-500 bg-opacity-30'>
            <AstralBackIndicatorIcon
              onClick={() => {
                window.location.href = profileMap.account.link(
                  spaceMainController.state.obj.userId,
                );
              }}
            />
          </div>
          <p className='text-3xl font-bold text-slate-300'>Space</p>
        </div>
      </div>
      <HorizontalDivider />
      <GlassWindowFrame
        className='w-full flex-shrink-0 p-[1rem]'
        borderFx={borderFx['border-b']}
        roundedFx={roundedFx.rounded}
      >
        <GlassWindowContents className='flex h-full w-full flex-col justify-between space-y-[1rem]'>
          <div className='flex flex-col space-y-[1rem]'>
            <div className='flex w-full flex-row items-center justify-between space-x-[1rem]'>
              <div className='flex flex-row items-center space-x-[1rem]'>
                <img
                  onClick={() => {
                    window.location.href = spacesMap.spaces.id.live.link(
                      spaceMainController.state.objId,
                    );
                  }}
                  className='aspect-square h-[3rem] w-[3rem] animate-pulse-slow cursor-pointer rounded-full shadow-glow'
                  src={
                    spaceMainController.state.obj?.thumbnail?.src ||
                    exampleFileElement.src
                  }
                />
                <p className='font-extraBold text-2xl text-slate-300'>
                  {spaceMainController.state.obj.title}
                </p>
              </div>
              <div className='flex h-[3rem] w-[3rem] flex-shrink-0 flex-row items-center justify-center rounded-full bg-slate-500'>
                <AstralEditIcon
                  onClick={() => {
                    window.location.href = spacesMap.spaces.id.space.link(
                      spaceMainController.state.objId,
                    );
                  }}
                />
              </div>
            </div>
            <p className='text-md font-light text-slate-300'>
              {spaceMainController.state.obj.description}
            </p>
            <p className='text-md font-light text-slate-300'>
              {spaceMainController.state.obj.objective}
            </p>
          </div>
          <HorizontalDivider />
          <GlassWindowFrame
            className='w-full flex-shrink-0'
            roundedFx={roundedFx['rounded-full']}
            borderFx={borderFx['border-around']}
          >
            <GlassWindowContents
              onClick={() => {
                window.location.href = spacesMap.spaces.id.work.link(
                  spaceMainController.state.objId,
                );
              }}
              className='flex h-full w-full cursor-pointer flex-row items-center justify-between space-x-[1rem] p-[0.5rem]'
            >
              <div className='relative h-[1rem] w-full overflow-hidden rounded-full'>
                <div
                  className='absolute top-0 h-full bg-yellow-500 '
                  style={{
                    left: `0px`,
                    width: `${(current.length / (current.length + done.length + pending.length)) * 100}%`,
                  }}
                ></div>
                <div
                  className='absolute top-0 h-full bg-green-500'
                  style={{
                    left: `${(current.length / (current.length + done.length + pending.length)) * 100}%`,
                    width: `${(done.length / (pending.length + current.length + done.length)) * 100}%`,
                  }}
                ></div>
              </div>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          </GlassWindowFrame>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
    </div>
  );
}
