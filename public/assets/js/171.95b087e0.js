(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{13300:function(s,a,e){"use strict";e.r(a);var t=e(2),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux的权限管理操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux的权限管理操作"}},[s._v("#")]),s._v(" Linux的权限管理操作")]),s._v(" "),a("h1",{attrs:{id:"一、权限概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、权限概述"}},[s._v("#")]),s._v(" 一、权限概述")]),s._v(" "),a("h2",{attrs:{id:"_1、权限的基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、权限的基本概念"}},[s._v("#")]),s._v(" 1、权限的基本概念")]),s._v(" "),a("p",[s._v("在多用户计算机系统的管理中，权限是指某个特定的用户具有特定的系统资源使用权利。")]),s._v(" "),a("p",[s._v("在Linux 中分别有读、写、执行权限：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th"),s._v(" "),a("th",[s._v("权限针对文件")]),s._v(" "),a("th",[s._v("权限针对目录")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("读r")]),s._v(" "),a("td",[s._v("表示可以查看文件内容；cat")]),s._v(" "),a("td",[s._v("表示可以(ls)查看目录中存在的文件名称")])]),s._v(" "),a("tr",[a("td",[s._v("写w")]),s._v(" "),a("td",[s._v("表示可以更改文件的内容；vim 修改，保存退出")]),s._v(" "),a("td",[s._v("表示是否可以删除目录中的子文件或者新建子目录(rm/touch/mkdir)")])]),s._v(" "),a("tr",[a("td",[s._v("执行x")]),s._v(" "),a("td",[s._v("表示是否可以开启文件当中记录的程序,一般指二进制文件(.sh) => 绿色")]),s._v(" "),a("td",[s._v("表示是否可以进入目录中(cd)")])])])]),s._v(" "),a("blockquote",[a("p",[s._v("注：一般给予目录读权限时，也将会给其执行权限，属于“套餐”组合")]),s._v(" "),a("p",[s._v("可读权限 read => r（简写），可写权限 write => w（简写），可执行权限 excute => x（简写）")])]),s._v(" "),a("h2",{attrs:{id:"_2、为什么要设置权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、为什么要设置权限"}},[s._v("#")]),s._v(" 2、为什么要设置权限")]),s._v(" "),a("p",[s._v("1）服务器中的数据价值")]),s._v(" "),a("p",[s._v("2）员工的工作职责和分工不同")]),s._v(" "),a("p",[s._v("3）应对自外部的攻击(挂马)")]),s._v(" "),a("p",[s._v("4）内部管理的需要")]),s._v(" "),a("h2",{attrs:{id:"_3、linux用户身份类别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、linux用户身份类别"}},[s._v("#")]),s._v(" 3、Linux用户身份类别")]),s._v(" "),a("p",[s._v("Linux 系统一般将文件权限分为3 类：")]),s._v(" "),a("p",[s._v("read（读）")]),s._v(" "),a("p",[s._v("write（写）")]),s._v(" "),a("p",[s._v("execute（执行）")]),s._v(" "),a("p",[s._v("**==谁==**对文件有读，写，执行的权限呢？ 答：针对三大类用户")]),s._v(" "),a("h2",{attrs:{id:"_4、user文件拥有者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、user文件拥有者"}},[s._v("#")]),s._v(" 4、user文件拥有者")]),s._v(" "),a("p",[s._v("文件的拥有者：默认情况下，谁创建了这个文件谁就是文件的拥有者。文件的拥有者可以进行更改并不是一成不变的。")]),s._v(" "),a("p",[s._v("裴凯 => linux.txt，默认情况下，裴凯就是linux.txt文件的拥有者")]),s._v(" "),a("h2",{attrs:{id:"_5、group文件所属组内用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、group文件所属组内用户"}},[s._v("#")]),s._v(" 5、group文件所属组内用户")]),s._v(" "),a("p",[s._v("group所属组内用户代表与文件的所属组相同的组内用户。")]),s._v(" "),a("p",[s._v("比如，裴凯与罗新兴、周卓都同属于一个itheima的用户组，罗新兴和周卓就是这个文件的组内用户。")]),s._v(" "),a("h2",{attrs:{id:"_6、other其他用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、other其他用户"}},[s._v("#")]),s._v(" 6、other其他用户")]),s._v(" "),a("p",[s._v("other其他用户代表这些人既不是文件的拥有者，也不是文件所属组内的用户，我们把这些人就称之为other其他用户。")]),s._v(" "),a("h2",{attrs:{id:"_7、特殊用户root"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、特殊用户root"}},[s._v("#")]),s._v(" 7、特殊用户root")]),s._v(" "),a("p",[s._v("在Linux操作系统中，root拥有最高权限（针对所有文件），所以权限设置对root账号没有效果。")]),s._v(" "),a("p",[a("img",{attrs:{src:e(8498),alt:"image-20200320110034242"}})]),s._v(" "),a("blockquote",[a("p",[s._v("在Linux系统中，三大类用户也可以拥有简写形式user(u)、group(g)、other(o)")])]),s._v(" "),a("h1",{attrs:{id:"二、普通权限管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、普通权限管理"}},[s._v("#")]),s._v(" 二、普通权限管理")]),s._v(" "),a("h2",{attrs:{id:"_1、ls-l命令查看文件权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、ls-l命令查看文件权限"}},[s._v("#")]),s._v(" 1、ls -l命令查看文件权限")]),s._v(" "),a("p",[s._v("基本语法：")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls -l")]),s._v("\n或\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("blockquote",[a("p",[s._v("备注：ll命令是红帽以及CentOS系统特有的一个命令，在其他操作系统中可能并不支持")])]),s._v(" "),a("p",[a("img",{attrs:{src:e(8499),alt:"image-20200320113017121"}})]),s._v(" "),a("h2",{attrs:{id:"_2、文件类型-权限解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、文件类型-权限解析"}},[s._v("#")]),s._v(" 2、文件类型+权限解析")]),s._v(" "),a("p",[a("img",{attrs:{src:e(8500),alt:"image-20200320114528433"}})]),s._v(" "),a("p",[s._v("Linux一共有7种文件类型,分别如下:\n-：普通文件\nd：目录文件\nl： 软链接（类似Windows的快捷方式）")]),s._v(" "),a("p",[s._v("(下面四种是特殊文件)\nb：block，块设备文件（例如硬盘、光驱等）\np：管道文件\nc：字符设备文件（例如猫(上网猫)等串口设备）\ns：套接口文件/数据接口文件（例如启动一个MySql服务器时会产生一个mysql.sock文件）")]),s._v(" "),a("h2",{attrs:{id:"_3、文件或文件夹权限设置-字母"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、文件或文件夹权限设置-字母"}},[s._v("#")]),s._v(" 3、文件或文件夹权限设置（字母）")]),s._v(" "),a("p",[s._v("基本语法：ch = change mod简单理解权限")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod [选项] 权限设置 文件或目录的名称")]),s._v("\n选项说明：\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("R ：递归设置，针对文件夹（目录）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("blockquote",[a("p",[s._v("重点：字母设置并不难，重点看三方面")]),s._v(" "),a("p",[s._v("第一个：确认要给哪个身份设置权限，u、g、o、ugo(a)")]),s._v(" "),a("p",[s._v("第二个：确认是添加权限(+)、删除权限(-)还是赋予权限(=)")]),s._v(" "),a("p",[s._v("第三个：确认给这个用户针对这个文件或文件夹设置什么样的权限，r、w、x")])]),s._v(" "),a("p",[s._v("案例：给readme.txt文件的拥有者，增加一个可执行权限")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod u+x readme.txt")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("案例：把readme.txt文件的拥有者的可执行权限去除")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod u-x readme.txt")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("案例：为readme.txt中的所属组内用户赋予rw权限")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod g=rw readme.txt")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("案例：给shop目录及其内部的文件统一添加w可写权限")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod -R ugo+w shop")]),s._v("\n或\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chomd -R a+w shop")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("案例：给shop目录设置权限，要求拥有者rwx，组内用户r-x，其他用户r-x")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod -R u=rwx,g=r-x,o=r-x shop")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_4、文件或文件夹权限设置-数字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、文件或文件夹权限设置-数字"}},[s._v("#")]),s._v(" 4、文件或文件夹权限设置（数字）")]),s._v(" "),a("p",[s._v("经常会在技术网站上看到类似于# chmod 777 a.txt 这样的命令，这种形式称之为==数字形式权限==。")]),s._v(" "),a("p",[s._v("文件"),a("strong",[s._v("权限与数字")]),s._v("的对应关系，我们会发现"),a("strong",[s._v("没有7")]),s._v("这个数字")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("权限")]),s._v(" "),a("th",[s._v("对应数字")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("意义")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("r")]),s._v(" "),a("td",[s._v("4")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("可读")])]),s._v(" "),a("tr",[a("td",[s._v("w")]),s._v(" "),a("td",[s._v("2")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("可写")])]),s._v(" "),a("tr",[a("td",[s._v("x")]),s._v(" "),a("td",[s._v("1")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("可执行")])]),s._v(" "),a("tr",[a("td",[s._v("-")]),s._v(" "),a("td",[s._v("0")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("没有权限")])])])]),s._v(" "),a("p",[s._v("777 ：")]),s._v(" "),a("p",[s._v("第一个数字7，代表文件拥有者权限")]),s._v(" "),a("p",[s._v("第二个数字7，代表文件所属组内用户权限")]),s._v(" "),a("p",[s._v("第三个数字7，代表其他用户权限")]),s._v(" "),a("p",[s._v("rwx = 4 + 2 + 1 = 7")]),s._v(" "),a("p",[s._v("rw = 4 + 2 = 6")]),s._v(" "),a("p",[s._v("rx = 4 + 1 = 5")]),s._v(" "),a("p",[s._v("案例：给readme.txt设置权限，文件的拥有者rwx，组内用户rw，其他用户r")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("rwx = 7\nrw = 6\nr = 4\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod 764 readme.txt")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("案例：给shop文件夹设置777权限")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod -R 777 shop")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_5、奇葩权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、奇葩权限"}},[s._v("#")]),s._v(" 5、奇葩权限")]),s._v(" "),a("p",[s._v("问题：用超级管理员设置文档的权限命令是# chmod  -R  731 shop，请问这个命令有没有什么不合理的地方？")]),s._v(" "),a("p",[s._v("答：731权限进行拆解")]),s._v(" "),a("p",[s._v("7 = 4 + 2 + 1 = rwx")]),s._v(" "),a("p",[s._v("3 = 2 + 1 = wx")]),s._v(" "),a("p",[s._v("1 = x")]),s._v(" "),a("p",[s._v("问题在权限731中的3权限，3表示写+执行权限，但是写又必须需要能打开之后才可以写，因此必须需要具备可读权限，因此此权限设置不合理。")]),s._v(" "),a("p",[s._v('注：实际工作中，各位小伙伴在设置权限时一定不要设置这种"奇葩权限"，一般情况下，单独出现2、3的权限数字一般都是有问题的权限。')]),s._v(" "),a("h2",{attrs:{id:"_6、练习题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、练习题"}},[s._v("#")]),s._v(" 6、练习题")]),s._v(" "),a("p",[s._v("1）使用root 用户设置文件夹/root/shop 的权限为：属主全部权限，属组拥有读和执行权限，其他用户没有权限，请使用数字权限的形式设置")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("rwx=7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("rx=4+1=5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("0\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod -R 750 /root/shop")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("2）请置文件/root/readme.txt 的权限，权限要求为：")]),s._v(" "),a("p",[s._v("​        属主拥有"),a("strong",[s._v("全部")]),s._v("权限，属组要求可以"),a("strong",[s._v("读写")]),s._v("，其他用户"),a("strong",[s._v("只读")]),s._v("，要求使用数字形式；")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("rwx=7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("rw=4+2=6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("r=4\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod 764 /root/readme.txt")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("3）请设置/root/email.doc权限，权限要求只有属主可以读写，除此之外任何人没有权限；")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("rw=6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("0\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod 600 /root/email.doc")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_7、特殊权限说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、特殊权限说明"}},[s._v("#")]),s._v(" 7、特殊权限说明")]),s._v(" "),a("p",[s._v("在Linux 中，如果要删除一个文件，不是看文件有没有对应的权限，而是看文件所在的==目录是否有写权限==，如果有才可以删除（同时必须具备执行权限）。")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("shell/readme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("txt\n我们想删除readme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("txt文件，必须要对shell目录具有可写权限，否则文件无法删除\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h1",{attrs:{id:"三、文件拥有者以及文件所属组设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、文件拥有者以及文件所属组设置"}},[s._v("#")]),s._v(" 三、文件拥有者以及文件所属组设置")]),s._v(" "),a("p",[s._v("文件拥有者：属主")]),s._v(" "),a("p",[s._v("文件所属组：属组")]),s._v(" "),a("h2",{attrs:{id:"_1、什么是属主与属组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是属主与属组"}},[s._v("#")]),s._v(" 1、什么是属主与属组")]),s._v(" "),a("p",[s._v("属主：所属的用户，文档所有者，这是一个账户，这是一个人")]),s._v(" "),a("p",[s._v("属组：所属的用户组，这是一个组")]),s._v(" "),a("h2",{attrs:{id:"_2、文件拥有者与所属组的查看"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、文件拥有者与所属组的查看"}},[s._v("#")]),s._v(" 2、文件拥有者与所属组的查看")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls -l")]),s._v("\n或\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:e(8501),alt:"image-20200320150210026"}})]),s._v(" "),a("h2",{attrs:{id:"_3、了解文件的拥有者与文件所属组来源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、了解文件的拥有者与文件所属组来源"}},[s._v("#")]),s._v(" 3、了解文件的拥有者与文件所属组来源")]),s._v(" "),a("p",[s._v("在Linux操作系统中，每个文件都是由Linux系统用户创建的。")]),s._v(" "),a("p",[s._v("在Linux操作系统中，每个用户都具有一个用户名称以及一个主组的概念")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# su - itheima")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# touch readme.txt")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll readme.txt")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw-rw-r-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" 1 itheima itheima 0 Mar 20 15:17 readme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_4、为什么需要更改文件拥有者与所属组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、为什么需要更改文件拥有者与所属组"}},[s._v("#")]),s._v(" 4、为什么需要更改文件拥有者与所属组")]),s._v(" "),a("p",[s._v("一个财务表格，以前由胡一菲进行更新，她有读写权限，现在胡一菲去阿拉善沙漠找曾老师了，改权限没用，需要把属主改成诸葛大力，由诸葛大力更新。")]),s._v(" "),a("h2",{attrs:{id:"_5、文件拥有者设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、文件拥有者设置"}},[s._v("#")]),s._v(" 5、文件拥有者设置")]),s._v(" "),a("p",[s._v("基本语法：ch = change ，own = owner")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chown [选项] 新文件拥有者名称 文件名称")]),s._v("\n选项说明：\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("R ：代表递归修改，主要针对文件夹\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("案例：把/root/readme.txt文件的拥有者更改为itheima")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chown itheima /root/readme.txt")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("案例：把/root/shop文件夹的拥有者更改为linuxuser")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chown -R linuxuser /root/shop")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_6、文件所属组的设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、文件所属组的设置"}},[s._v("#")]),s._v(" 6、文件所属组的设置")]),s._v(" "),a("p",[s._v("基本语法： ch = change , group，chgrp")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chgrp [选项] 新文件所属组名称 文件名称")]),s._v("\n选项说明：\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("R : 代表递归修改，主要针对文件夹\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("案例：把/root/readme.txt文件的所属组名称更改为itheima")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chgrp itheima /root/readme.txt")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("案例：把/root/shop文件夹的所属组名称也更改为itheima")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chgrp -R itheima /root/shop")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_7、chown同时修改属主与属组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、chown同时修改属主与属组"}},[s._v("#")]),s._v(" 7、chown同时修改属主与属组")]),s._v(" "),a("p",[s._v("基本语法：")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chown [选项] 文件拥有者名称:文件所属组名称 文件名称")]),s._v("\n或\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chown [选项] 文件拥有者名称.文件所属组名称 文件名称")]),s._v("\n选项说明：\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("R : 代表递归修改，主要针对文件夹\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("案例：readme.txt文件的拥有者与所属组同时更改为root")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chown root:root readme.txt")]),s._v("\n或\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chown root.root readme.txt")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("案例：更改shop目录的拥有者以及所属组为root")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chown -R root:root shop")]),s._v("\n或\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chown -R root.root shop")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h1",{attrs:{id:"四、特殊权限-扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、特殊权限-扩展"}},[s._v("#")]),s._v(" 四、特殊权限（扩展）")]),s._v(" "),a("h2",{attrs:{id:"_1、设置位s-针对二进制文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、设置位s-针对二进制文件"}},[s._v("#")]),s._v(" 1、设置位S（针对二进制文件）")]),s._v(" "),a("h3",{attrs:{id:"☆-设置位s的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-设置位s的作用"}},[s._v("#")]),s._v(" ☆ 设置位S的作用")]),s._v(" "),a("p",[s._v("作用：为了让一般使用者临时具有该文件所属主/组的执行权限。")]),s._v(" "),a("p",[s._v("主要针对二进制文件（命令）")]),s._v(" "),a("p",[s._v("例如：/usr/bin/passwd在执行它的时候需要去修改/etc/passwd和/etc/shadow等文件，这些文件除了root外，其他用户都没有写权限，但是又为了能让普通用户修改自己的密码，该怎么办呢？")]),s._v(" "),a("blockquote",[a("p",[s._v("whereis命令，主要功能就是查询某个命令所在的路径，基本语法 => whereis  passwd")])]),s._v(" "),a("p",[s._v("itheima普通账号 => 执行/usr/bin/passwd => 修改/etc/shadow文件（存放用户的密码）")]),s._v(" "),a("blockquote",[a("p",[s._v("/etc/shadow文件比较特殊，其权限为--- --- ---（000），除root外，其他人都没有权限")])]),s._v(" "),a("h3",{attrs:{id:"☆-去除s位权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-去除s位权限"}},[s._v("#")]),s._v(" ☆ 去除S位权限")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod u-s /usr/bin/passwd ")]),s._v("\n或者\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod 0755 /usr/bin/passwd")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"☆-添加s位权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-添加s位权限"}},[s._v("#")]),s._v(" ☆ 添加S位权限")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod u+s /usr/bin/passwd")]),s._v("\n或者\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod 4755 /usr/bin/passwd")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_2、沾滞位t-针对文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、沾滞位t-针对文件夹"}},[s._v("#")]),s._v(" 2、沾滞位T（针对文件夹）")]),s._v(" "),a("h3",{attrs:{id:"☆-粘滞位作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-粘滞位作用"}},[s._v("#")]),s._v(" ☆ 粘滞位作用")]),s._v(" "),a("p",[s._v("基本语法：")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod -R o+t 文件夹的名称")]),s._v("\n或\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod -R 1777 文件夹的名称")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("==主要功能：只允许文件的创建者和root用户删除文件（防止误删除权限位）==")]),s._v(" "),a("p",[s._v("案例：/tmp文件夹，拥有最高权限777，比如itheima创建了一个文件在此目录，linuxuser用户可以对其进行删除操作，这种显然不太合适。")]),s._v(" "),a("p",[s._v("7 = r + w + x = 可读、可写、可执行")]),s._v(" "),a("p",[s._v("案例：使用ls -l命令查看/tmp目录权限")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls -ld /tmp")]),s._v("\n或\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll -d /tmp")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"☆-移除粘滞位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-移除粘滞位"}},[s._v("#")]),s._v(" ☆ 移除粘滞位")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod -R o-t /tmp")]),s._v("\n或\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod -R 0777 /tmp")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"☆-添加粘滞位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-添加粘滞位"}},[s._v("#")]),s._v(" ☆ 添加粘滞位")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod -R o+t /tmp")]),s._v("\n或\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod -R 1777 /tmp")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h1",{attrs:{id:"五、acl访问控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、acl访问控制"}},[s._v("#")]),s._v(" 五、ACL访问控制")]),s._v(" "),a("h2",{attrs:{id:"_1、为什么需要acl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、为什么需要acl"}},[s._v("#")]),s._v(" 1、为什么需要ACL")]),s._v(" "),a("p",[a("img",{attrs:{src:e(8502),alt:"image-20200320164900337"}})]),s._v(" "),a("p",[s._v("ACL，是 Access Control List（访问控制列表）的缩写，在 Linux 系统中， ACL 可实现对单一用户设定访问文件的权限。")]),s._v(" "),a("blockquote",[a("p",[s._v("扩展：ACL权限可以针对某个用户，也可以针对某个组。ACL优势就是让权限控制更加的精准。")])]),s._v(" "),a("h2",{attrs:{id:"_2、获取某个文件的acl权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、获取某个文件的acl权限"}},[s._v("#")]),s._v(" 2、获取某个文件的ACL权限")]),s._v(" "),a("p",[s._v("基本语法：")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# getfacl 文件或目录名称")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_3、给某个文件设置acl权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、给某个文件设置acl权限"}},[s._v("#")]),s._v(" 3、给某个文件设置ACL权限")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# setfacl [选项] 文件或目录名称")]),s._v("\n选项说明：\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("m ： 修改acl策略\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("x ： 去掉某个用户或者某个组的权限\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("b ： 删除所有的acl策略\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("R  ：递归"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("通常用在文件夹\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("案例：针对readme.txt文件给linuxuser设置一个权限=>可读")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# setfacl -m u:linuxuser:r readme.txt\t=>  针对某个用户开通ACL权限")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("案例：针对shop文件夹给itheima组设置一个权限=>可读可写权限rw")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# setfacl -R -m g:itheima:rw shop\t=> \t针对某个用户组开通ACL权限")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("案例：把linuxuser用户权限从readme.txt中移除掉")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# setfacl -x u:linuxuser readme.txt")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("案例：把itheima用户组权限从shop中移除掉")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# setfacl -x -R g:itheima shop")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("案例：把readme.txt文件中的所有ACL权限全部移除")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# setfacl -b readme.txt")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h1",{attrs:{id:"六、umask-了解-不要更改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、umask-了解-不要更改"}},[s._v("#")]),s._v(" 六、umask（了解，不要更改！！！）")]),s._v(" "),a("h2",{attrs:{id:"_1、什么是umask"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是umask"}},[s._v("#")]),s._v(" 1、什么是umask")]),s._v(" "),a("p",[s._v("umask表示创建文件时的默认权限（即创建文件时不需要设置而天生的权限）")]),s._v(" "),a("p",[s._v("root用户下，touch a ，文件a的默认权限是644")]),s._v(" "),a("p",[s._v("普通用户下，touch b ，文件b的默认权限是664")]),s._v(" "),a("p",[s._v("644和664我们并没有设置，其中的关键因素就是"),a("strong",[s._v("umask")])]),s._v(" "),a("blockquote",[a("p",[s._v("扩展：实际上我们创建一个普通文件最高权限666。而创建一个文件夹其最高权限777")]),s._v(" "),a("p",[s._v("实际文件权限 = 最高权限 - umask的值")])]),s._v(" "),a("h2",{attrs:{id:"_2、获取用户的umask值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、获取用户的umask值"}},[s._v("#")]),s._v(" 2、获取用户的umask值")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# umask")]),s._v("\n0022\n注：0022中第一位0代表特殊权限位，可以不设置。\numask的默认值，在root和普通用户下是不一样的，分别是022和002\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("为什么文件在root下创建就是644，在itheima下就是664")]),s._v(" "),a("p",[s._v("root : 666 - 022 = 644")]),s._v(" "),a("p",[s._v("itheima：666 - 002 = 664")]),s._v(" "),a("h2",{attrs:{id:"_3、修改umask值-一定不要改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、修改umask值-一定不要改"}},[s._v("#")]),s._v(" 3、修改umask值（一定不要改）")]),s._v(" "),a("h3",{attrs:{id:"☆-临时修改-重启后失效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-临时修改-重启后失效"}},[s._v("#")]),s._v(" ☆ 临时修改（重启后失效）")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# umask 002")]),s._v("\n777 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 002 = 775\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"☆-永久修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-永久修改"}},[s._v("#")]),s._v(" ☆ 永久修改")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim ~/.bashrc ")]),s._v("\n① 在文件末尾添加umask 002\n② 保存退出 \n③ su切换用户则立即生效\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports},8498:function(s,a,e){s.exports=e.p+"assets/img/image-20200320110034242.c7085bb8.png"},8499:function(s,a,e){s.exports=e.p+"assets/img/image-20200320113017121.02560e46.png"},8500:function(s,a,e){s.exports=e.p+"assets/img/image-20200320114528433.301461bf.png"},8501:function(s,a,e){s.exports=e.p+"assets/img/image-20200320150210026.e6c37ceb.png"},8502:function(s,a,e){s.exports=e.p+"assets/img/image-20200320164900337.657c3c49.png"}}]);