import{_ as l,c as i,o as a,a as h}from"./app.0138724d.js";const r="/notes/assets/http-layers-dark.cbced624.svg",e="/notes/assets/http-layers-light.4537084a.svg",o="/notes/assets/client-server-chain-dark.0ffc9da2.svg",t="/notes/assets/client-server-chain-light.d2de36fa.svg",v=JSON.parse('{"title":"\u{1F4F0} HTTP \u6982\u8FF0","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u{1F9E9} \u57FA\u4E8E HTTP \u7CFB\u7EDF\u7684\u7EC4\u4EF6","slug":"\u{1F9E9}-\u57FA\u4E8E-http-\u7CFB\u7EDF\u7684\u7EC4\u4EF6","link":"#\u{1F9E9}-\u57FA\u4E8E-http-\u7CFB\u7EDF\u7684\u7EC4\u4EF6","children":[{"level":3,"title":"\u5BA2\u6237\u7AEF\uFF1A\u7528\u6237\u4EE3\u7406","slug":"\u5BA2\u6237\u7AEF\uFF1A\u7528\u6237\u4EE3\u7406","link":"#\u5BA2\u6237\u7AEF\uFF1A\u7528\u6237\u4EE3\u7406","children":[]},{"level":3,"title":"Web \u670D\u52A1\u5668","slug":"web-\u670D\u52A1\u5668","link":"#web-\u670D\u52A1\u5668","children":[]},{"level":3,"title":"\u4EE3\u7406","slug":"\u4EE3\u7406","link":"#\u4EE3\u7406","children":[]}]},{"level":2,"title":"HTTP \u7684\u57FA\u672C\u65B9\u9762","slug":"http-\u7684\u57FA\u672C\u65B9\u9762","link":"#http-\u7684\u57FA\u672C\u65B9\u9762","children":[{"level":3,"title":"HTTP \u5F88\u7B80\u5355","slug":"http-\u5F88\u7B80\u5355","link":"#http-\u5F88\u7B80\u5355","children":[]},{"level":3,"title":"HTTP \u662F\u53EF\u6269\u5C55\u7684","slug":"http-\u662F\u53EF\u6269\u5C55\u7684","link":"#http-\u662F\u53EF\u6269\u5C55\u7684","children":[]},{"level":3,"title":"HTTP \u662F\u65E0\u72B6\u6001\u7684\uFF0C\u4F46\u4E0D\u662F\u65E0\u4F1A\u8BDD\u7684","slug":"http-\u662F\u65E0\u72B6\u6001\u7684\uFF0C\u4F46\u4E0D\u662F\u65E0\u4F1A\u8BDD\u7684","link":"#http-\u662F\u65E0\u72B6\u6001\u7684\uFF0C\u4F46\u4E0D\u662F\u65E0\u4F1A\u8BDD\u7684","children":[]},{"level":3,"title":"HTTP \u548C\u8FDE\u63A5","slug":"http-\u548C\u8FDE\u63A5","link":"#http-\u548C\u8FDE\u63A5","children":[]}]},{"level":2,"title":"\u{1F579} HTTP \u53EF\u4EE5\u63A7\u5236\u4EC0\u4E48","slug":"\u{1F579}-http-\u53EF\u4EE5\u63A7\u5236\u4EC0\u4E48","link":"#\u{1F579}-http-\u53EF\u4EE5\u63A7\u5236\u4EC0\u4E48","children":[]},{"level":2,"title":"\u26F2\uFE0F HTTP \u6D41","slug":"\u26F2\uFE0F-http-\u6D41","link":"#\u26F2\uFE0F-http-\u6D41","children":[]},{"level":2,"title":"\u{1F4DF} HTTP \u6D88\u606F","slug":"\u{1F4DF}-http-\u6D88\u606F","link":"#\u{1F4DF}-http-\u6D88\u606F","children":[{"level":3,"title":"\u8BF7\u6C42","slug":"\u8BF7\u6C42","link":"#\u8BF7\u6C42","children":[]},{"level":3,"title":"\u54CD\u5E94","slug":"\u54CD\u5E94","link":"#\u54CD\u5E94","children":[]}]},{"level":2,"title":"\u57FA\u4E8E HTTP \u7684 API","slug":"\u57FA\u4E8E-http-\u7684-api","link":"#\u57FA\u4E8E-http-\u7684-api","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"http/overview.md"}'),s={name:"http/overview.md"},T=r,p=e,c=o,n=t,d=h('<h1 id="\u{1F4F0}-http-\u6982\u8FF0" tabindex="-1">\u{1F4F0} HTTP \u6982\u8FF0 <a class="header-anchor" href="#\u{1F4F0}-http-\u6982\u8FF0" aria-hidden="true">#</a></h1><blockquote><p>An overview of HTTP</p></blockquote><p><strong>HTTP</strong> \u662F\u4E00\u79CD\u83B7\u53D6 HTML \u6587\u6863\u7B49\u8D44\u6E90\u7684\u534F\u8BAE\u3002\u5B83\u662F Web \u4E0A\u4EFB\u4F55\u6570\u636E\u4EA4\u6362\u7684\u57FA\u7840\uFF0C\u4E5F\u662F\u4E00\u79CD\u5BA2\u6237\u7AEF-\u670D\u52A1\u5668\u534F\u8BAE\uFF0C\u8FD9\u610F\u5473\u7740\u8BF7\u6C42\u7531\u63A5\u6536\u65B9\u53D1\u8D77\uFF0C\u901A\u5E38\u662F Web \u6D4F\u89C8\u5668\u3002\u4F7F\u7528\u83B7\u53D6\u7684\u5404\u79CD\u5B50\u6587\u6863\uFF08\u4F8B\u5982\u6587\u672C\u3001\u5E03\u5C40\u63CF\u8FF0\u3001\u56FE\u50CF\u3001\u89C6\u9891\u3001\u811A\u672C\u7B49\uFF09\u91CD\u5EFA\u5B8C\u6574\u7684\u6587\u6863</p><p>\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u901A\u8FC7\u4EA4\u6362\u5355\u72EC\u7684\u6D88\u606F\uFF08\u800C\u4E0D\u662F\u6570\u636E\u6D41\uFF09\u8FDB\u884C\u901A\u4FE1\u3002\u5BA2\u6237\u7AEF\uFF08\u901A\u5E38\u662F Web \u6D4F\u89C8\u5668\uFF09\u53D1\u9001\u7684\u6D88\u606F\u79F0\u4E3A\u8BF7\u6C42\uFF0C\u670D\u52A1\u5668\u53D1\u9001\u7684\u4F5C\u4E3A\u5E94\u7B54\u7684\u6D88\u606F\u79F0\u4E3A\u54CD\u5E94</p><picture><source media="(prefers-color-scheme: dark)" srcset="'+T+'"><source media="(prefers-color-scheme: light)" srcset="'+p+'"><img alt="./http-layers" src="'+e+'"></picture><p>HTTP \u8BBE\u8BA1\u4E8E 1990 \u5E74\u4EE3\u521D\uFF0C\u662F\u4E00\u79CD\u968F\u65F6\u95F4\u7684\u63A8\u79FB\u800C\u6F14\u53D8\u7684\u53EF\u6269\u5C55\u534F\u8BAE\u3002\u5B83\u662F\u901A\u8FC7 TCP \u6216 TLS \u52A0\u5BC6\u7684 TCP \u8FDE\u63A5\u53D1\u9001\u7684\u5E94\u7528\u5C42\u534F\u8BAE\uFF0C\u5C3D\u7BA1\u7406\u8BBA\u4E0A\u53EF\u4EE5\u4F7F\u7528\u4EFB\u4F55\u53EF\u9760\u7684\u4F20\u8F93\u534F\u8BAE\u3002\u7531\u4E8E\u5176\u53EF\u6269\u5C55\u6027\uFF0C\u5B83\u4E0D\u4EC5\u7528\u4E8E\u83B7\u53D6\u8D85\u6587\u672C\u6587\u6863\uFF0C\u8FD8\u7528\u4E8E\u83B7\u53D6\u56FE\u50CF\u548C\u89C6\u9891\uFF0C\u6216\u5C06\u5185\u5BB9\u53D1\u5E03\u5230\u670D\u52A1\u5668\uFF0C\u4F8B\u5982 HTML \u8868\u5355\u7ED3\u679C\u3002HTTP \u8FD8\u53EF\u7528\u4E8E\u83B7\u53D6\u6587\u6863\u7247\u6BB5\uFF0C\u4EE5\u6309\u9700\u66F4\u65B0 Web \u9875\u9762</p><h2 id="\u{1F9E9}-\u57FA\u4E8E-http-\u7CFB\u7EDF\u7684\u7EC4\u4EF6" tabindex="-1">\u{1F9E9} \u57FA\u4E8E HTTP \u7CFB\u7EDF\u7684\u7EC4\u4EF6 <a class="header-anchor" href="#\u{1F9E9}-\u57FA\u4E8E-http-\u7CFB\u7EDF\u7684\u7EC4\u4EF6" aria-hidden="true">#</a></h2><blockquote><p>Components of HTTP-based systems</p></blockquote><p>HTTP \u662F\u4E00\u79CD\u5BA2\u6237\u7AEF-\u670D\u52A1\u5668\u534F\u8BAE\uFF1A\u8BF7\u6C42\u7531\u4E00\u4E2A\u5B9E\u4F53\uFF0C\u5373\u7528\u6237\u4EE3\u7406\uFF08\u6216\u4EE3\u8868\u5B83\u7684\u4EE3\u7406\uFF09\u53D1\u9001\u3002\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u7528\u6237\u4EE3\u7406\u662F Web \u6D4F\u89C8\u5668\uFF0C\u4F46\u5B83\u53EF\u4EE5\u662F\u4EFB\u4F55\u4E1C\u897F\uFF0C\u4F8B\u5982\uFF0C\u4E00\u4E2A\u722C\u53D6 Web \u4EE5\u586B\u5145\u548C\u7EF4\u62A4\u641C\u7D22\u5F15\u64CE\u7D22\u5F15\u7684\u673A\u5668\u4EBA</p><p>\u6BCF\u4E2A\u5355\u72EC\u7684\u8BF7\u6C42\u90FD\u88AB\u53D1\u9001\u5230\u670D\u52A1\u5668\uFF0C\u670D\u52A1\u5668\u5904\u7406\u5B83\u5E76\u63D0\u4F9B\u4E00\u4E2A\u79F0\u4E3A\u54CD\u5E94\u7684\u5E94\u7B54\u3002\u5728\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u6709\u8BB8\u591A\u5B9E\u4F53\uFF0C\u7EDF\u79F0\u4E3A\u4EE3\u7406\uFF0C\u5B83\u4EEC\u6267\u884C\u4E0D\u540C\u7684\u64CD\u4F5C\uFF0C\u4F8B\u5982\u5145\u5F53\u7F51\u5173\u6216\u7F13\u5B58</p><picture><source media="(prefers-color-scheme: dark)" srcset="'+c+'"><source media="(prefers-color-scheme: light)" srcset="'+n+'"><img alt="./client-server-chain" src="'+t+'"></picture><p>\u5B9E\u9645\u4E0A\uFF0C\u5728\u6D4F\u89C8\u5668\u548C\u5904\u7406\u8BF7\u6C42\u7684\u670D\u52A1\u5668\u4E4B\u95F4\u6709\u66F4\u591A\u7684\u8BA1\u7B97\u673A\uFF1A\u6709\u8DEF\u7531\u5668\u3001\u8C03\u5236\u89E3\u8C03\u5668\u7B49\u3002\u5F97\u76CA\u4E8E Web \u7684\u5206\u5C42\u8BBE\u8BA1\uFF0C\u8FD9\u4E9B\u90FD\u9690\u85CF\u5728\u7F51\u7EDC\u5C42\u548C\u4F20\u8F93\u5C42\u4E2D\u3002HTTP \u4F4D\u4E8E\u6700\u4E0A\u5C42\u7684\u5E94\u7528\u5C42\u3002\u5C3D\u7BA1\u5BF9\u4E8E\u8BCA\u65AD\u7F51\u7EDC\u95EE\u9898\u5F88\u91CD\u8981\uFF0C\u4F46\u4E0B\u5C42\u5927\u591A\u4E0E HTTP \u7684\u63CF\u8FF0\u65E0\u5173</p><h3 id="\u5BA2\u6237\u7AEF\uFF1A\u7528\u6237\u4EE3\u7406" tabindex="-1">\u5BA2\u6237\u7AEF\uFF1A\u7528\u6237\u4EE3\u7406 <a class="header-anchor" href="#\u5BA2\u6237\u7AEF\uFF1A\u7528\u6237\u4EE3\u7406" aria-hidden="true">#</a></h3><blockquote><p>Client: the user-agent</p></blockquote><p>\u7528\u6237\u4EE3\u7406\u662F\u4EE3\u8868\u7528\u6237\u884C\u4E8B\u7684\u4EFB\u4F55\u5DE5\u5177 \u3002\u6B64\u89D2\u8272\u4E3B\u8981\u7531 Web \u6D4F\u89C8\u5668\u6267\u884C\uFF0C\u4F46\u4E5F\u53EF\u80FD\u662F\u5DE5\u7A0B\u5E08\u548C Web \u5F00\u53D1\u4EBA\u5458\u7528\u4E8E\u8C03\u8BD5\u5E94\u7528\u7684\u7A0B\u5E8F</p><p>\u6D4F\u89C8\u5668<strong>\u59CB\u7EC8</strong>\u662F\u53D1\u8D77\u8BF7\u6C42\u7684\u5B9E\u4F53\u3002\u5B83\u6C38\u8FDC\u4E0D\u662F\u670D\u52A1\u5668\uFF08\u5C3D\u7BA1\u8FD9\u4E9B\u5E74\u6765\u5DF2\u7ECF\u6DFB\u52A0\u4E86\u4E00\u4E9B\u673A\u5236\u6765\u6A21\u62DF\u670D\u52A1\u5668\u53D1\u8D77\u7684\u6D88\u606F\uFF09</p><p>\u4E3A\u4E86\u663E\u793A Web \u9875\u9762\uFF0C\u6D4F\u89C8\u5668\u53D1\u9001\u539F\u59CB\u8BF7\u6C42\u6765\u83B7\u53D6\u4EE3\u8868\u8BE5\u9875\u9762\u7684 HTML \u6587\u6863\u3002\u7136\u540E\u5B83\u89E3\u6790\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u53D1\u51FA\u4E0E\u6267\u884C\u811A\u672C\u3001\u663E\u793A\u5E03\u5C40\u4FE1\u606F\uFF08CSS\uFF09\u4EE5\u53CA\u9875\u9762\u4E2D\u5305\u542B\u7684\u5B50\u8D44\u6E90\uFF08\u901A\u5E38\u662F\u56FE\u50CF\u548C\u89C6\u9891\uFF09\u76F8\u5BF9\u5E94\u7684\u9644\u52A0\u8BF7\u6C42\u3002\u7136\u540E\uFF0CWeb \u6D4F\u89C8\u5668\u7ED3\u5408\u8FD9\u4E9B\u8D44\u6E90\u6765\u5448\u73B0\u5B8C\u6574\u7684\u6587\u6863\uFF0C\u5373 Web \u9875\u9762\u3002\u6D4F\u89C8\u5668\u6267\u884C\u7684\u811A\u672C\u53EF\u4EE5\u5728\u4E4B\u540E\u7684\u9636\u6BB5\u83B7\u53D6\u66F4\u591A\u8D44\u6E90\uFF0C\u5E76\u76F8\u5E94\u5730\u66F4\u65B0 Web \u9875\u9762</p><p>Web \u9875\u9762\u662F\u8D85\u6587\u672C\u6587\u6863\u3002\u8FD9\u610F\u5473\u7740\u663E\u793A\u5185\u5BB9\u7684\u67D0\u4E9B\u90E8\u5206\u662F\u94FE\u63A5\uFF0C\u53EF\u4EE5\u6FC0\u6D3B\uFF08\u901A\u5E38\u901A\u8FC7\u5355\u51FB\u9F20\u6807\uFF09\u4EE5\u83B7\u53D6\u65B0 Web \u9875\u9762\uFF0C\u4ECE\u800C\u5141\u8BB8\u7528\u6237\u6307\u793A\u4ED6\u4EEC\u7684\u7528\u6237\u4EE3\u7406\u5E76\u5728 Web \u4E2D\u5BFC\u822A\u3002\u6D4F\u89C8\u5668\u5C06\u8FD9\u4E9B\u6307\u793A\u8F6C\u6362\u4E3A HTTP \u8BF7\u6C42\uFF0C\u5E76\u8FDB\u4E00\u6B65\u89E3\u91CA HTTP \u54CD\u5E94\u4EE5\u5411\u7528\u6237\u5448\u73B0\u6E05\u6670\u7684\u54CD\u5E94</p><h3 id="web-\u670D\u52A1\u5668" tabindex="-1">Web \u670D\u52A1\u5668 <a class="header-anchor" href="#web-\u670D\u52A1\u5668" aria-hidden="true">#</a></h3><blockquote><p>The Web server</p></blockquote><p>\u901A\u4FE1\u901A\u9053\u7684\u53E6\u4E00\u7AEF\u662F\u670D\u52A1\u5668\uFF0C\u5B83\u6839\u636E\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u63D0\u4F9B\u6587\u6863\u3002\u670D\u52A1\u5668\u865A\u62DF\u5730\u53EA\u663E\u793A\u4E3A\u4E00\u53F0\u673A\u5668\uFF1B\u4F46\u5B83\u5B9E\u9645\u4E0A\u53EF\u80FD\u662F\u4E00\u7EC4\u5171\u4EAB\u8D1F\u8F7D\u7684\u670D\u52A1\u5668\uFF08\u8D1F\u8F7D\u5747\u8861\uFF09\uFF0C\u6216\u8005\u662F\u4E00\u4E2A\u590D\u6742\u7684\u8F6F\u4EF6\uFF0C\u5B83\u8BE2\u95EE\u5176\u4ED6\u8BA1\u7B97\u673A\uFF08\u5982\u7F13\u5B58\u3001\u6570\u636E\u5E93\u670D\u52A1\u5668\u6216\u7535\u5B50\u5546\u52A1\u670D\u52A1\u5668\uFF09\uFF0C\u5B8C\u5168\u6216\u90E8\u5206\u5730\u6309\u9700\u751F\u6210\u6587\u6863</p><p>\u670D\u52A1\u5668\u4E0D\u4E00\u5B9A\u662F\u6574\u53F0\u673A\u5668\uFF0C\u800C\u662F\u53EF\u4EE5\u5728\u540C\u4E00\u53F0\u673A\u5668\u4E0A\u6258\u7BA1\u591A\u4E2A\u670D\u52A1\u5668\u8F6F\u4EF6\u5B9E\u4F8B\u3002\u4F7F\u7528 HTTP/1.1 \u548C Host \u6807\u5934\uFF0C\u5B83\u4EEC\u751A\u81F3\u53EF\u4EE5\u5171\u4EAB\u76F8\u540C\u7684 IP \u5730\u5740</p><h3 id="\u4EE3\u7406" tabindex="-1">\u4EE3\u7406 <a class="header-anchor" href="#\u4EE3\u7406" aria-hidden="true">#</a></h3><blockquote><p>Proxies</p></blockquote><p>\u5728 Web \u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u4E4B\u95F4\uFF0C\u8BB8\u591A\u8BA1\u7B97\u673A\u548C\u673A\u5668\u4E2D\u7EE7 HTTP \u6D88\u606F\u3002\u7531\u4E8E Web \u5806\u6808\u7684\u5206\u5C42\u7ED3\u6784\uFF0C\u5176\u4E2D\u5927\u591A\u6570\u5728\u4F20\u8F93\u3001\u7F51\u7EDC\u6216\u7269\u7406\u7EA7\u522B\u8FD0\u884C\uFF0C\u76F8\u5BF9 HTTP \u5C42\u800C\u8A00\u5C31\u662F\u900F\u660E\u7684\uFF0C\u5E76\u6709\u53EF\u80FD\u5BF9\u6027\u80FD\u4EA7\u751F\u91CD\u5927\u5F71\u54CD\u3002\u90A3\u4E9B\u5728\u5E94\u7528\u5C42\u64CD\u4F5C\u7684\u901A\u5E38\u88AB\u79F0\u4E3A\u4EE3\u7406\u3002\u8FD9\u4E9B\u53EF\u4EE5\u662F\u900F\u660E\u7684\uFF0C\u8F6C\u53D1\u4ED6\u4EEC\u6536\u5230\u7684\u8BF7\u6C42\u800C\u4E0D\u4EE5\u4EFB\u4F55\u65B9\u5F0F\u66F4\u6539\u5B83\u4EEC\uFF0C\u6216\u8005\u662F\u4E0D\u900F\u660E\u7684\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5B83\u4EEC\u4F1A\u5728\u5C06\u8BF7\u6C42\u4F20\u9012\u7ED9\u670D\u52A1\u5668\u4E4B\u524D\u4EE5\u67D0\u79CD\u65B9\u5F0F\u66F4\u6539\u8BF7\u6C42\u3002\u4EE3\u7406\u53EF\u4EE5\u6267\u884C\u8BB8\u591A\u529F\u80FD\uFF1A</p><ul><li>\u7F13\u5B58\uFF08\u7F13\u5B58\u53EF\u4EE5\u662F\u516C\u5171\u7684\u6216\u79C1\u6709\u7684\uFF0C\u5982\u6D4F\u89C8\u5668\u7F13\u5B58\uFF09</li><li>\u8FC7\u6EE4\uFF08\u5982\u9632\u75C5\u6BD2\u626B\u63CF\u6216\u5BB6\u957F\u63A7\u5236\uFF09</li><li>\u8D1F\u8F7D\u5747\u8861\uFF08\u5141\u8BB8\u591A\u53F0\u670D\u52A1\u5668\u670D\u52A1\u4E0D\u540C\u7684\u8BF7\u6C42\uFF09</li><li>\u8EAB\u4EFD\u9A8C\u8BC1\uFF08\u63A7\u5236\u5BF9\u4E0D\u540C\u8D44\u6E90\u7684\u8BBF\u95EE\uFF09</li><li>\u65E5\u5FD7\u8BB0\u5F55\uFF08\u5141\u8BB8\u5B58\u50A8\u5386\u53F2\u4FE1\u606F\uFF09</li></ul><h2 id="http-\u7684\u57FA\u672C\u65B9\u9762" tabindex="-1">HTTP \u7684\u57FA\u672C\u65B9\u9762 <a class="header-anchor" href="#http-\u7684\u57FA\u672C\u65B9\u9762" aria-hidden="true">#</a></h2><blockquote><p>Basic aspects of HTTP</p></blockquote><h3 id="http-\u5F88\u7B80\u5355" tabindex="-1">HTTP \u5F88\u7B80\u5355 <a class="header-anchor" href="#http-\u5F88\u7B80\u5355" aria-hidden="true">#</a></h3><blockquote><p>HTTP is simple</p></blockquote><p>HTTP \u901A\u5E38\u88AB\u8BBE\u8BA1\u4E3A\u7B80\u5355\u6613\u8BFB\uFF0C\u5373\u4F7F HTTP/2 \u901A\u8FC7\u5C06 HTTP \u6D88\u606F\u5C01\u88C5\u5230\u5E27\u4E2D\u5F15\u5165\u4E86\u989D\u5916\u7684\u590D\u6742\u6027\u3002HTTP \u6D88\u606F\u53EF\u4EE5\u88AB\u9605\u8BFB\u548C\u7406\u89E3\uFF0C\u4E3A\u5F00\u53D1\u4EBA\u5458\u63D0\u4F9B\u4E86\u66F4\u5BB9\u6613\u7684\u6D4B\u8BD5\uFF0C\u5E76\u4E3A\u521D\u5B66\u8005\u964D\u4F4E\u4E86\u590D\u6742\u6027</p><h3 id="http-\u662F\u53EF\u6269\u5C55\u7684" tabindex="-1">HTTP \u662F\u53EF\u6269\u5C55\u7684 <a class="header-anchor" href="#http-\u662F\u53EF\u6269\u5C55\u7684" aria-hidden="true">#</a></h3><blockquote><p>HTTP is extensible</p></blockquote><p>\u5728 HTTP/1.0 \u4E2D\u5F15\u5165\u7684 HTTP \u6807\u5934\u4F7F\u8BE5\u534F\u8BAE\u6613\u4E8E\u6269\u5C55\u548C\u5B9E\u9A8C\u3002\u751A\u81F3\u53EF\u4EE5\u901A\u8FC7\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u5173\u4E8E\u65B0\u6807\u5934\u8BED\u4E49\u7684\u7B80\u5355\u534F\u8BAE\u6765\u5F15\u5165\u65B0\u529F\u80FD</p><h3 id="http-\u662F\u65E0\u72B6\u6001\u7684\uFF0C\u4F46\u4E0D\u662F\u65E0\u4F1A\u8BDD\u7684" tabindex="-1">HTTP \u662F\u65E0\u72B6\u6001\u7684\uFF0C\u4F46\u4E0D\u662F\u65E0\u4F1A\u8BDD\u7684 <a class="header-anchor" href="#http-\u662F\u65E0\u72B6\u6001\u7684\uFF0C\u4F46\u4E0D\u662F\u65E0\u4F1A\u8BDD\u7684" aria-hidden="true">#</a></h3><blockquote><p>HTTP is stateless, but not sessionless</p></blockquote><p>HTTP \u662F\u65E0\u72B6\u6001\u7684\uFF1A\u5728\u540C\u4E00\u8FDE\u63A5\u4E0A\u8FDE\u7EED\u6267\u884C\u7684\u4E24\u4E2A\u8BF7\u6C42\u4E4B\u95F4\u6CA1\u6709\u5173\u7CFB\u3002\u5BF9\u4E8E\u8BD5\u56FE\u8FDE\u8D2F\u5730\u4E0E\u67D0\u4E9B\u9875\u9762\u4EA4\u4E92\u7684\u7528\u6237\u6765\u8BF4\uFF0C\u8FD9\u4F1A\u7ACB\u5373\u6210\u4E3A\u95EE\u9898\uFF0C\u4F8B\u5982\uFF0C\u4F7F\u7528\u7535\u5B50\u5546\u52A1\u8D2D\u7269\u8F66\u3002\u4F46\u662F\uFF0C\u867D\u7136 HTTP \u672C\u8EAB\u7684\u6838\u5FC3\u662F\u65E0\u72B6\u6001\u7684\uFF0C\u4F46 HTTP Cookie \u5141\u8BB8\u4F7F\u7528\u6709\u72B6\u6001\u4F1A\u8BDD\u3002\u4F7F\u7528\u6807\u5934\u53EF\u6269\u5C55\u6027\uFF0CHTTP Cookie \u88AB\u6DFB\u52A0\u5230\u5DE5\u4F5C\u6D41\u4E2D\uFF0C\u5141\u8BB8\u5728\u6BCF\u4E2A HTTP \u8BF7\u6C42\u4E0A\u521B\u5EFA\u4F1A\u8BDD\u4EE5\u5171\u4EAB\u76F8\u540C\u7684\u4E0A\u4E0B\u6587\u6216\u76F8\u540C\u7684\u72B6\u6001</p><h3 id="http-\u548C\u8FDE\u63A5" tabindex="-1">HTTP \u548C\u8FDE\u63A5 <a class="header-anchor" href="#http-\u548C\u8FDE\u63A5" aria-hidden="true">#</a></h3><blockquote><p>HTTP and connections</p></blockquote><p>\u8FDE\u63A5\u662F\u5728\u4F20\u8F93\u5C42\u63A7\u5236\u7684\uFF0C\u56E0\u6B64\u57FA\u672C\u4E0A\u8D85\u51FA\u4E86 HTTP \u7684\u8303\u56F4\u3002HTTP \u4E0D\u8981\u6C42\u5E95\u5C42\u4F20\u8F93\u534F\u8BAE\u662F\u57FA\u4E8E\u8FDE\u63A5\u7684\uFF1B\u5B83\u53EA\u8981\u6C42\u5B83\u662F\u53EF\u9760\u7684\uFF0C\u6216\u8005\u4E0D\u4E22\u5931\u6D88\u606F\uFF08\u81F3\u5C11\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u4F1A\u51FA\u73B0\u9519\u8BEF\uFF09\u3002\u5728 Internet \u4E0A\u6700\u5E38\u89C1\u7684\u4E24\u79CD\u4F20\u8F93\u534F\u8BAE\u4E2D\uFF0CTCP \u662F\u53EF\u9760\u7684\uFF0C\u800C UDP \u5219\u4E0D\u662F\u3002\u56E0\u6B64\uFF0CHTTP \u4F9D\u8D56\u4E8E\u57FA\u4E8E\u8FDE\u63A5\u7684 TCP \u6807\u51C6</p><p>\u5728\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u53EF\u4EE5\u4EA4\u6362 HTTP \u8BF7\u6C42/\u54CD\u5E94\u5BF9\u4E4B\u524D\uFF0C\u5B83\u4EEC\u5FC5\u987B\u5EFA\u7ACB TCP \u8FDE\u63A5\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u9700\u8981\u591A\u6B21\u5F80\u8FD4\u3002HTTP/1.0 \u7684\u9ED8\u8BA4\u884C\u4E3A\u662F\u4E3A\u6BCF\u4E2A HTTP \u8BF7\u6C42/\u54CD\u5E94\u5BF9\u6253\u5F00\u4E00\u4E2A\u5355\u72EC\u7684 TCP \u8FDE\u63A5\u3002\u5F53\u591A\u4E2A\u8BF7\u6C42\u8FDE\u7EED\u53D1\u9001\u65F6\uFF0C\u8FD9\u6BD4\u5171\u4EAB\u5355\u4E2A TCP \u8FDE\u63A5\u6548\u7387\u4F4E</p><p>\u4E3A\u4E86\u7F13\u89E3\u8FD9\u4E00\u7F3A\u9677\uFF0CHTTP/1.1 \u5F15\u5165\u4E86\u6D41\u6C34\u7EBF\uFF08\u4E8B\u5B9E\u8BC1\u660E\u5F88\u96BE\u5B9E\u73B0\uFF09\u548C\u6301\u4E45\u8FDE\u63A5\uFF1A\u5E95\u5C42 TCP \u8FDE\u63A5\u53EF\u4EE5\u4F7F\u7528 Connection \u6807\u5934\u90E8\u5206\u63A7\u5236\u3002HTTP/2 \u66F4\u8FDB\u4E00\u6B65\uFF0C\u901A\u8FC7\u5728\u5355\u4E2A\u8FDE\u63A5\u4E0A\u591A\u8DEF\u590D\u7528\u6D88\u606F\uFF0C\u5E2E\u52A9\u4FDD\u6301\u8FDE\u63A5\u9884\u70ED\u548C\u6548\u7387</p><h2 id="\u{1F579}-http-\u53EF\u4EE5\u63A7\u5236\u4EC0\u4E48" tabindex="-1">\u{1F579} HTTP \u53EF\u4EE5\u63A7\u5236\u4EC0\u4E48 <a class="header-anchor" href="#\u{1F579}-http-\u53EF\u4EE5\u63A7\u5236\u4EC0\u4E48" aria-hidden="true">#</a></h2><blockquote><p>What can be controlled by HTTP</p></blockquote><p>\u968F\u7740\u65F6\u95F4\u7684\u63A8\u79FB\uFF0CHTTP \u7684\u8FD9\u79CD\u53EF\u6269\u5C55\u6027\u5141\u8BB8\u5BF9 Web \u8FDB\u884C\u66F4\u591A\u7684\u63A7\u5236\u548C\u529F\u80FD\u3002\u7F13\u5B58\u548C\u8EAB\u4EFD\u9A8C\u8BC1\u65B9\u6CD5\u662F HTTP \u5386\u53F2\u65E9\u671F\u5C31\u6709\u7684\u529F\u80FD\u3002\u76F8\u6BD4\u4E4B\u4E0B\uFF0C\u653E\u5BBD\u6765\u6E90\u9650\u5236\u7684\u80FD\u529B\u662F\u5728 2010 \u5E74\u4EE3\u624D\u6DFB\u52A0\u7684</p><p>\u4EE5\u4E0B\u662F\u53EF\u4F7F\u7528 HTTP \u63A7\u5236\u7684\u5E38\u89C1\u529F\u80FD\u5217\u8868</p><ul><li><p>\u7F13\u5B58 \u6587\u6863\u7684\u7F13\u5B58\u65B9\u5F0F\u53EF\u4EE5\u7531 HTTP \u63A7\u5236\u3002\u670D\u52A1\u5668\u53EF\u4EE5\u6307\u793A\u4EE3\u7406\u548C\u5BA2\u6237\u7AEF\u7F13\u5B58\u4EC0\u4E48\u4EE5\u53CA\u7F13\u5B58\u591A\u957F\u65F6\u95F4\u3002\u5BA2\u6237\u7AEF\u53EF\u4EE5\u6307\u793A\u4E2D\u95F4\u7F13\u5B58\u4EE3\u7406\u5FFD\u7565\u5B58\u50A8\u7684\u6587\u6863</p></li><li><p>\u653E\u5BBD\u6765\u6E90\u9650\u5236 \u4E3A\u4E86\u9632\u6B62\u7AA5\u63A2\u548C\u5176\u4ED6\u9690\u79C1\u4FB5\u72AF\uFF0CWeb \u6D4F\u89C8\u5668\u5F3A\u5236\u5B9E\u65BD Web \u7F51\u7AD9\u4E4B\u95F4\u7684\u4E25\u683C\u5206\u79BB\u3002\u53EA\u6709\u6765\u81EA<strong>\u540C\u6E90</strong> \u7684\u9875\u9762\u624D\u80FD\u8BBF\u95EE\u5F53\u524D\u7F51\u9875\u7684\u6240\u6709\u4FE1\u606F\u3002\u5C3D\u7BA1\u8FD9\u6837\u7684\u7EA6\u675F\u5BF9\u670D\u52A1\u5668\u6765\u8BF4\u662F\u4E00\u79CD\u8D1F\u62C5\uFF0CHTTP \u6807\u5934\u53EF\u4EE5\u653E\u5BBD\u670D\u52A1\u5668\u7AEF\u7684\u8FD9\u79CD\u4E25\u683C\u5206\u79BB\uFF0C\u5141\u8BB8\u6587\u6863\u6210\u4E3A\u6765\u81EA\u4E0D\u540C\u57DF\u540D\u7684\u4FE1\u606F\u62FC\u51D1\u800C\u6210\uFF1B\u751A\u81F3\u53EF\u80FD\u6709\u4E0E\u5B89\u5168\u76F8\u5173\u7684\u7406\u7531\u8FD9\u6837\u505A</p></li><li><p>\u8EAB\u4EFD\u9A8C\u8BC1 \u67D0\u4E9B\u9875\u9762\u53EF\u80FD\u53D7\u5230\u4FDD\u62A4\uFF0C\u56E0\u6B64\u53EA\u6709\u7279\u5B9A\u7528\u6237\u624D\u80FD\u8BBF\u95EE\u5B83\u4EEC\u3002\u57FA\u672C\u8EAB\u4EFD\u9A8C\u8BC1\u53EF\u4EE5\u7531 HTTP \u63D0\u4F9B\uFF0C\u901A\u8FC7\u4F7F\u7528 <code>WWW-Authenticate</code> \u548C\u7C7B\u4F3C\u7684\u6807\u5934\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 HTTP cookie \u8BBE\u7F6E\u7279\u5B9A\u4F1A\u8BDD</p></li><li><p>\u4EE3\u7406\u548C\u96A7\u9053\u4F20\u8F93 \u670D\u52A1\u5668\u6216\u5BA2\u6237\u7AEF\u901A\u5E38\u4F4D\u4E8E\u5185\u7F51\uFF08Intranet\uFF09\u4E0A\uFF0C\u5E76\u4E14\u5BF9\u5176\u4ED6\u8BA1\u7B97\u673A\u9690\u85CF\u5176\u771F\u5B9E IP \u5730\u5740\u3002\u7136\u540E HTTP \u8BF7\u6C42\u901A\u8FC7\u4EE3\u7406\u6765\u8DE8\u8D8A\u8FD9\u4E2A\u7F51\u7EDC\u5C4F\u969C\u3002\u5E76\u975E\u6240\u6709\u4EE3\u7406\u90FD\u662F HTTP \u4EE3\u7406\u3002\u4F8B\u5982\uFF0CSOCKS \u534F\u8BAE\u5728\u8F83\u4F4E\u7EA7\u522B\u8FD0\u884C\u3002\u5176\u4ED6\u534F\u8BAE\uFF0C\u5982 ftp\uFF0C\u53EF\u4EE5\u7531\u8FD9\u4E9B\u4EE3\u7406\u5904\u7406</p></li><li><p>\u4F7F\u7528 HTTP cookie \u7684\u4F1A\u8BDD \u5141\u8BB8\u5C06\u8BF7\u6C42\u4E0E\u670D\u52A1\u5668\u7684\u72B6\u6001\u5173\u8054\u8D77\u6765\u3002\u8FD9\u4F1A\u521B\u5EFA\u4F1A\u8BDD\uFF0C\u5C3D\u7BA1\u57FA\u672C HTTP \u662F\u65E0\u72B6\u6001\u534F\u8BAE\u3002\u8FD9\u4E0D\u4EC5\u9002\u7528\u4E8E\u7535\u5B50\u5546\u52A1\u8D2D\u7269\u8F66\uFF0C\u800C\u4E14\u9002\u7528\u4E8E\u4EFB\u4F55\u5141\u8BB8\u7528\u6237\u914D\u7F6E\u5185\u5BB9\u8F93\u51FA\u7684\u7F51\u7AD9</p></li></ul><h2 id="\u26F2\uFE0F-http-\u6D41" tabindex="-1">\u26F2\uFE0F HTTP \u6D41 <a class="header-anchor" href="#\u26F2\uFE0F-http-\u6D41" aria-hidden="true">#</a></h2><blockquote><p>HTTP flow</p></blockquote><h2 id="\u{1F4DF}-http-\u6D88\u606F" tabindex="-1">\u{1F4DF} HTTP \u6D88\u606F <a class="header-anchor" href="#\u{1F4DF}-http-\u6D88\u606F" aria-hidden="true">#</a></h2><blockquote><p>HTTP Messages</p></blockquote><h3 id="\u8BF7\u6C42" tabindex="-1">\u8BF7\u6C42 <a class="header-anchor" href="#\u8BF7\u6C42" aria-hidden="true">#</a></h3><blockquote><p>Requests</p></blockquote><h3 id="\u54CD\u5E94" tabindex="-1">\u54CD\u5E94 <a class="header-anchor" href="#\u54CD\u5E94" aria-hidden="true">#</a></h3><blockquote><p>Responses</p></blockquote><h2 id="\u57FA\u4E8E-http-\u7684-api" tabindex="-1">\u57FA\u4E8E HTTP \u7684 API <a class="header-anchor" href="#\u57FA\u4E8E-http-\u7684-api" aria-hidden="true">#</a></h2><blockquote><p>APIs based on HTTP</p></blockquote><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><blockquote><p>Conclusion</p></blockquote>',59),P=[d];function u(b,H,k,_,f,g){return a(),i("div",null,P)}const W=l(s,[["render",u]]);export{v as __pageData,W as default};
