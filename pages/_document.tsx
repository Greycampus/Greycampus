import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

const API_URL = process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT;

class CustomDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head >
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W9W9X4QJ');
            `,
            }}
          />

          {/* Link to Poppins font from Google Fonts */}
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          />
          <link rel="preconnect" href="https://www.odinschool.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://www.greycampus.com" crossOrigin="anonymous" />
          <link rel="preconnect" href={`${API_URL}`} crossOrigin="anonymous" />

          {/* DNS Prefetch as Fallback */}
          <link rel="dns-prefetch" href="https://www.odinschool.com" />
          <link rel="dns-prefetch" href="https://www.greycampus.com" />
          <link rel="dns-prefetch" href={`${API_URL}`} />

          {/* ✅ Move global styles here */}
          <style>{`
            html, body {
              margin: 0;
              padding: 0;
            }
          `}</style>

          <link
            rel="preload"
            as="image"
            href={`https://www.greycampus.com/hubfs/GC%28B2B%29/gc-bg.webp`}
            type="image/webp"
          />
        </Head>
        <body>
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W9W9X4QJ"
            height="0" width="0" style={{display:"none", visibility: "hidden"}}></iframe></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;