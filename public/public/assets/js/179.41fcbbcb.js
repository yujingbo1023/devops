(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{14651:function(s,a,t){"use strict";t.r(a);var e=t(2),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux文件管理-上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux文件管理-上"}},[s._v("#")]),s._v(" Linux文件管理（上）")]),s._v(" "),a("h1",{attrs:{id:"一、vim编辑器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、vim编辑器"}},[s._v("#")]),s._v(" 一、VIM编辑器")]),s._v(" "),a("h2",{attrs:{id:"_1、vi概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、vi概述"}},[s._v("#")]),s._v(" 1、vi概述")]),s._v(" "),a("p",[s._v("vi（visual editor）编辑器通常被简称为vi，它是Linux和Unix系统上最基本的文本编辑器，类似于Windows 系统下的notepad（记事本）编辑器。")]),s._v(" "),a("h2",{attrs:{id:"_2、vim编辑器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、vim编辑器"}},[s._v("#")]),s._v(" 2、vim编辑器")]),s._v(" "),a("p",[s._v("Vim(Vi improved)是vi编辑器的加强版，比vi更容易使用。vi的命令几乎全部都可以在vim上使用。")]),s._v(" "),a("h2",{attrs:{id:"_3、vim编辑器的安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、vim编辑器的安装"}},[s._v("#")]),s._v(" 3、vim编辑器的安装")]),s._v(" "),a("h3",{attrs:{id:"☆-已安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-已安装"}},[s._v("#")]),s._v(" ☆ 已安装")]),s._v(" "),a("p",[s._v("Centos通常都已经默认安装好了 vi 或 Vim 文本编辑器，我们只需要通过vim命令就可以直接打开vim编辑器了，如下图所示：")]),s._v(" "),a("p",[a("img",{attrs:{src:t(8973),alt:"image-20200315093026701"}})]),s._v(" "),a("h3",{attrs:{id:"☆-未安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-未安装"}},[s._v("#")]),s._v(" ☆ 未安装")]),s._v(" "),a("p",[s._v('有些精简版的Linux操作系统，默认并没有安装vim编辑器（可能自带的是vi编辑器）。当我们在终端中输入vim命令时，系统会提示"command  not  found"。')]),s._v(" "),a("p",[s._v("解决办法：有网的前提下，可以使用yum工具对vim编辑器进行安装")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum install vim -y")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_4、vim编辑器的四种模式-重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、vim编辑器的四种模式-重点"}},[s._v("#")]),s._v(" 4、vim编辑器的四种模式（重点）")]),s._v(" "),a("h3",{attrs:{id:"☆-命令模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-命令模式"}},[s._v("#")]),s._v(" ☆ 命令模式")]),s._v(" "),a("p",[s._v("使用VIM编辑器时，==默认处于命令模式。==在该模式下可以移动光标位置，可以通过==快捷键==对文件==内容==进行复制、粘贴、删除等操作。")]),s._v(" "),a("h3",{attrs:{id:"☆-编辑模式或输入模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-编辑模式或输入模式"}},[s._v("#")]),s._v(" ☆ 编辑模式或输入模式")]),s._v(" "),a("p",[s._v("在命令模式下输入小写字母a或小写字母i即可进入编辑模式，在该模式下可以对文件的内容进行编辑")]),s._v(" "),a("h3",{attrs:{id:"☆-末行模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-末行模式"}},[s._v("#")]),s._v(" ☆ 末行模式")]),s._v(" "),a("p",[s._v("在命令模式下输入冒号:即可进入末行模式，可以在==末行输入命令==来对文件进行查找、替换、保存、退出等操作")]),s._v(" "),a("h3",{attrs:{id:"☆-可视化模式-了解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-可视化模式-了解"}},[s._v("#")]),s._v(" ☆ 可视化模式（了解）")]),s._v(" "),a("p",[s._v("可以做一些列选操作（通过方向键选择某些列的内容）")]),s._v(" "),a("h1",{attrs:{id:"二、vim四种模式的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、vim四种模式的关系"}},[s._v("#")]),s._v(" 二、VIM四种模式的关系")]),s._v(" "),a("h2",{attrs:{id:"_1、vim四种模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、vim四种模式"}},[s._v("#")]),s._v(" 1、VIM四种模式")]),s._v(" "),a("p",[s._v("命令模式/编辑模式/末行模式/可视化模式")]),s._v(" "),a("h2",{attrs:{id:"_2、vim四种模式的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、vim四种模式的关系"}},[s._v("#")]),s._v(" 2、VIM四种模式的关系")]),s._v(" "),a("p",[a("img",{attrs:{src:t(8974),alt:"image-20200315094423790"}})]),s._v(" "),a("h1",{attrs:{id:"三、vim编辑器的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、vim编辑器的使用"}},[s._v("#")]),s._v(" 三、VIM编辑器的使用")]),s._v(" "),a("h2",{attrs:{id:"_1、使用vim打开文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、使用vim打开文件"}},[s._v("#")]),s._v(" 1、使用vim打开文件")]),s._v(" "),a("p",[s._v("基本语法：")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim  文件名称")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("① 如果文件已存在，则直接打开")]),s._v(" "),a("p",[s._v("② 如果文件不存在，则vim编辑器会自动在内存中创建一个新文件")]),s._v(" "),a("p",[s._v("案例：使用vim命令打开readme.txt文件")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim readme.txt")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_2、vim编辑器保存文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、vim编辑器保存文件"}},[s._v("#")]),s._v(" 2、vim编辑器保存文件")]),s._v(" "),a("p",[s._v("在任何模式下，连续按两次Esc键，即可返回到命令模式。然后按冒号：，进入到末行模式，输入wq，代表保存并退出。")]),s._v(" "),a("p",[a("img",{attrs:{src:t(8975),alt:"image-20200315102210869"}})]),s._v(" "),a("h2",{attrs:{id:"_3、vim编辑器强制退出-不保存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、vim编辑器强制退出-不保存"}},[s._v("#")]),s._v(" 3、vim编辑器强制退出（不保存）")]),s._v(" "),a("p",[s._v("在任何模式下，连续按两次Esc键，即可返回到命令模式。然后按冒号：，进入到末行模式，输入q!，代表强制退出但是不保存文件。")]),s._v(" "),a("p",[a("img",{attrs:{src:t(8976),alt:"image-20200315102248865"}})]),s._v(" "),a("h2",{attrs:{id:"_4、命令模式下的相关操作-重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、命令模式下的相关操作-重点"}},[s._v("#")]),s._v(" 4、命令模式下的相关操作（重点）")]),s._v(" "),a("h3",{attrs:{id:"☆-如何进入命令模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-如何进入命令模式"}},[s._v("#")]),s._v(" ☆ 如何进入命令模式")]),s._v(" "),a("p",[s._v("答：在Linux操作系统中，当我们使用vim命令直接打开某个文件时，默认进入的就是命令模式。如果我们处于其他模式（编辑模式、可视化模式以及末行模式）可以连续按两次Esc键也可以返回命令模式")]),s._v(" "),a("h3",{attrs:{id:"☆-命令模式下我们能做什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-命令模式下我们能做什么"}},[s._v("#")]),s._v(" ☆ 命令模式下我们能做什么")]),s._v(" "),a("p",[s._v("① 移动光标 ② 复制 粘贴 ③ 剪切 粘贴 删除 ④ 撤销与恢复")]),s._v(" "),a("h3",{attrs:{id:"☆-移动光标到首行或末行-重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-移动光标到首行或末行-重点"}},[s._v("#")]),s._v(" ☆ 移动光标到首行或末行（重点）")]),s._v(" "),a("p",[s._v("移动光标到首行 => gg")]),s._v(" "),a("p",[s._v("移动光标到末行 => G")]),s._v(" "),a("h3",{attrs:{id:"☆-翻屏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-翻屏"}},[s._v("#")]),s._v(" ☆ 翻屏")]),s._v(" "),a("p",[s._v("向上    翻屏，按键："),a("code",[s._v("ctrl + b （before） 或 PgUp")])]),s._v(" "),a("p",[s._v("向下    翻屏，按键："),a("code",[s._v("ctrl + f （after） 或 PgDn")])]),s._v(" "),a("p",[s._v("向上翻半屏，按键："),a("code",[s._v("ctrl + u （up）")])]),s._v(" "),a("p",[s._v("向下翻半屏，按键："),a("code",[s._v("ctrl + d （down）")])]),s._v(" "),a("h3",{attrs:{id:"☆-快速定位光标到指定行-重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-快速定位光标到指定行-重点"}},[s._v("#")]),s._v(" ☆ 快速定位光标到指定行（重点）")]),s._v(" "),a("p",[s._v("行号 + G，如150G代表快速移动光标到第150行。")]),s._v(" "),a("h3",{attrs:{id:"☆-复制-粘贴-重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-复制-粘贴-重点"}},[s._v("#")]),s._v(" ☆ 复制/粘贴（重点）")]),s._v(" "),a("p",[s._v("① 复制当前行（光标所在那一行）")]),s._v(" "),a("p",[s._v("按键：yy")]),s._v(" "),a("p",[s._v("粘贴：在想要粘贴的地方按下p 键【将粘贴在光标所在行的下一行】,如果想粘贴在光标所在行之前，则使用P键")]),s._v(" "),a("p",[s._v("② 从当前行开始复制指定的行数，如复制5行，5yy")]),s._v(" "),a("p",[s._v("粘贴：在想要粘贴的地方按下p 键【将粘贴在光标所在行的下一行】,如果想粘贴在光标所在行之前，则使用P键")]),s._v(" "),a("h3",{attrs:{id:"☆-剪切-删除-重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-剪切-删除-重点"}},[s._v("#")]),s._v(" ☆ 剪切/删除（重点）")]),s._v(" "),a("p",[s._v("在VIM编辑器中，剪切与删除都是dd")]),s._v(" "),a("p",[s._v("如果剪切了文件，但是没有使用p进行粘贴，就是删除操作")]),s._v(" "),a("p",[s._v("如果剪切了文件，然后使用p进行粘贴，这就是剪切操作")]),s._v(" "),a("p",[s._v("① 剪切/删除当前光标所在行")]),s._v(" "),a("p",[s._v("按键：dd （删除之后下一行上移）")]),s._v(" "),a("p",[s._v("粘贴：p")]),s._v(" "),a("p",[s._v("注意：dd 严格意义上说是剪切命令，但是如果剪切了不粘贴就是删除的效果。")]),s._v(" "),a("p",[s._v("② 剪切/删除多行（从当前光标所在行开始计算）")]),s._v(" "),a("p",[s._v("按键：数字dd")]),s._v(" "),a("p",[s._v("粘贴：p")]),s._v(" "),a("p",[s._v("特殊用法：")]),s._v(" "),a("p",[s._v("③ 剪切/删除光标所在的当前行（光标所在位置）之后的内容，但是删除之后下一行不上移")]),s._v(" "),a("p",[s._v("按键：D （删除之后当前行会变成空白行）")]),s._v(" "),a("h3",{attrs:{id:"☆-撤销-恢复-重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-撤销-恢复-重点"}},[s._v("#")]),s._v(" ☆ 撤销/恢复（重点）")]),s._v(" "),a("p",[s._v("撤销：u（undo）")]),s._v(" "),a("p",[s._v("恢复：ctrl + r 恢复（取消）之前的撤销操作【重做，redo】")]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("① 怎么进入命令模式（vim 文件名称，在任意模式下，可以连续按两次Esc键即可返回命令模式）")]),s._v(" "),a("p",[s._v("② 命令模式能做什么？移动光标、复制/粘贴、剪切/删除、撤销与恢复")]),s._v(" "),a("p",[s._v("首行 => gg，末行 => G  翻屏（了解） 快速定位 行号G，如150G")]),s._v(" "),a("p",[s._v("yy  p   5yy  p")]),s._v(" "),a("p",[s._v("dd p   5dd p")]),s._v(" "),a("p",[s._v("u")]),s._v(" "),a("p",[s._v("ctrl + r")]),s._v(" "),a("h2",{attrs:{id:"_5、末行模式下的相关操作-重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、末行模式下的相关操作-重点"}},[s._v("#")]),s._v(" 5、末行模式下的相关操作（重点）")]),s._v(" "),a("h3",{attrs:{id:"☆-如何进入末行模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-如何进入末行模式"}},[s._v("#")]),s._v(" ☆ 如何进入末行模式")]),s._v(" "),a("p",[s._v("进入末行模式的方法只有一个，在命令模式下使用冒号：的方式进入。")]),s._v(" "),a("h3",{attrs:{id:"☆-末行模式下我们能做什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-末行模式下我们能做什么"}},[s._v("#")]),s._v(" ☆ 末行模式下我们能做什么")]),s._v(" "),a("p",[s._v("文件保存、退出、查找与替换、显示行号、paste模式等等")]),s._v(" "),a("h3",{attrs:{id:"☆-保存-退出-重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-保存-退出-重点"}},[s._v("#")]),s._v(" ☆ 保存/退出（重点）")]),s._v(" "),a("p",[s._v(":w => 代表对当前文件进行保存操作，但是其保存完成后，并没有退出这个文件")]),s._v(" "),a("p",[s._v(":q => 代表退出当前正在编辑的文件，但是一定要注意，文件必须先保存，然后才能退出")]),s._v(" "),a("p",[s._v(":wq => 代表文件先保存后退出（保存并退出）")]),s._v(" "),a("p",[s._v("如果一个文件在编辑时没有名字，则可以使用:wq  文件名称，代表把当前正在编辑的文件保存到指定的名称中，然后退出")]),s._v(" "),a("p",[s._v(":q! => 代表强制退出但是文件未保存（不建议使用）")]),s._v(" "),a("h3",{attrs:{id:"☆-查找-搜索-重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-查找-搜索-重点"}},[s._v("#")]),s._v(" ☆ 查找/搜索（重点）")]),s._v(" "),a("p",[s._v("切换到命令模式，然后输入斜杠/（也是进入末行模式的方式之一）")]),s._v(" "),a("p",[s._v("进入到末行模式后，输入要查找或搜索的关键词，然后回车")]),s._v(" "),a("p",[s._v("如果在一个文件中，存在多个满足条件的结果。在搜索结果中切换上/下一个结果：N/n （大写N代表上一个结果，小写n代表next）")]),s._v(" "),a("p",[s._v("如果需要取消高亮，则需要在末行模式中输入"),a("code",[s._v(":noh")]),s._v("【no highlight】")]),s._v(" "),a("h3",{attrs:{id:"☆-文件内容的替换-重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-文件内容的替换-重点"}},[s._v("#")]),s._v(" ☆ 文件内容的替换（重点）")]),s._v(" "),a("p",[s._v("第一步：首先要进入末行模式（在命令模式下输入冒号:）")]),s._v(" "),a("p",[s._v("第二步：根据需求替换内容")]),s._v(" "),a("p",[s._v("① 只替换光标所在这一行的第一个满足条件的结果（只能替换1次）")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v(":s/要替换的关键词"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("替换后的关键词   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("  回车\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("案例：把hello centos中的centos替换为centos7.6")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("切换光标到hello centos这一行\n:s/centos/centos7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("6\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("② 替换光标所在这一行中的所有满足条件的结果（替换多次，只能替换一行）")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v(":s/要替换的关键词"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("替换后的关键词"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("g\t\tg=global全局替换\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("案例：把hello centos中的所有centos都替换为centos7.6")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("切换光标到hello centos这一行\n:s/centos/centos7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("6/g\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("③ 针对整个文档中的所有行进行替换，只替换每一行中满足条件的第一个结果")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("s/要替换的关键词"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("替换后的关键词\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("案例：把每一行中的第一个hello关键词都替换为hi")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("s/hello/hi\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("④ 针对整个文档中的所有关键词进行替换（只要满足条件就进行替换操作）")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("s/要替换的关键词"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("替换后的关键词"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("g\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("案例：替换整个文档中的hello关键词为hi")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("s/hello/hi/g\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"☆-显示行号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-显示行号"}},[s._v("#")]),s._v(" ☆ 显示行号")]),s._v(" "),a("p",[s._v("基本语法：")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v(":"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),s._v(" nu\nnu = number，行号\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[s._v("取消行号 => :set  nonu")])]),s._v(" "),a("h3",{attrs:{id:"☆-set-paste模式-了解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-set-paste模式-了解"}},[s._v("#")]),s._v(" ☆ set paste模式(了解)")]),s._v(" "),a("p",[s._v("为什么要使用paste模式？")]),s._v(" "),a("p",[s._v("问题：在终端Vim中粘贴代码时，发现插入的代码会有多余的缩进，而且会逐行累加。原因是终端把粘贴的文本存入键盘缓存（Keyboard Buffer）中，Vim则把这些内容作为用户的键盘输入来处理。导致在遇到换行符的时候，如果Vim开启了自动缩进，就会默认的把上一行缩进插入到下一行的开头，最终使代码变乱。")]),s._v(" "),a("p",[s._v("在粘贴数据之前，输入下面命令开启paste模式\n:set paste")]),s._v(" "),a("p",[s._v("粘贴完毕后，输入下面命令关闭paste模式\n:set nopaste")]),s._v(" "),a("h2",{attrs:{id:"总结-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结-2"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("① 如何进入末行模式，必须从命令模式中使用冒号进行切换")]),s._v(" "),a("p",[s._v("② 末行模式下能做什么？保存、退出、查找、替换、显示行号以及paste模式")]),s._v(" "),a("p",[s._v("③ 保存 => :w")]),s._v(" "),a("p",[s._v("④ 退出 => :q，先保存后退出。:wq     :wq  文件名称    :q!")]),s._v(" "),a("p",[s._v("⑤ 查找功能 => 命令模式输入/斜杠  +  关键词（高亮显示）=> :noh")]),s._v(" "),a("p",[s._v("⑥ 替换功能")]),s._v(" "),a("p",[s._v("😒/要替换的关键词/替换后的关键词")]),s._v(" "),a("p",[s._v("😒/要替换的关键词/替换后的关键词/g")]),s._v(" "),a("p",[s._v(":%s/要替换的关键词/替换后的关键词")]),s._v(" "),a("p",[s._v(":%s/要替换的关键词/替换后的关键词/g")]),s._v(" "),a("p",[s._v("⑦ 显示行号 => :set nu 取消行号 => :set nonu")]),s._v(" "),a("p",[s._v("⑧ paste模式 => 将来在粘贴代码的时候为了保存原格式 => 粘贴之前 => :set paste")]),s._v(" "),a("h1",{attrs:{id:"四、编辑模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、编辑模式"}},[s._v("#")]),s._v(" 四、编辑模式")]),s._v(" "),a("h2",{attrs:{id:"_1、编辑模式的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、编辑模式的作用"}},[s._v("#")]),s._v(" 1、编辑模式的作用")]),s._v(" "),a("p",[s._v("编辑模式的作用比较简单，主要是实现对文件的内容进行编辑模式。")]),s._v(" "),a("h2",{attrs:{id:"_2、如何进入编辑模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、如何进入编辑模式"}},[s._v("#")]),s._v(" 2、如何进入编辑模式")]),s._v(" "),a("p",[s._v("首先你需要进入到命令模式，然后使用小写字母a或小写字母i，进入编辑模式。")]),s._v(" "),a("p",[s._v("命令模式 + i  ： insert缩写，代表在光标之前插入内容")]),s._v(" "),a("p",[s._v("命令模式 + a ： append缩写，代表在光标之后插入内容")]),s._v(" "),a("h2",{attrs:{id:"_3、退出编辑模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、退出编辑模式"}},[s._v("#")]),s._v(" 3、退出编辑模式")]),s._v(" "),a("p",[s._v("在编辑模式中，直接按Esc，即可从编辑模式退出到命令模式。")]),s._v(" "),a("h1",{attrs:{id:"五、可视化模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、可视化模式"}},[s._v("#")]),s._v(" 五、可视化模式")]),s._v(" "),a("h2",{attrs:{id:"_1、如何进入到可视化模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、如何进入到可视化模式"}},[s._v("#")]),s._v(" 1、如何进入到可视化模式")]),s._v(" "),a("p",[s._v("在命令模式中，直接按ctrl + v（可视块）或V（可视行）或v（可视），然后按下↑  ↓  ←  →方向键来选中需要复制的区块，按下y 键进行复制（不要按下yy），最后按下p 键粘贴")]),s._v(" "),a("p",[s._v("退出可视模式按下Esc")]),s._v(" "),a("h2",{attrs:{id:"_2、可视化模式复制操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、可视化模式复制操作"}},[s._v("#")]),s._v(" 2、可视化模式复制操作")]),s._v(" "),a("p",[s._v("第一步：在命令模式下，直接按小v，进入可视化模式")]),s._v(" "),a("p",[s._v("第二步：使用方向键↑  ↓  ←  →选择要复制的内容，然后按y键")]),s._v(" "),a("p",[s._v("第三步：移动光标，停在需要粘贴的位置，按p键进行粘贴操作")]),s._v(" "),a("h2",{attrs:{id:"_3、为配置文件添加-多行注释-重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、为配置文件添加-多行注释-重点"}},[s._v("#")]),s._v(" 3、为配置文件添加#多行注释（重点）")]),s._v(" "),a("p",[s._v("第一步：按Esc退出到命令模式，按gg切换到第1行")]),s._v(" "),a("p",[s._v("第二步：然后按Ctrl+v进入到可视化区块模式（列模式）")]),s._v(" "),a("p",[s._v("第三步：在行首使用上下键选择需要注释的多行")]),s._v(" "),a("p",[s._v("第四步：按下键盘（大写）“I”键，进入插入模式（Shift + i）")]),s._v(" "),a("p",[s._v("第五步：输入#号注释符")]),s._v(" "),a("p",[s._v("第六步：输入完成后，连续按两次Esc即可完成添加多行注释的过程")]),s._v(" "),a("h2",{attrs:{id:"_4、为配置文件去除-多行注释-重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、为配置文件去除-多行注释-重点"}},[s._v("#")]),s._v(" 4、为配置文件去除#多行注释（重点）")]),s._v(" "),a("p",[s._v("第一步：按Esc退出到命令模式，按gg切换到第1行")]),s._v(" "),a("p",[s._v("第二步：然后按Ctrl+v进入可视化区块模式（列模式）")]),s._v(" "),a("p",[s._v("第三步：使用键盘上的方向键的上下选中需要移除的#号注释")]),s._v(" "),a("p",[s._v("第四步：直接按Delete键即可完成删除注释的操作")]),s._v(" "),a("h1",{attrs:{id:"六、vim编辑器实用功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、vim编辑器实用功能"}},[s._v("#")]),s._v(" 六、VIM编辑器实用功能")]),s._v(" "),a("h2",{attrs:{id:"_1、代码着色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、代码着色"}},[s._v("#")]),s._v(" 1、代码着色")]),s._v(" "),a("p",[s._v("之前说过vim 是vi 的升级版本，其中比较典型的区别就是vim 更加适合coding，因为vim比vi 多一个代码着色的功能，这个功能主要是为程序员提供编程语言升的语法显示效果，如下：")]),s._v(" "),a("p",[s._v("第一步：定义后缀名为网页文件的代码文件")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim index.php")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("第二步：编写对应的PHP代码")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("<?php\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello world'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n?>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("在VIM编辑器中，我们可以通过"),a("code",[s._v(":syntax on")]),s._v("或"),a("code",[s._v(":syntax off")]),s._v("开启或关闭代码着色功能。")]),s._v(" "),a("h2",{attrs:{id:"_2、异常退出解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、异常退出解决方案"}},[s._v("#")]),s._v(" 2、异常退出解决方案")]),s._v(" "),a("p",[s._v("什么是异常退出：在编辑文件之后并没有正常的去wq（保存退出），而是遇到突然关闭终端或者断电的情况，则会显示下面的效果，这个情况称之为异常退出：")]),s._v(" "),a("p",[a("img",{attrs:{src:t(8977),alt:"image-20200315155600276"}})]),s._v(" "),a("blockquote",[a("p",[s._v("温馨提示：每个文件的异常文件都会有所不同，其命名规则一般为"),a("code",[s._v(".文件名称.swp")])])]),s._v(" "),a("p",[s._v("解决办法：将交换文件（在编程过程中产生的临时文件）删除掉即可【在上述提示界面按下D 键或者使用rm 指令删除交换文件】")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rm .1.php.swp")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_3、退出vim编辑器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、退出vim编辑器"}},[s._v("#")]),s._v(" 3、退出vim编辑器")]),s._v(" "),a("p",[s._v("回顾：在vim中，退出正在编辑的文件可以使用"),a("code",[s._v(":q")]),s._v("或者"),a("code",[s._v(":wq")])]),s._v(" "),a("p",[s._v("除了上面的这个语法之外，vim 还支持另外一个保存退出(针对内容)方法"),a("code",[s._v(":x")])]),s._v(" "),a("p",[s._v("① "),a("code",[s._v(":x")]),s._v("在文件没有修改的情况下，表示直接退出（等价于:q），在文件修改的情况下表")]),s._v(" "),a("p",[s._v("示保存并退出（:wq）")]),s._v(" "),a("p",[s._v("② 如果文件没有被修改，但是使用wq 进行退出的话，则文件的修改时间会被更新；但是如果文件没有被修改，使用x 进行退出的话，则文件修改时间不会被更新的；主要是会混淆用户对文件的修改时间的认定。")]),s._v(" "),a("h1",{attrs:{id:"七、查看文件的内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、查看文件的内容"}},[s._v("#")]),s._v(" 七、查看文件的内容")]),s._v(" "),a("h2",{attrs:{id:"_1、cat命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、cat命令"}},[s._v("#")]),s._v(" 1、cat命令")]),s._v(" "),a("h3",{attrs:{id:"☆-输出文件内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-输出文件内容"}},[s._v("#")]),s._v(" ☆ 输出文件内容")]),s._v(" "),a("p",[s._v("基本语法：")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat 文件名称")]),s._v("\n111\n222\n333\n444\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("主要功能：正序输出文件的内容")]),s._v(" "),a("h3",{attrs:{id:"☆-合并多个文件内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-合并多个文件内容"}},[s._v("#")]),s._v(" ☆ 合并多个文件内容")]),s._v(" "),a("p",[s._v("基本语法：")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat 文件名称1  文件名称2  ... > 合并后的文件名称")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("主要功能：把文件名称1、文件名称2、...中的内容的合并到一个文件中")]),s._v(" "),a("h2",{attrs:{id:"_2、tac命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、tac命令"}},[s._v("#")]),s._v(" 2、tac命令")]),s._v(" "),a("p",[s._v("基本语法：")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tac 文件名称")]),s._v("\n444\n333\n222\n111\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("主要功能：倒序输出文件的内容")]),s._v(" "),a("h2",{attrs:{id:"_3、head命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、head命令"}},[s._v("#")]),s._v(" 3、head命令")]),s._v(" "),a("p",[s._v("基本语法：")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# head -n 文件名称")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("主要功能：查看一个文件的前n 行，如果不指定n，则默认显示前10 行")]),s._v(" "),a("p",[s._v("案例：查询linux.txt文件中的前10行")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# head linux.txt")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("案例：查询linux.txt文件中的前3行")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# head -3 linux.txt")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_4、tail命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、tail命令"}},[s._v("#")]),s._v(" 4、tail命令")]),s._v(" "),a("p",[s._v("基本语法：")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tail -n 文件名称")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("主要功能：查看一个文件的最后n 行，如果不指定n，则默认显示最后10 行")]),s._v(" "),a("p",[s._v("案例：查询linux.txt文件的最后10行")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tail linux.txt")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("案例：查询linux.txt文件的最后3行")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tail -3 linux.txt")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_5、tail-f命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、tail-f命令"}},[s._v("#")]),s._v(" 5、tail -f命令")]),s._v(" "),a("p",[s._v("基本语法：")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tail  -f  文件名称")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("主要功能：动态查看一个文件内容的输出信息（主要用于将来查询日志文件的变化）")]),s._v(" "),a("p",[s._v("案例：查询系统的/var/log/messages文件的日志信息")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tail -f /var/log/messages")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("退出方式可以直接按快捷键：Ctrl + C，中断操作")])])}),[],!1,null,null,null);a.default=r.exports},8973:function(s,a,t){s.exports=t.p+"assets/img/image-20200315093026701.8adb78d9.png"},8974:function(s,a,t){s.exports=t.p+"assets/img/image-20200315094423790.675d5367.png"},8975:function(s,a,t){s.exports=t.p+"assets/img/image-20200315102210869.c01af6fc.png"},8976:function(s,a,t){s.exports=t.p+"assets/img/image-20200315102248865.06745cbf.png"},8977:function(s,a,t){s.exports=t.p+"assets/img/image-20200315155600276.fcb081ed.png"}}]);