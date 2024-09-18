(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{13211:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"_1-为什么需要堡垒机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么需要堡垒机"}},[s._v("#")]),s._v(" 1，为什么需要堡垒机")]),s._v(" "),a("p",[a("img",{attrs:{src:t(6141),alt:"1725238482071"}})]),s._v(" "),a("p",[a("img",{attrs:{src:t(6142),alt:"1725237144013"}})]),s._v(" "),a("ul",[a("li",[s._v("黑客有些时候可以操作你的系统，对于网安人员要发现黑客做了什么操作;")]),s._v(" "),a("li",[s._v("有了堡垒机服务，可以发现入侵者在系统中做的破坏；")]),s._v(" "),a("li",[s._v("系统运维人员会应用堡垒机监控内部人员操作行为；")])]),s._v(" "),a("p",[s._v("具体作用：")]),s._v(" "),a("ul",[a("li",[s._v("可以拥有统一网站架构管理入口")]),s._v(" "),a("li",[s._v("可以具有批量管理多台设备能力")]),s._v(" "),a("li",[s._v("可以具有自动化运维能力（提高架构维护管理效率）")]),s._v(" "),a("li",[s._v("可以具有架构服务审计监控能力")])]),s._v(" "),a("p",[s._v("堡垒机安全功能：4A能力")]),s._v(" "),a("ul",[a("li",[s._v("身份鉴别 Authentication：\t确认连接用户身份")]),s._v(" "),a("li",[s._v("账号管理 Accounting：\t\t需要管理多个用户")]),s._v(" "),a("li",[s._v("权限管理 Authorization：\t不同用户有不同权限")]),s._v(" "),a("li",[s._v("安全审计 Auditing：\t\t可以监控用户行为")])]),s._v(" "),a("h3",{attrs:{id:"_2-跳板机服务安装部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-跳板机服务安装部署"}},[s._v("#")]),s._v(" 2，跳板机服务安装部署")]),s._v(" "),a("p",[s._v("官方网站资料：https://docs.jumpserver.org/zh/v3/")]),s._v(" "),a("p",[a("img",{attrs:{src:t(6143),alt:"1725236956293"}})]),s._v(" "),a("p",[a("img",{attrs:{src:t(6144),alt:"1725238602100"}})]),s._v(" "),a("p",[s._v("硬件：")]),s._v(" "),a("p",[a("img",{attrs:{src:t(6145),alt:"1725237847020"}})]),s._v(" "),a("p",[s._v("下载安装步骤： ce-v4.1.0版本（最新版）")]),s._v(" "),a("p",[a("img",{attrs:{src:t(6146),alt:"1725238886252"}})]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".将下载的包上传到/opt目录下\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jumpserver:~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cd /opt/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jumpserver:opt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ll")]),s._v("\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1082800")]),s._v("\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1108784941")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":47 jumpserver-ce-v4.0.2-x86_64.tar.gz\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".解压安装\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jumpserver:opt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#tar xf jumpserver-ce-v4.0.2-x86_64.tar.gz")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jumpserver:jumpserver-ce-v4.0.2-x86_64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#./jmsctl.sh install")]),s._v("\n在安装过程中的一些选项都直接回车使用默认即可。\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".启动服务\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jumpserver:opt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cd /opt/jumpserver-ce-v4.0.2-x86_64")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jumpserver:jumpserver-ce-v4.0.2-x86_64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#./jmsctl.sh start")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(". Web access 访问web\nhttp://10.0.0.81:80\nDefault username: admin  Default password: ChangeMe\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("源码安装：")]),s._v(" "),a("p",[a("img",{attrs:{src:t(6147),alt:"1725239149738"}})]),s._v(" "),a("h3",{attrs:{id:"_3-创建组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建组"}},[s._v("#")]),s._v(" 3，创建组")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("需要搞明白用户:\n三类用户:\n  jumpserver用户: 用来登录jumpserver页面的账号\n  malu 运维人员\n  tiedan 开发人员\n\n特权账号: jumpserver用来管理后端服务器的账号\n\n系统账号: 用来登录后端资产的用户\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("img",{attrs:{src:t(6148),alt:"1725239578743"}})]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("在用户组管理中创建两个组：\n- dev 开发级\n- ops 运维组\n\n在用户列表中创建两个用户：\n- malu\n- tiedan\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[a("img",{attrs:{src:t(6149),alt:"1725239722634"}})]),s._v(" "),a("p",[a("img",{attrs:{src:t(6150),alt:"1725239741817"}})]),s._v(" "),a("h3",{attrs:{id:"_3-创建特权用户-创建密钥管理和客户端做免秘钥登陆-添加资产"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建特权用户-创建密钥管理和客户端做免秘钥登陆-添加资产"}},[s._v("#")]),s._v(" 3，创建特权用户(创建密钥管理和客户端做免秘钥登陆) ，添加资产")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("在jumpserver服务器生成秘钥对 \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jumpserver:~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ssh-keygen")]),s._v("\n\n将公钥传送给后端所有的资产\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jumpserver:~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ssh-copy-id -i .ssh/id_rsa.pub 10.0.0.7")]),s._v("\n测试是否传送成功\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jumpserver:~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ssh 10.0.0.7")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#\t\t# 发送成功")]),s._v("\n\n\n补充: 远程执行命令\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jumpserver:~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ssh 10.0.0.7 'df -h'")]),s._v("\n\nAuthorized "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("users")]),s._v(" only. All activities may be monitored and reported.\nFilesystem             Size  Used Avail Use% Mounted on\ndevtmpfs               459M     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  459M   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /dev\ntmpfs                  475M     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  475M   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /dev/shm\ntmpfs                  475M   13M  462M   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("% /run\ntmpfs                  475M     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  475M   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /sys/fs/cgroup\n/dev/mapper/klas-root   47G  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(".0G   42G  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("% /\ntmpfs                  475M   96K  474M   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("% /tmp\n/dev/sda1             1014M  169M  846M  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v("% /boot\ntmpfs                   95M     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   95M   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /run/user/0\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@jumpserver:~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ssh 10.0.0.7 'ifconfig ens33'")]),s._v("\n\nAuthorized "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("users")]),s._v(" only. All activities may be monitored and reported.\nens33: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("flags")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("416")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v("<")]),s._v("UP,BROADCAST,RUNNING,MULTICAST"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  mtu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),s._v("\n        inet "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.7  netmask "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0  broadcast "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.255\n        ether 00:0c:29:32:59:3f  txqueuelen "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Ethernet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        RX packets "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("210561")]),s._v("  bytes "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("248181038")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("236.6")]),s._v(" MiB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        RX errors "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  dropped "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  overruns "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  frame "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        TX packets "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("130142")]),s._v("  bytes "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("107804108")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102.8")]),s._v(" MiB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        TX errors "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  dropped "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" overruns "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  carrier "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  collisions "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n\n将私钥复制到jumpserver特权账号的位置\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br")])]),a("div",{staticClass:"language-bah line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("管理后端资产，收集后端资产的配置写到资产列表中。\n\n在资产列表中，创建linux资产。\n名称：web01-10.0.0.7\nIP/主机：10.0.0.7\n平台：Linux\n节点：/DEFAULT\n协议组：sftp 22\n       ssh  22\n这里需要新增一个特权账号，默认没有。选择模板添加。\n名称：root特权账号用来管理后端资产\n用户名：root\n特权账号：勾选\n密文类型：SSH密钥\n密文策略：指定  将私钥复制到jumpserver特权账号的位置  \n[root@jumpserver:~]#cat .ssh/id_rsa\n自动推送的作用是需不需要把此用户在后端机器上创建出来，后端已经有root了，不需要再创建了。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[a("img",{attrs:{src:t(6151),alt:"1725255025775"}})]),s._v(" "),a("p",[a("img",{attrs:{src:t(6152),alt:"1725255277790"}})]),s._v(" "),a("p",[a("img",{attrs:{src:t(6153),alt:"1725255307150"}})]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("将公钥推送到web02,实现免密连接。\n\n然后，按上面的步骤，把web02这个资产添加进入，在操作中，点击测试一下。然后就连接成功了。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_4-授权资产到组或用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-授权资产到组或用户"}},[s._v("#")]),s._v(" 4，授权资产到组或用户")]),s._v(" "),a("p",[a("img",{attrs:{src:t(6154),alt:"1725255557932"}})]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("在资产列表中，添加节点：\n  DEFAULT\n     昌平机房  把web01放在昌平机房\n     亦庄机房  把web02放在亦庄机房\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("先创建后端资产的系统账号（模板添加一个账号）：")]),s._v(" "),a("p",[a("img",{attrs:{src:t(6155),alt:"1725255995359"}})]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("创建资产授权规则中：\n名称：授权给运维组\n用户：\n    用户：空\n    用户组：ops\n资产：\n    资产：\n    节点：/DEFAULT/亦庄机房  /DEFAULT/昌平机房\n账号信息：\n    选择指定账号，模板添加一个账号\n协议：全部协议\n动作：全部勾选\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[a("img",{attrs:{src:t(6156),alt:"1725256191763"}})]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("测试：id "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n\n使用malu登录，就可以看到资产了。在malu账号中就可以连接资产了。使用SSH连接。登录到web01上。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_5-日志审计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-日志审计"}},[s._v("#")]),s._v(" 5，日志审计")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("使用Administrator登录到堡垒机，找到审计台，再找到会话记录，就会看到malu用户的会话了。也有会话命令。\n\n还可以踢掉用户，也可以踢到会话。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_6-授权tiedan可以登录的资产"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-授权tiedan可以登录的资产"}},[s._v("#")]),s._v(" 6，授权tiedan可以登录的资产")]),s._v(" "),a("p",[a("img",{attrs:{src:t(6157),alt:"1725256869829"}})]),s._v(" "),a("p",[a("img",{attrs:{src:t(6158),alt:"1725256887467"}})]),s._v(" "),a("p",[a("img",{attrs:{src:t(6159),alt:"1725256901189"}})]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("使用tiedan登录堡垒机。测试。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_7-使用两个系统用户测试sudo提权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-使用两个系统用户测试sudo提权"}},[s._v("#")]),s._v(" 7，使用两个系统用户测试sudo提权")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".运维需要提权到root管理服务器\nmalu---"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("test---"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("资产\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".开发只需要提权相应的命令即可\nteidan---"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("gouzi---"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("资产\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".对系统账号分别进行提权配置\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("在账号管理下面有个账号模板，编辑test账号。\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:t(6160),alt:"1725257216058"}})]),s._v(" "),a("p",[a("img",{attrs:{src:t(6161),alt:"1725257230132"}})]),s._v(" "),a("p",[a("img",{attrs:{src:t(6162),alt:"1725258095145"}})]),s._v(" "),a("p",[a("img",{attrs:{src:t(6163),alt:"1725258107326"}})]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("在web01上，直接sudo "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" -\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /var/log/message  不行\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /var/log/message 可以\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"_8-测试命令过滤加强系统安全性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-测试命令过滤加强系统安全性"}},[s._v("#")]),s._v(" 8，测试命令过滤加强系统安全性")]),s._v(" "),a("p",[a("img",{attrs:{src:t(6164),alt:"1725258562722"}})]),s._v(" "),a("p",[s._v("添加命令过滤")]),s._v(" "),a("p",[a("img",{attrs:{src:t(6165),alt:"1725258554302"}})]),s._v(" "),a("h3",{attrs:{id:"_9-创建数据库应用测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-创建数据库应用测试"}},[s._v("#")]),s._v(" 9，创建数据库应用测试")]),s._v(" "),a("p",[a("img",{attrs:{src:t(6166),alt:"1725258661207"}})]),s._v(" "),a("p",[a("img",{attrs:{src:t(6167),alt:"1725258680937"}})]),s._v(" "),a("p",[s._v("授权dev连接数据库")]),s._v(" "),a("p",[a("img",{attrs:{src:t(6168),alt:"1725259044320"}})]),s._v(" "),a("p",[s._v("使用SSH远程连接jumpserver")]),s._v(" "),a("p",[s._v("[c:~]$ ssh 10.0.0.81 2222")]),s._v(" "),a("h3",{attrs:{id:"_10-多因子认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-多因子认证"}},[s._v("#")]),s._v(" 10，多因子认证")]),s._v(" "),a("p",[s._v("单个用户开启")]),s._v(" "),a("p",[a("img",{attrs:{src:t(6169),alt:"1725259280848"}})]),s._v(" "),a("p",[s._v("全局用户开启")]),s._v(" "),a("p",[a("img",{attrs:{src:t(6170),alt:"1725259295589"}})]),s._v(" "),a("p",[a("img",{attrs:{src:t(6171),alt:"1725259378457"}})]),s._v(" "),a("p",[a("img",{attrs:{src:t(6172),alt:"1725259391500"}})]),s._v(" "),a("p",[a("img",{attrs:{src:t(6173),alt:"1725259399072"}})]),s._v(" "),a("p",[a("img",{attrs:{src:t(6174),alt:"1725259408421"}})]),s._v(" "),a("h3",{attrs:{id:"_11-网域功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-网域功能"}},[s._v("#")]),s._v(" 11，网域功能")]),s._v(" "),a("p",[s._v("远程控制不同的网段(局域网的服务器,无法直接连接的服务器)")])])}),[],!1,null,null,null);a.default=e.exports},6141:function(s,a,t){s.exports=t.p+"assets/img/1725238482071.ce5efb45.png"},6142:function(s,a,t){s.exports=t.p+"assets/img/1725237144013.ad947c3a.png"},6143:function(s,a,t){s.exports=t.p+"assets/img/1725236956293.3847ec20.png"},6144:function(s,a,t){s.exports=t.p+"assets/img/1725238602100.711804f6.png"},6145:function(s,a,t){s.exports=t.p+"assets/img/1725237847020.068fafd1.png"},6146:function(s,a,t){s.exports=t.p+"assets/img/1725238886252.831f44bb.png"},6147:function(s,a,t){s.exports=t.p+"assets/img/1725239149738.8dd5b45b.png"},6148:function(s,a,t){s.exports=t.p+"assets/img/1725239578743.027731fe.png"},6149:function(s,a,t){s.exports=t.p+"assets/img/1725239722634.781333f9.png"},6150:function(s,a,t){s.exports=t.p+"assets/img/1725239741817.ff7eb2dd.png"},6151:function(s,a,t){s.exports=t.p+"assets/img/1725255025775.c10059ab.png"},6152:function(s,a,t){s.exports=t.p+"assets/img/1725255277790.83dca761.png"},6153:function(s,a,t){s.exports=t.p+"assets/img/1725255307150.838674ff.png"},6154:function(s,a,t){s.exports=t.p+"assets/img/1725255557932.03e140b0.png"},6155:function(s,a,t){s.exports=t.p+"assets/img/1725255995359.8dcb3292.png"},6156:function(s,a,t){s.exports=t.p+"assets/img/1725256191763.9c7ec11c.png"},6157:function(s,a,t){s.exports=t.p+"assets/img/1725256869829.ba44698f.png"},6158:function(s,a,t){s.exports=t.p+"assets/img/1725256887467.abb21501.png"},6159:function(s,a,t){s.exports=t.p+"assets/img/1725256901189.78bd10d5.png"},6160:function(s,a,t){s.exports=t.p+"assets/img/1725257216058.dc4b13e3.png"},6161:function(s,a,t){s.exports=t.p+"assets/img/1725257230132.401bd595.png"},6162:function(s,a,t){s.exports=t.p+"assets/img/1725258095145.8803944c.png"},6163:function(s,a,t){s.exports=t.p+"assets/img/1725258107326.a77eec9e.png"},6164:function(s,a,t){s.exports=t.p+"assets/img/1725258562722.804a9347.png"},6165:function(s,a,t){s.exports=t.p+"assets/img/1725258554302.7d8c48b3.png"},6166:function(s,a,t){s.exports=t.p+"assets/img/1725258661207.cb79c35b.png"},6167:function(s,a,t){s.exports=t.p+"assets/img/1725258680937.03bd9090.png"},6168:function(s,a,t){s.exports=t.p+"assets/img/1725259044320.2d7f17b3.png"},6169:function(s,a,t){s.exports=t.p+"assets/img/1725259280848.ad6e87b7.png"},6170:function(s,a,t){s.exports=t.p+"assets/img/1725259295589.7ee7ddea.png"},6171:function(s,a,t){s.exports=t.p+"assets/img/1725259378457.efd7b691.png"},6172:function(s,a,t){s.exports=t.p+"assets/img/1725259391500.11c2291e.png"},6173:function(s,a,t){s.exports=t.p+"assets/img/1725259399072.e61aa30c.png"},6174:function(s,a,t){s.exports=t.p+"assets/img/1725259408421.a8ec7918.png"}}]);