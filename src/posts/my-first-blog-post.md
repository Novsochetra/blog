---
title: "My First Blog Post"
description: "The first personal blog post"
date: "2023-04-08"
tags: ["vim", "react-native"]
---

# My First Blog Post

Hello, world! This is my first blog post.


```js
import {read} from 'to-vfile'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

main()

async function main() {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(await read('example.md'))

  console.log(String(file))
}
```
