# Bing 每日图片 API

<!-- toc -->

一个简单的获取 BING 每日图片的服务

## 1/ 使用方式

直接引用如下地址即可

```html
https://7ed.net/bing/api
```
```html
<img src="https://7ed.net/bing/api" width="100%" />
```
```markdown
![](https://7ed.net/bing/api)
```

![](https://7ed.net/bing/api)

:::tip 提示
本服务托管于 Vercel，目前大陆到 Vercel 的路由间歇性不可用，可使用托管于 Deno 使用 Google Cloud 线路的 `api.7ed.net/bing/api` 代替。
:::

## 2/ 可选参数


<style>
.table-responsive {min-height: .01%;overflow-x: auto;}.table {width: 100%;max-width: 100%;margin-bottom: 20px;}td{padding: 10px;display:table-cell; vertical-align:middle}
</style>
<div class="table-responsive">
                <table class="table table-hover table-striped table-condensed table-bordered">
                    <tbody>
                        <tr>
                            <td valign="top" style="word-break: break-all;">参数代码</td>
                            <td valign="top" style="word-break: break-all;">参数含义</td>
                            <td valign="top" style="word-break: break-all;">可用参数</td>
                        </tr>
                        <tr>
                            <td valign="top" style="word-break: break-all;"><strong>rand</strong></td>
                            <td valign="top" style="word-break: break-all;">是否随机显示最近8天内的图片</td>
                            <td valign="top" style="word-break: break-all;"><strong>true</strong> or <strong>false</strong></td>
                        </tr>
                        <tr>
                            <td valign="top" style="word-break: break-all;"><strong>day</strong></td>
                            <td valign="top" style="word-break: break-all;">显示指定的最近图片</td>
                            <td valign="top" style="word-break: break-all;">-1, 0, 1, 2, 3, 4, 5, 6 ,7<br>0 为今天，-1 为明天</td>
                        </tr>
                        <tr>
                            <td valign="top" style="word-break: break-all;"><strong>size</strong></td>
                            <td valign="top" style="word-break: break-all;">指定获取图片大小</td>
                            <td valign="top" style="word-break: break-all;"><ul>
                <li>1920x1080</li>
                <li>1366x768</li>
                <li>1280x768</li>
                <li>1024x768</li>
                <li>800x600</li>
                <li>800x480</li>
                <li>768x1280</li>
                <li>720x1280</li>
                <li>640x480</li>
                <li>480x800</li>
                <li>400x240</li>
                <li>320x240</li>
                <li>240x320</li>
                <li>注：中间的 “x” 为英文小写字母 “x”</li>
            </ul></td>
                        </tr>
                        <tr>
                            <td valign="top" style="word-break: break-all;"><strong>info</strong></td>
                            <td valign="top" style="word-break: break-all;">获取图片基础信息（JSON 格式）</td>
                            <td valign="top" style="word-break: break-all;"><strong>true</strong> or <strong>false</strong></td>
                        </tr>
                        <tr>
                            <td valign="top" style="word-break: break-all;"><strong>cn</strong></td>
                            <td valign="top" style="word-break: break-all;">是否获取国内版的图片</td>
                            <td valign="top" style="word-break: break-all;"><strong>true</strong> or <strong>false</strong></td>
                        </tr>
                        <tr>
                            <td colspan="3">* 以上所有参数均非必要，默认为： rand=true，day=0，size=1920x1080，info=false，cn=false</td>
                        </tr>
                    </tbody>
                </table>
            </div>

例如，随机获取大小 320x240 的图片则可以引用：

```html
https://7ed.net/bing/api?rand=true&size=320x240
```

![](https://7ed.net/bing/api?rand=true&size=320x240)

## 3/ More

::: info :wink:
7ED 还提供更多静态资源加速服务，前往 [首页](/) 查看，
在使用过程中出现任何问题均可至 [后花园](https://github.com/7ednet/yard/discussions) 进行反馈。
:::