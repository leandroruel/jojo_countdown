import Carousel from "./carousel";

export default function Banner({ children }) {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto mt-10 px-10 lg:px-0 box-border">
      {children}
    </div>
  );
}
