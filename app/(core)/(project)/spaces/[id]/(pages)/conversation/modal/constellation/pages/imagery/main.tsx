import { borderFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import { ContextForGenerateSceneController } from '../../controller/main';

export function SpacesConversationSearchImageryContent() {
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
            {generateSceneController.state.imageryKeywords}
          </p>
          <p className='flex-shrink-0 text-3xl font-black text-slate-300'>
            ({generateSceneController.state.imageryResults.length} results)
          </p>
        </GlassWindowContents>
      </GlassWindowFrame>
      <div style={{ height: '100%' }} className='flex flex-col overflow-auto'>
        <div className='grid w-full grid-cols-3 gap-[1rem] p-[1rem]'>
          {generateSceneController.state.imageryResults.map(
            (imageryResult, index) => (
              <div
                className='flex flex-col items-center space-y-[1rem]'
                onClick={() => {
                  if (selected.includes(imageryResult)) {
                    generateSceneController.actions.updateSelectedIdeas(
                      selected.filter((idea) => idea !== imageryResult),
                    );
                  } else {
                    generateSceneController.actions.updateSelectedIdeas([
                      ...generateSceneController.state.selectedIdeas,
                      imageryResult,
                    ]);
                  }
                }}
              >
                <img src={imageryResult.fileElem?.src}></img>{' '}
                <div
                  className={ctwn(
                    'flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-slate-500',
                    {
                      'bg-blue-500': selected.includes(imageryResult),
                    },
                  )}
                >
                  <p className='text-lg font-bold text-slate-300'>
                    {index + 1}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
