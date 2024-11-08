import { CommonTopbar } from '../common/topbar/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <CommonTopbar />
      {children}
    </>
  );
}
