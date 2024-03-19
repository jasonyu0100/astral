import { HyperLinkInputProps } from '@/(types)/main';

export interface IndicatorProps {
  indicator: string | undefined;
  minimised?: boolean;
}
interface InputProps extends HyperLinkInputProps {
  children: React.ReactNode;
}

export function SidebarIndicator({ children, ...props }: InputProps) {
  return (
    <a
      {...props}
      className='inline-flex h-[3rem] items-center justify-start gap-[1rem] self-stretch'
    >
      {children}
    </a>
  );
}
export enum SidebarIndicatorType {
  Studio = 'Studio',
  Journal = 'Journal',
  Archive = 'Archive',
  Artists = 'Artists',
  Moves = 'Moves',
}
