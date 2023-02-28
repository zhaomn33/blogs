---
title: 2、this
author: 赵三三
date: '2023-2-27'
sidebar: auto
sticky: 1
tags:
 - this
categories:
 - JS
---

## 一、this关键字

### 1、方法中的this

- 1. 在对象方法中，`this`指向调用它所在方法的对象<br>
- 2. 以下实例中，`this` 表示 `person` 对象，`fullName` 方法所属的对象就是 `person`<br>
```
var person = {
  firstName: "John",
  lastName : "Doe",
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
  //  this.firstName 表示 this (person) 对象的 firstName 属性
}
```

### 2、单独使用this

- 1. 单独使用`this`，则它指向全局（`Global`）对象（严格模式下单独使用也指向全局对象 `"use strict"` ）<br>
- 2. 在浏览器中，`window`是全局对象 （`[object Window]`）<br>

### 3、函数中使用this

- 1. 在函数中，函数的所属者默认绑定到`this`上
- 2. 在浏览器中，`window`是全局对象 （`[object Window]`）
- 3. 严格模式下，函数是没有绑定到 `this` 上的，这时候的`this`是 `undefined`

### 4、事件中的this

- 在HTML事件句柄中，`this`指向了接收事件的 HTML元素，例：
```
<button onclick="this.style.display='none'">
点我后我就消失了
</button>
```

### 5、对象方法中绑定this

- 以下实例中，this表示`person`对象，`person`对象是函数的所有者
```
var person = {
  firstName: "John",
  myFunction : function() {
    return this;
  }
}
```

### 6、显式函数绑定this

- 1. 在 `Javascript` 中函数也是对象，对象则有方法，`apply`和`call`就是函数对象的方法，这两个方法允许切换函数执行的上下文环境（`context`），即`this`绑定的对象
- 2. 以下实例中，当我们使用`person2`作为参数来调用 `person1.fullName` 方法时，`this`将指向`person2`，即使它是`person1`的方法
```
var person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person2 = {
  firstName:"John",
  lastName: "Doe",
}
person1.fullName.call(person2);  // 返回 "John Doe" ，利用call方法改变了this指向
```

## 二、this指向实例

### 1、全局环境

- 全局环境下，this代表`window`对象（针对web应用来说）
```
var name = 'zhar';
function say() {
  console.log(this.name); // zhar
}
say()
```
- 在 `setTimeout` 或 `setInterval` 这样的延迟函数中调用也属于全局对象
```
var name = 'zhar';
setTimeout(function(){
  console.log(this.name); // zhar
},0)
```

### 2、对象环境

- 对象环境指向对象
```
var obj = {
  name : "zhar",
  say : function(){
    console.log(this.name);//zhar
  }
}
obj.say()
```
- `this`的指向是由运行时的执行环境来决定的
```
var name = 'tom';
var obj = {
  name : "zhar",
  say : function(){
    console.log(this.name);
  }
}
var fun = obj.say;
fun() // 输出 ： tom 
// fun 定义在全局环境下，即 window.fun()
```
```
var name = 'tom';
var obj = {
  name : "zhar",
  say : function(){
    return function(){
      console.log(this.name);
    }
  }
}
obj.say()();//输出 ： tom
```

### 3、构造函数环境

- 1. 构造函数中的`this`会指向创建出来的实例对象<br>
（使用`new`调用构造函数时，会先创建出一个空对象，然后用`call`函数把构造函数中的`this`指针修改为指向这个空对象）<br>
执行完环境后，空对象就有了相关属性，然后将对象返回出去，不需要手动返回<br>
```
function Person() {
    this.name = 'zhar';
}
var p = new Person();
console.log(p.name);
```
- 2. 构造函数不需要返回值，如果我们指定一个返回值，`this`的指向将发生变化（如无必要，通常不要设置构造函数的返回值）<br>
如果构造函数返回对象(`Object`,`Array`,`Function`)，那 `this` 将指向这个对象，其它基础类型则不受影响<br>
```
function Person() {
  this.name = 'zhar';
  return { };
}
var p = new Person();
console.log(p.name); // undefined
```
```
function Person() {
  this.name = 'zhar';
  return { name : 'tom' };
}
var p = new Person();
console.log(p.name); // tom 
```
```
function Person() {
  this.name = 'zhar';
  return 1;//number string boolean 等
}
var p = new Person();
console.log(p.name);//zhar
```

### 4、事件对象

- 在DOM事件中使用`this`，`this`指向了出发事件的DOM元素本身（即，是谁调用的，`this`就指向谁）
```
li.onclick = function(){
    console.log(this.innerHTML);
}
```

## 三、修改this指向

### 1、用局部变量代替this指针

```
var name = "zhar";
var obj = {
  name : "zhar11",
  say : function(){
    var _this = this; // 使用一个变量指向 this
    setTimeout(function(){
      console.log(_this.name);
    },0);
  }
}
obj.say(); // zhar11
```

### 2、call方法

- `call`是函数调用的一种形式，可以通过 `函数名.call` 来调用函数