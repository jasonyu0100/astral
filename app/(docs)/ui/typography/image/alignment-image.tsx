export default function AlignmentImage() {
  return (
    <>
      <img
        className="h-auto max-w-lg"
        src="/docs/images/examples/image-1@2x.jpg"
        alt="image description"
      />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <img
        className="h-auto max-w-lg mx-auto"
        src="/docs/images/examples/image-1@2x.jpg"
        alt="image description"
      />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <img
        className="h-auto max-w-lg ml-auto"
        src="/docs/images/examples/image-1@2x.jpg"
        alt="image description"
      />
    </>
  );
}
