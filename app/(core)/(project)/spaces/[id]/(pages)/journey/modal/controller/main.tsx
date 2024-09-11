import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesJourneyAddChapterModal } from '../add/chapter/main';
import { SpacesJourneyAddFileLinkModal } from '../add/link/file/main';
import { SpacesJourneyAddTextLinkModal } from '../add/link/text/main';
import { SpacesJourneyAddLogModal } from '../add/log/main';
import { SpacesJourneyAddSceneModal } from '../add/scene/main';
import { SpacesJourneyAddUpdateModal } from '../add/update/main';
import { SpacesJourneySpotlightModal } from '../generate/main';

export const ContextForSpacesJourneyModals = createContext(
  {} as SpacesJourneyModals,
);

export interface SpacesJourneyModals {
  addChapterController: ContextForOpenableInterface;
  addSceneController: ContextForOpenableInterface;
  addUpdateController: ContextForOpenableInterface;
  addSpotlightController: ContextForOpenableInterface;
  addTextLinkController: ContextForOpenableInterface;
  addFileLinkController: ContextForOpenableInterface;
  addLogController: ContextForOpenableInterface;
}

export function SpacesJourneyModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const addChapterController = useControllerForOpenable();
  const addSceneController = useControllerForOpenable();
  const addUpdateController = useControllerForOpenable();
  const addSpotlightController = useControllerForOpenable();
  const addFileLinkController = useControllerForOpenable();
  const addTextLinkController = useControllerForOpenable();
  const addLogController = useControllerForOpenable();

  return (
    <ContextForSpacesJourneyModals.Provider
      value={{
        addChapterController: addChapterController,
        addSceneController: addSceneController,
        addUpdateController: addUpdateController,
        addSpotlightController: addSpotlightController,
        addFileLinkController: addFileLinkController,
        addTextLinkController: addTextLinkController,
        addLogController: addLogController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={addChapterController}>
        <SpacesJourneyAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSceneController}>
        <SpacesJourneyAddSceneModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addUpdateController}>
        <SpacesJourneyAddUpdateModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSpotlightController}>
        <SpacesJourneySpotlightModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addTextLinkController}>
        <SpacesJourneyAddTextLinkModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addFileLinkController}>
        <SpacesJourneyAddFileLinkModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addLogController}>
        <SpacesJourneyAddLogModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesJourneyModals.Provider>
  );
}
