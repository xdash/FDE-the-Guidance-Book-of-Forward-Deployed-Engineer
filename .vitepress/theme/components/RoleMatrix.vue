<script setup lang="ts">
const roles = [
  { role: 'FDE', moment: '签约前后全程', output: '生产系统与业务结果', signal: '结果 + 产品回流', active: true },
  { role: '售前', moment: '签约前', output: '方案、演示与投标', signal: '赢单率' },
  { role: '传统实施', moment: '签约后', output: '按范围完成上线', signal: '验收与工期' },
  { role: '咨询顾问', moment: '决策与规划期', output: '诊断、建议与路线图', signal: '洞察与采纳' },
  { role: '客户成功', moment: '上线后', output: '使用、续约与扩容', signal: '留存与健康度' }
]
</script>

<template>
  <figure class="visual-panel role-matrix">
    <figcaption><span>VISUAL 01 / 角色边界</span><strong>FDE 与相邻岗位，不只是名字不同</strong><p>关键区别在于：能否亲手进入生产环境，并同时为客户结果和产品学习负责。</p></figcaption>
    <div class="matrix-table" role="table" aria-label="FDE 与相邻岗位对比">
      <div class="matrix-row matrix-head" role="row"><span role="columnheader">角色</span><span role="columnheader">介入时点</span><span role="columnheader">核心作品</span><span role="columnheader">成功信号</span></div>
      <div v-for="item in roles" :key="item.role" class="matrix-row" :class="{ active: item.active }" role="row">
        <strong role="cell">{{ item.role }}</strong><span role="cell">{{ item.moment }}</span><span role="cell">{{ item.output }}</span><span role="cell">{{ item.signal }}</span>
      </div>
    </div>
  </figure>
</template>
