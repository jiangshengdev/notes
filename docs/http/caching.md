# HTTP 缓存

> HTTP caching

## 概述

> Overview

客户端和缓存越近，响应速度就越快

源服务器不处理请求，减少服务器负载

## 缓存类型

> Types of caches

1. 私有缓存 **private caches**
2. 共享缓存 **shared caches**

### 私有缓存

> Private caches

通常是浏览器缓存。存储的响应不与其他客户端共享，可以存储该用户的个性化响应

> 只想将响应存储在私有缓存中，则必须指定`private`指令

```yaml
Cache-Control: private
```

::: warning 警告
VitePress 所用 Shiki 暂不支持 HTTP 格式高亮，本文使用与之接近的 yaml 格式进行高亮显示
:::

### 共享缓存

> Shared cache

位于客户端和服务器之间，存储可以在用户之间共享的响应

> 细分为

1. 代理缓存 **proxy caches**
2. 托管缓存 **managed caches**

#### 代理缓存

> Proxy caches

一些代理实现了缓存，以减少网络流量

HTTPS 客户端/服务器通信加密，代理缓存只能隧道响应，不能充当缓存

#### 托管缓存

> Managed caches

由服务开发人员明确部署。示例包括反向代理、CDN

> 指定以下内容来选择不使用私有缓存或代理缓存，使用自己的策略，只在托管缓存中进行缓存

```yaml
Cache-Control: no-store
```

## 启发式缓存

> Heuristic caching

即使没有`Cache-Control`，如果满足某些条件，响应也会被存储和重用

> 例如，响应最后一次更新在 1 年前

```yaml{4,5}
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Last-Modified: Mon, 22 Feb 2021 22:22:22 GMT

<!doctype html>
…
```

客户端存储此响应并重用它一段时间，规范建议继续缓存 10% 的已存储时间（此例为 0.1 年）

## 基于年龄的新鲜和陈旧

> Fresh and stale based on age

存储的 HTTP 响应有两种状态

1. 新鲜 **fresh**
2. 陈旧 **stale**

> 示例响应（604800 秒为一周）

```yaml{5}
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

```yaml{6}
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

> Expires or max-age

在 HTTP/1.0 中，新鲜度曾经由`Expires`标头指定

> `Expires`标头使用明确的时间来指定缓存的寿命

```yaml
Expires: Mon, 28 Feb 2022 22:22:22 GMT
```

`Expires`和`Cache-Control: max-age`同时提供，`max-age`为首选

## 变化

> Vary

响应的内容并不总是相同，即使 URL 相同。服务器的响应取决于`Accept`, `Accept-Language`, `Accept-Encoding`请求标头

> 在`Vary`标头中添加`Accept-Language`来根据语言单独缓存响应

```yaml
Vary: Accept-Language
```

## 验证

> Validation

陈旧的响应不会立即丢弃。通过询问源服务器将陈旧的响应转换为新鲜的响应

> 验证通过**条件请求**来完成

1. `If-Modified-Since`
2. `If-None-Match`

### If-Modified-Since

> 以下响应，持续时间为 1 小时

```yaml{5}
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Last-Modified: Tue, 22 Feb 2022 22:00:00 GMT
Cache-Control: max-age=3600

<!doctype html>
…
```

---

> 在 23:22:22，响应变得陈旧，无法重用缓存。客户端发送带有`If-Modified-Since`请求标头的请求，询问服务器自指定时间以来是否进行了任何更改

```yaml{4}
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-Modified-Since: Tue, 22 Feb 2022 22:00:00 GMT
```

---

如果内容自指定时间以来没有更改，服务器将响应`304 Not Modified`

> 由于此响应仅表示“没有变化”，因此没有响应主体

```yaml{1}
HTTP/1.1 304 Not Modified
Content-Type: text/html
Date: Tue, 22 Feb 2022 23:22:22 GMT
Last-Modified: Tue, 22 Feb 2022 22:00:00 GMT
Cache-Control: max-age=3600
```

收到该响应后，客户端将存储的陈旧响应恢复为新鲜的，并可以在剩余的 1 小时内重复使用

### ETag/If-None-Match

响应标头的`ETag`是服务器生成的任意值。例如哈希或版本号

> `index.html`资源的哈希值为`deadbeef`

```yaml{5}
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
ETag: "deadbeef"
Cache-Control: max-age=3600

<!doctype html>
…
```

---

> 如果该响应是陈旧的，则客户端获取缓存响应头`ETag`的值，并将其放入`If-None-Match`请求标头中，以询问服务器资源是否已被修改

```yaml{4}
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-None-Match: "deadbeef"
```

如果服务器为请求的资源确定的`ETag`标头值与请求中的`If-None-Match`值相同，则服务器将返回`304 Not Modified`

如果服务器确定请求的资源现在应该具有不同的`ETag`值，则服务器将响应`200 OK`和最新版本的资源

:::tip 注意
在缓存重新验证期间，如果`ETag`和`Last-Modified`都存在，则`ETag`优先

考虑到整个 HTTP 生态系统，最好同时提供`ETag`和`Last-Modified`
:::

### 强制重新验证

> Force Revalidation

## 不要缓存

> Don't cache

### 不要与他人分享

> Do not share with others

### 每次都提供最新内容

> Provide up-to-date content every time

### 处理过时的实现

> Dealing with outdated implementations

### no-store 失去了什么

> What's lost by no-store

## 重新加载和强制重新加载

> Reload and force reload

### 重新加载

> Reload

### 强制重新加载

> Force reload

### 避免重新验证

> Avoiding revalidation

## 删除存储的响应

> Deleting stored responses

## 请求折叠

> Request collapse

## 常见的缓存模式

> Common caching patterns

### 默认设置

> Default settings

### 缓存破坏

> Cache Busting

### 验证

> Validation

### 主要资源

> Main resources

### 关于托管缓存的更多信息

> More about managed caches
