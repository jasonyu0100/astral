import { cn } from "@/(logic)/utils/cn";
import { DivInputProps } from "../types/main";

interface AspectProps extends DivInputProps {
    x: number;
    y: number;
    children: React.ReactNode;
}

export function Aspect({ children, x, y, ...props }: AspectProps) {
  return (
    <div className={cn(`flex aspect-[${x}/${y}]`, props.className)}>
      {children}
    </div>
  );
}
