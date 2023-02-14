import{_ as i,M as d,p as o,q as c,R as e,t as a,N as s,U as l,a1 as r}from"./framework-d140ffe8.js";const h={},p=r('<h1 id="新手学编程" tabindex="-1"><a class="header-anchor" href="#新手学编程" aria-hidden="true">#</a> 新手学编程</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>好记性不如烂笔头。</p><p>既然学习编程，第一件事就是学做一个静态网站，来记录每天的学习笔记。在记笔记的同时，争取做到能够总结到位，不但能作为自己的记忆，还能做为他人的参考，那么，这段学习成果就算基本到位了。</p><p>我选择 vuepress 来建站，并把个人的学习笔记站点部署到 github 上，下面跟我一起来，先成功尝试，再慢慢理解 node.js vue git 等知识。</p><h2 id="vuepress-建站" tabindex="-1"><a class="header-anchor" href="#vuepress-建站" aria-hidden="true">#</a> vuepress 建站</h2><h3 id="_1-安装-node-js" tabindex="-1"><a class="header-anchor" href="#_1-安装-node-js" aria-hidden="true">#</a> 1. 安装 node.js</h3>',7),u={href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"},m=r(`<h3 id="_2-安装-yarn-包管理工具" tabindex="-1"><a class="header-anchor" href="#_2-安装-yarn-包管理工具" aria-hidden="true">#</a> 2. 安装 yarn 包管理工具</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">yarn</span> <span class="token comment"># 全局安装 yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-新建网站项目目录-mywebsite" tabindex="-1"><a class="header-anchor" href="#_3-新建网站项目目录-mywebsite" aria-hidden="true">#</a> 3. 新建网站项目目录 mywebsite</h3><p>略</p><h3 id="_4-命令行进入该目录" tabindex="-1"><a class="header-anchor" href="#_4-命令行进入该目录" aria-hidden="true">#</a> 4. 命令行进入该目录</h3><p>略</p><h3 id="_5-初始化为-node-项目" tabindex="-1"><a class="header-anchor" href="#_5-初始化为-node-项目" aria-hidden="true">#</a> 5. 初始化为 node 项目</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-安装-vuepress-为开发依赖" tabindex="-1"><a class="header-anchor" href="#_6-安装-vuepress-为开发依赖" aria-hidden="true">#</a> 6. 安装 vuepress 为开发依赖</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7-新建-docs-目录" tabindex="-1"><a class="header-anchor" href="#_7-新建-docs-目录" aria-hidden="true">#</a> 7. 新建 docs 目录</h3><p>略</p><h3 id="_8-新建-readme-md" tabindex="-1"><a class="header-anchor" href="#_8-新建-readme-md" aria-hidden="true">#</a> 8. 新建 readme.md</h3><blockquote><p>readme.md 会被编译为 index.html</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9-配置快捷脚本" tabindex="-1"><a class="header-anchor" href="#_9-配置快捷脚本" aria-hidden="true">#</a> 9. 配置快捷脚本</h3><blockquote><p>在 <code>package.json</code> 文件中增加以下内容</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-在本地启动服务器" tabindex="-1"><a class="header-anchor" href="#_10-在本地启动服务器" aria-hidden="true">#</a> 10. 在本地启动服务器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_11-从浏览器预览站点" tabindex="-1"><a class="header-anchor" href="#_11-从浏览器预览站点" aria-hidden="true">#</a> 11. 从浏览器预览站点</h3>`,21),v={href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"},b=e("h3",{id:"_12-持续在-readme-md-中记录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_12-持续在-readme-md-中记录","aria-hidden":"true"},"#"),a(" 12. 持续在 readme.md 中记录")],-1),_=e("p",null,[a("请学习 "),e("code",null,"markdown"),a(" 相关知识")],-1),k=e("p",null,[e("a",{href:"vuepress_sidebar"},"vuepress侧边栏使用方法")],-1);function f(g,x){const n=d("ExternalLinkIcon"),t=d("RouterLink");return o(),c("div",null,[p,e("p",null,[a("从 "),e("a",u,[a("node.js官网"),s(n)]),a(" 下载安装包，一路确认安装即可。")]),m,e("p",null,[e("a",v,[a("http://localhost:8080"),s(n)])]),b,_,e("p",null,[s(t,{to:"/Echarts.html"},{default:l(()=>[a("使用Echarts五个基本步骤")]),_:1})]),k])}const y=i(h,[["render",f],["__file","index.html.vue"]]);export{y as default};
