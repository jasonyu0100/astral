import { ContextForGalleryCollectionList } from '@/architecture/controller/gallery/collection/list';
import { ContextForCollectionResourceList } from '@/architecture/controller/gallery/collection/resource/list';
import {
  TextElement,
  TextElementVariant,
} from '@/architecture/model/elements/text/main';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralModalBodyContents } from '@/components/modal/astral/body/action/main';
import { AstralModalBodyAction } from '@/components/modal/astral/body/contents/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralModalStep } from '@/components/step/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
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

  async function createStickyNote() {
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
      <AstralModal>
        <AstralModalBodyWrapper>
          <AstralModalBodyContents>
            <div className='flex w-full flex-row items-center justify-center space-x-[1rem]'>
              <AstralModalStep>1</AstralModalStep>
              <div className='aspect-square h-full bg-yellow-500 p-[2rem]'>
                <textarea
                  placeholder='Enter text here...'
                  className='h-full w-full bg-transparent outline-none placeholder:text-slate-800'
                  onChange={(e) => changeText(e.target.value)}
                />
              </div>
            </div>
          </AstralModalBodyContents>
          <AstralModalBodyAction>
            <AstralRoundedActionButton
              className='h-[4rem] w-[4rem]'
              onClick={createStickyNote}
            >
              <AstralArrowForwardIcon />
            </AstralRoundedActionButton>
          </AstralModalBodyAction>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
