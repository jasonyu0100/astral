import { useContext } from 'react';
import { SpaceSessionEditPrev } from '../../(common)/icon/prev/main';
import { EditContext } from '../../main';

export function SpacesSessionSessionLeft() {
  const { updateComplete } = useContext(EditContext);

  return (
    <SpaceSessionEditPrev
      onClick={() => {
        updateComplete(false);
      }}
    />
  );
}
