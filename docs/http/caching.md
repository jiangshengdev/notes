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

```
Cache-Control: private
```

### 共享缓存

位于客户端和服务器之间，存储可以在用户之间共享的响应

> 细分为

1. 代理缓存 **proxy caches**
2. 托管缓存 **managed caches**

#### 代理缓存

一些代理还实现了缓存以减少出网络的流量

HTTPS 客户端/服务器通信加密，代理缓存只能隧道响应而不能充当缓存

#### 托管缓存

由服务开发人员明确部署，示例包括反向代理、CDN

> 指定以下内容以退出私有缓存或代理缓存，使用自己的策略仅在托管缓存中进行缓存

```
Cache-Control: no-store
```

## 启发式缓存

尽可能多的缓存

> 响应

```
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Last-Modified: Tue, 22 Feb 2021 22:22:22 GMT

<!doctype html>
…
```

## 基于年龄的新鲜和陈旧

HTTP 响应有两种状态

1. 新鲜 **fresh**
2. 陈旧 **stale**

> 示例响应

```
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

> 共享缓存将响应存储一天，向后续客户端发送响应

```
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
Date: Tue, 22 Feb 2022 22:22:22 GMT
Cache-Control: max-age=604800
Age: 86400

<!doctype html>
…
```

## 过期或最大年龄

HTTP/1.0，新鲜度过去由`Expires`标头指定

```
Expires: Tue, 28 Feb 2022 22:22:22 GMT
```

`Expires`和`Cache-Control: max-age`同时提供，`max-age`定义为首选
