import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesProgressAddChapterModal } from '../add/chapter/main';
import { SpacesProgressAddFileLinkModal } from '../add/link/file/main';
import { SpacesProgressAddTextLinkModal } from '../add/link/text/main';
import { SpacesProgressAddTaskModal } from '../add/task/main';
import { SpacesProgressEditChapterModal } from '../edit/chapter/main';
import { SpacesProgressEditSpaceModal } from '../edit/space/main';
import { SpacesProgressGenerateTasksModal } from '../generate/main';

export const ContextForSpacesProgressModals = createContext(
  {} as SpacesProgressModals,
);

export interface SpacesProgressModals {
  addUpdateController: ContextForOpenableInterface;
  addTextLinkController: ContextForOpenableInterface;
  addFileLinkController: ContextForOpenableInterface;
  addTaskController: ContextForOpenableInterface;
  addChapterController: ContextForOpenableInterface;
  addGenerateController: ContextForOpenableInterface;
  editChapterController: ContextForOpenableInterface;
  editSpaceController: ContextForOpenableInterface;
}

export function SpacesProgressModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const addUpdateController = useControllerForOpenable();
  const addFileLinkController = useControllerForOpenable();
  const addTextLinkController = useControllerForOpenable();
  const addTaskController = useControllerForOpenable();
  const addChapterController = useControllerForOpenable();
  const addGenerateController = useControllerForOpenable();
  const editChapterController = useControllerForOpenable();
  const editSpaceController = useControllerForOpenable();

  return (
    <ContextForSpacesProgressModals.Provider
      value={{
        addUpdateController: addUpdateController,
        addFileLinkController: addFileLinkController,
        addTextLinkController: addTextLinkController,
        addTaskController: addTaskController,
        addChapterController: addChapterController,
        addGenerateController: addGenerateController,
        editChapterController: editChapterController,
        editSpaceController: editSpaceController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={addTextLinkController}>
        <SpacesProgressAddTextLinkModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addFileLinkController}>
        <SpacesProgressAddFileLinkModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addTaskController}>
        <SpacesProgressAddTaskModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addChapterController}>
        <SpacesProgressAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addGenerateController}>
        <SpacesProgressGenerateTasksModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editChapterController}>
        <SpacesProgressEditChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSpaceController}>
        <SpacesProgressEditSpaceModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesProgressModals.Provider>
  );
}
