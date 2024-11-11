import { ContextForIdeaObj } from '@/architecture/model/idea/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import { ContextForGenerateSceneController } from '../../../controller/main';

export function SpacesChannelSearchArticlesItem() {
  const generateSceneController = useContext(ContextForGenerateSceneController);
  const selected = generateSceneController.state.selectedIdeas;
  const index = useContext(ContextForIndexable);
  const articleResult = useContext(ContextForIdeaObj);

  return (
    <div
      className='flex flex-col items-center space-y-[1rem]'
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
      <GlassWindowFrame
        roundedFx={roundedFx.rounded}
        className={ctwn('aspect-square w-full', {
          'rounded border-[2px] border-blue-500':
            selected.includes(articleResult),
        })}
      >
        <GlassWindowContents>
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
        <GlassWindowPane glassFx={glassFx['glass-20']} />
      </GlassWindowFrame>
      <div
        className={ctwn(
          'flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-slate-400',
          {
            'bg-blue-500': selected.includes(articleResult),
          },
        )}
      >
        <p className='text-lg font-bold text-slate-300'>{index + 1}</p>
      </div>
    </div>
  );
}
