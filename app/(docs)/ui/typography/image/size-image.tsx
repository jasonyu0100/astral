export default function SizeImage() {
  return (
    <>
      <img
        className="h-auto max-w-xs"
        src="/docs/images/examples/image-1@2x.jpg"
        alt="image description"
      />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <img
        className="h-auto max-w-md"
        src="/docs/images/examples/image-1@2x.jpg"
        alt="image description"
      />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <img
        className="h-auto max-w-xl"
        src="/docs/images/examples/image-1@2x.jpg"
        alt="image description"
      />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <img
        className="h-auto max-w-full"
        src="/docs/images/examples/image-1@2x.jpg"
        alt="image description"
      />
    </>
  );
}
