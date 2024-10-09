(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{13985:function(s,a,e){"use strict";e.r(a);var t=e(2),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"进程的优先级与lamp项目部署实战"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程的优先级与lamp项目部署实战"}},[s._v("#")]),s._v(" 进程的优先级与LAMP项目部署实战")]),s._v(" "),a("h1",{attrs:{id:"一、进程的优先级-扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、进程的优先级-扩展"}},[s._v("#")]),s._v(" 一、进程的优先级（扩展）")]),s._v(" "),a("h2",{attrs:{id:"_1、什么是进程的优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是进程的优先级"}},[s._v("#")]),s._v(" 1、什么是进程的优先级")]),s._v(" "),a("p",[s._v("Linux是一个多用户、多任务的操作系统，系统中通常运行着非常多的进程。哪些进程先运行，哪些进程后运行，就由进程优先级来控制")]),s._v(" "),a("p",[s._v("思考：什么时候需要用到进程的优先级呢？")]),s._v(" "),a("p",[s._v("答：当CPU负载过高时，如CPU的使用率>=90%以上。这个时候进程的优先级就会起作用。")]),s._v(" "),a("h2",{attrs:{id:"_2、查看进程的优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、查看进程的优先级"}},[s._v("#")]),s._v(" 2、查看进程的优先级")]),s._v(" "),a("p",[s._v("PR  优先级，数值越小优先级越高。\nNI  优先级，数值越小优先级越高，可以人为更改。（NI = NICE = Nice）")]),s._v(" "),a("p",[s._v("讲个小故事：Nice值 = 0，Nice值越高，代表这个人越绅士（Nice值越高，优先级越低）")]),s._v(" "),a("blockquote",[a("p",[s._v("NI值有一个范围 -20 ~ 19")])]),s._v(" "),a("p",[s._v("问题：这两个数值是在哪里看到的？")]),s._v(" "),a("p",[s._v("答：top命令")]),s._v(" "),a("h2",{attrs:{id:"_3、调整进程的优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、调整进程的优先级"}},[s._v("#")]),s._v(" 3、调整进程的优先级")]),s._v(" "),a("h3",{attrs:{id:"☆-使用top调整进程的优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-使用top调整进程的优先级"}},[s._v("#")]),s._v(" ☆ 使用top调整进程的优先级")]),s._v(" "),a("p",[s._v("第一步：使用top命令获取你要调整的进程信息（PID编号）")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# top -bn 1")]),s._v("\nPID   \tCOMMAND\n7107\tatd（at命令的底层服务）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v('第二步：运行top命令，然后按=="r"==，输入要调整进程的PID编号')]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# top")]),s._v("\n按r，输入要调整进程的PID编号"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("按回车\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("第三步：根据提示，重置NICE值")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("Renice PID 7107 to value : "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("5\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("第四步：按q退出top模式，然后使用top -p PID编号，只查询某个进程的信息")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# top -p 7107")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"☆-使用renice命令调整进程的优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-使用renice命令调整进程的优先级"}},[s._v("#")]),s._v(" ☆ 使用renice命令调整进程的优先级")]),s._v(" "),a("p",[s._v("基本语法：")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# renice [NI优先级设置的数字] 想调整的进程ID")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("案例：使用renice调整atd的优先级")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("第一步：通过"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("或top命令获取atd的PID编号\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -ef |grep atd")]),s._v("\n7107\n第二步：使用renice命令调整7107的NICE值\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# renice -10 7107")]),s._v("\n7107 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("process")]),s._v(" ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" old priority 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" new priority "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("10\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("blockquote",[a("p",[s._v("注意：NICE值取值范围-20 ~ 19，不能使用小数")])]),s._v(" "),a("h3",{attrs:{id:"☆-使用nice命令调整进程的优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-使用nice命令调整进程的优先级"}},[s._v("#")]),s._v(" ☆ 使用nice命令调整进程的优先级")]),s._v(" "),a("p",[s._v("基本语法：")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nice [NI优先级设置的数字] 想调整的进程名称")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("注意：nice命令只能调整没有运行的程序")])]),s._v(" "),a("p",[s._v("nice实际操作三步走：")]),s._v(" "),a("p",[s._v("第一步：将程序停止")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -ef |grep crond")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kill PID")]),s._v("\n或\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl stop crond")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("第二步：启动并制定优先级（使用nice）")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nice -n -10 crond")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("nice命令包含两个功能：① 启动进程 ② 调整进程的优先级")])]),s._v(" "),a("p",[s._v("第三步：确认优先级（查看优先级）")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps -ef |grep crond")]),s._v("\nPID\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# top -p PID")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h1",{attrs:{id:"二、yum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、yum"}},[s._v("#")]),s._v(" 二、YUM")]),s._v(" "),a("h2",{attrs:{id:"_1、什么是yum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是yum"}},[s._v("#")]),s._v(" 1、什么是YUM")]),s._v(" "),a("p",[s._v("在CentOS系统中，软件管理方式通常有三种方式："),a("code",[s._v("rpm安装")]),s._v("、"),a("code",[s._v("yum安装")]),s._v("以及"),a("code",[s._v("编译安装")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("编译安装，从过程上来讲比较麻烦，包需要用户自行下载，下载的是源码包，需要进行编译操作，编译好了才能进行安装，这个过程对于刚接触Linux的人来说比较麻烦，而且还容易出错。好处在于是源码包，对于有需要自定义模块的用户来说非常方便。"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("就业班会着重讲解"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("难度：编译安装 > rpm安装 > yum安装（有网络 + yum源支持）")]),s._v(" "),a("p",[s._v("Yum（全称为 "),a("code",[s._v("Yellow dog Updater, Modified")]),s._v("）是一个在Fedora和RedHat以及CentOS中的Shell前端软件包管理器。")]),s._v(" "),a("p",[s._v("基于rpm包管理，能够从"),a("strong",[s._v("指定的服务器")]),s._v("(yum源）自动下载RPM包并且安装，可以==自动处理依赖性关系==，并且==一次安装所有依赖的软件包==，无须繁琐地一次次下载、安装。")]),s._v(" "),a("blockquote",[a("p",[s._v("rpm和yum区别？答：① yum底层也是基于rpm进行安装的（yum安装的软件，可以通过rpm -qa进行查询） ② yum相对于rpm最大的优势，可以解决依赖关系。")]),s._v(" "),a("p",[s._v("A => B => C")])]),s._v(" "),a("h2",{attrs:{id:"_2、yum源配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、yum源配置"}},[s._v("#")]),s._v(" 2、YUM源配置")]),s._v(" "),a("p",[a("img",{attrs:{src:e(8865),alt:"image-20200326115612781"}})]),s._v(" "),a("p",[s._v("YUM源配置文件所在路径 => /etc/yum.repos.d文件夹")]),s._v(" "),a("p",[s._v("-rw-r--r--. 1 root root 1991 Mar 28  2017 CentOS-Base.repo            网络yum源配置文件\n-rw-r--r--. 1 root root  647 Mar 28  2017 CentOS-Debuginfo.repo    内核相关的更新包\n-rw-r--r--. 1 root root  289 Mar 28  2017 CentOS-fasttrack.repo       快速通道\n-rw-r--r--. 1 root root  630 Mar 28  2017 CentOS-Media.repo           本地yum源配置文件\n-rw-r--r--. 1 root root 7989 Mar 28  2017 CentOS-Vault.repo          最近版本加入老本的YUM配置")]),s._v(" "),a("p",[s._v("扩展：在YUM镜像源中添加阿里云镜像源")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("第一步：备份CentOS-Base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("repo这个源（更改后缀名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("repo => "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("repo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bak）\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mv CentOS-Base.repo CentOS-Base.repo.bak")]),s._v("\n\n第二步：使用wget命令下载阿里云的镜像文件\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo")]),s._v("\n\n选项说明：\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("O ：指定文件下载的位置以及名称\n第三步：清理YUM缓存\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum clean all")]),s._v("\n\n第四步：重新建立缓存（让新YUM源生效）\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum makecache")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"_3、yum命令详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、yum命令详解"}},[s._v("#")]),s._v(" 3、yum命令详解")]),s._v(" "),a("h3",{attrs:{id:"☆-搜索要安装的软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-搜索要安装的软件"}},[s._v("#")]),s._v(" ☆ 搜索要安装的软件")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum search 软件名称的关键词")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("案例：搜索阿里云仓库中的vim软件")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum search vim")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("案例：搜索firefox火狐浏览器")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum search firefox")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"☆-使用yum安装软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-使用yum安装软件"}},[s._v("#")]),s._v(" ☆ 使用yum安装软件")]),s._v(" "),a("p",[s._v("基本语法：")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum install 软件名称关键词 [选项]")]),s._v("\n选项：\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("y ：yes缩写，确认安装，不提示。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("案例：使用yum命令安装vim编辑器")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum install vim -y")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("案例：使用yum命令安装firefox浏览器")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum install firefox -y")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"☆-使用yum卸载软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-使用yum卸载软件"}},[s._v("#")]),s._v(" ☆ 使用yum卸载软件")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum remove 软件名称关键词 [选项]")]),s._v("\n选项：\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("y ：yes缩写，确认卸载，不提示。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("案例：把firefox火狐浏览器进行卸载操作")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum remove firefox -y")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("案例：把httpd软件进行强制卸载")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum remove httpd -y")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"☆-使用yum更新软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#☆-使用yum更新软件"}},[s._v("#")]),s._v(" ☆ 使用yum更新软件")]),s._v(" "),a("p",[s._v("基本语法：")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum update 软件名称关键词 [选项]")]),s._v("\n选项：\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("y ：yes缩写，确认更新，不提示\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("案例：把vim编辑器进行更新操作")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum update vim -y")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("案例：把firefox火狐浏览器进行更新操作")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum update firefox -y")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h1",{attrs:{id:"三、lamp概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、lamp概述"}},[s._v("#")]),s._v(" 三、LAMP概述")]),s._v(" "),a("h2",{attrs:{id:"_1、什么是lamp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是lamp"}},[s._v("#")]),s._v(" 1、什么是LAMP")]),s._v(" "),a("p",[s._v("LAMP：==L==inux + ==A==pache + ==M==ySQL + ==P==HP                        LAMP 架构（组合）")]),s._v(" "),a("p",[s._v("LNMP：Linux + Nginx + MySQL + php-fpm                             LNMP 架构（组合）")]),s._v(" "),a("p",[s._v("LNMPA：Linux + Nginx(80) + MySQL + PHP + Apache           Nginx 代理方式")]),s._v(" "),a("p",[a("img",{attrs:{src:e(8866),alt:"image-20200326152052773"}})]),s._v(" "),a("p",[s._v("Apache：Apache是世界使用排名第一的Web服务器软件。")]),s._v(" "),a("p",[s._v("PHP：一种专门用于Web开发的编程语言。")]),s._v(" "),a("p",[s._v("MySQL：MySQL是一个关系型数据库管理系统，主要用于永久存储项目数据。")]),s._v(" "),a("h2",{attrs:{id:"_2、amp三者之间的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、amp三者之间的关系"}},[s._v("#")]),s._v(" 2、AMP三者之间的关系")]),s._v(" "),a("p",[a("img",{attrs:{src:e(8867),alt:"image-20200326152231295"}})]),s._v(" "),a("p",[s._v("Apache：用于接收用户的请求（输入网址，返回网页=>结果）")]),s._v(" "),a("p",[s._v("PHP：注册、登录、加入购物车、下单、支付等动态功能（有编程语言的支持）")]),s._v(" "),a("p",[s._v("MySQL：永久保存数据，比如你在网站上注册的用户和密码、你加入购物车的产品、你的产品订单")]),s._v(" "),a("p",[s._v("LAMP = Linux + APache + PHP + MySQL")]),s._v(" "),a("h1",{attrs:{id:"四、阿里云详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、阿里云详解"}},[s._v("#")]),s._v(" 四、阿里云详解")]),s._v(" "),a("p",[s._v("要想部署一个互联网上可以访问到的环境，必须先具备以下内容 ：")]),s._v(" "),a("p",[s._v("服务器（IP、帐号密码、终端）、相应的软件、域名（备案、解析）、代码等。")]),s._v(" "),a("p",[a("img",{attrs:{src:e(8868),alt:"image-20200326154214921"}})]),s._v(" "),a("p",[s._v("代码：前端工程师 + 后端工程师进行开发提供的！")]),s._v(" "),a("h2",{attrs:{id:"_1、注册阿里云账号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、注册阿里云账号"}},[s._v("#")]),s._v(" 1、注册阿里云账号")]),s._v(" "),a("p",[s._v("阿里云官网：https://www.aliyun.com/")]),s._v(" "),a("p",[a("img",{attrs:{src:e(8869),alt:"image-20200326154527903"}})]),s._v(" "),a("blockquote",[a("p",[s._v("特别说明：云服务器的厂商特别多，你可以进行任意选择 => 阿里云、百度云、腾讯云、华为云...")])]),s._v(" "),a("p",[s._v("注册时建议使用支付宝，方便快捷。最重要：付款方便")]),s._v(" "),a("h2",{attrs:{id:"_2、实名认证-上传身份证照片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、实名认证-上传身份证照片"}},[s._v("#")]),s._v(" 2、实名认证（上传身份证照片）")]),s._v(" "),a("p",[s._v("第一步：单击账号下方的实名认证（选择个人认证）")]),s._v(" "),a("p",[a("img",{attrs:{src:e(8870),alt:"image-20200326155133047"}})]),s._v(" "),a("p",[a("img",{attrs:{src:e(8871),alt:"image-20200326155146301"}})]),s._v(" "),a("p",[s._v("第二步：选择支付宝授权认证（及时开通，无需等待）")]),s._v(" "),a("p",[a("img",{attrs:{src:e(8872),alt:"image-20200326155223066"}})]),s._v(" "),a("p",[s._v("第三步：勾选同意，点击提交")]),s._v(" "),a("p",[a("img",{attrs:{src:e(8873),alt:"image-20200326155308208"}})]),s._v(" "),a("p",[s._v("第四步：使用手机支付宝扫描二维码，进行授权")]),s._v(" "),a("p",[a("img",{attrs:{src:e(8874),alt:"image-20200326155339781"}})]),s._v(" "),a("p",[s._v("第五步：填写相关信息（住址）")]),s._v(" "),a("p",[a("img",{attrs:{src:e(8875),alt:"image-20200326155358292"}})]),s._v(" "),a("p",[s._v("填写完毕，即可完成认证。")]),s._v(" "),a("p",[a("img",{attrs:{src:e(8876),alt:"image-20200326155428202"}})]),s._v(" "),a("h2",{attrs:{id:"_3、购买阿里云的ecs云服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、购买阿里云的ecs云服务器"}},[s._v("#")]),s._v(" 3、购买阿里云的ECS云服务器")]),s._v(" "),a("p",[s._v("第一步：回到阿里云首页，找到弹性计算 => ECS云服务器")]),s._v(" "),a("p",[a("img",{attrs:{src:e(8877),alt:"image-20200326161759062"}})]),s._v(" "),a("p",[s._v("第二步：单击立即购买，购买ECS服务器（选区域、选配置）")]),s._v(" "),a("p",[a("img",{attrs:{src:e(8878),alt:"image-20200326161916781"}})]),s._v(" "),a("p",[s._v("第三步：选择付费模式、选择CPU与内存的配置")]),s._v(" "),a("p",[a("img",{attrs:{src:e(8879),alt:"image-20200326162659403"}})]),s._v(" "),a("p",[s._v("第四步：选择镜像（CentOS7.6）与云盘（硬盘）")]),s._v(" "),a("p",[a("img",{attrs:{src:e(8880),alt:"image-20200326162845467"}})]),s._v(" "),a("p",[s._v("第四步：设置网络、公网IP以及安全组（重要）")]),s._v(" "),a("p",[a("img",{attrs:{src:e(8881),alt:"image-20200326163143681"}})]),s._v(" "),a("blockquote",[a("p",[s._v("用户 =>  阿里云安全组  =>  firewalld防火墙  => Linux服务器")])]),s._v(" "),a("p",[s._v("第五步：设置root账号密码（一定要选择自定义密码）")]),s._v(" "),a("p",[a("img",{attrs:{src:e(8882),alt:"image-20200326163533492"}})]),s._v(" "),a("blockquote",[a("p",[s._v("8 - 30 个字符，必须同时包含三项（大写字母、小写字母、数字、 ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/ 中的特殊符号），其中 Windows 实例不能以斜线号（/）为首字符")])]),s._v(" "),a("p",[s._v("第六步：设置释放时间 => 什么时候删除这台服务器（不收钱）")]),s._v(" "),a("p",[a("img",{attrs:{src:e(8883),alt:"image-20200326163830484"}})]),s._v(" "),a("blockquote",[a("p",[s._v("特别说明：只有个人购买的ECS服务器可以设置释放时间，生产环境一定不要设置释放时间，否则后果自负！！！")])]),s._v(" "),a("p",[s._v("第七步：进入管理控制台，找到我们刚才购买的ECS服务器，如下图所示：")]),s._v(" "),a("p",[a("img",{attrs:{src:e(8884),alt:"image-20200326164148544"}})]),s._v(" "),a("blockquote",[a("p",[s._v("使用MX软件，直接连接公网IP + root账号 + 自定义的密码即可连接")])]),s._v(" "),a("h2",{attrs:{id:"_4、使用mx连接ecs服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、使用mx连接ecs服务器"}},[s._v("#")]),s._v(" 4、使用MX连接ECS服务器")]),s._v(" "),a("p",[a("img",{attrs:{src:e(8885),alt:"image-20200326164519379"}})]),s._v(" "),a("h2",{attrs:{id:"_5、使用yum安装sl小工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、使用yum安装sl小工具"}},[s._v("#")]),s._v(" 5、使用yum安装sl小工具")]),s._v(" "),a("p",[s._v("安装过程：")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum install sl -y")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("使用sl命令：")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sl")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports},8865:function(s,a,e){s.exports=e.p+"assets/img/image-20200326115612781.b65b1f09.png"},8866:function(s,a,e){s.exports=e.p+"assets/img/image-20200326152052773.ef288ada.png"},8867:function(s,a,e){s.exports=e.p+"assets/img/image-20200326152231295.0e5c2249.png"},8868:function(s,a,e){s.exports=e.p+"assets/img/image-20200326154214921.d029ea66.png"},8869:function(s,a,e){s.exports=e.p+"assets/img/image-20200326154527903.0d91f7aa.png"},8870:function(s,a,e){s.exports=e.p+"assets/img/image-20200326155133047.b081c08e.png"},8871:function(s,a,e){s.exports=e.p+"assets/img/image-20200326155146301.a35e56c7.png"},8872:function(s,a,e){s.exports=e.p+"assets/img/image-20200326155223066.db36c3b3.png"},8873:function(s,a,e){s.exports=e.p+"assets/img/image-20200326155308208.e10af359.png"},8874:function(s,a,e){s.exports=e.p+"assets/img/image-20200326155339781.c74c2545.png"},8875:function(s,a,e){s.exports=e.p+"assets/img/image-20200326155358292.db7ddb2d.png"},8876:function(s,a,e){s.exports=e.p+"assets/img/image-20200326155428202.31b01cf6.png"},8877:function(s,a,e){s.exports=e.p+"assets/img/image-20200326161759062.6d067314.png"},8878:function(s,a,e){s.exports=e.p+"assets/img/image-20200326161916781.2edacfe4.png"},8879:function(s,a,e){s.exports=e.p+"assets/img/image-20200326162659403.c98e04bf.png"},8880:function(s,a,e){s.exports=e.p+"assets/img/image-20200326162845467.89bcc72b.png"},8881:function(s,a,e){s.exports=e.p+"assets/img/image-20200326163143681.a0752db9.png"},8882:function(s,a,e){s.exports=e.p+"assets/img/image-20200326163533492.53245d38.png"},8883:function(s,a,e){s.exports=e.p+"assets/img/image-20200326163830484.27d370e3.png"},8884:function(s,a,e){s.exports=e.p+"assets/img/image-20200326164148544.b91489d6.png"},8885:function(s,a,e){s.exports=e.p+"assets/img/image-20200326164519379.c9267be5.png"}}]);