(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{14669:function(s,a,t){"use strict";t.r(a);var e=t(2),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"rabbitmq集群配置步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq集群配置步骤"}},[s._v("#")]),s._v(" RabbitMQ集群配置步骤")]),s._v(" "),a("p",[a("em",[a("strong",[s._v("以下操作，在各节点"),a("code",[s._v("rabbitmq")]),s._v("都启动的情况下进行")])]),s._v(" "),a("br")]),s._v(" "),a("h2",{attrs:{id:"_1、在主节点上获取主节点的-erlang-cookie值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、在主节点上获取主节点的-erlang-cookie值"}},[s._v("#")]),s._v(" 1、在主节点上获取主节点的"),a("code",[s._v(".erlang.cookie")]),s._v("值")]),s._v(" "),a("p",[s._v("选一台服务器作为主节点，查看其值")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果用本项目脚本部署的，那么 .erlang.cookie 在脚本配置的 rabbitmq_home 变量指定的目录下面。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果通过其他方式部署的，文件应该是")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /var/lib/rabbitmq/.erlang.cookie 或者 ~/.erlang.cookie")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /data/rabbitmq/.erlang.cookie\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"_2、在所有节点上配置-etc-hosts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、在所有节点上配置-etc-hosts"}},[s._v("#")]),s._v(" 2、在所有节点上配置"),a("code",[s._v("/etc/hosts")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rabbitmq节点间基于主机名进行通信，故各节点名应唯一，而后将集群节点都加入进集群节点 hosts 文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.57    node-1\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.81    node-2\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.60    node-3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_3、在各子节点上操作-加入集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、在各子节点上操作-加入集群"}},[s._v("#")]),s._v(" 3、在各子节点上操作，加入集群")]),s._v(" "),a("p",[a("strong",[s._v("1）将主节点的 "),a("code",[s._v(".erlang.cookie")]),s._v(" 的值写入到子节点的  "),a("code",[s._v(".erlang.cookie")]),s._v(" 中")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /data/rabbitmq/.erlang.cookie\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改值，保存时可能会提示只读，使用 :wq! 保存即可。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果上述操作不可能，那么修改该文件的权限，")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod 777 /data/rabbitmq/.erlang.cookie")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改完后，再降低文件权限，否则启动不了")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod 400 /data/rabbitmq/.erlang.cookie")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("strong",[s._v("2）加入集群")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下面的命令可以指定节点名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rabbitmqctl -n rabbit2 stop_app")]),s._v("\n\nrabbitmqctl stop_app\nrabbitmqctl reset\nrabbitmqctl join_cluster rabbit@node-1\nrabbitmqctl start_app\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"_4、在任一节点查看集群状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、在任一节点查看集群状态"}},[s._v("#")]),s._v(" 4、在任一节点查看集群状态")]),s._v(" "),a("p",[a("strong",[s._v("1）命令查看")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("rabbitmqctl cluster_status\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("2）管理界面查看")]),a("br"),s._v("\n访问 "),a("code",[s._v("http://ip:port")]),s._v(" 查看 "),a("code",[s._v("Overview")]),s._v(" 中的 "),a("code",[s._v("node")])])])}),[],!1,null,null,null);a.default=n.exports}}]);