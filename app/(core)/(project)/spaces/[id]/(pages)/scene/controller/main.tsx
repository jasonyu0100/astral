import { useControllerForUserActivityListFromChapter } from '@/server/controller/activity/list-from-chapter';
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
import { ContextForLoggedInUserObj } from '@/server/model/user/main';
import html2canvas from 'html2canvas';
import { createContext, useContext, useRef, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  updateToggle: boolean;
  divWidth: number;
  divHeight: number;
  selectedIdeas: IdeaObj[];
  directoryMode: SpacesSceneDirectoryMode;
  linkMode: SpacesSceneLinkMode;
  interactionMode: SpacesSceneInteractionMode;
  sidebarMediaMode: SpacesSceneSidebarMediaMode;
  sidebarContentMode: SpacesSceneSidebarContentMode;
  sidebarMode: SpacesSceneSidebarMode;
  sidebarVisibility: SpacesSceneSidebarVisibility;
  bubbleMode: SpacesSceneBubbleMode;
  screenshotRef: React.RefObject<HTMLDivElement>;
  hideUI: boolean;
}

interface ControllerActions {
  updateDirectoryMode: (mode: SpacesSceneDirectoryMode) => void;
  updateDivWidth: (width: number) => void;
  updateDivHeight: (height: number) => void;
  updateLinkMode: (mode: SpacesSceneLinkMode) => void;
  updateBubbleMode: (mode: SpacesSceneBubbleMode) => void;
  updateSelectedIdeas: (ideas: IdeaObj[]) => void;
  updateInteractionMode: (mode: SpacesSceneInteractionMode) => void;
  updateSidebarContentMode: (mode: SpacesSceneSidebarContentMode) => void;
  updateSidebarMode: (mode: SpacesSceneSidebarMode) => void;
  checkContainsSelectedIdea: (ideaObj: IdeaObj) => boolean;
  updateSidebarVisibility: (visibility: SpacesSceneSidebarVisibility) => void;
  linkIdeas: () => Promise<IdeaRelationshipObj[]>;
  copyIdeas: () => Promise<IdeaObj[]>;
  selectAll: () => void;
  deselectAll: () => void;
  goToHome: () => void;
  goToGallery: (gallery: GalleryObj) => void;
  goToCollection: (collection: GalleryCollectionObj) => void;
  goToGalleryThenCollection: (gallery: GalleryObj) => void;
  takeScreenshot: () => void;
  updateHideUI: (hide: boolean) => void;
  saveAll: () => void;
  sortIdeas: () => void;
}

export const ContextForSpacesScene = createContext({} as Controller);

export enum SpacesSceneSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export enum SpacesSceneInteractionMode {
  CURSOR = 'Cursor',
  SELECTOR = 'Selector',
}

export enum SpacesSceneBubbleMode {
  OFF = 'OFF',
  ON = 'ON',
}

export enum SpacesSceneSidebarMediaMode {
  Home = 'Home',
  Gallery = 'Gallery',
  Collection = 'Collection',
}

export enum SpacesSceneSidebarContentMode {
  JOURNAL = 'Journal',
  CHAT_SCENE = 'Chat Scene',
  CHAPTERS = 'Chapters',
}

export enum SpacesSceneSidebarMode {
  IDEAS = 'Ideas',
  SCENES = 'Scenes',
  CHAT = 'Chat',
}

export enum SpacesSceneLinkMode {
  ON = 'ON',
  OFF = 'OFF',
}

export enum SpacesSceneDirectoryMode {
  DEFAULT = 'Default',
  DIRECTORY = 'DIRECTORY',
}

export function useControllerForSpacesScene(): Controller {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const spaceController = useContext(ContextForSpaceMain);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const galleryListController = useContext(ContextForGalleryList);
  const collectionListController = useContext(ContextForGalleryCollectionList);
  const activityListController = useControllerForUserActivityListFromChapter(
    chapterListController.state.objId,
  );
  const ideaRelationshipListController = useContext(
    ContextForIdeaRelationshipListFromScene,
  );
  const [selectedIdeas, setSelectedIdeas] = useState<IdeaObj[]>([]);
  const [bubbleMode, setBubbleMode] = useState<SpacesSceneBubbleMode>(
    SpacesSceneBubbleMode.ON,
  );
  const [directoryMode, setDirectoryMode] = useState<SpacesSceneDirectoryMode>(
    SpacesSceneDirectoryMode.DEFAULT,
  );
  const [listSceneMode, setListSceneMode] = useState<SpacesSceneSidebarMode>(
    SpacesSceneSidebarMode.SCENES,
  );
  const [interactionMode, setInteractionMode] =
    useState<SpacesSceneInteractionMode>(SpacesSceneInteractionMode.CURSOR);
  const [listMode, setListMode] = useState<SpacesSceneSidebarContentMode>(
    SpacesSceneSidebarContentMode.CHAPTERS,
  );
  const [linkMode, setLinkMode] = useState<SpacesSceneLinkMode>(
    SpacesSceneLinkMode.ON,
  );
  const [sidebarMediaMode, changeSidebarMediaMode] = useState(
    SpacesSceneSidebarMediaMode.Collection,
  );
  const [sidebarVisibility, setSidebarVisibility] = useState(
    SpacesSceneSidebarVisibility.OPEN,
  );
  const [updateToggle, setUpdateToggle] = useState(false);

  const [divWidth, setDivWidth] = useState(0);
  const [divHeight, setDivHeight] = useState(0);

  // Add ref for capturing the screenshot of the container
  const screenshotRef = useRef<HTMLDivElement>(null);

  // State to control the visibility of UI components
  const [hideUI, setHideUI] = useState(false);

  // Function to handle screenshot
  const takeScreenshot = async () => {
    // Hide UI components before taking the screenshot
    setLinkMode(SpacesSceneLinkMode.ON);
    setBubbleMode(SpacesSceneBubbleMode.OFF);
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
          setLinkMode(SpacesSceneLinkMode.ON);
          setBubbleMode(SpacesSceneBubbleMode.ON);
        }
      }
    }, 500);
  };

  const saveAndContainWithinDiv = async () => {
    const divWidth = 1000;
    const divHeight = 1000;

    const items = ideaListController.state.objs;

    const editPromises = items.map(async (idea) => {
      let { x, y, width, height } = idea;

      // Scale width and height to fit within div bounds if they exceed div size
      if (width > divWidth) width = divWidth;
      if (height > divHeight) height = divHeight;

      // Adjust x position if the item overflows on the left or right side
      if (x < 0) x = 0;
      if (x + width > divWidth) x = divWidth - width;

      // Adjust y position if the item overflows on the top or bottom side
      if (y < 0) y = 0;
      if (y + height > divHeight) y = divHeight - height;

      // Update item position and size if changes were made
      return ideaListController.actions.editActions.edit(idea.id, {
        x: x,
        y: y,
        width: width,
        height: height,
      });
    });

    // Wait for all the promises to complete
    await Promise.all(editPromises);
  };

  const distributeIdeasEvenly = async () => {
    const items = ideaListController.state.objs;
    const itemCount = items.length;

    // Calculate optimal rows and columns to form a square-like grid
    const columns = Math.ceil(Math.sqrt(itemCount));
    const rows = Math.ceil(itemCount / columns);

    // Calculate cell width and height based on div dimensions and the number of columns and rows
    const cellWidth = divWidth / columns;
    const cellHeight = divHeight / rows;

    // Calculate padding to center items within each cell, creating flexible gaps
    const editPromises = items.map(async (idea, index) => {
      const ideaWidth = idea.width;
      const ideaHeight = idea.height;

      // Calculate row and column for the current item
      const row = Math.floor(index / columns);
      const col = index % columns;

      // Calculate x and y positions by centering each item within its cell
      const x = col * cellWidth + (cellWidth - ideaWidth) / 2;
      const y = row * cellHeight + (cellHeight - ideaHeight) / 2;

      return ideaListController.actions.editActions.edit(idea.id, {
        x: Math.ceil(x + Math.random() * 50),
        y: Math.ceil(y + Math.random() * 50),
        width: Math.ceil(ideaWidth),
        height: Math.ceil(ideaHeight),
      });
    });

    // Wait for all edit promises to complete
    await Promise.all(editPromises);
    setUpdateToggle(!updateToggle);
  };

  const copyIdeas = async () => {
    const copiedIdeas = await Promise.all(
      selectedIdeas.map(async (idea) =>
        ideaListController.actions.createActions.duplicateWithXY(
          idea,
          idea.x + 100,
          idea.y + 100,
        ),
      ),
    );

    await Promise.all(
      copiedIdeas.map((idea) =>
        activityListController.actions.createActions.createFromChapterSceneIdea(
          loggedInUser.id,
          spaceController.state.objId,
          chapterListController.state.objId,
          sceneListController.state.objId,
          idea.id,
        ),
      ),
    );

    return copiedIdeas;
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
    saveAndContainWithinDiv().then(() => {
      alert('save all');
    });
  };

  return {
    state: {
      updateToggle,
      directoryMode: directoryMode,
      divWidth: divWidth,
      divHeight: divHeight,
      linkMode: linkMode,
      selectedIdeas: selectedIdeas,
      bubbleMode: bubbleMode,
      interactionMode: interactionMode,
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
      updateInteractionMode: (mode) => setInteractionMode(mode),
      updateSidebarContentMode: (mode) => setListMode(mode),
      updateSidebarMode: (mode) => setListSceneMode(mode),
      updateSidebarVisibility: (visibility) => setSidebarVisibility(visibility),
      goToHome: () => {
        changeSidebarMediaMode(SpacesSceneSidebarMediaMode.Home);
      },
      goToGallery: (gallery: GalleryObj) => {
        galleryListController.actions.stateActions.select(gallery);
        changeSidebarMediaMode(SpacesSceneSidebarMediaMode.Gallery);
      },
      goToCollection: (collection: GalleryCollectionObj) => {
        collectionListController.actions.stateActions.select(collection);
        changeSidebarMediaMode(SpacesSceneSidebarMediaMode.Collection);
      },
      goToGalleryThenCollection: (gallery: GalleryObj) => {
        galleryListController.actions.stateActions.select(gallery);
        changeSidebarMediaMode(SpacesSceneSidebarMediaMode.Collection);
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
      copyIdeas: copyIdeas,
      sortIdeas: distributeIdeasEvenly,
    },
  };
}
