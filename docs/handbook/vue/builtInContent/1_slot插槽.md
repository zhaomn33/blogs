---
title: 1、slot插槽
author: 赵三三
date: '2023-2-9'
sidebar: auto
sticky: 1
tags:
 - 内置特殊元素
categories:
 - vue
---

::: tip  不是组件
`<component>`、`<slot>` 和 `<template>`具有类似组件的特性，也是模板语法的一部分，但是它们不是真正的组件，在模板编译过程中会被编译掉，因此它们一般用小写字母书写
:::

::: tip
子组件渲染父组件指定的一段内容
:::
### 插槽<br>
- 1. 插槽出口<br>
`<slot/>`是在子组件标记一个位置，将父元素传入的内容渲染到指定位置，子组件渲染到父组件
- 2. 默认插槽<br>
父组件没有插槽内容时，可在`<slot>添加默认内容</slot>`<br>
提供了插槽内容后默认内容会被替换掉<br>
- 3. 具名插槽<br>
`<slot name='names'> </slot>`<br>
需要template元素：`<template v-slot:names />`或`<template #names />`（ #：v-slot简称 ）
- 4. 动态插槽<br>
`<template v-slot:[slotName] />`
### 透析<br>
- 1. 默认插槽透析子组件的data作用域<br>
```
<SlotName v-slot="slotProps">{{ slotProps.propName }}</SlotName> // 父组件内引入的子组件
<slot :propName=“dataName” /> // 子组件内的插槽
```
- 2. 具名插槽的透析对象<br>
**v-slot：插槽标识=“遗传对象”**
```
<template v-slot:names=“slotProps”>{{ slotProps.dataName }}</template>
```