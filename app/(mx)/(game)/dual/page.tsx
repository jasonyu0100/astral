'use client';

function TopLeftPiece() {
  return (
    <div className='flex  h-[1rem] w-[1rem] border-l-[2px] border-t-[2px] border-white bg-green-500'></div>
  );
}

function TopRightPiece() {
  return (
    <div className='flex  h-[1rem] w-[1rem] border-r-[2px] border-t-[2px] border-white bg-blue-500'></div>
  );
}

function CenterLeftPiece() {
  return (
    <div className='flex  h-[1rem] w-[1rem] border-b-[2px] border-l-[2px] border-t-[2px] border-white bg-slate-950'></div>
  );
}

function CenterRightPiece() {
  return (
    <div className='flex  h-[1rem] w-[1rem] border-b-[2px] border-r-[2px] border-t-[2px] border-white bg-slate-950'></div>
  );
}

function BottomLeftPiece() {
  return (
    <div className='flex  h-[1rem] w-[1rem] border-b-[2px] border-l-[2px] border-white bg-yellow-500'></div>
  );
}
function BottomRightPiece() {
  return (
    <div className='flex  h-[1rem] w-[1rem] border-b-[2px] border-r-[2px] border-white bg-red-500'></div>
  );
}

function VerticalCenterDivider() {
  return (
    <div className='flex h-[1rem] w-[0px] border-l-[1px] border-r-[1px]' />
  );
}

function HorizontalCenterDivider() {
  return (
    <div className='flex h-[0px] w-[1rem] border-b-[1px] border-t-[1px]' />
  );
}

function Board({ numRows, numCols }: { numRows: number; numCols: number }) {
  const board = Array(numRows).fill(Array(numCols).fill(0));

  return (
    <div className='flex flex-col'>
      {board.map((row: any, rowIdx: any) => (
        <div className='flex flex-row' key={rowIdx}>
          {row.map((col: any, colIdx: any) => {
            if (col === 0) {
              return <TopLeftPiece key={`${rowIdx},${colIdx}`} />;
            }

            return;
          })}
        </div>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <div className='flex flex-col p-[3rem]'>
      <p className='text-white'>Dual Game</p>
      <div className='mt-[3rem]'></div>
      <Board numRows={5} numCols={5} />
      <div className='mt-[3rem]'></div>
      <div className='flex flex-row'>
        <div className='flex flex-row'>
          <TopLeftPiece />
          <TopLeftPiece />
          <TopLeftPiece />
          <TopLeftPiece />
          <TopLeftPiece />
        </div>
        <VerticalCenterDivider />
        <div className='flex flex-row'>
          <TopRightPiece />
          <TopRightPiece />
          <TopRightPiece />
          <TopRightPiece />
          <TopRightPiece />
        </div>
      </div>{' '}
      <div className='flex flex-row'>
        <div className='flex flex-row'>
          <TopLeftPiece />
          <TopLeftPiece />
          <TopLeftPiece />
          <TopLeftPiece />
          <TopLeftPiece />
        </div>
        <VerticalCenterDivider />
        <div className='flex flex-row'>
          <TopRightPiece />
          <TopRightPiece />
          <TopRightPiece />
          <TopRightPiece />
          <TopRightPiece />
        </div>
      </div>{' '}
      <div className='flex flex-row'>
        <div className='flex flex-row'>
          <TopLeftPiece />
          <TopLeftPiece />
          <TopLeftPiece />
          <TopLeftPiece />
          <TopLeftPiece />
        </div>
        <VerticalCenterDivider />
        <div className='flex flex-row'>
          <TopRightPiece />
          <TopRightPiece />
          <TopRightPiece />
          <TopRightPiece />
          <TopRightPiece />
        </div>
      </div>{' '}
      <div className='flex flex-row'>
        <div className='flex flex-row'>
          <TopLeftPiece />
          <TopLeftPiece />
          <TopLeftPiece />
          <TopLeftPiece />
          <TopLeftPiece />
        </div>
        <VerticalCenterDivider />
        <div className='flex flex-row'>
          <TopRightPiece />
          <TopRightPiece />
          <TopRightPiece />
          <TopRightPiece />
          <TopRightPiece />
        </div>
      </div>{' '}
      <div className='flex flex-row'>
        <div className='flex flex-row'>
          <TopLeftPiece />
          <TopLeftPiece />
          <TopLeftPiece />
          <TopLeftPiece />
          <TopLeftPiece />
        </div>
        <VerticalCenterDivider />
        <div className='flex flex-row'>
          <TopRightPiece />
          <TopRightPiece />
          <TopRightPiece />
          <TopRightPiece />
          <TopRightPiece />
        </div>
      </div>{' '}
      <div className='flex flex-row'>
        <div className='flex flex-row'>
          <HorizontalCenterDivider />
          <HorizontalCenterDivider />
          <HorizontalCenterDivider />
          <HorizontalCenterDivider />
          <HorizontalCenterDivider />
        </div>
        <div className='flex flex-row'>
          <HorizontalCenterDivider />
          <HorizontalCenterDivider />
          <HorizontalCenterDivider />
          <HorizontalCenterDivider />
          <HorizontalCenterDivider />
        </div>
      </div>
      {/* <div className='flex flex-row'>
        <div className='flex flex-row'>
          <CenterLeftPiece />
          <CenterLeftPiece />
          <CenterLeftPiece />
          <CenterLeftPiece />
          <CenterLeftPiece />
        </div>
        <VerticalCenterDivider />
        <div className='flex flex-row'>
          <CenterRightPiece />
          <CenterRightPiece />
          <CenterRightPiece />
          <CenterRightPiece />
          <CenterRightPiece />
        </div>
      </div> */}{' '}
      <div className='flex flex-row'>
        <div className='flex flex-row'>
          <BottomLeftPiece />
          <BottomLeftPiece />
          <BottomLeftPiece />
          <BottomLeftPiece />
          <BottomLeftPiece />
        </div>
        <VerticalCenterDivider />
        <div className='flex flex-row'>
          <BottomRightPiece />
          <BottomRightPiece />
          <BottomRightPiece />
          <BottomRightPiece />
          <BottomRightPiece />
        </div>
      </div>{' '}
      <div className='flex flex-row'>
        <div className='flex flex-row'>
          <BottomLeftPiece />
          <BottomLeftPiece />
          <BottomLeftPiece />
          <BottomLeftPiece />
          <BottomLeftPiece />
        </div>
        <VerticalCenterDivider />
        <div className='flex flex-row'>
          <BottomRightPiece />
          <BottomRightPiece />
          <BottomRightPiece />
          <BottomRightPiece />
          <BottomRightPiece />
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='flex flex-row'>
          <BottomLeftPiece />
          <BottomLeftPiece />
          <BottomLeftPiece />
          <BottomLeftPiece />
          <BottomLeftPiece />
        </div>
        <VerticalCenterDivider />
        <div className='flex flex-row'>
          <BottomRightPiece />
          <BottomRightPiece />
          <BottomRightPiece />
          <BottomRightPiece />
          <BottomRightPiece />
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='flex flex-row'>
          <BottomLeftPiece />
          <BottomLeftPiece />
          <BottomLeftPiece />
          <BottomLeftPiece />
          <BottomLeftPiece />
        </div>
        <VerticalCenterDivider />
        <div className='flex flex-row'>
          <BottomRightPiece />
          <BottomRightPiece />
          <BottomRightPiece />
          <BottomRightPiece />
          <BottomRightPiece />
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='flex flex-row'>
          <BottomLeftPiece />
          <BottomLeftPiece />
          <BottomLeftPiece />
          <BottomLeftPiece />
          <BottomLeftPiece />
        </div>
        <VerticalCenterDivider />
        <div className='flex flex-row'>
          <BottomRightPiece />
          <BottomRightPiece />
          <BottomRightPiece />
          <BottomRightPiece />
          <BottomRightPiece />
        </div>
      </div>
    </div>
  );
}
