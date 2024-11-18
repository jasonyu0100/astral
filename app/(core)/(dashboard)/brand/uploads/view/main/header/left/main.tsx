import { ContextForDashboardUploadsModals } from '@/(core)/(dashboard)/brand/uploads/modal/controller/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralUploadIcon } from '@/icons/upload/main';
import { glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';

export function BrandUploadsDailyHeaderLeft() {
  const modalController = useContext(ContextForDashboardUploadsModals);

  return (
    <div className='flex h-full w-full items-center space-x-[1rem]'>
      <GlassWindowFrame
        className='aspect-square h-[2.5rem] w-[2.5rem]'
        roundedFx={roundedFx['rounded-full']}
      >
        <GlassWindowContents
          className='flex cursor-pointer items-center justify-center'
          onClick={() => {
            modalController.addTextStickyModal.open();
          }}
        >
          <AstralAddIcon />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
      <AstralUploadIcon
        onClick={() => {
          modalController.addFileModal.open();
        }}
      />
    </div>
  );
}
