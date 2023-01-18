---
title: React学习
date: 2022/09/16/ 10:07:39
categories: 前端学习
tags: 
updated: 
type:
comments:
description: 
keywords:
top_img:
mathjax: true
katex:
aside:
aplayer:
highlight_shrink:
sticky: 
cover: 
---

## JSX中使用js表达式

```js
const name = '柴柴'

<h1>你好，我叫{name}</h1>   //    <h1>你好,我叫柴柴</h1>
```

可以使用的表达式

1. 字符串、数值、布尔值、null、undefined、object（ [] / {} ）

2. 1 + 2、'abc'.split('')、['a', 'b'].join('-')

3. fn()

if 语句/ switch-case 语句/ 变量声明语句，这些叫做语句，不是表达式，不能出现在 {} 中！！

## JSX列表渲染

实现：使用数组map方法

```js
// 来个列表
const songs = [
  { id: 1, name: '痴心绝对' },
  { id: 2, name: '像我这样的人' },
  { id: 3, name: '南山南' }
]

function App() {
  return (
    <div className="App">
      <ul>
        {
          songs.map(item => <li>{item.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App
```
