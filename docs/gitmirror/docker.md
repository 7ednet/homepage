# Docker Registry Mirror

::: warning :warning: 简洁版使用规则
* 本服务仅供您临时使用。
* 请务必 ❌不要公开 您的私有链接！！！若您的私有链接发生泄漏，请立即通过 bot 重置您的链接！！
* 为避免大家都没得玩，请勿恶意使用，恶意使用的范围包括但不限于：大量、长时间使用，公开分享私有链接，加速大陆地区不允许使用的仓库等。
* 若本服务运营者`主观`判断某些私有加速链接的使用构成恶意使用，将封禁申请它的 TGID、并将 TGID/TG 用户名/原因 公示在本页面。
* 若恶意使用人数超过 10 人，后续将增加验证 Telegram 注册手机号的功能（希望不用增加此功能）。
:::

您的私有 Docker Registry 加速镜像。


## 1/ HOW TO USE

前往 Telegram [@dockermirror_bot](https://t.me/dockermirror_bot) 生成您的私有加速链接。

设置 `registry mirror`：

```
tee /etc/docker/daemon.json <<EOF
{
    "registry-mirrors": ["https://YOUR_PRIVATE.LINK"]
}
EOF

systemctl daemon-reload
systemctl restart docker
```

或者原拉取镜像

```
docker pull YOUR_PRIVATE.LINK/library/alpine:latest
```

## 2/ BLACK_LIST 


| TGID | TG 用户名 | 原因 | 备注 |
| ---  |  ---     | --- | ---|
|      | 服务刚上线，暂无。 | | | 

## 3/ More

本服务 bot 与 nginx_lua 代码通过 Claude 3.5 Sonnet 生成，感谢。

::: info :wink:
在使用过程中出现任何问题均可至 [后花园](https://github.com/7ednet/yard/discussions) 进行反馈。
:::