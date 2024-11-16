import { ContextForUserActivityListFromChapter } from '@/architecture/controller/activity/list-from-chapter';
import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { ContextForIdeaSceneList } from '@/architecture/controller/scene/list';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import {
  UrlElement,
  UrlElementVariant,
} from '@/architecture/model/elements/url/main';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralModalStep } from '@/components/step/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { getUrlIdeaBounds } from '@/utils/bounds';
import { useContext, useState } from 'react';

export function SpacesIdeasAddSpotifyUrlModal() {
  const spaceController = useContext(ContextForSpaceMain);
  const user = useContext(ContextForLoggedInUserObj);
  const openableController = useContext(ContextForOpenable);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const activityListController = useContext(
    ContextForUserActivityListFromChapter,
  );
  const [title, changeTitle] = useState('');
  const [spotifyId, changeSpotifyId] = useState('');
  const [description, changeDescription] = useState<string>('');

  function extractSpotifyTrackId(url: string) {
    // Regular expression pattern to match Spotify track IDs
    const pattern = /\/track\/(\w+)/;

    // Find the track ID using the regular expression pattern
    const match = url.match(pattern);

    if (match) {
      const trackId = match[1];
      return trackId;
    } else {
      return url;
    }
  }

  async function createIdeaFromSpotify() {
    const urlIdea = {
      id: crypto.randomUUID(),
      title: `Spotify ${spotifyId}`,
      url: `https://open.spotify.com/embed/track/${spotifyId}`,
      variant: UrlElementVariant.SPOTIFY,
    } as UrlElement;

    const { width, height } = getUrlIdeaBounds(urlIdea);

    const idea =
      await ideaListController.actions.createActions.createIdeaFromUrlElement(
        user.id,
        sceneListController.state.objId,
        title,
        description,
        Math.ceil(Math.random() * 200),
        Math.ceil(Math.random() * 200),
        width,
        height,
        {
          id: crypto.randomUUID(),
          title: `Spotify ${spotifyId}`,
          url: `https://open.spotify.com/embed/track/${spotifyId}`,
          variant: UrlElementVariant.SPOTIFY,
        } as UrlElement,
        ideaListController.state.objs.length,
      );
    await activityListController.actions.createActions.createFromChapterSceneIdea(
      user.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      sceneListController.state.objId,
      idea.id,
    );
  }

  async function createIdea() {
    await createIdeaFromSpotify();
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <div className='flex flex-row items-center space-x-[2rem]'>
            <AstralModalStep>1</AstralModalStep>
            <AstralTextLineInput
              placeholder='Enter a Spotify Url'
              title='Url'
              value={spotifyId}
              onChange={(e) =>
                changeSpotifyId(extractSpotifyTrackId(e.target.value))
              }
            />
            {spotifyId && (
              <>
                <AstralModalStep>2</AstralModalStep>
                <div className='min-w-[400px]'>
                  <iframe
                    src={`https://open.spotify.com/embed/track/${spotifyId}`}
                    style={{ width: '100%', height: '400px' }}
                    allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                    loading='lazy'
                  />
                </div>
                <AstralRoundedActionButton onClick={createIdea}>
                  <AstralArrowForwardIcon />
                </AstralRoundedActionButton>
              </>
            )}
          </div>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
