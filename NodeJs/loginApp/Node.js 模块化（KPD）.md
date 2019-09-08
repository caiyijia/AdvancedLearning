# Node.js 模块化（KPD）

## 后端的规范和思想

### 分层

1. Web层（接收和发送Http请求，封装； web层、controller层）

2. 业务逻辑层（服务层，XXXService；）

   LoginController（接收参数，判断是否非法，传给服务层）

   LoginService （尝试获取这个用户的密码，进行比较）

3. DAO层： DataBase（DB）：存数据

   ​                业务： 对对象进行操作

   ​				如果要存储：对象 => 数据

   ​							读取：数据 => 对象

4. 持久层：存在磁盘上

   文件，数据库

   每层的命名：

   web层：LoginController（接收参数，判断是否非法，传给服务层）

   服务层：LoginService （尝试获取这个用户的密码，进行比较）

   DAO层：LoginDAO（从数据库获取数据，并转换为对象）

   Domain：User

   设计模式：单一职责原则

### 模块化

1. ES6、导入和导出； Es3、 5  缺点：缺少模块化概念

2. Js规范缺乏管理机制， Bootstrap， Jquery

   

   

## 基础的API



## 常用的框架



## Web项目

1. 接受Web请求
2. 处理业务逻辑
3. 文件操作
4. 数据库（Mysql， MongoDB）
5. 反向代理服务器（IP哈希，轮询）