(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{497:function(a,r,e){"use strict";e.r(r);var s=e(2),t=Object(s.a)({},(function(){var a=this,r=a._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h2",{attrs:{id:"一、创建或填充任意长度数组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、创建或填充任意长度数组"}},[a._v("#")]),a._v(" 一、创建或填充任意长度数组")]),a._v(" "),r("h3",{attrs:{id:"_1、直接填充"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、直接填充"}},[a._v("#")]),a._v(" 1、直接填充")]),a._v(" "),r("ul",[r("li",[a._v("手动填充所需要的长度")])]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("const arr = [0,0,0];\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br")])]),r("h3",{attrs:{id:"_2、for循环push法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、for循环push法"}},[a._v("#")]),a._v(" 2、for循环"),r("code",[a._v("push")]),a._v("法")]),a._v(" "),r("ul",[r("li",[a._v("与直接填充类似，利用for循环填充需要的长度")])]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var len = 3;\nvar arr = [];\nfor (let i=0; i < len; i++) {\n  arr.push(0);\n}\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br")])]),r("h3",{attrs:{id:"_3、array构造函数法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3、array构造函数法"}},[a._v("#")]),a._v(" 3、Array构造函数法")]),a._v(" "),r("ul",[r("li",[r("code",[a._v("Array(7)")]),a._v(" : 创建length为7的空数组")]),a._v(" "),r("li",[a._v("利用"),r("code",[a._v("fill()")]),a._v("方法填充数组")])]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var len = 3;\nvar arr = new Array(len).fill(0);\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br")])]),r("ul",[r("li",[a._v("如果用对象作为参数去"),r("code",[a._v("fill()")]),a._v("一个数组，所有元素都会引用同一实例（即此对象没有被克隆多份），"),r("code",[a._v("Array.from()")]),a._v("没有这个问题")])]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var len = 3;\nvar obj = {};\nvar arr = new Array(len).fill(obj);\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br")])]),r("h3",{attrs:{id:"_4、array-of"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4、array-of"}},[a._v("#")]),a._v(" 4、Array.of()")]),a._v(" "),r("ul",[r("li",[a._v("创建具有元素的数组，而非空槽")]),a._v(" "),r("li",[r("code",[a._v("Array.of(7)")]),a._v(" 返回 "),r("code",[a._v("[7]")])])]),a._v(" "),r("h3",{attrs:{id:"_5、array-from"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5、array-from"}},[a._v("#")]),a._v(" 5、Array.from()")]),a._v(" "),r("ul",[r("li",[a._v("使用"),r("code",[a._v("undefined")]),a._v("填充数组\n"),r("ul",[r("li",[a._v("Array.from( { length: 3 } )     //  [ undefined, undefined, undefined ]")]),a._v(" "),r("li",[a._v("[...new Array(3)]  // 此方法与上面类似，也是填充undefined")])])]),a._v(" "),r("li",[a._v("用"),r("code",[a._v("值")]),a._v("填充数组\n"),r("ul",[r("li",[a._v("Array.from({length: 3}, () => 0)    // [ 0, 0, 0 ]")])])]),a._v(" "),r("li",[a._v("使用唯一（非共享）的"),r("code",[a._v("对象")]),a._v("填充数组\n"),r("ul",[r("li",[a._v("Array.from({length: 3}, () => ({}))    // [ {}, {}, {} ]")])])]),a._v(" "),r("li",[a._v("用"),r("code",[a._v("升序整数数列")]),a._v("创建数组\n"),r("ul",[r("li",[a._v("Array.from({length: 3}, (x, i) => i)    // [ 0, 1, 2 ]")]),a._v(" "),r("li",[a._v("使用 "),r("code",[a._v("keys()")]),a._v(" : [...new Array(3).keys()]     // [ 0, 1, 2 ]")])])]),a._v(" "),r("li",[a._v("用任意范围的整数进行创建\n"),r("ul",[r("li",[a._v("var start = 2, end = 5;  Array.from({ length: end - start }, (x, i) => i + start)    // [ 2, 3, 4 ]")])])])]),a._v(" "),r("h2",{attrs:{id:"二、数组的方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、数组的方法"}},[a._v("#")]),a._v(" 二、数组的方法")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://blog.csdn.net/weixin_51338875/article/details/127820757",target:"_blank",rel:"noopener noreferrer"}},[a._v("很详细 ==>"),r("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=t.exports}}]);