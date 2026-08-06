<script setup lang="ts">
const nodes = [
  ['发现', '进入客户现场'], ['验证', '交付最小闭环'], ['激活', '改变真实行为'], ['证明', '量化业务结果'], ['回流', '沉淀产品能力'], ['复制', '进入下一客户']
]
</script>

<template>
  <figure class="visual-panel value-loop">
    <figcaption><span>VISUAL 03 / 价值飞轮</span><strong>FDE 的终点不是交付，而是下一次更快的交付</strong><p>健康的 FDE 系统会把每个客户现场变成产品发现前哨，让收入增长与产品进化发生在同一条回路上。</p></figcaption>
    <div class="loop-orbit" aria-label="FDE 价值交付闭环">
      <div v-for="([title, detail], index) in nodes" :key="title" class="loop-node" :style="{ '--i': index }"><span>0{{ index + 1 }}</span><strong>{{ title }}</strong><small>{{ detail }}</small></div>
      <div class="loop-core"><span>FIELD</span><strong>客户价值</strong><span>PRODUCT</span></div>
    </div>
    <p class="loop-equation"><span>客户结果</span><b>×</b><span>产品回流</span><b>×</b><span>组织复用</span><strong>= FDE 复利</strong></p>
  </figure>
</template>
