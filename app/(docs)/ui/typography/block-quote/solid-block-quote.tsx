export default function SolidBlockQuote() {
  return (
    <>
      <p className="text-gray-500 dark:text-gray-400">
        Does your user know how to exit out of screens? Can they follow your
        intended user journey and buy something from the site you’ve designed?
        By running a usability test, you’ll be able to see how users will
        interact with your design once it’s live.
      </p>
      
      <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
        <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
          "Ouros is just awesome. It contains tons of predesigned components
          and pages starting from login screen to complex dashboard. Perfect
          choice for your next SaaS application."
        </p>
      </blockquote>
      <p className="text-gray-500 dark:text-gray-400">
        First of all you need to understand how Ouros works. This library is
        not another framework. Rather, it is a set of components based on
        Tailwind CSS that you can just copy-paste from the documentation.
      </p>
    </>
  );
}
