import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesJourneyAddFileLinkModal } from '../add/link/file/main';
import { SpacesJourneyAddTextLinkModal } from '../add/link/text/main';
import { SpacesJourneyAddLogModal } from '../add/log/main';
import { SpacesJourneyAddSceneModal } from '../add/scene/main';
import { SpacesJourneyAddUpdateModal } from '../add/update/main';
import { SpacesJourneyPostModal } from '../generate/main';

export const ContextForSpacesJourneyModals = createContext(
  {} as SpacesJourneyModals,
);

export interface SpacesJourneyModals {
  addSceneController: ContextForOpenableInterface;
  addUpdateController: ContextForOpenableInterface;
  addPostController: ContextForOpenableInterface;
  addTextLinkController: ContextForOpenableInterface;
  addFileLinkController: ContextForOpenableInterface;
  addLogController: ContextForOpenableInterface;
}

export function SpacesJourneyModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const addSceneController = useControllerForOpenable();
  const addUpdateController = useControllerForOpenable();
  const addPostController = useControllerForOpenable();
  const addFileLinkController = useControllerForOpenable();
  const addTextLinkController = useControllerForOpenable();
  const addLogController = useControllerForOpenable();

  return (
    <ContextForSpacesJourneyModals.Provider
      value={{
        addSceneController: addSceneController,
        addUpdateController: addUpdateController,
        addPostController: addPostController,
        addFileLinkController: addFileLinkController,
        addTextLinkController: addTextLinkController,
        addLogController: addLogController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={addSceneController}>
        <SpacesJourneyAddSceneModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addUpdateController}>
        <SpacesJourneyAddUpdateModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addPostController}>
        <SpacesJourneyPostModal />
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
