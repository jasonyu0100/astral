import { ContextForGalleryCollectionList } from '@/(server)/controller/gallery/collection/list';
import { ContextForCollectionResourceList } from '@/(server)/controller/gallery/collection/resource/list';
import { UrlElem, UrlElemVariant } from '@/(server)/model/elements/url/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { CustomisableModalContents } from '@/ui/modal/general/container/main';
import { CustomisableModal } from '@/ui/modal/general/main';
import { AstralModalStep } from '@/ui/step/main';
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
        variant: UrlElemVariant.SPOTIFY,
      } as UrlElem,
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
      <CustomisableModal>
        <CustomisableModalContents className='h-1/2'>
          <div className='flex flex-row items-center space-x-[4rem]'>
            <div className='flex flex-row items-center space-x-[2rem]'>
              <AstralModalStep>1</AstralModalStep>
              <input
                placeholder='https://open.spotify.com/embed/track/14I47nVJiJt9NCzt7YmnWz'
                defaultValue='https://open.spotify.com/embed/track/14I47nVJiJt9NCzt7YmnWz'
                title='Url'
                value={spotifyId}
                onChange={(e) =>
                  changeSpotifyId(extractSpotifyTrackId(e.target.value))
                }
                className='h-[3rem] w-full flex-shrink-0 border-b border-slate-300 border-opacity-30 bg-transparent text-slate-300 outline-none'
              />
            </div>
            {spotifyId && (
              <>
                <div className='flex flex-row items-center space-x-[2rem]'>
                  <AstralModalStep>2</AstralModalStep>
                  <div className='max-h-[400px] w-full'>
                    <iframe
                      src={`https://open.spotify.com/embed/track/${spotifyId}`}
                      style={{ width: '100%', height: '400px' }}
                      allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                      loading='lazy'
                    />
                  </div>
                </div>
                <div className='flex flex-row items-center space-x-[2rem]'>
                  <div
                    onClick={addEntryToJournal}
                    className='flex h-[4rem] w-[4rem] flex-shrink-0 items-center justify-center rounded-full bg-blue-500'
                  >
                    <AstralArrowForwardIcon />
                  </div>
                  <p className='text-2xl font-bold text-slate-300'>
                    Add Spotify
                  </p>
                </div>
              </>
            )}
          </div>
        </CustomisableModalContents>
      </CustomisableModal>
    </ContextForOpenable.Provider>
  );
}
