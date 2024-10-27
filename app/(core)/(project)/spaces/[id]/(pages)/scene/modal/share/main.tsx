import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { CustomisableModalContents } from '@/components/modal/general/container/main';
import { CustomisableModal } from '@/components/modal/general/main';
import { AstralLinkIcon } from '@/icons/link/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';

export function SpacesSceneShareViewModal() {
  const openableController = useContext(ContextForOpenable);

  return (
    <ContextForOpenable.Provider value={openableController}>
      <CustomisableModal>
        <CustomisableModalContents>
          <div className='flex flex-col space-y-[1rem]'>
            <p className='text-3xl font-bold text-slate-300'>Share View</p>
            <GlassWindowFrame
              className='h-[5rem] w-full p-[1rem]'
              roundedFx={roundedFx['rounded-full']}
            >
              <GlassWindowContents
                className='flex cursor-pointer flex-row items-center space-x-[1rem]'
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  openableController.close();
                }}
              >
                <p className='font-slate-300 w-[300px] overflow-hidden whitespace-nowrap text-lg font-bold text-slate-300'>
                  {window.location.href}
                </p>
                <AstralLinkIcon />
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-10']} />
            </GlassWindowFrame>
          </div>
        </CustomisableModalContents>
      </CustomisableModal>
    </ContextForOpenable.Provider>
  );
}
