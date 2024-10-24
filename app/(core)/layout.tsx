import { DefaultBackground } from '@/components/background/gradient/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return <DefaultBackground>{children}</DefaultBackground>;
}
