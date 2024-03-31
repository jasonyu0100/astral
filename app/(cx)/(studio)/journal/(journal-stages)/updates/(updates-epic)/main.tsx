import { containerFx } from '@/(design)/(fx)/data';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { UpdatesPosts } from './moments/main';
import { JournalFooter } from './moments/footer/main';
import { JournalSearch } from './moments/search/main';

export function UpdatesMain() {
  return (
    <div className='h-full flex-grow'>
      <JournalSearch />
      <UpdatesPosts />
    </div>
  );
}
