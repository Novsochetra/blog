---
title: "Why i use tmux instead of iterm in 2023 ?"
description: "tmux is an simple window multiplexer that work on any operating system. it let use switch program by using only one terminal"
date: "April 26, 2023"
tags: ["tmux"]
---

# Why i use tmux instead of iterm in 2023 ?

Before we deep dive to tmux understand what is tmux and how it help me organize my workflow 😇

### What is tmux ?

__*tmux*__ is an simple window multiplexer that work on any operating system. It let use switch program by using only one terminal. Imagine you open the on alternative terminal like [iTerm2](https://iterm2.com) + VS Code what will u do if you program is crashed or you shutdown computer ? you need to reopen it manually back ? 

Naaaaaaaaaa 🤯, there should be other easy way right ?

### Why i use tmux ?

Honestly using **tmux** alone without combinination with **vim** / **neovim** is kinda useless i think.

What will your interface of your IDE you look like if you have multiple project open ? I used to used [VS Code](https://code.visualstudio.com/), [Atom](https://github.com/atom), [Sublime Text 3](https://www.sublimetext.com),  ...etc. It kinda messy the on my window. Image your coworker come and ask to to help deploy staging server, which vs code should i focus if you there alot of open VS Code here ? 


#### My VS Code version 🫠

<img style="border-radius: 12px;" src="https://i.postimg.cc/cJVzww4b/Screenshot-2023-04-26-at-10-00-17-AM.png" alt="background window that use vs code to switch project" />

#### My tmux version 
<img style="border-radius: 12px;" src="https://github.com/Novsochetra/personal-blog-post-assets/blob/main/Screenshot%202023-04-26%20at%2010.19.25%20AM.png?raw=true" alt="background window that use vs code to switch project" />


if that doesn't convince you to rethink about tmux here other proof how tmux keep my desktop clean. Actually i have many code-base open at the same time. I use __session__ + __window__ + __pane__ in tmux to organize my workflow. As you can see i currently i have __2 session__ running, which each session 1 (__*workspace*__) has 3 window open session 2 (__*personal*__) has 4 window open

<img style="border-radius: 12px;" src="https://github.com/Novsochetra/personal-blog-post-assets/blob/main/Screenshot%202023-04-26%20at%2010.34.23%20AM.png?raw=true"/>

I also have set up the alias **work** to run script everytime i start the new window of my working project also start the script because i am the lazy person to type `yarn dev` command 😁

<video autoplay muted loop>
<source src="https://github.com/Novsochetra/personal-blog-post-assets/raw/main/Screen%20Recording%202023-04-26%20at%204.17.07%20PM.mov" />
</video>

### Reference:
  
- [my tmux config](https://github.com/Novsochetra/tmux-config)

🎉 Thanks you for reading 🎉

**Sochetra NOV**

