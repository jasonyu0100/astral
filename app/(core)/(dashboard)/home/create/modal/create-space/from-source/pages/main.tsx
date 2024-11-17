import { ContextForPagable } from '@/logic/contexts/pagination/main';
import { useContext } from 'react';
import { HomeCreateCreateFromSourceModalPageOne } from './page-1/main';
import { HomeCreateCreateFromSourceModalPageTwo } from './page-2/main';

export function HomeCreateCreateFromSourceModalPages() {
  const pagableController = useContext(ContextForPagable);

  return (
    <>
      {pagableController.page === 0 && (
        <HomeCreateCreateFromSourceModalPageOne />
      )}
      {pagableController.page === 1 && (
        <HomeCreateCreateFromSourceModalPageTwo />
      )}
    </>
  );
}
