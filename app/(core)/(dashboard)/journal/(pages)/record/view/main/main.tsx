import { GlassAreaContainer } from '@/ui/(glass)/area/main';
import { JournalRecordCore } from './core/main';
import { JournalRecordFooter } from './footer/main';

export function JournalRecordMain() {
  return (
    <GlassAreaContainer
      name={JournalRecordMain.name}
      sizeFx='h-full flex-grow '
      className='flex flex-col'
    >
      <JournalRecordCore />
      <JournalRecordFooter />
    </GlassAreaContainer>
  );
}
