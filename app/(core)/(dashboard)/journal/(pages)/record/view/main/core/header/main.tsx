import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';

export function JournalRecordHeader() {
  const currentDate = new Date();
  const day = currentDate.getDay();
  const date = currentDate.getDate();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  const days = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  };

  return (
    <>
      <p className='text-3xl font-bold text-white'>
        {days[day]}, {date} {month} {year}
      </p>
      <HorizontalDivider />
    </>
  );
}
