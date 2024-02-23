import { Glass } from '@/(components)/layer/main';
import {
  containerStyles,
  borderStyles,
  backgroundStyles,
} from '@/(components)/styles/data';
import { DraftHeaderLeft } from './left/main';
import { DraftHeaderRight } from './right/main';
import { DraftHeaderCenter } from './center/main';

export function DraftHeader() {
  return (
    <Glass
      displayName={DraftHeader.name}
      sizeStyle='h-[60px] w-full flex-shrink-0'
      className={`${containerStyles['row-center']} justify-between`}
      borderStyle={borderStyles['border-b']}
      backgroundStyle={backgroundStyles['glass-5']}
    >
      <DraftHeaderLeft/>
      <DraftHeaderCenter/>
      <DraftHeaderRight/>
    </Glass>
  );
}
