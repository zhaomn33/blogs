---
title: 2、component
author: 赵三三
date: '2023-2-14'
sidebar: auto
# sticky: 1
tags:
 - 内置特殊元素
categories:
 - vue
---

::: tip
一个用来渲染动态组件或元素的“元组件”
:::

### props<br>
- 1. 要渲染的实际组件由 `is` prop 决定<br>
- 2. 如果 `is` 是字符串，它既可以是HTML标签名，也可以是组件的注册名<br>
- 3. `is` 也可以直接绑定到组件的定义<br>
- 4. 内置组件都可以传给 `is` ，但若想通过名称传递，则必须先对其进行注册<br>
- 5. 如果想把组件本身传递给 `is` 而不是名称，则不需要注册，比如写在 `<script setup>` 中<br>

### 示例<br>
- 1. 渲染HTML元素<br>
```
<component :is="href ? 'a' : 'span'"></component>
```
- 2. 按注册名渲染组件<br>
```
<script>
import Foo from './Foo.vue'

export default {
  components: { Foo },
  data() {
    return {
      view: 'Foo'
    }
  }
}
</script>

<template>
  <component :is="view" />
</template>
```
- 3. 按定义渲染组件<br>
```
<script setup>
import Foo from './Foo.vue'
import Bar from './Bar.vue'
</script>

<template>
  <component :is="Math.random() > 0.5 ? Foo : Bar" />
</template>
```
- 3. 内置组件<br>
```
<script>
import { Transition, TransitionGroup } from 'vue'

export default {
  components: {
    Transition,
    TransitionGroup
  }
}
</script>

<template>
  <component :is="isGroup ? 'TransitionGroup' : 'Transition'" />
</template>
```
### 使用v-model<br>
- 1. 如果在component标签上使用v-model，模板编译器会将其编译为 `modelValue` prop 和 `update:modelValue` 事件监听器，和其他组件一样<br>
- 2. 与原生HTML元素不兼容，例如 `<input>` 或 `<select>`，因此在动态创建的原生元素上将不起作用，若需要使用原生元素，则需要手动将v-model拆成 attribute（属性） 和事件<br>