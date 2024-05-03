import { containerFx } from '@/(fx)/data';
import { GlassAreaContainer } from '@/(pkgs)/(glass)/area/main';
import { UpdatesPosts } from './main/main';
import { JournalFooter } from './main/footer/main';
import { JournalSearch } from './main/search/main';

export function UpdatesMain() {
  return (
    <div className='h-full flex-grow'>
      <JournalSearch />
      <UpdatesPosts />
    </div>
  );
}
