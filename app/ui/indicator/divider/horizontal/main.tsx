import { DivInputProps } from '@/props/main';

export interface HorizontalDividerProps extends DivInputProps {
  dividerFx?: string;
}

export function HorizontalDivider({
  dividerFx,
  ...props
}: HorizontalDividerProps) {
  return (
    <div
      className={`flex h-[0px] w-full flex-shrink-0 flex-row items-center ${props.className}`}
    >
      <div
        className={`h-[1px] w-full bg-slate-500 bg-opacity-30 ${dividerFx || ''}`}
      />
    </div>
  );
}
