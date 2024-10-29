## 学习后台

采用 vue3 全家桶（vite+pinia+element-plus+vue-router@4）

## 使用方式

### install

```
pnpm install
```

### run

```
pnpm run dev
```

### build

```
pnpm run build:prod
```

### ✨ 实现了

- 集成了 eslint
- 集成了 styleLint
- 使用 prettier 格式化代码
- 使用 husky 做代码提交校验
- 集成了 commitlint 规范提交信息
- 强制使用 pnpm 作为包管理工具
- 配置项目别名
- 配置环境变量
- 集成 element-plus 和自定义 Svg 图标
- 集成 vue-router
- 集成 pinia，使用 Pinia 管理用户信息
- 集成 axios
- 集成 Mock，用户相关的信息，使用 Token 做用户鉴权
- 进行全局组件的注册，封装了`SvgIcon`组件
- 添加 server 配置，可以请求真实接口
- 添加登陆页面样式
- 添加样式重置 less 文件
