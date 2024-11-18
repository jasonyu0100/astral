import { ContextForPagable } from '@/logic/contexts/pagination/main';
import { useContext } from 'react';
import { HomeProjectsCreateSpaceModalPageOne } from './page-1/main';
import { HomeProjectsCreateSpaceModalPageTwo } from './page-2/main';

export function HomeProjectsCreateSpaceModalPages() {
  const pagableController = useContext(ContextForPagable);

  return (
    <>
      {pagableController.page === 0 && <HomeProjectsCreateSpaceModalPageOne />}
      {pagableController.page === 1 && <HomeProjectsCreateSpaceModalPageTwo />}
    </>
  );
}
