# 🗃 HTTP 缓存

> HTTP caching

## 📰 概述

> Overview

客户端和缓存越近，响应速度就越快

源服务器不处理请求，减少服务器负载

## 🗂 缓存类型

> Types of caches

1. **私有缓存**（**private caches**）
2. **共享缓存**（**shared caches**）

### 私有缓存

> Private caches

通常是浏览器缓存。存储的响应不与其他客户端共享，可以存储该用户的个性化响应

> 只想将响应存储在私有缓存中，则必须指定 `private` 指令

```yaml
Cache-Control: private
```

::: warning 警告
VitePress 所用 Shiki 暂不支持 HTTP 格式高亮，本文使用与之接近的
YAML 格式进行高亮显示
:::

### 共享缓存

> Shared cache

位于客户端和服务器之间，存储可以在用户之间共享的响应

> 细分为

1. **代理缓存**（**proxy caches**）
2. **托管缓存**（**managed caches**）

#### 代理缓存

> Proxy caches

一些代理实现了缓存，以减少网络流量

HTTPS 客户端/服务器通信加密，代理只能隧道传输响应，不能充当缓存

#### 托管缓存

> Managed caches

由服务开发人员明确部署。示例包括反向代理、CDN 和 service worker 与缓存 API 的组合

> 指定以下内容来选择不使用私有缓存或代理缓存，使用自己的策略，只在托管缓存中进行缓存

```yaml
Cache-Control: no-store
```

## 💡 启发式缓存

> Heuristic caching

即使没有 `Cache-Control`，如果满足某些条件，响应也会被存储和重用

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

客户端存储此响应并重用它一段时间，规范建议继续缓存
10% 的报文创建时间 `Date` 与资源修改时间 `Last-Modified` 之差（此例为 0.1 年）

## ⏳ 基于 age 的新鲜和过期

> Fresh and stale based on age

存储的 HTTP 响应有两种状态

1. **新鲜**（**fresh**）
2. **过期**（**stale**）

> 示例响应（604800 秒为 1 周）

```yaml{5}
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Cache-Control: max-age=604800

<!doctype html>
…
```

- 如果响应的 age _小于_ 1 周，则响应是新鲜的
- 如果响应的 age _超过_ 1 周，则响应是过期的

> 当响应存储在共享缓存中时，有必要通知客户端响应的 age 。如果共享缓存将响应存储了
> 1 天，则共享缓存将向后续客户端请求发送以下响应

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

在剩余的 518400 秒内是新鲜的，即响应 `max-age` 和 `Age` 的差值

## ⌛️ Expires 或 max-age

> Expires or max-age

在 HTTP/1.0 中，新鲜度曾经由 `Expires` 标头指定

> `Expires` 标头使用明确的时间来指定缓存的生命周期

```yaml
Expires: Mon, 28 Feb 2022 22:22:22 GMT
```

`Expires` 和 `Cache-Control: max-age` 同时提供，`max-age` 为首选

## 🪄 变化

> Vary

响应的内容并不总是相同，即使 URL 相同。服务器的响应取决于
`Accept`，`Accept-Language` 和 `Accept-Encoding` 请求标头

> 在 `Vary` 标头中添加 `Accept-Language` 来根据语言单独缓存响应

```yaml
Vary: Accept-Language
```

## ⚗️ 验证

> Validation

过期的响应不会立即丢弃。通过询问源服务器将过期的响应转换为新鲜的响应

> 验证通过**条件请求**来完成

1. `If-Modified-Since`
2. `If-None-Match`

### If-Modified-Since

> 以下响应，`max-age` 为 1 小时

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

> 在 23:22:22，响应变得过期，无法重用缓存。客户端发送带有
> `If-Modified-Since` 请求标头的请求，询问服务器自指定时间以来是否进行了任何更改

```yaml{4}
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-Modified-Since: Tue, 22 Feb 2022 22:00:00 GMT
```

---

如果内容自指定时间以来没有更改，服务器将响应 `304 Not Modified`

> 由于此响应仅表示「没有变化」，因此没有响应主体

```yaml{1}
HTTP/1.1 304 Not Modified
Content-Type: text/html
Date: Tue, 22 Feb 2022 23:22:22 GMT
Last-Modified: Tue, 22 Feb 2022 22:00:00 GMT
Cache-Control: max-age=3600
```

收到该响应后，客户端将存储的过期响应恢复为新鲜的，并可以在剩余的
1 小时内重复使用

### ETag/If-None-Match

`ETag` 响应标头是服务器生成的任意值。例如哈希或版本号

> `index.html` 资源的哈希值为 `deadbeef`

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

> 如果该响应是过期的，则客户端获取缓存 `ETag` 响应标头的值，并将其放入
> `If-None-Match` 请求标头中，以询问服务器资源是否已被修改

```yaml{4}
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
If-None-Match: "deadbeef"
```

如果服务器为请求的资源确定的 `ETag` 标头值与请求中的
`If-None-Match` 值相同，则服务器将返回 `304 Not Modified`

如果服务器确定请求的资源现在应该具有不同的
`ETag` 值，则服务器将响应 `200 OK` 和最新版本的资源

:::tip 注意
在缓存重新验证期间，如果 `ETag` 和 `Last-Modified` 都存在，则 `ETag` 优先

考虑到整个 HTTP 生态系统，最好同时提供 `ETag` 和 `Last-Modified`
:::

### 强制重新验证

> Force Revalidation

如果不希望响应被重用，而是始终从服务器获取最新内容，可以使用 `no-cache` 指令强制重新验证

通过将 `Cache-Control: no-cache` 与 `Last-Modified` 和
`ETag` 一起添加到响应中，如果请求的资源已更新，客户端将收到 `200 OK`
的响应，如果请求的资源未更新，则将收到 `304 Not Modified` 的响应

```yaml{7}
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Last-Modified: Tue, 22 Feb 2022 22:00:00 GMT
ETag: deadbeef
Cache-Control: no-cache

<!doctype html>
…
```

## 🚫 不要缓存

> Don't cache

`no-cache` 指令并不阻止存储响应，而是阻止在不重新验证的情况下重复使用响应

如果不希望响应存储在任何缓存中，需要使用 `no-store`

```yaml
Cache-Control: no-store
```

然而在实践中，「不要缓存」的要求相当于以下情况

- 出于隐私原因，不希望特定客户端以外的任何人存储响应
- 希望始终提供最新信息
- 不知道过时的实现会发生什么

在这一系列情况下，`no-store` 并不总是最合适的指令

### 不要与他人分享

> Do not share with others

使用 `private` 指令将个性化响应仅存储在特定客户端中，不会泄露缓存给任何其他用户

```yaml
Cache-Control: private
```

在这种情况下，即便使用了 `no-store`，也还必须提供 `private`

### 每次都提供最新内容

> Provide up-to-date content every time

如果特定的 URL 已经存储了旧响应，返回 `no-store` 并不能阻止旧的响应被重用

`no-cache` 指令将迫使客户端在重用任何存储的响应之前发送验证请求

```yaml
Cache-Control: no-cache
```

### 处理过时的实现

> Dealing with outdated implementations

建议使用 `no-cache` 替代过时的实现

如果担心共享缓存，通过添加 `private` 来防止意外缓存

```yaml
Cache-Control: no-cache, private
```

### no-store 失去了什么

> What's lost by no-store

不建议随意授予 `no-store`，因为其会导致失去 HTTP
和浏览器的许多功能，包括浏览器的后退/前进缓存

要想获得 Web 平台完整功能优势，最好结合使用 `no-cache` 和 `private`

## ✨ 重新加载和强制重新加载

> Reload and force reload

**重新加载**和**强制重新加载**操作是浏览器端执行验证的常见示例

### 重新加载

> Reload

为了从页面异常中恢复或更新到最新版本的资源，浏览器为用户提供了重新加载功能

> 浏览器重新加载时发送的 HTTP 请求的简化视图如下

```yaml{3-5}
GET / HTTP/1.1
Host: example.com
Cache-Control: max-age=0
If-None-Match: "deadbeef"
If-Modified-Since: Tue, 22 Feb 2022 20:20:20 GMT
```

请求中的 `max-age=0` 指令指定了中间存储的响应不会被重复使用

因此，请求被 `If-None-Match` 和 `If-Modified-Since` 验证

### 强制重新加载

> Force reload

> 浏览器强制重新加载期间的 HTTP 请求如下

```yaml{4}
GET / HTTP/1.1
Host: example.com
Pragma: no-cache
Cache-Control: no-cache
```

由于这不是一个包含条件请求的 `no-cache` 指令，可以确保将从源服务器获得
`200 OK` 响应

### 避免重新验证

> Avoiding revalidation

从不改变的内容应该使用缓存破坏（即在请求 URL
中包含版本号、哈希值等）来获得较长的 `max-age`

然而，当用户重新加载时，即使服务器知道内容是不可变的，浏览器也会发送重新验证请求

为了防止这种情况，可以使用 `immutable`
指令来明确表示不需要重新验证，因为内容从不改变

```yaml
Cache-Control: max-age=31536000, immutable
```

这可以防止在重新加载时进行不必要的重新验证

## 💥 删除存储的响应

> Deleting stored responses

基本上没有办法删除已经以较长的 `max-age` 存储的响应

> 以下响应被存储了

```yaml{4}
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Cache-Control: max-age=31536000

<!doctype html>
…
```

可能想要覆盖该响应，但是一旦存储响应，服务器就无法执行任何操作，因为存在缓存，不再有请求到达服务器

应该假设任何存储的响应都将保留直到 `max-age`
过期，除非用户手动执行重新加载、强制重新加载或清除历史记录操作

缓存减少了对服务器的访问，这意味着服务器失去了对该
URL 的控制。如果服务器不想失去对 URL 的控制，例如，在资源被频繁更新的情况下，应该添加
`no-cache`，以便服务器将始终接收请求并发送预期的响应

## 🪗 请求折叠

> Request collapse

共享缓存主要位于源服务器之前，旨在减少到源服务器的流量

如果多个相同的请求同时到达共享缓存，中间缓存（intermediate
cache）将代表自己将单个请求转发到源，然后源可以将结果重用于所有客户端。这称为**请求折叠**

当请求同时到达时，会发生请求折叠，即使响应中给出了
`max-age=0` 或 `no-cache`，它也会被重用

如果响应是针对特定用户个性化的，并且不希望它在折叠中共享，应该添加 `private` 指令

## 🖇 常见的缓存模式

> Common caching patterns

`Cache-Control` 规范中有很多指令，可能很难全部理解。但大多数网站都可以通过几种模式的组合来覆盖

### 默认设置

> Default settings

如上所述，缓存的默认行为（即没有 `Cache-Control`
的响应 ）不是简单的「不缓存」，而是根据所谓的「启发式缓存」进行隐式缓存

为了避免这种启发式缓存，最好显式地为所有响应提供默认的
`Cache-Control` 标头

为了确保默认情况下始终传输最新版本的资源，通常的做法是使默认的
`Cache-Control` 值包含 `no-cache`

```yaml
Cache-Control: no-cache
```

此外，如果服务实现了 cookie 或其他登录方式，并且内容是针对每个用户个性化的，则必须提供
`private`，以防止与其他用户共享

```yaml
Cache-Control: no-cache, private
```

### 缓存破坏

> Cache Busting

最适合缓存的资源是静态不可变文件，其内容永远不会改变。而对于确实发生变化的资源，通常的最佳做法是在每次内容发生变化时更改
URL，以便 URL 单元可以缓存更长的时间

考虑以下 HTML

```html
<script src="bundle.js"></script>
<link rel="stylesheet" href="build.css" />
<body>
  hello
</body>
```

在现代 Web 开发中，JavaScript 和 CSS
资源会随着开发的进展而频繁更新。此外，如果客户端使用的 JavaScript 和 CSS
资源的版本不同步，则显示将异常

所以上面的 HTML 很难使用 `max-age` 缓存 `bundle.js` 和 `bundle.css`

因此，可以使用包含版本号或哈希值的 URL 来提供 JavaScript 和 CSS

```text
# version in filename
bundle.v123.js

# version in query
bundle.js?v=123

# hash in filename
bundle.YsAIAAAA-QG4G6kCMAMBAAAAAAAoK.js

# hash in query
bundle.js?v=YsAIAAAA-QG4G6kCMAMBAAAAAAAoK
```

由于缓存依据 URL 来区分资源，因此如果在更新资源时
URL 发生了变化，缓存将不会再次被重用

### 验证

> Validation

不要忘记设置 `Last-Modified` 和 `ETag`
标头，这样在重新加载时就不必重新传输资源。为预构建的静态文件生成这些标头很容易

这里的 `ETag` 值可能是文件的哈希值

```yaml
# response for bundle.v123.js
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: YsAIAAAA-QG4G6kCMAMBAAAAAAAoK
```

此外，可以添加 `immutable` 以防止重新加载时的验证

组合结果如下所示

```yaml{5}
# bundle.v123.js
200 OK HTTP/1.1
Content-Type: application/javascript
Content-Length: 1024
Cache-Control: public, max-age=31536000, immutable
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: YsAIAAAA-QG4G6kCMAMBAAAAAAAoK
```

### 主要资源

> Main resources

与子资源不同，主要资源不能被缓存破坏，因为它们的
URL 不能像子资源 URL 那样被装饰

如果存储了以下 HTML 本身，即使在服务器端更新内容，也无法显示最新版本

```html
<script src="bundle.v123.js"></script>
<link rel="stylesheet" href="build.v123.css" />
<body>
  hello
</body>
```

对于这种情况，`no-cache` 将是合适的，而不是
`no-store`，因为我们并不是不想存储 HTML，而只是希望它始终是最新的

此外，添加 `Last-Modified` 和 `ETag`
将允许客户端发送条件请求，如果 HTML 没有更新，则可以返回
`304 Not Modified`

```yaml{4}
200 OK HTTP/1.1
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: AAPuIbAOdvAGEETbgAAAAAAABAAE

```

该设置适用于非个性化 HTML，但对于使用 cookie
进行个性化的响应（例如，在登录后），不要忘记同时指定 `private`

```yaml{4}
200 OK HTTP/1.1
Content-Type: text/html
Content-Length: 1024
Cache-Control: no-cache, private
Last-Modified: Tue, 22 Feb 2022 20:20:20 GMT
ETag: AAPuIbAOdvAGEETbgAAAAAAABAAE
Set-Cookie: __Host-SID=AHNtAyt3fvJrUL5g5tnGwER; Secure; Path=/; HttpOnly

```

这同样可用于 `favicon.ico`、`manifest.json`、`.well-known` 和
API 端点，其 URL 不能使用缓存破坏来更改

大多数 Web 内容都可以通过上述两种模式的组合来覆盖

### 关于托管缓存的更多信息

> More about managed caches

使用前面章节描述的方法，子资源可以通过缓存破坏来缓存很长时间，但主要资源（通常是
HTML 文档）不能

缓存主要资源很困难，因为仅使用 HTTP
缓存规范中的标准指令，在服务器上更新内容时无法主动删除缓存内容

然而，可以通过部署托管缓存（例如 CDN 或 service worker）来实现

例如，允许通过 API 或仪表板操作清除缓存的
CDN 将通过存储主要资源并仅在服务器上发生更新时显式清除相关缓存来实现更积极的缓存策略

如果 service worker 可以在服务器上发生更新时删除缓存
API 中的内容，它也可以这样做
