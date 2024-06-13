import { useContext } from 'react';
import ScenesAdd from '@/(core)/(project)/space/[id]/(pages)/board/view/main/scenes/(common)/row/add/main';
import { ElementContainer } from '@/(core)/(project)/space/[id]/(pages)/board/view/main/scenes/(common)/row/element/main';
import { ScenesRowContainer } from '../(common)/row/main';
import { ContextForChapterSceneList } from '@/(server)/(controller)/space/chapter/scene/list';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForChapterSceneObj } from '@/(server)/(model)/space/chapter/scene/main';
import { BoardAddSceneModal } from '../../../../(modal)/add/scene/main';

export function BoardScenesRow() {
  const sceneListController = useContext(ContextForChapterSceneList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <BoardAddSceneModal />
      </ContextForOpenable.Provider>
      <ScenesRowContainer>
        {sceneListController.state.objs.map((scene, index) => (
          <p className='mr-[3rem] font-bold text-slate-500' key={index}>
            {scene.title}
          </p>
        ))}
        {sceneListController.state.objs.map((scene, index) => (
        <ContextForChapterSceneObj.Provider value={scene} key={scene.id}>
          <ElementContainer index={index} key={scene.id} />
        </ContextForChapterSceneObj.Provider>
      ))}
        <ScenesAdd onClick={() => openableController.open()} />
      </ScenesRowContainer>
    </>
  );
}
