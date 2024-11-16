import { ContextForPagable } from '@/logic/contexts/pagination/main';
import { useContext } from 'react';
import { CreateSpacesCreateSpaceModalPageOne } from './page-1/main';
import { CreateSpacesCreateSpaceModalPageTwo } from './page-2/main';

export function CreateSpacesCreateSpaceModalPages() {
  const pagableController = useContext(ContextForPagable);

  return (
    <>
      {pagableController.page === 0 && <CreateSpacesCreateSpaceModalPageOne />}
      {pagableController.page === 1 && <CreateSpacesCreateSpaceModalPageTwo />}
    </>
  );
}
