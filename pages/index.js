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
      <div className="rounded-lg lg:h-4/5 sm:h-auto w-10/12 lg:w-4/5 bg-cover bg-no-repeat bg-center relative">
        <h1 className="text-center">Thank you. The Event is over, see you next time.</h1>
      </div>
    </Layout>
  );
}
