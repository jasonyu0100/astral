import { borderFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext } from 'react';
import { ContextForGenerateSceneController } from '../../controller/main';

export function SpacesSpaceSearchImageryContent() {
  const generateSceneController = useContext(ContextForGenerateSceneController);
  // TODO

  return (
    <div className='flex flex-col space-y-[1rem]' style={{ height: '100%' }}>
      <GlassWindowFrame
        className='flex-shrink-0 p-[2rem]'
        borderFx={borderFx['border-b']}
      >
        <GlassWindowContents>
          <p className='flex-shrink-0 text-3xl font-bold text-slate-300'>
            {generateSceneController.state.imageryKeywords}
          </p>
          <p className='flex-shrink-0 text-3xl font-bold text-slate-300'>
            {generateSceneController.state.imageryResults.length} results
          </p>
        </GlassWindowContents>
      </GlassWindowFrame>
      <div style={{ height: '100%' }} className='flex flex-col overflow-auto'>
        <div className='grid w-full grid-cols-3 p-[2rem]'>
          {generateSceneController.state.imageryResults.map((result) => (
            <img src={result.fileElem?.src}></img>
          ))}
        </div>
      </div>
    </div>
  );
}
