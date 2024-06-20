import { createContext, useState } from 'react';
import { SpaceSeaEditItemForm } from './item/main';
import { SpaceSeaEditUpdateForm } from './update/main';

interface Context {
  complete: boolean;
  updateComplete: (value: boolean) => void;
}

export const EditContext = createContext({} as Context);

export function SpaceSeaCardEdit() {
  const [complete, setComplete] = useState(false);

  const context = {
    complete,
    updateComplete: (value: boolean) => setComplete(value),
  };

  return (
    <>
      <EditContext.Provider value={context}>
        {complete ? <SpaceSeaEditUpdateForm /> : <SpaceSeaEditItemForm />}
      </EditContext.Provider>
    </>
  );
}
