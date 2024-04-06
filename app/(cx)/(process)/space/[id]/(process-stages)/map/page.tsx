'use client';
import { createContext, useState } from 'react';
import { MapView } from './(map-epic)/view';
import {
  ChaptersHandlerContext,
  useChaptersHandler,
} from '@/(logic)/internal/handler/chapters/main';
import {
  ConstellationsHandlerContext,
  useConstellationsHandler,
} from '@/(logic)/internal/handler/constellations/main';
import insideVerses from '@/(logic)/utils/isAuth';
import {
  StarsHandlerContext,
  useStarsHandler,
} from '@/(logic)/internal/handler/stars/main';
import {
  MapModalContext,
  useMapModal,
} from '../../../../../../(modals)/(process)/map-modal/main';
import {
  StarModalContext,
  useStarModal,
} from '@/(modals)/(process)/star-modal/main';
import { StarModalView } from '@/(modals)/(process)/star-modal/view';
import { MapModalView } from '@/(modals)/(process)/map-modal/view';

interface MapContextObj {
  modalType: MapModalType;
  updateModalType: (multiModalType: MapModalType) => void;
}

export const MapContext = createContext<MapContextObj>(
  {} as MapContextObj,
);

export enum MapModalType {
  DEFAULT = 'DEFAULT',
  STAR = 'STAR',
  AUDIO = 'AUDIO',
  VISUAL = 'VISUAL',
  TEXT = 'TEXT',
}

function Page({ params }: { params: { id: string } }) {
  const chaptersHandler = useChaptersHandler(params.id);
  const constellationsHandler = useConstellationsHandler(
    chaptersHandler.chapterId,
  );
  const starsHandler = useStarsHandler(constellationsHandler.constellationId);
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
        <ConstellationsHandlerContext.Provider value={constellationsHandler}>
          <StarsHandlerContext.Provider value={starsHandler}>
            <MapModalContext.Provider value={mapModalContext}>
              <MapModalView />
              <StarModalContext.Provider value={starModalContext}>
                <StarModalView />
                <MapView />
              </StarModalContext.Provider>
            </MapModalContext.Provider>
          </StarsHandlerContext.Provider>
        </ConstellationsHandlerContext.Provider>
      </ChaptersHandlerContext.Provider>
    </MapContext.Provider>
  );
}

export default insideVerses(Page);
