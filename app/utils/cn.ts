import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tw-merge';

export function ctwn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
