import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { DashboardJournalAddFileModal } from '../add/idea/file/main';
import { DashboardJournalAddSpotifyUrlModal } from '../add/idea/spotify/main';
import { DashboardJournalAddTextStickyModal } from '../add/idea/text/main';
import { DashboardJournalAddWebsiteUrlModal } from '../add/idea/website/main';
import { DashboardJournalAddYouTubeUrlModal } from '../add/idea/youtube/main';

export const ContextForDashboardUploadsModals = createContext(
  {} as DashboardUploadsModalsController,
);

export interface DashboardUploadsModalsController {
  addFileModal: ContextForOpenableInterface;
  addUrlSpotifyModal: ContextForOpenableInterface;
  addUrlYouTubeModal: ContextForOpenableInterface;
  addTextStickyModal: ContextForOpenableInterface;
  addUrlWebsiteModal: ContextForOpenableInterface;
}

export function DashboardUploadsModals({
  children,
}: {
  children: React.ReactNode;
}) {
  const addFileModal = useControllerForOpenable();
  const addUrlSpotifyModal = useControllerForOpenable();
  const addUrlYouTubeModal = useControllerForOpenable();
  const addTextStickyModal = useControllerForOpenable();
  const addUrlWebsiteModal = useControllerForOpenable();

  return (
    <ContextForDashboardUploadsModals.Provider
      value={{
        addFileModal: addFileModal,
        addUrlSpotifyModal: addUrlSpotifyModal,
        addUrlYouTubeModal: addUrlYouTubeModal,
        addTextStickyModal: addTextStickyModal,
        addUrlWebsiteModal: addUrlWebsiteModal,
      }}
    >
      {children}
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
      <ContextForOpenable.Provider value={addUrlWebsiteModal}>
        <DashboardJournalAddWebsiteUrlModal />
      </ContextForOpenable.Provider>
    </ContextForDashboardUploadsModals.Provider>
  );
}
