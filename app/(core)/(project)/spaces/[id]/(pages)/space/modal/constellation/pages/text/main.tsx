import { borderFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import { ContextForGenerateSceneController } from '../../controller/main';

export function SpacesSpaceSearchTextContent() {
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
                'border-blue-500': selected,
              },
            )}
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
