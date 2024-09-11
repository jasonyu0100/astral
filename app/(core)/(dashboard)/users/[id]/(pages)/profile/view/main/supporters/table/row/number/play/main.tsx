import { userProfileMap } from '@/(core)/(profile)/users/[id]/map';
import { ContextForUserObj } from '@/(server)/model/user/main';
import { AstralPlayIcon } from '@/icons/play/main';
import { useContext } from 'react';

export function UserProfileSupportersNumberPlay() {
  const user = useContext(ContextForUserObj);

  return (
    <a href={userProfileMap.profile.link(user.id)}>
      <AstralPlayIcon />
    </a>
  );
}
