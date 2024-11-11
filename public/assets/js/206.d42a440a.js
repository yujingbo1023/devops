(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{14642:function(s,n,t){"use strict";t.r(n);var a=t(2),e=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"_1-ssh远程连接-基于用户名和密码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-ssh远程连接-基于用户名和密码"}},[s._v("#")]),s._v(" 1，SSH远程连接(基于用户名和密码)")]),s._v(" "),n("p",[s._v("默认情况下，你安装完操作系统，这个系统上就已经有ssh服务了，这个服务不需要你安装，系统中自带这个服务器。使用xshell去连接服务器，也是基于ssh服务。如果把linux系统上的ssh服务关闭了，那么你的xshell也是连接不上去了。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".windows连接Linux系统\n方法1\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.31    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认连接的SSH22端口,也可以连接阿里云服务器")]),s._v("\n方法2 指定用户\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@10.0.0.31\n方法3 指定端口\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@10.0.0.31 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\n\n\n修改linux的ssh服务远程连接端口 将注释去掉修改为2222\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nfs:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#grep 2222 /etc/ssh/sshd_config ")]),s._v("\nPort "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2222")]),s._v("\n重启生效\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nfs:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#systemctl restart sshd")]),s._v("\n指定端口号连接:\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@10.0.0.31 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2222")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".Linux连接linux\nweb01连接backup服务器\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ssh 10.0.0.41")]),s._v("\n指定用户\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@backup:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#exit 退出远程连接")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ssh root@10.0.0.41")]),s._v("\nAuthorized "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("users")]),s._v(" only. All activities may be monitored and reported.\nroot@10.0.0.41"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s password: \n[root@backup:~]#\n\n指定端口号:web01连接31服务器\n[root@web01:~]#ssh -p2222 root@10.0.0.31\n\n远程连接的地址可以用IP地址，域名，主机名称。\n[root@nfs:~]#cat /etc/hosts\n127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4\n::1         localhost localhost.localdomain localhost6 localhost6.localdomain6\n10.0.0.41   backup\n\n[root@nfs:~]#ping -c1 -W1 backup\nPING backup (10.0.0.41) 56(84) bytes of data.\n64 bytes from backup (10.0.0.41): icmp_seq=1 ttl=64 time=0.430 ms\n\n通过主机名称连接:\n[root@nfs:~]#ssh backup\nThe authenticity of host '")]),s._v("backup "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.41"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("' can'")]),s._v("t be established.\nECDSA key fingerprint is SHA256:5IRW4TiNlfS+kmXlEpwVnm+uDGASPC0Vj1ncCswZL2Q.\nAre you sure you want to "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("continue")]),s._v(" connecting "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("yes/no/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("fingerprint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("? "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\nWarning: Permanently added "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'backup,10.0.0.41'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ECDSA"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" to the list of known hosts.\nAuthorized "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("users")]),s._v(" only. All activities may be monitored and reported.\nroot@backup"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s password: \n[root@backup:~]#\n\n使用域名连接:\n[root@nfs:~]#ssh www.jiahua.com\nroot@linuxnc.com'")]),s._v("s password: 远端服务器的root密码\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br")])]),n("p",[n("strong",[s._v("小结：")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("SSH基于用户密码 类似屋门使用密码锁\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".windows连接linux  默认22端口\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@10.0.0.41 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2222")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@host "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2222")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@www.jiahua.com\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".Linux连接Linux系统\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p2222")]),s._v(" root@10.0.0.31 \n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@host \n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@www.jiahua.com\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".基础SSH的远程复制scp\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v("  源文件 root@10.0.0.41:/root/\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" 目录 root@10.0.0.41:/root/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"_2-scp命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-scp命令"}},[s._v("#")]),s._v(" 2，SCP命令")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("远程拷贝文件 每次都是全量。类似rsync\n\n案例1.将web01的hosts传输到 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("41")]),s._v("服务器的家目录\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nfs:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#scp /etc/hosts 10.0.0.41:/root/")]),s._v("\n\n案例2.将41服务器家目录的hosts 拷贝到当前web服务器的/opt目录下\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nfs:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#scp 10.0.0.41:/root/hosts /opt/")]),s._v("\n\n案例3.拷贝目录需要加 -r参数\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nfs:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#scp -r /etc 10.0.0.41:/root/")]),s._v("\n\nscp-指定端口号\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nfs:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#scp -P2222 /etc/hosts 172.16.1.31:/root/")]),s._v("\n\n注意用户权限的问题:\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nfs:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#scp -P2222 /etc/hosts root@172.16.1.31:/root/")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h3",{attrs:{id:"_3-免秘钥连接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-免秘钥连接"}},[s._v("#")]),s._v(" 3，免秘钥连接")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("SSH免秘钥连接  类似人脸识别 指纹识别\n\n远程连接流程:\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".远程连接目标服务器，目标服务器会返回所有已经存在的锁"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("默认没有"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  对手机进行开屏,手机会优先自动识别人脸，是否可以比对上。\n  \n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".如果本地的服务器的钥匙可以打开目标服务器上的锁，则自动连接 不需要任何验证（默认没有钥匙）\n  如果人脸可以比对，则自动打开屏幕，不需要其他任何验证\n  \n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".没有钥匙或者有钥匙打不开锁，则目标服务器返回登录界面输入用户名和密码\n  如果人脸匹配不上，返回密码的登录界面。\n\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".生成秘钥对"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("一把锁和一把钥匙"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n锁: 公钥\n钥匙: 私钥\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ssh-keygen   #一路回车")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ll .ssh/   # 生成的秘钥对是在家目录下隐藏的目录.ssh目录")]),s._v("\ntotal "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n-rw------- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2590")]),s._v(" Aug  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" 09:10 id_rsa\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 私钥 钥匙")]),s._v("\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("564")]),s._v(" Aug  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" 09:10 id_rsa.pub     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 公钥  锁 发送到目标服务器")]),s._v("\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("171")]),s._v(" Aug  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" 09:12 known_hosts\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证输入yes文件")]),s._v("\n\n\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".将公钥传输到需要免交互连接的服务器\n比如web01连接backup免秘钥，需要web01生成秘钥对，然后将公钥传输到backup服务器\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ssh-copy-id -i .ssh/id_rsa.pub 10.0.0.31")]),s._v("\n/usr/bin/ssh-copy-id: INFO: Source of key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" to be installed: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('".ssh/id_rsa.pub"')]),s._v("\n/usr/bin/ssh-copy-id: INFO: attempting to log "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" with the new key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", to filter out any that are already installed\n/usr/bin/ssh-copy-id: INFO: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" remain to be installed -- "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" you are prompted now it is to "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" the new keys\n\nAuthorized "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("users")]),s._v(" only. All activities may be monitored and reported.\nroot@10.0.0.31's password: \t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入31的root密码")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#拷贝公钥简写")]),s._v("\nssh-copy-id  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.31   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认拷贝~/.ssh/id_rsa.pub")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".直接远程连接测试 不需要任何验证"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("底层验证的是秘钥"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ssh 10.0.0.31")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nfs:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#exit")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("logout")]),s._v("\nConnection to "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.31 closed.\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br")])]),n("p",[n("img",{attrs:{src:t(6067),alt:"1724047187002"}})]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".xshell生成秘钥对\n工具---"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("新建用户秘钥生成向导--"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("复制公钥到web的认证文件中\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#vim .ssh/authorized_keys")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ll .ssh/authorized_keys")]),s._v("\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("381")]),s._v(" Aug  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" 09:31 .ssh/authorized_keys\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#chmod 600 .ssh/authorized_keys")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ll .ssh/authorized_keys")]),s._v("\n-rw------- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("381")]),s._v(" Aug  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" 09:31 .ssh/authorized_keys\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".测试windows连接web\n本地shell执行: "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@10.0.0.7 选择使用秘钥的方式远程连接。\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".web服务器生成秘钥对\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ssh-keygen")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".将生成的公钥拷贝到31和41服务器\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ssh-copy-id 172.16.1.41")]),s._v("\n/usr/bin/ssh-copy-id: INFO: Source of key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" to be installed: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/root/.ssh/id_rsa.pub"')]),s._v("\nThe authenticity of "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'172.16.1.41 (172.16.1.41)'")]),s._v(" can"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'t be established.\nECDSA key fingerprint is SHA256:5IRW4TiNlfS+kmXlEpwVnm+uDGASPC0Vj1ncCswZL2Q.\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\n/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed\n/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys\n\nAuthorized users only. All activities may be monitored and reported.\nroot@172.16.1.41'")]),s._v("s password:\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ssh-copy-id 172.16.1.31")]),s._v("\n/usr/bin/ssh-copy-id: INFO: Source of key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" to be installed: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/root/.ssh/id_rsa.pub"')]),s._v("\nThe authenticity of "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'172.16.1.31 (172.16.1.41)'")]),s._v(" can"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'t be established.\nECDSA key fingerprint is SHA256:5IRW4TiNlfS+kmXlEpwVnm+uDGASPC0Vj1ncCswZL2Q.\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\n/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed\n/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys\n\nAuthorized users only. All activities may be monitored and reported.\nroot@172.16.1.31'")]),s._v("s password:\n\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(".测试web服务器到31和41的免秘钥连接\n\n\n\n优化SSH远程连接服务\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/ssh/sshd_config\n        Port "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6666")]),s._v("                       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 变更SSH服务远程连接端口")]),s._v("\n        PermitRootLogin         no      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止root用户直接远程登录")]),s._v("\n        PasswordAuthentication  no      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止使用密码直接远程登录")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br")])]),n("h3",{attrs:{id:"_4-ssh常见问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-ssh常见问题"}},[s._v("#")]),s._v(" 4，SSH常见问题")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".SSH免秘钥连接\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("生成秘钥对 ssh-keygen\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("将公钥传送到目标主机 ssh-copy-id  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.31\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("ssh "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.31\n问题1.默认的.ssh目录不存在\n解决方法\n      a.手动创建\n      b.ssh连接任意一台服务器自动创建.ssh\n      c.生成秘钥对自动创建.ssh目录\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#vim hehe/test.txt # 如果hehe目录不存在则无法自动创建")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n\n问题2.权限问题\n第一个权限:\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ll -d /\t\t# 根目录555")]),s._v("\ndr-xr-xr-x. "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("250")]),s._v(" Aug  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":44 /\n第二个权限:  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# root目录权限是550")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ll -d /root")]),s._v("\ndr-xr-x--- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("185")]),s._v(" Aug  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" 09:00 /root\n\n第三个权限:  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# .ssh目录权限是700")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ll -d /root/.ssh")]),s._v("\ndrwx------ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(" Aug  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" 08:58 /root/.ssh\n\n第四个权限: "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证文件权限是600")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nfs:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ll .ssh/")]),s._v("\ntotal "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n-rw------- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("564")]),s._v(" Aug  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" 09:14 authorized_keys\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports},6067:function(s,n,t){s.exports=t.p+"assets/img/1724047187002.34ef6a8b.png"}}]);