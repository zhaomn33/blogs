---
title: 2、this
author: 赵三三
date: '2023-2-27'
sidebar: auto
# sticky: 1
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
  // this.firstName 表示 this (person) 对象的 firstName 属性
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
    console.log(this.name); // zhar
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
obj.say()(); // 输出 ： tom
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
  return 1; // number string boolean 等
}
var p = new Person();
console.log(p.name); // zhar
```

### 4、事件对象

- 在DOM事件中使用`this`，`this`指向了出发事件的DOM元素本身（即，是谁调用的，`this`就指向谁）
```
li.onclick = function(){
    console.log(this.innerHTML);
}
```

## 三、修改this指向

::: tip
call、apply、bind，三者作用一致，使用方法不同<br>
1、都是改变函数的this指向<br>
2、第一个参数都是this要指向的对象，也就是想要指向的上下文<br>
3、都可以利用后续参数传餐<br>
4、bind是返回对应函数，便于稍后调用；apply和call是立即调用<br>
5、三者的参数不限定是string类型，允许是各种类型，包括函数、object等
:::

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
-  语法：`call（ theObj [，arg1[，arg2...[，argN]]] ）`，[ ] 代表可不写<br>
**·** theObj：this想要指向的对象<br>
**·** arg：传递的参数，不限，参数由逗号分开<br>
**·** 例：obj.myFun.call(db,'成都','上海')； // 参数为列表<br>
- theObj 传值情况：<br>
**·** 不传，或者传递null/undefined，函数中的this指向window对象<br>
**·** 传递另一个函数的函数名，this指向这个函数的引用<br>
**·** 传递字符串、数值 或布尔类型等 基础类型，this指向其对应的包装对象，如String、Number、Boolean<br>
**·** 传递一个对象，this指向这个对象<br>

```
var name = 'zhar';
function say(){
  console.log(this.name);
}
say(); // zhar   // this指向暂未改变
var obj = {
  name : 'tom',
  say : function(){
    console.log(this.name);
  }
}
say.call(obj); // tom    // 将 say 函数中的 this 替换为传入的对象
obj.say(); // tom
obj.say.call(null); // zhar   // 将 obj.say 函数的 this 替换为了 null，也就意味着指向了全局环境
```

### 3、apply方法

- `apply`是函数调用的一种形式，可以通过 `函数名.apply` 来调用函数
-  语法：`apply（ theObj [，argArray] ）`，[ ] 代表可不写<br>
**·** theObj：this想要指向的对象<br>
**·** argArray：传递的参数（ Array ），数组传参<br>
**·** 例：obj.myFun.call(db,['成都','上海'])；<br>

```
// apply 的传参
function say(arg1,arg2){
  console.log(this.name,arg1,arg2);
}
var obj = {
  name : 'tom',
  say : function(){
    console.log(this.name);
  }
}
say.apply(obj,['one','two']); // tom one two
```

### 4、bind方法

- `bind`方法会创建一个新函数，称为绑定函数，当调用这个绑定函数时，绑定函数会以创建它时**传入bind方法的第一个参数作为this**，传入`bind`方法的**第二个及以后的参数，加上绑定函数运行时本身的参数**，按照顺序作为原函数的参数来调用原函数。
- 注意：`bind`的返回值是函数
```
var bar = function(){
  console.log(this.x);
}
var foo = {
  x : 3
}
bar(); // undefined
var func = bar.bind(foo);
func(); // 3
```
- 传参时间：绑定时，或调用时
```
function obj2(x,y){
  this.style.background = "yellow";
  console.log(x+y)
}
oDiv1.onclick = obj2.bind(oDiv,1,2)(); // 绑定时传参
oDiv1.onclick = obj2.bind(oDiv)(1,2);  // 调用时传参
oDiv1.onclick = obj2.bind(oDiv,1)(2);  // 分别传参
```
- 三者对比使用
```
var obj = {
  x: 81,
}
var foo = {
  getX: function() {
    return this.x;
  }
}
console.log(foo.getX.bind(obj)());  // 81  // bind方法需要函数调用
console.log(foo.getX.call(obj));    // 81
console.log(foo.getX.apply(obj));   // 81
```