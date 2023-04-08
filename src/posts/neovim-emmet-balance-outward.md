---
title: "[vim/neovim] Emmet Balance Outward"
description: "select html / javascript base on thier hierarchy"
date: "April 9, 2023"
tags: ["vim", "neovim"]
---

# Emmet Balance Outward

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTVhNTEzNzJjOTc1ZWY4ZDU2NTk4ZmRjMjM0YWFlMjRkMzljODVlYyZjdD1n/0EtZ9hziSGCYK6Q6LZ/giphy.gif" style="border-radius: 12px;" />

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTk0NzEyOTlmY2I1ZWU4ZjA3OTdkYTg4N2FjMDQzOTViZWUwY2NkMSZjdD1n/qsEtyjWGh7VNH7axZw/giphy.gif" style="border-radius: 12px;" />

## Pre-requirement

- **neovim**
- **vim-plug** or other vim package manager

1. setup [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter) with [vim plug](https://github.com/junegunn/vim-plug)

   ```vim
   Plug 'nvim-treesitter/nvim-treesitter', {'do': ':TSUpdate'}
   ```

2. Open neovim and run the following command

   ```vim
   :TSInstall javascript typescript tsx css yaml
   ```

   you can choose your favorite module by running the following command

   ```vim
   :TSModuleInfo
   ```

3. navigate to your neovim config file `~/.config/nvim`

   ```lua
   require("nvim-treesitter.configs").setup {
     highlight = { enable = true },
     ensure_installed = {
       "bash",
       "c",
       "html",
       "javascript",
       "json",
       "lua",
       "luap",
       "markdown",
       "markdown_inline",
       "regex",
       "tsx",
       "typescript",
       "vim",
       "yaml",
     },
     indent = {
       enable = true
     },
     incremental_selection = {
       enable = true,
       keymaps = {
         init_selection = "<Space>", -- set to `false` to disable one of the mappings
         node_incremental = "<Space>",
         scope_incremental = "grc",
         node_decremental = "<BS>",
       },
     },
   }
   ```

   i remap the key **Space** to initial select the node and using Key **Space** again to increment select the node i re-map the key BackSpace for decrement select the node.

   ### Reference:

   - [my-vimrc](https://github.com/Novsochetra/nvim)
   - [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)

   ***

   🎉 Thanks you for reading 🎉

   **Sochetra NOV**
