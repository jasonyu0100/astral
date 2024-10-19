import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { useControllerForSceneIdeaList } from '@/(server)/controller/idea/list';
import { useControllerForIdeaRelationshipListFromChapter } from '@/(server)/controller/idea/relationship/list-from-chapter';
import { useControllerForIdeaSceneList } from '@/(server)/controller/scene/list';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import {
  exampleTextElem,
  TextElemVariant,
} from '@/(server)/model/elements/text/main';
import { IdeaObj } from '@/(server)/model/idea/main';
import { useControllerForUnsplash } from '@/api/controller/unsplash/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { ContextForLoading } from '@/ui/loading/controller/main';
import { getTextIdeaBounds } from '@/utils/bounds';
import { createContext, useContext, useEffect, useState } from 'react';
import { ContextForSpacesSpace } from '../../../controller/main';

export enum GenerateSceneTab {
  TEXT = 'Text',
  ARTICLES = 'Articles',
  MEDIA = 'Media',
  IMAGERY = 'Imagery',
  VAULT = 'Vault',
}

interface ControllerState {
  tab: GenerateSceneTab;
  searchQuery: string;
  keywords: string;
  stickies: string[];
  searchResults: unknown[];
  imageResults: unknown[];
  videoResults: unknown[];
  selected: IdeaObj[];
}

interface ControllerActions {
  createMap: () => Promise<void>;
  editSticky: (index: number, text: string) => void;
  updateTab: (tab: GenerateSceneTab) => void;
  updateQuery: (query: string) => void;
  updateSelected: (selected: IdeaObj[]) => void;
}

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

export const ContextForGenerateSceneController = createContext(
  {} as Controller,
);

export function useGenerateSceneController(): Controller {
  const user = useGlobalUser((state) => state.user);
  const [tab, setTab] = useState(GenerateSceneTab.TEXT);
  const [stickies, setStickies] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState([]);
  const [imageResults, setImageResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [videoResults, setVideoResults] = useState([]);
  const [keywords, setKeywords] = useState('');
  const [selected, setSelected] = useState<IdeaObj[]>([]);

  const loadingController = useContext(ContextForLoading);
  const spacesSpaceController = useContext(ContextForSpacesSpace);
  const openableController = useContext(ContextForOpenable);
  const spaceController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sceneListController = useControllerForIdeaSceneList('');
  const ideaListController = useControllerForSceneIdeaList('');
  const ideaRelationshipListController =
    useControllerForIdeaRelationshipListFromChapter(
      chapterListController.state.objId,
    );

  const unsplashController = useControllerForUnsplash();

  useEffect(() => {
    if (openableController.opened) {
      loadingController.loadingController.open();
      if (tab === GenerateSceneTab.TEXT) {
        spacesSpaceController.actions
          .summariseConversationIntoNotes()
          .then((stickies) => {
            setStickies(stickies.map((sticky) => sticky.text));
            loadingController.loadingController.close();
          });
      } else if (tab === GenerateSceneTab.ARTICLES) {
        spacesSpaceController.actions
          .summariseConversationIntoQuery()
          .then((query) => {
            setSearchQuery(query);
            searchArticles(query).then(() => {
              loadingController.loadingController.close();
            });
          });
      } else if (tab === GenerateSceneTab.IMAGERY) {
        spacesSpaceController.actions
          .summariseConversationIntoKeywords()
          .then((keywords) => {
            setKeywords(keywords);
            unsplashController.searchImage(keywords).then((images) => {
              setImageResults(images);
              loadingController.loadingController.close();
            });
          });
      } else if (tab === GenerateSceneTab.MEDIA) {
        spacesSpaceController.actions
          .summariseConversationIntoSearchTerm()
          .then((searchTerm) => {
            searchYouTubeVideos(searchTerm).then((result) => {
              setVideoResults(result);
              console.log(result);
              loadingController.loadingController.close();
            });
          });
      } else if (tab === GenerateSceneTab.VAULT) {
        searchArticles('how to create a map').then(() => {
          loadingController.loadingController.close();
        });
      } else {
        loadingController.loadingController.open();
      }
    }
  }, [openableController.opened, tab]);

  const searchArticles = async (query: string) => {
    const searchEngineId = '4562e5a04e0824515';
    const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${searchEngineId}&q=${encodeURIComponent(query)}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);
      setSearchResults(data.items || []);
      return data.items || []; // Return the array of search results, or an empty array if none
    } catch (error) {
      console.error('Error fetching data from Google Custom Search API', error);
      return [];
    }
  };

  async function searchYouTubeVideos(query: string) {
    const apiKey = process.env.GOOGLE_API_KEY; // Use environment variable for API key
    const maxResults = 5; // You can change this value to adjust the number of results
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${encodeURIComponent(query)}&part=snippet&type=video&maxResults=${maxResults}`;

    try {
      // Fetch data from the YouTube API
      console.log(url);
      const response = await fetch(url);

      // Handle errors if the request was unsuccessful
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      // Parse the JSON response
      const data = await response.json();

      // Log and return the array of video search results or an empty array if none
      console.log(data);
      return data.items || []; // Return search results, default to an empty array if none
    } catch (error) {
      // Log any errors encountered during the request
      console.error('Error fetching data from YouTube API', error);
    }
  }

  async function createMap() {
    openableController.close();
    loadingController.loadingController.open();

    const newScene =
      await sceneListController.actions.createActions.createScene(
        'Map',
        'A map of the scene',
        'A map of the scene',
        user.id,
        chapterListController.state.objId,
      );

    const ideas = await Promise.all(
      stickies.map(async (sticky, index) => {
        const title = `Step ${index + 1}`;
        const description = sticky;
        const text = sticky;
        const variant = TextElemVariant.STICKY;
        const textElem = {
          ...exampleTextElem,
          title: title,
          text: text,
          variant: variant,
        };
        const { width, height } = await getTextIdeaBounds(textElem);

        return ideaListController.actions.createActions.createIdeaFromTextElement(
          user.id,
          newScene.id,
          title,
          description,
          Math.ceil(75 + Math.random() * 150),
          Math.ceil(75 + Math.random() * 150),
          width,
          height,
          textElem,
          ideaListController.state.objs.length,
        );
      }),

      // TODO Bound within box and arrange
    );

    await Promise.all(
      ideas.slice(0, ideas.length - 1).map((idea, index) => {
        const toIdea = ideas[index + 1];
        return ideaRelationshipListController.actions.createActions.createFromIdea(
          idea,
          toIdea,
          spaceController.state.objId,
          chapterListController.state.objId,
          newScene.id,
        );
      }),
    );

    window.location.href = `${spacesMap.spaces.id.map.link(
      spaceController.state.objId,
    )}?chapter=${chapterListController.state.objId}&scene=${newScene.id}`;
  }

  function editSticky(index: number, text: string) {
    setStickies(
      stickies.map((sticky, i) => {
        if (i === index) {
          return text;
        }
        return sticky;
      }),
    );
  }

  return {
    state: {
      tab,
      stickies,
      searchResults,
      imageResults,
      searchQuery,
      keywords,
      videoResults,
      selected,
    },
    actions: {
      updateTab: (tab: GenerateSceneTab) => setTab(tab),
      updateQuery: (query: string) => setSearchQuery(query),
      createMap,
      editSticky,
      updateSelected: (selected: IdeaObj[]) => setSelected(selected),
    },
  };
}
