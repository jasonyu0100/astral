import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { AstralMoreIcon } from '@/icons/more/main';

export function StudioSpacesRowMore() {
  return (
    <div className='flex flex-row items-center justify-center'>
      <DropdownMenu>
        <DropdownMenuTrigger className='h-[2.5rem] w-[2.5rem] outline-none'>
          <AstralMoreIcon className='h-3/4 w-3/4' />
        </DropdownMenuTrigger>
        <DropdownMenuContent className='rounded-none border-none bg-slate-800 text-white outline-none'>
          <DropdownMenuLabel>Space</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => alert('TODO')}>
            Open
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => alert('TODO')}>
            Remove
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
