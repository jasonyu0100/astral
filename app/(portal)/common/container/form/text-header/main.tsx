export function PortalTextHeader() {
  return (
    <img
      className='my-[2rem] h-[3rem]'
      src={
        process.env.VERSES_MODE === 'false'
          ? '/brand/icon-astral-dark.png'
          : '/brand/icon-verses-dark.png'
      }
    />
  );
}
