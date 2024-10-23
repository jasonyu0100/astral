import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import { ContextForGenerateSceneController } from '../../controller/main';

export function SpacesConversationGenerateRowAdd() {
  const generateSceneController = useContext(ContextForGenerateSceneController);

  return (
    <GlassWindowFrame
      roundedFx={roundedFx['rounded-full']}
      className='h-[5rem] w-[5rem] flex-shrink-0'
    >
      <GlassWindowContents
        className='flex flex-col items-center justify-center space-y-[2rem] bg-blue-500'
        onClick={() => {
          generateSceneController.actions.createMap();
        }}
      >
        <AstralArrowForwardIcon />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
