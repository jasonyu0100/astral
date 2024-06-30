import { FormContainer } from '@/(components)/(form)/main';
import { FormTitle } from '@/(components)/(form)/title/main';
import { PolaroidModal } from '@/(components)/(modal)/polaroid/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { ContextForPagable } from '@/(logic)/contexts/pagination/main';
import { useContext } from 'react';
import {
  ContextForCreateSpace,
  useControllerForCreateSpace,
} from './(controller)/create-space/main';
import { CreateSpaceModalFooter } from './footer/main';
import { CreateSpaceModalPages } from './pages/main';

export function CreateSpaceModalView() {
  const createSpaceController = useControllerForCreateSpace();
  const pagableController = useContext(ContextForPagable);
  const openableController = useContext(ContextForOpenable);

  return (
    <ContextForCreateSpace.Provider value={createSpaceController}>
      <ContextForOpenable.Provider value={openableController}>
        <ContextForPagable.Provider value={pagableController}>
          <PolaroidModal>
            <FormContainer>
              <FormTitle>Create Space</FormTitle>
              <CreateSpaceModalPages />
              <CreateSpaceModalFooter />
            </FormContainer>
          </PolaroidModal>
        </ContextForPagable.Provider>
      </ContextForOpenable.Provider>
    </ContextForCreateSpace.Provider>
  );
}
