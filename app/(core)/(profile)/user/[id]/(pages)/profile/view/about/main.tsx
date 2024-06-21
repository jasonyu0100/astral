import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { exampleFileElem } from '@/(server)/(model)/elements/file/main';
import { ContextForUserObj } from '@/(server)/(model)/user/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import { ContextForProfilePage, ProfilePage } from '../main';

export function ProfileAbout() {
  const user = useContext(ContextForUserObj);
  const controller = useContext(ContextForProfilePage);

  return (
    <GlassWindowFrame
      className='h-full flex-shrink-0 p-[2rem] px-[3rem]'
      borderFx={borderFx['border-r']}
    >
      <GlassWindowContents className='flex h-full w-full flex-col items-center space-y-[2rem]'>
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
        <GlassWindowFrame
          className='h-[3rem] w-full'
          roundedFx={roundedFx.rounded}
          borderFx={borderFx['border-around']}
        >
          <GlassWindowContents className='flex h-full w-full items-center justify-center'>
            <p className='font-bold text-slate-300'>Edit Profile</p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
        <div className='flex w-full flex-row items-center justify-center space-x-[1rem]'>
          <p
            className='cursor-pointer font-bold text-white'
            onClick={() => {
              controller.setPage(ProfilePage.Followers);
            }}
          >
            100 Backers
          </p>
          <div className='h-[0.5rem] w-[0.5rem] rounded-full bg-slate-500' />
          <p
            className='cursor-pointer font-bold text-white'
            onClick={() => {
              controller.setPage(ProfilePage.Connects);
            }}
          >
            100 Connections
          </p>
        </div>
        <HorizontalDivider />
        <div className='flex w-full flex-col space-y-[1rem]'>
          <p className='text-white'>Bio: {user.bio}</p>
          <p className='text-white'>Email: {user.email}</p>
          <p className='text-white'>Role: {user.role}</p>
        </div>
        <HorizontalDivider />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
