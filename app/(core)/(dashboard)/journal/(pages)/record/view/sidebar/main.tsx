import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import { JournalRecordSidebarEntry } from './entry/main';

export function JournalRecordSidebar() {
  return (
    <GlassAreaContainer
      name={JournalRecordSidebar.name}
      sizeFx='w-[300px] h-full'
      className={`flex flex-col space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <p className='text-lg font-bold text-slate-500'>1 day ago</p>
      <JournalRecordSidebarEntry />
      <JournalRecordSidebarEntry />
      <JournalRecordSidebarEntry />
      <JournalRecordSidebarEntry />
      <p className='text-lg font-bold text-slate-500'>5 days ago</p>
      <JournalRecordSidebarEntry />
      <JournalRecordSidebarEntry />
      <p className='text-lg font-bold text-slate-500'>1 month ago</p>
      <JournalRecordSidebarEntry />
      <JournalRecordSidebarEntry />
    </GlassAreaContainer>
  );
}
