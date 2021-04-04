import Head from "next/head";
import Event from "components/event";
import Copyright from "components/copyright";
import Layout from "components/layout";
import Image from 'next/image';

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
      <div className="w-10/12 lg:w-4/5 flex flex-col">
        <h1 className="text-center text-2xl text-white">Thank you. The Event is over, see you next time.</h1>
        <Image src="/img/jolyne-stone-ocean.jpeg" width={750} height={1061} />
      </div>
    </Layout>
  );
}
