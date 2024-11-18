'use client';
import { useControllerForUserPostListFromUser } from '@/architecture/controller/post/list-from-user';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { glassFx, roundedFx } from '@/style/data';
import PrivateAstralPage from '@/utils/private-astral-page';
import { useState } from 'react';

function Page() {
  const loggedInUser = useGlobalUser((state) => state.user);
  const postListController = useControllerForUserPostListFromUser(
    loggedInUser.id,
  );

  const [url, setUrl] = useState('');

  return (
    <>
      <div style={{ height: '100%' }}>
        <GlassWindowFrame
          roundedFx={roundedFx['rounded-container']}
          className='w-full overflow-auto'
        >
          <GlassWindowContents className='flex flex-col overflow-auto p-[2rem]'>
            <p className='text-xl font-bold text-slate-300'>Url</p>
            <AstralTextLineInput
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-20']} />
        </GlassWindowFrame>
      </div>
    </>
  );
}

export default PrivateAstralPage(Page);
