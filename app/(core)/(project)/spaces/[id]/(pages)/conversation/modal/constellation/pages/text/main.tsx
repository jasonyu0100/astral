import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { borderFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import { ContextForGenerateSceneController } from '../../controller/main';

export function SpacesConversationSearchTextContent() {
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
            {generateSceneController.state.textSummary}
          </p>
        </GlassWindowContents>
      </GlassWindowFrame>
      <div className='grid w-full grid-cols-5 gap-[2rem]'>
        {generateSceneController.state.textResults.map((textResult) => (
          <div
            className={ctwn(
              'aspect-square cursor-pointer bg-yellow-500 p-[1rem]',
              {
                'rounded border-[2px] border-blue-500':
                  selected.includes(textResult),
              },
            )}
            onClick={() => {
              if (selected.includes(textResult)) {
                generateSceneController.actions.updateSelectedIdeas(
                  selected.filter((idea) => idea !== textResult),
                );
              } else {
                generateSceneController.actions.updateSelectedIdeas([
                  ...generateSceneController.state.selectedIdeas,
                  textResult,
                ]);
              }
            }}
          >
            <p className='h-full w-full font-bold'>
              {textResult.textElem?.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
