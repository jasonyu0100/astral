import { DivInputProps } from '@/types/props/main';

export interface HorizontalSeperatorProps extends DivInputProps {
  seperatorFx?: string;
}

export function HorizontalSeperator({
  seperatorFx,
  ...props
}: HorizontalSeperatorProps) {
  return (
    <div
      className={`flex h-full w-[2rem] flex-shrink-0 flex-row items-center justify-center ${props.className}`}
    >
      <div
        className={`h-[1px] w-full bg-slate-500 bg-opacity-30 ${seperatorFx}`}
      />
    </div>
  );
}
