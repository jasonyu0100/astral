import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpaceJourneyAddChapterModal } from '../add/chapter/main';
import { SpaceJourneyAddSceneModal } from '../add/scene/main';
import { SpaceJourneyAddUpdateModal } from '../add/update/main';
import { SpaceJourneyAddFileIdeaModal } from '../idea/file/main';
import { SpaceJourneyAddUrlIdeaModal } from '../idea/link/main';
import { SpaceJourneyAddTextIdeaModal } from '../idea/text/main';
import { SpaceJourneySpotlightModal } from '../synthesise/main';

export const ContextForSpaceJourneyModals = createContext(
  {} as SpaceJourneyModals,
);

export interface SpaceJourneyModals {
  addChapterController: ContextForOpenableInterface;
  addSceneController: ContextForOpenableInterface;
  addUpdateController: ContextForOpenableInterface;
  addSpotlightController: ContextForOpenableInterface;
  addFileIdeaController: ContextForOpenableInterface;
  addUrlIdeaController: ContextForOpenableInterface;
  addTextIdeaController: ContextForOpenableInterface;
}

export function SpaceJourneyModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const addChapterController = useControllerForOpenable();
  const addSceneController = useControllerForOpenable();
  const addUpdateController = useControllerForOpenable();
  const addSpotlightController = useControllerForOpenable();
  const addFileIdeaController = useControllerForOpenable();
  const addUrlIdeaController = useControllerForOpenable();
  const addTextIdeaController = useControllerForOpenable();

  return (
    <ContextForSpaceJourneyModals.Provider
      value={{
        addChapterController: addChapterController,
        addSceneController: addSceneController,
        addUpdateController: addUpdateController,
        addSpotlightController: addSpotlightController,
        addFileIdeaController: addFileIdeaController,
        addUrlIdeaController: addUrlIdeaController,
        addTextIdeaController: addTextIdeaController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={addChapterController}>
        <SpaceJourneyAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSceneController}>
        <SpaceJourneyAddSceneModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addUpdateController}>
        <SpaceJourneyAddUpdateModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSpotlightController}>
        <SpaceJourneySpotlightModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addFileIdeaController}>
        <SpaceJourneyAddFileIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addUrlIdeaController}>
        <SpaceJourneyAddUrlIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addTextIdeaController}>
        <SpaceJourneyAddTextIdeaModal />
      </ContextForOpenable.Provider>
    </ContextForSpaceJourneyModals.Provider>
  );
}
