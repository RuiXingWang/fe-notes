(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{222:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/post/5c09a80151882521c81168a2",target:"_blank",rel:"noopener noreferrer"}},[t._v("你不知道的Chrome调试工具技巧"),s("OutboundLink")],1),t._v("\n作者翻译的特别棒，共有24天的内容，下面是在看过程的一点点总结，希望自己在后面能多去浏览几次"),s("a",{attrs:{href:"https://juejin.im/post/5c09a80151882521c81168a2",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文"),s("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("如果你没有在 App 中定义过 $ 变量 (例如 jQuery )的话，它在 console 中就是对这一大串函数 document.querySelector 的别名。\n如果是 $$ 就更加厉害了，还能节省更多的时间，因为它不仅执行 document.QuerySelectorAll 并且它返回的是：一个节点的 数组 ，而不是一个 Node list")]),t._v(" "),s("p",[t._v("$$('div')即Array.from(document.querySelectorAll('div'))")]),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("代表上次的计算结果")]),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("在chrome中安装插件"),s("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fchrome.google.com%2Fwebstore%2Fdetail%2Fconsole-importer%2Fhgajpakhafplebkdljleajgbpdmplhie%2Frelated",target:"_blank",rel:"noopener noreferrer"}},[t._v("Console Importer"),s("OutboundLink")],1),t._v("，可快速在console中引入npm库。$i('moment'),$i('Immutable')")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),s("p",[t._v("出错信息可以在前方小三角处点击右键 save as。。。然后来发给别人一起看")]),t._v(" "),t._m(17),t._v(" "),s("p",[t._v("选中html元素，cmd+c,cmd+v即复制粘贴完成")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),s("p",[t._v("其可以替代if来方便做一些事情，在第一个参数为假的时候，后面的执行")]),t._v(" "),t._m(22),t._v(" "),s("p",[t._v("数组或者对象都可以打印成表格的形式，可缩放，可排序，可传入第二个参数来制定表头")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),s("p",[t._v("打印一个 DOM 节点,想要查看这个节点所关联到的真实的 JavaScript 对象呢？并且想要查看他的属性等等")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),s("p",[t._v("可以按下 'h' 来隐藏在元素面板中被你选中的元素(页面上这块元素就暂时消失了，但是仍占位）。再次按下 'h' 使它出现")]),t._v(" "),t._m(34),t._v(" "),s("p",[t._v("在Elements中，可以直接拖动某个元素进行换位置，在页面中查看不同位置的显示效果")]),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),s("p",[t._v("可以对某个元素直接进行截图。")]),t._v(" "),s("p",[t._v("选中此元素，然后cmd+shift+p打开command菜单，然后输入screen，使用Capture node screenshot，即可保存为图片。这便可以实现插件实现的截取长页面的方法。")]),t._v(" "),t._m(43),t._v(" "),s("p",[t._v("cmd+shift+p打开command菜单，然后搜索layout得到两种外观选项，分别是样式的位置和dom在一排还是在其下方的区别")]),t._v(" "),t._m(44),t._v(" "),s("p",[t._v("cmd+shift+p打开command菜单,然后搜索theme，可以切换dark或者light主题，虽然说dark很漂亮。但是真的用习惯了light。")]),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47),t._v(" "),s("p",[t._v("点击contrast ratio的小三角然后在上面的颜色中就会出现一条线，线上面的颜色表明此文本颜色与背景对比不好，线下面的颜色表明此文本颜色与背景色对比好，同时会显示禁止符号和绿色的对号")]),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),s("p",[t._v("cmd+shift+p打开command菜单，搜索time，点击show timeStamps/hide timeStamps，可以在console中显示的内容前面显示出时间")]),t._v(" "),t._m(50),t._v(" "),t._m(51),t._v(" "),s("p",[t._v("如果想一次记录多件事，可以往这些函数中传入不同的标签值。(例如:console.time('loading'), console.timeEnd('loading'))")]),t._v(" "),t._m(52),t._v(" "),t._m(53),t._v(" "),t._m(54),t._v(" "),t._m(55),t._v(" "),t._m(56),t._v(" "),t._m(57),t._v(" "),t._m(58),t._v(" "),t._m(59),t._v(" "),t._m(60),t._v(" "),s("p",[t._v("在source中添加断点时，右键可以添加Add confitional breakpoint条件断点。或者对已经设置好的一个断点右键选edit breakpoint。输入一个执行结果为boolean的表达式，即可；（可以设置在第11次循环时断点）")]),t._v(" "),t._m(61),t._v(" "),s("p",[t._v("写代码时没有给代码中添加console.log。或者是在断点执行到这里，需要每次去console中打印出变量来查看，那么可以利用条件断点来添加 console.log / console.table / console.time。执行完后，可以在右边breakpoints下方 右键移除所有断点。")]),t._v(" "),t._m(62),t._v(" "),t._m(63),t._v(" "),s("p",[t._v("可以查看某个元素是在什么时候修改的，监听到节点被添加或者移除，或属性被改变；")]),t._v(" "),t._m(64),t._v(" "),t._m(65),t._v(" "),t._m(66),t._v(" "),s("p",[t._v("监测XHR/fetch 断点。")]),t._v(" "),t._m(67),t._v(" "),t._m(68),t._v(" "),t._m(69),t._v(" "),s("p",[t._v("定义了对象后，然后实例化对象后，queryObjects(Person)可以列表出这几个实例化的对象。")]),t._v(" "),t._m(70),t._v(" "),s("p",[t._v("可以监测1函数。在执行2函数中，如果2调用了1，就会打印出来2调用了1，并传入了什么参数。")]),t._v(" "),t._m(71),t._m(72),t._v(" "),t._m(73),t._v(" "),s("p",[t._v("可以监测元素上的事件")]),t._v(" "),t._m(74),t._v(" "),t._m(75),t._v(" "),t._m(76),t._v(" "),t._m(77),t._v(" "),t._m(78),t._v(" "),t._m(79),t._v(" "),t._m(80),t._v(" "),s("p",[t._v("右击节点后的 expand recursively 命令")]),t._v(" "),t._m(81),t._v(" "),t._m(82),t._v(" "),s("p",[t._v("下面的console等出现隐藏的快捷键——esc")]),t._v(" "),t._m(83),t._v(" "),t._m(84),t._v(" "),s("p",[t._v("--这节所说的托文件进去直接编辑，我测试不可行")]),t._v(" "),t._m(85),t._v(" "),s("p",[t._v("创建这样一个 Snippet 进入到 Sources 面板，在导航栏里面选中 Snippets 这栏，点击 “New snippet(新建一个代码块)” ,输入你的代码，保存，大功告成！你可以通过右击菜单或者 [ctrl] + [enter] 快捷键来运行它了。")]),t._v(" "),t._m(86),t._v(" "),t._m(87),t._v(" "),s("p",[t._v("一旦设置了一组很棒的代码块，你甚至不必访问 Sources 来运行它们。最快的方式，就像我们本周已经多次发现的那样，就是使用 Command Menu。如果输入 ! 在它的输入框中，就可以根据名字来选择你的代码块")]),t._v(" "),t._m(88),t._v(" "),t._m(89),t._v(" "),t._m(90),t._v(" "),t._m(91),t._v(" "),s("p",[t._v("不完全确定要将什么传递给回调函数。在这种情况下，我会在里面添加一个 console.log 来检查。")]),t._v(" "),t._m(92),t._v(" "),t._m(93),t._v(" "),s("p",[t._v("DevTools 在 Console 面板中引入了一个非常漂亮的附加功能，这是一个名为 Live expression 的工具")]),t._v(" "),t._m(94),t._v(" "),s("blockquote",[s("p",[t._v("感谢"),s("a",{attrs:{href:"https://juejin.im/user/585a2f52128fe10069ba1b95",target:"_blank",rel:"noopener noreferrer"}},[t._v("dendoink"),s("OutboundLink")],1),t._v("翻译了这篇"),s("a",{attrs:{href:"https://juejin.im/post/5c09a80151882521c81168a2",target:"_blank",rel:"noopener noreferrer"}},[t._v("你不知道的Chrome调试工具技巧"),s("OutboundLink")],1),t._v("，并且翻译的这么棒！")])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"chrome调试工具技巧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chrome调试工具技巧","aria-hidden":"true"}},[this._v("#")]),this._v(" Chrome调试工具技巧")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. $")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-0","aria-hidden":"true"}},[this._v("#")]),this._v(" 1). $0")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("在 Chrome 的 Elements 面板中，"),s("code",[t._v("$0")]),t._v("是当前我们选中的html节点的引用。"),s("code",[t._v("$1")]),t._v("是上一次的，"),s("code",[t._v("$2")]),t._v("是上上一次..."),s("code",[t._v("$4")]),t._v("是上上上一次的。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://i.loli.net/2019/03/19/5c905e1c1b7e4.png",alt:"WX20190319-111216.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("可试用——"),e("code",[this._v("$1.appendChild($0)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2","aria-hidden":"true"}},[this._v("#")]),this._v(" 2). $, $$")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3","aria-hidden":"true"}},[this._v("#")]),this._v(" 3). $_")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4-i"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-i","aria-hidden":"true"}},[this._v("#")]),this._v(" 4). $i")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2-copy-e5-92-8c-save-2-copy-和-save"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-copy-e5-92-8c-save-2-copy-和-save","aria-hidden":"true"}},[this._v("#")]),this._v(" 2-copy-%E5%92%8C-save) 2.copy 和 save")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-copy-1-copy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-copy-1-copy","aria-hidden":"true"}},[this._v("#")]),this._v(" 1-copy) 1).copy")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("copy(data)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("copy($_)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("copy($0)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-store-as-global"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-store-as-global","aria-hidden":"true"}},[this._v("#")]),this._v(" 2).Store as global")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("console里的数据变量，可以变成全局变量，来用。自动创建名称"),e("code",[this._v("temp1")]),this._v("，"),e("code",[this._v("temp2")]),this._v("...\n"),e("img",{attrs:{src:"https://i.loli.net/2019/03/19/5c908bffaf3e9.png",alt:"WX20190319-142801@2x.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-保存-stack-trace-堆栈跟踪"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-保存-stack-trace-堆栈跟踪","aria-hidden":"true"}},[this._v("#")]),this._v(" 3).保存(Stack trace)堆栈跟踪")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4-copy-html片段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-copy-html片段","aria-hidden":"true"}},[this._v("#")]),this._v(" 4).copy html片段")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_3-console"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-console","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.console")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-console-assert"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-console-assert","aria-hidden":"true"}},[this._v("#")]),this._v(" 1).console.assert")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("语法：\n"),e("code",[this._v("console.assert(assertion, obj1[,obj2,...,objN])")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://i.loli.net/2019/03/19/5c908e41e0e54.png",alt:"WX20190319-143743.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-console-table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-console-table","aria-hidden":"true"}},[this._v("#")]),this._v(" 2).console.table")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://i.loli.net/2019/03/19/5c908f3a49d79.png",alt:"WX20190319-144151@2x.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-console-dir"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-console-dir","aria-hidden":"true"}},[this._v("#")]),this._v(" 3).console.dir")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://i.loli.net/2019/03/19/5c908fb792bf3.png",alt:"WX20190319-144355.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4-console-log设置不同的样式显示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-console-log设置不同的样式显示","aria-hidden":"true"}},[this._v("#")]),this._v(" 4).console.log设置不同的样式显示")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%c'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'color:red;background-color:pink;font-size:20px;'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zhang'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://i.loli.net/2019/03/19/5c90c3bf749ae.png",alt:"WX20190319-182515@2x.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_5-更清晰的打印出来多个变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-更清晰的打印出来多个变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 5).更清晰的打印出来多个变量")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tom"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" user "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zhang'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("111")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://i.loli.net/2019/03/19/5c90c7dce1b3d.png",alt:"WX20190319-184325@2x.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_4-the-elements-panel（元素面板）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-the-elements-panel（元素面板）","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. the Elements panel（元素面板）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-通过-h-来隐藏"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-通过-h-来隐藏","aria-hidden":"true"}},[this._v("#")]),this._v(" 1).通过 'h' 来隐藏")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-拖动-放置-元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-拖动-放置-元素","aria-hidden":"true"}},[this._v("#")]),this._v(" 2). 拖动 & 放置 元素")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-上下移动dom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-上下移动dom","aria-hidden":"true"}},[this._v("#")]),this._v(" \\3).上下移动dom")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("可以使用"),e("code",[this._v("[ctrl] + [⬆] / [ctrl] + [⬇] ( [⌘] + [⬆] / [⌘] + [⬇] on Mac)")]),this._v("将选中的dom节点上移或者下移。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4-取消刚才的操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-取消刚才的操作","aria-hidden":"true"}},[this._v("#")]),this._v(" \\4).取消刚才的操作")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("使用 "),e("code",[this._v("[ctrl] + [z] ([⌘] + [z] on Mac)")]),this._v("撤销我们的任何改动。 使用"),e("code",[this._v("[ctrl] + [shift] + [z]")]),this._v(" 重新编辑我们的任何修改。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_5-command菜单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-command菜单","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. command菜单")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-command-命令-菜单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-command-命令-菜单","aria-hidden":"true"}},[this._v("#")]),this._v(" 1). Command (命令) 菜单")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("cmd+shift+p（或者右上角三点出点Run command）即可调出来command菜单。\n"),e("img",{attrs:{src:"https://i.loli.net/2019/03/19/5c909a5f42b0b.png",alt:"WX20190319-152926@2x.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-command命令截图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-command命令截图","aria-hidden":"true"}},[this._v("#")]),this._v(" 2). command命令截图")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-layout实现横或者纵向布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-layout实现横或者纵向布局","aria-hidden":"true"}},[this._v("#")]),this._v(" 3).layout实现横或者纵向布局")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4-切换主题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-切换主题","aria-hidden":"true"}},[this._v("#")]),this._v(" 4).切换主题")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_6-color-picker（颜色选择器）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-color-picker（颜色选择器）","aria-hidden":"true"}},[this._v("#")]),this._v(" 6.Color picker（颜色选择器）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-文本和背景的对比色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-文本和背景的对比色","aria-hidden":"true"}},[this._v("#")]),this._v(" 1). 文本和背景的对比色")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://i.loli.net/2019/03/19/5c90a72c17976.png",alt:"WX20190319-162357.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_7-给-console-计时"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-给-console-计时","aria-hidden":"true"}},[this._v("#")]),this._v(" 7.给 console 计时")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-显示时间戳"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-显示时间戳","aria-hidden":"true"}},[this._v("#")]),this._v(" 1). 显示时间戳")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-console-time"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-console-time","aria-hidden":"true"}},[this._v("#")]),this._v(" 2). console.time()")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("console.time() — 开启一个计时器")]),this._v(" "),e("li",[this._v("console.timeEnd() — 结束计时并且将结果在 console 中打印出来")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_8-style-editors（样式编辑器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-style-editors（样式编辑器","aria-hidden":"true"}},[this._v("#")]),this._v(" 8.style editors（样式编辑器)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-shadow-editor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-shadow-editor","aria-hidden":"true"}},[this._v("#")]),this._v(" 1). shadow editor")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在box-shadow或者text-shadow前面如同点击color picker的地方有一个图标点开后，可以调整shadow值。同时在页面上可看到效果。great！\n"),e("img",{attrs:{src:"https://i.loli.net/2019/03/19/5c90b7e238a45.png",alt:"WX20190319-173457@2x.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-timing-function-editor-定时函数编辑器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-timing-function-editor-定时函数编辑器","aria-hidden":"true"}},[this._v("#")]),this._v(" 2). Timing function editor 定时函数编辑器")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("animation中的贝塞尔变化函数也可以编辑\n"),e("img",{attrs:{src:"https://i.loli.net/2019/03/19/5c90b834d5210.png",alt:"WX20190319-173640@2x.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-插入样式规则的按钮"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-插入样式规则的按钮","aria-hidden":"true"}},[this._v("#")]),this._v(" 3). 插入样式规则的按钮")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("鼠标放在样式最后三个点处，就会出现五个按钮，添加字体阴影、阴影、颜色、背景色以及添加一个写样式的入口\n"),e("img",{attrs:{src:"https://i.loli.net/2019/03/19/5c90b951f3b94.png",alt:"WX20190319-174131.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_9-断点设置技巧（超有用）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-断点设置技巧（超有用）","aria-hidden":"true"}},[this._v("#")]),this._v(" 9.断点设置技巧（超有用）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-js条件断点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-js条件断点","aria-hidden":"true"}},[this._v("#")]),this._v(" 1). js条件断点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-js-the-ninja（忍者）-console-log"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-js-the-ninja（忍者）-console-log","aria-hidden":"true"}},[this._v("#")]),this._v(" 2). (js)The ninja（忍者） console.log")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://i.loli.net/2019/03/19/5c90bab96b208.png",alt:"WX20190319-174726@2x.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-dom-断点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-dom-断点","aria-hidden":"true"}},[this._v("#")]),this._v(" 3). DOM 断点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://i.loli.net/2019/03/19/5c90c5951c1f5.png",alt:"WX20190319-183155@2x.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("担心你添加了断点的元素被隐藏在一些折叠起来的父级元素中 - 他们会在 Element 中用高亮展示出来。\n"),e("img",{attrs:{src:"https://i.loli.net/2019/03/19/5c90c595d6dd9.png",alt:"WX20190319-183215@2x.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4-mutationobserver-（变化观察者）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-mutationobserver-（变化观察者）","aria-hidden":"true"}},[this._v("#")]),this._v(" 4).MutationObserver （变化观察者）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("可以不设置url时，对所有的请求打断点。或者写url的一部分，对此请求打断点\n"),e("img",{attrs:{src:"https://i.loli.net/2019/03/19/5c90c59778c75.png",alt:"WX20190319-183227@2x.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_10-对象-方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-对象-方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 10. 对象&方法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-queryobjects-function-对象查询方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-queryobjects-function-对象查询方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 1). queryObjects function 对象查询方法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-monitor-functions-镜像函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-monitor-functions-镜像函数","aria-hidden":"true"}},[this._v("#")]),this._v(" 2). monitor functions 镜像函数")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zhang'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test121")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'li'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://i.loli.net/2019/03/19/5c90bcbd6d2cd.png",alt:"WX20190319-175602@2x.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-monitorevents函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-monitorevents函数","aria-hidden":"true"}},[this._v("#")]),this._v(" 3).monitorEvents函数")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://i.loli.net/2019/03/19/5c90c298eddf8.png",alt:"WX20190319-182041@2x.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_11-快捷键"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-快捷键","aria-hidden":"true"}},[this._v("#")]),this._v(" 11.快捷键")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("h 隐藏元素")]),t._v(" "),s("li",[t._v("ctrl + /many things really/ 来移动或者复制粘贴元素")]),t._v(" "),s("li",[t._v("ctrl + shift + P 来控制 控制面板 的显示和隐藏")]),t._v(" "),s("li",[t._v("ctrl + shift + D来切换控制台在下方还是右方")]),t._v(" "),s("li",[t._v("ctrl+[,ctrl+]来在elements、console、source等之间依次切换")]),t._v(" "),s("li",[t._v("按下 ctrl + 1 到 ctrl + 9 转到编号 1...9 的面板(所以 ctrl + 1 转到元素面板，ctrl + 4 转到 网络信息面板等等)[默认未开启，需在settings中开启；同时如果在页面中，这组操作会切换浏览器标签页）")]),t._v(" "),s("li",[t._v("还有数值增加减少的\n"),s("img",{attrs:{src:"https://i.loli.net/2019/03/19/5c90c21de0359.png",alt:"WX20190319-181841@2x.png"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_13-小技巧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-小技巧","aria-hidden":"true"}},[this._v("#")]),this._v(" 13 小技巧")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-replay-xhr-requests-重新发送-xhr-的请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-replay-xhr-requests-重新发送-xhr-的请求","aria-hidden":"true"}},[this._v("#")]),this._v(" 1).replay XHR requests (重新发送 XHR 的请求)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://i.loli.net/2019/03/19/5c90c4225416f.png",alt:"WX20190319-182734@2x.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-在元素面板中展开所有的子节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-在元素面板中展开所有的子节点","aria-hidden":"true"}},[this._v("#")]),this._v(" 2). 在元素面板中展开所有的子节点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://i.loli.net/2019/03/19/5c90c4b612719.png",alt:"WX20190319-182955@2x.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_14-drawer-14-drawer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_14-drawer-14-drawer","aria-hidden":"true"}},[this._v("#")]),this._v(" 14-drawer) 14. Drawer")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("coverage可以检查代码哪些运行了（绿色），哪些没运行（红色）")]),this._v(" "),e("li",[this._v("change 可以显示你更改前后的代码\n（在styles中更改了css后，ctrl+shift+p 搜change，点击drawer change就可以看到这个样式修改前后的内容）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_15-workspace的黑魔法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_15-workspace的黑魔法","aria-hidden":"true"}},[this._v("#")]),this._v(" 15. Workspace的黑魔法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_16-snippets-代码块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16-snippets-代码块","aria-hidden":"true"}},[this._v("#")]),this._v(" 16. Snippets(代码块)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://i.loli.net/2019/03/21/5c93092df1348.png",alt:"WX20190321-114535@2x.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("只能在本页面使用这些保存的snippets")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_17-network"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_17-network","aria-hidden":"true"}},[this._v("#")]),this._v(" 17.network")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("可显示隐藏overview")]),this._v(" "),e("li",[this._v("initiator 列显示了是哪个脚本的哪一行触发了请求，可点击查看")]),this._v(" "),e("li",[this._v("过滤器输入可以接受你输入的字符串或正则表达式，仅显示匹配的请求；可以使用它来过滤很多属性。\n例如 method 或者 mime-type")]),this._v(" "),e("li",[this._v("可自定义请求表；例如：Status, Type, Initiator, Size 和 Time 。但是你同样可以添加更多(例如 我经常添加 Method )")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_18-tips"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_18-tips","aria-hidden":"true"}},[this._v("#")]),this._v(" 18.tips")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1-直接在回调中使用-console-log"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-直接在回调中使用-console-log","aria-hidden":"true"}},[this._v("#")]),this._v(" 1). 直接在回调中使用 console.log")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在回调方法的内部使用 console.log 或者 直接使用 consolelog 来作为回调方法。这不仅可以减少输入，而且可能回调接收多于1个参数，在第一个解决方案中你可能会错过\n"),e("img",{attrs:{src:"https://i.loli.net/2019/03/21/5c930bd777a63.png",alt:"WX20190321-115807@2x.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-使用实时表达式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用实时表达式","aria-hidden":"true"}},[this._v("#")]),this._v(" 2).使用实时表达式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('只需按下 "眼睛" 符号，你就可以在那里定义任何 JavaScript 表达式。 它会不断更新，所以表达的结果将永远，存在\n'),e("img",{attrs:{src:"https://i.loli.net/2019/03/21/5c930c11be020.png",alt:"WX20190321-115906@2x.png"}})])}],!1,null,null,null);e.default=r.exports}}]);