import { ContextForLoading } from '@/components/loading/controller/main';
import { ContextForGalleryCollectionList } from '@/server/controller/gallery/collection/list';
import { ContextForGalleryList } from '@/server/controller/gallery/list';
import { ContextForSceneIdeaList } from '@/server/controller/idea/list';
import { ContextForIdeaRelationshipListFromScene } from '@/server/controller/idea/relationship/list-from-scene';
import { ContextForIdeaSceneList } from '@/server/controller/scene/list';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { GalleryCollectionObj } from '@/server/model/gallery/collection/main';
import { GalleryObj } from '@/server/model/gallery/main';
import { IdeaObj } from '@/server/model/idea/main';
import { IdeaRelationshipObj } from '@/server/model/idea/relationship/main';
import html2canvas from 'html2canvas';
import { createContext, useContext, useRef, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  divWidth: number;
  divHeight: number;
  selectedIdeas: IdeaObj[];
  directoryMode: SpacesViewDirectoryMode;
  linkMode: SpacesViewLinkMode;
  mapMode: SpacesViewInteractionMode;
  sidebarMediaMode: SpacesViewSidebarMediaMode;
  sidebarContentMode: SpacesViewSidebarContentMode;
  sidebarMode: SpacesViewSidebarMode;
  sidebarVisibility: SpacesViewSidebarVisibility;
  bubbleMode: SpacesViewBubbleMode;
  screenshotRef: React.RefObject<HTMLDivElement>;
  hideUI: boolean;
}

interface ControllerActions {
  updateDirectoryMode: (mode: SpacesViewDirectoryMode) => void;
  updateDivWidth: (width: number) => void;
  updateDivHeight: (height: number) => void;
  updateLinkMode: (mode: SpacesViewLinkMode) => void;
  updateBubbleMode: (mode: SpacesViewBubbleMode) => void;
  updateSelectedIdeas: (ideas: IdeaObj[]) => void;
  updateInteractionMode: (mode: SpacesViewInteractionMode) => void;
  updateSidebarContentMode: (mode: SpacesViewSidebarContentMode) => void;
  updateSidebarMode: (mode: SpacesViewSidebarMode) => void;
  checkContainsSelectedIdea: (ideaObj: IdeaObj) => boolean;
  updateSidebarVisibility: (visibility: SpacesViewSidebarVisibility) => void;
  linkIdeas: () => Promise<IdeaRelationshipObj[]>;
  selectAll: () => void;
  deselectAll: () => void;
  goToHome: () => void;
  goToGallery: (gallery: GalleryObj) => void;
  goToCollection: (collection: GalleryCollectionObj) => void;
  takeScreenshot: () => void;
  updateHideUI: (hide: boolean) => void;
  saveAll: () => void;
}

export const ContextForSpacesView = createContext({} as Controller);

export enum SpacesViewSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export enum SpacesViewInteractionMode {
  CURSOR = 'Cursor',
  SELECTED = 'Selected',
}

export enum SpacesViewIdeaMode {
  DEFAULT = 'Default',
  INFORMATION = 'Information',
}

export enum SpacesViewBubbleMode {
  OFF = 'OFF',
  ON = 'ON',
}

export enum SpacesViewSidebarMediaMode {
  Home = 'Home',
  Gallery = 'Gallery',
  Collection = 'Collection',
}

export enum SpacesViewSidebarContentMode {
  EXPLORER = 'Explorer',
  CHAT_SCENE = 'Chat Scene',
  CHAPTERS = 'Chapters',
}

export enum SpacesViewSidebarMode {
  IDEAS = 'Ideas',
  SCENES = 'Scenes',
  CHAT = 'Chat',
}

export enum SpacesViewLinkMode {
  ON = 'ON',
  OFF = 'OFF',
}

export enum SpacesViewDirectoryMode {
  DEFAULT = 'Default',
  DIRECTORY = 'DIRECTORY',
}

export function useControllerForSpacesView(): Controller {
  const loadingController = useContext(ContextForLoading);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const spaceController = useContext(ContextForSpaceMain);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const galleryListController = useContext(ContextForGalleryList);
  const collectionListController = useContext(ContextForGalleryCollectionList);
  const ideaRelationshipListController = useContext(
    ContextForIdeaRelationshipListFromScene,
  );
  const [selectedIdeas, setSelectedIdeas] = useState<IdeaObj[]>([]);
  const [bubbleMode, setBubbleMode] = useState<SpacesViewBubbleMode>(
    SpacesViewBubbleMode.ON,
  );
  const [directoryMode, setDirectoryMode] = useState<SpacesViewDirectoryMode>(
    SpacesViewDirectoryMode.DEFAULT,
  );
  const [listSceneMode, setListSceneMode] = useState<SpacesViewSidebarMode>(
    SpacesViewSidebarMode.SCENES,
  );
  const [mapMode, setMode] = useState<SpacesViewInteractionMode>(
    SpacesViewInteractionMode.SELECTED,
  );
  const [listMode, setListMode] = useState<SpacesViewSidebarContentMode>(
    SpacesViewSidebarContentMode.CHAPTERS,
  );
  const [linkMode, setLinkMode] = useState<SpacesViewLinkMode>(
    SpacesViewLinkMode.ON,
  );
  const [sidebarMediaMode, changeSidebarMediaMode] = useState(
    SpacesViewSidebarMediaMode.Collection,
  );
  const [sidebarVisibility, setSidebarVisibility] = useState(
    SpacesViewSidebarVisibility.OPEN,
  );

  const [divWidth, setDivWidth] = useState(0);
  const [divHeight, setDivHeight] = useState(0);

  // Add ref for capturing the screenshot of the container
  const screenshotRef = useRef<HTMLDivElement>(null);

  // State to control the visibility of UI components
  const [hideUI, setHideUI] = useState(false);

  // Function to handle screenshot
  const takeScreenshot = async () => {
    // Hide UI components before taking the screenshot
    setLinkMode(SpacesViewLinkMode.ON);
    setBubbleMode(SpacesViewBubbleMode.OFF);
    setHideUI(true);

    setTimeout(async () => {
      if (screenshotRef.current) {
        try {
          const canvas = await html2canvas(screenshotRef.current, {
            useCORS: true, // To capture cross-origin images
          });
          const imgData = canvas.toDataURL('image/png'); // Convert to image

          // Create an anchor element to download the screenshot
          const link = document.createElement('a');
          link.href = imgData;
          link.download = 'screenshot.png';
          link.click(); // Trigger download
        } catch (error) {
          console.error('Screenshot capture failed:', error);
        } finally {
          // Show UI components again after the screenshot
          setHideUI(false);
          setLinkMode(SpacesViewLinkMode.ON);
          setBubbleMode(SpacesViewBubbleMode.ON);
        }
      }
    }, 500);
  };

  const linkIdeas = async () => {
    const ideaRelationships = await Promise.all(
      selectedIdeas.slice(0, selectedIdeas.length - 1).map((idea, index) => {
        const toIdea = selectedIdeas[index + 1];
        return ideaRelationshipListController.actions.createActions.createFromIdea(
          idea,
          toIdea,
          spaceController.state.objId,
          chapterListController.state.objId,
          sceneListController.state.objId,
        );
      }),
    );

    return ideaRelationships;
  };

  const saveAll = async () => {
    ideaListController.actions.editActions.sync().then(() => {
      alert('save all');
    });
  };

  return {
    state: {
      directoryMode: directoryMode,
      divWidth: divWidth,
      divHeight: divHeight,
      linkMode: linkMode,
      selectedIdeas: selectedIdeas,
      bubbleMode: bubbleMode,
      mapMode: mapMode,
      sidebarMediaMode: sidebarMediaMode,
      sidebarContentMode: listMode,
      sidebarMode: listSceneMode,
      sidebarVisibility: sidebarVisibility,
      screenshotRef: screenshotRef,
      hideUI: hideUI,
    },
    actions: {
      saveAll: saveAll,
      updateHideUI: (hide: boolean) => setHideUI(hide),
      takeScreenshot: takeScreenshot,
      updateDivWidth: (width) => setDivWidth(width),
      updateDirectoryMode: (mode) => setDirectoryMode(mode),
      updateDivHeight: (height) => setDivHeight(height),
      updateLinkMode: (mode) => setLinkMode(mode),
      updateSelectedIdeas: (ideas) => setSelectedIdeas(ideas),
      updateBubbleMode: (mode) => setBubbleMode(mode),
      updateInteractionMode: (mode) => setMode(mode),
      updateSidebarContentMode: (mode) => setListMode(mode),
      updateSidebarMode: (mode) => setListSceneMode(mode),
      updateSidebarVisibility: (visibility) => setSidebarVisibility(visibility),
      goToHome: () => {
        changeSidebarMediaMode(SpacesViewSidebarMediaMode.Home);
      },
      goToGallery: (gallery: GalleryObj) => {
        galleryListController.actions.stateActions.select(gallery);
        changeSidebarMediaMode(SpacesViewSidebarMediaMode.Gallery);
      },
      goToCollection: (collection: GalleryCollectionObj) => {
        collectionListController.actions.stateActions.select(collection);
        changeSidebarMediaMode(SpacesViewSidebarMediaMode.Collection);
      },
      checkContainsSelectedIdea: (idea: IdeaObj) =>
        selectedIdeas.map((idea) => idea.id).includes(idea.id),
      selectAll: () => {
        setSelectedIdeas(ideaListController.state.objs);
      },
      deselectAll: () => {
        setSelectedIdeas([]);
      },
      linkIdeas: linkIdeas,
    },
  };
}
