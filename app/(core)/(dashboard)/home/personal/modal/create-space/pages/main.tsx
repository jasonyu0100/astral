import { ContextForPagable } from '@/logic/contexts/pagination/main';
import { useContext } from 'react';
import { HomePersonalCreateSpaceModalPageOne } from './page-1/main';
import { HomePersonalCreateSpaceModalPageTwo } from './page-2/main';

export function HomePersonalCreateSpaceModalPages() {
  const pagableController = useContext(ContextForPagable);

  return (
    <>
      {pagableController.page === 0 && <HomePersonalCreateSpaceModalPageOne />}
      {pagableController.page === 1 && <HomePersonalCreateSpaceModalPageTwo />}
    </>
  );
}
