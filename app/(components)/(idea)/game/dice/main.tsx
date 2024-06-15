import { ImageInputProps } from '@/(types)/props/main';

export enum DiceFace {
  One = '1',
  Two = '2',
  Three = '3',
  Four = '4',
  Five = '5',
  Six = '6',
}

interface DiceInputProps extends ImageInputProps {
  face: DiceFace;
}

export function Dice({ face, ...props }: DiceInputProps) {
  return (
    <div>
      <img
        src={`/dice/Face=${face}.png`}
        className={`h-[50px] object-contain ${props.className || ''}`}
      />
    </div>
  );
}
