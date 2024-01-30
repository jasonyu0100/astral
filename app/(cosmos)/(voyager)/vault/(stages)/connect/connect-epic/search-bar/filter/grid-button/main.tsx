import { Layer } from '@/(common)/layer/main';
import { GridIcon } from '../../../icons/grid/main';
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from '@/(common)/styles/data';
import { ButtonInputProps } from '@/(common)/types/main';

export function GridButton({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <Layer
        displayName={GridButton.name}
        sizeStyle='w-[36px] h-[36px]'
        backgroundStyle={backgroundStyles['glass-10']}
        className={`${containerStyles['row-centered']}`}
        borderStyle={borderStyles.rounded}
      >
        <GridIcon />
      </Layer>
    </button>
  );
}
