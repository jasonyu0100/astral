import { borderFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext } from 'react';
import { ContextForGenerateSceneController } from '../../controller/main';

export function SpacesSpaceSearchMediaContent() {
  const generateSceneController = useContext(ContextForGenerateSceneController);

  return (
    <div className='flex flex-col space-y-[1rem]' style={{ height: '100%' }}>
      <GlassWindowFrame
        className='flex-shrink-0 p-[2rem]'
        borderFx={borderFx['border-b']}
      >
        <GlassWindowContents>
          <p className='flex-shrink-0 text-3xl font-bold text-slate-300'>
            {generateSceneController.state.articleSearchQuery}
          </p>
          <p className='flex-shrink-0 text-3xl font-bold text-slate-300'>
            {generateSceneController.state.imageryResults.length} results
          </p>
        </GlassWindowContents>
      </GlassWindowFrame>
      <div className='grid w-full grid-cols-3 gap-[1rem]'>
        {generateSceneController.state.mediaResults?.map((result) => (
          <iframe
            onDrag={(e) => e.stopPropagation()}
            style={{ objectFit: 'contain', width: '100%', height: '100%' }}
            src={result.urlElem?.url}
            title='YouTube video player'
          />
        ))}
      </div>
    </div>
  );
}
