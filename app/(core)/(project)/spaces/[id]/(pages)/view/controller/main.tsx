import { ContextForGalleryCollectionList } from '@/(server)/controller/gallery/collection/list';
import { ContextForGalleryList } from '@/(server)/controller/gallery/list';
import { ContextForSceneIdeaList } from '@/(server)/controller/idea/list';
import { ContextForIdeaRelationshipListFromScene } from '@/(server)/controller/idea/relationship/list-from-scene';
import { ContextForIdeaSceneList } from '@/(server)/controller/scene/list';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { GalleryCollectionObj } from '@/(server)/model/gallery/collection/main';
import { GalleryObj } from '@/(server)/model/gallery/main';
import { IdeaObj } from '@/(server)/model/idea/main';
import { IdeaRelationshipObj } from '@/(server)/model/idea/relationship/main';
import { ContextForLoading } from '@/components/loading/controller/main';
import html2canvas from 'html2canvas';
import { createContext, useContext, useRef, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  isSwitchOn: boolean;
  divWidth: number;
  divHeight: number;
  selectedIdeas: IdeaObj[];
  directoryMode: SpacesMapDirectoryMode;
  linkMode: SpacesMapLinkMode;
  mapMode: SpacesMapInteractionMode;
  sidebarMediaMode: SpacesMapSidebarMediaMode;
  sidebarContentMode: SpacesMapSidebarContentMode;
  sidebarMode: SpacesMapSidebarMode;
  sidebarVisibility: SpacesMapSidebarVisibility;
  bubbleMode: SpacesMapBubbleMode;
  screenshotRef: React.RefObject<HTMLDivElement>;
  hideUI: boolean;
}

interface ControllerActions {
  autoSort: () => void;
  getAvailableXYWH: () => {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  updateDirectoryMode: (mode: SpacesMapDirectoryMode) => void;
  updateDivWidth: (width: number) => void;
  updateDivHeight: (height: number) => void;
  updateLinkMode: (mode: SpacesMapLinkMode) => void;
  updateBubbleMode: (mode: SpacesMapBubbleMode) => void;
  updateSelectedIdeas: (ideas: IdeaObj[]) => void;
  updateInteractionMode: (mode: SpacesMapInteractionMode) => void;
  updateSidebarContentMode: (mode: SpacesMapSidebarContentMode) => void;
  updateSidebarMode: (mode: SpacesMapSidebarMode) => void;
  checkContainsSelectedIdea: (ideaObj: IdeaObj) => boolean;
  updateSidebarVisibility: (visibility: SpacesMapSidebarVisibility) => void;
  linkIdeas: () => Promise<IdeaRelationshipObj[]>;
  selectAll: () => void;
  goToHome: () => void;
  goToGallery: (gallery: GalleryObj) => void;
  goToCollection: (collection: GalleryCollectionObj) => void;
  takeScreenshot: () => void;
  updateHideUI: (hide: boolean) => void;
}

export const ContextForSpacesMap = createContext({} as Controller);

export enum SpacesMapSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export enum SpacesMapInteractionMode {
  CURSOR = 'Cursor',
  SELECTED = 'Selected',
}

export enum SpacesMapIdeaMode {
  DEFAULT = 'Default',
  INFORMATION = 'Information',
}

export enum SpacesMapBubbleMode {
  OFF = 'OFF',
  ON = 'ON',
}

export enum SpacesMapSidebarMediaMode {
  Home = 'Home',
  Gallery = 'Gallery',
  Collection = 'Collection',
}

export enum SpacesMapSidebarContentMode {
  EXPLORER = 'Explorer',
  CHAT_SCENE = 'Chat Scene',
  CHAPTERS = 'Chapters',
}

export enum SpacesMapSidebarMode {
  IDEAS = 'Ideas',
  SCENES = 'Scenes',
  CHAT = 'Chat',
}

export enum SpacesMapLinkMode {
  ON = 'ON',
  OFF = 'OFF',
}

export enum SpacesMapDirectoryMode {
  DEFAULT = 'Default',
  DIRECTORY = 'DIRECTORY',
}

export function useControllerForSpacesMap(): Controller {
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
  const [bubbleMode, setBubbleMode] = useState<SpacesMapBubbleMode>(
    SpacesMapBubbleMode.ON,
  );
  const [directoryMode, setDirectoryMode] = useState<SpacesMapDirectoryMode>(
    SpacesMapDirectoryMode.DEFAULT,
  );
  const [isSwitchOn, setSwitch] = useState(false);
  const [listSceneMode, setListSceneMode] = useState<SpacesMapSidebarMode>(
    SpacesMapSidebarMode.SCENES,
  );
  const [mapMode, setMode] = useState<SpacesMapInteractionMode>(
    SpacesMapInteractionMode.SELECTED,
  );
  const [listMode, setListMode] = useState<SpacesMapSidebarContentMode>(
    SpacesMapSidebarContentMode.CHAPTERS,
  );
  const [linkMode, setLinkMode] = useState<SpacesMapLinkMode>(
    SpacesMapLinkMode.ON,
  );
  const [sidebarMediaMode, changeSidebarMediaMode] = useState(
    SpacesMapSidebarMediaMode.Collection,
  );
  const [sidebarVisibility, setSidebarVisibility] = useState(
    SpacesMapSidebarVisibility.OPEN,
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
    setLinkMode(SpacesMapLinkMode.ON);
    setBubbleMode(SpacesMapBubbleMode.OFF);
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
          setLinkMode(SpacesMapLinkMode.ON);
          setBubbleMode(SpacesMapBubbleMode.ON);
        }
      }
    }, 500);
  };
  const autoSort = async (gapPercentage = 5) => {
    const totalIdeas = ideaListController.state.objs.length;
    const columns = Math.ceil(Math.sqrt(totalIdeas));
    const rows = Math.ceil(totalIdeas / columns);

    const gapWidth = (divWidth * gapPercentage) / 100;
    const gapHeight = (divHeight * gapPercentage) / 100;

    const availableWidth = divWidth - gapWidth * (columns - 1);
    const availableHeight = divHeight - gapHeight * (rows - 1);

    // Calculate square size by taking the minimum of availableWidth/columns and availableHeight/rows
    const ideaSize = Math.min(
      Math.round(availableWidth / columns),
      Math.round(availableHeight / rows),
    );

    loadingController.loadingController.open();

    const editPromises = ideaListController.state.objs.map(
      async (idea, index) => {
        const x = Math.round((index % columns) * (ideaSize + gapWidth));
        const y = Math.round(
          Math.floor(index / columns) * (ideaSize + gapHeight),
        );

        return ideaListController.actions.editActions.edit(idea.id, {
          x: x,
          y: y,
          height: ideaSize, // Set height to the square size
          width: ideaSize, // Set width to the square size
        });
      },
    );

    // Wait for all the promises to complete
    await Promise.all(editPromises);

    // Close the modal after all updates are complete
    loadingController.loadingController.close();
    setSwitch(!isSwitchOn);
  };

  const getAvailableXYWH = () => {
    const totalIdeas = ideaListController.state.objs.length;
    const columns = Math.ceil(Math.sqrt(totalIdeas + 1)); // Add 1 to account for the new item
    const rows = Math.ceil((totalIdeas + 1) / columns);

    const gapWidth = (divWidth * 5) / 100; // Assuming 5% gap
    const gapHeight = (divHeight * 5) / 100; // Assuming 5% gap

    const availableWidth = divWidth - gapWidth * (columns - 1);
    const availableHeight = divHeight - gapHeight * (rows - 1);

    let ideaWidth = Math.round(availableWidth / columns);
    let ideaHeight = Math.round(availableHeight / rows);

    // Set maxWidth and maxHeight to 25% of total divHeight
    const maxDimension = Math.round(divHeight * 0.25);

    // Ensure the calculated width and height do not exceed maxDimension
    ideaWidth = Math.min(ideaWidth, maxDimension);
    ideaHeight = Math.min(ideaHeight, maxDimension);

    // Make width and height identical to maintain a square aspect ratio
    const squareSize = Math.min(ideaWidth, ideaHeight);
    ideaWidth = squareSize;
    ideaHeight = squareSize;

    // Find the next available grid position
    const nextIndex = totalIdeas;
    const x = Math.round((nextIndex % columns) * (ideaWidth + gapWidth));
    const y = Math.round(
      Math.floor(nextIndex / columns) * (ideaHeight + gapHeight),
    );

    // Ensure that the new item fits within the available width and height
    if (x + ideaWidth <= divWidth && y + ideaHeight <= divHeight) {
      return { x, y, width: ideaWidth, height: ideaHeight };
    }

    // Otherwise, place it in the center of the div
    const centerX = Math.round((divWidth - ideaWidth) / 2);
    const centerY = Math.round((divHeight - ideaHeight) / 2);

    return { x: centerX, y: centerY, width: ideaWidth, height: ideaHeight };
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

  return {
    state: {
      directoryMode: directoryMode,
      isSwitchOn: isSwitchOn,
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
        changeSidebarMediaMode(SpacesMapSidebarMediaMode.Home);
      },
      goToGallery: (gallery: GalleryObj) => {
        galleryListController.actions.stateActions.select(gallery);
        changeSidebarMediaMode(SpacesMapSidebarMediaMode.Gallery);
      },
      goToCollection: (collection: GalleryCollectionObj) => {
        collectionListController.actions.stateActions.select(collection);
        changeSidebarMediaMode(SpacesMapSidebarMediaMode.Collection);
      },
      checkContainsSelectedIdea: (idea: IdeaObj) =>
        selectedIdeas.map((idea) => idea.id).includes(idea.id),
      autoSort: autoSort,
      getAvailableXYWH: getAvailableXYWH,
      selectAll: () => {
        setSelectedIdeas(ideaListController.state.objs);
      },
      linkIdeas: linkIdeas,
    },
  };
}
