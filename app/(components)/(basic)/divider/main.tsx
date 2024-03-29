import { GlassAreaContainer } from '../glass/area/main';
import { borderStyles } from '../../../(design)/(styles)/data';

export function Divider() {
  return (
    <GlassAreaContainer
      name={Divider.name}
      size='w-full h-[0px]'
      border={borderStyles['border-b']}
    ></GlassAreaContainer>
  );
}
