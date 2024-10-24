import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralAddIcon } from '@/icons/add/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import { ContextForSpacesPostModals } from '../../../../modal/controller/main';

export function SpacesPostSidebarAddPost() {
  const spacesPostModalController = useContext(ContextForSpacesPostModals);

  return (
    <GlassWindowFrame
      className='aspect-video w-full'
      roundedFx={roundedFx.rounded}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents
        className='flex cursor-pointer items-center justify-center'
        onClick={() => {}}
      >
        <div
          className='flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full bg-blue-500'
          onClick={() => {
            spacesPostModalController.addPostController.open();
          }}
        >
          <AstralAddIcon />
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
