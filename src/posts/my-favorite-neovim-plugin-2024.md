---
id: "my-favorite-neovim-plugin-2024"
title: "My favorite neovim plugin 2024"
description: "My favorite neovim plugin 2024"
date: "January 01 2024"
tags: ["vim", "neovim"]
seoImage: "https://github.com/Novsochetra/personal-blog-post-assets/blob/main/Screenshot%202024-01-03%20at%203.26.10%20PM.png?raw=true"
---

# My favorite neovim plugin 2024

In order to stay productive, we might need to use some of the plugins. here is my favorites plugins:

### 1. junegunn/fzf

FZF (fuzzy finder) is a commandline tool to fuzzy find. it is portable and blazing fast search file.

<img src="https://github.com/Novsochetra/personal-blog-post-assets/blob/main/Screen%20Recording%202024-01-02%20at%204.40.36%20PM.gif?raw=true" style="border-radius: 12px;" />

We can also integrate it with neovim or use it directly from cli. in these case i just run

```bash
ls | fzf
```

<img src="https://github.com/Novsochetra/personal-blog-post-assets/blob/main/Screen%20Recording%202024-01-02%20at%205.11.22%20PM.gif?raw=true" style="border-radius: 12px;">

[Checkout repo](https://github.com/junegunn/fzf)

### 2. nvim-treesitter/nvim-treesitter

In order to get the syntax **hightlight**, **indentation**, and **folding** from neovim of course we can't forget about treesitter. One of my favorite use case is delete the entire function or delete entire class.

I remap the key **Space** to increment select and can just press letter **d** to delete the selection.

<img src="https://github.com/Novsochetra/personal-blog-post-assets/blob/main/Screen%20Recording%202024-01-03%20at%207.44.34%20AM.gif?raw=true" style="border-radius: 12px;">
<img src="https://github.com/Novsochetra/personal-blog-post-assets/blob/main/Screen%20Recording%202024-01-03%20at%207.45.29%20AM.gif?raw=true" style="border-radius: 12px;">

[Checkout repo](https://github.com/nvim-treesitter/nvim-treesitter)

### 3. voldikss/vim-floaterm

sometimes while i was in vim i sometimes just want to run some command mostly (git commit, git push, git pull, or checkout branch). in order to do that yes of course we can execute in vim mode by running with **exclamation mark**(!), but we can do it better by using vim floaterm. it allow us to use other terminal inside the vim 😉. In my case i remap the **leader** key + **f** to toggle the floaterm.

<img src="https://github.com/Novsochetra/personal-blog-post-assets/blob/main/Screen%20Recording%202024-01-03%20at%207.57.21%20AM.gif?raw=true" style="border-radius: 12px;">

[Checkout repo](https://github.com/voldikss/vim-floaterm)

### 4. ThePrimeagen/harpoon

while working with large code base with multile file, there are many different way to working with that file. we can **global mark file**, **use buffer**, **search file**, or using **tab**, but what if we can make it better ?. solution is using harpoon. we can add the file to the list and then we can switch between the added file by using key map or harpoon navigation list.

For my case i just remap the key **F3** to add file to the list, **F4** to toggle show the navigation list.

<img src="https://github.com/Novsochetra/personal-blog-post-assets/blob/main/Screen%20Recording%202024-01-03%20at%208.30.06%20AM.gif?raw=true" style="border-radius: 12px;">

[Checkout repo](https://github.com/ThePrimeagen/harpoon)

### 5. sindrets/diffview.nvim

if you are using vscode you probably know there is a feature that allow you to previous version of the file history. then you can do it here in neovim also. i remap key **F8** to view diff file

<img src="https://github.com/Novsochetra/personal-blog-post-assets/blob/main/Screen%20Recording%202024-01-03%20at%208.56.57%20AM.gif?raw=true" style="border-radius: 12px;">

[Checkout repo](https://github.com/sindrets/diffview.nvim)

### Reference:

- [my-vimrc](https://github.com/Novsochetra/nvim)

---

🎉 Thanks you for reading. 🎉

Love you all from Phnom Penh, Cambodia

**Sochetra NOV**
