import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from '@/(common)/styles/data';
import { Layer } from '@/(common)/layer/main';

export function SeaSidebar({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={SeaSidebar.name}
      sizeStyle='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerStyles['col-center']} py-[2rem] px-[1rem]`}
      backgroundStyle={backgroundStyles['glass-10']}
    >
      {children}
    </Layer>
  );
}
