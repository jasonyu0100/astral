import { ContextForChapterLogList } from '@/(server)/controller/space/chapter/log/list';
import { exampleFileElems } from '@/(server)/model/elements/file/main';
import { ContextForChapterLogObj } from '@/(server)/model/space/chapter/log/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { getFormattedAMPMSS, getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';

export function SpaceJourneyLogListItemInactive() {
  const log = useContext(ContextForChapterLogObj);
  const logListController = useContext(ContextForChapterLogList);

  return (
    <GlassWindowFrame className='flex w-full flex-col space-y-[1rem]'>
      <GlassWindowFrame className='w-full py-[2rem]'>
        <GlassWindowContents
          className='grid w-full grid-cols-7 items-center justify-items-center'
          onClick={() => {
            logListController.actions.stateActions.select(log);
          }}
        >
          <div>
            <GlassWindowFrame
              className='h-[3rem] w-[3rem]'
              roundedFx={roundedFx['rounded-full']}
            >
              <GlassWindowContents className='flex items-center justify-center bg-blue-500 font-bold text-slate-300'>
                1
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            </GlassWindowFrame>
          </div>
          <div className='col-span-2 flex flex-col space-y-[0.5rem]'>
            <div className='flex w-full flex-col space-y-[0.5rem] bg-yellow-500 p-[2rem]'>
              <p className='text-xl font-bold'>{log.title}</p>
              <p className='font-md'>{log.description}</p>
              <p className='text-sm font-light'>
                {getFormattedAMPMSS(new Date(log.created))},{' '}
                {getFormattedDate(new Date(log.created))}
              </p>
            </div>
          </div>
          <div className='flex flex-row space-x-[-1.5rem]'>
            {exampleFileElems.slice(0, 2).map((fileElem) => (
              <img
                src={fileElem.src}
                alt='example'
                className='aspect-square h-[3rem] w-[3rem] rounded-full'
              />
            ))}
          </div>
          <div>
            <p className='text-light text-sm font-bold text-slate-300'>
              {log.logStatus}
            </p>
          </div>
          <div>
            <p className='text-light text-sm font-bold text-slate-300'>16</p>
          </div>
          <div>
            <p className='text-light text-sm font-bold text-slate-300'>16</p>
          </div>
        </GlassWindowContents>
      </GlassWindowFrame>
    </GlassWindowFrame>
  );
}
