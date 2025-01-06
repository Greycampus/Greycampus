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
          {/* Link to Poppins font from Google Fonts */}
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          />
          <link rel="preconnect" href="https://www.odinschool.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://www.greycampus.com" crossOrigin="anonymous" />

          {/* DNS Prefetch as Fallback */}
          <link rel="dns-prefetch" href="https://www.odinschool.com" />
          <link rel="dns-prefetch" href="https://www.greycampus.com" />

          <link
            rel="preload"
            as="image"
            href={`https://www.greycampus.com/hubfs/GC%28B2B%29/gc-bg.webp`}
            type="image/webp"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;