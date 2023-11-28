export default function FilterImage() {
  return (
    <>
      <img
        className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
        alt="image description"
      />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    <img
      className="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none"
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
      alt="image description"
    />
    </>
  );
}
