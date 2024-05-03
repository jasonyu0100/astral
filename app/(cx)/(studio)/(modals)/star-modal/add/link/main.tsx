import { FormBody } from '@/(pkgs)/(form)/body/main';
import { FormButton } from '@/(pkgs)/(form)/button/main';
import { FormFooter } from '@/(pkgs)/(form)/footer/main';
import { FormContainer } from '@/(pkgs)/(form)/main';
import { FormTitle } from '@/(pkgs)/(form)/title/main';
import { Modal } from '@/(pkgs)/(modal)/main';
import { useContext, useState } from 'react';
import { StarModalContext } from '../../main';
import {
  LinkObj,
  LinkVariant,
} from '@/(lgx)/internal/model/resource/link/main';
import { FormSelect } from '@/(pkgs)/(form)/select/main';
import { FormInput } from '@/(pkgs)/(form)/input/main';
import { StarsHandlerContext } from '@/(lgx)/internal/handler/stars/main';

export function AddLinkStarModal() {
  const modalContext = useContext(StarModalContext);
  const { opened, close } = modalContext.addLinkStarModal;
  const starsHandler = useContext(StarsHandlerContext);
  const [variant, changeVariant] = useState<string>(LinkVariant.YOUTUBE);
  const [title, changeTitle] = useState('');
  const [spotifyId, changeSpotifyId] = useState('');
  const [youtubeId, changeYoutubeId] = useState('');
  const [description, changeDescription] = useState<string>('');
  const [start, changeStart] = useState('0');
  const [end, changeEnd] = useState('10');

  function extractVideoId(url: string) {
    // Regular expression pattern to match YouTube video IDs
    const pattern =
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

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

  return (
    <Modal isOpen={opened} onClose={() => close()}>
      <FormContainer>
        <FormTitle>Embed Element</FormTitle>
        <FormBody>
          <FormSelect
            title='Variant'
            value={variant}
            onChange={(e) => changeVariant(e.target.value)}
          >
            <option value={LinkVariant.YOUTUBE}>YouTube</option>
            <option value={LinkVariant.SPOTIFY}>Spotify</option>
          </FormSelect>
          <FormInput
            placeholder='Title'
            title='Title'
            value={title}
            onChange={(e) => changeTitle(e.target.value)}
          />
          {variant === LinkVariant.YOUTUBE && (
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
          {variant === LinkVariant.SPOTIFY && (
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
          <FormButton
            onClick={() => {
              if (variant === LinkVariant.YOUTUBE) {
                starsHandler.starActions.createFromLink(title, description, 0, 0, {
                  id: '0',
                  title: 'passion.png',
                  url: `https://www.youtube.com/embed/${youtubeId}`,
                  variant: LinkVariant.YOUTUBE,
                } as LinkObj);
              } else if (variant === LinkVariant.SPOTIFY) {
                starsHandler.starActions.createFromLink(title, description, 0, 0, {
                  id: '0',
                  title: 'passion.png',
                  url: `https://open.spotify.com/embed/track/${spotifyId}`,
                  variant: LinkVariant.SPOTIFY,
                } as LinkObj);
              }
              close();
            }}
          >
            Add
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
