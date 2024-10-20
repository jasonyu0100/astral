import { ContextForGalleryCollectionList } from '@/(server)/controller/gallery/collection/list';
import { ContextForCollectionResourceList } from '@/(server)/controller/gallery/collection/resource/list';
import { FileElem } from '@/(server)/model/elements/file/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { AstralButtonRoundedAction } from '@/ui/button/action/main';
import { FormUploadFile } from '@/ui/form/file/upload/upload-file/main';
import { AstralTextLineInput } from '@/ui/input/line/main';
import { CustomisableModalContents } from '@/ui/modal/general/container/main';
import { CustomisableModal } from '@/ui/modal/general/main';
import { AstralModalStep } from '@/ui/step/main';
import { useContext, useEffect, useState } from 'react';

export function DashboardJournalAddFileModal() {
  const user = useGlobalUser((state) => state.user);
  const [journalId, setJournalId] = useState('' as string);
  const [title, changeTitle] = useState('' as string);
  const [description, changeDescription] = useState<string>('');
  const [file, changeFile] = useState({} as FileElem);
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

    await resourceListController.actions.createActions.createFromFile(
      user.id,
      collection?.id || '',
      title,
      description,
      file,
    );

    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <CustomisableModal>
        <CustomisableModalContents className='h-1/2'>
          <div className='flex flex-row space-x-[4rem]'>
            <div className='flex flex-row items-center space-x-[2rem]'>
              <AstralModalStep>1</AstralModalStep>
              <FormUploadFile onChange={(file) => changeFile(file)} />
            </div>
            {file.id && (
              <div className='flex flex-row items-center space-x-[2rem]'>
                <AstralModalStep>2</AstralModalStep>
                <AstralTextLineInput
                  placeholder='Enter the title of the idea'
                  value={title}
                  onChange={(e) => changeTitle(e.target.value)}
                />
              </div>
            )}
            {file.id && title.length > 0 && (
              <div className='flex flex-row items-center space-x-[2rem]'>
                <AstralButtonRoundedAction
                  className='h-[4rem] w-[4rem]'
                  onClick={addEntryToJournal}
                >
                  <AstralCheckIcon />
                </AstralButtonRoundedAction>
                <p className='text-2xl font-bold text-slate-300'>
                  Add File Idea
                </p>
              </div>
            )}
          </div>
        </CustomisableModalContents>
      </CustomisableModal>
    </ContextForOpenable.Provider>
  );
}
