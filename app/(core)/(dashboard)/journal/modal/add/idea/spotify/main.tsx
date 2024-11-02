import { ContextForGalleryCollectionList } from '@/architecture/controller/gallery/collection/list';
import { ContextForCollectionResourceList } from '@/architecture/controller/gallery/collection/resource/list';
import {
  UrlElement,
  UrlElementVariant,
} from '@/architecture/model/elements/url/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralModalStep } from '@/components/step/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { useContext, useEffect, useState } from 'react';

export function DashboardJournalAddSpotifyUrlModal() {
  const user = useGlobalUser((state) => state.user);
  const [journalId, setJournalId] = useState('' as string);
  const [title, changeTitle] = useState('');
  const [spotifyId, changeSpotifyId] = useState('');
  const [description, changeDescription] = useState<string>('');
  const collectionListController = useContext(ContextForGalleryCollectionList);
  const resourceListController = useContext(ContextForCollectionResourceList);
  const openableController = useContext(ContextForOpenable);

  useEffect(() => {
    setJournalId(user.journalId);
  }, [user.journalId]);

  async function addEntryToJournal() {
    if (journalId === '') {
      throw new Error('User does not have a journal');
    }

    const todaysDate = new Date().toLocaleDateString();
    const collectionDateCheck = collectionListController.state.objs.filter(
      (collection) => collection.title === todaysDate,
    );
    const dateCheck = collectionDateCheck.length === 0;

    let collection;
    if (dateCheck || collectionListController.state.objId === '') {
      collection =
        await collectionListController.actions.createActions.createCollection(
          todaysDate,
          `Journal Entry ${todaysDate}`,
          journalId,
        );
    } else {
      collection = collectionDateCheck.at(0);
    }

    await resourceListController.actions.createActions.createFromUrl(
      user.id,
      collection?.id || '',
      title,
      description,
      {
        id: crypto.randomUUID(),
        title: `Spotify ${spotifyId}`,
        url: `https://open.spotify.com/embed/track/${spotifyId}`,
        variant: UrlElementVariant.SPOTIFY,
      } as UrlElement,
    );

    openableController.close();
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
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <div className='flex flex-row items-center space-x-[2rem]'>
            <AstralModalStep>1</AstralModalStep>
            <AstralTextLineInput
              placeholder='Enter a spotify url'
              title='Url'
              value={spotifyId}
              onChange={(e) =>
                changeSpotifyId(extractSpotifyTrackId(e.target.value))
              }
            />
            {spotifyId && (
              <>
                <AstralModalStep>2</AstralModalStep>
                <div className='max-h-[400px] w-full'>
                  <iframe
                    src={`https://open.spotify.com/embed/track/${spotifyId}`}
                    style={{ width: '100%', height: '400px' }}
                    allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                    loading='lazy'
                  />
                </div>
                <AstralRoundedActionButton
                  className='h-[4rem] w-[4rem]'
                  onClick={addEntryToJournal}
                >
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
