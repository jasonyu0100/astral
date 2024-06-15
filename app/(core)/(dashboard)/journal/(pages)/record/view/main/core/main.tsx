import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { JournalRecordEntry } from './entry/main';
import { JournalRecordField } from './field/main';
import { JournalRecordPip } from './pip/main';

export function JournalRecordCore() {
  return (
    <div className='h-full flex-grow overflow-auto'>
      <div className='flex flex-grow flex-col items-center space-y-[2rem] p-[1rem]'>
        <p className='text-3xl font-bold text-white'>Friday, 11 June</p>
        <HorizontalDivider />
        <div className='flex w-3/4 max-w-[800px] flex-col items-center space-y-[2rem]'>
          <JournalRecordEntry />
          <HorizontalDivider />
          <JournalRecordField>
            <div className='flex w-full flex-col items-center space-y-[3rem] py-[1rem]'>
              <div className='w-full overflow-auto'>
                <p className='text-xl font-bold italic text-slate-300'>
                  "I captured a few photos while I was at the beach"
                </p>
              </div>
              <div className='w-full overflow-auto'>
                <div className='flex h-[15rem] flex-row items-center space-x-[2rem] pb-[1rem]'>
                  <img
                    className='aspect-square h-full rounded shadow-glow'
                    src='https://images.unsplash.com/photo-1715254934165-15112c612e76?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  ></img>
                  <img
                    className='aspect-square h-full rounded shadow-glow'
                    src='https://images.unsplash.com/photo-1715254934165-15112c612e76?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  ></img>
                  <img
                    className='aspect-square h-full rounded shadow-glow'
                    src='https://images.unsplash.com/photo-1715254934165-15112c612e76?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  ></img>
                  <img
                    className='aspect-square h-full rounded shadow-glow'
                    src='https://images.unsplash.com/photo-1715254934165-15112c612e76?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  ></img>
                </div>
              </div>
            </div>
          </JournalRecordField>
          <JournalRecordPip />
          <JournalRecordField>
            <div className='flex w-full flex-col items-center space-y-[3rem] py-[1rem]'>
              <div className='w-full overflow-auto'>
                <p className='text-xl font-bold italic text-slate-300'>
                  "I captured a few photos while I was at the beach"
                </p>
              </div>
              <div className='w-full overflow-auto'>
                <div className='flex h-[15rem] flex-row items-center space-x-[2rem] pb-[1rem]'>
                  <img
                    className='aspect-square h-full rounded shadow-glow'
                    src='https://images.unsplash.com/photo-1715254934165-15112c612e76?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  ></img>
                  <img
                    className='aspect-square h-full rounded shadow-glow'
                    src='https://images.unsplash.com/photo-1715254934165-15112c612e76?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  ></img>
                  <img
                    className='aspect-square h-full rounded shadow-glow'
                    src='https://images.unsplash.com/photo-1715254934165-15112c612e76?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  ></img>
                  <img
                    className='aspect-square h-full rounded shadow-glow'
                    src='https://images.unsplash.com/photo-1715254934165-15112c612e76?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  ></img>
                </div>
              </div>
            </div>
          </JournalRecordField>
          <JournalRecordPip />
          <JournalRecordField />
          <JournalRecordPip />
          <JournalRecordField />
        </div>
      </div>
    </div>
  );
}
