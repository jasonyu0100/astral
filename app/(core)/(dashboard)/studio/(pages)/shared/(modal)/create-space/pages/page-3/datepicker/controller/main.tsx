import { useEffect, useRef, useState } from 'react';

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function useControllerForDatePicker(targetDate?: string) {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (targetDate) {
      setSelectedDate(new Date(targetDate));
    }
  }, [targetDate]);

  const handleDateClick = (day: number, month: number, year: number) => {
    setSelectedDate(new Date(year, month, day));
    setShowCalendar(false);
  };

  const generateCalendar = (month: number, year: number) => {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const weeks: JSX.Element[] = [];
    let days: JSX.Element[] = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className='flex-1'></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isToday =
        day === currentDate.getDate() &&
        month === currentDate.getMonth() &&
        year === currentDate.getFullYear();
      const isSelected =
        selectedDate &&
        day === selectedDate.getDate() &&
        month === selectedDate.getMonth() &&
        year === selectedDate.getFullYear();

      days.push(
        <div
          key={day}
          className={`flex-1 cursor-pointer p-2 text-center ${
            isToday ? 'bg-yellow-200' : ''
          } ${isSelected ? 'bg-blue-200' : ''} hover:bg-blue-100`}
          onClick={() => handleDateClick(day, month, year)}
        >
          {day}
        </div>,
      );

      if ((day + firstDayOfMonth) % 7 === 0 || day === daysInMonth) {
        weeks.push(
          <div key={`week-${day}`} className='flex'>
            {days}
          </div>,
        );
        days = [];
      }
    }

    return weeks;
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return {
    selectedDate,
    setShowCalendar: (value: boolean) => setShowCalendar(value),
    showCalendar,
    currentMonth,
    currentYear,
    calendarRef,
    handlePrevMonth,
    handleNextMonth,
    generateCalendar,
  };
}
