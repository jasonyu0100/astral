export enum DayColor {
  Blue = 'bg-blue-500',
  Yellow = 'bg-yellow-500',
  Green = 'bg-green-500',
}

export function MonthDayView({ color }: { color: DayColor }) {
  return (
    <div
      className={`h-[2.5rem] w-[2.5rem] border border-blue-300 bg-blue-500 ${color}`}
    ></div>
  );
}
