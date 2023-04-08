import { getSortedPostsData } from "@/lib/posts";
import Container from "@/components/Container";
import Card from "@/components/Card";
import { Post } from "@/interfaces/post";
import Navbar from "@/components/Navbar";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData() as Post[];
  return {
    props: {
      allPostsData,
    },
  };
}

interface HomeProps {
  allPostsData: Post[];
}

export default function Home({ allPostsData }: HomeProps) {
  return (
    <Container>
      <div className="m-auto mt-8 flex flex-row flex-wrap">
        <h1 className="m-2 text-5xl mb-8">
          Hi <span>👋</span> I am sochetra 🧑‍💻
        </h1>
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
  );
}
