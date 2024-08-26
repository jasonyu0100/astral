import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpaceProgressAddChapterModal } from '../add/chapter/main';
import { SpaceProgressAddSceneModal } from '../add/scene/main';
import { SpaceProgressAddUpdateModal } from '../add/update/main';
import { SpaceProgressSpotlightModal } from '../synthesise/main';

export const ContextForSpaceProgressModals = createContext(
  {} as SpaceProgressModals,
);

export interface SpaceProgressModals {
  addChapterController: ContextForOpenableInterface;
  addSceneController: ContextForOpenableInterface;
  addUpdateController: ContextForOpenableInterface;
  addSpotlightController: ContextForOpenableInterface;
}

export function SpaceProgressModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const addChapterController = useControllerForOpenable();
  const addSceneController = useControllerForOpenable();
  const addUpdateController = useControllerForOpenable();
  const addSpotlightController = useControllerForOpenable();

  return (
    <ContextForSpaceProgressModals.Provider
      value={{
        addChapterController: addChapterController,
        addSceneController: addSceneController,
        addUpdateController: addUpdateController,
        addSpotlightController: addSpotlightController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={addChapterController}>
        <SpaceProgressAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSceneController}>
        <SpaceProgressAddSceneModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addUpdateController}>
        <SpaceProgressAddUpdateModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSpotlightController}>
        <SpaceProgressSpotlightModal />
      </ContextForOpenable.Provider>
    </ContextForSpaceProgressModals.Provider>
  );
}
