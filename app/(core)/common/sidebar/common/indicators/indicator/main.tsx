import { HyperLinkInputProps } from '@/props/main';

export interface CommonSidebarIndicatorProps {
  indicator: string | undefined;
  minimised?: boolean;
}
interface InputProps extends HyperLinkInputProps {
  children?: React.ReactNode;
}

export function CommonSidebarIndicator({ children, ...props }: InputProps) {
  return (
    <a
      {...props}
      className='inline-flex h-[3rem] items-center justify-start gap-[1rem] self-stretch'
    >
      {children}
    </a>
  );
}
export enum CommonSidebarIndicatorType {
  Home = 'Home',
  Feed = 'Feed',
  Uploads = 'Uploads',
  Network = 'Network',
  Explorer = 'Explorer',
  Drive = 'Drive',
}
