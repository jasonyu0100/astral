import { ImageInputProps } from '@/types/props/main';
import {
  CardNumber,
  CardSuit,
} from '../../../../(core)/(project)/spaces/[id]/(pages)/journey/view/main/header/month/main';

interface CardInputProps extends ImageInputProps {
  suit: CardSuit;
  number: CardNumber;
}

export function Card({ suit, number, ...props }: CardInputProps) {
  return (
    <img
      src={`/cards/Suit=${suit}, Number=${number}.png`}
      className={`h-[100px] object-contain ${props.className || ''}`}
    />
  );
}
