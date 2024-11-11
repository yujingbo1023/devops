(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{14723:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"_1-jdbc概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-jdbc概述"}},[t._v("#")]),t._v(" 1, JDBC概述")]),t._v(" "),s("p",[s("strong",[t._v("数据的持久化")])]),t._v(" "),s("ul",[s("li",[t._v("持久化(persistence)：将内存中的数据保存到可永久保存的存储设备中（如磁盘）。")]),t._v(" "),s("li",[t._v("持久化的主要应用是将内存中的数据存储在关系型数据库中，当然也可以存储在磁盘文件、XML数据文件中。")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(7635),alt:"1717580850304"}})]),t._v(" "),s("p",[s("strong",[t._v("数据库切换所面临的问题：")])]),t._v(" "),s("p",[t._v("​\t同一套Java代码是无法操作不同的关系型数据库，因为每一个关系型数据库的底层实现细节都不一样。如果这样，问题就很大了，在公司中可以在开发阶段使用的是MySQL数据库，而上线时公司最终选用oracle数据库，我们就需要对代码进行大批量修改，这显然并不是我们想看到的。我们要做到的是同一套Java代码操作不同的关系型数据库，而此时sun公司就指定了一套标准接口（JDBC），JDBC中定义了所有操作关系型数据库的规则。众所周知接口是无法直接使用的，我们需要使用接口的实现类，而这套实现类（称之为：驱动）就由各自的数据库厂商给出。")]),t._v(" "),s("p",[s("strong",[t._v("什么是JDBC")])]),t._v(" "),s("ul",[s("li",[t._v("官方（sun公司）定义的一套操作所有关系型数据库的规则，即接口")]),t._v(" "),s("li",[t._v("各个数据库厂商去实现这套接口，提供数据库驱动jar包")]),t._v(" "),s("li",[t._v("可以使用这套接口（JDBC）编程，真正执行的代码是驱动jar包中的实现类")])]),t._v(" "),s("p",[s("strong",[t._v("什么是数据库驱动程序")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(7636),alt:"1717581410492"}})]),t._v(" "),s("ul",[s("li",[t._v("数据库驱动就是直接操作数据库的一个程序")]),t._v(" "),s("li",[t._v("不同数据产品的数据库驱动名字有差异")]),t._v(" "),s("li",[t._v("在程序中需要依赖数据库驱动来完成对数据库的操作")])]),t._v(" "),s("p",[s("strong",[t._v("Java中访问数据库技术")])]),t._v(" "),s("ul",[s("li",[t._v("基于JDBC标准访问数据库")]),t._v(" "),s("li",[t._v("使用第三方ORM 框架，如Hibernate, Mybatis 等访问数据库")])]),t._v(" "),s("p",[s("strong",[t._v("程序操作数据库流程")])]),t._v(" "),s("ul",[s("li",[t._v("如果没有JDBC，那么Java程序访问数据库时是这样的：")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(7637),alt:"1717581527323"}})]),t._v(" "),s("p",[t._v("有了JDBC，Java程序访问数据库时是这样的：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(7638),alt:"1717581541404"}})]),t._v(" "),s("h3",{attrs:{id:"_2-jdbc中常用的类与接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-jdbc中常用的类与接口"}},[t._v("#")]),t._v(" 2, JDBC中常用的类与接口")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("Driver")]),t._v(" "),s("strong",[t._v("接口")])]),t._v(" "),s("p",[t._v("Driver 接口的作用是来定义数据库驱动对象应该具备的一些能力。比如与数据库建立连接的方法的定义，该接口是提供给数据库厂商使用的，所有支持 java 语言连接的数据库都实现了该接口，实现该接口的类我们称之为数据库驱动类。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("DriverManager")]),t._v(" "),s("strong",[t._v("类")])]),t._v(" "),s("p",[t._v("DriverManager是驱动程序管理器，是负责管理数据库驱动程序的。驱动注册以后，会保存在DriverManager中的已注册列表中。 DriverManager 通过实例化的数据库驱动对象，能够建立应用程序与数据库之间建立连 接。并返回 Connection 接口类型的数据库连接对象。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("getConnection(String jdbcUrl, String user, String password)")]),t._v(" "),s("p",[t._v("该方法通过访问数据库的 url、用户以及密码，返回对应的数据库的 Connection 对象。")])]),t._v(" "),s("li",[s("p",[t._v("JDBC URL")]),t._v(" "),s("p",[t._v("与数据库连接时，用来连接到指定数据库标识符。在 URL 中包括了该数据库的类型、 地址、端口、库名称等信息。不同品牌数据库的连接 URL 不同。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("连接 MySql 数据库：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connection")]),t._v(" conn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DriverManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConnection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jdbc:mysql://host:port/database"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("连接 Oracle 数据库：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connection")]),t._v(" conn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DriverManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConnection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jdbc:oracle:thin:@host:port:database"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])])])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Connection")]),t._v(" "),s("strong",[t._v("接口")])]),t._v(" "),s("p",[t._v("Connection 是数据库的连接（会话）对象。对数据库的一切操作都是在这个连接基础之上进行的，我们可以通过该对象执行 sql 语句并返回结果。")]),t._v(" "),s("p",[s("strong",[t._v("常用方法")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("createStatement()")]),t._v(" "),s("p",[t._v("创建向数据库发送 sql 的 Statement 接口类型的对象。")])]),t._v(" "),s("li",[s("p",[t._v("preparedStatement(sql)")]),t._v(" "),s("p",[t._v("创建向数据库发送预编译 sql 的 PrepareSatement 接口类型的对象。")])]),t._v(" "),s("li",[s("p",[t._v("setAutoCommit(boolean autoCommit)")]),t._v(" "),s("p",[t._v("设置事务是否自动提交。")])]),t._v(" "),s("li",[s("p",[t._v("commit()")]),t._v(" "),s("p",[t._v("在链接上提交事务。")])]),t._v(" "),s("li",[s("p",[t._v("rollback()")]),t._v(" "),s("p",[t._v("在此链接上回滚事务。")])])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Statement")]),t._v(" "),s("strong",[t._v("接口")])]),t._v(" "),s("p",[t._v("用于执行静态 SQL 语句并返回它所生成结果的对象。 由 createStatement 创建，用于发送简单的 SQL 语句（不支持动态绑定）。")]),t._v(" "),s("p",[s("strong",[t._v("常用方法")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("execute(String sql)")]),t._v(" "),s("p",[t._v("执行参数中的 SQL，返回是否有结果集。")])]),t._v(" "),s("li",[s("p",[t._v("executeQuery(String sql)")]),t._v(" "),s("p",[t._v("运行 select 语句，返回 ResultSet 结果集。")])]),t._v(" "),s("li",[s("p",[t._v("executeUpdate(String sql)")]),t._v(" "),s("p",[t._v("运行 insert/update/delete 操作，返回更新的行数。")])]),t._v(" "),s("li",[s("p",[t._v("addBatch(String sql)")]),t._v(" "),s("p",[t._v("把多条 sql 语句放到一个批处理中。")])]),t._v(" "),s("li",[s("p",[t._v("executeBatch()")]),t._v(" "),s("p",[t._v("向数据库发送一批 sql 语句执行。")])])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("PreparedStatement接口")])]),t._v(" "),s("p",[t._v("继承自 Statement 接口，由 preparedStatement 创建，用于发送含有一个或多个参数的 SQL 语句。PreparedStatement 对象比 Statement 对象的效率更高，由于实现了动态的参数绑定，所以可以防止 SQL 注入，所以我们一般都使用 PreparedStatement。")]),t._v(" "),s("p",[s("strong",[t._v("常用方法")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("addBatch()")]),t._v(" "),s("p",[t._v("把当前 sql 语句加入到一个批处理中。")])]),t._v(" "),s("li",[s("p",[t._v("execute()")]),t._v(" "),s("p",[t._v("执行当前 SQL，返回个 boolean 值")])]),t._v(" "),s("li",[s("p",[t._v("executeUpdate()")]),t._v(" "),s("p",[t._v("运行 insert/update/delete 操作，返回更新的行数。")])]),t._v(" "),s("li",[s("p",[t._v("executeQuery()")]),t._v(" "),s("p",[t._v("执行当前的查询，返回一个结果集对象")])]),t._v(" "),s("li",[s("p",[t._v("setDate(int parameterIndex, Date x)")]),t._v(" "),s("p",[t._v("向当前SQL语句中的指定位置绑定一个java.sql.Date值")])]),t._v(" "),s("li",[s("p",[t._v("setDouble(int parameterIndex, double x)")]),t._v(" "),s("p",[t._v("向当前 SQL 语句中的指定位置绑定一个 double值")])]),t._v(" "),s("li",[s("p",[t._v("setFloat(int parameterIndex, float x)")]),t._v(" "),s("p",[t._v("向当前 SQL 语句中的指定位置绑定一个 float 值")])]),t._v(" "),s("li",[s("p",[t._v("setInt(int parameterIndex, int x)")]),t._v(" "),s("p",[t._v("向当前 SQL 语句中的指定位置绑定一个 int 值")])]),t._v(" "),s("li",[s("p",[t._v("setString(int parameterIndex, String x)")]),t._v(" "),s("p",[t._v("向当前 SQL 语句中的指定位置绑定一个 String 值")])])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("ResultSet")]),t._v(" "),s("strong",[t._v("接口")])]),t._v(" "),s("p",[t._v("ResultSet 用来暂时存放数据库查询操作获得结果集。")]),t._v(" "),s("p",[s("strong",[t._v("常用方法")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("getString(int index)、getString(String columnName)")]),t._v(" "),s("p",[t._v("获得在数据库里是 varchar、char 等类型的数据对象。")])]),t._v(" "),s("li",[s("p",[t._v("getFloat(int index)、getFloat(String columnName)")]),t._v(" "),s("p",[t._v("获得在数据库里是 Float 类型的数据对象。")])]),t._v(" "),s("li",[s("p",[t._v("getDate(int index)、getDate(String columnName)")]),t._v(" "),s("p",[t._v("获得在数据库里是 Date 类型的数据。")])]),t._v(" "),s("li",[s("p",[t._v("getBoolean(int index)、getBoolean(String columnName)")]),t._v(" "),s("p",[t._v("获得在数据库里是 Boolean 类型的数据。")])]),t._v(" "),s("li",[s("p",[t._v("getObject(int index)、getObject(String columnName)")]),t._v(" "),s("p",[t._v("获取在数据库里任意类型的数据。")])])])])]),t._v(" "),s("h3",{attrs:{id:"_3-jdbc的编写步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-jdbc的编写步骤"}},[t._v("#")]),t._v(" 3, JDBC的编写步骤")]),t._v(" "),s("p",[s("img",{attrs:{src:a(7639),alt:"1717581698693"}})]),t._v(" "),s("p",[t._v("ODBC("),s("strong",[t._v("Open Database Connectivity")]),t._v("，开放式数据库连接)，是微软在Windows平台下推出的。使用者在程序中只需要调用ODBC API，由 ODBC 驱动程序将调用转换成为对特定的数据库的调用请求。")]),t._v(" "),s("h3",{attrs:{id:"_4-jdbc快速入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-jdbc快速入门"}},[t._v("#")]),t._v(" 4, JDBC快速入门")]),t._v(" "),s("p",[s("strong",[t._v("环境：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("数据库Mysql5.7")])]),t._v(" "),s("li",[s("p",[t._v("数据库驱动版本5.1.48")])]),t._v(" "),s("li",[s("p",[t._v("数据库名db1")])])]),t._v(" "),s("p",[s("strong",[t._v("准备工作：")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("新建JavaProject工程")])]),t._v(" "),s("li",[s("p",[t._v("添加数据库驱动jar包")])]),t._v(" "),s("li",[s("p",[t._v("获取数据库连接对象")])])]),t._v(" "),s("p",[t._v("**下载数据库驱动:**https://downloads.mysql.com/archives/c-j/")]),t._v(" "),s("p",[t._v("代码：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ityls")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connection")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DriverManager")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Statement")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JDBCDemo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1, 注册驱动")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.mysql.jdbc.Driver"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2, 获取连接对象")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jdbc:mysql://127.0.0.1:3306/db1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" username "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" password "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connection")]),t._v(" conn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DriverManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConnection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3，定义SQL语句")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" sql "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"update account set money = 2000 where id = 1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4, 创建Statement对象")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Statement")]),t._v(" stmt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStatement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5, 执行sql语句")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("executeUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回的是受影响的函数")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 6, 释放资源")]),t._v("\n        stmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports},7635:function(t,s,a){t.exports=a.p+"assets/img/1717580850304.427c8b0f.png"},7636:function(t,s,a){t.exports=a.p+"assets/img/1717581410492.12f80520.png"},7637:function(t,s,a){t.exports=a.p+"assets/img/1717581527323.a0609018.png"},7638:function(t,s,a){t.exports=a.p+"assets/img/1717581541404.65274daf.png"},7639:function(t,s,a){t.exports=a.p+"assets/img/1717581698693.67955e4d.png"}}]);