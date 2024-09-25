(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{13602:function(t,s,_){"use strict";_.r(s);var a=_(2),v=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"运维概述与linux系统安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运维概述与linux系统安装"}},[t._v("#")]),t._v(" 运维概述与Linux系统安装")]),t._v(" "),s("h1",{attrs:{id:"学习目标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#学习目标"}},[t._v("#")]),t._v(" 学习目标")]),t._v(" "),s("p",[t._v("1、了解运维的基本概念")]),t._v(" "),s("p",[t._v("2、了解企业的运行模式")]),t._v(" "),s("p",[t._v("3、了解操作系统发展史以及作用")]),t._v(" "),s("p",[t._v("4、掌握虚拟机软件安装")]),t._v(" "),s("p",[t._v("5、新建虚拟机以及CentOS系统安装")]),t._v(" "),s("h1",{attrs:{id:"一、运维概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、运维概述"}},[t._v("#")]),t._v(" 一、运维概述")]),t._v(" "),s("h2",{attrs:{id:"_1、运维岗位收入情况-职友集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、运维岗位收入情况-职友集"}},[t._v("#")]),t._v(" 1、运维岗位收入情况（职友集）")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7481)}}),t._v(" "),s("p",[t._v("数据来源："),s("a",{attrs:{href:"https://www.jobui.com/salary/?cityKw=%E5%8C%97%E4%BA%AC&jobKw=%E8%BF%90%E7%BB%B4",target:"_blank",rel:"noopener noreferrer"}},[t._v("职友集"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"_2、运维岗位的定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、运维岗位的定义"}},[t._v("#")]),t._v(" 2、运维岗位的定义")]),t._v(" "),s("p",[s("strong",[t._v("什么是运维？")])]),t._v(" "),s("p",[t._v("​        在技术人员（写代码的）之间，一致对运维有一个开玩笑的认知：运维就是修电脑的、装网线的、背锅的岗位。")]),t._v(" "),s("p",[t._v("​        "),s("strong",[t._v("IT运维管理")]),t._v("是指为了保障企业IT系统及网络的可用性、安全性、稳定性，保障业务的连续性，通过专业技术手段，对计算机网络、应用系统、电信网络、软硬件环境及运维服务流程等进行的综合管理。")]),t._v(" "),s("p",[t._v("​        随着企业数字化转型升级进程加快，企业IT系统架构越来越复杂，软件更新迭代越来越快。企业信息化建设使得大量业务和数据需要依靠信息系统来完成，稳定可用的IT系统是企业业务发展的基础条件，IT运维管理随之成为企业信息化建设的重要环节。")]),t._v(" "),s("p",[t._v("​        近年来，因为IT系统突然出现故障导致业务瘫痪甚至造成巨额损失的现象频出不穷。而大型数据中心由于对系统、数据的高度依赖，IT风险更大，对IT运维管理的重视也就更高。")]),t._v(" "),s("p",[t._v("运维领域经常看到的技术及概念")]),t._v(" "),s("p",[s("strong",[t._v("1）云计算架构")])]),t._v(" "),s("p",[t._v("云计算 = 公有云(阿里云、百度云、华为云) + 私有云（OpenStack） + 混合云")]),t._v(" "),s("p",[t._v("​        云服务器是由云服务厂商提供的性能卓越、稳定可靠、弹性扩展的IaaS（Infrastructure as a Service）级别云计算服务。云服务器免去了采购IT硬件的前期准备，让企业像使用水、电、天然气等公共资源一样便捷、高效地使用服务器，实现计算资源的即开即用和弹性伸缩。")]),t._v(" "),s("p",[s("strong",[t._v("2） DevOps运维开发工程师")]),t._v("\n​        DevOps（Development和Operations的组合词），它是一组过程、方法与系统的统称，主要用于促进开发和运营保障团队之间的协作与沟通，从而提高应用程序和服务的交付响应速度。 大概6:4 = 6运维:4开发（Python/Go）")]),t._v(" "),s("p",[t._v("​        DevOps把原本独立的开发和运营工作融合到一起，运营团队时刻了解开发人员的进展，并与他们形成互动，共同监控IT业务进展。在运维方面，DevOps可以打通从需求到结果运行的所有环节，以提高业务价值为目标")]),t._v(" "),s("p",[s("strong",[t._v("3） AIOps")]),t._v("\n​        2016年，Gartner提出利用AI技术的新一代IT运维，即AIOps（智能运维），可以解决未来企业可能遭遇的因IT故障而导致的业务中断，AIOps是ITOM的升级和进步，它结合了大数据和机器算法、机器学习技术，通过海量信息的搜集和处理，发现、预测、解决故障，进一步推动了IT运维自动化，减少了人力成本。")]),t._v(" "),s("p",[s("strong",[t._v("4）CI/CD")]),t._v("\n​        CI/CD 是一种通过在应用开发阶段引入自动化来频繁向客户交付应用的方法。CI/CD 的核心概念是持续集成、持续交付和持续部署。作为一个面向开发和运营团队的解决方案，CI/CD 主要针对在集成新代码时所引发的问题")]),t._v(" "),s("p",[s("strong",[t._v("5）Docker容器化技术")]),t._v("\n​         Docker 是一个开源的应用容器引擎，通常包括客户端、守护进程、镜像、容器，让开发者可以打包他们的应用以及依赖包到一个可移植的镜像中，再发布出去。类似于一个集装箱，可以把货物规整的摆放起来。")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7482)}}),t._v(" "),s("h2",{attrs:{id:"_3、运维的诞生"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、运维的诞生"}},[t._v("#")]),t._v(" 3、运维的诞生")]),t._v(" "),s("p",[t._v("​        从最早的网管开始，九十年代初期，互联网欠发达的时候，还少有服务器的概念，电脑价格昂贵，大多数人并不具备在家上网的条件，网吧应运而生。")]),t._v(" "),s("p",[t._v("早期计算机没有硬盘=>软驱=>软盘，1万多块钱 = 8-10万")]),t._v(" "),s("p",[t._v("网吧的电脑、猫等设备需要进行日常维护，于是“网管”岗位应运而生，这就是早期运维的雏形。")]),t._v(" "),s("h2",{attrs:{id:"_4、90年代初网吧图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、90年代初网吧图"}},[t._v("#")]),t._v(" 4、90年代初网吧图")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7483)}}),t._v(" "),s("h2",{attrs:{id:"_5、运维行业背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、运维行业背景"}},[t._v("#")]),t._v(" 5、运维行业背景")]),t._v(" "),s("p",[t._v("① 从行业角度来看，随着==中国互联网的高速发展(BAT)==、网站规模越来越来大、架构越来越复杂，对专职网站运维工程师、网站架构师的要求会越来越急迫，特别是对有经验的优秀运维人才需求量大，而且是越老越值钱。")]),t._v(" "),s("p",[t._v("② 从个人角度，运维工程师技术含量及要求会越来越高，同时也是对公司应用、架构最了解最熟悉的人，==越来越得到重视==。")]),t._v(" "),s("p",[t._v("③ 运维工作的相关经验将会变得非常重要，而且也将成为个人的核心竞争力，==优秀的运维工程师具备很好的各层面问题的解决能力及方案提供、全局思考的能力等==。")]),t._v(" "),s("p",[t._v("④ 由于运维岗位所接触的知识面非常广阔，==更容易培养或发挥出个人某些方面的特长或爱好==，如内核、网络、开发、数据库等方面，可以做得非常深入精通、成为这方面的专家。")]),t._v(" "),s("p",[t._v("⑤ ==当前国内外对运维人才的需求非常迫切，运维工程师的薪资也水涨船高==，与研发、测试等技术部门持平，甚至超出。")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7484)}}),t._v(" "),s("h1",{attrs:{id:"二、企业运行模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、企业运行模式"}},[t._v("#")]),t._v(" 二、企业运行模式")]),t._v(" "),s("h2",{attrs:{id:"_1、铁三角"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、铁三角"}},[t._v("#")]),t._v(" 1、铁三角")]),t._v(" "),s("p",[t._v("==铁三角 = 产品 + 研发 + 运维==")]),t._v(" "),s("p",[t._v("流程走向：产品设计 → 项目研发 → 项目测试 → 项目上线 → 系统运维")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7485)}}),t._v(" "),s("p",[t._v("研发 = 前端（HTML+CSS+JavaScript） + 后端（Java/Python/Go）")]),t._v(" "),s("p",[t._v("运维：产品上线、后期的运行与维护工作都属于运维工程师范畴")]),t._v(" "),s("h2",{attrs:{id:"_2、部门与部门职责"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、部门与部门职责"}},[t._v("#")]),t._v(" 2、部门与部门职责")]),t._v(" "),s("p",[t._v("产品部门（PM、UI、UE，3-5 个）：设计产品的需求，确定需要做的项目的功能和细节问题")]),t._v(" "),s("p",[t._v("研发部门（5-7 个）：根据产品部门/测试部门提供的项目模块需求进行编程")]),t._v(" "),s("p",[t._v("测试部门（2 个左右即可）：对于研发部门提供的代码进行运行测试，检查是否存在bug和一些需要改善的体验")]),t._v(" "),s("p",[t._v("运维部门（3-4 个）：负责项目环境部署、上线、架构的搭建等等")]),t._v(" "),s("h2",{attrs:{id:"_3、上线与生产"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、上线与生产"}},[t._v("#")]),t._v(" 3、上线与生产")]),t._v(" "),s("p",[t._v("成熟企业中的系统环境：")]),t._v(" "),s("p",[t._v("开发环境： 根据系统要求，设计和搭建系统环境")]),t._v(" "),s("p",[t._v("测试环境：搭建系统环境，实现自动化发布")]),t._v(" "),s("p",[t._v("准生产环境：搭建系统环境，沟通第三方厂商，自动化发布，监控")]),t._v(" "),s("p",[t._v("生产环境：搭建系统环境，沟通第三方厂商，自动化发布，监控，发起持续改进")]),t._v(" "),s("p",[s("strong",[t._v("上线")]),t._v("：发布项目的过程，包含准生产上线，生产上线等。内测/公测 → 开服")]),t._v(" "),s("p",[s("strong",[t._v("生产")]),t._v("：正式提供对外服务的环境，叫生产环境，需要运维重点关注。")]),t._v(" "),s("p",[t._v("在项目的从无到有的过程中，可以将其分为两个阶段：研发/测试阶段、生产运行阶段。")]),t._v(" "),s("p",[t._v("运维工作贯穿了开发，测试，生产的各个阶段，是其中重要的一环。")]),t._v(" "),s("h2",{attrs:{id:"_4、网站的概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、网站的概念"}},[t._v("#")]),t._v(" 4、网站的概念")]),t._v(" "),s("p",[t._v("简单地说，网站是一种沟通工具，人们可以通过网站来发布自己想要公开的资讯，或者利用网站来提供相关的网络服务。人们可以通过网页浏览器来访问网站，获取自己需要的资讯或者享受网络服务。")]),t._v(" "),s("p",[t._v("网站开发 = 前端开发 + 后端开发（ASP/PHP/JSP）")]),t._v(" "),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("扩展：了解网站的分类\n根据网站所用编程语言分类：例如ASP/PHP/JSP网站等；\n根据网站的用途分类：例如门户网站、行业网站、娱乐网站等\n根据网站的功能分类：例如单一网站（企业网站）、多功能网站（网络商城）等\n根据网站的持有者分类：例如个人网站、商业网站、政府网站、教育网站等\n根据网站的商业目的分类：营利型网站（企业"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("行业网站）、非营利性型网站（政府网站"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("教育网站）\n根据网站的面向终端的分类：Web网站（电脑端或PC端）和 WAP网站（手机端）\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h2",{attrs:{id:"_5、网站运行模式-重点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、网站运行模式-重点"}},[t._v("#")]),t._v(" 5、网站运行模式（重点）")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7486)}}),t._v(" "),s("blockquote",[s("p",[t._v("DNS 作用：将域名转换成IP 地址。")])]),t._v(" "),s("p",[t._v("从上图中可以看出如果一个网站项目需要正常的运行，则需要的前提条件有：")]),t._v(" "),s("p",[t._v("① 域名（方便用户记忆）")]),t._v(" "),s("p",[t._v("② 需要对域名和ip 的关系进行关联（DNS 服务器）")]),t._v(" "),s("p",[t._v("③ 服务器")]),t._v(" "),s("p",[t._v("④ 服务器的项目运行环境")]),t._v(" "),s("h2",{attrs:{id:"_6、几个重要概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、几个重要概念"}},[t._v("#")]),t._v(" 6、几个重要概念")]),t._v(" "),s("h3",{attrs:{id:"_1-服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-服务器"}},[t._v("#")]),t._v(" "),s("strong",[t._v("① 服务器")])]),t._v(" "),s("p",[t._v("就是给用户提供服务的机器（电脑）。服务器可以分为四大类：塔式服务器、机式服务器、刀片服务器、柜式服务器。")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7487)}}),t._v(" "),s("blockquote",[s("h4",{attrs:{id:"问题一-普通台式机-笔记本能否充当服务器来使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题一-普通台式机-笔记本能否充当服务器来使用"}},[t._v("#")]),t._v(" 问题一：普通台式机/笔记本能否充当服务器来使用？")])]),t._v(" "),s("p",[t._v("标准的回答：如果从提供服务的实现角度来考虑的话的确是可以，但是如果要想稳定、高效的提供服务，则在这个角度考虑家用电脑和笔记就无法取代服务器地位。")]),t._v(" "),s("p",[t._v("家用台式机/笔记本从系统角度来看，一般都会使用Windows 系统（易用），并不适合作为服务器来使用。")]),t._v(" "),s("p",[t._v("家用台式机/笔记本硬件和专门的服务器相比标准不统一。")]),t._v(" "),s("blockquote",[s("h4",{attrs:{id:"问题二-服务器有哪些特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题二-服务器有哪些特性"}},[t._v("#")]),t._v(" 问题二：服务器有哪些特性？")]),t._v(" "),s("p",[t._v("高性能特性 + 标准化统一特性。")])]),t._v(" "),s("h3",{attrs:{id:"_2-ip地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-ip地址"}},[t._v("#")]),t._v(" "),s("strong",[t._v("② IP地址")])]),t._v(" "),s("p",[t._v("形式ipv4（常见）、ipv6（不考虑）。Ipv4 形式：x.x.x.x，x 有取值范围（第1 位x取值1-223，从第二位开始0-255）。由于资源有限为了保证全球这么多台电脑都可以使用，ip 可以分为公网/外网ip 和私网/内网ip 地址。")]),t._v(" "),s("blockquote",[s("p",[t._v("0.0.0.0，表示任意地方，anywhere...")])]),t._v(" "),s("h3",{attrs:{id:"_3-域名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-域名"}},[t._v("#")]),t._v(" "),s("strong",[t._v("③ 域名")])]),t._v(" "),s("p",[t._v("就是在浏览器地址栏中输入的那一串字母和数字的组合，例如：www.baidu.com，这个就是域名，域名主要是方便用户记忆。")]),t._v(" "),s("blockquote",[s("p",[t._v('问：www.baidu.com 这个域名是几级的域名？二级域名，看域名的级别只要看有几个"."，日常所说的注册域名指的是注册顶级域名（一级）】')])]),t._v(" "),s("p",[t._v("额外购买：中国万网（已经被阿里云收购），域名属于有限资源，先买先得（按年付费）")]),t._v(" "),s("h3",{attrs:{id:"_4-公网"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-公网"}},[t._v("#")]),t._v(" "),s("strong",[t._v("④ 公网")])]),t._v(" "),s("p",[t._v("www（万维网），全世界都可以互相访问的网。")]),t._v(" "),s("h3",{attrs:{id:"_5-局域网"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-局域网"}},[t._v("#")]),t._v(" "),s("strong",[t._v("⑤ 局域网")])]),t._v(" "),s("p",[t._v("局域网/内网/私网：在某个单元内部（家庭/教室/公司）能够进行互相访问的网络，红色警戒游戏对战平台。")]),t._v(" "),s("h2",{attrs:{id:"_7、服务器的重要结构组成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7、服务器的重要结构组成"}},[t._v("#")]),t._v(" 7、服务器的重要结构组成")]),t._v(" "),s("p",[t._v("家用电脑组成： CPU、主板、内存条、显卡、硬盘、电源、风扇、网卡、显示器、机箱、键盘鼠标等等。")]),t._v(" "),s("h3",{attrs:{id:"_1-cpu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-cpu"}},[t._v("#")]),t._v(" 1）CPU")]),t._v(" "),s("p",[t._v("CPU是电脑的大脑，如下图所示：")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7488)}}),t._v(" "),s("p",[t._v("CPU发展史：")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7489)}}),t._v(" "),s("p",[t._v("32 位CPU：最大的内存寻址地址2^32，大约4G的大小。")]),t._v(" "),s("p",[t._v("CPU很傻，只认识0和1")]),t._v(" "),s("p",[t._v("32位的CPU，其支持的内存最大值 = 2的32次方 ≈ 3.80G，大约4G的大小")]),t._v(" "),s("p",[t._v("64位的CPU，其支持的内存最大值 = 2的64次方")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7490)}}),t._v(" "),s("blockquote",[s("p",[t._v("聊聊2的32次方怎么算？")]),t._v(" "),s("p",[t._v("1T = 1024GB    1GB = 1024MB    1MB = 1024KB    1KB = 1024B")]),t._v(" "),s("p",[t._v("2^32B  = 2^32 /1024/1024 /1024 = 4GB")])]),t._v(" "),s("p",[t._v("CPU  i3、i5、i7、i9、志强系列（移动工作站或者企业级服务器），现在买计算机，看CPU还要看几代的。i5，十代U")]),t._v(" "),s("h3",{attrs:{id:"_2-内存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-内存"}},[t._v("#")]),t._v(" 2）内存")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7491)}}),t._v(" "),s("p",[t._v("内存也是电脑必需组件之一。")]),t._v(" "),s("p",[t._v("计算机是一个商铺：CPU相当于人，内存相当于仓库。商品必须上架才能显示。")]),t._v(" "),s("h3",{attrs:{id:"_3-风扇"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-风扇"}},[t._v("#")]),t._v(" 3）风扇")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7492)}}),t._v(" "),s("h3",{attrs:{id:"_4-电源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-电源"}},[t._v("#")]),t._v(" 4）电源")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7493)}}),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7494)}}),t._v(" "),s("h3",{attrs:{id:"_5-硬盘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-硬盘"}},[t._v("#")]),t._v(" 5）硬盘")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7495)}}),t._v(" "),s("p",[t._v("硬盘的作用：存储数据。")]),t._v(" "),s("p",[t._v("硬盘可以分为机械硬盘、固态硬盘。")]),t._v(" "),s("p",[t._v("机械硬盘与固态硬盘的区别？")]),t._v(" "),s("p",[t._v("① 速度：固态硬盘更快，不受转速影响")]),t._v(" "),s("p",[t._v("② 安全性：机械硬盘的安全性较高，即使损坏了，也有80%以上的恢复概率")]),t._v(" "),s("p",[t._v("企业级固态硬盘（安全性也有所提高）")]),t._v(" "),s("p",[t._v("扩展：固态硬盘（价格千差万别，因为使用的芯片不一样）")]),t._v(" "),s("p",[t._v("QLC(很差) < TLC(一般) < MLC(最好)，芯片不同有何影响")]),t._v(" "),s("p",[t._v("一方面是速度不一样，另外一方面安全性和寿命不同")]),t._v(" "),s("h3",{attrs:{id:"_6-主板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-主板"}},[t._v("#")]),t._v(" 6）主板")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7496)}}),t._v(" "),s("p",[t._v("主要的作用：")]),t._v(" "),s("p",[t._v("自身包含了一些集成电路，负责各个不同的功能和数据通信。")]),t._v(" "),s("p",[t._v("主板上有很多空的插槽，插槽的作用在于扩展外部的硬件设备。")]),t._v(" "),s("h1",{attrs:{id:"三、操作系统概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、操作系统概述"}},[t._v("#")]),t._v(" 三、操作系统概述")]),t._v(" "),s("h2",{attrs:{id:"_1、计算机发展史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、计算机发展史"}},[t._v("#")]),t._v(" 1、计算机发展史")]),t._v(" "),s("p",[t._v("第一台计算机是1946 年2 月14 日诞生日，第一台名称ENIAC。体积一间屋子的大小，重量高达28t。")]),t._v(" "),s("p",[t._v("第一代：1946 – 1958  => 12 年 （电子管）")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7497)}}),t._v(" "),s("p",[t._v("第二代：1958 – 1964 => 6 年 （晶体管）")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7498)}}),t._v(" "),s("p",[t._v("第三代：1964 – 1970 => 6 年 （集成电路）")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7499)}}),t._v(" "),s("p",[t._v("第四代：1970 – 至今 （大规模集成电路）")]),t._v(" "),s("h2",{attrs:{id:"_2、计算机组成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、计算机组成"}},[t._v("#")]),t._v(" 2、计算机组成")]),t._v(" "),s("p",[t._v("CPU、内存、风扇、硬盘、显示器、主板、电源、声卡、网卡、显卡、鼠标、键盘等")]),t._v(" "),s("h2",{attrs:{id:"_3、计算机资源-重点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、计算机资源-重点"}},[t._v("#")]),t._v(" 3、计算机资源（重点）")]),t._v(" "),s("p",[t._v("计算机资源分为2 部分：==硬件资源、软件资源==")]),t._v(" "),s("p",[t._v("硬件：一般硬件是指计算机的物理组成，由==真实（看得见，摸得着）==的设备组成的")]),t._v(" "),s("p",[t._v("软件：软件==一般是指应用程序==，应用程序程序是由开发人员去按照编程语言的特定的规则去")]),t._v(" "),s("p",[t._v("编写的程序。除了上述的应用程序之外，==操作系统也属于软件资源的范畴，它属特殊的软件==。")]),t._v(" "),s("blockquote",[s("p",[t._v("问题：为什么在打开一个应用程序之后（吃鸡游戏），当玩家在敲击键盘和移动鼠标的时候里")]),t._v(" "),s("p",[t._v("面人物会有对应的行为表现呢？")])]),t._v(" "),s("p",[t._v("答：用户敲击键盘/移动鼠标（硬件操作） → 硬件的驱动（软件资源） → 操作系统（软件） → 硬件支持（cpu） → 操作系统（软件） → 驱动（显卡驱动） → 显示在屏幕上（硬件）")]),t._v(" "),s("p",[t._v("所以由此可知，==操作系统==是软件资源与硬件资源之间的桥梁。")]),t._v(" "),s("h2",{attrs:{id:"_4、操作系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、操作系统"}},[t._v("#")]),t._v(" 4、操作系统")]),t._v(" "),s("p",[t._v("常见操作系统有：==Windows、MacOS、Unix/Linux==。 类UNIX")]),t._v(" "),s("p",[t._v("Windows：其是微软公司研发的收费操作系统（闭源）。")]),t._v(" "),s("p",[t._v("Windows 系统体系分为两类：用户操作系统、Server 操作系统。")]),t._v(" "),s("p",[t._v("用户操作系统：win 95、win 98、win NT、win Me、win xp、vista、win7、win8、win10。")]),t._v(" "),s("p",[t._v("MacOS：==其是由苹果公司开发的一款收费（变相收费，买电脑送系统）操作系统==。该系统从")]),t._v(" "),s("p",[t._v("终端角度来看分为：watch OS、IOS、MacOS。其表现突出的地方：底层优化实现的很好、安全性要更加高点（闭源）。")]),t._v(" "),s("p",[t._v("Linux：==Linux 是目前全球使用量最多的服务器操作系统（开源）==。其体系很强大，其分支有很多（数不胜数），其目前主要的分支有：RedHat（红帽）、CentOS、Debian、乌班图（ubuntu）")]),t._v(" "),s("p",[t._v("等等。其在世界范围最大的使用分支是安卓。")]),t._v(" "),s("p",[t._v("闭源：不开放源代码，用户是没有办法看到软件的底层实现（闭源≠收费）。")]),t._v(" "),s("p",[t._v("开源：表示开放源代码（开源≠免费）。")]),t._v(" "),s("h2",{attrs:{id:"_5、为什么需要linux操作系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、为什么需要linux操作系统"}},[t._v("#")]),t._v(" 5、为什么需要Linux操作系统")]),t._v(" "),s("blockquote",[s("p",[t._v("问题：windows 既然可以使用傻瓜式的方式进行操作，例如使用ctrl+c 表示复制，ctrl+v 表示粘贴等，为什么还需要使用/学习Linux 系统？")])]),t._v(" "),s("p",[t._v("① 性能问题，Windows 服务器操作系统不如Linux 高；")]),t._v(" "),s("p",[t._v("② 稳定性问题：")]),t._v(" "),s("p",[t._v("底层架构：Linux 更加稳定，其开机时间可以达到好几年不关机；")]),t._v(" "),s("p",[t._v("开源：因为开源，人人都可以看到源代码，就可以为其提供自己的补丁，补丁可以提高稳定性和安全性；")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7500)}}),t._v(" "),s("p",[t._v("③ 安全性问题：")]),t._v(" "),s("p",[t._v("Linux 操作系统，相对于Windows 操作系统要更加安全；")]),t._v(" "),s("p",[t._v("④ 远程管理方面：")]),t._v(" "),s("p",[t._v("Windows 不及Linux 操作高效。")]),t._v(" "),s("p",[t._v("⑤ 服务器价格昂贵的，需要对资源进行充分利用，充分把计算机资源用到项目上（访问并发、性能），而不是把资源浪费在图形化界面或者方便程度上；")]),t._v(" "),s("h1",{attrs:{id:"四、linux发展史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、linux发展史"}},[t._v("#")]),t._v(" 四、Linux发展史")]),t._v(" "),s("h2",{attrs:{id:"_1、linux-起源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、linux-起源"}},[t._v("#")]),t._v(" 1、Linux 起源")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7501)}}),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7502)}}),t._v(" "),s("p",[s("strong",[t._v("Linus(林纳斯·托瓦兹)")]),t._v("：Linux 的开发作者，被称为Linux 之父，Linux 诞生时是芬兰赫尔辛基大学的在校大学生。"),s("strong",[t._v("Stallman 斯特曼")]),t._v("：开源文化的倡导人。")]),t._v(" "),s("h2",{attrs:{id:"_2、linux-的含义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、linux-的含义"}},[t._v("#")]),t._v(" 2、Linux 的含义")]),t._v(" "),s("p",[t._v("狭义：由Linus 编写的一段内核代码。")]),t._v(" "),s("p",[t._v("广义：广义上的Linux 是指由Linux内核衍生的各种Linux发行版本。（CentOS、Ubuntu）")]),t._v(" "),s("blockquote",[s("p",[t._v("注意：以后提及到的Linux 都是广义上的Linux")])]),t._v(" "),s("h2",{attrs:{id:"_3、linux特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、linux特点"}},[t._v("#")]),t._v(" 3、Linux特点")]),t._v(" "),s("p",[t._v("开放性（开源）、多用户、多任务、良好的用户界面、优异的性能与稳定性")]),t._v(" "),s("p",[t._v("多用户多任务：")]),t._v(" "),s("p",[t._v("单用户：一个用户，在登录计算机（操作系统），只能允许同时登录一个用户；")]),t._v(" "),s("p",[t._v("单任务：一个任务，允许用户同时进行的操作任务数量；")]),t._v(" "),s("p",[t._v("多用户：多个用户，在登录计算机（操作系统），允许同时登录多个用户进行操作；")]),t._v(" "),s("p",[t._v("多任务：多个任务，允许用户同时进行多个操作任务；")]),t._v(" "),s("p",[t._v("Windows 属于：单用户、多任务。")]),t._v(" "),s("p",[t._v("而Linux系统则属于：多用户、多任务。")]),t._v(" "),s("h2",{attrs:{id:"_4、linux分支-linux衍生版-linux厂商基于linux内核"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、linux分支-linux衍生版-linux厂商基于linux内核"}},[t._v("#")]),t._v(" 4、Linux分支(Linux衍生版：Linux厂商基于Linux内核)")]),t._v(" "),s("p",[t._v("分支：Linux 分支有很多，现在比较有名的redhat、ubuntu、debian、centos（Community Enterprise Operating System）、suse 等等。")]),t._v(" "),s("p",[t._v("redhat红帽（redhat企业版、centos社区版）、ubuntu（乌班图）、debian、suse")]),t._v(" "),s("p",[t._v("中国Linux系统：红旗（Redflag）、麒麟、深度OS（推荐，和Windows基本一致）")]),t._v(" "),s("p",[t._v("XP操作系统（番茄家园、雨林木风xp.com、深度家园）=> Linux操作系统")]),t._v(" "),s("p",[t._v("CentOS7.6")]),t._v(" "),s("h1",{attrs:{id:"五、linux系统安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、linux系统安装"}},[t._v("#")]),t._v(" 五、Linux系统安装")]),t._v(" "),s("h2",{attrs:{id:"_1、linux系统安装方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、linux系统安装方式"}},[t._v("#")]),t._v(" 1、Linux系统安装方式")]),t._v(" "),s("p",[t._v("目前安装操作系统方式有2 种：真机安装、虚拟机安装。")]),t._v(" "),s("p",[t._v("真机安装：使用真实的电脑进行安装，像安装windows 操作系统一样，真机安装的结果就是替换掉当前的windows 操作系统；（缺点：对系统进行格式化，重新安装）")]),t._v(" "),s("p",[t._v("虚拟机安装：通过一些特定的手段，来进行模拟安装，并不会影响当前计算机的真实操作系统；")]),t._v(" "),s("blockquote",[s("p",[t._v("如果是学习或者测试使用，强烈建议使用虚拟机安装方式。")])]),t._v(" "),s("h2",{attrs:{id:"_2、虚拟机概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、虚拟机概念"}},[t._v("#")]),t._v(" 2、虚拟机概念")]),t._v(" "),s("p",[t._v("什么是虚拟机？")]),t._v(" "),s("p",[t._v("虚拟机，有些时候想模拟出一个真实的电脑环境，碍于使用真机安装代价太大，因此而诞生的一款可以模拟操作系统运行的软件。")]),t._v(" "),s("p",[t._v("虚拟机目前有2 个比较有名的产品：==vmware 出品的vmware workstation==、oracle 出品的virtual Box。")]),t._v(" "),s("h2",{attrs:{id:"_3、虚拟机的安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、虚拟机的安装"}},[t._v("#")]),t._v(" 3、虚拟机的安装")]),t._v(" "),s("p",[t._v("第一步：双击打开VMware安装程序")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7503)}}),t._v(" "),s("p",[t._v("第二步：进行下一步安装")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7504)}}),t._v(" "),s("p",[t._v("第三步：同意许可协议，单击下一步")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7505)}}),t._v(" "),s("p",[t._v("第四步：根据需要决定是否需要更改软件的安装位置（建议放置于除C盘以外任意盘符下）")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7506)}}),t._v(" "),s("p",[t._v("第五步：更改成功后，单击确定，下一步继续安装：")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7507)}}),t._v(" "),s("blockquote",[s("p",[t._v("注意：所有软件的安装目录最好在安装的时候是空的")])]),t._v(" "),s("p",[t._v("第六步：用户体验设置，如下图所示，单击下一步继续安装")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7508)}}),t._v(" "),s("p",[t._v("第七步：快捷方式设置，单击下一步继续安装")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7509)}}),t._v(" "),s("p",[t._v("第八步：单击安装按钮")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7510)}}),t._v(" "),s("p",[t._v("第九步：安装结束后，单击完成按钮")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7511)}}),t._v(" "),s("p",[t._v("==注意事项：最重要的地方，在安装完之后需要检查，检查虚拟机软件是否有安装2 个虚拟网卡==")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7512)}}),t._v(" "),s("blockquote",[s("p",[t._v("Windows7与Windows10可能显示网络名称有所不同，但是底部虚拟机网络是一致的。")])]),t._v(" "),s("h2",{attrs:{id:"_4、linux系统环境部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、linux系统环境部署"}},[t._v("#")]),t._v(" 4、Linux系统环境部署")]),t._v(" "),s("p",[t._v("Linux系统版本选择：CentOS7.6 x64，【镜像一般都是CentOS*.iso文件】")]),t._v(" "),s("blockquote",[s("p",[t._v("问题：为什么不选择最新版的8 版本？")]),t._v(" "),s("p",[t._v("7.x 目前依然是主流")]),t._v(" "),s("p",[t._v("7.x 的各种系统操作模式是基础")])]),t._v(" "),s("p",[t._v("官网：https://www.centos.org/ ，从官网下载得到的镜像文件：")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7513)}}),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7514)}}),t._v(" "),s("p",[t._v("Centos7.6版本下载地址：")]),t._v(" "),s("p",[t._v("http://vault.centos.org/7.6.1810/isos/x86_64/CentOS-7-x86_64-Everything-1810.iso")]),t._v(" "),s("p",[t._v('第一步：新建虚拟机，点击=="文件"==菜单，选择=="新建虚拟"==选项，选择=="自定义"==点击下一步：')]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7515)}}),t._v(" "),s("p",[t._v("第二步：选择兼容性，默认即可，单击下一步：")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7516)}}),t._v(" "),s("p",[t._v("第三步：选择镜像文件的时候选择“稍后安装操作系统”，点击下一步")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7517)}}),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7518)}}),t._v(" "),s("p",[t._v("第四步：设置虚拟机的名称（名称将会后期出现在左侧）和设置虚拟系统的安装位置")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7519)}}),t._v(" "),s("p",[t._v("第五步：CPU设置，提示：根据自身电脑配置选择CPU设置，一般默认即可，1*1")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7520)}}),t._v(" "),s("p",[t._v("第六步：分配虚拟机内存")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7521)}}),t._v(" "),s("p",[t._v("第七步：选择虚拟机网络类型，默认选择NAT即可。")]),t._v(" "),s("p",[t._v("NAT：配置好之后windows 即可和虚拟机进行互相通信，但是教室内的其他同学是访问不了的，只有自己可以访问虚拟机中的操作系统。")]),t._v(" "),s("p",[t._v("桥接：配置好之后其他同学也可以访问你的虚拟机操作系统。")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7522)}}),t._v(" "),s("p",[t._v("第八步：后续默认的步骤，直接下一步")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7523)}}),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7524)}}),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7525)}}),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7526)}}),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7527)}}),t._v(" "),s("p",[t._v("安装完毕后，单击完成：")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7528)}}),t._v(" "),s("h2",{attrs:{id:"_5、centos系统安装配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、centos系统安装配置"}},[t._v("#")]),t._v(" 5、CentOS系统安装配置")]),t._v(" "),s("p",[t._v("第一步：选择CentOS系统安装镜像【*.iso文件】")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7529)}}),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7530)}}),t._v(" "),s("p",[t._v("第二步：开启虚拟机，进行系统安装")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7531)}}),t._v(" "),s("blockquote",[s("p",[t._v('注意：如果开机之后鼠标点进去虚拟机出不来，则可以按下组合快捷键"Ctrl + Alt"')])]),t._v(" "),s("p",[t._v("第三步：如果启动之后出现类似提示框（不是错误框）则勾选不再提示，并且确定即可：")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7532)}}),t._v(" "),s("blockquote",[s("p",[t._v("特别注意：如果在启动时候出现下述错误，则说明电脑没有开启cpu 的虚拟化，如果需要开启，则需要重启计算机，并且在开启的时候进入主板的BIOS 设置开启虚拟化，然后保存设置重启电脑：")])]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7533)}}),t._v(" "),s("p",[t._v("第四步：选择安装centos7（通过↑ 或 ↓方向键进行选择），确认后，按下回车")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7534)}}),t._v(" "),s("p",[t._v("第五步：等待一会儿后，将弹出欢迎使用CENTOS 7的界面，选择中文，简体中文（中国），点击继续")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7535)}}),t._v(" "),s("p",[t._v("第六步：在安装信息摘要界面，点击软件安装，进入软件选择界面")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7536)}}),t._v(" "),s("p",[t._v("第七步：在软件选择界面，选中左侧GNOME Desktop，勾选右侧所有项目，点击完成，回到安装信息摘要界面。")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7537)}}),t._v(" "),s("p",[t._v("点击INSTALLATION DESTINATION")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7538)}}),t._v(" "),s("p",[t._v("进入磁盘配置页面，直接点Done，不需要做其他更改，只是确认使用自动分区")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7539)}}),t._v(" "),s("p",[t._v("第八步：点击开始安装")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7540)}}),t._v(" "),s("p",[t._v("第九步：进入安装进度页面")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7541)}}),t._v(" "),s("p",[t._v("第十步：点击ROOT密码，进入密码设置页面，输入两次ROOT账户的密码，例如1234。第一次点击完成，会提示Too short，密码太短，再点击一次完成，确定使用简单密码。（生产环境要设置足够复杂的密码）")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7542)}}),t._v(" "),s("p",[t._v("第十一步：回到安装进度页面，显示已经设置了ROOT密码，等待安装完成即可。")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7543)}}),t._v(" "),s("p",[t._v("第十二步：安装完成后，右下角会出现重启按钮，点击重启")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7544)}}),t._v(" "),s("p",[t._v("第十三步：重启之后，来到初始设置页面，点击license information")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7545)}}),t._v(" "),s("p",[t._v("第十四步：勾选我同意许可协议，点击左上角完成，回到初始设置页面")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7546)}}),t._v(" "),s("p",[t._v("第十五步：网络和主机名，创建用户都不用操作，直接点击右下角完成配置")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7547)}}),t._v(" "),s("p",[t._v("第十六步：进入到欢迎页面，点击前进")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7548)}}),t._v(" "),s("p",[t._v("第十七步：输入页面，默认汉语，点击前进")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7549)}}),t._v(" "),s("p",[t._v("第十八步：隐私，位置服务，默认开启，点击前进")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7550)}}),t._v(" "),s("p",[t._v("第十九步：时区，在对话框中输入shanghai，会自动联想出对应时区，点击右上角前进。")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7551)}}),t._v(" "),s("p",[t._v("第二十步：在线账号，选择跳过")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7552)}}),t._v(" "),s("p",[t._v("第二十一步：全名任意填写，用户名默认和全名一致，此处的用户名，是一个普通的账户，区别于ROOT账户。点击前进。")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7553)}}),t._v(" "),s("p",[t._v("第二十二步：填写密码，注意需要包含数字，字母，特殊字符，此处密码是前面创建的itheima这个账户的密码")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7554)}}),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7555)}}),t._v(" "),s("h2",{attrs:{id:"_6、安装后配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、安装后配置"}},[t._v("#")]),t._v(" 6、安装后配置")]),t._v(" "),s("p",[t._v("为了试验方便，取消centos的屏幕锁定")]),t._v(" "),s("p",[t._v("点击桌面右上角的电源标志，在弹出菜单下方，点击设置按钮")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7556)}}),t._v(" "),s("p",[t._v("选择左侧的Power（电源）按钮，右侧选择Never（从不），这样Centos就不会每五分钟自动锁屏了，方便大家操作。")]),t._v(" "),s("p",[t._v("注意：自动锁屏是出于安全考虑，工作环境尽量不要关闭。")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7557)}}),t._v(" "),s("p",[t._v("选中后，直接点击右上角关闭即可，系统会自动保存配置")]),t._v(" "),s("img",{staticStyle:{width:"960px"},attrs:{src:_(7558)}})])}),[],!1,null,null,null);s.default=v.exports},7481:function(t,s,_){t.exports=_.p+"assets/img/image-20181224112437930.4c588e48.png"},7482:function(t,s,_){t.exports=_.p+"assets/img/IT运维.8507cbbf.jpg"},7483:function(t,s,_){t.exports=_.p+"assets/img/image-20181224112924673-5622164.ec7ae068.png"},7484:function(t,s,_){t.exports=_.p+"assets/img/yunweijiagou01.60410cf0.png"},7485:function(t,s,_){t.exports=_.p+"assets/img/image-20181224114328948-5623008.68ce6759.png"},7486:function(t,s,_){t.exports=_.p+"assets/img/image-20181224120100937.cc5a7424.png"},7487:function(t,s,_){t.exports=_.p+"assets/img/image-20181224141507325-5632107.7d7d8367.png"},7488:function(t,s,_){t.exports=_.p+"assets/img/image-20181224144310846.439348dd.png"},7489:function(t,s,_){t.exports=_.p+"assets/img/image-20181224144757436.b8c5853a.png"},7490:function(t,s,_){t.exports=_.p+"assets/img/1556208902112.6074c9ec.png"},7491:function(t,s,_){t.exports=_.p+"assets/img/image-20181224145922023.c422183e.jpg"},7492:function(t,s,_){t.exports=_.p+"assets/img/image-20181224150950616-5635390.f631f632.jpg"},7493:function(t,s,_){t.exports=_.p+"assets/img/image-20181224151032278-5635432.8c065066.jpg"},7494:function(t,s,_){t.exports=_.p+"assets/img/image-20181224151051477-5635451.98a00dce.jpg"},7495:function(t,s,_){t.exports=_.p+"assets/img/image-20181224151122456-5635482.ea6c5a46.jpg"},7496:function(t,s,_){t.exports=_.p+"assets/img/image-20181224151323063-5635603.a9cde970.jpg"},7497:function(t,s,_){t.exports=_.p+"assets/img/image-20181224151503026-5635703.bc8785b6.jpg"},7498:function(t,s,_){t.exports=_.p+"assets/img/image-20181224151615445-5635775.21d14c7b.jpg"},7499:function(t,s,_){t.exports=_.p+"assets/img/image-20181224151647004-5635807.cc5db049.jpg"},7500:function(t,s,_){t.exports=_.p+"assets/img/lanping.69b17947.jpg"},7501:function(t,s,_){t.exports=_.p+"assets/img/Linux起源.ac4ce693.jpg"},7502:function(t,s,_){t.exports=_.p+"assets/img/renwu01.adcc10c0.jpg"},7503:function(t,s,_){t.exports=_.p+"assets/img/image-20181225151657086-5722217.69408ed6.png"},7504:function(t,s,_){t.exports=_.p+"assets/img/image-20181225151746969-5722267.9047c339.jpg"},7505:function(t,s,_){t.exports=_.p+"assets/img/image-20181225154333785-5723813.48b3dd22.jpg"},7506:function(t,s,_){t.exports=_.p+"assets/img/image-20181225154745785-5724065.9b632a74.jpg"},7507:function(t,s,_){t.exports=_.p+"assets/img/image-20181225154840969-5724121.9594a216.jpg"},7508:function(t,s,_){t.exports=_.p+"assets/img/image-20181225155019548-5724219.59367106.jpg"},7509:function(t,s,_){t.exports=_.p+"assets/img/image-20181225155100064-5724260.1c8aaca9.jpg"},7510:function(t,s,_){t.exports=_.p+"assets/img/image-20181225155139933-5724299.26612760.png"},7511:function(t,s,_){t.exports=_.p+"assets/img/image-20181225155221456-5724341.4b319def.png"},7512:function(t,s,_){t.exports=_.p+"assets/img/image-20181225155310369-5724390.aaa3483c.png"},7513:function(t,s,_){t.exports=_.p+"assets/img/Linux7.6.e1390f14.jpg"},7514:function(t,s,_){t.exports=_.p+"assets/img/Linux7.6下载.305cfffc.jpg"},7515:function(t,s,_){t.exports=_.p+"assets/img/image-20181225160214141-5724934.aa16795b.png"},7516:function(t,s,_){t.exports=_.p+"assets/img/image-20181225160254489-5724974.eda91db3.png"},7517:function(t,s,_){t.exports=_.p+"assets/img/image-20181226151225287-5808345.069a5b03.png"},7518:function(t,s,_){t.exports=_.p+"assets/img/image-20181226151302134-5808382.16d679f4.png"},7519:function(t,s,_){t.exports=_.p+"assets/img/安装Centos701.b96a1633.jpg"},7520:function(t,s,_){t.exports=_.p+"assets/img/image-20181226151444882-5808484.d9e78deb.png"},7521:function(t,s,_){t.exports=_.p+"assets/img/image-20181226132645846-5802005.f8c7f228.png"},7522:function(t,s,_){t.exports=_.p+"assets/img/image-20181226133239044-5802359.88d4480b.png"},7523:function(t,s,_){t.exports=_.p+"assets/img/image-20181226133457467-5802497.ac615167.png"},7524:function(t,s,_){t.exports=_.p+"assets/img/image-20181226133537233-5802537.b3ec2cda.png"},7525:function(t,s,_){t.exports=_.p+"assets/img/image-20181226133610852-5802570.7b1ca941.png"},7526:function(t,s,_){t.exports=_.p+"assets/img/image-20181226133920751-5802760.3d45bd18.png"},7527:function(t,s,_){t.exports=_.p+"assets/img/安装Centos702.4c724ef1.jpg"},7528:function(t,s,_){t.exports=_.p+"assets/img/安装Centos703.5a3ed52c.jpg"},7529:function(t,s,_){t.exports=_.p+"assets/img/安装Centos704.c7db14f0.jpg"},7530:function(t,s,_){t.exports=_.p+"assets/img/安装Centos705.2db314e4.jpg"},7531:function(t,s,_){t.exports=_.p+"assets/img/image-20181226135105642-5803465.3c3e409b.png"},7532:function(t,s,_){t.exports=_.p+"assets/img/image-20181226135215825-5803535.bf736578.png"},7533:function(t,s,_){t.exports=_.p+"assets/img/image-20181226135252298-5803572.401711c8.png"},7534:function(t,s,_){t.exports=_.p+"assets/img/安装Centos706.65106970.jpg"},7535:function(t,s,_){t.exports=_.p+"assets/img/安装Centos707.30744ec7.jpg"},7536:function(t,s,_){t.exports=_.p+"assets/img/安装Centos708.ceed322a.jpg"},7537:function(t,s,_){t.exports=_.p+"assets/img/安装Centos709.1d61c774.jpg"},7538:function(t,s,_){t.exports=_.p+"assets/img/安装Centos709b.60d28f76.jpg"},7539:function(t,s,_){t.exports=_.p+"assets/img/安装Centos709c.97d4918f.jpg"},7540:function(t,s,_){t.exports=_.p+"assets/img/安装Centos710.585d34e1.jpg"},7541:function(t,s,_){t.exports=_.p+"assets/img/安装Centos711.b8ad2aac.jpg"},7542:function(t,s,_){t.exports=_.p+"assets/img/安装Centos712.2f87fdbe.jpg"},7543:function(t,s,_){t.exports=_.p+"assets/img/安装Centos713.bd8b1287.jpg"},7544:function(t,s,_){t.exports=_.p+"assets/img/安装Centos714.a8dcfed1.jpg"},7545:function(t,s,_){t.exports=_.p+"assets/img/安装Centos715.bb48a56c.jpg"},7546:function(t,s,_){t.exports=_.p+"assets/img/安装Centos716.a365899a.jpg"},7547:function(t,s,_){t.exports=_.p+"assets/img/安装Centos717.1888dd43.jpg"},7548:function(t,s,_){t.exports=_.p+"assets/img/安装Centos718.bd9b039e.jpg"},7549:function(t,s,_){t.exports=_.p+"assets/img/安装Centos719.b0a4a3a3.jpg"},7550:function(t,s,_){t.exports=_.p+"assets/img/安装Centos720.bd8476d2.jpg"},7551:function(t,s,_){t.exports=_.p+"assets/img/安装Centos721.e70f2342.jpg"},7552:function(t,s,_){t.exports=_.p+"assets/img/安装Centos722.7c1f489a.jpg"},7553:function(t,s,_){t.exports=_.p+"assets/img/安装Centos723.57b90f14.jpg"},7554:function(t,s,_){t.exports=_.p+"assets/img/安装Centos724.59acef07.jpg"},7555:function(t,s,_){t.exports=_.p+"assets/img/安装Centos725.51111326.jpg"},7556:function(t,s,_){t.exports=_.p+"assets/img/block01.9d2afbb8.jpg"},7557:function(t,s,_){t.exports=_.p+"assets/img/block02.05b4c005.jpg"},7558:function(t,s,_){t.exports=_.p+"assets/img/block03.125d830d.jpg"}}]);