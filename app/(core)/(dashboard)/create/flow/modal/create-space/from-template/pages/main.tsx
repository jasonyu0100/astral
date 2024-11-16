import { ContextForPagable } from '@/logic/contexts/pagination/main';
import { useContext } from 'react';
import { CreateFlowCreateSpaceModalPageOne } from './page-1/main';
import { CreateFlowCreateSpaceModalPageTwo } from './page-2/main';

export function CreateFlowCreateSpaceModalPages() {
  const pagableController = useContext(ContextForPagable);

  return (
    <>
      {pagableController.page === 0 && <CreateFlowCreateSpaceModalPageOne />}
      {pagableController.page === 1 && <CreateFlowCreateSpaceModalPageTwo />}
    </>
  );
}
