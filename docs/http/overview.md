# HTTP 概述

> An overview of HTTP

HTTP 是一种获取 HTML
文档等资源的协议。它是 Web 上任何数据交换的基础，也是客户端-服务器协议，这意味着请求由接收者发起，通常是
Web 浏览器。使用获取的不同子文档（例如文本、布局描述、图像、视频、脚本等）组合重建完整的文档

客户端和服务器通过交换单个消息（而不是数据流）进行通信。客户端（通常是
Web 浏览器）发送的消息称为请求，服务器发送的作为应答的消息称为响应

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./overview/http-layers-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="./overview/http-layers-light.svg">
  <img alt="./http-layers" src="./overview/http-layers-light.svg">
</picture>

HTTP 设计于 1990 年代初，是一种随时间的推移而演变的可扩展协议。它是通过 
TCP 或 TLS 加密的 TCP
连接发送的应用层协议，尽管理论上可以使用任何可靠的传输协议。由于其可扩展性，它不仅用于获取超文本文档，还用于获取图像和视频，或将内容发布到服务器，例如
HTML 表单结果。HTTP 还可用于获取文档片段，以按需更新网页

## 基于 HTTP 系统的组件

> Components of HTTP-based systems

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./overview/client-server-chain-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="./overview/client-server-chain-light.svg">
  <img alt="./client-server-chain" src="./overview/client-server-chain-light.svg">
</picture>

### 客户端：用户代理

> Client: the user-agent

### Web 服务器

> The Web server

### 代理

> Proxies

## HTTP 的基本方面

> Basic aspects of HTTP

### HTTP 很简单

> HTTP is simple

### HTTP 是可扩展的

> HTTP is extensible

### HTTP 是无状态的，但不是无会话的

> HTTP is stateless, but not sessionless

### HTTP 和连接

> HTTP and connections

## HTTP 可以控制什么

> What can be controlled by HTTP

## HTTP 流

> HTTP flow

## HTTP 消息

> HTTP Messages

### 请求

> Requests

### 响应

> Responses

## 基于 HTTP 的 API

> APIs based on HTTP

## 总结

> Conclusion
