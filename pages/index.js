import Head from "next/head";
import Event from "components/event";
import Copyright from "components/copyright";
import Layout from "components/layout";
import Menacing from "components/menacing";

export default function Home(props) {
  return (
    <Layout
      pageTitle="Jojo's Bizarre Adventure - The Animation Event Countdown"
      description="The biggest event about jojo's bizarre adventure"
      twitterHandle="jojofag"
      currentURL=""
      siteName="JoJo Countdown"
      previewImage="/img/jojo-event-main.jpg"
    >
      <Event />
      <Menacing />
    </Layout>
  );
}
