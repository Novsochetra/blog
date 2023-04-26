// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Post } from "@/interfaces/post";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  res.status(200).json([
    {
      id: "why-i-use-tmux-instead-of-iterm-in-2023",
      title: "Why i use tmux instead of iterm in 2023 ?",
      description:
        "tmux is an simple window multiplexer that work on any operating system. it let use switch program by using only one terminal",
      date: "April 26, 2023",
      tags: ["tmux"],
    },
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
  ]);
}
