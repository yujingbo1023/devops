(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{13915:function(t,s,v){"use strict";v.r(s);var _=v(2),a=Object(_.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"_0-重要说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-重要说明"}},[t._v("#")]),t._v(" 0，重要说明")]),t._v(" "),s("p",[t._v("此项目所创建的虚拟机，一定要拍摄快照，后面再写其它项目时，直接恢复快照就行了。")]),t._v(" "),s("h3",{attrs:{id:"_1-撰写项目实施规划文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-撰写项目实施规划文档"}},[t._v("#")]),t._v(" 1，撰写项目实施规划文档")]),t._v(" "),s("p",[t._v("小集群架构思路：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("分析需求，写项目规划文档（项目经理、总监能力）")])]),t._v(" "),s("li",[s("p",[t._v("画架构图，将架构分解可以实现的模块（架构师能力）")])]),t._v(" "),s("li",[s("p",[t._v("分模块实施和测试（运维工程师，码农，程序员能力）")])]),t._v(" "),s("li",[s("p",[t._v("集群架构的服务拓展（考察自学能力）")])]),t._v(" "),s("li",[s("p",[t._v("一键自动化搞定（自动化运维能力）")])])]),t._v(" "),s("h3",{attrs:{id:"_2-网站业务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-网站业务"}},[t._v("#")]),t._v(" 2，网站业务")]),t._v(" "),s("p",[t._v("需要搭建的网站产品说明表格：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("产品分类")]),t._v(" "),s("th",[t._v("产品名")]),t._v(" "),s("th",[t._v("官方")]),t._v(" "),s("th",[t._v("运行环境")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("博客")]),t._v(" "),s("td",[t._v("WordPress")]),t._v(" "),s("td",[t._v("http://www.wordpress.org")]),t._v(" "),s("td",[t._v("PHP")])]),t._v(" "),s("tr",[s("td",[t._v("知乎")]),t._v(" "),s("td",[t._v("wecente")]),t._v(" "),s("td",[t._v("http://www.wecenter.com")]),t._v(" "),s("td",[t._v("PHP")])]),t._v(" "),s("tr",[s("td",[t._v("Java 产品")]),t._v(" "),s("td",[t._v("zrlog")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("JAVA、TOMCAT")])])])]),t._v(" "),s("h3",{attrs:{id:"_3-集群服务器作用、数量及规划"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-集群服务器作用、数量及规划"}},[t._v("#")]),t._v(" 3，集群服务器作用、数量及规划")]),t._v(" "),s("p",[t._v("集群服务器规划如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("服务器名字")]),t._v(" "),s("th",[t._v("台")]),t._v(" "),s("th",[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("负载均衡服务")]),t._v(" "),s("td",[t._v("2")]),t._v(" "),s("td",[t._v("负载均衡器，负责调度网站访问请求，需要 2 台同时做高可用。软件涉及 Nginx 和 Keepalved")])]),t._v(" "),s("tr",[s("td",[t._v("Web 服务")]),t._v(" "),s("td",[t._v("3")]),t._v(" "),s("td",[t._v("负责处理用户的请求，提供网页服务，同时数据需要备份到备份服务器，上传的数据需要放到存储服务器上。软件核心：Nginx、PHP、Tomcat，涉及 NFS 客户端、rsync 客户端、定时任务服务等")])]),t._v(" "),s("tr",[s("td",[t._v("共享存储")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("提供 blog、wecenter 等服务上的共享图片、视频、附件数据存储，软件核心是 NFS，涉及数据实时备份")])]),t._v(" "),s("tr",[s("td",[t._v("备份服务器")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("提供全网数据的备份服务，以及异地灾备、软件核心是 Rsync 服务")])]),t._v(" "),s("tr",[s("td",[t._v("管理服务器")]),t._v(" "),s("td",[t._v("2")]),t._v(" "),s("td",[t._v("管理所有服务器，包括批量分发文件、批量执行命令、批量配置服务、跳板机服务，远程拨号服务，yum 仓库服务等。涉及软件有 SSH、Ansible、跳板机、vpn 等，可自行扩展，这些服务工作中也可以分布到多台机器上。")])]),t._v(" "),s("tr",[s("td",[t._v("监控服务器")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("监控所有服务器，包括基础的 CPU、内存、磁盘、网络、以及每台主机的应用服务监控，如 Nginx、PHP-FPM、MySQL、Redis、Memcached、Tomcat 等。涉及软件 Zabbix-Server")])])])]),t._v(" "),s("p",[t._v("机器配置建议")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("m01    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("-4G\nlb01   512m\nlb02   512m\nweb01  512m\nweb02  512m\ndb01   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("-2G\ndb02   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("-2G\nnfs    512m\nbackup 512m\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h3",{attrs:{id:"_4-集群服务规划与搭建顺序建议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-集群服务规划与搭建顺序建议"}},[t._v("#")]),t._v(" 4，集群服务规划与搭建顺序建议")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("ID")]),t._v(" "),s("th",[t._v("项目名称")]),t._v(" "),s("th",[t._v("主机名及 IP")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("项目文档(PDF)+项目架构图")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("2")]),t._v(" "),s("td",[t._v("rsync 全网备份")]),t._v(" "),s("td",[t._v("172.16.1.41/24/backup")])]),t._v(" "),s("tr",[s("td",[t._v("3")]),t._v(" "),s("td",[t._v("NFS 共享、实时同步")]),t._v(" "),s("td",[t._v("172.16.1.31/24/nfs01")])]),t._v(" "),s("tr",[s("td",[t._v("4")]),t._v(" "),s("td",[t._v("LNMP 环境（任意部署三个站点）")]),t._v(" "),s("td",[t._v("172.16.1.7/8/24/web01/web02")])]),t._v(" "),s("tr",[s("td",[t._v("5")]),t._v(" "),s("td",[t._v("Web 负载均衡、高可用")]),t._v(" "),s("td",[t._v("172.16.1.5/6/24/lb01/lb02")])]),t._v(" "),s("tr",[s("td",[t._v("6")]),t._v(" "),s("td",[t._v("数据库服务器")]),t._v(" "),s("td",[t._v("172.16.1.51/24/db01")])]),t._v(" "),s("tr",[s("td",[t._v("7")]),t._v(" "),s("td",[t._v("实现 https 访问")]),t._v(" "),s("td",[t._v("172.16.1.5/6/24/lb01/lb02")])]),t._v(" "),s("tr",[s("td",[t._v("8")]),t._v(" "),s("td",[t._v("时间服务器")]),t._v(" "),s("td",[t._v("172.16.1.41/24/backup")])]),t._v(" "),s("tr",[s("td",[t._v("9")]),t._v(" "),s("td",[t._v("搭建 java 环境,部署 Java 站点")]),t._v(" "),s("td",[t._v("172.16.1.9/24/web03")])]),t._v(" "),s("tr",[s("td",[t._v("10")]),t._v(" "),s("td",[t._v("会话保持/session 共享")]),t._v(" "),s("td",[t._v("任意机器")])]),t._v(" "),s("tr",[s("td",[t._v("11")]),t._v(" "),s("td",[t._v("数据库主从复制（先不做）")]),t._v(" "),s("td",[t._v("172.16.1.51/52/24/db01/db02")])]),t._v(" "),s("tr",[s("td",[t._v("12")]),t._v(" "),s("td",[t._v("数据库读写分离（先不做）")]),t._v(" "),s("td",[t._v("172.16.1.51/24")])]),t._v(" "),s("tr",[s("td",[t._v("13")]),t._v(" "),s("td",[t._v("vpn（先不做）")]),t._v(" "),s("td",[t._v("172.16.1.61/2")])]),t._v(" "),s("tr",[s("td",[t._v("14")]),t._v(" "),s("td",[t._v("内网服务器共享上网（讲防火墙时会讲）")]),t._v(" "),s("td",[t._v("172.16.1.61/24")])]),t._v(" "),s("tr",[s("td",[t._v("15")]),t._v(" "),s("td",[t._v("防火墙")]),t._v(" "),s("td",[t._v("有公网 ip 的机器均需要")])]),t._v(" "),s("tr",[s("td",[t._v("16")]),t._v(" "),s("td",[t._v("跳板机/堡垒机  jumpserver")]),t._v(" "),s("td",[t._v("172.16.1.71/24/m02")])]),t._v(" "),s("tr",[s("td",[t._v("17")]),t._v(" "),s("td",[t._v("ansible 一键安装整个集群(基础部分)（先不做）")]),t._v(" "),s("td",[t._v("172.16.1.61/24/m01")])]),t._v(" "),s("tr",[s("td",[t._v("18")]),t._v(" "),s("td",[t._v("自动化代码上线 gitlab Jenkins（先不做）")]),t._v(" "),s("td",[t._v("172.16.1.11/12/24/gitlab/jenkins")])]),t._v(" "),s("tr",[s("td",[t._v("19")]),t._v(" "),s("td",[t._v("zabbix 监控（先不做）")]),t._v(" "),s("td",[t._v("server:172.16.1.81/24   agent: 所有运行机器")])])])]),t._v(" "),s("h3",{attrs:{id:"_5-服务器主机名和-ip-规划"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-服务器主机名和-ip-规划"}},[t._v("#")]),t._v(" 5，服务器主机名和 IP 规划")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("主机名")]),t._v(" "),s("th",[t._v("eth33 网卡")]),t._v(" "),s("th",[t._v("eth36 网卡")]),t._v(" "),s("th",[t._v("服务简介")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("lb01")]),t._v(" "),s("td",[t._v("10.0.0.5/24")]),t._v(" "),s("td",[t._v("172.16.1.5/24")]),t._v(" "),s("td",[t._v("负载服务")])]),t._v(" "),s("tr",[s("td",[t._v("lb02")]),t._v(" "),s("td",[t._v("10.0.0.6/24")]),t._v(" "),s("td",[t._v("172.16.1.6/24")]),t._v(" "),s("td",[t._v("负载服务")])]),t._v(" "),s("tr",[s("td",[t._v("web01")]),t._v(" "),s("td",[s("strong",[t._v("10.0.0.7/24")])]),t._v(" "),s("td",[t._v("172.16.1.7/24")]),t._v(" "),s("td",[t._v("动态 php 服务")])]),t._v(" "),s("tr",[s("td",[t._v("web02")]),t._v(" "),s("td",[s("strong",[t._v("10.0.0.8/24")])]),t._v(" "),s("td",[t._v("172.16.1.8/24")]),t._v(" "),s("td",[t._v("动态 php 服务")])]),t._v(" "),s("tr",[s("td",[t._v("web03")]),t._v(" "),s("td",[s("strong",[t._v("10.0.0.9/24")])]),t._v(" "),s("td",[t._v("172.16.1.9/24")]),t._v(" "),s("td",[t._v("动态 java 服务")])]),t._v(" "),s("tr",[s("td",[t._v("db01")]),t._v(" "),s("td",[s("strong",[t._v("10.0.0.51/24")])]),t._v(" "),s("td",[t._v("172.16.1.51/24")]),t._v(" "),s("td",[t._v("数据库服务")])]),t._v(" "),s("tr",[s("td",[t._v("nfs01")]),t._v(" "),s("td",[s("strong",[t._v("10.0.0.31/24")])]),t._v(" "),s("td",[t._v("172.16.1.31/24")]),t._v(" "),s("td",[t._v("存储服务")])]),t._v(" "),s("tr",[s("td",[t._v("backup")]),t._v(" "),s("td",[s("strong",[t._v("10.0.0.41/24")])]),t._v(" "),s("td",[t._v("172.16.1.41/24")]),t._v(" "),s("td",[t._v("备份服务")])]),t._v(" "),s("tr",[s("td",[t._v("m01")]),t._v(" "),s("td",[t._v("10.0.0.61/24")]),t._v(" "),s("td",[t._v("172.16.1.61/24")]),t._v(" "),s("td",[t._v("管理服务")])]),t._v(" "),s("tr",[s("td",[t._v("zabbix-server")]),t._v(" "),s("td",[t._v("10.0.0.81/24")]),t._v(" "),s("td",[t._v("172.16.1.71/24")]),t._v(" "),s("td",[t._v("监控服务")])])])]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("加粗的原则是不配外部 IP 的，需要通过拨号好 m01，然后内网管理。")]),t._v(" "),s("li",[t._v("负载 VIP 可以用 10.0.0.3/4，网站域名需要解析到 VIP 上")])]),t._v(" "),s("h3",{attrs:{id:"_6-集群架构图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-集群架构图"}},[t._v("#")]),t._v(" 6，集群架构图")]),t._v(" "),s("p",[s("img",{attrs:{src:v(6143),alt:"1725206366031"}})]),t._v(" "),s("p",[s("img",{attrs:{src:v(6144),alt:"1725343653396"}})]),t._v(" "),s("p",[s("img",{attrs:{src:v(6145),alt:"1725344595369"}})]),t._v(" "),s("p",[s("img",{attrs:{src:v(6146),alt:"1725363254116"}})]),t._v(" "),s("h3",{attrs:{id:"_7-项目实施规范要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-项目实施规范要求"}},[t._v("#")]),t._v(" 7， 项目实施规范要求")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("所有服务都需要实现开机自启动。\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("所有服务器要做必要 linux 系统基本优化（防火墙、Selinux）。\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("软件的存放目录、脚本的存放都要规范。\n   软件目录：/server/tools\n   脚本目录：/server/scripts/\n   站点目录：/code/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("zh,blog,phpshe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("java")]),t._v(" 站点目录：/code/jpress\n   备份目录：/backup/\n   存储目录：/data/\n   主机名规范：见服务规划表格。\n   IP 地址规范：见服务规划表格。\n   域名规范：malu.com 需解析到 VIP 上\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("h3",{attrs:{id:"_8-项目实施周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-项目实施周期"}},[t._v("#")]),t._v(" 8，项目实施周期")]),t._v(" "),s("p",[t._v("本项目总周期为 3天，如下表")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("第 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" 天 项目规划书 PPT 撰写、项目架构图绘制\n第 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" 天 搭建基础集群环境（课堂讲解过的）\n第 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" 天 搭建扩展集群环境（需要自行拓展的）\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("web服务器：\n- https打开⽹站是否可以显示，显示是否正常\n- 写⼀篇⽂章，上传⼀个图⽚\n- 看nfs⾥有没有图⽚，看backup⾥有没有图⽚\n- 验证数据是存在了db01上\n\n全⽹备份\n- ⼿动运⾏全⽹备份脚本\n- 看backup是否按要求⽣成了\n\nlb服务器\n- 演示使⽤的是VIP访问\n- 演示关掉⼀台，VIP是否会漂移\n- 恢复机器，看VIP是否回去\n- ⽹站始终都能打开\n\ndb服务器\n- db01创建数据库，db02可以同步创建\n\nntp时间服务器\n- ntp时间服务器\n\nyum仓库\n- 查看⼀下客户端是否只有⼀个local源\n\n跳板机\n- 使⽤跳板机连接到内⽹的服务器终端\n\nzabbix\n- 打开web页⾯，客户端在线，显示绿⾊\n\nopenvpn\n- windwos连接上oenvpn\n- 使⽤172地址打开zabbix页⾯\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br")])]),s("h3",{attrs:{id:"_9-网站访问的流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-网站访问的流程"}},[t._v("#")]),t._v(" 9，网站访问的流程")]),t._v(" "),s("p",[s("img",{attrs:{src:v(6147),alt:"1725342946195"}})]),t._v(" "),s("p",[s("img",{attrs:{src:v(6148),alt:"1725342957664"}})]),t._v(" "),s("p",[s("img",{attrs:{src:v(6149),alt:"1725343022172"}})]),t._v(" "),s("p",[s("img",{attrs:{src:v(6150),alt:"1725343051643"}})]),t._v(" "),s("p",[s("img",{attrs:{src:v(6151),alt:"1725341817201"}})]),t._v(" "),s("p",[s("img",{attrs:{src:v(6152),alt:"1725343733567"}})]),t._v(" "),s("p",[s("img",{attrs:{src:v(6153),alt:"1725344643289"}})]),t._v(" "),s("p",[s("img",{attrs:{src:v(6154),alt:"1725342225500"}})]),t._v(" "),s("p",[s("img",{attrs:{src:v(6155),alt:"1725344724696"}})]),t._v(" "),s("p",[s("img",{attrs:{src:v(6156),alt:"1725344758636"}})]),t._v(" "),s("p",[s("img",{attrs:{src:v(6157),alt:"1725344780164"}})]),t._v(" "),s("p",[s("img",{attrs:{src:v(6158),alt:"1725344790257"}})]),t._v(" "),s("p",[s("img",{attrs:{src:v(6159),alt:"1725344800994"}})]),t._v(" "),s("p",[s("img",{attrs:{src:v(6160),alt:"1725344813570"}})]),t._v(" "),s("p",[s("img",{attrs:{src:v(6161),alt:"1725363427736"}})])])}),[],!1,null,null,null);s.default=a.exports},6143:function(t,s,v){t.exports=v.p+"assets/img/1725206366031.c369b7f2.png"},6144:function(t,s,v){t.exports=v.p+"assets/img/1725343653396.ba0a9345.png"},6145:function(t,s,v){t.exports=v.p+"assets/img/1725344595369.566a9b90.png"},6146:function(t,s,v){t.exports=v.p+"assets/img/1725363254116.57326853.png"},6147:function(t,s,v){t.exports=v.p+"assets/img/1725342946195.e2fe73ae.png"},6148:function(t,s,v){t.exports=v.p+"assets/img/1725342957664.5c878f11.png"},6149:function(t,s,v){t.exports=v.p+"assets/img/1725343022172.d6d7d700.png"},6150:function(t,s,v){t.exports=v.p+"assets/img/1725343051643.483fb70a.png"},6151:function(t,s,v){t.exports=v.p+"assets/img/1725341817201.dee61ed9.png"},6152:function(t,s,v){t.exports=v.p+"assets/img/1725343733567.59e08586.png"},6153:function(t,s,v){t.exports=v.p+"assets/img/1725344643289.b91a7a7c.png"},6154:function(t,s,v){t.exports=v.p+"assets/img/1725342225500.c1a0f3d5.png"},6155:function(t,s,v){t.exports=v.p+"assets/img/1725344724696.15dfd73a.png"},6156:function(t,s,v){t.exports=v.p+"assets/img/1725344758636.1110f5ca.png"},6157:function(t,s,v){t.exports=v.p+"assets/img/1725344780164.ef8d38b8.png"},6158:function(t,s,v){t.exports=v.p+"assets/img/1725344790257.0fb616d6.png"},6159:function(t,s,v){t.exports=v.p+"assets/img/1725344800994.6a1a9e0e.png"},6160:function(t,s,v){t.exports=v.p+"assets/img/1725344813570.dc4815aa.png"},6161:function(t,s,v){t.exports=v.p+"assets/img/1725363427736.278bd931.png"}}]);