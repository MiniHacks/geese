import Head from "next/head";

const DEFAULT_TITLE = "MiniHacks Presents:";
const DEFAULT_DESC = "A Hackathon Project!";

const MyHeading = ({ title }) => (
    <Head>
        <title>{title || DEFAULT_TITLE}</title>
        <meta name="description" content={DEFAULT_DESC} />
        <link rel="icon" href="/favicon.ico" />
    </Head>
);
export default MyHeading;
