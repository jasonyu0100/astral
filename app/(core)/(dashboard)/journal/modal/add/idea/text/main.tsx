import { AstralRoundedActionButton } from '@/components/button/action/main';
import { CustomisableModalContents } from '@/components/modal/general/container/main';
import { CustomisableModal } from '@/components/modal/general/main';
import { AstralModalStep } from '@/components/step/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { ContextForGalleryCollectionList } from '@/server/controller/gallery/collection/list';
import { ContextForCollectionResourceList } from '@/server/controller/gallery/collection/resource/list';
import {
  TextElement,
  TextElementVariant,
} from '@/server/model/elements/text/main';
import { ContextForLoggedInUserObj } from '@/server/model/user/main';
import { useContext, useEffect, useState } from 'react';

export function DashboardJournalAddTextStickyModal() {
  const user = useContext(ContextForLoggedInUserObj);
  const [journalId, setJournalId] = useState('' as string);
  const [variant, changeVariant] = useState<string>(TextElementVariant.STICKY);
  const [title, changeTitle] = useState<string>('');
  const [description, changeDescription] = useState<string>('');
  const [text, changeText] = useState<string>('');
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

    await resourceListController.actions.createActions.createFromText(
      user.id,
      collection?.id || '',
      title,
      description,
      {
        id: crypto.randomUUID(),
        title: title,
        text: text,
        variant: variant,
      } as TextElement,
    );

    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <CustomisableModal>
        <CustomisableModalContents>
          <div className='flex flex-row items-center space-x-[2rem]'>
            <AstralModalStep>1</AstralModalStep>
            <div className='aspect-square h-full bg-yellow-500 p-[2rem]'>
              <textarea
                placeholder='Enter text here...'
                className='h-full w-full bg-transparent outline-none placeholder:text-slate-800'
                onChange={(e) => changeText(e.target.value)}
              />
            </div>
            {text.length > 0 && (
              <AstralRoundedActionButton
                className='h-[4rem] w-[4rem]'
                onClick={addEntryToJournal}
              >
                <AstralArrowForwardIcon />
              </AstralRoundedActionButton>
            )}
          </div>
        </CustomisableModalContents>
      </CustomisableModal>
    </ContextForOpenable.Provider>
  );
}
