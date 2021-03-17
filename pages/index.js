import Spinner from "components/spinner";
import Layout from "components/layout";
import useEvent from "hooks/useEvent";
import { sortByDateDesc } from "utils/sort";
import { useEffect, useState } from "react";
import Banner from "components/banner";
import Carousel from "components/carousel";

export default function Home() {
  const { event, isLoading } = useEvent();
  var [featured, setFeatured] = useState(null);

  useEffect(() => {
    const data = sortByDateDesc(event)[0];
    featured = setFeatured(data);
  }, [event]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Layout
      pageTitle="Jojo's Bizarre Adventure - Countdown"
      description="This is the countdown website for upcoming Jojo's Bizarre Adventure events"
      twitterHandle="jojofag"
      currentURL="/"
      siteName="JoJo Countdown"
      previewImage="/img/jojo-event-main.jpg"
    >
      <Banner>
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
      </Banner>
    </Layout>
  );
}
