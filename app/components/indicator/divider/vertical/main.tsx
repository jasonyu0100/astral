import { DivInputProps } from '@/props/main';

export interface VerticalDividerProps extends DivInputProps {
  dividerFx?: string;
}

export function VerticalDivider({ dividerFx, ...props }: VerticalDividerProps) {
  return (
    <div
      className={`flex h-full w-[20px] flex-shrink-0 flex-row items-center ${props.className}`}
    >
      <div
        className={`h-full w-[1px] bg-slate-500 bg-opacity-30 ${dividerFx || ''}`}
      />
    </div>
  );
}
