import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { exampleFileElement } from '@/architecture/model/elements/file/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { AstralBackIndicatorIcon } from '@/icons/back/main';
import { AstralEditIcon } from '@/icons/edit/main';
import { AstralLinkIcon } from '@/icons/link/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import { liveMap } from '../../../map';

export function PublicSpaceSidebarSpace() {
  const spaceMainController = useContext(ContextForSpaceMain);
  return (
    <div className='flex flex-col space-y-[1rem]'>
      <div className='flex w-full flex-row items-center justify-between space-x-[1rem]'>
        <div className='flex w-full flex-row items-center justify-between'>
          <p className='text-3xl font-bold text-slate-300'>Space</p>
          <AstralBackIndicatorIcon
            onClick={() => {
              window.location.href = studioMap.studio.personal.link;
            }}
          />
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
                    window.location.href = spacesMap.spaces.id.launch.link(
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
              <AstralEditIcon
                onClick={() => {
                  window.location.href = spacesMap.spaces.id.scene.link(
                    spaceMainController.state.objId,
                  );
                }}
              />
            </div>
            <p className='text-md font-light text-slate-300'>
              {spaceMainController.state.obj.description}
            </p>
            <p className='text-md font-light text-slate-300'>
              {spaceMainController.state.obj.objective}
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
    </div>
  );
}
