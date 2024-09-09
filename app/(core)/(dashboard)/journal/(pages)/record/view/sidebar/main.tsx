import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';

export function JournalRecordSidebar() {
  return (
    <>
      <GlassAreaContainer
        name={JournalRecordSidebar.name}
        sizeFx='w-[300px] h-full'
        className={`flex flex-col space-y-[1rem] p-[1rem]`}
        glassFx={glassFx['glass-5']}
      ></GlassAreaContainer>
    </>
  );
}
