import { LinkInputProps } from '@/(types)/main';
import Link from 'next/link';

export interface IndicatorProps {
  indicator: string | undefined;
  minimised?: boolean;
}
interface InputProps extends LinkInputProps {
  children: React.ReactNode;
}

export function SidebarIndicator({ children, ...props }: InputProps) {
  return (
    <Link
      {...props}
      className='inline-flex h-[3rem] items-center justify-start gap-[1rem] self-stretch'
    >
      {children}
    </Link>
  );
}
export enum SidebarIndicatorType {
  Studio = 'Studio',
  Journal = 'Journal',
  Archive = 'Archive',
  Artists = 'Artists',
  Moves = 'Moves',
}
