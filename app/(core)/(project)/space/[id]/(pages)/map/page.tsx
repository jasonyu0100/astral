'use client';
import { createContext, useState } from 'react';
import { MapView } from './view/view';
import {
  ChaptersHandlerContext,
  useChaptersHandler,
} from '@/(controller)/chapters/main';
import {
  ScenesHandlerContext,
  useScenesHandler,
} from '@/(controller)/scenes/main';
import isVerseAuth from '@/(utils)/isAuth';
import {
  IdeasHandlerContext,
  useIdeasHandler,
} from '@/(controller)/ideas/main';
import {
  MapModalContext,
  useMapModal,
} from '../../(modals)/map-modal/main';
import {
  StarModalContext,
  useStarModal,
} from '@/(core)/(project)/space/[id]/(modals)/star-modal/main';
import { StarModalView } from '@/(core)/(project)/space/[id]/(modals)/star-modal/view';
import { MapModalView } from '@/(core)/(project)/space/[id]/(modals)/map-modal/view';

interface MapContextObj {
  modalType: MapModalType;
  updateModalType: (multiModalType: MapModalType) => void;
}

export const MapContext = createContext<MapContextObj>(
  {} as MapContextObj,
);

export enum MapModalType {
  DEFAULT = 'DEFAULT',
  IDEA = 'IDEA',
  AUDIO = 'AUDIO',
  VISUAL = 'VISUAL',
  TEXT = 'TEXT',
}

function Page({ params }: { params: { id: string } }) {
  const chaptersHandler = useChaptersHandler(params.id);
  const partsHandler = useScenesHandler(
    chaptersHandler.chapterId,
  );
  const ideasHandler = useIdeasHandler(partsHandler.partId);
  const [modalType, changeModalType] = useState(MapModalType.DEFAULT);

  const context: MapContextObj = {
    modalType: modalType,
    updateModalType: (modalType) => changeModalType(modalType),
  };

  const mapModalContext = useMapModal();
  const starModalContext = useStarModal();

  return (
    <MapContext.Provider value={context}>
      <ChaptersHandlerContext.Provider value={chaptersHandler}>
        <ScenesHandlerContext.Provider value={partsHandler}>
          <IdeasHandlerContext.Provider value={ideasHandler}>
            <MapModalContext.Provider value={mapModalContext}>
              <MapModalView />
              <StarModalContext.Provider value={starModalContext}>
                <StarModalView />
                <MapView />
              </StarModalContext.Provider>
            </MapModalContext.Provider>
          </IdeasHandlerContext.Provider>
        </ScenesHandlerContext.Provider>
      </ChaptersHandlerContext.Provider>
    </MapContext.Provider>
  );
}

export default isVerseAuth(Page);
