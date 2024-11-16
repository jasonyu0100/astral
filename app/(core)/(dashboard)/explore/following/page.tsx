'use client';
import { useControllerForUserPostListFromUser } from '@/architecture/controller/post/list-from-user';
import { EmptyMain } from '@/components/empty/main';
import { useGlobalUser } from '@/logic/store/user/main';
import PrivateAstralPage from '@/utils/private-astral-page';

function Page() {
  const loggedInUser = useGlobalUser((state) => state.user);
  const postListController = useControllerForUserPostListFromUser(
    loggedInUser.id,
  );

  return (
    <>
      <EmptyMain>Coming soon...</EmptyMain>
      {/* <GlassWindowFrame
        className='p-[1rem]'
        roundedFx={roundedFx.rounded}
        borderFx={borderFx['border-around']}
      >
        <GlassWindowContents className='flex w-full flex-col overflow-auto p-[1rem]'>
          <div className='grid grid-cols-8 gap-[1rem] p-[1rem] text-slate-300'>
            <p>#</p>
            <p>title</p>
            <div className='col-span-2'>
              <p>description</p>
            </div>
            <p>space</p>
            <p>chapter</p>
            <p>time</p>
            <p>date</p>
          </div>
          <HorizontalDivider />
          <div className='divide-y-[1px] divide-slate-300 divide-opacity-30'>
            {postListController.state.objs.map((post, index) => (
              <div className='grid grid-cols-8 items-center gap-[1rem] p-[1rem] text-slate-300'>
                <p>{index + 1}</p>
                <Link
                  className='font-bold text-blue-500'
                  href={`${liveMap.live.link(post.spaceId)}?chapter=${post.chapterId}`}
                >
                  {post.title}
                </Link>
                <div className='col-span-2'>
                  <p>{post.description}</p>
                </div>
                <p>{post.spaceId}</p>
                <p>{post.chapterId}</p>
                <p>{getFormattedAMPM(new Date(post.created))}</p>
                <p>{getFormattedDate(new Date(post.created))}</p>
              </div>
            ))}
          </div>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame> */}
    </>
  );
}

export default PrivateAstralPage(Page);
