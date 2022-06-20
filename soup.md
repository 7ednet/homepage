# Bad Soup 毒鸡汤 API

<!-- toc -->

将这碗毒鸡汤引用至您的网站，时时刻刻体现您的精神。

## 1/ 使用方式

将以下代码引用自您网页中即可

```html
<!-- Body -->
<p id="badsoup">有人一笑就很好看，你是一看就挺好笑。</p>

<!-- Footer -->
<script>
  var xhr = new XMLHttpRequest();
  xhr.open('get', 'https://www.7ed.net/soup/api');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var data = JSON.parse(xhr.responseText);
      var badsoup = document.getElementById('badsoup');
      badsoup.innerText = data.badsoup;
    }
  }
  xhr.send();
</script>
```

## 2/ Effect

> 就算你充电两小时，也不会有人和你通话五分钟。


## 3/ More

> 7ED 还提供更多静态资源加速服务，前往 [首页](/) 查看  
> 在使用过程中出现任何问题均可至 [后花园](https://github.com/7ednet/yard/discussions) 进行反馈
