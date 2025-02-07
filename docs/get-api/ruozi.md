# 弱智吧言论 API

<!-- toc -->

精选弱智吧言论。 

PS 可能存在令人不适内容。

## 1/ 使用方式

将以下代码引用自您网页中即可

```html
<!-- Body -->
<p id="ruozi">为什么喝消毒水会中毒？我是不是买到假货了——二手弱智</p>

<!-- Footer -->
<script>
  var xhr = new XMLHttpRequest();
  xhr.open('get', 'https://www.7ed.net/ruozi/api');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var data = JSON.parse(xhr.responseText);
      var ruozi = document.getElementById('ruozi');
      ruozi.innerText = data.ruozi;
    }
  }
  xhr.send();
</script>
```

:::tip 提示
本服务托管于 Vercel，目前大陆到 Vercel 的路由间歇性不可用，可使用托管于 Deno 使用 Google Cloud 线路的 `api.7ed.net/ruozi/api` 代替。
:::

## 2/ Effect

<iframe src="/html/ruozi.html" width="100%" height="120px" style="border: 1px solid var(--vp-custom-block-info-border); border-radius: 8px;"></iframe>

<button onclick="location.reload()">刷新</button>

## 3/ More

::: info :wink:
7ED 还提供更多静态资源加速服务，前往 [首页](/) 查看，
在使用过程中出现任何问题均可至 [后花园](https://github.com/7ednet/yard/discussions) 进行反馈。
:::