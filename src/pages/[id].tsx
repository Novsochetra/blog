import Container from "@/components/Container";
import { getAllPostIds, getPostData } from "@/lib/posts";

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function BlogDetail({ postData }: { postData: any }) {
  return (
    <>
      <Container>
        <div
          className="prose w-10/12 m-auto py-12"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </Container>
    </>
  );
}
