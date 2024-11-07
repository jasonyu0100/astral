import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesSpaceAddChapterModal } from '../add/chapter/main';
import { SpacesSpaceAddCollectionModal } from '../add/collection/main';
import { SpacesSpaceAddGalleryModal } from '../add/gallery/main';
import { SpacesSpaceAddArticleIdeaModal } from '../add/idea/article/main';
import { SpacesSpaceAddFileAudioIdeaModal } from '../add/idea/audio/main';
import { SpacesSpaceAddFileIdeaModal } from '../add/idea/file/main';
import { SpacesSpaceAddGenerateIdeaModal } from '../add/idea/generate/main';
import { SpacesSpaceAddSearchIdeaModal } from '../add/idea/search/main';
import { SpacesSpaceAddSpotifyUrlModal } from '../add/idea/spotify/main';
import { SpacesSpaceAddStickyIdeaModal } from '../add/idea/sticky/main';
import { SpacesSpaceAddWebsiteUrlModal } from '../add/idea/website/main';
import { SpacesSpaceAddYouTubeUrlModal } from '../add/idea/youtube/main';
import { SpacesSpaceAddResourceModal } from '../add/resource/main';
import { SpacesSpaceAddSceneModal } from '../add/scene/main';
import { SpacesSpaceCombineIdeas } from '../combine/main';
import { SpacesSpaceEditChapterModal } from '../edit/chapter/main';
import { SpacesSpaceEditSceneModal } from '../edit/scene/main';
import { SpacesSpaceEditSpaceModal } from '../edit/space/main';
import { SpacesSpaceGeneratePost } from '../generate/main';
import { SpacesSpaceMigrateSceneModal } from '../migrate/main';
import { SpacesSpaceShareViewModal } from '../share/main';

export const ContextForSpacesSpaceModals = createContext(
  {} as SpacesSpaceModals,
);

export interface SpacesSpaceModals {
  addCollectionController: ContextForOpenableInterface;
  addGalleryController: ContextForOpenableInterface;
  addFileIdeaController: ContextForOpenableInterface;
  addYouTubeUrlIdeaController: ContextForOpenableInterface;
  addSpotifyUrlIdeaController: ContextForOpenableInterface;
  addWebsiteUrlIdeaController: ContextForOpenableInterface;
  addFileAudioIdeaController: ContextForOpenableInterface;
  addStickyIdeaController: ContextForOpenableInterface;
  addArticleIdeaController: ContextForOpenableInterface;
  addResourceController: ContextForOpenableInterface;
  addSceneController: ContextForOpenableInterface;
  addSearchIdeaController: ContextForOpenableInterface;
  addGenerateIdeaController: ContextForOpenableInterface;
  generatePlanController: ContextForOpenableInterface;
  combineIdeasController: ContextForOpenableInterface;
  shareViewController: ContextForOpenableInterface;
  editChapterController: ContextForOpenableInterface;
  editSpaceController: ContextForOpenableInterface;
  editSceneController: ContextForOpenableInterface;
  addChapterController: ContextForOpenableInterface;
  migrateSceneController: ContextForOpenableInterface;
}

export function SpacesSpaceModals({ children }: { children: React.ReactNode }) {
  const addCollectionController = useControllerForOpenable();
  const addGalleryController = useControllerForOpenable();
  const addFileIdeaController = useControllerForOpenable();
  const addYouTubeUrlIdeaController = useControllerForOpenable();
  const addSpotifyUrlIdeaController = useControllerForOpenable();
  const addWebsiteUrlIdeaController = useControllerForOpenable();
  const addStickyIdeaController = useControllerForOpenable();
  const addArticleIdeaController = useControllerForOpenable();
  const addResourceController = useControllerForOpenable();
  const addSceneController = useControllerForOpenable();
  const addGenerateIdeaController = useControllerForOpenable();
  const generatePlanController = useControllerForOpenable();
  const addSearchIdeaController = useControllerForOpenable();
  const combineIdeasController = useControllerForOpenable();
  const shareViewController = useControllerForOpenable();
  const editChapterController = useControllerForOpenable();
  const editSpaceController = useControllerForOpenable();
  const editSceneController = useControllerForOpenable();
  const addChapterController = useControllerForOpenable();
  const migrateSceneController = useControllerForOpenable();
  const addFileAudioIdeaController = useControllerForOpenable();

  return (
    <ContextForSpacesSpaceModals.Provider
      value={{
        addFileAudioIdeaController: addFileAudioIdeaController,
        addGalleryController: addGalleryController,
        addCollectionController: addCollectionController,
        addFileIdeaController: addFileIdeaController,
        addYouTubeUrlIdeaController: addYouTubeUrlIdeaController,
        addSpotifyUrlIdeaController: addSpotifyUrlIdeaController,
        addWebsiteUrlIdeaController: addWebsiteUrlIdeaController,
        addStickyIdeaController: addStickyIdeaController,
        addArticleIdeaController: addArticleIdeaController,
        addResourceController: addResourceController,
        addSceneController: addSceneController,
        addGenerateIdeaController: addGenerateIdeaController,
        addSearchIdeaController: addSearchIdeaController,
        generatePlanController: generatePlanController,
        combineIdeasController: combineIdeasController,
        shareViewController: shareViewController,
        editChapterController: editChapterController,
        editSpaceController: editSpaceController,
        editSceneController: editSceneController,
        addChapterController: addChapterController,
        migrateSceneController: migrateSceneController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={addCollectionController}>
        <SpacesSpaceAddCollectionModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addGalleryController}>
        <SpacesSpaceAddGalleryModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addFileIdeaController}>
        <SpacesSpaceAddFileIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addYouTubeUrlIdeaController}>
        <SpacesSpaceAddYouTubeUrlModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addWebsiteUrlIdeaController}>
        <SpacesSpaceAddWebsiteUrlModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSpotifyUrlIdeaController}>
        <SpacesSpaceAddSpotifyUrlModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addStickyIdeaController}>
        <SpacesSpaceAddStickyIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addArticleIdeaController}>
        <SpacesSpaceAddArticleIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addResourceController}>
        <SpacesSpaceAddResourceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSceneController}>
        <SpacesSpaceAddSceneModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSearchIdeaController}>
        <SpacesSpaceAddSearchIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={generatePlanController}>
        <SpacesSpaceGeneratePost />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addGenerateIdeaController}>
        <SpacesSpaceAddGenerateIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={combineIdeasController}>
        <SpacesSpaceCombineIdeas />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={shareViewController}>
        <SpacesSpaceShareViewModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editChapterController}>
        <SpacesSpaceEditChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSpaceController}>
        <SpacesSpaceEditSpaceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSceneController}>
        <SpacesSpaceEditSceneModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addChapterController}>
        <SpacesSpaceAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={migrateSceneController}>
        <SpacesSpaceMigrateSceneModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addFileAudioIdeaController}>
        <SpacesSpaceAddFileAudioIdeaModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesSpaceModals.Provider>
  );
}
