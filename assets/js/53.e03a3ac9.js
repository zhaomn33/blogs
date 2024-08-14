(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{508:function(n,t,a){"use strict";a.r(t);var s=a(2),i=Object(s.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h3",{attrs:{id:"切换菜单导航迟钝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切换菜单导航迟钝"}},[n._v("#")]),n._v(" 切换菜单导航迟钝")]),n._v(" "),t("ul",[t("li",[n._v("原因：当用户浏览应用程序时，React路由器会保留旧页面，因为数据正在加载到下一页")]),n._v(" "),t("li",[n._v("解决方法：在数据加载完成之前保持原来的状态，加载完成之后再路由跳转")]),n._v(" "),t("li",[n._v("useNavigation：解决 UI 界面响应迟钝的问题")])]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('import { useNavigation } from "react-router-dom";\n\nexport default function Root() {\n  const navigation = useNavigation();\n\n  return (\n    <>\n      <div className={navigation.state === "loading" ? "loading" : ""} >\n        <Outlet />\n      </div>\n    </>\n  )\n}\n')])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br")])]),t("h3",{attrs:{id:"outlet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#outlet"}},[n._v("#")]),n._v(" "),t("code",[n._v("<Outlet />")])]),n._v(" "),t("ul",[t("li",[n._v("嵌套路由\n"),t("ul",[t("li",[n._v("在父路由元素中使用，呈现其子路由元素\n"),t("ul",[t("li",[n._v("这允许在呈现子路由时显示嵌套ui")])])]),n._v(" "),t("li",[n._v("如果父路由完全匹配，它将呈现子索引路由，如果没有索引路由则不呈现")])])])]),n._v(" "),t("h3",{attrs:{id:"link"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#link"}},[n._v("#")]),n._v(" "),t("code",[n._v("<Link />")])]),n._v(" "),t("ul",[t("li",[n._v("页面间的跳转\n"),t("ul",[t("li",[n._v("一般跳转：\n"),t("ul",[t("li",[t("code",[n._v('<Link to="要跳转的页面的path" > 文字提示 </Link>')])])])]),n._v(" "),t("li",[n._v("替换跳转：\n"),t("ul",[t("li",[t("code",[n._v('<Link to="要跳转的页面的path" replace > 文字提示 </Link>')])])])]),n._v(" "),t("li",[n._v("跳转会触发整个页面的重新加载（跳转之后加载）：\n"),t("ul",[t("li",[t("code",[n._v('<Link to="要跳转的页面的path" reloadDocument > 文字提示 </Link>')])])])])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);