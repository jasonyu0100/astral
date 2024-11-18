import { ContextForPagable } from '@/logic/contexts/pagination/main';
import { useContext } from 'react';
import { HomeProjectsCreateFromSourceModalPageOne } from './page-1/main';
import { HomeProjectsCreateFromSourceModalPageTwo } from './page-2/main';

export function HomeProjectsCreateFromSourceModalPages() {
  const pagableController = useContext(ContextForPagable);

  return (
    <>
      {pagableController.page === 0 && (
        <HomeProjectsCreateFromSourceModalPageOne />
      )}
      {pagableController.page === 1 && (
        <HomeProjectsCreateFromSourceModalPageTwo />
      )}
    </>
  );
}
