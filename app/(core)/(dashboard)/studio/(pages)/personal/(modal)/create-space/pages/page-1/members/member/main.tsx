import { useControllerForUserMain } from '@/(server)/controller/user/main';
import { ProfileCover } from '@/ui/(element)/profile/main';

export function CreateSpaceCollaborator({
  connectedId,
  onClick,
}: {
  connectedId: string;
  onClick: () => void;
}) {
  const userController = useControllerForUserMain(connectedId);
  const user = userController.state.obj;

  return (
    <div onClick={onClick} className='cursor-pointer'>
      <ProfileCover fileElem={user?.dp} />
    </div>
  );
}
