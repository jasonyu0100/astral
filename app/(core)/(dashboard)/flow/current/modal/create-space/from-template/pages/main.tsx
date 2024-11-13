import { ContextForPagable } from '@/logic/contexts/pagination/main';
import { useContext } from 'react';
import { FlowCurrentCreateSpaceModalPageOne } from './page-1/main';
import { FlowCurrentCreateSpaceModalPageTwo } from './page-2/main';

export function FlowCurrentCreateSpaceModalPages() {
  const pagableController = useContext(ContextForPagable);

  return (
    <>
      {pagableController.page === 0 && <FlowCurrentCreateSpaceModalPageOne />}
      {pagableController.page === 1 && <FlowCurrentCreateSpaceModalPageTwo />}
    </>
  );
}
