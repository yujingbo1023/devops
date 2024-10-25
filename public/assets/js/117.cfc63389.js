(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{14593:function(t,s,a){"use strict";a.r(s);var e=a(2),_=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"linux进程检测与控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux进程检测与控制"}},[t._v("#")]),t._v(" Linux进程检测与控制")]),t._v(" "),s("h1",{attrs:{id:"学习目标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#学习目标"}},[t._v("#")]),t._v(" 学习目标")]),t._v(" "),s("p",[t._v("1、了解进程和程序的关系")]),t._v(" "),s("p",[t._v("2、了解进程的特点")]),t._v(" "),s("p",[t._v("3、能够使用top动态查看进程信息")]),t._v(" "),s("p",[t._v("4、能够使用ps静态查看进程信息")]),t._v(" "),s("p",[t._v("5、能够使用kill命令给进程发送信号")]),t._v(" "),s("p",[t._v("6、能够调整进程的优先级（扩展）")]),t._v(" "),s("h1",{attrs:{id:"引言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[t._v("#")]),t._v(" 引言")]),t._v(" "),s("p",[t._v('​        在运维的日常工作中，监视系统的运行状况是每天例行的工作，在 Windows 中我们可以很直观的使用"任务管理器"来进行进程管理，了解系统的运行状态')]),t._v(" "),s("p",[t._v('通常，使用"任务管理器"主要有 3 个目的：')]),t._v(" "),s("ol",[s("li",[t._v('利用"应用程序"和"进程"标签来査看系统中到底运行了哪些程序和进程；')]),t._v(" "),s("li",[t._v('利用"性能"和"用户"标签来判断服务器的健康状态；')]),t._v(" "),s("li",[t._v('在"应用程序"和"进程"标签中强制中止任务和进程；')])]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:a(9420)}}),t._v(" "),s("p",[t._v("​")]),t._v(" "),s("p",[t._v("​         在工作中，我们很少会用到Linux的图形化界面，更多时候会使用命令进行进程管理，但是进程管理的主要目的是一样的，即：")]),t._v(" "),s("p",[t._v("​    "),s("strong",[t._v("查看系统中运行的程序和进程")])]),t._v(" "),s("p",[t._v("​    "),s("strong",[t._v("判断服务器的健康状态")])]),t._v(" "),s("p",[t._v("​    "),s("strong",[t._v("停止不需要的进程。")])]),t._v(" "),s("h1",{attrs:{id:"一、相关概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、相关概念"}},[t._v("#")]),t._v(" 一、相关概念")]),t._v(" "),s("h2",{attrs:{id:"_1、什么是进程和程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是进程和程序"}},[t._v("#")]),t._v(" 1、什么是进程和程序？")]),t._v(" "),s("p",[t._v("​        "),s("strong",[t._v("进程")]),t._v("是正在执行的一个程序或命令，每个进程都是一个运行的实体，并占用一定的系统资源。"),s("strong",[t._v("程序")]),t._v("是人使用计算机语言编写的可以实现特定目标或解决特定问题的代码集合。")]),t._v(" "),s("p",[t._v("​        简单来说，程序是人使用计算机语言编写的，可以实现一定功能，并且可以执行的代码集合。进程是正在执行中的程序。")]),t._v(" "),s("p",[s("strong",[t._v("举例")]),t._v("：谷歌浏览器是一个程序，当我们打开谷歌浏览器，就会在系统中看到一个浏览器的进程，当程序被执行时，程序的代码都会被加载入内存，操作系统给这个进程分配一个 ID，称为 "),s("strong",[t._v("PID")]),t._v("（进程 ID）。我们打开多个谷歌浏览器，就有多个浏览器子进程，但是这些进程使用的程序，都是chrome")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:a(9421)}}),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:a(9422)}}),t._v(" "),s("p",[t._v("​")]),t._v(" "),s("h2",{attrs:{id:"_2、进程管理的内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、进程管理的内容"}},[t._v("#")]),t._v(" 2、进程管理的内容")]),t._v(" "),s("p",[t._v("​        进程查看，通过查看，判断健康状态")]),t._v(" "),s("p",[t._v("​        进程终止")]),t._v(" "),s("p",[t._v("​        进程优先级控制")]),t._v(" "),s("h1",{attrs:{id:"二、进程管理命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、进程管理命令"}},[t._v("#")]),t._v(" 二、进程管理命令")]),t._v(" "),s("p",[t._v("工作场景：")]),t._v(" "),s("p",[t._v("​        小黑入职到一家公司，接到的第一项任务，就是监控生产服务器的性能，提到服务器性能，我们首先想到的就是CPU，内存和磁盘。")]),t._v(" "),s("h2",{attrs:{id:"_1、top查看-cpu使用情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、top查看-cpu使用情况"}},[t._v("#")]),t._v(" 1、top查看 CPU使用情况")]),t._v(" "),s("p",[t._v("命令：top")]),t._v(" "),s("p",[t._v("作用：查看服务器的进程占用的资源（100%使用）")]),t._v(" "),s("p",[t._v("语法：# top （动态显示）")]),t._v(" "),s("p",[t._v("交换操作快捷键：")]),t._v(" "),s("p",[t._v("M（大写）：表示将结果按照内存（MEM）从高到低进行降序排列；")]),t._v(" "),s("p",[t._v("P（大写）：，表示将结果按照CPU 使用率从高到低进行降序排列；")]),t._v(" "),s("p",[t._v("1 ：当服务器拥有多个cpu 的时候可以使用“1”快捷键来切换是否展示显示各个cpu 的详细信息；")]),t._v(" "),s("p",[t._v("q：退出")]),t._v(" "),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("用法一：top\n示例代码：\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#top")]),t._v("\n含义：查看CPU使用情况\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("img",{staticStyle:{width:"960px"},attrs:{src:a(9423)}}),t._v(" "),s("h3",{attrs:{id:"_1-系统整体信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-系统整体信息"}},[t._v("#")]),t._v(" 1）系统整体信息：")]),t._v(" "),s("h4",{attrs:{id:"_1第一行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1第一行"}},[t._v("#")]),t._v(" ①第一行")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:a(9424)}}),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("内 容")]),t._v(" "),s("th",[t._v("说 明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("10:12:28")]),t._v(" "),s("td",[t._v("系统当前时间")])]),t._v(" "),s("tr",[s("td",[t._v("up 13:05")]),t._v(" "),s("td",[t._v("系统的运行时间.本机己经运行 13 小时 05 分钟")])]),t._v(" "),s("tr",[s("td",[t._v("3 users")]),t._v(" "),s("td",[t._v("当前登录了三个用户")])]),t._v(" "),s("tr",[s("td",[t._v("load average: 0.00,0.01，0.05")]),t._v(" "),s("td",[t._v("系统在之前 1 分钟、5 分钟、15 分钟的平均负载。如果 CPU 是单核的，则这个数值超过 1 就是高负载：如果 CPU 是四核的，则这个数值超过 4 就是高负载")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("扩展：如何获取CPU的总核心数？")]),t._v(" "),s("p",[t._v("grep 'core id' /proc/cpuinfo |sort -u |wc -l")])]),t._v(" "),s("h4",{attrs:{id:"_2第二行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2第二行"}},[t._v("#")]),t._v(" ②第二行")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:a(9425)}}),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Tasks:   230 total")]),t._v(" "),s("th",[t._v("系统中的进程总数")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1 running")]),t._v(" "),s("td",[t._v("正在运行的进程数")])]),t._v(" "),s("tr",[s("td",[t._v("229 sleeping")]),t._v(" "),s("td",[t._v("睡眠的进程数")])]),t._v(" "),s("tr",[s("td",[t._v("0 stopped")]),t._v(" "),s("td",[t._v("正在停止的进程数")])]),t._v(" "),s("tr",[s("td",[t._v("0 zombie")]),t._v(" "),s("td",[t._v("僵尸进程数。如果不是   0，则需要手工检查僵尸进程")])])])]),t._v(" "),s("h4",{attrs:{id:"_3第三行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3第三行"}},[t._v("#")]),t._v(" ③第三行")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:a(9426)}}),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("内 容")]),t._v(" "),s("th",[t._v("说 明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Cpu(s): 0.1 %us")]),t._v(" "),s("td",[t._v("用户模式占用的   CPU 百分比")])]),t._v(" "),s("tr",[s("td",[t._v("0.1%sy")]),t._v(" "),s("td",[t._v("系统模式占用的   CPU 百分比")])]),t._v(" "),s("tr",[s("td",[t._v("0.0%ni")]),t._v(" "),s("td",[t._v("改变过优先级的用户进程占用的   CPU 百分比")])]),t._v(" "),s("tr",[s("td",[t._v("99.7%id")]),t._v(" "),s("td",[t._v("idle缩写，空闲   CPU 占用的 CPU 百分比")])]),t._v(" "),s("tr",[s("td",[t._v("0.1%wa")]),t._v(" "),s("td",[t._v("等待输入/输出的进程占用的   CPU 百分比")])]),t._v(" "),s("tr",[s("td",[t._v("0.0%hi")]),t._v(" "),s("td",[t._v("硬中断请求服务占用的   CPU 百分比")])]),t._v(" "),s("tr",[s("td",[t._v("0.1%si")]),t._v(" "),s("td",[t._v("软中断请求服务占用的   CPU 百分比")])]),t._v(" "),s("tr",[s("td",[t._v("0.0%st")]),t._v(" "),s("td",[t._v("st（steal   time）意为虚拟时间百分比，就是当有虚拟机时，虚拟 CPU 等待实际 CPU 的时间百分比")])])])]),t._v(" "),s("h4",{attrs:{id:"问题-如果我的机器有4核cpu-我想查看每一核心分别的负载情况怎能办"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题-如果我的机器有4核cpu-我想查看每一核心分别的负载情况怎能办"}},[t._v("#")]),t._v(" 问题：如果我的机器有4核CPU，我想查看每一核心分别的负载情况怎能办？")]),t._v(" "),s("p",[t._v("答：交换快捷键 “1”")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:a(9427)}}),t._v(" "),s("h4",{attrs:{id:"_4第四行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4第四行"}},[t._v("#")]),t._v(" ④第四行")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:a(9428)}}),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("内 容")]),t._v(" "),s("th",[t._v("说 明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Mem: 1863252 total")]),t._v(" "),s("td",[t._v("物理内存的总量，单位为KB")])]),t._v(" "),s("tr",[s("td",[t._v("829960 used")]),t._v(" "),s("td",[t._v("己经使用的物理内存数量")])]),t._v(" "),s("tr",[s("td",[t._v("68352 free")]),t._v(" "),s("td",[t._v("空闲的物理内存数量。我们使用的是虚拟机，共分配了 628MB内存，所以只有53MB的空闲内存")])]),t._v(" "),s("tr",[s("td",[t._v("96490 buff/cache")]),t._v(" "),s("td",[t._v("作为缓冲的内存数量")])])])]),t._v(" "),s("h4",{attrs:{id:"_5第五行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5第五行"}},[t._v("#")]),t._v(" ⑤第五行")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:a(9429)}}),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("内 容")]),t._v(" "),s("th",[t._v("说 明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Swap: 2097148 total")]),t._v(" "),s("td",[t._v("交换分区（虚拟内存）的总大小")])]),t._v(" "),s("tr",[s("td",[t._v("3336 used")]),t._v(" "),s("td",[t._v("已经使用的交换分区的大小")])]),t._v(" "),s("tr",[s("td",[t._v("2093812 free")]),t._v(" "),s("td",[t._v("空闲交换分区的大小")])]),t._v(" "),s("tr",[s("td",[t._v("622420 avail Mem")]),t._v(" "),s("td",[t._v("可用内存")])])])]),t._v(" "),s("p",[t._v("​        我们通过 top 命令的整体信息部分，就可以判断服务器的健康状态。如果 1 分钟、5 分钟、15 分钟的平均负载高于CPU核数，说明系统压力较大。如果物理内存的空闲内存过小，则也证明系统压力较大。")]),t._v(" "),s("p",[t._v("问题：根据以上信息，目前我们的系统压力如何？")]),t._v(" "),s("p",[t._v("问题：如果我们发现CPU负载过大，接下来怎么办？")]),t._v(" "),s("h3",{attrs:{id:"_2-进程信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-进程信息"}},[t._v("#")]),t._v(" 2）进程信息：")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:a(9430)}}),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("PID")]),t._v(" "),s("th",[t._v("进程的 ID。")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("USER")]),t._v(" "),s("td",[t._v("该进程所属的用户。")])]),t._v(" "),s("tr",[s("td",[t._v("PR")]),t._v(" "),s("td",[t._v("优先级，数值越小优先级越高。")])]),t._v(" "),s("tr",[s("td",[t._v("NI")]),t._v(" "),s("td",[t._v("优先级，数值越小优先级越高。")])]),t._v(" "),s("tr",[s("td",[t._v("VIRT")]),t._v(" "),s("td",[t._v("该进程使用的虚拟内存的大小，单位为 KB。")])]),t._v(" "),s("tr",[s("td",[t._v("RES")]),t._v(" "),s("td",[t._v("该进程使用的物理内存的大小，单位为 KB。")])]),t._v(" "),s("tr",[s("td",[t._v("SHR")]),t._v(" "),s("td",[t._v("共享内存大小，单位为 KB。计算一个进程实际使用的内存 = 常驻内存（RES）- 共享内存（SHR）")])]),t._v(" "),s("tr",[s("td",[t._v("S")]),t._v(" "),s("td",[t._v("进程状态。其中S 表示睡眠，R 表示运行")])]),t._v(" "),s("tr",[s("td",[t._v("%CPU")]),t._v(" "),s("td",[t._v("该进程占用 CPU 的百分比。")])]),t._v(" "),s("tr",[s("td",[t._v("%MEM")]),t._v(" "),s("td",[t._v("该进程占用内存的百分比。")])]),t._v(" "),s("tr",[s("td",[t._v("TIME+")]),t._v(" "),s("td",[t._v("该进程共占用的 CPU 时间。")])]),t._v(" "),s("tr",[s("td",[t._v("COMMAND")]),t._v(" "),s("td",[t._v("进程名")])])])]),t._v(" "),s("h4",{attrs:{id:"问题-如果我们发现cpu负载过大-接下来怎么办"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题-如果我们发现cpu负载过大-接下来怎么办"}},[t._v("#")]),t._v(" 问题：如果我们发现CPU负载过大，接下来怎么办？")]),t._v(" "),s("p",[t._v("答：查看占用CPU最多的进程")]),t._v(" "),s("h4",{attrs:{id:"问题-如何查看占用cpu最多的进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题-如何查看占用cpu最多的进程"}},[t._v("#")]),t._v(" 问题：如何查看占用CPU最多的进程？")]),t._v(" "),s("p",[t._v("答：交互操作快捷键P，P（大写）：，表示将结果按照CPU 使用率从高到低进行降序排列")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:a(9431)}}),t._v(" "),s("h4",{attrs:{id:"问题-如果我们发现内存可用量很小-接下来怎么办"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题-如果我们发现内存可用量很小-接下来怎么办"}},[t._v("#")]),t._v(" 问题：如果我们发现内存可用量很小，接下来怎么办？")]),t._v(" "),s("p",[t._v("答：查看占用内存最多的进程，使用交互快捷键M（大写）：表示将结果按照内存（MEM）从高到低进行降序排列")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:a(9432)}}),t._v(" "),s("h4",{attrs:{id:"问题-当我们查看完系统状态-需要做什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题-当我们查看完系统状态-需要做什么"}},[t._v("#")]),t._v(" 问题：当我们查看完系统状态，需要做什么？")]),t._v(" "),s("p",[t._v("答：退出，使用q，按键盘上的q，就会回到#提示符的状态。")]),t._v(" "),s("h2",{attrs:{id:"_2、free查看内存使用情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、free查看内存使用情况"}},[t._v("#")]),t._v(" 2、free查看内存使用情况")]),t._v(" "),s("p",[t._v("命令：free")]),t._v(" "),s("p",[t._v("作用：查看内存使用情况")]),t._v(" "),s("p",[t._v("语法：#free  -m")]),t._v(" "),s("p",[t._v("选项：-m 表示以mb为单位查看（1g = 1024mb，1mb = 1024kb）")]),t._v(" "),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("用法一：free "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m\n示例代码：\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#free -m")]),t._v("\n含义：查看内存使用情况\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("img",{staticStyle:{width:"960px"},attrs:{src:a(9433)}}),t._v(" "),s("p",[t._v("​    和Centos6相比，buffer和cached被合成一组，加入了一个available。")]),t._v(" "),s("p",[t._v("​    关于此available，即系统可用内存，用户不需要去计算buffer/cache，即可以看到还有多少内存可用，更加简单直观")]),t._v(" "),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("第1行Mem数据：\ntotal 内存总数: 1819\nused 已经使用的内存数: 774\nfree 空闲的内存数: 152\nshared 共享内存数: 77\nbuff/Cache块设备缓存区内存数: 892\navailable可用内存: 746\n\n第2行数据是Swap交换分区，也就是我们通常所说的虚拟内存。可以在内存不够使用的情况下当临时内存来使用，交换分区并不是越大越好，一般话它就等同于实际内存的大小。\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h2",{attrs:{id:"_3、df查看磁盘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、df查看磁盘"}},[t._v("#")]),t._v(" 3、df查看磁盘")]),t._v(" "),s("p",[t._v("命令：df")]),t._v(" "),s("p",[t._v("作用：查看磁盘的空间(disk  free)")]),t._v(" "),s("p",[t._v("语法：# df   [-h]")]),t._v(" "),s("p",[t._v("选项：-h表示可读性较高的形式展示大小")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:a(9434)}}),t._v(" "),s("p",[t._v("这几列依次是：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Filesystem")]),t._v(" "),s("th",[t._v("磁盘名称")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Size")]),t._v(" "),s("td",[t._v("总大小")])]),t._v(" "),s("tr",[s("td",[t._v("Used")]),t._v(" "),s("td",[t._v("被使用的大小")])]),t._v(" "),s("tr",[s("td",[t._v("Avail")]),t._v(" "),s("td",[t._v("剩余大小")])]),t._v(" "),s("tr",[s("td",[t._v("Use%")]),t._v(" "),s("td",[t._v("使用百分比")])]),t._v(" "),s("tr",[s("td",[t._v("Mounted on")]),t._v(" "),s("td",[t._v("挂载路径（相当于Windows 的磁盘符）")])])])]),t._v(" "),s("p",[t._v("回到开始的工作场景：")]),t._v(" "),s("p",[t._v("​        小黑入职到一家公司，接到的第一项任务，就是监控生产服务器的性能，提到服务器性能，我们首先想到的就是CPU，内存和磁盘。")]),t._v(" "),s("h4",{attrs:{id:"问题-小黑具体应该如何监控cpu-内存和磁盘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题-小黑具体应该如何监控cpu-内存和磁盘"}},[t._v("#")]),t._v(" 问题：小黑具体应该如何监控CPU，内存和磁盘？")]),t._v(" "),s("p",[t._v("总结：CPU：")]),t._v(" "),s("p",[t._v("​           内存：")]),t._v(" "),s("p",[t._v("​           磁盘：")]),t._v(" "),s("h4",{attrs:{id:"作业1-课下将总结的部分落实到笔记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作业1-课下将总结的部分落实到笔记"}},[t._v("#")]),t._v(" 作业1：课下将总结的部分落实到笔记")]),t._v(" "),s("h2",{attrs:{id:"_4、ps查看进程命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、ps查看进程命令"}},[t._v("#")]),t._v(" 4、ps查看进程命令")]),t._v(" "),s("p",[t._v("命令：ps（process show进程显示）")]),t._v(" "),s("p",[t._v("语法：ps [参数选项]")]),t._v(" "),s("p",[t._v("作用：主要是查看服务器的进程信息")]),t._v(" "),s("p",[t._v("选项含义：")]),t._v(" "),s("p",[t._v("-e：等价于“-A”，表示列出全部（all）的进程")]),t._v(" "),s("p",[t._v("-f :   表示full，显示全部的列（显示全字段）")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:a(9435)}}),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("UID")]),t._v(" "),s("th",[t._v("该进程执行的用户ID")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("PID")]),t._v(" "),s("td",[t._v("进程ID")])]),t._v(" "),s("tr",[s("td",[t._v("PPID")]),t._v(" "),s("td",[t._v("该进程的父级进程ID，如果找不到，则该进程就被称之为僵尸进程（Parent Process ID）")])]),t._v(" "),s("tr",[s("td",[t._v("C")]),t._v(" "),s("td",[t._v("Cpu的占用率，其形式是百分数")])]),t._v(" "),s("tr",[s("td",[t._v("STIME")]),t._v(" "),s("td",[t._v("进程的启动时间")])]),t._v(" "),s("tr",[s("td",[t._v("TTY")]),t._v(" "),s("td",[t._v("终端设备，发起该进程的设备识别符号，如果显示“?”则表示该进程并不是由终端设备发起")])]),t._v(" "),s("tr",[s("td",[t._v("TIME")]),t._v(" "),s("td",[t._v("进程实际使用CPU的时间")])]),t._v(" "),s("tr",[s("td",[t._v("CMD")]),t._v(" "),s("td",[t._v("该进程的名称或者对应的路径")])])])]),t._v(" "),s("p",[t._v("工作场景")]),t._v(" "),s("p",[t._v("​        小黑用学到的命令，发现某个进程占用CPU很高，希望进一步查看这个简称的信息。")]),t._v(" "),s("p",[t._v("​        ps -ef 会列出全部进程，但是我们发现进程非常多，我们很难找到自己想要看的进程。这里需要使用过滤命令grep，来过滤掉我们不需要的信息。")]),t._v(" "),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("用法："),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ef "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("grep 想要看到的进程名\n示例代码：\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ps -ef |grep crond")]),t._v("\n含义：查看crond进程的详细情况\n注意：查询结果中，如果只有一条则表示没查到对应的进程（这1 条表示刚才"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" 指令的自身）。只有查到的结果多余1 条，才表示有对应的进程。\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("img",{staticStyle:{width:"960px"},attrs:{src:a(9436)}}),t._v(" "),s("blockquote",[s("p",[t._v("补充：针对上述情况的优化：如果没有对应的进程，则什么都不显示。")])]),t._v(" "),s("p",[t._v("思路：在现有的基础之上再次使用管道去处理下（-v 选项表示“排除”）。")]),t._v(" "),s("p",[t._v('扩展：ps  aux  BSD格式命令，注意没有横杠"-"')]),t._v(" "),s("p",[t._v("Unix有很多分支，目前主流的显示风格分为System V和BSD，我们之前使用的ps -ef属于system V风格，ps aux是BSD风格，大家可以理解为两种风格只是显示不同。")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:a(9437)}}),t._v(" "),s("p",[t._v("USER：该 process 属于哪个使用者账号\nPID ：该 process 的ID\n%CPU：该 process 使用掉的 CPU 资源百分比\n%MEM：该 process 所占用的物理内存百分比\nVSZ ：该 process 使用掉的虚拟内存量 (Kbytes)\nRSS ：该 process 占用的固定的内存量 (Kbytes)\nTTY ：该 process 是在那个终端机上面运作，若与终端机无关，则显示 ?，另外， tty1-tty6 是本机上面的登入者程序，若为 pts/0 等等的，则表示为由网络连接进主机的程序。\nSTAT：该程序目前的状态，主要的状态有\n​    R ：该程序目前正在运作，或者是可被运作\n​    S ：该程序目前正在睡眠当中 (可说是 idle 状态)，但可被某些讯号 (signal) 唤醒。\n​    T ：该程序目前正在侦测或者是停止了\n​    Z ：该程序应该已经终止，但是其父程序却无法正常的终止他，造成 zombie (疆尸) 程序的状态\nSTART：该 process 被触发启动的时间\nTIME ：该 process 实际使用 CPU 运作的时间\nCOMMAND：该程序的实际指令")]),t._v(" "),s("h2",{attrs:{id:"_5、netstat查看进程网络访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、netstat查看进程网络访问"}},[t._v("#")]),t._v(" 5、netstat查看进程网络访问")]),t._v(" "),s("p",[t._v("命令：netstat")]),t._v(" "),s("p",[t._v("作用：查看网络连接状态")]),t._v(" "),s("p",[t._v("语法：netstat   -tnlp")]),t._v(" "),s("p",[t._v("选项：-t：表示只列出tcp 协议的连接；")]),t._v(" "),s("p",[t._v("​\t   -n：表示将地址从字母组合转化成ip 地址，将协议转化成端口号来显示；")]),t._v(" "),s("p",[t._v('​\t   -l ：表示过滤出"state（状态）"列中其值为LISTEN（监听）的连接；')]),t._v(" "),s("p",[t._v("​\t   -p：表示显示发起连接的进程pid 和进程名称；")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:a(9438)}}),t._v(" "),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("Protocol：协议（tcp、upd、http、https、icmp、ssh…）\nReceive：接收\nSend：发送\nLocal Address:本地地址\nForeign：远程地址\nState：状态，LISTEN表示侦听来自远方的TCP端口的连接请求\nPID/Program name：进程ID和程序名\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h2",{attrs:{id:"_6、kill关闭进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、kill关闭进程"}},[t._v("#")]),t._v(" 6、kill关闭进程")]),t._v(" "),s("p",[t._v("命令：kill")]),t._v(" "),s("p",[t._v("语法：kill [信号] PID")]),t._v(" "),s("p",[t._v("作用：kill 命令会向操作系统内核发送一个信号（多是终止信号）和目标进程的 PID，然后系统内核根据收到的信号类型，对指定进程进行相应的操作")]),t._v(" "),s("p",[t._v("信号种类：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("信号编号")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("9")]),t._v(" "),s("td",[t._v("杀死进程，即强制结束进程。")])]),t._v(" "),s("tr",[s("td",[t._v("15")]),t._v(" "),s("td",[t._v("正常结束进程，是 kill   命令的默认信号。")])])])]),t._v(" "),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("用法一："),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("信号编号"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" PID\n示例代码：\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ps -ef |grep crond")]),t._v("\n查询crond进程信息，想知道它的PID，以便使用"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v("终止进程\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#kill 6925")]),t._v("\n结束6925的进程，这里使用默认信号，正常结束，如果强制结束，就是"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("9 6925\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ps -ef |grep crond")]),t._v("\n查询crond进程信息"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("这次查询是为了确认crond进程是否被终止了，我们发现6925进程已经没有了\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#systemctl start crond")]),t._v("\n使用前面学过的systemctl命令，重启crond服务\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ps -ef |grep crond")]),t._v("\n查询crond进程信息"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("这次查询是为了确认crond进程已经重新启动了，我们看到多了一个32934的进程，表明crond已经启动，并且进程ID变化了，这是一个新的进程\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("img",{staticStyle:{width:"960px"},attrs:{src:a(389)}}),t._v(" "),s("blockquote",[s("p",[t._v("备注：在互联网中，经常看到kill  -9  进程PID，强制杀死某个进程，kill -l")])]),t._v(" "),s("h2",{attrs:{id:"_7、killall关闭进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7、killall关闭进程"}},[t._v("#")]),t._v(" 7、killall关闭进程")]),t._v(" "),s("p",[t._v("命令：killall")]),t._v(" "),s("p",[t._v("作用：通过程序的==进程名==来杀死==一类==进程")]),t._v(" "),s("p",[t._v("语法：# killall  [信号] 进程名称")]),t._v(" "),s("p",[t._v("信号种类：和kill相同，这里不再重复")]),t._v(" "),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("用法一：killall "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("信号编号"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 进程名\n示例代码：\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ps -ef |grep crond")]),t._v("\n查询crond进程信息，想知道它的进程名，以便使用killall终止进程\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#kill 6925")]),t._v("\n结束6925的进程，这里使用默认信号，正常结束，如果强制结束，就是"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("9 6925\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("img",{staticStyle:{width:"960px"},attrs:{src:a(389)}}),t._v(" "),s("h1",{attrs:{id:"三、进程优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、进程优先级"}},[t._v("#")]),t._v(" 三、进程优先级")]),t._v(" "),s("h2",{attrs:{id:"_1、什么是进程优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是进程优先级"}},[t._v("#")]),t._v(" 1、什么是进程优先级？")]),t._v(" "),s("p",[t._v("​        Linux是一个多用户、多任务的操作系统，系统中通常运行着非常多的进程。哪些进程先运行，哪些进程后运行，就由进程优先级来控制")]),t._v(" "),s("h2",{attrs:{id:"_2、查看进程优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、查看进程优先级"}},[t._v("#")]),t._v(" 2、查看进程优先级")]),t._v(" "),s("p",[t._v("PR  优先级，数值越小优先级越高。"),s("br"),t._v("\nNI  优先级，数值越小优先级越高。")]),t._v(" "),s("p",[t._v("问题：这两个数值是在哪里看到的？")]),t._v(" "),s("p",[t._v("答：")]),t._v(" "),s("h2",{attrs:{id:"_3、调整进程优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、调整进程优先级"}},[t._v("#")]),t._v(" 3、调整进程优先级")]),t._v(" "),s("h4",{attrs:{id:"_1-调整-正在运行-进程的优先级-renice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-调整-正在运行-进程的优先级-renice"}},[t._v("#")]),t._v(" ① 调整==正在运行==进程的优先级(renice)")]),t._v(" "),s("h5",{attrs:{id:"_1-使用top按-r-来调整"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用top按-r-来调整"}},[t._v("#")]),t._v(' 1）使用top按"r"来调整')]),t._v(" "),s("p",[t._v('​      如果要改变某个进程的优先级，就要利用 "r" 交互命令。')]),t._v(" "),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("改变NICE-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(">PR\n优先级的范围：\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("20——19  数字越低，优先级越高，系统会按照更多的cpu时间给该进程\n注意：我们能够修改的只有 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Ni")]),t._v(" 的优先级，而不能修改 Pr 的优先级。\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("步骤1：运行top命令，按r，会提示输入希望修改优先级的进程的PID，这里输入6451，表示想修改firewalld进程的优先级")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:a(9439)}}),t._v(" "),s("p",[t._v("步骤2：输入6451后回车，提示希望修改的具体数字，这个数字是从-20到19，这里输入5，数字越大，优先级别越低，所以，这里是降低了firewalld的优先级")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:a(9440)}}),t._v(" "),s("p",[t._v("步骤3：输入5后，按回车，会发现6451进程的NI, 从0变成了5，PR从20变成了25")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:a(9441)}}),t._v(" "),s("h5",{attrs:{id:"_2-命令行使用renice调整"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令行使用renice调整"}},[t._v("#")]),t._v(" 2）命令行使用renice调整")]),t._v(" "),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("命令：renice\n语法：renice "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[NI优先级设置的数字]")]),t._v(" 想调整的进程ID\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[root@localhost ~]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# renice -5 6451")]),t._v("\n含义：将6451进程的"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NI")]),t._v("优先级设置为"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("5，实际效果是提高了6451进程的优先级\n注意：这里的"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("5代表设置成"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("5，不是所谓加减的关系，如果当前"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NI")]),t._v("的值是10，当设置成"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("5后，"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NI")]),t._v("的值会变为"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("img",{staticStyle:{width:"960px"},attrs:{src:a(9442)}}),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:a(9443)}}),t._v(" "),s("h4",{attrs:{id:"_2-程序启动时指定优先级-nice-只能调整不在运行的程序。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-程序启动时指定优先级-nice-只能调整不在运行的程序。"}},[t._v("#")]),t._v(" ② 程序启动时指定优先级(nice)，只能调整不在运行的程序。")]),t._v(" "),s("p",[t._v("步骤1：将程序停止")]),t._v(" "),s("p",[t._v("步骤2：启动并制定优先级")]),t._v(" "),s("p",[t._v("步骤3：确认优先级（查看优先级）")]),t._v(" "),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("命令：nice\n语法：nice "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[NI优先级设置的数字]")]),t._v(" 想调整的进程名\n启动进程时，通常会继承父进程的 nice级别，默认为0\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ps -ef |grep crond")]),t._v("\n含义：查看crond的进程信息\n目的：找出crond的PID，用于结束进程\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#kill -9 crond的进程ID")]),t._v("\n含义：结束crond的进程\n目的：nice只能修改不在运行的进程的优先级\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ps -ef |grep crond")]),t._v("\n含义:查看crond的进程信息\n目的：确认crond进程是不是已经停止了\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#nice -n -5 crond")]),t._v("\n含义：启动crond进程，将"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NI")]),t._v("设置成"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("5\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ps -ef |grep crond")]),t._v("\n含义：查看crond的进程信息\n目的：找出crond的PID，用于查看此进程的优先级\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#top -p crond的进程ID")]),t._v("\n含义：使用TOP命令，只查看和crond进程相关的信息\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br")])]),s("h3",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])])])}),[],!1,null,null,null);s.default=_.exports},389:function(t,s,a){t.exports=a.p+"assets/img/ps05.2b4dab9e.jpg"},9420:function(t,s,a){t.exports=a.p+"assets/img/jincheng04.110d03fb.jpg"},9421:function(t,s,a){t.exports=a.p+"assets/img/jincheng06.c4f612ef.jpg"},9422:function(t,s,a){t.exports=a.p+"assets/img/jincheng05.0835bdc5.jpg"},9423:function(t,s,a){t.exports=a.p+"assets/img/top01.76036bbd.jpg"},9424:function(t,s,a){t.exports=a.p+"assets/img/top02.b554e40e.jpg"},9425:function(t,s,a){t.exports=a.p+"assets/img/top03.05982b91.jpg"},9426:function(t,s,a){t.exports=a.p+"assets/img/top04.e2bfdc88.jpg"},9427:function(t,s,a){t.exports=a.p+"assets/img/top10.3f792ae0.jpg"},9428:function(t,s,a){t.exports=a.p+"assets/img/top05.7018bf9a.jpg"},9429:function(t,s,a){t.exports=a.p+"assets/img/top06.7d77cad2.jpg"},9430:function(t,s,a){t.exports=a.p+"assets/img/top07.b4d03807.jpg"},9431:function(t,s,a){t.exports=a.p+"assets/img/top08.3331fbee.jpg"},9432:function(t,s,a){t.exports=a.p+"assets/img/top09.51abfbb3.jpg"},9433:function(t,s,a){t.exports=a.p+"assets/img/free01.c76af326.jpg"},9434:function(t,s,a){t.exports=a.p+"assets/img/df01.3c5fffeb.jpg"},9435:function(t,s,a){t.exports=a.p+"assets/img/ps01.b072b1d6.jpg"},9436:function(t,s,a){t.exports=a.p+"assets/img/ps03.79f21d66.jpg"},9437:function(t,s,a){t.exports=a.p+"assets/img/ps04.590fb357.jpg"},9438:function(t,s,a){t.exports=a.p+"assets/img/netstat02.33737f4b.jpg"},9439:function(t,s,a){t.exports=a.p+"assets/img/youxianji01.7eb606f6.jpg"},9440:function(t,s,a){t.exports=a.p+"assets/img/youxianji02.10f64e67.jpg"},9441:function(t,s,a){t.exports=a.p+"assets/img/youxianji03.8d53532b.jpg"},9442:function(t,s,a){t.exports=a.p+"assets/img/youxianji04.4828bcb6.jpg"},9443:function(t,s,a){t.exports=a.p+"assets/img/youxianji05.0a400996.jpg"}}]);