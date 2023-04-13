import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import prism from "remark-prism";

import { Post } from "@/interfaces/post";

const postsDirectory = path.join(process.cwd(), "src/posts");

export function getSortedPostsData(): { id: Post["id"] }[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$|\.mdx$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  }) as Post[];

  return allPostsData.sort((a, b) => {
    const previousDate = new Date(a.date);
    const currentDate = new Date(b.date);

    if (previousDate < currentDate) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds(): { params: { slug: Post["id"] } }[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: Post["id"]) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html, {
      // https://github.com/sergioramos/remark-prism/issues/265
      sanitize: false,
    })
    .use(prism)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
