import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import { ContextForGenerateSceneController } from '../../controller/main';

export function SpacesSpaceSearchArticlesContent() {
  const generateSceneController = useContext(ContextForGenerateSceneController);

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
        </GlassWindowContents>
      </GlassWindowFrame>
      <div style={{ height: '100%' }} className='flex flex-col overflow-auto'>
        <div className='flex flex-shrink-0 flex-col space-y-[1rem] p-[2rem]'>
          {generateSceneController.state.articleResults.map((result) => (
            <GlassWindowFrame className='w-full' roundedFx={roundedFx.rounded}>
              <GlassWindowContents>
                <div
                  className='flex cursor-pointer flex-row items-center space-x-[2rem]'
                  onClick={() => {
                    window.open(result.urlElem?.url, '_blank');
                  }}
                >
                  <div className='flex w-full flex-col p-[2rem]'>
                    <div className='text-lg font-bold text-slate-400'>
                      {result.urlElem?.title}
                    </div>
                    <div className='text-xs font-light text-slate-300'>
                      {result.urlElem?.url}
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
