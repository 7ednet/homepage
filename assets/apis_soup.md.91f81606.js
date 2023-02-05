import{_ as s,c as a,o as n,a as l}from"./app.6577a91f.js";const C=JSON.parse('{"title":"Bad Soup 毒鸡汤 API","description":"","frontmatter":{},"headers":[{"level":2,"title":"1/ 使用方式","slug":"_1-使用方式","link":"#_1-使用方式","children":[]},{"level":2,"title":"2/ Effect","slug":"_2-effect","link":"#_2-effect","children":[]},{"level":2,"title":"3/ More","slug":"_3-more","link":"#_3-more","children":[]}],"relativePath":"apis/soup.md","lastUpdated":null}'),p={name:"apis/soup.md"},o=l(`<h1 id="bad-soup-毒鸡汤-api" tabindex="-1">Bad Soup 毒鸡汤 API <a class="header-anchor" href="#bad-soup-毒鸡汤-api" aria-hidden="true">#</a></h1><p>将这碗毒鸡汤引用至您的网站，时时刻刻体现您的精神。</p><h2 id="_1-使用方式" tabindex="-1">1/ 使用方式 <a class="header-anchor" href="#_1-使用方式" aria-hidden="true">#</a></h2><p>将以下代码引用自您网页中即可</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- Body --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">badsoup</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">有人一笑就很好看，你是一看就挺好笑。</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- Footer --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> xhr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">XMLHttpRequest</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  xhr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">get</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://www.7ed.net/soup/api</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  xhr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onreadystatechange</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">xhr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">readyState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">xhr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">responseText</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">badsoup</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">badsoup</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">badsoup</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerText</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">badsoup</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  xhr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>本服务托管于 Vercel，目前大陆到 Vercel 的路由间歇性不可用，可使用托管于 Deno 使用 Google Cloud 线路的 <code>api.7ed.net/soup/api</code> 代替。</p></div><h2 id="_2-effect" tabindex="-1">2/ Effect <a class="header-anchor" href="#_2-effect" aria-hidden="true">#</a></h2><blockquote><p>就算你充电两小时，也不会有人和你通话五分钟。</p></blockquote><h2 id="_3-more" tabindex="-1">3/ More <a class="header-anchor" href="#_3-more" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">😉</p><p>7ED 还提供更多静态资源加速服务，前往 <a href="/">首页</a> 查看， 在使用过程中出现任何问题均可至 <a href="https://github.com/7ednet/yard/discussions" target="_blank" rel="noreferrer">后花园</a> 进行反馈。</p></div>`,10),e=[o];function t(c,r,F,D,y,i){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};
