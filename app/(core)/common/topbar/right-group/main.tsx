import { userMap } from '@/(core)/(dashboard)/user/[id]/map';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { AstralPaletteIcon } from '@/icons/palette/main';
import { AstralSettingsIcon } from '@/icons/settings/main';
import { useContext, useEffect, useState } from 'react';
import { ContextForCommonTopbarModals } from '../modals/controller/main';
import { TopbarAvatar } from './avatar/main';

export function TopbarRightGroup() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const commonTopBarModalsController = useContext(ContextForCommonTopbarModals);
  const [userId, setUserId] = useState<string>('0');

  useEffect(() => {
    setUserId(loggedInUser?.id);
  }, [loggedInUser]);

  return (
    <>
      <div className='ml-auto flex flex-row items-center space-x-[2rem]'>
        <AstralPaletteIcon
          onClick={() => {
            commonTopBarModalsController.userThemeModal.open();
          }}
        />
        <AstralSettingsIcon
          onClick={() => {
            commonTopBarModalsController.userThemeModal.open();
          }}
        />
        <TopbarAvatar href={userMap.profile.link(userId)} />
      </div>
    </>
  );
}
