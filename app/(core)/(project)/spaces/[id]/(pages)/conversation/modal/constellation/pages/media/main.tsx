import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { borderFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import { ContextForGenerateSceneController } from '../../controller/main';

export function SpacesConversationSearchMediaContent() {
  const generateSceneController = useContext(ContextForGenerateSceneController);
  const selected = generateSceneController.state.selectedIdeas;

  return (
    <div className='flex flex-col space-y-[1rem]' style={{ height: '100%' }}>
      <GlassWindowFrame
        className='flex-shrink-0 p-[2rem]'
        borderFx={borderFx['border-b']}
      >
        <GlassWindowContents>
          <p className='flex-shrink-0 text-3xl font-light text-slate-300'>
            {generateSceneController.state.articleSearchQuery}
          </p>
          <p className='flex-shrink-0 text-3xl font-black text-slate-300'>
            ({generateSceneController.state.mediaResults.length} results)
          </p>
        </GlassWindowContents>
      </GlassWindowFrame>
      <div className='grid w-full grid-cols-3 gap-[1rem] p-[1rem]'>
        {generateSceneController.state.mediaResults?.map(
          (mediaResult, index) => (
            <div
              className='flex flex-col items-center space-y-[1rem]'
              onClick={() => {
                if (selected.includes(mediaResult)) {
                  generateSceneController.actions.updateSelectedIdeas(
                    selected.filter((idea) => idea !== mediaResult),
                  );
                } else {
                  generateSceneController.actions.updateSelectedIdeas([
                    ...generateSceneController.state.selectedIdeas,
                    mediaResult,
                  ]);
                }
              }}
            >
              <iframe
                onDrag={(e) => e.stopPropagation()}
                className='aspect-video'
                style={{ objectFit: 'contain', width: '100%' }}
                src={mediaResult.urlElem?.url}
                title='YouTube video player'
              />
              <div
                className={ctwn(
                  'flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-slate-500',
                  {
                    'bg-blue-500': selected.includes(mediaResult),
                  },
                )}
              >
                <p className='text-lg font-bold text-slate-300'>{index + 1}</p>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
