import { Glass } from '../layer/main';
import { borderStyles } from '../styles/data';

export function Divider() {
  return (
    <Glass
      displayName={Divider.name}
      sizeStyle='w-full h-[0px]'
      borderStyle={borderStyles['border-b']}
    ></Glass>
  );
}
