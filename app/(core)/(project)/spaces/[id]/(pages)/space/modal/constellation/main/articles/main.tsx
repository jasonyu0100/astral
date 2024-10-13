import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import { ContextForGenerateSceneController } from '../../controller/main';

export function SpacesSpaceSearchArticlesContent() {
  const generateSceneController = useContext(ContextForGenerateSceneController);

  return (
    <div className='flex flex-col space-y-[1rem]'>
      <p className='flex-shrink-0 text-lg font-bold text-slate-300'>
        Query: {generateSceneController.state.searchQuery}
      </p>
      {generateSceneController.state.searchResults.map((result) => (
        <GlassWindowFrame className='w-full'>
          <GlassWindowContents>
            <div
              className='flex cursor-pointer flex-row items-center space-x-[2rem]'
              onClick={() => {
                window.open(result.link, '_blank');
              }}
            >
              <img
                src={result?.pagemap?.cse_image?.at(0).src}
                className='aspect-video w-[200px] rounded-[2rem]'
              />
              <div className='flex w-full flex-col space-y-[2rem] font-bold text-slate-300'>
                <div className='text-lg font-bold'>{result.title}</div>
                <div className='text-md font-light'>{result.snippet}</div>
                <div className='text-md font-light'>{result.link}</div>
              </div>
            </div>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      ))}
    </div>
  );
}
