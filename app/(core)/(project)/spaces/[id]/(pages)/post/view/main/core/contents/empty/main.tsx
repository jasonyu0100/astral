import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralAddIcon } from '@/icons/add/main';
import { glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import { ContextForSpacesPostModals } from '../../../../../modal/controller/main';

export function SpacesPostEmpty() {
  const spacesPostModalController = useContext(ContextForSpacesPostModals);

  return (
    <div className='flex h-full w-full items-center justify-center'>
      <GlassWindowFrame
        className='aspect-video w-[600px]'
        roundedFx={roundedFx.rounded}
      >
        <GlassWindowContents
          className='flex w-full cursor-pointer flex-col items-center justify-center space-y-[1rem] p-[1rem]'
          onClick={() => {
            spacesPostModalController.addPostController.open();
          }}
        >
          <div className='flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-blue-500'>
            <AstralAddIcon />
          </div>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-20']} />
      </GlassWindowFrame>
    </div>
  );
}
