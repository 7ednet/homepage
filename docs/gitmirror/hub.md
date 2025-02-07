# Github 文件加速

::: info 特别提醒
* 本服务仅供暂需在中国大陆访问 GITHUB 资源的用户使用，若有任何违规、侵权请联系 GITMIRROR [AT] 7ED [DOT] NET，我们将在收到邮件后立即处理。
* THIS SERVICE IS INTENDED ONLY FOR USERS WHO NEED TO ACCESS GITHUB ASSETS IN MAINLAND CHINA. IF THERE IS ANY VIOLATION OR INFRINGEMENT, PLEASE CONTACT GITMIRROR [AT] 7ED [DOT] NET AND WE WILL DEAL WITH IT AS SOON AS WE RECEIVE THE EMAIL.
:::

::: warning 
GitMirror 文件加速服务使用 Cloudflare Workers 免费版套餐，目前每日使用量已严重超支。**我们已经对所有来自 Android 的访问、部分滥用仓库开启托管质询**。

在开启托管质询期间可能会出现无法使用的情况，建议您考虑使用其他服务，例如： [GhProxy](https://ghproxy.com/)、[GHPS](https://ghps.cc/)、[DDLC](https://gh.ddlc.top/) 等。
:::

加速下载 Github Release、Archive 等文件。


## 1/ 使用方式一 

在下方输入框内输入源网址：

<iframe src="/html/hub.html" width="100%" height="240px" style="border:none;"></iframe>

## 2/ 使用方式二

在源网址前加上 `https://hub.gitmirror.com/`，例如：

<ul>
<li><span style="color:var(--vp-c-brand)">https://hub.gitmirror.com/</span>https://github.com/t1m0thyj/WinDynamicDesktop/releases/download/v5.4.1/WinDynamicDesktop_5.4.1_x64_Portable.exe</li>
<li><span style="color:var(--vp-c-brand)">https://hub.gitmirror.com/</span>https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/images/select_theme.png</li>
</ul>

上方链接可能会出现无法使用的情况，您也可以使用其他爱好者提供的链接：

* `https://ghproxy.com/`
* `https://ghps.cc/`
* `https://gh.ddlc.top/`

## 3/ 使用说明

GitHub文件链接带不带协议头都可以，支持 Release、Archive 以及文件，右键复制出来的链接都是符合标准的。不支持项目文件夹，合法的输入示例：

* 分支源码：`https://github.com/t1m0thyj/WinDynamicDesktop/archive/main.zip`
* Release 源码：`https://github.com/t1m0thyj/WinDynamicDesktop/archive/refs/tags/v5.4.1.zip`
* Release 文件：`https://github.com/t1m0thyj/WinDynamicDesktop/releases/download/v5.4.1/WinDynamicDesktop_5.4.1_x64_Portable.exe`
* 分支文件：`https://github.com/t1m0thyj/WinDynamicDesktop/blob/main/README.md`
