<script setup lang="ts">
import { withBase } from 'vitepress'

const route = (path: string) => withBase(path)

const stages = [
  ['01', '识别角色', 'FDE 为何崛起', '/01-第1章-FDE的崛起'],
  ['02', '选择战场', '解决正确的问题', '/02-第2章-解决正确的问题'],
  ['03', '进入现场', '赢得灯塔客户', '/03-第3章-赢得客户'],
  ['04', '制造价值', '激活真实部署', '/04-第4章-激活部署'],
  ['05', '守住阵地', '续约与健康度', '/05-第5章-守住续约'],
  ['06', '扩大战果', '从价值到收入', '/06-第6章-扩大收入'],
  ['07', '沉淀能力', '规模化复制', '/07-第7章-规模化复制'],
  ['08', '复盘现场', '完整案例集', '/08-第8章-完整案例集']
]
</script>

<template>
  <main class="field-home">
    <header class="home-nav">
      <a class="home-brand" :href="route('/')" aria-label="FDE前线部署工程师指南首页"><img :src="route('/mark.svg')" alt=""><span>FDE前线部署工程师指南</span></a>
      <nav aria-label="主导航">
        <a :href="route('/01-第1章-FDE的崛起')">阅读手册</a>
        <a :href="route('/08-第8章-完整案例集')">完整案例</a>
        <a :href="route('/10-附录A-FDE应当关注的常用指标')">指标工具箱</a>
        <a :href="route('/about')">关于</a>
      </nav>
      <a class="home-github" href="https://github.com/lukeSuperCoder/FDE-Handbook" aria-label="GitHub 项目">GITHUB ↗</a>
    </header>
    <section class="field-hero" aria-labelledby="home-title">
      <div class="field-grid" aria-hidden="true" />
      <div class="hero-index">FIELD MANUAL · 001</div>
      <div class="hero-copy">
        <p class="eyebrow">FORWARD DEPLOYED ENGINEER</p>
        <h1 id="home-title">把模型部署进<br><em>真实世界</em></h1>
        <p class="hero-lead">一本写给人工智能创业者、工程师与交付负责人的前线手册。从找对问题，到赢得客户、激活部署与规模化复制。</p>
        <div class="hero-actions">
          <a class="signal-button" :href="route('/01-第1章-FDE的崛起')">开始阅读 <span>→</span></a>
          <a class="text-button" :href="route('/前线部署工程师（FDE）v1.0.11.pdf')" download>下载完整 PDF ↘</a>
        </div>
      </div>
      <div class="hero-stats" aria-label="本书关键数据">
        <div><strong>95<sup>%</sup></strong><span>企业生成式 AI 项目<br>没有产生财务回报</span></div>
        <div><strong>800<sup>%</sup></strong><span>FDE 岗位发布量<br>九个月增长</span></div>
        <div><strong>120</strong><span>个公开可查与<br>一线调研案例</span></div>
      </div>
      <div class="hero-note">模型已经不稀缺。<br>能把模型放进客户真实业务里的人，才稀缺。</div>
    </section>

    <section class="field-intro" aria-labelledby="intro-title">
      <p class="section-kicker">MISSION / 任务</p>
      <h2 id="intro-title">不是又一本谈论 AI 未来的书。<br>这是一本讲清楚<mark>如何落地</mark>的书。</h2>
      <div class="intro-columns">
        <p>FDE 站在产品、工程与客户现场的交界处。他们不止交付软件，更要找到值得解决的问题，让客户获得可衡量的结果，再把现场经验变成下一次可复用的产品能力。</p>
        <div class="manifesto"><span>01</span> 用结果而不是功能定义成功<br><span>02</span> 用现场反馈推动产品进化<br><span>03</span> 用复用能力突破人力上限</div>
      </div>
    </section>

    <section class="route-map" aria-labelledby="route-title">
      <div class="section-heading">
        <div><p class="section-kicker">ROUTE MAP / 行动路径</p><h2 id="route-title">从一个问题，到一套可复制的系统</h2></div>
        <p>八章构成一次完整的企业 AI 价值交付旅程。可以顺序阅读，也可以从你正在面对的现场切入。</p>
      </div>
      <ol class="stage-list">
        <li v-for="([number, action, title, link], index) in stages" :key="number">
          <a :href="route(link)">
            <span class="stage-number">{{ number }}</span>
            <span class="stage-action">{{ action }}</span>
            <strong>{{ title }}</strong>
            <span class="stage-arrow" aria-hidden="true">↗</span>
          </a>
          <span v-if="index < stages.length - 1" class="stage-connector" aria-hidden="true" />
        </li>
      </ol>
    </section>

    <section class="field-tools" aria-labelledby="tools-title">
      <div class="tools-lead"><p class="section-kicker">FIELD KIT / 前线工具</p><h2 id="tools-title">阅读之外，快速找到你需要的答案</h2></div>
      <a :href="route('/08-第8章-完整案例集')"><span>CASE FILES</span><strong>完整案例集</strong><p>从 Palantir、OpenAI、Anthropic 到中国一线实践。</p><b>120 CASES ↗</b></a>
      <a :href="route('/10-附录A-FDE应当关注的常用指标')"><span>METRICS</span><strong>指标工具箱</strong><p>交付、客户、商业与组织四层指标体系。</p><b>4 LEVELS ↗</b></a>
      <a :href="route('/11-附录B-FDE人物与团队名单')"><span>DIRECTORY</span><strong>人物与团队</strong><p>理解 FDE 绕不开的人物、公司与知识源头。</p><b>FIELD MAP ↗</b></a>
    </section>

    <section class="closing-callout">
      <p>免费公开 · 持续修订</p>
      <h2>知识的价值在于流动，<br>而不在于囤积。</h2>
      <div><a :href="route('/01-第1章-FDE的崛起')">进入第一章 →</a><a href="https://github.com/lukeSuperCoder/FDE-Handbook">在 GitHub 上参与修订 ↗</a></div>
    </section>
  </main>
</template>
