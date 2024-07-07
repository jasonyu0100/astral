'use client';
import { useEffect } from 'react';
import { monthNames, useControllerForDatePicker } from './controller/main';

export function DatePicker({
  date,
  onChange,
}: {
  date: string;
  onChange: (arg0: string) => void;
}) {
  const {
    selectedDate,
    setShowCalendar,
    showCalendar,
    currentMonth,
    currentYear,
    calendarRef,
    handlePrevMonth,
    handleNextMonth,
    generateCalendar,
  } = useControllerForDatePicker(date);

  useEffect(() => {
    if (selectedDate) {
      onChange(selectedDate.toISOString());
    }
  }, [selectedDate]);

  return (
    <div className='flex w-full flex-col'>
      <label className='mb-1 text-xs font-bold text-slate-700'>due date</label>
      <div className='relative inline-block h-[4rem] border-b-[1px] border-slate-500 outline-none'>
        <input
          type='text'
          className='h-full w-full appearance-none border-none px-[0.5rem] text-xl font-bold leading-9 text-slate-800   outline-none'
          value={selectedDate ? selectedDate.toDateString() : ''}
          onFocus={() => setShowCalendar(true)}
          readOnly
        />
        {showCalendar && (
          <div
            ref={calendarRef}
            className='absolute z-50 mt-2 flex flex-col rounded border bg-white shadow-lg'
          >
            <div className='flex justify-between p-2'>
              <button onClick={handlePrevMonth}>Prev</button>
              <span>
                {monthNames[currentMonth]} {currentYear}
              </span>
              <button onClick={handleNextMonth}>Next</button>
            </div>
            <div className='grid grid-cols-7 gap-2 p-2'>
              <div className='text-center'>Sun</div>
              <div className='text-center'>Mon</div>
              <div className='text-center'>Tue</div>
              <div className='text-center'>Wed</div>
              <div className='text-center'>Thu</div>
              <div className='text-center'>Fri</div>
              <div className='text-center'>Sat</div>
            </div>
            {generateCalendar(currentMonth, currentYear)}
          </div>
        )}
      </div>
    </div>
  );
}
