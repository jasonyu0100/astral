import { AstralAddIcon } from '@/icons/add/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import { ContextForSpacesJourneyModals } from '../../../../../modal/controller/main';

export function SpacesJourneySidebarAddFile() {
  const modalController = useContext(ContextForSpacesJourneyModals);

  return (
    <GlassWindowFrame
      className='aspect-video w-full'
      roundedFx={roundedFx.rounded}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents className='flex h-full w-full items-center justify-center'>
        <div
          className='flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full bg-blue-500'
          onClick={() => {
            modalController.addFileLinkController.open();
          }}
        >
          <AstralAddIcon />
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
