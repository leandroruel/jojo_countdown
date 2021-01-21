import Event from "components/event";
import Layout from "components/layout";

export default function Home() {
  return (
    <Layout
      pageTitle="Jojo's Bizarre Adventure - The Animation Event Countdown"
      description="The biggest event about jojo's bizarre adventure"
      twitterHandle="jojofag"
      currentURL="/"
      siteName="JoJo Countdown"
      previewImage="/img/jojo-event-main.jpg"
    >
      <Event />
    </Layout>
  );
}
