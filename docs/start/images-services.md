# 图片处理服务


<!-- toc -->

::: tip
* 本服务初衷仅供个人使用，若引用本服务的站点出现“站长认为无法容忍”的情况会被放入访问黑名单。
* 本域名旗下服务为免费公益服务和 CDN 域名，所有内容均由用户自行上传，如有违反版权、涉及暴力色情恐怖等图片，请及时联系下方邮箱。
* FOR ABUSE ISSUES RELATED TO THIS DOMAIN, PLEASE EMAIL YOUR COMPLAINT WITH ANY RELEVANT LOGS TO ABUSE [AT] CON [DOT] SH.
:::

::: warning
由于滥用，已停止任意图片加速服务。
:::

支持一系列的图片处理服务，使用方式如下。

## 1/ 创建 OpenGraph 图片

根据文字（仅支持英文及 EMOJI），自动创建漂亮的头图。

使用方式：

```
https://i.sevencdn.com/og?title=[标题]&sub=[副标题]&icon=https://www.7ed.net/apple-touch-icon.png
```

* `title`: 标题。
* `sub`: 副标题。
* `icon`: icon 图标网址， png 格式。

例如：

```
https://i.sevencdn.com/og/dark/120/🌏 Hello World
```

![](https://i.sevencdn.com/og?title=7ED%20Services&sub=%E4%B8%BA%E6%82%A8%E6%8F%90%E4%BE%9B%E4%BE%BF%E7%94%A8%E7%9A%84%E6%9C%8D%E5%8A%A1&icon=https://www.7ed.net/apple-touch-icon.png)


## 2/ 获取网站 Favicon

根据网站地址获取该网站的 FAVICON。

使用方法：

```
https://i.sevencdn.com/favicon/[网站地址]
```

例如：

```
https://i.sevencdn.com/favicon/www.v2ex.com
```

![](https://i.sevencdn.com/favicon/www.v2ex.com)

## 3/ Avatar Generator

创建优美的用户头像，可平替 GRAVATAR。

基本用法：

```
https://i.sevencdn.com/avatar/[关键词（用户名）]
```

进阶用法：

```
https://i.sevencdn.com/avatar/[样式，见下方]/[头像大小，数字]/[关键词（用户名）]
```
<style>
.table-responsive {min-height: .01%;overflow-x: auto;}.table {width: 100%;max-width: 100%;margin-bottom: 20px;}td{padding: 10px;display:table-cell; vertical-align:middle}
</style>
<div class="table-responsive">
                <table class="table table-hover table-striped table-condensed table-bordered">
                    <tbody>
                        <tr>
                            <td valign="top" style="word-break: break-all;">样式</td>
                            <td valign="top" style="word-break: break-all;">样式代码</td>
                            <td valign="top" style="word-break: break-all;">示例网址</td>
                            <td valign="top" style="word-break: break-all;">示例图片</td>
                        </tr>
                        <tr>
                            <td valign="top" style="word-break: break-all;"><strong>Beam</strong></td>
                            <td valign="top" style="word-break: break-all;text-transform: lowercase!important;"><code>beam</code></td>
                            <td valign="top" >https://i.sevencdn.com/avatar/beam/52/Jackson</td>
                            <td valign="top" style="word-break: break-all;"><img src="https://i.sevencdn.com/avatar/beam/52/Jackson" class="img-responsive"/></td>
                        </tr>
                        <tr>
                            <td valign="top" style="word-break: break-all;"><strong>Bauhaus</strong></td>
                            <td valign="top" style="word-break: break-all;text-transform: lowercase!important;"><code>bauhaus</code></td>
                            <td valign="top" >https://i.sevencdn.com/avatar/bauhaus/52/Jackson</td>
                            <td valign="top" style="word-break: break-all;"><img src="https://i.sevencdn.com/avatar/bauhaus/52/Jackson" class="img-responsive"/></td>
                        </tr>
                        <tr>
                            <td valign="top" style="word-break: break-all;">Marble</td>
                            <td valign="top" style="word-break: break-all;text-transform: lowercase!important;"><code>marble</code></td>
                            <td valign="top" >https://i.sevencdn.com/avatar/marble/52/Jackson</td>
                            <td valign="top" style="word-break: break-all;"><img src="https://i.sevencdn.com/avatar/marble/52/Jackson" class="img-responsive"/></td>
                        </tr>
                        <tr>
                            <td valign="top" style="word-break: break-all;">Pixel</td>
                            <td valign="top" style="word-break: break-all;text-transform: lowercase!important;"><code>pixel</code></td>
                            <td valign="top" >https://i.sevencdn.com/avatar/pixel/52/Jackson</td>
                            <td valign="top" style="word-break: break-all;"><img src="https://i.sevencdn.com/avatar/pixel/52/Jackson" class="img-responsive"/></td>
                        </tr>
                        <tr>
                            <td valign="top" style="word-break: break-all;">Sunset</td>
                            <td valign="top" style="word-break: break-all;text-transform: lowercase!important;"><code>sunset</code></td>
                            <td valign="top" >https://i.sevencdn.com/avatar/sunset/52/Jackson</td>
                            <td valign="top" style="word-break: break-all;"><img src="https://i.sevencdn.com/avatar/sunset/52/Jackson" class="img-responsive"/></td>
                        </tr>
                        <tr>
                            <td valign="top" style="word-break: break-all;">Ring</td>
                            <td valign="top" style="word-break: break-all;text-transform: lowercase!important;"><code>ring</code></td>
                            <td valign="top" >https://i.sevencdn.com/avatar/ring/52/Jackson</td>
                            <td valign="top" style="word-break: break-all;"><img src="https://i.sevencdn.com/avatar/ring/52/Jackson" class="img-responsive"/></td>
                        </tr>
                        <tr>
                            <td valign="top" style="word-break: break-all;">Micah</td>
                            <td valign="top" style="word-break: break-all;text-transform: lowercase!important;"><code>micah</code></td>
                            <td valign="top" >https://i.sevencdn.com/avatar/micah/52/Jackson</td>
                            <td valign="top" style="word-break: break-all;"><img src="https://i.sevencdn.com/avatar/micah/52/Jackson" class="img-responsive"/></td>
                        </tr>
                        <tr>
                            <td valign="top" style="word-break: break-all;">Bottts</td>
                            <td valign="top" style="word-break: break-all;text-transform: lowercase!important;"><code>bottts</code></td>
                            <td valign="top" >https://i.sevencdn.com/avatar/bottts/52/Jackson</td>
                            <td valign="top" style="word-break: break-all;"><img src="https://i.sevencdn.com/avatar/bottts/52/Jackson" class="img-responsive"/></td>
                        </tr>
                        <tr>
                            <td valign="top" style="word-break: break-all;">Pixel Art <sup style="color:red">NEW</sup></td>
                            <td valign="top" style="word-break: break-all;text-transform: lowercase!important;"><code>pixel-art</code></td>
                            <td valign="top" >https://i.sevencdn.com/avatar/pixel-art/52/Jackson</td>
                            <td valign="top" style="word-break: break-all;"><img src="https://i.sevencdn.com/avatar/pixel-art/52/Jackson" class="img-responsive"/></td>
                        </tr>
                        <tr>
                            <td valign="top" style="word-break: break-all;">Big Ears Neutral <sup style="color:red">NEW</sup></td>
                            <td valign="top" style="word-break: break-all;text-transform: lowercase!important;"><code>big-ears-neutral</code></td>
                            <td valign="top" >https://i.sevencdn.com/avatar/big-ears-neutral/52/Jackson</td>
                            <td valign="top" style="word-break: break-all;"><img src="https://i.sevencdn.com/avatar/big-ears-neutral/52/Jackson" class="img-responsive"/></td>
                        </tr>
                        <tr>
                            <td valign="top" style="word-break: break-all;">Adventurer Neutral <sup style="color:red">NEW</sup></td>
                            <td valign="top" style="word-break: break-all;text-transform: lowercase!important;"><code>adventurer-neutral</code></td>
                            <td valign="top" >https://i.sevencdn.com/avatar/adventurer-neutral/52/Jackson</td>
                            <td valign="top" style="word-break: break-all;"><img src="https://i.sevencdn.com/avatar/adventurer-neutral/52/Jackson" class="img-responsive"/></td>
                        </tr>
                        <tr>
                            <td valign="top" style="word-break: break-all;">Pixel Art Neutral <sup style="color:red">NEW</sup></td>
                            <td valign="top" style="word-break: break-all;text-transform: lowercase!important;"><code>pixel-art-neutral</code></td>
                            <td valign="top" >https://i.sevencdn.com/avatar/pixel-art-neutral/52/Jackson</td>
                            <td valign="top" style="word-break: break-all;"><img src="https://i.sevencdn.com/avatar/pixel-art-neutral/52/Jackson" class="img-responsive"/></td>
                        </tr>
                        <tr>
                            <td colspan="4">* 样式默认为 Beam，大小默认为 128px。</td>
                        </tr>
                    </tbody>
                </table>
            </div>

### 4/ More

::: info :wink:
7ED 还提供更多静态资源加速服务，前往 [首页](/) 查看，
在使用过程中出现任何问题均可至 [后花园](https://github.com/7ednet/yard/discussions) 进行反馈。
:::
