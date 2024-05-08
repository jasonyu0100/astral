'use client';
import { createContext, useState } from 'react';
import { MapView } from './(map-epic)/view';
import {
  ChaptersHandlerContext,
  useChaptersHandler,
} from '@/(types)/handler/chapters/main';
import {
  PartsHandlerContext,
  usePartsHandler,
} from '@/(types)/handler/parts/main';
import insideVerse from '@/(utils)/isAuth';
import {
  IdeasHandlerContext,
  useIdeasHandler,
} from '@/(types)/handler/ideas/main';
import {
  MapModalContext,
  useMapModal,
} from '../../../../(modals)/map-modal/main';
import {
  StarModalContext,
  useStarModal,
} from '@/(core)/(studio)/(modals)/star-modal/main';
import { StarModalView } from '@/(core)/(studio)/(modals)/star-modal/view';
import { MapModalView } from '@/(core)/(studio)/(modals)/map-modal/view';

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
  const partsHandler = usePartsHandler(
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
        <PartsHandlerContext.Provider value={partsHandler}>
          <IdeasHandlerContext.Provider value={ideasHandler}>
            <MapModalContext.Provider value={mapModalContext}>
              <MapModalView />
              <StarModalContext.Provider value={starModalContext}>
                <StarModalView />
                <MapView />
              </StarModalContext.Provider>
            </MapModalContext.Provider>
          </IdeasHandlerContext.Provider>
        </PartsHandlerContext.Provider>
      </ChaptersHandlerContext.Provider>
    </MapContext.Provider>
  );
}

export default insideVerse(Page);
