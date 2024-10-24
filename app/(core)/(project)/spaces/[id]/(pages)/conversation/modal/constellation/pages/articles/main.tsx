import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import { ContextForGenerateSceneController } from '../../controller/main';

export function SpacesConversationSearchArticlesContent() {
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
            ({generateSceneController.state.articleResults.length} results)
          </p>
        </GlassWindowContents>
      </GlassWindowFrame>
      <div style={{ height: '100%' }} className='flex flex-col overflow-auto'>
        <div className='flex flex-shrink-0 flex-col space-y-[1rem] p-[2rem]'>
          {generateSceneController.state.articleResults.map((articleResult) => (
            <GlassWindowFrame
              roundedFx={roundedFx.rounded}
              className={ctwn('w-full', {
                'rounded border-[2px] border-blue-500':
                  selected.includes(articleResult),
              })}
            >
              <GlassWindowContents
                onClick={() => {
                  if (selected.includes(articleResult)) {
                    generateSceneController.actions.updateSelectedIdeas(
                      selected.filter((idea) => idea !== articleResult),
                    );
                  } else {
                    generateSceneController.actions.updateSelectedIdeas([
                      ...generateSceneController.state.selectedIdeas,
                      articleResult,
                    ]);
                  }
                }}
              >
                <div className='flex cursor-pointer flex-row items-center space-x-[2rem]'>
                  <div className='flex w-full flex-col p-[2rem]'>
                    <div className='text-lg font-bold text-slate-400'>
                      {articleResult.urlElem?.title}
                    </div>
                    <div
                      className='cursor-pointer text-xs font-light text-slate-300'
                      onClick={() => {
                        window.open(articleResult.urlElem?.url, '_blank');
                      }}
                    >
                      {articleResult.urlElem?.url}
                    </div>
                  </div>
                </div>
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-10']} />
            </GlassWindowFrame>
          ))}
        </div>
      </div>
    </div>
  );
}
