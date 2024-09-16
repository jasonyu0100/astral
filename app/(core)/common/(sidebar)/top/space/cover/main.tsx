'use client';
import { ContextForCurrentSpaceObj } from '@/(server)/model/space/main';
import { AstralArrowCircleLeftIcon } from '@/icons/arrow-circle-left/main';
import { cn } from '@/utils/cn';
import { useContext } from 'react';
import { ContextForCommonSidebar } from '../../../main';

export function CommonSidebarTopSpaceCover() {
  const commonSidebar = useContext(ContextForCommonSidebar);
  const currentSpace = useContext(ContextForCurrentSpaceObj);

  return (
    <div className='relative flex-shrink-0'>
      {commonSidebar.minimised ? (
        <AstralArrowCircleLeftIcon className='h-[2.5rem] w-[2.5rem]' />
      ) : (
        <img
          src={
            currentSpace?.thumbnail?.src || '/brand/display-picture-astral.png'
          }
          className={cn('h-[2.5rem] w-[2.5rem] rounded-full shadow-glow')}
        />
      )}
    </div>
  );
}
