import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { getFormattedDate } from '@/(utils)/dateFormat';

export function JournalRecordHeader() {
  const currentDate = new Date();

  return (
    <>
      <p className='text-3xl font-bold text-white'>
        {getFormattedDate(currentDate)}
      </p>
      <HorizontalDivider />
    </>
  );
}
