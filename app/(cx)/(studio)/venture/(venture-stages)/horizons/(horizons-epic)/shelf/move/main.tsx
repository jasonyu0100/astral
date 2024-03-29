'use client';
import { HorizonCover } from '@/(components)/(basic)/cover/horizon/main';
import { GlassWindowContents } from '@/(components)/(basic)/glass/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(basic)/glass/window/main';
import { GlassWindowPane } from '@/(components)/(basic)/glass/window/pane/main';
import { horizonMap } from '@/(cx)/(venture)/horizon/[id]/map';
import { glassStyles, roundedStyles } from '@/(design)/(styles)/data';
import { exampleFile } from '@/(logic)/internal/model/resource/file/main';
import Link from 'next/link';

export function Horizon() {
  return (
    <GlassWindowFrame className="p-[1rem]" roundedStyle={roundedStyles['rounded-sm']}>
      <GlassWindowContents className='flex flex-row items-center space-x-[1rem]'>
        <Link
          className='flex flex-col items-center space-y-[1rem]'
          href={horizonMap.horizon.id.one.link('0')}
        >
          <HorizonCover file={exampleFile} />
        </Link>
        <div className='flex flex-col'>
          <p className='text-xl font-bold text-slate-300'>Horizon</p>
          <p className='text-lg text-slate-300'>John Smith</p>
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassStyle={glassStyles['glass-5']}/>
    </GlassWindowFrame>
  );
}
