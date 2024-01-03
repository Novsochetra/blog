// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Post } from "@/interfaces/post";
import { TAGS } from "@/utils/constants";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  res.status(200).json([
    {
      id: "my-favorite-neovim-plugin-2024",
      title: "My favorite neovim plugin 2024",
      description: "My favorite neovim plugin 2024",
      date: "Jan 01, 2024",
      tags: [TAGS.Vim, TAGS.NeoVim],
    },
    {
      id: "javascript-null-vs-undefined",
      title: "JavaScript null vs undefined",
      description:
        "In the world of JavaScript, there been always the confusions when to use null vs undefined",
      date: "May 26, 2023",
      tags: [TAGS.JavaScript],
    },
    {
      id: "why-i-use-tmux-instead-of-iterm-in-2023",
      title: "Why i use tmux instead of iterm in 2023 ?",
      description:
        "tmux is an simple window multiplexer that work on any operating system. it let use switch program by using only one terminal",
      date: "April 26, 2023",
      tags: [TAGS.Tmux],
    },
    {
      id: "top-5-vim-trick",
      title: "[vim/neovim] Top 5 tip and trick",
      description: "some usefull tip and trick",
      date: "April 13, 2023",
      tags: [TAGS.Vim, TAGS.NeoVim],
    },
    {
      id: "neovim-emmet-balance-outward",
      title: "[vim/neovim] Emmet Balance Outward",
      description: "select html / javascript base on thier hierarchy",
      date: "April 9, 2023",
      tags: [TAGS.Vim, TAGS.NeoVim],
    },
    {
      id: "my-first-blog-post",
      title: "My First Blog Post",
      description: "The first personal blog post",
      date: "April 7, 2023",
      tags: [TAGS.NextJS],
    },
  ]);
}
