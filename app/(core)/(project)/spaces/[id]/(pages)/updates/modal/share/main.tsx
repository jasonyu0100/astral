import { liveMap } from '@/(core)/(live)/live/[id]/map';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralLinkIcon } from '@/icons/link/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';

export function SpacesPostsSharePostModal() {
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <div className='flex flex-col space-y-[1rem]'>
            <p className='text-3xl font-bold text-slate-300'>Share Page</p>
            <GlassWindowFrame
              className='h-[5rem] w-full p-[1rem]'
              roundedFx={roundedFx['rounded-full']}
            >
              <GlassWindowContents
                className='flex cursor-pointer flex-row items-center space-x-[1rem]'
                onClick={() => {
                  navigator.clipboard.writeText(
                    `tryastral.com.au${liveMap.live.link(spaceController.state.objId)}`,
                  );
                  window.location.href = liveMap.live.link(
                    spaceController.state.objId,
                  );
                  openableController.close();
                }}
              >
                <p className='font-slate-300 overflow-hidden whitespace-nowrap text-lg font-bold text-slate-300'>
                  tryastral.com.au
                  {liveMap.live.link(spaceController.state.objId)}
                </p>
                <AstralLinkIcon />
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-10']} />
            </GlassWindowFrame>
          </div>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
