import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function SpaceMore() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-[50px] h-[50px] outline-none">
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-full w-full'
          viewBox='0 0 25 25'
          fill='none'
        >
          <mask
            id='mask0_3162_7'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='25'
            height='25'
          >
            <rect
              x='0.641357'
              y='0.237061'
              width='24'
              height='24'
              fill='#D9D9D9'
            />
          </mask>
          <g mask='url(#mask0_3162_7)'>
            <path
              d='M6.64136 14.2371C6.09136 14.2371 5.62052 14.0412 5.22886 13.6496C4.83719 13.2579 4.64136 12.7871 4.64136 12.2371C4.64136 11.6871 4.83719 11.2162 5.22886 10.8246C5.62052 10.4329 6.09136 10.2371 6.64136 10.2371C7.19136 10.2371 7.66219 10.4329 8.05386 10.8246C8.44552 11.2162 8.64136 11.6871 8.64136 12.2371C8.64136 12.7871 8.44552 13.2579 8.05386 13.6496C7.66219 14.0412 7.19136 14.2371 6.64136 14.2371ZM12.6414 14.2371C12.0914 14.2371 11.6205 14.0412 11.2289 13.6496C10.8372 13.2579 10.6414 12.7871 10.6414 12.2371C10.6414 11.6871 10.8372 11.2162 11.2289 10.8246C11.6205 10.4329 12.0914 10.2371 12.6414 10.2371C13.1914 10.2371 13.6622 10.4329 14.0539 10.8246C14.4455 11.2162 14.6414 11.6871 14.6414 12.2371C14.6414 12.7871 14.4455 13.2579 14.0539 13.6496C13.6622 14.0412 13.1914 14.2371 12.6414 14.2371ZM18.6414 14.2371C18.0914 14.2371 17.6205 14.0412 17.2289 13.6496C16.8372 13.2579 16.6414 12.7871 16.6414 12.2371C16.6414 11.6871 16.8372 11.2162 17.2289 10.8246C17.6205 10.4329 18.0914 10.2371 18.6414 10.2371C19.1914 10.2371 19.6622 10.4329 20.0539 10.8246C20.4455 11.2162 20.6414 11.6871 20.6414 12.2371C20.6414 12.7871 20.4455 13.2579 20.0539 13.6496C19.6622 14.0412 19.1914 14.2371 18.6414 14.2371Z'
              fill='#CBD5E1'
            />
          </g>
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-slate-800 border-none outline-none text-white rounded-none">
        <DropdownMenuLabel>Space</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => alert("TODO")}>Open</DropdownMenuItem>
        <DropdownMenuItem onClick={() => alert("TODO")}>Remove</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
