import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from '@/(common)/styles/data';
import { Layer } from '@/(common)/layer/main';

export function SpacesHeader({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      sizeStyle='w-full h-[360px]'
      displayName={SpacesHeader.name}
      backgroundStyle={backgroundStyles['glass-5']}
      borderStyle={borderStyles['border-b']}
      className={`p-[4rem] ${containerStyles['row-center']}`}
    >
      {children}
    </Layer>
  );
}
