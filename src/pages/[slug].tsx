import Head from "next/head";
import Container from "@/components/Container";
import { getAllPostIds, getPostData } from "@/lib/posts";

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);
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
      <Head>
        <title>{postData.title}</title>
        <meta name="keywords" content={postData.description} />
        <meta name="description" content={postData.description} key="desc" />
      </Head>
      <Container>
        <div
          className="prose w-10/12 m-auto py-12"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </Container>
    </>
  );
}
