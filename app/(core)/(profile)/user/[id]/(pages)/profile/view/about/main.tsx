import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { exampleFileElem } from '@/(server)/(model)/elements/file/main';
import { ContextForUserObj } from '@/(server)/(model)/user/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { useContext, useEffect, useState } from 'react';
import { ContextForProfilePage, ProfilePage } from '../main';

export function ProfileAbout() {
  const loggedInUser = useGlobalUser((state) => state.user);
  const [stateUser, setStateUser] = useState(loggedInUser);
  const user = useContext(ContextForUserObj);
  const controller = useContext(ContextForProfilePage);
  const admin = stateUser.id === user.id;

  useEffect(() => {
    setStateUser(loggedInUser);
  }, [loggedInUser]);

  return (
    <GlassWindowFrame
      className='h-full flex-shrink-0 p-[2rem]'
      borderFx={borderFx['border-r']}
    >
      <GlassWindowContents className='flex h-full w-full flex-col items-center space-y-[1.5rem]'>
        <img
          className='aspect-square h-[250px] w-[250px] rounded-full'
          src={user.dp?.src || exampleFileElem.src}
        />
        <div className='flex w-full flex-col'>
          <p className='text-xl font-bold text-white'>
            {user.displayName || 'Display Name'}
          </p>
          <p className='font-light text-white'>
            {user.email || 'creative@verses.digital'}
          </p>
        </div>
        <div className='flex w-full flex-row items-center justify-center space-x-[1rem]'>
          <p
            className='cursor-pointer font-bold text-white'
            onClick={() => {
              controller.setPage(ProfilePage.Backers);
            }}
          >
            100 Backers
          </p>
          <div className='h-[0.5rem] w-[0.5rem] rounded-full bg-slate-500' />
          <p
            className='cursor-pointer font-bold text-white'
            onClick={() => {
              controller.setPage(ProfilePage.Connections);
            }}
          >
            100 Connections
          </p>
        </div>
        {admin ? (
          <GlassWindowFrame
            className='h-[3rem] w-full flex-shrink-0'
            roundedFx={roundedFx.rounded}
            borderFx={borderFx['border-around']}
          >
            <GlassWindowContents className='flex h-full w-full items-center justify-center'>
              <p className='font-bold text-slate-300'>Edit Profile</p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          </GlassWindowFrame>
        ) : (
          <GlassWindowFrame
            className='h-[3rem] w-full flex-shrink-0'
            roundedFx={roundedFx.rounded}
            borderFx={borderFx['border-around']}
          >
            <GlassWindowContents className='flex h-full w-full items-center justify-center'>
              <p className='font-bold text-slate-300'>Connect / Back</p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          </GlassWindowFrame>
        )}
        <HorizontalDivider />{' '}
        <div className='flex w-full flex-col space-y-[1rem]'>
          <p className='text-sm text-white'>
            <span className='font-bold'>role - </span>
            {user.role}
          </p>
        </div>
        <div className='flex w-full flex-col space-y-[1rem]'>
          <p className='text-wrap max-w-[250px] text-sm font-light text-white'>
            A collaborative workflow that adapts to your creativity. For
            creatives by creatives, verses (formerly cosmos) is a creative suite
            based out of Sydney, AU.
          </p>
        </div>
        <HorizontalDivider />
        <div className='flex w-full flex-col space-y-[1rem]'>
          <p className='font-bold text-slate-300'>Horizons</p>
          <div className='flex flex-row items-center space-x-[0.5rem]'>
            <img
              src={exampleFileElem.src}
              className='h-[2rem] w-[2rem] rounded border-[1px] border-slate-300 border-opacity-30'
            ></img>
            <img
              src={exampleFileElem.src}
              className='h-[2rem] w-[2rem] rounded border-[1px] border-slate-300 border-opacity-30'
            ></img>
            <img
              src={exampleFileElem.src}
              className='h-[2rem] w-[2rem] rounded border-[1px] border-slate-300 border-opacity-30'
            ></img>
          </div>
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
