import { ContextForIdeaSceneList } from '@/(server)/controller/scene/list';
import { ContextForIdeaSceneObj } from '@/(server)/model/scene/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { AstralAddIcon } from '@/icons/add/main';
import { borderFx } from '@/style/data';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';
import { ContextForSpacesViewModals } from '../../../../../modal/controller/main';
import { SpacesViewHistoryItem } from './item/main';

export function SpacesViewHistory() {
  const sceneListController = useContext(ContextForIdeaSceneList);
  const modalController = useContext(ContextForSpacesViewModals);

  return (
    <div className='relative flex h-full w-full flex-col space-y-[2rem] p-[2rem]'>
      <GlassWindowFrame
        className='w-full p-[1rem]'
        borderFx={borderFx['border-b']}
      >
        <GlassWindowContents className='flex flex-row items-center font-bold text-slate-300'>
          <div className='text-xl font-bold'>
            {getFormattedDate(new Date())}
          </div>
        </GlassWindowContents>
      </GlassWindowFrame>
      <div className='flex h-full flex-col overflow-auto'>
        <div className='flex flex-col space-y-[1rem]'>
          {sceneListController.state.objs.map((scene) => (
            <ContextForIdeaSceneObj.Provider value={scene}>
              <SpacesViewHistoryItem />
            </ContextForIdeaSceneObj.Provider>
          ))}
          <GlassWindowFrame className='w-full p-[1rem]'>
            <GlassWindowContents
              className='cursor-pointer'
              onClick={() => {
                modalController.addSceneController.open();
              }}
            >
              <div className='flex flex-row items-center space-x-[1rem]'>
                <div className='text-lg font-light text-slate-300'>
                  Add Scene
                </div>
                <AstralAddIcon />
              </div>
            </GlassWindowContents>
          </GlassWindowFrame>
        </div>
      </div>
    </div>
  );
}
