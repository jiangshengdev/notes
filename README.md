# notes

## 开发与构建

使用 Yarn Classic 1.22.x（与 `yarn.lock` 格式一致）：

```sh
yarn install --frozen-lockfile
yarn docs:dev
yarn docs:build
```

## Vite 安全升级

VitePress 1.6.4 仍声明依赖 Vite 5，因此通过 `package.json` 的
`resolutions` 将 Vite 固定为 6.4.5。Vite 5 已停止安全维护，6.4.5 包含
2026 年的相关修复，包括 [GHSA-8g5g-mxqh-grgj](https://github.com/vitejs/vite/security/advisories/GHSA-8g5g-mxqh-grgj)。

这是有意的跨主版本覆盖，Yarn 会提示超出 VitePress 的依赖范围。
升级后需检查文档构建、开发服务器和页面导航；等 VitePress 稳定版原生支持
受维护的 Vite 版本后，再评估移除此覆盖。安装依赖时不要绕过 Yarn，避免忽略
`resolutions` 和锁文件。
