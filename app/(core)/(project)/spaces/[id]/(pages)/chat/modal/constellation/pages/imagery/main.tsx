import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForIdeaObj } from '@/server/model/idea/main';
import { borderFx } from '@/style/data';
import { useContext } from 'react';
import { ContextForGenerateSceneController } from '../../controller/main';
import { SpacesChatSearchImageryItem } from './item/main';

export function SpacesChatSearchImageryContent() {
  const generateSceneController = useContext(ContextForGenerateSceneController);
  const selected = generateSceneController.state.selectedIdeas;

  return (
    <div className='flex h-full w-full flex-col space-y-[1rem]'>
      <GlassWindowFrame
        className='flex-shrink-0 py-[1rem]'
        borderFx={borderFx['border-b']}
      >
        <GlassWindowContents>
          <p className='flex-shrink-0 text-xl font-light text-slate-300'>
            {generateSceneController.state.imageryKeywords}
          </p>
        </GlassWindowContents>
      </GlassWindowFrame>
      <div style={{ height: '100%' }} className='flex flex-col overflow-auto'>
        <div className='grid w-full grid-cols-4 gap-[1rem] p-[1rem]'>
          {generateSceneController.state.imageryResults.map(
            (imageryResult, index) => (
              <ContextForIndexable.Provider value={index}>
                <ContextForIdeaObj.Provider value={imageryResult}>
                  <SpacesChatSearchImageryItem />
                </ContextForIdeaObj.Provider>
              </ContextForIndexable.Provider>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
