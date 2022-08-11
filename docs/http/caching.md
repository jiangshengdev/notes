# HTTP 缓存

## 概述

客户端和缓存越近，响应速度就越快

源服务器不处理请求，减少服务器负载

## 缓存类型

1. 私有缓存 **private caches**
2. 共享缓存 **shared caches**

### 私有缓存

通常是浏览器缓存。存储的响应不与其他客户端共享，可以存储该用户的个性化响应

> 只想将响应存储在私有缓存中，则必须指定`private`指令

```yaml
Cache-Control: private
```

::: warning
VitePress 所用 Shiki 暂不支持 HTTP 格式高亮，本文使用与之接近的 yaml 格式进行高亮显示
:::

### 共享缓存

位于客户端和服务器之间，存储可以在用户之间共享的响应

> 细分为

1. 代理缓存 **proxy caches**
2. 托管缓存 **managed caches**

#### 代理缓存

一些代理还实现了缓存以减少出网的流量

HTTPS 客户端/服务器通信加密，代理缓存只能隧道响应而不能充当缓存

#### 托管缓存

由服务开发人员明确部署。示例包括反向代理、CDN

> 指定以下内容以选择退出私有缓存或代理缓存，使用自己的策略仅在托管缓存中进行缓存

```yaml
Cache-Control: no-store
```

## 启发式缓存

即使没有`Cache-Control`，如果满足某些条件，响应也会被存储和重用

> 例如，响应最后一次更新在 1 年前

```yaml
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Last-Modified: Tue, 22 Feb 2021 22:22:22 GMT

<!doctype html>
…
```

客户端存储此响应并重用它一段时间，规范建议继续缓存 10% 的已存储时间（此例为 0.1 年）

## 基于年龄的新鲜和陈旧

存储的 HTTP 响应有两种状态

1. 新鲜 **fresh**
2. 陈旧 **stale**

> 示例响应（604800 秒为一周）

```yaml
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Cache-Control: max-age=604800

<!doctype html>
…
```

- 如果响应的年龄*小于*一周，则响应是新鲜的
- 如果响应的年龄*超过*一周，则响应是陈旧的

> 当响应存储在共享缓存中时，有必要通知客户端响应的年龄。如果共享缓存将响应存储了一天，则共享缓存将向后续客户端请求发送以下响应

```yaml
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Cache-Control: max-age=604800
Age: 86400

<!doctype html>
…
```

在剩余的 518400 秒内是新鲜的，即响应`max-age`和`Age`的差值

## 过期或最大年龄

在 HTTP/1.0 中，新鲜度通常由`Expires`标头指定

> `Expires`标头使用显式时间指定缓存的生命周期

```yaml
Expires: Tue, 28 Feb 2022 22:22:22 GMT
```

`Expires`和`Cache-Control: max-age`同时提供，`max-age`为首选
