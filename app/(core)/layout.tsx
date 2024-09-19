import { DefaultBackground } from '@/ui/background/gradient/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return <DefaultBackground>{children}</DefaultBackground>;
}
