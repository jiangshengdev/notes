# HTTP 缓存

## 概述

客户端和缓存越近，响应速度就越快

源服务器不需要处理请求，减少服务器负载

## 缓存类型

1. 私有缓存 **private caches**
2. 共享缓存 **shared caches**

### 私有缓存

通常是浏览器缓存

```
Cache-Control: private
```

### 共享缓存

位于客户端和服务器之间

> 细分为

1. 代理缓存 **proxy caches**
2. 托管缓存 **managed caches**

#### 代理缓存

过时的

```
Cache-Control: no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate
```

#### 托管缓存

反向代理、CDNs

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
