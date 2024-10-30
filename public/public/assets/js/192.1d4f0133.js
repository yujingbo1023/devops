(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{14554:function(s,n,t){"use strict";t.r(n);var a=t(2),e=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"_1-克隆一台web01机器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-克隆一台web01机器"}},[s._v("#")]),s._v(" 1，克隆一台web01机器")]),s._v(" "),n("p",[s._v("前面我们有了两台机器了：")]),s._v(" "),n("p",[n("img",{attrs:{src:t(5994),alt:"1723171803858"}})]),s._v(" "),n("p",[s._v("backup有两个IP：")]),s._v(" "),n("ul",[n("li",[s._v("10.0.0.41")]),s._v(" "),n("li",[s._v("172.16.1.41")])]),s._v(" "),n("p",[s._v("克隆一个web01机器：")]),s._v(" "),n("ul",[n("li",[s._v("10.0.0.7")]),s._v(" "),n("li",[s._v("172.16.1.7")])]),s._v(" "),n("p",[s._v("克隆成功： 具体的流程，就看系统优化的课件")]),s._v(" "),n("p",[n("img",{attrs:{src:t(5995),alt:"1723172208995"}})]),s._v(" "),n("h3",{attrs:{id:"_2-安装nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装nginx"}},[s._v("#")]),s._v(" 2，安装nginx")]),s._v(" "),n("p",[s._v("安装方式：")]),s._v(" "),n("ul",[n("li",[s._v("通过官方仓库安装    类手机安装游戏找到官方下载安装      版本新的")]),s._v(" "),n("li",[s._v("通过epel安装   扩展仓库     类似手机通过应用软件商店搜索安装     版本较低")]),s._v(" "),n("li",[s._v("编译安装，比较麻烦，如果机器不能连网，只能通过编译进行安装")])]),s._v(" "),n("p",[s._v("通过官方仓库安装Nginx服务，官网：https://nginx.org/")]),s._v(" "),n("p",[n("img",{attrs:{src:t(5996),alt:"1723172371999"}})]),s._v(" "),n("p",[s._v("nginx安装方式：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".安装方式\n三种: \n\t编译安装\n\t通过epel仓库安装: 版本低 配置文件不易读\n\t通过官方仓库安装，推荐这一种\n\n通过epel仓库:\n查看nginx版本号:\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@nfs:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#nginx -v")]),s._v("\nnginx version: nginx/1.21.5\n\n通过官方仓库:\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#nginx -v")]),s._v("\nnginx version: nginx/1.26.1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("操作流程：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".配置Nginx官方仓库\n配置仓库的链接: https://nginx.org/en/linux_packages.html"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#RHEL")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#vim /etc/yum.repos.d/nginx.repo")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nginx-stable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx stable repo\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 名称")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://nginx.org/packages/centos/7/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 软件链接地址")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\t\t\t\t\t    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否校验")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\t\t\t\t\t    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否开启此仓库 1为开启 0为关闭")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://nginx.org/keys/nginx_signing.key\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("module_hotfixes")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n\n--------------------------- 大这copy下面的，上面的由注释，不行\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nginx-stable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx stable repo\t\t\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://nginx.org/packages/centos/7/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),s._v("/\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\t\t\t\t\t  \n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\t\t\t\t\t   \n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://nginx.org/keys/nginx_signing.key\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("module_hotfixes")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ll /etc/yum.repos.d/")]),s._v("\ntotal "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("664")]),s._v(" Aug  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v(" epel.repo\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("701")]),s._v(" Sep  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v(" kylin_x86_64.repo\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("182")]),s._v(" Aug  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":46 nginx.repo\n\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".安装Nginx  类似于点外卖\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#yum -y install nginx")]),s._v("\n\n查看是否成功：\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#nginx -v")]),s._v("\nnginx version: nginx/1.26.1\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".配置Nginx  后面安装的其它服务，配置文件都在/etc下面  nginx.conf是nginx的主配置文件\n主配置: /etc/nginx/nginx.conf\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cat /etc/nginx/nginx.conf ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 核心区块")]),s._v("\nuser  nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动进程使用nginx用户")]),s._v("\nworker_processes  auto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nginx进程打开数量 auto自动以cpu核心数相同")]),s._v("\n\nerror_log  /var/log/nginx/error.log notice"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 错误日志的位置和级别")]),s._v("\npid        /var/run/nginx.pid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\t\t     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行的PID号会保存到此文件")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#事件区块")]),s._v("\nevents "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    worker_connections  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10240")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\t\t\t "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每个子进程最大的链接数量。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#http区块 响应浏览器请求区块")]),s._v("\nhttp "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    include       /etc/nginx/mime.types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认为下载类型")]),s._v("\n    default_type  application/octet-stream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 网站支持的默认资源类型")]),s._v("\n\n    log_format  main  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$remote_addr - $remote_user [$time_local] \"$request\" '")]),s._v("\n                      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$status $body_bytes_sent \"$http_referer\" '")]),s._v("\n                      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"$http_user_agent" "$http_x_forwarded_for"\'')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nginx日志格式")]),s._v("\n\t\n    access_log  /var/log/nginx/access.log  main"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志存放的位置")]),s._v("\n\n    sendfile        on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文件高效传输")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#tcp_nopush     on;")]),s._v("\n\n    keepalive_timeout  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("65")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 长连接 如果用户65秒内无操作，则服务器主动断开连接")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#gzip  on;")]),s._v("\n\n    include /etc/nginx/conf.d/*.conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 包含/etc/nginx/conf.d/下所有的文件 到当前的位置")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# charset utf-8; 引用game.conf 相当于直接写到当前的位置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑default.conf")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" default.conf  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将默认的配置清空 写入以下内容")]),s._v("\nserver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n        listen "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("              "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监听的端口号 浏览器默认访问都是以80端口访问的页面")]),s._v("\n        server_name www.malu.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自己注册的域名,也可以使用没有注册过的写入hosts本地解析")]),s._v("\n\n        location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 访问域名的后面默认都是有个/  www.baidu.com/  路径匹配")]),s._v("\n                root /code/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果有人访问的是www.malu.com/，则让用户去/code目录下访问")]),s._v("\n                index  index.html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认让用户访问index.html内容")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n语法检测:\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:conf.d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#nginx -t")]),s._v("\nnginx: the configuration "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" /etc/nginx/nginx.conf syntax is ok\nnginx: configuration "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" /etc/nginx/nginx.conf "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" is successful\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:conf.d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#mkdir /code")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:conf.d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cd /")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ls")]),s._v("\nbin   code  d.txt  home  lib64  mnt  proc  run   srv  tmp  var\nboot  dev   etc    lib   media  opt  root  sbin  sys  usr\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cd code")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#touch index.html")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#echo 123 > index.html ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cat index.html ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".启动Nginx\nsystemctl start nginx\n\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(".浏览器访问主页查看是否是123\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br"),n("span",{staticClass:"line-number"},[s._v("110")]),n("br"),n("span",{staticClass:"line-number"},[s._v("111")]),n("br"),n("span",{staticClass:"line-number"},[s._v("112")]),n("br")])]),n("h3",{attrs:{id:"_3-将小霸王游戏机部署到nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-将小霸王游戏机部署到nginx"}},[s._v("#")]),s._v(" 3，将小霸王游戏机部署到nginx")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".进入到代码目录\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cd /code/")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".上传小霸\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ll")]),s._v("\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7902976")]),s._v(" Aug  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":21 小霸王_FC怀旧游戏机-HTML源码.zip\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".解压代码\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#unzip 小霸王_FC怀旧游戏机-HTML源码.zip")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".直接浏览器访问即可\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.7\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"_4-nginx的启动与停止"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-nginx的启动与停止"}},[s._v("#")]),s._v(" 4，nginx的启动与停止")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看nginx当前的状态")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#systemctl status nginx")]),s._v("\n● nginx.service - nginx - high performance web server\n   Loaded: loaded "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/usr/lib/systemd/system/nginx.service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" disabled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" vendor preset: disabled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   Active: active "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("running"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Fri "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2024")]),s._v("-08-09 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":17:03 CST"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 31min ago\n     Docs: http://nginx.org/en/docs/\n  Process: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1767")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/sbin/\n  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动Nginx服务")]),s._v("\nsystemctl start nginx  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动ngix")]),s._v("\nsystemctl restart nginx  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动ngix")]),s._v("\nsystemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" nginx  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开机自动启动")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止nginx")]),s._v("\nsystemctl stop nginx  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止ngix")]),s._v("\nsystemctl disable nginx  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止开机自动启动")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#systemctl stop nginx")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#systemctl status nginx")]),s._v("\n● nginx.service - nginx - high performance web server\n   Loaded: loaded "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/usr/lib/systemd/system/nginx.service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" disabled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" vendor preset: disabled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   Active: inactive "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dead"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ----------------------------- 还有一种启动和停止的方式（了解），掌握上面的方式就可以")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#which nginx")]),s._v("\n/usr/sbin/nginx\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#/usr/sbin/nginx\t\t\t  # 启动")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#/usr/sbin/nginx -s stop    # 停止")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@web01:~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#/usr/sbin/nginx -s reload  # 重新加载")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports},5994:function(s,n,t){s.exports=t.p+"assets/img/1723171803858.515dc2b5.png"},5995:function(s,n,t){s.exports=t.p+"assets/img/1723172208995.324b1896.png"},5996:function(s,n,t){s.exports=t.p+"assets/img/1723172371999.6e561777.png"}}]);