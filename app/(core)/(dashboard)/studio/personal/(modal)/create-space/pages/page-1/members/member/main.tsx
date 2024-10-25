import { UserDisplayPictureElement } from '@/components/cover/user/main';
import { useControllerForUserMain } from '@/server/controller/user/main';

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
      <UserDisplayPictureElement fileElem={user?.dp} />
    </div>
  );
}
