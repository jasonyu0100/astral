import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralAddIcon } from '@/icons/add/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import { ContextForSpacesProgressModals } from '../../../../../../modal/controller/main';

export function SpacesProgressSidebarAddFile() {
  const modalController = useContext(ContextForSpacesProgressModals);

  return (
    <GlassWindowFrame
      className='aspect-video w-full flex-shrink-0'
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
