export function PortalTextHeader() {
  return (
    <img
      className='my-[2rem] h-[5rem]'
      src={
        process.env.VERSES_MODE === 'false'
          ? '/brand/logo-astral-dark.png'
          : '/brand/logo-verses-dark.png'
      }
    />
  );
}
