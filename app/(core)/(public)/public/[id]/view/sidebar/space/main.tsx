import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralEditIcon } from '@/icons/edit/main';
import { AstralLinkIcon } from '@/icons/link/main';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import { publicSpaceMap } from '../../../map';

export function PublicSpaceSidebarSpace() {
  const spaceMainController = useContext(ContextForSpaceMain);
  return (
    <GlassWindowFrame
      className='h-[250px] w-[400px] flex-shrink-0 p-[1rem]'
      roundedFx={roundedFx.rounded}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents className='flex h-full w-full flex-col justify-between space-y-[1rem]'>
        <div className='flex flex-col space-y-[1rem]'>
          <div className='flex flex-row items-center justify-between space-x-[1rem]'>
            <p className='font-extraBold text-2xl text-slate-300'>
              {spaceMainController.state.obj.title}
            </p>
            <div className='flex h-[3rem] w-[3rem] flex-shrink-0 items-center justify-center rounded-full bg-blue-500'>
              <AstralEditIcon
                onClick={() => {
                  window.open(
                    spacesMap.spaces.id.board.link(
                      spaceMainController.state.objId,
                    ),
                  );
                }}
              />
            </div>
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
                `astral.fun${publicSpaceMap.space.link(spaceMainController.state.objId)}`,
              );
            }}
            className='flex h-full w-full cursor-pointer flex-row items-center justify-between space-x-[1rem]'
          >
            <AstralLinkIcon className='h-[2rem] w-[2rem]' />
            <p className='max-w-[300px] overflow-hidden whitespace-nowrap font-bold text-slate-300'>
              astral.fun
              {publicSpaceMap.space.link(spaceMainController.state.obj.id)}
            </p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
