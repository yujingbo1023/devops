(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{13196:function(s,a,n){"use strict";n.r(a);var t=n(2),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"_1-软件安装介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-软件安装介绍"}},[s._v("#")]),s._v(" 1，软件安装介绍")]),s._v(" "),a("p",[s._v("Linux三种软件安装方式:")]),s._v(" "),a("ul",[a("li",[s._v("yum安装")]),s._v(" "),a("li",[s._v("rpm安装")]),s._v(" "),a("li",[s._v("编译安装 nginx编译安装 k8s")])]),s._v(" "),a("p",[s._v("yum安装特点：")]),s._v(" "),a("ul",[a("li",[s._v("简单快速")]),s._v(" "),a("li",[s._v("类似在手机应用商店搜索到软件直接安装")]),s._v(" "),a("li",[s._v("自动解决依赖的问题")]),s._v(" "),a("li",[s._v("类似点外卖，水饺煮熟，酱油 醋辣椒 蒜")]),s._v(" "),a("li",[s._v("不能选择默认安装的位置")])]),s._v(" "),a("p",[s._v("rpm安装特点：")]),s._v(" "),a("ul",[a("li",[s._v("类似windows先将软件下载下来，exe文件，双击安装")]),s._v(" "),a("li",[s._v("不能解决依赖问题，需要我们手动解决")]),s._v(" "),a("li",[s._v("类似吃水饺，购买速冻水饺 买锅 勺子 辣椒 醋 燃气 筷子")]),s._v(" "),a("li",[s._v("默认的仓库没有软件，只能通过官网下载软件使用rpm进行安装")]),s._v(" "),a("li",[s._v("软件比较大，网络不好的情况，通过rpm包本地安装(类似windows直接在360软件管家下载vmware自动安装vmware，先将vmware下载到windows，然后我们手动安装)")]),s._v(" "),a("li",[s._v("企业中，没有外网的情况下。")]),s._v(" "),a("li",[s._v("出现依赖，缺少依赖使用yum安装依赖。")])]),s._v(" "),a("p",[s._v("编译安装：")]),s._v(" "),a("ul",[a("li",[s._v("自定义模块")]),s._v(" "),a("li",[s._v("自定义安装位置")]),s._v(" "),a("li",[s._v("类似自己包水饺")])]),s._v(" "),a("h3",{attrs:{id:"_2-软件安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-软件安装"}},[s._v("#")]),s._v(" 2，软件安装")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".centos和麒麟\n语法结构:\n\t\t yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" 包名称 包 包 包    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装软件")]),s._v("\n\t\t yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" remove  包名称 包 包 包    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载软件")]),s._v("\n\t\t yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" reinstall 重新覆盖安装 了解\n\t\t yum clean all\t\t\t\t\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清空缓存")]),s._v("\n参数选项:\n\t\t"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装过程中自动yes")]),s._v("\n\t\t\n\t\t\n\n\n查看当前哪些仓库:\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@malu:~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum repolist")]),s._v("\nrepo "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("                                     repo name\nepel                                        Extra Packages "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Enterprise Linux "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" - x86_64\nks10-adv-os                                 Kylin Linux Advanced Server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" - Os\nks10-adv-updates                            Kylin Linux Advanced Server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" - Updates\n\n\n\n无法安装软件:\n01.连接不上网\n02.命令错误\n03.包名称错误 很多命令属于其他包 比如 route命令属于net-tools包\n04.不知道包的名字: 百度一下\n如果都没有问题，还是无法安装，使用yum clean all 清空缓存在尝试。\n\n\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".ubuntu操作系统安装软件\n语法结构:\t\t\t  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" 包 包 包"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\n\t\t\t\t    dpkg "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" 包         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载")]),s._v("\n\t\t\t\t    \n查看默认的仓库\nroot@ubuntu:~"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# apt-cache policy ")]),s._v("\nPackage files:\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" /var/lib/dpkg/status\n     release "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("a")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("now\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" https://mirrors.aliyun.com/ubuntu focal-backports/universe amd64 Packages\n     release "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("v")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.04")]),s._v(",o"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Ubuntu,a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("focal-backports,n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("focal,l"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Ubuntu,c"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("universe,b"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("amd64\n\n\n\nrpm安装:\n语法结构:\n\t\t  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ivh")]),s._v(" 包名\n\t\t  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" 包名  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者使用yum卸载")]),s._v("\n参数选项:\n\t   i  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\t   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("v")]),s._v("  显示安装过程\n\t   h  进度\n\t   ivh 一起使用。\n\t   "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-qa")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看系统中所有安装的软件")]),s._v("\n\t   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-qa")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看wget是否安装 可以一次看多个")]),s._v("\n\t   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ql")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看软件包含的内容")]),s._v("\n第一步: 下载rpm包\n第二步: 使用rpm安装\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@malu:Packages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rpm -qa|grep zzip")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@malu:Packages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rpm -ivh zziplib-0.13.69-8.ky10.x86_64.rpm")]),s._v("\nVerifying"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("################################# [100%]")]),s._v("\nPreparing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("################################# [100%]")]),s._v("\nUpdating / installing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":zziplib-0.13.69-8.ky10           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("################################# [100%]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@oldboy:Packages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rpm -qa|grep zzip")]),s._v("\nzziplib-0.13.69-8.ky10.x86_64\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@oldboy:Packages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@oldboy:Packages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rpm -e zziplib-0.13.69-8")]),s._v("\nerror: package zziplib-0.13.69-8 is not installed\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@oldboy:Packages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rpm -e zziplib-0.13.69-8.ky10")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@oldboy:Packages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rpm -qa|grep zzip")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@oldboy:Packages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rpm -ivh zziplib-0.13.69-8.ky10.x86_64.rpm")]),s._v("\nVerifying"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("################################# [100%]")]),s._v("\nPreparing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("################################# [100%]")]),s._v("\nUpdating / installing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":zziplib-0.13.69-8.ky10           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("################################# [100%]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@malu:Packages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@malu:Packages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rpm -qa|grep zzip")]),s._v("\nzziplib-0.13.69-8.ky10.x86_64\n\n查看软件是否安装\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@malu:~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rpm -qa lrzsz wget cowsay")]),s._v("\nlrzsz-0.12.20-46.ky10.x86_64\ncowsay-3.04-4.el7.noarch\n\n如果名称不记得使用grep 过滤\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@malu:~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rpm -qa|grep cow")]),s._v("\ncowsay-3.04-4.el7.noarch\n\n\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@malu:~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rpm --help   # 查看参数选项")]),s._v("\n\n\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".配置yum仓库\ncentos需要配置默认仓库为阿里云，安装epel\n麒麟默认仓库不需要配置，可以安装扩展epel仓库\nubuntu需要修改默认的仓库为阿里云\n\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".安装软件\nyum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" xx\nyum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" remove xx\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ivh")]),s._v(" xxx.rpm  xxx.rpm xx.rpm\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v("  包的名字或者带版本号\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-qa")]),s._v(" 查看所有安装过的软件\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-qa")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看指定的软件是否安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ql")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看wget安装了哪些内容")]),s._v("\nubuntu:\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" xx\ndpck "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" xxx\n\n\n\n\n没有外网情况如何安装软件。\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".找一台可以联网的服务器先下载rpm包\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@malu:~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /etc/yum.conf")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("installonly_limit")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("clean_requirements_on_remove")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("True\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("best")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("True\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("skip_if_unavailable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("False\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 新增加以下两条内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("keepcache")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\t\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启yum缓存")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("chachedir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/cache/yum/\t\t    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum安装后把rpm包保持在这个位置")]),s._v("\n\n安装软件\nyum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果已经安装使用reinstall")]),s._v("\n完成后检查下面的目录:\n/var/cache/yum/ks10-adv-os-f52f2e63634844ad/packages/\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".上传到不能联网的服务器中使用rpm安装\nsz xx.rpm 下载到windows\n上传rpm包到不能上网的服务器中\n\n\nubuntu好玩的命令:\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" cmatrix lolcat nyancat  libaa-bin  boxes\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" 呵呵哒"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("boxes "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" sunset\nlibaa-bin  aafire 一团火\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br"),a("span",{staticClass:"line-number"},[s._v("118")]),a("br"),a("span",{staticClass:"line-number"},[s._v("119")]),a("br"),a("span",{staticClass:"line-number"},[s._v("120")]),a("br"),a("span",{staticClass:"line-number"},[s._v("121")]),a("br"),a("span",{staticClass:"line-number"},[s._v("122")]),a("br"),a("span",{staticClass:"line-number"},[s._v("123")]),a("br"),a("span",{staticClass:"line-number"},[s._v("124")]),a("br"),a("span",{staticClass:"line-number"},[s._v("125")]),a("br"),a("span",{staticClass:"line-number"},[s._v("126")]),a("br"),a("span",{staticClass:"line-number"},[s._v("127")]),a("br"),a("span",{staticClass:"line-number"},[s._v("128")]),a("br"),a("span",{staticClass:"line-number"},[s._v("129")]),a("br"),a("span",{staticClass:"line-number"},[s._v("130")]),a("br"),a("span",{staticClass:"line-number"},[s._v("131")]),a("br"),a("span",{staticClass:"line-number"},[s._v("132")]),a("br"),a("span",{staticClass:"line-number"},[s._v("133")]),a("br"),a("span",{staticClass:"line-number"},[s._v("134")]),a("br"),a("span",{staticClass:"line-number"},[s._v("135")]),a("br"),a("span",{staticClass:"line-number"},[s._v("136")]),a("br"),a("span",{staticClass:"line-number"},[s._v("137")]),a("br"),a("span",{staticClass:"line-number"},[s._v("138")]),a("br"),a("span",{staticClass:"line-number"},[s._v("139")]),a("br"),a("span",{staticClass:"line-number"},[s._v("140")]),a("br"),a("span",{staticClass:"line-number"},[s._v("141")]),a("br"),a("span",{staticClass:"line-number"},[s._v("142")]),a("br"),a("span",{staticClass:"line-number"},[s._v("143")]),a("br"),a("span",{staticClass:"line-number"},[s._v("144")]),a("br")])]),a("h3",{attrs:{id:"_3-使用yum只下载不安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用yum只下载不安装"}},[s._v("#")]),s._v(" 3，使用yum只下载不安装")]),s._v(" "),a("p",[s._v("方法一：")]),s._v(" "),a("p",[s._v("用yum自带的参数选项,如果没有自带这个，需要安装yumplugin-downloadonly安装包。")]),s._v(" "),a("p",[s._v("用yum list去找个软件包测试下，就用这个NetworkManager吧。")]),s._v(" "),a("p",[a("img",{attrs:{src:n(5718),alt:"1725950031824"}})]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--downloadonly")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--downloaddir")]),s._v(" /tmp/ NetworkManager \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:n(5719),alt:"1725950065566"}})]),s._v(" "),a("p",[s._v("搞定了，自带的参数就可以搞定，--downloadonly 是只下载不安装，并且会自动帮你解决依赖，--downloaddir是指定下载到的路径，不写就安装到了本地了。")]),s._v(" "),a("p",[s._v("方法二：")]),s._v(" "),a("p",[s._v("在网上了解到需要用yumdownloader命令，在yum-utils工具包里，咱们先下载这个yum工具包。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" yum-utils\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("同样下载NetworkManager，如果不加参数的话，会把rpm包下载到本地。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yumdownloader NetworkManager\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:n(5720),alt:"1725950139799"}})]),s._v(" "),a("p",[s._v("咱们也可以用--destdir参数去自定义软件包存放路径，比如说安装到/tmp当中")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yumdownloader "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--destdir")]),s._v(" /tmp/ NetworkManager\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("也可以通过--resolve解决软件的依赖关系")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yumdownloader "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--destdir")]),s._v(" /tmp/ "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--resolve")]),s._v(" NetworkManager\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("现在咱们把/tmp/下的NetworkManager安装包去安装一下。直接安装，提示要先安装依赖，尝试rpm安装依赖包，发现依赖包也需要依赖包，一层一层套娃太麻烦了，先不安装了。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VMware-koten ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#rpm -ivh /tmp/NetworkManager-1.18.8-2.el7_9.x86_64.rpm ")]),s._v("\nerror: Failed dependencies:\n    NetworkManager-libnm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x86-64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":1.18.8-2.el7_9 is needed by NetworkManager-1:1.18.8-2.el7_9.x86_64\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VMware-koten ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ll /tmp/")]),s._v("\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4152")]),s._v("\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1960152")]),s._v(" Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" NetworkManager-1.18.8-2.el7_9.x86_64.rpm\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1774664")]),s._v(" Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" NetworkManager-libnm-1.18.8-2.el7_9.x86_64.rpm\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("169068")]),s._v(" Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" NetworkManager-team-1.18.8-2.el7_9.x86_64.rpm\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("336828")]),s._v(" Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" NetworkManager-tui-1.18.8-2.el7_9.x86_64.rpm\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VMware-koten ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#rpm -ivh /tmp/NetworkManager-{libnm,team,tui}-1.18.8-2.el7_9.x86_64.rpm")]),s._v("\nerror: Failed dependencies:\n    NetworkManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x86-64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":1.18.8-2.el7_9 is needed by NetworkManager-team-1:1.18.8-2.el7_9.x86_64\n    NetworkManager "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":1.18.8-2.el7_9 is needed by NetworkManager-tui-1:1.18.8-2.el7_9.x86_64\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports},5718:function(s,a,n){s.exports=n.p+"assets/img/1725950031824.5a6434d5.png"},5719:function(s,a,n){s.exports=n.p+"assets/img/1725950065566.b898e295.png"},5720:function(s,a,n){s.exports=n.p+"assets/img/1725950139799.2b5a352e.png"}}]);