import { ContextForPagable } from '@/logic/contexts/pagination/main';
import { useContext } from 'react';
import { CreateSpacesCreateFromSourceModalPageOne } from './page-1/main';
import { CreateSpacesCreateFromSourceModalPageTwo } from './page-2/main';

export function CreateSpacesCreateFromSourceModalPages() {
  const pagableController = useContext(ContextForPagable);

  return (
    <>
      {pagableController.page === 0 && (
        <CreateSpacesCreateFromSourceModalPageOne />
      )}
      {pagableController.page === 1 && (
        <CreateSpacesCreateFromSourceModalPageTwo />
      )}
    </>
  );
}
