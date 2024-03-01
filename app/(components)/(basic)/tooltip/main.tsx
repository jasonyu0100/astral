import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { TooltipContent } from '@radix-ui/react-tooltip';

export function WrapperTooltip({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent className='outline-none p-[0.5rem]'>
          <p className='font-bold text-white'>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
