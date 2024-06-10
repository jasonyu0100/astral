'use client';
import isVerseAuth from '@/(utils)/isAuth';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { StudioSpacesView } from './view/view';
import {
  ContextForSpaceList,
  useControllerForSpaceList,
} from '@/(server)/(controller)/space/list';

function Page() {
  const user = useGlobalUser((state) => state.user);
  const spaceListController = useControllerForSpaceList(user.id);

  return (
    <ContextForSpaceList.Provider value={spaceListController}>
      <StudioSpacesView />
    </ContextForSpaceList.Provider>
  );
}

export default isVerseAuth(Page);
