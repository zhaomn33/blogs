---
title: js精度丢失
author: 赵三三
date: '2023-6-26'
sidebar: auto
sticky: 1
tags:
 - js
categories:
 - js
---

### 精度丢失原因
- 因为浮点数在内存中以二进制的形式存储，而某些十进制数无法精准的转换成二进制表示，当计算时，就会出现舍入误差。

[点击查看具体文章](https://juejin.cn/post/7248606482014928953)

### 解决方法 - 使用三方库
- decimal.js - 可以精确表示浮点数，解决精度丢失问题
   - [官方文档](https://mikemcl.github.io/decimal.js/)
- bignumber.js - 提供了超高精度的数字处理能力，可以解决精度丢失问题
   - [官方文档](https://mikemcl.github.io/bignumber.js/)