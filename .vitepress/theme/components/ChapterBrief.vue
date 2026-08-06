<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ chapter: string }>()

const briefs: Record<string, { code: string; time: string; stage: string; summary: string; takeaways: string[] }> = {
  '1': { code: 'ORIGIN', time: '18 分钟', stage: '识别角色', summary: '理解 FDE 为什么在企业 AI 时代爆发，以及这个角色与传统交付岗位的根本区别。', takeaways: ['FDE 填补产品能力与客户需求之间的鸿沟', '现场定制必须反哺产品，而不是出售人力', '结果责任是这个角色最重要的边界'] },
  '2': { code: 'PROBLEM', time: '12 分钟', stage: '选择战场', summary: '在写第一行代码前，判断问题是否真实、紧迫、可衡量，并用最小可行部署验证价值。', takeaways: ['错误问题上的执行力都是浪费', '先验证问题与方案的契合', '用两到六周的小闭环替代概念验证坟墓'] },
  '3': { code: 'TRUST', time: '15 分钟', stage: '进入现场', summary: '选择能产生复利的灯塔客户，用真实数据、真实环境和可信结果建立企业级信任。', takeaways: ['灯塔客户的质量远比数量重要', '技术演示必须走到客户自己的数据上', '采购、法务和安全也是交付系统的一部分'] },
  '4': { code: 'ACTIVATE', time: '13 分钟', stage: '制造价值', summary: '把“系统上线”变成“用户稳定使用”，在客户环境里通过高频反馈完成真正激活。', takeaways: ['上线是行政事件，激活是行为事件', '模型通常不是部署中最难的部分', '变革管理必须与技术迭代同时发生'] },
  '5': { code: 'RETAIN', time: '10 分钟', stage: '守住阵地', summary: '通过稳定性、健康度与组织关系网络，让一次成功部署变成可持续的客户价值。', takeaways: ['续约是价值是否持续的最终检验', '客户关系不能依赖单一支持者', '预警系统应在客户抱怨前触发'] },
  '6': { code: 'EXPAND', time: '12 分钟', stage: '扩大战果', summary: '把已被证明的业务结果转化为定价能力、存量扩张与可持续收入。', takeaways: ['为结果而不是工作量定价', '扩张从同一客户的相邻工作流开始', '价值度量系统是商业谈判的底座'] },
  '7': { code: 'SCALE', time: '12 分钟', stage: '沉淀能力', summary: '把现场的砾石路修成高速公路，让交付资产、组织学习和产品能力形成复利。', takeaways: ['第 N 个客户应比第一个更少定制', '失败复盘也是可复制资产', '规模化的核心是现场到产品的回流速度'] },
  '8': { code: 'CASES', time: '20 分钟', stage: '复盘现场', summary: '通过 Palantir、OpenAI、Anthropic、Harvey 与中国实践，还原不同 FDE 模式的真实路径。', takeaways: ['没有脱离具体组织环境的万能打法', '灯塔、激活与产品回流反复出现', '案例应关注机制，而不只关注结果数字'] }
}

const brief = computed(() => briefs[props.chapter] ?? briefs['1'])
</script>

<template>
  <aside class="chapter-brief" :aria-label="`第 ${chapter} 章阅读导引`">
    <div class="brief-meta">
      <span>CH.{{ chapter.padStart(2, '0') }} / {{ brief.code }}</span>
      <span>{{ brief.time }}</span>
      <span>{{ brief.stage }}</span>
    </div>
    <p class="brief-summary">{{ brief.summary }}</p>
    <div class="brief-takeaways">
      <span>本章带走</span>
      <ol><li v-for="item in brief.takeaways" :key="item">{{ item }}</li></ol>
    </div>
  </aside>
</template>
