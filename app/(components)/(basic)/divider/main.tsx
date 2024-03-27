import { GlassAreaContainer } from '../glass/area/main';
import { borderStyles } from '../../../(design)/(styles)/data';

export function Divider() {
  return (
    <GlassAreaContainer
      displayName={Divider.name}
      sizeStyle='w-full h-[0px]'
      borderStyle={borderStyles['border-b']}
    ></GlassAreaContainer>
  );
}
