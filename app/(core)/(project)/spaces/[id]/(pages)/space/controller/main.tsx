import { ContextForUserActivityListFromChapter } from '@/architecture/controller/activity/list-from-chapter';
import { ContextForGalleryCollectionList } from '@/architecture/controller/gallery/collection/list';
import { ContextForGalleryList } from '@/architecture/controller/gallery/list';
import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { ContextForIdeaRelationshipListFromScene } from '@/architecture/controller/idea/relationship/list-from-scene';
import { ContextForIdeaSceneList } from '@/architecture/controller/scene/list';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { GalleryCollectionObj } from '@/architecture/model/gallery/collection/main';
import { GalleryObj } from '@/architecture/model/gallery/main';
import { IdeaObj } from '@/architecture/model/idea/main';
import { IdeaRelationshipObj } from '@/architecture/model/idea/relationship/main';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
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
  directoryMode: SpaceSpaceDirectoryMode;
  linkMode: SpaceSpaceLinkMode;
  interactionMode: SpaceSpaceInteractionMode;
  sidebarMediaMode: SpaceSpaceSidebarMediaMode;
  sidebarContentMode: SpaceSpaceSidebarContentMode;
  sidebarMode: SpaceSpaceSidebarMode;
  sidebarVisibility: SpaceSpaceSidebarVisibility;
  bubbleMode: SpaceSpaceBubbleMode;
  screenshotRef: React.RefObject<HTMLDivElement>;
  hideUI: boolean;
}

interface ControllerActions {
  updateDirectoryMode: (mode: SpaceSpaceDirectoryMode) => void;
  updateDivWidth: (width: number) => void;
  updateDivHeight: (height: number) => void;
  updateLinkMode: (mode: SpaceSpaceLinkMode) => void;
  updateBubbleMode: (mode: SpaceSpaceBubbleMode) => void;
  updateSelectedIdeas: (ideas: IdeaObj[]) => void;
  updateInteractionMode: (mode: SpaceSpaceInteractionMode) => void;
  updateSidebarContentMode: (mode: SpaceSpaceSidebarContentMode) => void;
  updateSidebarMode: (mode: SpaceSpaceSidebarMode) => void;
  checkContainsSelectedIdea: (ideaObj: IdeaObj) => boolean;
  updateSidebarVisibility: (visibility: SpaceSpaceSidebarVisibility) => void;
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

export const ContextForSpaceSpace = createContext({} as Controller);

export enum SpaceSpaceSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export enum SpaceSpaceInteractionMode {
  CURSOR = 'Cursor',
  SELECTOR = 'Selector',
}

export enum SpaceSpaceBubbleMode {
  OFF = 'OFF',
  ON = 'ON',
}

export enum SpaceSpaceSidebarMediaMode {
  Home = 'Home',
  Gallery = 'Gallery',
  Collection = 'Collection',
}

export enum SpaceSpaceSidebarContentMode {
  JOURNAL = 'Journal',
  CHAT_SCENE = 'Chat Scene',
  CHAPTERS = 'Chapters',
}

export enum SpaceSpaceSidebarMode {
  IDEAS = 'Ideas',
  SCENES = 'Scenes',
  CHAT = 'Chat',
}

export enum SpaceSpaceLinkMode {
  ON = 'ON',
  OFF = 'OFF',
}

export enum SpaceSpaceDirectoryMode {
  DEFAULT = 'Default',
  DIRECTORY = 'DIRECTORY',
}

export function useControllerForSpaceSpace(): Controller {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const spaceController = useContext(ContextForSpaceMain);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const galleryListController = useContext(ContextForGalleryList);
  const collectionListController = useContext(ContextForGalleryCollectionList);
  const activityListController = useContext(
    ContextForUserActivityListFromChapter,
  );
  const ideaRelationshipListController = useContext(
    ContextForIdeaRelationshipListFromScene,
  );
  const [selectedIdeas, setSelectedIdeas] = useState<IdeaObj[]>([]);
  const [bubbleMode, setBubbleMode] = useState<SpaceSpaceBubbleMode>(
    SpaceSpaceBubbleMode.ON,
  );
  const [directoryMode, setDirectoryMode] = useState<SpaceSpaceDirectoryMode>(
    SpaceSpaceDirectoryMode.DEFAULT,
  );
  const [listSceneMode, setListSceneMode] = useState<SpaceSpaceSidebarMode>(
    SpaceSpaceSidebarMode.SCENES,
  );
  const [interactionMode, setInteractionMode] =
    useState<SpaceSpaceInteractionMode>(SpaceSpaceInteractionMode.CURSOR);
  const [listMode, setListMode] = useState<SpaceSpaceSidebarContentMode>(
    SpaceSpaceSidebarContentMode.CHAPTERS,
  );
  const [linkMode, setLinkMode] = useState<SpaceSpaceLinkMode>(
    SpaceSpaceLinkMode.ON,
  );
  const [sidebarMediaMode, changeSidebarMediaMode] = useState(
    SpaceSpaceSidebarMediaMode.Collection,
  );
  const [sidebarVisibility, setSidebarVisibility] = useState(
    SpaceSpaceSidebarVisibility.OPEN,
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
    setLinkMode(SpaceSpaceLinkMode.ON);
    setBubbleMode(SpaceSpaceBubbleMode.OFF);
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
          setLinkMode(SpaceSpaceLinkMode.ON);
          setBubbleMode(SpaceSpaceBubbleMode.ON);
        }
      }
    }, 500);
  };

  const saveAndContainWithinDiv = async () => {
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
        width: idea.width,
        height: idea.height,
        scale: idea.scale,
        rotation: idea.rotation,
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
        changeSidebarMediaMode(SpaceSpaceSidebarMediaMode.Home);
      },
      goToGallery: (gallery: GalleryObj) => {
        galleryListController.actions.stateActions.select(gallery);
        changeSidebarMediaMode(SpaceSpaceSidebarMediaMode.Gallery);
      },
      goToCollection: (collection: GalleryCollectionObj) => {
        collectionListController.actions.stateActions.select(collection);
        changeSidebarMediaMode(SpaceSpaceSidebarMediaMode.Collection);
      },
      goToGalleryThenCollection: (gallery: GalleryObj) => {
        galleryListController.actions.stateActions.select(gallery);
        changeSidebarMediaMode(SpaceSpaceSidebarMediaMode.Collection);
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
