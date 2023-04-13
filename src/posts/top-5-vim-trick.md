---
title: "[vim/neovim] Top 5 tip and trick"
description: "some usefull tip and trick"
date: "April 13, 2023"
tags: ["vim", "neovim"]
---

# Top 5 Tip And Trick For Vim / Neovim

### 1 Increment And Decrement A Sequence Number

Did you know that you can increment / sequence number using vim ? It been one of my favorite features. I use it the most with for mocking with array of an object that contain id.

```js
const students = [
  {id: 1, name: 'student 1'},
  {id: 2, name: 'student 2'},
  {id: 3, name: 'student 3'},
  {id: 4, name: 'student 4'},
]
```

how would you do that by increment the  **```id```** maunally ? **no way** we do it manually as a vim users right.

##### Increment 

1. `ctrl` + `v`
2. `g`
3. `ctrl` + `a`


<img style="border-radius: 12px;" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdkMWVkODg0NWYzNjFiNjc4ZDQ2YTUwNTJjNmJiYzliYzhjNzY4MiZjdD1n/a1uHDuFwH3t2rlhnCe/giphy.gif" />


##### Decrement 

1. `ctrl` + `v`
2. `g`
3. `ctrl` + `x`

<img style="border-radius: 12px" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2Y1ZDJmODhlNDMzNTk5MmM1NjExYjhkYjRjM2ZjODM1ZTE1NjZkNyZjdD1n/FH9LY4vxnCsy3V6wcP/giphy.gif" />dddd

### 2. Sorting the import in javascript file 
Most of the time i deal with **react project** i need the way to sort the import file. most of the time the import section of javascript file is kind of mess, so we need to find other way to organize our import. Of course **VS Code** already has that features, but how about us as an vim users 🥹?

```js
import {} from 'c'
import {} from 'd'
import {} from 'a'
import {} from 'b'
...
```

Here is the following command:

1. select the block of your import statement 
2. type `:` 
3. type `!sort` + `Enter`

<img style="border-radius: 12px" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWI5MTJiNzhlODE2MDYxODE2NzMwMzUxMmQ1ZDhmZjcxMWZmNmNlYSZjdD1n/0VNsH69ta02YHmNtH3/giphy.gif" />


### 3. Select To The End Tag Of HTML

Imagine you have a deep nested html tag ? How would you know which one is the end tag of the html that you selected ?

```html
<div>
  <div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  ...
</div>
```

Just type the following:

1. mark sure you select the open tag
2. type `%`
   
Not just the html tag we could use the same key binding to function in javascript also 

### 4. Rename Open Tag and Close Tag HTML
```jsx
export const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <MainLayout>
          <Header />
          <Sidebar />
          <MainContent />
        </MainLayout>
      </AuthProvider>
    </Provider>
  )
}
```

what is you want to rename the `<AuthProvider>` to `<Auth.Provider>`

Just type the following key:

1. make sure cursor is on the `<AuthProvider>` tag
2. type `c` + `s` + `t` 
3. type `<`

Walla 🤯. It work now.

<img style="border-radius: 12px" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDViZTRhMTA3MTQ0MTliNGY2MmVhZTA2MGY2NzE4NGQ3MTkwOTdhOSZjdD1n/7hIGxaX4f3DOtGZehM/giphy.gif" />

### 5. Delete HTML Tag / JSX Tag

- Delete everything inside the Tag except the current selected tag
  - just type the following key
  `c` + `i` + `t` or `d` + `i` + `t`
  <img style="border-radius: 12px; margin-top: 8px; margin-bottom: 8px" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmMwMmFhYzAyNzMyNTczNTBlNmQyMjEyYjJkYzJjZTQ5MzY0NDE2YiZjdD1n/K7AvVbwDId1RDhI9H9/giphy.gif" />

- Delete everything inside tag + include the current selected tag
  - just type the following key
  `c` + `a` + `t` or `d` + `a` + `t`
  <img style="border-radius: 12px; margin-top: 8px; margin-bottom: 8px" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODcxMzNkOGNlNzJjYjczMzg0Nzk2Zjc2OGNiZmJmNzBiMDNkZDhmOSZjdD1n/gZ8qZTMjZ628kPefIS/giphy.gif" />

- Delete only on selected tag
  - just type the following key
  `c` + `s` + `t` or `d` + `s` + `t`
  <img style="border-radius: 12px; margin-top: 8px; margin-bottom: 8px" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmI1NGNmMjE5N2EzZTg3YTgzNzJiZTVkZGI3MzQ2ZTRkZTY3ZTNlYyZjdD1n/C3CU25h5HjgFR51ONO/giphy.gif" />


### Reference:
  
- [my-vimrc](https://github.com/Novsochetra/nvim)


### Credit

***

🎉 Thanks you for reading 🎉

**Sochetra NOV**
