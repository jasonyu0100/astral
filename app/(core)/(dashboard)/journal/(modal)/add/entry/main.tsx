import { FormTextArea } from '@/(components)/(form)/area/main';
import { FormBody } from '@/(components)/(form)/body/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { FormUploadFile } from '@/(components)/(form)/file/upload/upload-file/main';
import { FormFooter } from '@/(components)/(form)/footer/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { useControllerForGalleryCollectionList } from '@/(server)/(controller)/gallery/collection/list';
import { useControllerForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';
import { FileElem } from '@/(server)/(model)/elements/file/main';
import { useContext, useEffect, useState } from 'react';

export function DashboardJournalAddResourceModal() {
  const user = useGlobalUser((state) => state.user);
  const [journalId, setJournalId] = useState('' as string);
  const collectionListController = useControllerForGalleryCollectionList(
    user.journalId,
  );
  const resourceListController = useControllerForCollectionResourceList('');
  const openableController = useContext(ContextForOpenable);
  const [file, changeFile] = useState({} as FileElem);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');

  useEffect(() => {
    setJournalId(user.journalId);
  }, [user.journalId]);

  async function addJournalEntry() {
    if (journalId === '') {
      throw new Error('User does not have a journal');
    }
    const date = new Date().toLocaleDateString();
    const collectionDateCheck = collectionListController.state.objs.filter(
      (collection) => collection.title === date,
    );
    let collection;
    if (
      collectionListController.state.objId === '' ||
      collectionDateCheck.length === 0
    ) {
      collection =
        await collectionListController.actions.createActions.createCollection(
          date,
          `Journal Entry ${date}`,
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
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Add Entry</FormTitle>
          <FormBody>
            <FormInput
              title='Name'
              value={title}
              onChange={(e) => changeTitle(e.target.value)}
            />
            <FormTextArea
              title='Description'
              rows={5}
              value={description}
              onChange={(e) => changeDescription(e.target.value)}
              style={{ resize: 'none' }}
            />
            <FormUploadFile
              label='File'
              onChange={(file) => changeFile(file)}
            />
          </FormBody>
          <FormFooter>
            <FormButton onClick={() => addJournalEntry()}>Add</FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
