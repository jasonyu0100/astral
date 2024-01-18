import { ConnectElementObj } from '@/tables/resource/connect/element/main';
import { motion } from 'framer-motion';

export function ConnectLinks({ elements }: { elements: ConnectElementObj[] }) {
  return (
    <motion.svg className='absolute top-0 left-0 w-full h-full'>
      {elements.map((element, i) => (
        <line
          className='stroke-slate-300 opacity-30'
          x1={element.x + 100}
          y1={element.y + 100}
          x2={elements[i === 0 ? elements.length - 1 : i - 1].x + 100}
          y2={elements[i === 0 ? elements.length - 1 : i - 1].y + 100}
          stroke='#ffffff'
        />
      ))}
    </motion.svg>
  );
}
