import { ContextForPagable } from '@/logic/contexts/pagination/main';
import { useContext } from 'react';
import { CreateSpaceModalPageOne } from './page-1/main';
import { CreateSpaceModalPageTwo } from './page-2/main';

export function CreateSpaceModalPages() {
  const pagableController = useContext(ContextForPagable);

  return (
    <>
      {pagableController.page === 0 && <CreateSpaceModalPageOne />}
      {pagableController.page === 1 && <CreateSpaceModalPageTwo />}
    </>
  );
}
