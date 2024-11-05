import { ContextForIdeaObj } from '@/architecture/model/idea/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { borderFx } from '@/style/data';
import { useContext } from 'react';
import { ContextForGenerateSceneController } from '../../controller/main';
import { SpacesChannelSearchArticlesItem } from './item/main';

export function SpacesChannelSearchArticlesContent() {
  const generateSceneController = useContext(ContextForGenerateSceneController);

  return (
    <div className='flex max-h-[800px] w-full flex-col space-y-[1rem] overflow-auto'>
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
      <div className='grid w-full grid-cols-4 gap-[1rem]'>
        {generateSceneController.state.articleResults.map(
          (articleResult, index) => (
            <ContextForIndexable.Provider value={index}>
              <ContextForIdeaObj.Provider value={articleResult}>
                <SpacesChannelSearchArticlesItem />
              </ContextForIdeaObj.Provider>
            </ContextForIndexable.Provider>
          ),
        )}
      </div>
    </div>
  );
}
