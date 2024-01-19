import { LinkInputProps } from '@/(common)/types/main';

export interface IndicatorProps {
  indicator: string | undefined;
  minimised: boolean;
}
interface InputProps extends LinkInputProps {
  children: React.ReactNode;
}

export function SidebarIndicator({ children, ...props }: InputProps) {
  return (
    <a
      {...props}
      className='self-stretch justify-start items-center gap-[1rem] inline-flex h-[3rem]'
    >
      {children}
    </a>
  );
}export enum SidebarIndicatorType {
  Spaces = 'Spaces',
  Drive = 'Drive',
  Market = 'Market',
  Feed = 'Feed',
  Label = 'Label'
}

