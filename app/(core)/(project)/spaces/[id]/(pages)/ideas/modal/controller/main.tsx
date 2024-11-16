import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpacesIdeasAddChapterModal } from '../add/chapter/main';
import { SpacesIdeasAddCollectionModal } from '../add/collection/main';
import { SpacesIdeasAddGalleryModal } from '../add/gallery/main';
import { SpacesIdeasAddArticleIdeaModal } from '../add/idea/article/main';
import { SpacesIdeasAddFileAudioIdeaModal } from '../add/idea/audio/main';
import { SpacesIdeasAddFileIdeaModal } from '../add/idea/file/main';
import { SpacesIdeasAddGenerateIdeaModal } from '../add/idea/generate/main';
import { SpacesIdeasAddSearchIdeaModal } from '../add/idea/search/main';
import { SpacesIdeasAddSpotifyUrlModal } from '../add/idea/spotify/main';
import { SpacesIdeasAddStickyIdeaModal } from '../add/idea/sticky/main';
import { SpacesIdeasAddFileVideoIdeaModal } from '../add/idea/video/main';
import { SpacesIdeasAddWebsiteUrlModal } from '../add/idea/website/main';
import { SpacesIdeasAddYouTubeUrlModal } from '../add/idea/youtube/main';
import { SpacesIdeasAddResourceModal } from '../add/resource/main';
import { SpacesIdeasAddSceneModal } from '../add/scene/main';
import { SpacesIdeasCombineIdeas } from '../combine/main';
import { SpacesIdeasEditChapterModal } from '../edit/chapter/main';
import { SpacesIdeasEditSceneModal } from '../edit/scene/main';
import { SpacesIdeasEditSpaceModal } from '../edit/space/main';
import { SpacesIdeasGeneratePost } from '../generate/main';
import { SpacesIdeasMigrateSceneModal } from '../migrate/main';

export const ContextForSpacesIdeasModals = createContext(
  {} as SpacesIdeasModals,
);

export interface SpacesIdeasModals {
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
  editChapterController: ContextForOpenableInterface;
  editSpaceController: ContextForOpenableInterface;
  editSceneController: ContextForOpenableInterface;
  addChapterController: ContextForOpenableInterface;
  migrateSceneController: ContextForOpenableInterface;
  addFileVideoIdeaController: ContextForOpenableInterface;
}

export function SpacesIdeasModals({ children }: { children: React.ReactNode }) {
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
  const editChapterController = useControllerForOpenable();
  const editSpaceController = useControllerForOpenable();
  const editSceneController = useControllerForOpenable();
  const addChapterController = useControllerForOpenable();
  const migrateSceneController = useControllerForOpenable();
  const addFileAudioIdeaController = useControllerForOpenable();
  const addFileVideoIdeaController = useControllerForOpenable();

  return (
    <ContextForSpacesIdeasModals.Provider
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
        editChapterController: editChapterController,
        editSpaceController: editSpaceController,
        editSceneController: editSceneController,
        addChapterController: addChapterController,
        migrateSceneController: migrateSceneController,
        addFileVideoIdeaController: addFileVideoIdeaController,
      }}
    >
      {children}
      <ContextForOpenable.Provider value={addCollectionController}>
        <SpacesIdeasAddCollectionModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addGalleryController}>
        <SpacesIdeasAddGalleryModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addFileIdeaController}>
        <SpacesIdeasAddFileIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addYouTubeUrlIdeaController}>
        <SpacesIdeasAddYouTubeUrlModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addWebsiteUrlIdeaController}>
        <SpacesIdeasAddWebsiteUrlModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSpotifyUrlIdeaController}>
        <SpacesIdeasAddSpotifyUrlModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addStickyIdeaController}>
        <SpacesIdeasAddStickyIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addArticleIdeaController}>
        <SpacesIdeasAddArticleIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addResourceController}>
        <SpacesIdeasAddResourceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSceneController}>
        <SpacesIdeasAddSceneModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSearchIdeaController}>
        <SpacesIdeasAddSearchIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={generatePlanController}>
        <SpacesIdeasGeneratePost />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addGenerateIdeaController}>
        <SpacesIdeasAddGenerateIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={combineIdeasController}>
        <SpacesIdeasCombineIdeas />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editChapterController}>
        <SpacesIdeasEditChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSpaceController}>
        <SpacesIdeasEditSpaceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSceneController}>
        <SpacesIdeasEditSceneModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addChapterController}>
        <SpacesIdeasAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={migrateSceneController}>
        <SpacesIdeasMigrateSceneModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addFileAudioIdeaController}>
        <SpacesIdeasAddFileAudioIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addFileVideoIdeaController}>
        <SpacesIdeasAddFileVideoIdeaModal />
      </ContextForOpenable.Provider>
    </ContextForSpacesIdeasModals.Provider>
  );
}
