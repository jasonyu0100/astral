import { DefaultBackground } from '@/ui/(app)/background/default/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return <DefaultBackground>{children}</DefaultBackground>;
}
