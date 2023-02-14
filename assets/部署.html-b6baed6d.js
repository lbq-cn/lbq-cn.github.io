import{_ as s,M as i,p as t,q as l,R as e,t as d,N as c,a1 as n}from"./framework-d140ffe8.js";const r={},o=n('<h1 id="部署到-github" tabindex="-1"><a class="header-anchor" href="#部署到-github" aria-hidden="true">#</a> 部署到 github</h1><h2 id="准备-github" tabindex="-1"><a class="header-anchor" href="#准备-github" aria-hidden="true">#</a> 准备 github</h2><blockquote><p>github 仓库的 gh-pages 分支，可以为用户提供静态页面服务。</p></blockquote><h3 id="申请-github-账号" tabindex="-1"><a class="header-anchor" href="#申请-github-账号" aria-hidden="true">#</a> 申请 github 账号</h3><p>略</p><h3 id="新建-github-仓库" tabindex="-1"><a class="header-anchor" href="#新建-github-仓库" aria-hidden="true">#</a> 新建 github 仓库</h3><blockquote><p>注意：<code>&lt;USERNAME&gt;</code> 替换为你的 github 用户名</p></blockquote><p>新建一个名为 <code>&lt;USERNAME&gt;.github.io</code> 的仓库，所有选项保持默认即可。</p><h2 id="部署到-github-1" tabindex="-1"><a class="header-anchor" href="#部署到-github-1" aria-hidden="true">#</a> 部署到 github</h2><h3 id="_1-配置-ssh-key" tabindex="-1"><a class="header-anchor" href="#_1-配置-ssh-key" aria-hidden="true">#</a> 1. 配置 ssh-key</h3>',10),h={href:"https://blog.csdn.net/qq_40047019/article/details/122898308",target:"_blank",rel:"noopener noreferrer"},p=n(`<h3 id="_2-新建-deploy-sh-脚本" tabindex="-1"><a class="header-anchor" href="#_2-新建-deploy-sh-脚本" aria-hidden="true">#</a> 2. 新建 deploy.sh 脚本</h3><blockquote><p>注意：<code>&lt;USERNAME&gt;</code> 替换为你的 github 用户名</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 生成静态文件</span>
<span class="token function">npm</span> run docs:build

<span class="token comment"># 进入生成的文件夹</span>
<span class="token builtin class-name">cd</span> docs/.vuepress/dist

<span class="token comment"># 如果是发布到自定义域名</span>
<span class="token comment"># echo &#39;www.example.com&#39; &gt; CNAME</span>

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:<span class="token operator">&lt;</span>USERNAME<span class="token operator">&gt;</span>/<span class="token operator">&lt;</span>USERNAME<span class="token operator">&gt;</span>.github.io.git master:gh-pages

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span>

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-执行自动部署脚本" tabindex="-1"><a class="header-anchor" href="#_3-执行自动部署脚本" aria-hidden="true">#</a> 3. 执行自动部署脚本</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./deploy.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-访问站点" tabindex="-1"><a class="header-anchor" href="#_4-访问站点" aria-hidden="true">#</a> 4. 访问站点</h3><p><code>https://&lt;USERNAME&gt;.github.io</code></p>`,7);function u(b,m){const a=i("ExternalLinkIcon");return t(),l("div",null,[o,e("p",null,[e("a",h,[d("解决git@github.com: Permission denied (publickey)"),c(a)])]),p])}const g=s(r,[["render",u],["__file","部署.html.vue"]]);export{g as default};
