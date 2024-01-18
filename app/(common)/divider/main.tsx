import { Layer } from '../layer/main';
import { borderStyles } from '../styles/data';

export function Divider() {
  return (
    <Layer
      displayName={Divider.name}
      sizeStyle='w-full h-[0px]'
      borderStyle={borderStyles['border-b']}
    ></Layer>
  );
}
