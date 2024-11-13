import { LinkInputProps } from '@/props/main';
import Link from 'next/link';

export interface CommonSidebarIndicatorProps {
  indicator: string | undefined;
  minimised?: boolean;
}
interface InputProps extends LinkInputProps {
  children?: React.ReactNode;
}

export function CommonSidebarIndicator({ children, ...props }: InputProps) {
  return (
    <Link
      {...props}
      className='inline-flex h-[3rem] items-center justify-start gap-[1rem] self-stretch'
    >
      {children}
    </Link>
  );
}
export enum CommonSidebarIndicatorType {
  Home = 'Home',
  Flow = 'Flow',
  Network = 'Network',
  Drive = 'Drive',
  Feed = 'Feed',
  Explorer = 'Explorer',
}
