(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{14660:function(s,a,e){"use strict";e.r(a);var t=e(2),i=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"配置文件中所有的ip、密码均为演示或测试用的假ip、假密码-实际使用中请自行修改ip、密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件中所有的ip、密码均为演示或测试用的假ip、假密码-实际使用中请自行修改ip、密码"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("配置文件中所有的ip、密码均为演示或测试用的假ip、假密码，实际使用中请自行修改ip、密码")])])]),s._v(" "),a("br"),s._v("\n通过ansible批量部署zabbix客户端  \nzabbix服务端是yum部署的，详见 [官网](https://www.zabbix.com/cn/download)\n"),a("h2",{attrs:{id:"部署命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署命令"}},[s._v("#")]),s._v(" 部署命令")]),s._v(" "),a("p",[s._v("该命令具有幂等性，可重复执行")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("ansible-playbook "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" hosts site.yml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"一些说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一些说明"}},[s._v("#")]),s._v(" 一些说明")]),s._v(" "),a("p",[s._v("当前目录的 "),a("code",[s._v("ansible.cfg")]),s._v("，"),a("code",[s._v("hosts")]),s._v(" 文件可以保留，这样就可以使用当前目录的配置了。")]),s._v(" "),a("ul",[a("li",[s._v("ansible 会优先使用执行命令当前目录的 "),a("code",[s._v("ansible.cfg")])]),s._v(" "),a("li",[a("code",[s._v("-i")]),s._v(" 选项可以指定 "),a("code",[s._v("hosts")]),s._v(" 文件")])]),s._v(" "),a("p",[s._v("实测中，删除了 "),a("code",[s._v("/etc/ansible/{ansible.cfg,hosts}")]),s._v(" 后，即使不使用 "),a("code",[s._v("-i")]),s._v(" 指定 "),a("code",[s._v("host")]),s._v(" ，ansible 也能正确的使用当前目录的 "),a("code",[s._v("hosts")]),s._v(" 文件。")])])}),[],!1,null,null,null);a.default=i.exports}}]);