<script setup lang="ts">
const stages = [
  ['01', '问题真实', '找到有业务负责人、真实数据和明确痛点的问题'],
  ['02', '价值可量', '在启动前确定基线、结果指标与验收口径'],
  ['03', '最小闭环', '用两到六周跑通一条完整而狭窄的工作流'],
  ['04', '行为激活', '目标用户在日常工作中形成稳定使用习惯'],
  ['05', '商业验证', '客户愿意续约、扩容，并公开为结果背书'],
  ['06', '产品回流', '把现场解法沉淀成下一位客户可复用的能力']
]
</script>

<template>
  <figure class="visual-panel stage-path">
    <figcaption><span>VISUAL 02 / 部署阶段</span><strong>别从概念验证直接跳向“规模化”</strong><p>每一关都需要可观察的通过信号。没有通过上一关，增加人员和预算只会放大浪费。</p></figcaption>
    <ol>
      <li v-for="([number, title, detail], index) in stages" :key="number">
        <span class="path-number">{{ number }}</span><div><strong>{{ title }}</strong><p>{{ detail }}</p></div><b v-if="index < stages.length - 1" aria-hidden="true">↓</b>
      </li>
    </ol>
  </figure>
</template>
