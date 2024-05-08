'use client';
import insideVerse from '@/(utils)/isAuth';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';

function Page() {
  const user = useGlobalUser((state) => state.user);

  return (
    <></>
  );
}

export default insideVerse(Page);
