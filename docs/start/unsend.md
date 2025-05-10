# Unsend.de 临时邮箱服务

<!-- toc -->

一个临时邮箱服务。

## Unsend.de 网站

* 网址: https://unsend.de

使用 Github 登录或输入用户名密码进行注册。

## Telegram 机器人

* 网址: https://t.me/unsenddebot

将机器人给出的 Webhook 地址填入 https://unsend.de/profile 相关表单中即可在 Unsend TG 机器人收取新邮件通知。

在 https://unsend.de/profile 生成 API Key，并在 TG 机器人进行设置，即可在 TG 机器人进行创建临时邮箱等操作。

![](https://jpg.sevencdn.com/e4.jpgcdn.com/2025/03/04/iTvf.png)

## Bitwarden 创建临时邮件功能

在 https://unsend.de/profile 生成 API Key，并在 Bitwarden 上进行配置：

* Bitwarden - 生成器 - 用户名
* 类型： 选择 `转发的电子邮箱别名`
* 服务： 选择 `Addy.io`
* 电子邮箱域名： 填入 `unsend.de`
* API 密钥： 填入您在 https://unsend.de/profile 生成 API Key
* 自托管服务 URL：填入 `https://unsend.de`

然后点击上方 `随机生成按钮` 即可生成 `一天有效期` 的临时邮箱，该邮箱收到邮件后可以在 https://unsend.de 网页上查看，若绑定了 TG 机器人，还可直接推送到您的 Telegram 。

![](https://jpg.sevencdn.com/e4.jpgcdn.com/2025/05/10/sqgZ.png)

::: info :wink:
7ED 还提供更多静态资源加速服务，前往 [首页](/) 查看，
在使用过程中出现任何问题均可至 [后花园](https://github.com/7ednet/yard/discussions) 进行反馈。
:::

