import { ContextForPagable } from '@/logic/contexts/pagination/main';
import { useContext } from 'react';
import { HomeCreateCreateSpaceModalPageOne } from './page-1/main';
import { HomeCreateCreateSpaceModalPageTwo } from './page-2/main';

export function HomeCreateCreateSpaceModalPages() {
  const pagableController = useContext(ContextForPagable);

  return (
    <>
      {pagableController.page === 0 && <HomeCreateCreateSpaceModalPageOne />}
      {pagableController.page === 1 && <HomeCreateCreateSpaceModalPageTwo />}
    </>
  );
}
