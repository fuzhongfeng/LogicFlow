(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{385:function(t,s,a){"use strict";a.r(s);var n=a(22),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"揭秘-logicflow-的拓展机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#揭秘-logicflow-的拓展机制"}},[t._v("#")]),t._v(" 揭秘 LogicFlow 的拓展机制")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("自从 "),a("a",{attrs:{href:"https://github.com/didi/LogicFlow",target:"_blank",rel:"noopener noreferrer"}},[t._v("LogicFlow"),a("OutboundLink")],1),t._v(" 正式开源后，受到的关注比我们想象的要多。在最开始打算要做 LogicFlow 的时候，我们花了很多的精力去讨论要做一个什么样的流程可视化库。其中一个选择是基于现有的业务直接实现一个开箱即用，包括了所有的流程编辑库常用功能的库。但是最终还是没有选择这样做，"),a("strong",[t._v("因为我们当时的背景是：不同的项目中，在流程图的外观、后台所需数据格式都存在较大的差异。")]),t._v(" 有些项目用的是 activiti, 有些是某些团队自研的流程引擎。"),a("strong",[t._v("所以我们需要做一个能支持各系统平滑迁移的流程可视化库，需要这个库足够的灵活，视觉上也要满足个各系统自己的风格，而且最好是流程图上的各种功能都可以自按需使用。")])]),t._v(" "),a("h2",{attrs:{id:"基于插件化的拓展机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于插件化的拓展机制"}},[t._v("#")]),t._v(" 基于插件化的拓展机制")]),t._v(" "),a("h3",{attrs:{id:"配置化-or-插件化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置化-or-插件化"}},[t._v("#")]),t._v(" 配置化 or 插件化？")]),t._v(" "),a("p",[t._v("我们对于如何将 LogicFlow 实现成一个足够灵活的流程可视化库存在两种想法。一种是一切皆可配置，也就是配置化。这个是很多可视化库的做法，最典型的就是 ECharts，用过 ECharts 的人应该都知道，它的配置功能特别丰富，几乎可以做到配置任何图上的元素的效果，从而达到业务开发者需要的自定义效果。")]),t._v(" "),a("p",[t._v("但是对于我们来说，配置化为了保持其提供足够的灵活性，我们需要在内部维护太多的 UI 相关的逻辑。以一个节点为例：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b67a55c2d6ab4f04b6d67a8a01ae8567~tplv-k3u1fbpfcp-zoom-1.image",alt:"LogicFlow1"}})]),t._v(" "),a("p",[t._v("如果是采用配置化的方式的话，开发者传入的配置大致是：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rect'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  icon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://example-icon.com/settings.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'22\\n33333'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("我们就需要在内部代码中判断传入的参数是否有 icon，如果有，就在左上角显示 icon。但是有的流程希望自己在左上角显示的是文本，我们可能就要再增加一个字段 nodeText 来控制了。那如果我们想显示一个图标在右边呢？想里面显示 3 列文本呢？")]),t._v(" "),a("p",[t._v("总的来说，配置化虽然对业务开发者足够友好，只需要文档足够完善，库内部兼容的效果足够多，就可以达到很好的效果。但是对于我们来说却是需要付出很大的成本去实现各种效果，而且很可能因为一些其他情况，舍弃支持一些不常用的效果。从长远来看，这种配置化方案对我们来说还是不够灵活的。")]),t._v(" "),a("p",[t._v("另一种方案就是插件化，就是将不断变化的非核心功能分散到插件中，避免其与核心代码耦合，保持其核心部分代码简洁和稳定。在插件化方案下，我们就可以实现一个支持设置 icon 节点就好了，至于其它特殊需求的节点，就有用户自己利用自定义机制来实现即可。而且开放到社区后，其它开发者自定义的内容也可以当做一个插件，贡献到 LogicFlow 中来。")]),t._v(" "),a("p",[t._v("插件化会带来很多好处：")]),t._v(" "),a("ol",[a("li",[t._v("让更多前端社区的人参与进来，即使插件部分写的代码存在问题，也不会影响核心代码。")]),t._v(" "),a("li",[t._v("二次扩展开发，比如我们计划之后会在扩展包中实现一个 lf-bpmn 插件，使用此插件可以兼容 bpmn2.0 规范的流程设计器。也可以增加一个绘制 venn 图的 lf-venn 插件，来实现在使用 LogicFlow 绘制 venn 图。甚至以后可以每种形态的流程图编辑，我们都可以实现一个对应的插件。")]),t._v(" "),a("li",[t._v("灵活的自定义功能，菜单、工具栏、画板等都做成插件，开发者觉得不符合他们业务需求，则可以不用这些插件而是改成自己开发。")])]),t._v(" "),a("h3",{attrs:{id:"api-健全性-稳定性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-健全性-稳定性"}},[t._v("#")]),t._v(" API 健全性&稳定性")]),t._v(" "),a("p",[t._v("什么是插件？插件是在核心程序上遵循其提供出来的接口规范再次编写的出来的程序。插件是不能脱离核心程序单独存在的，是一种对核心程序功能的扩展。所以个人觉得插件化最重要的一点就是核心程序的 API 健全性和稳定性。如果我们的 API 不够完善，社区开发者是无法开发出符合其需求的插件；如果我们的 API 变化很大，很有可能导致之前开发的插件在我们版本升级后就不能用了，会导致整个 LogicFlow 的社区生态混乱。")]),t._v(" "),a("p",[t._v("为了保证 API 的健全性和稳定性，我们做了这些事情：")]),t._v(" "),a("ol",[a("li",[t._v("严格遵循开源版本规范。保障 LogicFlow 的发版对周边生态影响的可控。")]),t._v(" "),a("li",[t._v("API 变化的时候重点考虑向前兼容。")]),t._v(" "),a("li",[t._v("通过足够多的内置插件来验证 API 的健全性和稳定性。")])]),t._v(" "),a("h3",{attrs:{id:"内置插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置插件"}},[t._v("#")]),t._v(" 内置插件")]),t._v(" "),a("p",[t._v("如果我们只提供表示这图编辑部分的"),a("code",[t._v("@logicflow/core")]),t._v("，那么意味 LogicFlow 就是一个半成品，既不利于推广，也不利于上手使用。所以我们将 LogicFlow 将非核心功能例如菜单、工具栏等组件; 各类特色形态节点; 一些常见的流程实际应用场景等都采用插件的方式实现放到了"),a("code",[t._v("@logicflow/extension")]),t._v("包中。其中就有 bpmn-js 插件，这里我大致介绍一下 LogicFlow 是如何如何利用插件机制，去实现兼容 bpmn-js 的插件。")]),t._v(" "),a("ol",[a("li",[t._v("首先是 bpmn-js 中的各种节点和连线，比如用户节点(userTask)、判断节点(gateWay)、顺序流(sequenceFlow)等，我们利用 LogicFlow 自定义节点和自定义连线机制, 将所有的 bpmn-js 需要的基础图形封装成 BpmnElement 插件。")]),t._v(" "),a("li",[t._v("LogicFlow 默认生成的数据格式是节点和边组成的 json, 而 bpmn-js 需要生成的数据格式是满足 bpmn 2.0 标准的xml。所以我们提供了一个 BpmnAdapter，在数据输入到 LogicFlow 的时候将 bpmn xml 转换为 LogicFlow Data, 在输出的时候又将 LogicFlow Data 转换为 bpmn xml.")]),t._v(" "),a("li",[t._v("最后我们再把流程图绘制过程中需要用到的菜单、画板、快捷工具等利用 LogicFlow 的自定义组件功能，封装成 Bpmn Component 组件。")]),t._v(" "),a("li",[t._v("将上面的三个插件，一起封装为 Bpmn 插件。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96a8b28f2ab54f7ea4efc8e9604b2db7~tplv-k3u1fbpfcp-zoom-1.image",alt:"LogicFlow2"}})]),t._v(" "),a("p",[t._v("LogicFlow 本身只是一个单纯的流程图编辑器，不带有业务属性。为了更好的易用性，我们提供了 Bpmn-js  插件，让使用 bpmn-js 的项目能够快速替换。有了 Bpmn 插件后，直接通过 LogicFlow 装载 bpmn 插件，这个页面就表现成为 bpmn-js 了。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" LogicFlow "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@logicflow/core'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Bpmn "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@logicflow/extension'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nLogicFlow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Bpmn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"logicflow-的拓展能力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logicflow-的拓展能力"}},[t._v("#")]),t._v(" LogicFlow 的拓展能力")]),t._v(" "),a("p",[t._v("前面提到过，插件的扩展性是否强大，是看核心程序提供的 API 是否有足够的扩展性。LogicFlow 在绝大多数 API 上的设计，其目标就是支持的拓展能力。我们在"),a("code",[t._v("@logicflow/extension")]),t._v("中开发的插件，也是一种验证我们 API 的方式。从下图可以看到LogicFlow 在支持拓展能力上的整体思路。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/69420b337fd047209054f9bf8e94be8c~tplv-k3u1fbpfcp-zoom-1.image",alt:"LogicFlow3"}})]),t._v(" "),a("h3",{attrs:{id:"自定义节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义节点"}},[t._v("#")]),t._v(" 自定义节点")]),t._v(" "),a("p",[t._v("为了提高易用性，在节点方面，LogicFlow 内置了基础节点，然后在"),a("code",[t._v("@logicflow/extension")]),t._v("中也实现了一些特殊节点。开发者在实际使用中，可以基于这些基础节点和特殊节点进行自定义满足其业务需求的节点。")]),t._v(" "),a("ol",[a("li",[t._v("基础节点: 在"),a("code",[t._v("@logicflow/core")]),t._v("内部有一个 BaseNode 抽象类，这个类中实现了流程图中节点所需的绝大部分逻辑，例如节点拖动、点击等事件处理和连线处理等。同时也有获取节点外观属性、获取节点基础属性、获取节点配置自定义属性等可以被子类重写的方法。")]),t._v(" "),a("li",[t._v("内置节点：BaseNode 是抽象类，为了易用性，我们在 LogicFlow 中还内置了一些基础图形的节点。比如矩形（RectNode）、圆形(CircleNode)、菱形(DiamondNode)和多边形(PolygonNode)。")]),t._v(" "),a("li",[t._v("扩展节点：为了让开发者在使用的减少接入成本，LogicFlow 除了在核心包中提供了内置节点给与开发继承自定义外，还在扩展包"),a("code",[t._v("@logicflow/extension")]),t._v("中提供了更多的节点。例如圆柱体(CylinderNode)、带有图标的矩形(RectIconNode)等。")]),t._v(" "),a("li",[t._v("自定义节点：开发者可以在自己的项目中基于 LogicFlow 中的任何一种节点(包括"),a("code",[t._v("@logicflow/extension")]),t._v("中的节点)，采用继承重写对应的方法，实现自己业务需求的节点。同样，开发者自己自定义的节点也可以成为插件，开源到社区中。后续我们会增加 LogicFlow 的插件市场，到时大家可以自由选择自己项目所需的节点。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7259c3bfddc4426c8f573108aed7903b~tplv-k3u1fbpfcp-zoom-1.image",alt:"LogicFlow4"}})]),t._v(" "),a("h3",{attrs:{id:"自定义节点规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义节点规则"}},[t._v("#")]),t._v(" 自定义节点规则")]),t._v(" "),a("p",[t._v("在某些时候，我们可能需要控制连线的连接方式，比如 A 节点不能作为连线的起点、B 节点不能作为连线的终点、C 节点后面必须是 A 节点等等。LogicFlow 提供了自定义节点规则功能来实现这个需求。")]),t._v(" "),a("p",[t._v("LogicFlow 内部有"),a("code",[t._v("getConnectedSourceRules")]),t._v("和"),a("code",[t._v("getConnectedTargetRules")]),t._v("两个公共方法，分别返回当前节点作为连线开始点和作为连接目标点时的校验规则。当在面板上进行连线操作的时候，会判断所有的规则是否通过，只有通过了才能连接。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CnodeModel")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RectModel")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ignore other code*/")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断这个节点的下一个节点是否符合自定义要求")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConnectedSourceRules")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ConnectRule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rules "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConnectedSourceRules")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" gateWayOnlyAsTarget "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C节点下一个节点只能是A节点'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("validate")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("source"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" BaseNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" BaseNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" isValid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a-node '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          isValid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" isValid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gateWayOnlyAsTarget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" rules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断这个节点的上一个节点是否符合自定义要求")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConnectedTargetRules")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"自定义连线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义连线"}},[t._v("#")]),t._v(" 自定义连线")]),t._v(" "),a("p",[t._v("自定义连线方案和自定义节点基本一致，由基础连线实现线的绝大部分逻辑，然后在内置连线中实现连线的特殊交互处理，最后再由开发者基于内置连线进行自定义开发。当然，由于绝大多数图编辑上线的表现形式都只有直线、折线和曲线三种形式，所以一般开发者自定义连线都是改变一下样式（颜色、虚线）和名字（如Bpmn中连线叫做"),a("code",[t._v("bpmn:sequenceFlow")]),t._v("）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5372a58e5ca4a8fb966736d43882f9a~tplv-k3u1fbpfcp-zoom-1.image",alt:"LogicFlow4"}})]),t._v(" "),a("h3",{attrs:{id:"自定义属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义属性"}},[t._v("#")]),t._v(" 自定义属性")]),t._v(" "),a("p",[t._v("一般来说，对于一个节点，我们只需要"),a("code",[t._v("type")]),t._v("、"),a("code",[t._v("x")]),t._v("、"),a("code",[t._v("y")]),t._v("、"),a("code",[t._v("text")]),t._v("就可以完整的图中的一个节点的所有可见信息了。"),a("code",[t._v("type")]),t._v("控制这个节点的类型，"),a("code",[t._v("x")]),t._v("、"),a("code",[t._v("y")]),t._v("控制着节点所处的位置，"),a("code",[t._v("text")]),t._v("控制着节点上的文本。 但是在实际使用中，我们可能需要将更多的带有业务性质的属性放到节点上，然后在基于这些业务属性，在节点显示的做出对应处理。例如在流程中，我们需要将某些节点高亮，表示这些节点正处于异常状态。")]),t._v(" "),a("p",[t._v("LogicFlow 中提供了一个"),a("code",[t._v("properties")]),t._v("字段用于开发者存放自己业务相关的属性，然后可以在自定义节点的时候，基于这些"),a("code",[t._v("properties")]),t._v("自己进行处理。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" TriangleNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PolygonNodeModel "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@logicflow/core'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomProcessNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TriangleNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" extendKey "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CustomProcessNode'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getShapeStyle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" attributes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getShapeStyle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" properties "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProperties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断自定义属性customStatus是否为error,")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果是，则将这个节点的填充颜色设置为红色。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("properties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("customStatus "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      attributes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fill "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" attributes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nlf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'custom-process'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  view"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CustomProcessNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  model"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PolygonNodeModel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("上面的代码自定义了一个 custom-process 节点，当传入的数据中节点 type 为 custom-process，节点属性中 customStatus 为 error 的时候，流程图上显示的就是一个红色的三角形。")]),t._v(" "),a("h3",{attrs:{id:"自定义组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义组件"}},[t._v("#")]),t._v(" 自定义组件")]),t._v(" "),a("p",[t._v("在 LogicFlow 中，除了节点和连线这种由 svg 渲染的图形外，还存在着一些用于图编辑过程中进行控制的组件，这些组件 LogicFlow 是通过 html 来实现的（比如菜单、控制面板等）。LogicFlow 开放了在图上插入 DOM 的能力，开发者就可以基于这个能力来实现自定义组件。")]),t._v(" "),a("p",[t._v("有了在图上自由插件 DOM 的能力，我们就可以做很多事情了，比如可以实现一个自由调整节点颜色、字体大小的工具。这个工具的开发就只需要按照我们正常前端开发即可。然后在监听到用户选中节点后，将这个 DOM 插入到节点对应的位置旁边。")]),t._v(" "),a("h3",{attrs:{id:"主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主题"}},[t._v("#")]),t._v(" 主题")]),t._v(" "),a("p",[t._v("上面我们提到过可以用自定义节点来定制任何节点的外观，但是对每个节点都单独自定义一次太多麻烦。LogicFlow 提供了主题功能，来统一设置所以节点的外观基础属性。比如我们想让所有的矩形都不带边框。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("lf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTheme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rect"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    strokeWidth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("主题除了可以设置节点和连线的外观以外，还可以设置内部功能的样式，比如文本、对齐线等。")]),t._v(" "),a("h2",{attrs:{id:"最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),a("p",[t._v("通过上面的介绍，大家对 LogicFlow 的拓展机制应该有了一定的了解。LogicFlow 本身不是一个专门处理某个场景的流程设计工具，而是一个流程图编辑库。大多数情况下，拓展性强就意味着无法开箱即用，为了让 LogicFlow 成为一个开箱即用的库，LogicFlow 采用了插件化的机制，通过插件，将场景限定到实际业务场景中来。")]),t._v(" "),a("p",[t._v("LogicFlow 还是一个很新的开源项目，提供的插件还不够丰富，也存在业务场景考虑不周的情况，欢迎大家在 github 上提 issue，我们一定会认真对待每一个 issue！LogicFlow 也在寻找 contributor ，如果你感兴趣的话，欢迎一起来共建！")]),t._v(" "),a("ul",[a("li",[t._v("添加微信号进用户群：logic-flow")])])])}),[],!1,null,null,null);s.default=e.exports}}]);