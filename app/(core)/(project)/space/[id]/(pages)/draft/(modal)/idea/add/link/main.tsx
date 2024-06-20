import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormSelect } from '@/(components)/(form)/select/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import { useControllerForChapterUpdateItemListFromChapters } from '@/(server)/(controller)/space/chapter/update/item/chapter-list';
import { UrlElem, UrlElemVariant } from '@/(server)/(model)/elements/url/main';
import { useContext, useState } from 'react';

export function SpaceDraftAddUrlIdeaModal() {
  const user = useGlobalUser((state) => state.user);
  const openableController = useContext(ContextForOpenable);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sceneIdeaListController = useContext(ContextForSceneIdeaList);
  const updateListController =
    useControllerForChapterUpdateItemListFromChapters('');
  const [variant, changeVariant] = useState<string>(UrlElemVariant.YOUTUBE);
  const [title, changeTitle] = useState('');
  const [spotifyId, changeSpotifyId] = useState('');
  const [youtubeId, changeYoutubeId] = useState('');
  const [description, changeDescription] = useState<string>('');
  // const [start, changeStart] = useState('0');
  // const [end, changeEnd] = useState('10');

  function extractVideoId(url: string) {
    // Regular expression pattern to match YouTube video IDs
    const pattern =
      /(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    // Find the video ID using the regular expression pattern
    const match = url.match(pattern);

    if (match) {
      const videoId = match[1];
      return videoId;
    } else {
      return url;
    }
  }

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

  async function createIdeaFromYouTube() {
    const idea =
      await sceneIdeaListController.actions.createActions.createFromLink(
        title,
        description,
        0,
        0,
        {
          id: crypto.randomUUID(),
          title: `Youtube ${youtubeId}`,
          url: `https://www.youtube.com/embed/${youtubeId}`,
          variant: UrlElemVariant.YOUTUBE,
        } as UrlElem,
      );
    await updateListController.actions.createActions.createFromChapterSceneIdea(
      user.id,
      chapterListController.state.objId,
      sceneIdeaListController.state.objId,
      idea.id,
    );
  }

  async function createIdeaFromSpotify() {
    const idea =
      await sceneIdeaListController.actions.createActions.createFromLink(
        title,
        description,
        0,
        0,
        {
          id: crypto.randomUUID(),
          title: `Spotify ${spotifyId}`,
          url: `https://open.spotify.com/embed/track/${spotifyId}`,
          variant: UrlElemVariant.SPOTIFY,
        } as UrlElem,
      );
    await updateListController.actions.createActions.createFromChapterSceneIdea(
      user.id,
      chapterListController.state.objId,
      sceneIdeaListController.state.objId,
      idea.id,
    );
  }

  async function createIdea() {
    if (variant === UrlElemVariant.YOUTUBE) {
      await createIdeaFromYouTube();
    } else if (variant === UrlElemVariant.SPOTIFY) {
      await createIdeaFromSpotify();
    }
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Embed Element</FormTitle>
          <FormBody>
            <FormSelect
              title='Variant'
              value={variant}
              onChange={(e) => changeVariant(e.target.value)}
            >
              <option value={UrlElemVariant.YOUTUBE}>YouTube</option>
              <option value={UrlElemVariant.SPOTIFY}>Spotify</option>
            </FormSelect>
            <FormInput
              placeholder='Title'
              title='Title'
              value={title}
              onChange={(e) => changeTitle(e.target.value)}
            />
            <FormInput
              placeholder='Description'
              title='Description'
              value={description}
              onChange={(e) => changeDescription(e.target.value)}
            />
            {variant === UrlElemVariant.YOUTUBE && (
              <>
                <FormInput
                  placeholder='https://www.youtube.com/watch?v=EcomZGuMZis'
                  title='Url'
                  value={youtubeId}
                  onChange={(e) =>
                    changeYoutubeId(extractVideoId(e.target.value))
                  }
                />
                <iframe
                  onDrag={(e) => e.stopPropagation()}
                  style={{ width: '100%', height: '100%' }}
                  src={`https://www.youtube.com/embed/${youtubeId}?controls=1&showinfo=0&modestbranding=0&rel=0&loop=1`}
                  title='YouTube video player'
                />
              </>
            )}
            {variant === UrlElemVariant.SPOTIFY && (
              <>
                <FormInput
                  placeholder='https://open.spotify.com/embed/track/14I47nVJiJt9NCzt7YmnWz'
                  title='Url'
                  value={spotifyId}
                  onChange={(e) =>
                    changeSpotifyId(extractSpotifyTrackId(e.target.value))
                  }
                />
                <iframe
                  src={`https://open.spotify.com/embed/track/${spotifyId}`}
                  width='100%'
                  height='100%'
                  allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                  loading='lazy'
                />
              </>
            )}
          </FormBody>
          <FormFooter>
            <FormButton onClick={createIdea}>Add</FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
