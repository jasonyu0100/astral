import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralAddIcon } from '@/icons/add/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import { ContextForSpacesConversationModals } from '../../../../../modal/controller/main';

export function SpacesConversationSidebarChaptersAdd() {
  const modalController = useContext(ContextForSpacesConversationModals);

  return (
    <div className='flex w-full flex-row items-center justify-center'>
      <GlassWindowFrame
        className='aspect-video w-full'
        roundedFx={roundedFx.rounded}
        borderFx={borderFx['border-around']}
      >
        <GlassWindowContents
          onClick={() => {
            modalController.addChapterController.open();
          }}
          className='flex h-full w-full cursor-pointer items-center justify-center'
        >
          <button className='flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-blue-500'>
            <AstralAddIcon />
          </button>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
