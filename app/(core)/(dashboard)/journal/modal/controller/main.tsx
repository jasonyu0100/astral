import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { DashboardJournalAddCollectionModal } from '../add/collection/main';
import { DashboardJournalAddFileModal } from '../add/idea/file/main';
import { DashboardJournalAddSpotifyUrlModal } from '../add/idea/spotify/main';
import { DashboardJournalAddTextStickyModal } from '../add/idea/text/main';
import { DashboardJournalAddYouTubeUrlModal } from '../add/idea/youtube/main';

export const ContextForDashboardJournalModals = createContext(
  {} as DashboardJournalModalsController,
);

export interface DashboardJournalModalsController {
  addCollectionModal: ContextForOpenableInterface;
  addFileModal: ContextForOpenableInterface;
  addUrlSpotifyModal: ContextForOpenableInterface;
  addUrlYouTubeModal: ContextForOpenableInterface;
  addTextStickyModal: ContextForOpenableInterface;
}

export function DashboardJournalModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const addCollectionModal = useControllerForOpenable();
  const addFileModal = useControllerForOpenable();
  const addUrlSpotifyModal = useControllerForOpenable();
  const addUrlYouTubeModal = useControllerForOpenable();
  const addTextStickyModal = useControllerForOpenable();

  return (
    <ContextForDashboardJournalModals.Provider
      value={{
        addCollectionModal: addCollectionModal,
        addFileModal: addFileModal,
        addUrlSpotifyModal: addUrlSpotifyModal,
        addUrlYouTubeModal: addUrlYouTubeModal,
        addTextStickyModal: addTextStickyModal,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={addCollectionModal}>
        <DashboardJournalAddCollectionModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addFileModal}>
        <DashboardJournalAddFileModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addUrlSpotifyModal}>
        <DashboardJournalAddSpotifyUrlModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addUrlYouTubeModal}>
        <DashboardJournalAddYouTubeUrlModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addTextStickyModal}>
        <DashboardJournalAddTextStickyModal />
      </ContextForOpenable.Provider>
    </ContextForDashboardJournalModals.Provider>
  );
}
