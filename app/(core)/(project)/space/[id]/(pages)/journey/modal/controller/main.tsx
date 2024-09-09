import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpaceJourneyAddChapterModal } from '../add/chapter/main';
import { SpaceJourneyAddFileLinkModal } from '../add/link/file/main';
import { SpaceJourneyAddTextLinkModal } from '../add/link/text/main';
import { SpaceJourneyAddLogModal } from '../add/log/main';
import { SpaceJourneyAddSceneModal } from '../add/scene/main';
import { SpaceJourneyAddUpdateModal } from '../add/update/main';
import { SpaceJourneySpotlightModal } from '../generate/main';

export const ContextForSpaceJourneyModals = createContext(
  {} as SpaceJourneyModals,
);

export interface SpaceJourneyModals {
  addChapterController: ContextForOpenableInterface;
  addSceneController: ContextForOpenableInterface;
  addUpdateController: ContextForOpenableInterface;
  addSpotlightController: ContextForOpenableInterface;
  addTextLinkController: ContextForOpenableInterface;
  addFileLinkController: ContextForOpenableInterface;
  addLogController: ContextForOpenableInterface;
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
  const addFileLinkController = useControllerForOpenable();
  const addTextLinkController = useControllerForOpenable();
  const addLogController = useControllerForOpenable();

  return (
    <ContextForSpaceJourneyModals.Provider
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
      <ContextForOpenable.Provider value={addTextLinkController}>
        <SpaceJourneyAddTextLinkModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addFileLinkController}>
        <SpaceJourneyAddFileLinkModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addLogController}>
        <SpaceJourneyAddLogModal />
      </ContextForOpenable.Provider>
    </ContextForSpaceJourneyModals.Provider>
  );
}
