import Featured from "components/featured";
import List from "components/list";
import ListItem from "components/listItem";
import Spinner from "components/spinner";
import Layout from "components/layout";
import useEvent from "hooks/useEvent";
import { sortByDateDesc } from "utils/sort";
import { useEffect, useState } from "react";
import Banner from "components/banner";

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
      <Banner />
      {/* {featured != null && featured != undefined ? (
        <Featured event={featured} />
      ) : (
        <div></div>
      )}
      <List>
        {sortByDateDesc(event).map((ev) => {
          return <ListItem key={ev.id} event={ev} />;
        })}
      </List> */}
    </Layout>
  );
}
