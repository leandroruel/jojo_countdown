import Carousel from "./carousel";

export default function Banner() {
  return (
    <div className="max-w-screen-sm lg:max-w-screen-lg mx-auto mt-5 px-10 lg:px-0 box-border">
      <Carousel element="glide-slider">
        <a href="">
          <img
            src="https://placehold.it/1250x250/ccc"
            className="rounded-md"
            alt=""
          />
        </a>
        <a href="">
          <img
            src="https://placehold.it/1250x250/ccc"
            className="rounded-md"
            alt=""
          />
        </a>
      </Carousel>
    </div>
  );
}
