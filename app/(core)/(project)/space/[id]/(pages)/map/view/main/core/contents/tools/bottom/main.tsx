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
import { SpaceMapAddSceneModal } from '../../../../../../(modal)/add/scene/main';
import { SpaceMapAddIcon } from './add/main';
import { SpaceMapDownIcon } from './down/main';
import { SpaceMapUpIcon } from './up/main';

export function SpaceMapToolsBottom() {
  const sceneListController = useContext(ContextForChapterSceneList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceMapAddSceneModal />
      </ContextForOpenable.Provider>
      <GlassWindowFrame className='w-[3rem]' roundedFx={roundedFx.rounded}>
        <GlassWindowContents className='flex w-full flex-col items-center space-y-[0.5rem] py-[0.5rem]'>
          <SpaceMapUpIcon
            onClick={() => {
              sceneListController.actions.stateActions.goNext();
            }}
          />
          <SpaceMapAddIcon
            onClick={() => {
              openableController.open();
            }}
          />
          <SpaceMapDownIcon
            onClick={() => {
              sceneListController.actions.stateActions.goPrev();
            }}
          />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </>
  );
}
