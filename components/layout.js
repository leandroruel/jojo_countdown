import Head from 'next/head'
import Header from 'components/header'

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={props.twitterHandle} key="twhandle" />

        {/* Open Graph */}
        <meta property="og:url" content={props.currentURL} key="ogurl" />
        <meta property="og:image" content={props.previewImage} key="ogimage" />
        <meta property="og:site_name" content={props.siteName} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <link rel="icon" href="/favicon-32x-32.png" />
        <title>{pageTitle}</title>
      </Head>
      <section>
        <Header />
        <div className="content flex flex-col justify-center items-center h-screen">{children}</div>
      </section>
    </>
  )
}