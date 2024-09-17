import { ContextForSpacesMap } from '@/(core)/(project)/spaces/[id]/(pages)/map/controller/main';
import { exampleFileElems } from '@/(server)/model/elements/file/main';
import { UserDisplayPictureElement } from '@/ui/cover/user/main';
import { useContext } from 'react';

export function CommonSidebarMinimisedFavoredList() {
  const mapController = useContext(ContextForSpacesMap);

  return (
    <div className='flex w-full flex-shrink-0 flex-col items-end space-y-[2rem] overflow-hidden rounded-full'>
      {exampleFileElems.map((fileElem) => (
        <div
          onClick={() => {
            mapController.actions.autoSort();
            console.log('clicked');
          }}
        >
          <UserDisplayPictureElement fileElem={fileElem} />
        </div>
      ))}
    </div>
  );
}
