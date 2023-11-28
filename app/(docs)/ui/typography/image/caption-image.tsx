export default function CaptionImage() {
  return (
    <figure className="max-w-lg">
      <img
        className="h-auto max-w-full rounded-lg"
        src="/docs/images/examples/image-3@2x.jpg"
        alt="image description"
      />
      <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
        Image caption
      </figcaption>
    </figure>
  );
}
