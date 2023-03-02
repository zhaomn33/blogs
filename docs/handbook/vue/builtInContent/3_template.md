---
title: 3、template
author: 赵三三
date: '2023-2-23'
sidebar: auto
# sticky: 1
tags:
 - 内置特殊元素
categories:
 - vue
---

::: tip
当我们想要使用内置指令，又不想在DOM中渲染元素时，template可以作为占位符使用
:::

## 一、基本使用
- 1. 对于`<template>`的特殊处理只有在与以下指令共同使用时才能触发，否则它将会被渲染成原生`<template>`元素<br>
1、`v-if`，`v-else-if`，`v-else`<br>
2、`v-for`（带有`v-for`的`<template>`也可以有一个`key`属性）<br>
3、`v-slot`<br>
其他的属性和元素都将会被丢弃，因为没有相应元素，它们没有任何意义

- 2. 单文件组件使用`<template>`作为顶层标签来包裹整个模板，该顶层标签不是模板本身的一部分，不支持指令等的模板语法

## 二、渲染
- 1. 条件渲染 --- `<template>` 上的 `v-if`<br>
当想切换渲染的不止一个元素，可以用 `<template>` 将所有元素包裹起来，`v-else` 和 `v-else-if` 也可以在 `<template>` 上使用
```
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

- 2. 列表渲染 --- `<template>` 上的 `v-for`<br>
与模板上的 `v-if` 类似，你也可以在 `<template>` 标签上使用 `v-for` 来渲染一个包含多个元素的块
```
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
```

- 3 . 具名插槽 --- `<template>` 上的 `v-slot`（简写：#）<br>
在父组件内使用某子组件（`<BaseLayout>`）时，需要一种方式将多个插槽内容传入子组件的各自目标插槽出口，此时可使用具名插槽<br>
需要使用一个含 `v-slot` 指令的 `<template>` 元素为具名插槽传入内容，并将目标插槽的名字传给该指令，没有提供 `name` 的 `<slot>` 出口会隐式地命名为“default”<br>
```
<BaseLayout>
  <template v-slot:header>
    <!-- header 插槽的内容放这里 -->
  </template>
</BaseLayout>
```
![具名插槽 ](../../../.vuepress/public/imgs/named-slots.png)