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

HTTP 是一种客户端-服务器协议：请求由一个实体，即用户代理（或代表它的代理）发送。大多数情况下，用户代理是
Web 浏览器，但它可以是任何东西，例如，一个爬取
Web 以填充和维护搜索引擎索引的机器人

每个单独的请求都被发送到服务器，服务器处理它并提供一个称为响应的应答。在客户端和服务器之间有许多实体，统称为代理，例如，它们执行不同的操作并充当网关或缓存

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./overview/client-server-chain-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="./overview/client-server-chain-light.svg">
  <img alt="./client-server-chain" src="./overview/client-server-chain-light.svg">
</picture>

实际上，在浏览器和处理请求的服务器之间有更多的计算机：有路由器、调制解调器等等。由于 Web 的分层设计，这些都隐藏在网络和传输层中。HTTP
位于最上层应用层。尽管对于诊断网络问题很重要，但底层大多与 HTTP 的描述无关

### 客户端：用户代理

> Client: the user-agent

用户代理是代表用户行事的任何工具 。此角色主要由
Web 浏览器执行，但也可由工程师和
Web 开发人员用于调试其应用程序的程序执行

浏览器始终是发起请求的实体。它永远不是服务器（尽管多年来已经添加了一些机制来模拟服务器发起的消息）

为了显示网页，浏览器发送原始请求来获取代表该页面的
HTML 文档。然后它解析这个文件，发出与执行脚本、要显示的布局信息（CSS）以及页面中包含的子资源（通常是图像和视频）相对应的附加请求。然后，Web
浏览器结合这些资源来呈现完整的文档，即 Web
页面。浏览器执行的脚本可以在之后的阶段获取更多资源，并相应地更新网页

网页是超文本文档。这意味着显示内容的某些部分是链接，可以激活（通常通过单击鼠标）以获取新网页，从而允许用户引导他们的用户代理并在
Web 中导航。浏览器将这些指示转换为 HTTP 请求，并进一步解释 HTTP 响应以向用户呈现清晰的响应

### Web 服务器

> The Web server

通信通道的另一端是服务器，它根据客户端的请求提供文档。服务器实际上只显示为一台机器；但它实际上可能是一组共享负载的服务器（负载均衡），或者是一个复杂的软件，它询问其他计算机（如缓存、数据库服务器或电子商务服务器），完全或部分地按需生成文档

服务器不一定是单台机器，但可以在同一台机器上托管多个服务器软件实例。使用 HTTP/1.1 和 Host 标头，它们甚至可以共享相同的 IP
地址

### 代理

> Proxies

在 Web 浏览器和服务器之间，许多计算机和机器中继 HTTP
消息。由于 Web 堆栈的分层结构，其中大多数在传输、网络或物理级别运行，相对
HTTP
层而言就是透明的，并可能对性能产生重大影响。那些在应用层操作的通常被称为代理。这些可以是透明的，转发他们收到的请求而不以任何方式更改它们，或者是不透明的，在这种情况下，它们会在将请求传递给服务器之前以某种方式更改请求。代理可以执行许多功能：

- 缓存（缓存可以是公共的或私有的，如浏览器缓存）
- 过滤（如防病毒扫描或家长控制）
- 负载均衡（允许多台服务器服务不同的请求）
- 身份验证（控制对不同资源的访问）
- 日志记录（允许存储历史信息）

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
