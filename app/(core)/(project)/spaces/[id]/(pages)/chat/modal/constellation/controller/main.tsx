import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { useControllerForUnsplash } from '@/api/controller/unsplash/main';
import { ContextForLoading } from '@/components/loading/controller/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { ContextForSceneIdeaList } from '@/server/controller/idea/list';
import { useControllerForIdeaRelationshipListFromChapter } from '@/server/controller/idea/relationship/list-from-chapter';
import { ContextForIdeaSceneList } from '@/server/controller/scene/list';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import {
  exampleFileElement,
  FileElementVariant,
} from '@/server/model/elements/file/main';
import { ElementVariant } from '@/server/model/elements/main';
import { exampleTextElement } from '@/server/model/elements/text/main';
import {
  exampleUrlElement,
  UrlElementVariant,
} from '@/server/model/elements/url/main';
import { exampleIdea, IdeaObj } from '@/server/model/idea/main';
import {
  getFileIdeaBounds,
  getTextIdeaBounds,
  getUrlIdeaBounds,
} from '@/utils/bounds';
import { createContext, useContext, useEffect, useState } from 'react';
import { ContextForSpacesChat } from '../../../controller/main';

export enum GenerateSceneTab {
  TEXT = 'Text',
  ARTICLES = 'Articles',
  MEDIA = 'Media',
  IMAGERY = 'Imagery',
  VAULT = 'Vault',
}

export enum GenerateScenePage {
  PAGE_ONE = 'Page One',
  PAGE_TWO = 'Page Two',
}

interface ControllerState {
  page: GenerateScenePage;
  tab: GenerateSceneTab;
  title: string;
  objective: string;
  articleSearchQuery: string;
  mediaSearchQuery: string;
  imageryKeywords: string;
  textSummary: string;
  textResults: IdeaObj[];
  articleResults: IdeaObj[];
  imageryResults: IdeaObj[];
  mediaResults: IdeaObj[];
  selectedIdeas: IdeaObj[];
}

interface ControllerActions {
  updatePage: (page: GenerateScenePage) => void;
  updateTab: (tab: GenerateSceneTab) => void;
  createMap: () => Promise<void>;
  updateTitle: (title: string) => void;
  updateObjective: (objective: string) => void;
  updateArticleSearchQuery: (query: string) => void;
  updateMediaSearchQuery: (query: string) => void;
  updateImageryKeywords: (keywords: string) => void;
  updateTextSummary: (summary: string) => void;
  updateArticleResults: (results: IdeaObj[]) => void;
  updateImageryResults: (results: IdeaObj[]) => void;
  updateMediaResults: (results: IdeaObj[]) => void;
  updateTextResults: (results: IdeaObj[]) => void;
  updateSelectedIdeas: (selected: IdeaObj[]) => void;
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
  const [page, setPage] = useState(GenerateScenePage.PAGE_ONE);
  // Title, Objective
  const [title, setTitle] = useState('');
  const [objective, setObjective] = useState('');
  // Results
  const [textResults, setTextResults] = useState<IdeaObj[]>([]);
  const [articlesResults, setArticlesResults] = useState<IdeaObj[]>([]);
  const [imageryResults, setImageryResults] = useState<IdeaObj[]>([]);
  const [mediaResults, setMediaResults] = useState<IdeaObj[]>([]);
  // Query
  const [articleSearchQuery, setArticleSearchQuery] = useState('');
  const [mediaSearchQuery, setMediaSearchQuery] = useState('');
  const [imageryKeywords, setImageryKeywords] = useState('');
  const [textSummary, setTextSummary] = useState('');
  // Selected
  const [selectedIdeas, setSelectedIdeas] = useState<IdeaObj[]>([]);

  const loadingController = useContext(ContextForLoading);
  const spacesChatController = useContext(ContextForSpacesChat);
  const openableController = useContext(ContextForOpenable);
  const spaceController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const ideaRelationshipListController =
    useControllerForIdeaRelationshipListFromChapter(
      chapterListController.state.objId,
    );

  const unsplashController = useControllerForUnsplash();

  useEffect(() => {
    if (openableController.opened) {
      spacesChatController.actions
        .summariseConversationIntoTitle()
        .then((title) => setTitle(title));
      spacesChatController.actions
        .summariseConversationIntoObjective()
        .then((objective) => setObjective(objective));
    }
  }, [openableController.opened]);

  useEffect(() => {
    if (openableController.opened) {
      loadingController.loadingController.open();
      if (tab === GenerateSceneTab.TEXT) {
        spacesChatController.actions
          .summariseConversationIntoNotes()
          .then((ideas) => {
            setTextResults(ideas);
            loadingController.loadingController.close();
          });
      } else if (tab === GenerateSceneTab.ARTICLES) {
        spacesChatController.actions
          .summariseConversationIntoQuery()
          .then((query) => {
            setArticleSearchQuery(query);
            searchArticles(query).then(() => {
              loadingController.loadingController.close();
            });
          });
      } else if (tab === GenerateSceneTab.IMAGERY) {
        spacesChatController.actions
          .summariseConversationIntoKeywords()
          .then((keywords) => {
            setImageryKeywords(keywords);
            unsplashController.searchImage(keywords).then((images) => {
              setImageryResults(
                images.map((image: unknown) => ({
                  ...exampleIdea,
                  fileElem: {
                    ...exampleFileElement,
                    src: image.src,
                    variant: FileElementVariant.IMAGE,
                  },
                  variant: ElementVariant.FILE,
                })),
              );
              loadingController.loadingController.close();
            });
          });
      } else if (tab === GenerateSceneTab.MEDIA) {
        spacesChatController.actions
          .summariseConversationIntoSearchTerm()
          .then((searchTerm) => {
            searchYouTubeVideos(searchTerm).then((results) => {
              setMediaResults(
                results.map((result: unknown) => {
                  return {
                    ...exampleIdea,
                    urlElem: {
                      ...exampleUrlElement,
                      url: `https://www.youtube.com/embed/${result.id.videoId}?controls=1&showinfo=0&modestbranding=0&rel=0&loop=1`,
                      variant: UrlElementVariant.YOUTUBE,
                    },
                    variant: ElementVariant.URL,
                  };
                }),
              );
              loadingController.loadingController.close();
            });
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
      const ideas = data.items.map((item: unknown) => {
        return {
          ...exampleIdea,
          urlElem: {
            ...exampleUrlElement,
            title: item.title,
            url: item.link,
            variant: UrlElementVariant.WEBSITE,
          },
          title: item.title,
          variant: ElementVariant.URL,
        };
      });
      setArticlesResults(ideas);
      return ideas; // Return the array of search results, or an empty array if none
    } catch (error) {
      console.error('Error fetching data from Google Custom Search API', error);
      return [];
    }
  };

  async function searchYouTubeVideos(query: string) {
    const apiKey = process.env.GOOGLE_API_KEY; // Use environment variable for API key
    const maxResults = 20; // You can change this value to adjust the number of results
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

    let newScene = sceneListController.state.currentObj;

    console.log(newScene);

    if (selectedIdeas.length === 0) {
      alert('No ideas selected');
      loadingController.loadingController.close();
      openableController.open();
      return;
    }

    if (
      !newScene?.id ||
      newScene.chapterId !== chapterListController.state.objId
    ) {
      console.log('new scene', chapterListController.state.objId);
      newScene = await sceneListController.actions.createActions.createScene(
        title,
        '',
        objective,
        user.id,
        chapterListController.state.objId,
      );
    }

    const virtualScreenWidth = 1200;
    const virtualScreenHeight = 800;

    const getGridDimensions = (totalIdeas) => {
      // Assume a square grid for simplicity
      const gridSize = Math.ceil(Math.sqrt(totalIdeas));
      return { rows: gridSize, cols: gridSize };
    };

    const getIdeaPosition = (index, totalIdeas, width, height) => {
      const { rows, cols } = getGridDimensions(totalIdeas);

      // Calculate row and column for the idea based on index
      const row = Math.floor(index / cols);
      const col = index % cols;

      // Calculate x and y coordinates
      const x = Math.ceil(col * (virtualScreenWidth / cols));
      const y = Math.ceil(row * (virtualScreenHeight / rows));

      // Ensure ideas are centered within their grid cells
      const xPos = Math.ceil(x + (virtualScreenWidth / cols - width) / 2);
      const yPos = Math.ceil(y + (virtualScreenHeight / rows - height) / 2);

      return { xPos, yPos };
    };

    const ideas = await Promise.all(
      selectedIdeas.map(async (idea, index) => {
        let width = 200;
        let height = 200;

        // Determine the width and height of each idea based on its variant
        if (idea.variant === ElementVariant.TEXT) {
          const bounds = await getTextIdeaBounds(
            idea.textElem || exampleTextElement,
          );
          width = bounds.width;
          height = bounds.height;
        } else if (idea.variant === ElementVariant.FILE) {
          const bounds = await getFileIdeaBounds(
            idea.fileElem || exampleFileElement,
          );
          width = bounds.width;
          height = bounds.height;
        } else if (idea.variant === ElementVariant.URL) {
          const bounds = await getUrlIdeaBounds(
            idea.urlElem || exampleUrlElement,
          );
          width = bounds.width;
          height = bounds.height;
        }

        // Calculate the position using the helper function
        const { xPos, yPos } = getIdeaPosition(
          index,
          selectedIdeas.length,
          width,
          height,
        );

        // Create the idea element at the calculated position
        if (idea.variant === ElementVariant.TEXT) {
          return ideaListController.actions.createActions.createIdeaFromTextElement(
            user.id,
            newScene.id,
            idea.title || '',
            idea.description || '',
            xPos,
            yPos,
            width,
            height,
            idea?.textElem || exampleTextElement,
            ideaListController.state.objs.length + index,
          );
        } else if (idea.variant === ElementVariant.FILE) {
          return ideaListController.actions.createActions.createIdeaFromFileElement(
            user.id,
            newScene.id,
            idea.title || '',
            idea.description || '',
            xPos,
            yPos,
            width,
            height,
            idea?.fileElem || exampleFileElement,
            ideaListController.state.objs.length + index,
          );
        } else if (idea.variant === ElementVariant.URL) {
          return ideaListController.actions.createActions.createIdeaFromUrlElement(
            user.id,
            newScene.id,
            idea.title || '',
            idea.description || '',
            xPos,
            yPos,
            width,
            height,
            idea?.urlElem || exampleUrlElement,
            ideaListController.state.objs.length + index,
          );
        }
      }),
    );

    await Promise.all(
      ideas.slice(0, ideas.length - 1).map((idea, index) => {
        const toIdea = ideas[index + 1];
        return ideaRelationshipListController.actions.createActions.createFromIdea(
          idea || exampleIdea,
          toIdea || exampleIdea,
          spaceController.state.objId,
          chapterListController.state.objId,
          newScene.id,
        );
      }),
    );

    setTimeout(() => {
      window.location.href = `${spacesMap.spaces.id.scene.link(
        spaceController.state.objId,
      )}?chapter=${chapterListController.state.objId}&scene=${newScene.id}`;
    }, 1000);
  }

  return {
    state: {
      page: page,
      tab: tab,
      title: title,
      objective: objective,
      articleSearchQuery: articleSearchQuery,
      imageryKeywords: imageryKeywords,
      mediaSearchQuery: mediaSearchQuery,
      textSummary: textSummary,
      textResults: textResults,
      articleResults: articlesResults,
      imageryResults: imageryResults,
      mediaResults: mediaResults,
      selectedIdeas: selectedIdeas,
    },
    actions: {
      updateTitle: (title: string) => setTitle(title),
      updateObjective: (objective: string) => setObjective(objective),
      updatePage: (page: GenerateScenePage) => setPage(page),
      createMap: createMap,
      updateTab: (tab: GenerateSceneTab) => setTab(tab),
      updateArticleSearchQuery: (query: string) => setArticleSearchQuery(query),
      updateMediaSearchQuery: (query: string) => setMediaSearchQuery(query),
      updateImageryKeywords: (keywords: string) => setImageryKeywords(keywords),
      updateTextSummary: (summary: string) => setTextSummary(summary),
      updateArticleResults: (results: IdeaObj[]) => setArticlesResults(results),
      updateImageryResults: (results: IdeaObj[]) => setImageryResults(results),
      updateMediaResults: (results: IdeaObj[]) => setMediaResults(results),
      updateTextResults: (results: IdeaObj[]) => setTextResults(results),
      updateSelectedIdeas: (selected: IdeaObj[]) => setSelectedIdeas(selected),
    },
  };
}
