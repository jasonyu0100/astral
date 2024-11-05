import {
  ContextForOpenable,
  ContextForOpenableInterface,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { createContext } from 'react';
import { SpaceSpaceAddChapterModal } from '../add/chapter/main';
import { SpaceSpaceAddCollectionModal } from '../add/collection/main';
import { SpaceSpaceAddGalleryModal } from '../add/gallery/main';
import { SpaceSpaceAddArticleIdeaModal } from '../add/idea/article/main';
import { SpaceSpaceAddFileIdeaModal } from '../add/idea/file/main';
import { SpaceSpaceAddGenerateIdeaModal } from '../add/idea/generate/main';
import { SpaceSpaceAddSearchIdeaModal } from '../add/idea/search/main';
import { SpaceSpaceAddSpotifyUrlModal } from '../add/idea/spotify/main';
import { SpaceSpaceAddStickyIdeaModal } from '../add/idea/sticky/main';
import { SpaceSpaceAddWebsiteUrlModal } from '../add/idea/website/main';
import { SpaceSpaceAddYouTubeUrlModal } from '../add/idea/youtube/main';
import { SpaceSpaceAddResourceModal } from '../add/resource/main';
import { SpaceSpaceAddSceneModal } from '../add/scene/main';
import { SpaceSpaceCombineIdeas } from '../combine/main';
import { SpaceSpaceEditChapterModal } from '../edit/chapter/main';
import { SpaceSpaceEditSceneModal } from '../edit/scene/main';
import { SpaceSpaceEditSpaceModal } from '../edit/space/main';
import { SpaceSpaceGeneratePost } from '../generate/main';
import { SpaceSpaceMigrateSceneModal } from '../migrate/main';
import { SpaceSpaceShareViewModal } from '../share/main';

export const ContextForSpaceSpaceModals = createContext({} as SpaceSpaceModals);

export interface SpaceSpaceModals {
  addCollectionController: ContextForOpenableInterface;
  addGalleryController: ContextForOpenableInterface;
  addFileIdeaController: ContextForOpenableInterface;
  addYouTubeUrlIdeaController: ContextForOpenableInterface;
  addSpotifyUrlIdeaController: ContextForOpenableInterface;
  addWebsiteUrlIdeaController: ContextForOpenableInterface;
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

export function SpaceSpaceModals({ children }: { children: React.ReactNode }) {
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

  return (
    <ContextForSpaceSpaceModals.Provider
      value={{
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
        <SpaceSpaceAddCollectionModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addGalleryController}>
        <SpaceSpaceAddGalleryModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addFileIdeaController}>
        <SpaceSpaceAddFileIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addYouTubeUrlIdeaController}>
        <SpaceSpaceAddYouTubeUrlModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addWebsiteUrlIdeaController}>
        <SpaceSpaceAddWebsiteUrlModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSpotifyUrlIdeaController}>
        <SpaceSpaceAddSpotifyUrlModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addStickyIdeaController}>
        <SpaceSpaceAddStickyIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addArticleIdeaController}>
        <SpaceSpaceAddArticleIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addResourceController}>
        <SpaceSpaceAddResourceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSceneController}>
        <SpaceSpaceAddSceneModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addSearchIdeaController}>
        <SpaceSpaceAddSearchIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={generatePlanController}>
        <SpaceSpaceGeneratePost />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addGenerateIdeaController}>
        <SpaceSpaceAddGenerateIdeaModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={combineIdeasController}>
        <SpaceSpaceCombineIdeas />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={shareViewController}>
        <SpaceSpaceShareViewModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editChapterController}>
        <SpaceSpaceEditChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSpaceController}>
        <SpaceSpaceEditSpaceModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={editSceneController}>
        <SpaceSpaceEditSceneModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={addChapterController}>
        <SpaceSpaceAddChapterModal />
      </ContextForOpenable.Provider>
      <ContextForOpenable.Provider value={migrateSceneController}>
        <SpaceSpaceMigrateSceneModal />
      </ContextForOpenable.Provider>
    </ContextForSpaceSpaceModals.Provider>
  );
}
