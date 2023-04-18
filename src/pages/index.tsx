// import { getSortedPostsData } from "@/lib/posts";
import Container from "@/components/Container";
import Card from "@/components/Card";
import { Post } from "@/interfaces/post";
// import Navbar from "@/components/Navbar";

export async function getStaticProps() {
  // const allPostsData = getSortedPostsData() as Post[];
  const data: Post[] = [
    {
      id: "top-5-vim-trick",
      title: "[vim/neovim] Top 5 tip and trick",
      description: "some usefull tip and trick",
      date: "April 13, 2023",
      tags: ["vim", "neovim"],
    },
    {
      id: "neovim-emmet-balance-outward",
      title: "[vim/neovim] Emmet Balance Outward",
      description: "select html / javascript base on thier hierarchy",
      date: "April 9, 2023",
      tags: ["vim", "neovim"],
    },
    {
      id: "how-to-set-up-prism-with-next-js",
      title: "How To Set Up Prism with Next.js",
      description:
        "Example using Prism / Markdown with Next.js including switching syntax highlighting themes.",
      date: "April 8, 2023",
      tags: ["vim", "react-native"],
    },
    {
      id: "my-first-blog-post",
      title: "My First Blog Post",
      description: "The first personal blog post",
      date: "April 7, 2023",
      tags: ["vim", "react-native"],
    },
  ];

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
  );
}
