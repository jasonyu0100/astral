import { useControllerForUserMain } from '@/(server)/controller/user/main';
import { UserDpElement } from '@/ui/cover/user/main';

export function SpaceSessionCollaborator({
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
      <UserDpElement fileElem={user?.dp} />
    </div>
  );
}
