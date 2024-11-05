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
import { AstralCheckIcon } from '@/icons/check/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { useContext, useEffect, useState } from 'react';

export function DashboardJournalAddWebsiteUrlModal() {
  const user = useGlobalUser((state) => state.user);
  const [journalId, setJournalId] = useState('' as string);
  const [title, changeTitle] = useState('');
  const [websiteUrl, changeWebsiteUrl] = useState('');
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
        title: websiteUrl,
        url: websiteUrl,
        variant: UrlElementVariant.WEBSITE,
      } as UrlElement,
    );

    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <div className='flex flex-row items-center space-x-[2rem]'>
            <>
              <AstralModalStep>1</AstralModalStep>
              <AstralTextLineInput
                className='w-[400px]'
                placeholder='Enter a website url'
                onChange={(e) => changeWebsiteUrl(e.target.value)}
              />
            </>
            {websiteUrl && (
              <>
                <AstralModalStep>2</AstralModalStep>
                <AstralTextLineInput
                  placeholder='Enter a title'
                  onChange={(e) => changeTitle(e.target.value)}
                />
              </>
            )}
            {websiteUrl && (
              <AstralRoundedActionButton
                onClick={addEntryToJournal}
                className='h-[4rem] w-[4rem]'
              >
                <AstralCheckIcon />
              </AstralRoundedActionButton>
            )}
          </div>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
