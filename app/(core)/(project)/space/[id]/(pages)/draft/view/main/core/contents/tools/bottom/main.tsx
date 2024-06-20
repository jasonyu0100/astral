import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForChapterSceneList } from '@/(server)/(controller)/space/chapter/scene/list';
import { glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpaceDraftAddSceneModal } from '../../../../../../(modal)/add/scene/main';
import { SpaceDraftAddIcon } from './add/main';
import { SpaceDraftDownIcon } from './down/main';
import { SpaceDraftUpIcon } from './up/main';

export function SpaceDraftToolsBottom() {
  const sceneListController = useContext(ContextForChapterSceneList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceDraftAddSceneModal />
      </ContextForOpenable.Provider>
      <div className='px-[1rem] py-[1rem]'>
        <GlassWindowFrame className='w-[3rem]' roundedFx={roundedFx.rounded}>
          <GlassWindowContents className='flex w-full flex-col items-center space-y-[0.5rem] py-[0.5rem]'>
            <SpaceDraftUpIcon
              onClick={() => {
                sceneListController.actions.stateActions.goNext();
              }}
            />
            <SpaceDraftAddIcon
              onClick={() => {
                openableController.open();
              }}
            />
            <SpaceDraftDownIcon
              onClick={() => {
                sceneListController.actions.stateActions.goPrev();
              }}
            />
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
      </div>
    </>
  );
}
