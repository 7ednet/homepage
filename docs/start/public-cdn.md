# 公共 CDN 静态资源加速服务


<!-- toc -->

::: tip
* 本服务初衷仅供个人使用，若引用本服务的站点出现“站长认为无法容忍”的情况会被放入访问黑名单。
* 本域名旗下服务为免费公益服务和 CDN 域名，所有内容均由用户自行上传，如有违反版权、涉及暴力色情恐怖等图片，请及时联系下方邮箱。
* FOR ABUSE ISSUES RELATED TO THIS DOMAIN, PLEASE EMAIL YOUR COMPLAINT WITH ANY RELEVANT LOGS TO ABUSE [AT] CON [DOT] SH.
:::

7ED 公共资源加速服务供大陆地区用户加速访问 Google Fonts、CDNJS 等，只需要替换链接就可以在大陆地区畅快访问。

## 1/ Google Fonts 谷歌字体加速

将原网址

```html
fonts.googleapis.com
```

替换为

```html
use.sevencdn.com
```

即可，例如：

```html
https://use.sevencdn.com/css?family=Unica+One&display=swap
```

## 2/ CDNJS 加速

将原网址

```html
cdnjs.cloudflare.com
```

替换为

```html
use.sevencdn.com
```

即可，例如：

```html
https://use.sevencdn.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js
```

## 3/ Google Libraries 加速

将原网址

```html
ajax.googleapis.com/ajax
```

替换为

```html
use.sevencdn.com/gajax
```

即可，例如：

```html
https://use.sevencdn.com/gajax/libs/d3js/5.7.0/d3.min.js
```

## 4/ Google Chart 加速

::: danger 弃用
因 Google 官方关闭了 Chart 相关 API，导致加速失效，使用 QRCode 可选用下方加速。
:::


## 5/ Gravatar 加速

将原网址

```html
*.gravatar.com
```

替换为

```html
use.sevencdn.com
```

即可，例如：

```html
https://use.sevencdn.com/avatar/767fc9c115a1b989744c755db47feb60&s=128
```

![](https://use.sevencdn.com/avatar/767fc9c115a1b989744c755db47feb60&s=128)

## 6/ QRCode API 加速

具体使用方式见[原网站](https://goqr.me/api/doc/create-qr-code/)。

将原网址

```html
api.qrserver.com/v1/create-qr-code/
```

替换为

```html
use.sevencdn.com/qr/
```

即可，例如：

```html
https://use.sevencdn.com/qr/?size=200x200&data=https://www.7ed.net/start/public-cdn.html
```

![](https://use.sevencdn.com/qr/?size=200x200&data=https://www.7ed.net/start/public-cdn.html)

## 7/ More

::: info :wink:
7ED 还提供更多静态资源加速服务，前往 [首页](/) 查看，
在使用过程中出现任何问题均可至 [后花园](https://github.com/7ednet/yard/discussions) 进行反馈。
:::