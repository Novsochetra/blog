// import { getSortedPostsData } from "@/lib/posts";
import Head from "next/head";
import Container from "@/components/Container";
import Card from "@/components/Card";
import { Post } from "@/interfaces/post";
// import Navbar from "@/components/Navbar";

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/api/post`;
  const res = await fetch(url);
  const data = await res.json();

  // Pass data to the page via props
  return {
    props: {
      allPostsData: data,
    },
  };
}

interface HomeProps {
  allPostsData: Post[];
}

export default function Home({ allPostsData }: HomeProps) {
  return (
    <>
      <Head>
        <title>Sochetra NOV</title>
        <meta
          content="https://sochetra-nov.dev/_next/image?url=%2Fmain-profile.jpeg&w=2048&q=100"
          property="og:image"
        />
        <meta content="64" property="og:image:width" />
        <meta content="64" property="og:image:height" />
        <meta content="https://blog.sochetra-nov.dev" property="og:url" />

        <meta name="keywords" content="sochetra" />
        <meta
          name="description"
          content="Hi, My name is sochetra NOV (នៅសុចិត្រា), a guide love mobile app animation, and vim lover"
          key="desc"
        />
        <meta name="description" content="HI" key="desc" />
        <link
          rel="icon"
          type="image/png"
          href="https://sochetra-nov.dev/_next/image?url=%2Fmain-profile.jpeg&w=2048&q=100"
        />
      </Head>

      <Container>
        <h1 className="m-2 text-5xl mt-8 mb-8">
          Hi <span>👋</span> I am sochetra 🧑‍💻
        </h1>
        <div className="flex flex-row flex-wrap">
          {allPostsData.map(({ id, date, description, title, tags }, index) => (
            <Card
              key={`list-post-item-${index}`}
              id={id}
              description={description}
              title={title}
              tags={tags}
              date={date}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
