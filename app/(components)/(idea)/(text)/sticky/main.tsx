import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';

export enum StickyNoteSize {
  SQUARE = 'SQUARE',
  RECTANGLE = 'RECTANGLE',
}

export enum StickyNoteColor {
  BLACK = 'black',
  WHITE = 'white',
  YELLOW = 'yellow',
  PURPLE = 'purple',
  GREEN = 'green',
  BLUE = 'blue',
  PINK = 'pink',
}

export function StickyNoteTextIdea({
  color,
  size,
  children,
}: {
  color: StickyNoteColor;
  size: StickyNoteSize;
  children: React.ReactNode;
}) {
  function getAspect(size: StickyNoteSize) {
    switch (size) {
      case StickyNoteSize.SQUARE:
        return 'aspect-[1/1]';
      case StickyNoteSize.RECTANGLE:
        return 'aspect-[16/9]';
      default:
        return 'aspect-[1/1]';
    }
  }
  function getBackgroundColor(color: StickyNoteColor) {
    switch (color) {
      case StickyNoteColor.BLACK:
        return 'bg-black';
      case StickyNoteColor.WHITE:
        return 'bg-white';
      case StickyNoteColor.YELLOW:
        return 'bg-yellow-500';
      case StickyNoteColor.PURPLE:
        return 'bg-violet-500';
      case StickyNoteColor.GREEN:
        return 'bg-green-500';
      case StickyNoteColor.BLUE:
        return 'bg-blue-500';
      case StickyNoteColor.PINK:
        return 'bg-pink-500';
      default:
        return 'bg-yellow-500';
    }
  }

  function getTextColor(color: StickyNoteColor) {
    switch (color) {
      case StickyNoteColor.BLACK:
        return 'text-slate-900';
      case StickyNoteColor.WHITE:
      case StickyNoteColor.YELLOW:
      case StickyNoteColor.PURPLE:
      case StickyNoteColor.GREEN:
      case StickyNoteColor.BLUE:
      case StickyNoteColor.PINK:
        return 'text-slate-900';
      default:
        return 'text-slate-900';
    }
  }

  const textColor = getTextColor(color);
  const backgroundColor = getBackgroundColor(color);
  const aspect = getAspect(size);

  return (
    <GlassWindowFrame
      className={`h-[15rem] animate-pulse-slow bg-green-500 shadow-glow ${aspect}`}
    >
      <GlassWindowContents
        className={`flex w-full flex-col p-[1rem] ${backgroundColor}`}
      >
        <p className={`font-light ${textColor}`}>{children}</p>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
