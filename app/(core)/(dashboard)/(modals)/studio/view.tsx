import { useContext } from 'react';
import { CreateSpaceModal } from './create-space/main';
import { SpacesModalContext } from './main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { ContextForPagable } from '@/(logic)/contexts/pagination/main';

export function SpacesModalView() {
  const modalContext = useContext(SpacesModalContext);
  return (
    <>
      <ContextForOpenable.Provider value={modalContext.createSpace.openable}>
        <ContextForPagable.Provider value={modalContext.createSpace.pagable}>
          <CreateSpaceModal />
        </ContextForPagable.Provider>
      </ContextForOpenable.Provider>
    </>
  );
}
