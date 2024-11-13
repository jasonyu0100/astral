import { ContextForPagable } from '@/logic/contexts/pagination/main';
import { useContext } from 'react';
import { HomePersonalCreateFromSourceModalPageOne } from './page-1/main';
import { HomePersonalCreateFromSourceModalPageTwo } from './page-2/main';

export function HomePersonalCreateFromSourceModalPages() {
  const pagableController = useContext(ContextForPagable);

  return (
    <>
      {pagableController.page === 0 && (
        <HomePersonalCreateFromSourceModalPageOne />
      )}
      {pagableController.page === 1 && (
        <HomePersonalCreateFromSourceModalPageTwo />
      )}
    </>
  );
}
