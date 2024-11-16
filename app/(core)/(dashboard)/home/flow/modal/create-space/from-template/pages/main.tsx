import { ContextForPagable } from '@/logic/contexts/pagination/main';
import { useContext } from 'react';
import { HomeFlowCreateSpaceModalPageOne } from './page-1/main';
import { HomeFlowCreateSpaceModalPageTwo } from './page-2/main';

export function HomeFlowCreateSpaceModalPages() {
  const pagableController = useContext(ContextForPagable);

  return (
    <>
      {pagableController.page === 0 && <HomeFlowCreateSpaceModalPageOne />}
      {pagableController.page === 1 && <HomeFlowCreateSpaceModalPageTwo />}
    </>
  );
}
