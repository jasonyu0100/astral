'use client';
import { createContext, useState } from 'react';
import { MapView } from './view/view';
import { MapModalContext, useMapModal } from '../../(modals)/map-modal/main';
import {
  StarModalContext,
  useStarModal,
} from '@/(core)/(project)/space/[id]/(modals)/star-modal/main';
import { StarModalView } from '@/(core)/(project)/space/[id]/(modals)/star-modal/view';
import { MapModalView } from '@/(core)/(project)/space/[id]/(modals)/map-modal/view';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/(controller)/space/chapter/list';
import {
  ContextForChapterSceneList,
  useControllerForChapterSceneList,
} from '@/(server)/(controller)/space/chapter/scene/list';
import {
  ContextForSceneIdeaList,
  useControllerForSceneIdeaList,
} from '@/(server)/(controller)/space/chapter/scene/idea/list';
import isVerseAuth from '@/(utils)/isAuth';

interface MapContextObj {
  modalType: MapModalType;
  updateModalType: (multiModalType: MapModalType) => void;
}

export const MapContext = createContext<MapContextObj>({} as MapContextObj);

export enum MapModalType {
  DEFAULT = 'DEFAULT',
  IDEA = 'IDEA',
  AUDIO = 'AUDIO',
  VISUAL = 'VISUAL',
  TEXT = 'TEXT',
}

function Page({ params }: { params: { id: string } }) {
  const chapterListController = useControllerForSpaceChapterList(params.id);
  const sceneListController = useControllerForChapterSceneList(
    chapterListController.state.objId,
  );
  const ideaListController = useControllerForSceneIdeaList(
    sceneListController.state.objId,
  );
  const [modalType, changeModalType] = useState(MapModalType.DEFAULT);

  const context: MapContextObj = {
    modalType: modalType,
    updateModalType: (modalType) => changeModalType(modalType),
  };

  const mapModalContext = useMapModal();
  const starModalContext = useStarModal();

  return (
    <MapContext.Provider value={context}>
      <ContextForSpaceChapterList.Provider value={chapterListController}>
        <ContextForChapterSceneList.Provider value={sceneListController}>
          <ContextForSceneIdeaList.Provider value={ideaListController}>
            <MapModalContext.Provider value={mapModalContext}>
              <MapModalView />
            </MapModalContext.Provider>
            <StarModalContext.Provider value={starModalContext}>
              <StarModalView />
            </StarModalContext.Provider>
            <MapView />
          </ContextForSceneIdeaList.Provider>
        </ContextForChapterSceneList.Provider>
      </ContextForSpaceChapterList.Provider>
    </MapContext.Provider>
  );
}

export default isVerseAuth(Page);
