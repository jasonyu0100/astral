import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { UserDisplayPictureElement } from '@/components/cover/user/main';
import { useContext } from 'react';

export function SpacesSceneIdeaCollaborators() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);

  return (
    <div className='absolute bottom-[1.5rem] left-[1.5rem] flex flex-col items-center'>
      <UserDisplayPictureElement
        fileElem={loggedInUser?.dp}
        className='h-[3rem] w-[3rem]'
      />
    </div>
  );
}
