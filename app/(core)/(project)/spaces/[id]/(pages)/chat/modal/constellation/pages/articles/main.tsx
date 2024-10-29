import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForIdeaObj } from '@/server/model/idea/main';
import { borderFx } from '@/style/data';
import { useContext } from 'react';
import { ContextForGenerateSceneController } from '../../controller/main';
import { SpacesChatSearchArticlesItem } from './item/main';

export function SpacesChatSearchArticlesContent() {
  const generateSceneController = useContext(ContextForGenerateSceneController);

  return (
    <div className='flex flex-col space-y-[1rem]' style={{ height: '100%' }}>
      <GlassWindowFrame
        className='flex-shrink-0 py-[1rem]'
        borderFx={borderFx['border-b']}
      >
        <GlassWindowContents>
          <p className='flex-shrink-0 text-xl font-light text-slate-300'>
            {generateSceneController.state.articleSearchQuery}
          </p>
        </GlassWindowContents>
      </GlassWindowFrame>
      <div style={{ height: '100%' }} className='flex flex-col overflow-auto'>
        <div className='grid w-full grid-cols-4 gap-[2rem]'>
          {generateSceneController.state.articleResults.map(
            (articleResult, index) => (
              <ContextForIndexable.Provider value={index}>
                <ContextForIdeaObj.Provider value={articleResult}>
                  <SpacesChatSearchArticlesItem />
                </ContextForIdeaObj.Provider>
              </ContextForIndexable.Provider>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
