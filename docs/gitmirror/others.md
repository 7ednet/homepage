# Github/Gitlab/Bitbucket 资源加速服务


<!-- toc -->

::: info 特别提醒
* 本服务仅供暂需在中国大陆访问 Github/Gitlab/Bitbucket 资源的用户使用，若引用本服务的站点出现“站长认为无法容忍”的情况会被放入访问黑名单。若有任何违规、侵权请联系 GITMIRROR [AT] 7ED [DOT] NET，我们将在收到邮件后立即处理。
* THIS SERVICE IS INTENDED ONLY FOR USERS WHO NEED TO ACCESS GITHUB ASSETS IN MAINLAND CHINA. IF THERE IS ANY VIOLATION OR INFRINGEMENT, PLEASE CONTACT GITMIRROR [AT] 7ED [DOT] NET AND WE WILL DEAL WITH IT AS SOON AS WE RECEIVE THE EMAIL.
:::

::: warning
本服务仅为反向代理 Statically.io ，因其在大陆地区不可访问，使用政策请以 Statically 为准。
:::

加速访问 Github/Gitlab/Bitbucket RAW 资源。

## 1/ HOW TO USE

基础 URL

```html
https://cdn.gitmirror.com
```

使用方法：

* GitHub `/gh/:user/:repo/:tag/:file`
* GitLab `/gl/:user/:repo/:tag/:file`
* Bitbucket `/bb/:user/:repo/:tag/:file`

其中：

* `:user` Github/Gitlab/Bitbucket username
* `:repo` Project repository
* `:tag` Branch/commit/hash
* `:file` File name with patch

例如：

```html
https://cdn.gitmirror.com/gh/ntdevlabs/tiny11builder/main/tiny11maker.ps1
```

In the example above that `/gh/` is the CDN for Github, `mrdoop` is `:user`, `three.js` is `:repo`, `dev` is `:tag`, and `build/three.min.js` is `:file`.

## 2/ Effect

![](https://cdn.gitmirror.com/gh/imagehosted/images/master/2022/06/01/c4001b42c2142f548d2d8b83be72ff37.png)

```md
![](https://cdn.gitmirror.com/gh/imagehosted/images/master/2022/06/01/c4001b42c2142f548d2d8b83be72ff37.png)
```

## 3/ More

::: info :wink:
在使用过程中出现任何问题均可至 [后花园](https://github.com/7ednet/yard/discussions) 进行反馈。
:::