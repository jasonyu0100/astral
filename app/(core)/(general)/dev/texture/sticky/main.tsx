import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';

export enum StickySize {
  SQUARE = 'SQUARE',
  RECTANGLE = 'RECTANGLE',
}

export enum StickyColor {
  BLACK = 'black',
  WHITE = 'white',
  YELLOW = 'yellow',
  PURPLE = 'purple',
  GREEN = 'green',
  BLUE = 'blue',
  PINK = 'pink',
}

export function StickyTextIdea({ color, size, children }: { color: StickyColor, size: StickySize, children: React.ReactNode }) {
  function getBackgroundColor(color: StickyColor) {
    switch (color) {
      case StickyColor.BLACK:
        return 'bg-black';
      case StickyColor.WHITE:
        return 'bg-white';
      case StickyColor.YELLOW:
        return 'bg-yellow-500';
      case StickyColor.PURPLE:
        return 'bg-violet-500';
      case StickyColor.GREEN:
        return 'bg-green-500';
      case StickyColor.BLUE:
        return 'bg-blue-500';
      case StickyColor.PINK:
        return 'bg-pink-500';
      default:
        return 'bg-yellow-500';
    }
  }
  
  function getTextColor(color: StickyColor) {
    switch (color) {
      case StickyColor.BLACK:
        return 'text-white';
      case StickyColor.WHITE:
      case StickyColor.YELLOW:
      case StickyColor.PURPLE:
      case StickyColor.GREEN:
      case StickyColor.BLUE:
      case StickyColor.PINK:
        return 'text-black';
      default:
        return 'text-black';
    }
  }

  const textColor = getTextColor(color);
  const backgroundColor = getBackgroundColor(color);

  return (
    <GlassWindowFrame className='h-[10rem] w-[10rem] animate-pulse-slow bg-green-500 shadow-glow '>
      <GlassWindowContents
        className={`flex w-full flex-col p-[1rem] ${backgroundColor}`}
      >
        <p className={`font-light ${textColor}`}>{children}</p>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
