import Carousel from "./carousel";

export default function Banner() {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto mt-10 px-10 lg:px-0 box-border">
      <Carousel element="glide-slider">
        <a
          href="/"
          className="flex rounded-md max-w-full h-96 md:h-64 lg:h-auto overflow-hidden"
        >
          <img
            src="https://placehold.it/1250x250/ccc"
            className="h-full md:h-64 lg:h-auto max-w-full"
            alt="test"
          />
        </a>
        <a
          href="/"
          className="flex rounded-md max-w-full h-96 md:h-64 lg:h-auto overflow-hidden"
        >
          <img
            src="https://placehold.it/1250x250/ccc"
            className="h-full md:h-64 lg:h-auto max-w-full"
            alt="test 2"
          />
        </a>
      </Carousel>
    </div>
  );
}
