import { useControllerForSpaceMain } from '@/(server)/(controller)/space/main';
import { useControllerForUserMain } from '@/(server)/(controller)/user/main';
import { ContextForSpaceObj } from '@/(server)/(model)/space/main';
import { ContextForSpaceMemberObj } from '@/(server)/(model)/space/member/main';
import { ContextForUserObj } from '@/(server)/(model)/user/main';
import { useContext } from 'react';
import { StudioSpacesRowCategory } from './category/main';
import { StudioSpacesRowDate } from './date/main';
import { StudioSpacesRowDays } from './day/main';
import { StudioSpacesRowInfo } from './info/main';
import { StudioSpacesRowNumber } from './number/main';
import { StudioSpacesRowStat } from './stat/main';

export function StudioSpacesRow() {
  const memberObj = useContext(ContextForSpaceMemberObj);
  const spaceController = useControllerForSpaceMain(memberObj.spaceId);
  const userController = useControllerForUserMain(
    spaceController.state.obj.userId,
  );

  return (
    <ContextForSpaceObj.Provider value={spaceController.state.obj}>
      <ContextForUserObj.Provider value={userController.state.obj}>
        <div className='grid w-full grid-cols-7 py-[2rem]'>
          <StudioSpacesRowNumber />
          <StudioSpacesRowInfo />
          <StudioSpacesRowCategory />
          <StudioSpacesRowStat />
          <StudioSpacesRowDays />
          <StudioSpacesRowDate />
        </div>
      </ContextForUserObj.Provider>
    </ContextForSpaceObj.Provider>
  );
}
