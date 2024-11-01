import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralLinkIcon } from '@/icons/link/main';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { exampleFileElement } from '@/server/model/elements/file/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import { liveMap } from '../../../map';

export function PublicSpaceSidebarSpace() {
  const spaceMainController = useContext(ContextForSpaceMain);
  return (
    <GlassWindowFrame
      className='w-[400px] flex-shrink-0 p-[2rem]'
      roundedFx={roundedFx.rounded}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents className='flex h-full w-full flex-col justify-between space-y-[1rem]'>
        <div className='flex flex-col space-y-[1rem]'>
          <div className='flex flex-row items-center justify-between space-x-[1rem]'>
            <img
              onClick={() => {
                window.open(
                  spacesMap.spaces.id.progress.link(
                    spaceMainController.state.objId,
                  ),
                );
              }}
              className='aspect-square h-[5rem] w-[5rem] animate-pulse-slow cursor-pointer rounded-full shadow-glow'
              src={
                spaceMainController.state.obj?.thumbnail?.src ||
                exampleFileElement.src
              }
            />
            <p className='font-extraBold text-2xl text-slate-300'>
              {spaceMainController.state.obj.title}
            </p>
          </div>
          <p className='text-sm font-light text-slate-300'>
            {spaceMainController.state.obj.description}
          </p>
        </div>
        <GlassWindowFrame
          className='h-[50px] w-full flex-shrink-0 p-[1rem]'
          roundedFx={roundedFx['rounded-full']}
          borderFx={borderFx['border-around']}
        >
          <GlassWindowContents
            onClick={() => {
              navigator.clipboard.writeText(
                `astral.fun${liveMap.live.link(spaceMainController.state.objId)}`,
              );
              alert('Link copied to clipboard!');
            }}
            className='flex h-full w-full cursor-pointer flex-row items-center justify-between space-x-[1rem]'
          >
            <AstralLinkIcon className='h-[2rem] w-[2rem]' />
            <p className='max-w-[300px] overflow-hidden whitespace-nowrap font-bold text-slate-300'>
              {liveMap.live.link(spaceMainController.state.obj.id)}
            </p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
