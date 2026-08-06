<script setup lang="ts">
import { computed, ref } from 'vue'

type Level = 'delivery' | 'customer' | 'business' | 'organization'
type Metric = { id: string; name: string; en?: string; level: Level; definition: string; benchmark: string; warning: string; chapter: string }

const filters: { key: 'all' | Level; label: string; code: string }[] = [
  { key: 'all', label: '全部指标', code: '20' },
  { key: 'delivery', label: '交付层', code: '05' },
  { key: 'customer', label: '客户层', code: '05' },
  { key: 'business', label: '商业层', code: '06' },
  { key: 'organization', label: '组织层', code: '04' }
]

const levelNames: Record<Level, string> = { delivery: '交付', customer: '客户', business: '商业', organization: '组织' }
const active = ref<'all' | Level>('all')

const metrics: Metric[] = [
  { id: 'D01', name: '价值实现时间', en: 'TTV', level: 'delivery', definition: '从进场到客户获得第一次可衡量价值的时间。', benchmark: '验证 2–6 周；完整部署 1–4 个月', warning: '周期持续变长，且没有新的业务价值证据', chapter: '第 2、4 章' },
  { id: 'D02', name: '概念验证转化率', level: 'delivery', definition: '验证项目进入付费生产部署的比例。', benchmark: '结合客户筛选难度观察趋势', warning: '长期过低；或接近 100% 却只接安全项目', chapter: '第 2、3 章' },
  { id: 'D03', name: '评估达标率', level: 'delivery', definition: 'AI 输出通过业务评估集的比例及其时间走势。', benchmark: '按场景建立基线并持续提升', warning: '线上质量与离线评估明显背离', chapter: '第 4 章' },
  { id: 'D04', name: '部署频次与回滚率', level: 'delivery', definition: '交付迭代速度及失败部署占比。', benchmark: '高频小步，周级或日级部署', warning: '大版本长期堆积，回滚率突然升高', chapter: '第 4 章' },
  { id: 'D05', name: '缺陷逃逸率', level: 'delivery', definition: '上线后才被发现的缺陷占全部缺陷的比例。', benchmark: '随评估与测试成熟持续下降', warning: '同类缺陷重复进入生产环境', chapter: '第 4、5 章' },
  { id: 'C01', name: '激活率', level: 'customer', definition: '目标用户中形成稳定使用习惯的比例。', benchmark: '分母必须是真实目标用户，而非账号数', warning: '系统已上线，但周活跃长期低迷', chapter: '第 4 章' },
  { id: 'C02', name: '使用深度', level: 'customer', definition: '关键功能覆盖、频次分布与自助探索程度。', benchmark: '从打卡使用走向工作流嵌入', warning: '只在培训或领导检查时出现使用峰值', chapter: '第 4、5 章' },
  { id: 'C03', name: '健康度评分', level: 'customer', definition: '使用、价值、关系和商业信号的综合评分。', benchmark: '每周全量巡视，设置明确警戒线', warning: '连续下降或任一核心维度归零', chapter: '第 5 章' },
  { id: 'C04', name: '支持者覆盖数', level: 'customer', definition: '客户组织内活跃盟友的数量与层级分布。', benchmark: '三点成网，覆盖业务、技术与决策层', warning: '所有进展依赖单一联系人', chapter: '第 3、5 章' },
  { id: 'C05', name: '提前续约意向', level: 'customer', definition: '到期前两个季度直接询问真实续约倾向。', benchmark: '比小样本 NPS 更接近企业真实决策', warning: '支持者回避问题或无法说服预算负责人', chapter: '第 5 章' },
  { id: 'B01', name: '净收入留存', en: 'NRR', level: 'business', definition: '存量客户收入含流失、降级和扩容后的年度变化。', benchmark: '及格 100%；优秀 120%+', warning: '新增收入掩盖存量客户收缩', chapter: '第 5、6 章' },
  { id: 'B02', name: '交付毛利率', level: 'business', definition: '客户收入扣除人力、差旅和云资源等直接成本。', benchmark: '早期 20–40%；平台化后向 60%+ 提升', warning: '客户增加但毛利率没有改善趋势', chapter: '第 6、7 章' },
  { id: 'B03', name: '定制递减率', level: 'business', definition: '后续客户相对首个客户的定制工作量降幅。', benchmark: '第 N 个客户应显著少于第 1 个', warning: '连续三个客户定制量不降', chapter: '第 7 章' },
  { id: 'B04', name: '销售周期', level: 'business', definition: '从首次接触到合同签署所需时间。', benchmark: '应随信任资产与案例积累缩短', warning: '验证成功后仍长期无法进入采购', chapter: '第 3、6 章' },
  { id: 'B05', name: '获客成本回收期', en: 'CAC Payback', level: 'business', definition: '合同毛利用多久收回免费验证等获客投入。', benchmark: '随案例积累与复用度提升而缩短', warning: '扩张越快，现金缺口反而越大', chapter: '第 3、6 章' },
  { id: 'B06', name: '客户终身价值比', en: 'LTV / CAC', level: 'business', definition: '客户终身价值与获客成本的比例。', benchmark: '成熟企业级业务通常以 3+ 为健康线', warning: '低于 2 且净收入留存没有改善', chapter: '第 6 章' },
  { id: 'O01', name: '现场到产品回流速率', level: 'organization', definition: '单位时间内现场经验沉淀为产品能力的数量。', benchmark: '组件、手册与平台提案持续产生', warning: '交付很忙，但产品路线没有任何变化', chapter: '第 7 章' },
  { id: 'O02', name: '交付资产复用率', level: 'organization', definition: '新项目中复用既有组件、模板和清单的比例。', benchmark: '应逐季度上升', warning: '每个团队都在重新发明相同能力', chapter: '第 7 章' },
  { id: 'O03', name: 'FDE 人均产能', level: 'organization', definition: '每名前线部署工程师所支撑的年度收入。', benchmark: '平台化后持续抬升', warning: '收入增长始终只能依靠同比增加人头', chapter: '第 6、7 章' },
  { id: 'O04', name: '团队续航指标', level: 'organization', definition: '差旅、值班、离职与倦怠信号的组合观察。', benchmark: '负荷透明、轮换合理、风险可提前干预', warning: '长期高差旅与关键人员单点并存', chapter: '第 1、7 章' }
]

const visibleMetrics = computed(() => active.value === 'all' ? metrics : metrics.filter(item => item.level === active.value))
</script>

<template>
  <section class="metric-toolkit" aria-labelledby="metric-toolkit-title">
    <header class="metric-intro">
      <div><span>FIELD INSTRUMENTS / 现场仪表</span><h2 id="metric-toolkit-title">别铺满一面墙。<br>只盯住能改变行动的数。</h2></div>
      <p>每个项目选择一个价值指标、一个使用指标和一个关系指标。指标不是汇报装饰，而是团队下一步动作的触发器。</p>
    </header>

    <div class="metric-filter" role="group" aria-label="按指标层级筛选">
      <button v-for="filter in filters" :key="filter.key" type="button" :aria-pressed="active === filter.key" @click="active = filter.key">
        <span>{{ filter.label }}</span><b>{{ filter.code }}</b>
      </button>
    </div>

    <p class="metric-result" aria-live="polite">当前显示 {{ visibleMetrics.length }} 项指标</p>

    <div class="metric-grid">
      <article v-for="metric in visibleMetrics" :key="metric.id" class="metric-card" :data-level="metric.level">
        <header><span>{{ metric.id }} · {{ levelNames[metric.level] }}</span><b v-if="metric.en">{{ metric.en }}</b></header>
        <h3>{{ metric.name }}</h3>
        <p>{{ metric.definition }}</p>
        <dl>
          <div><dt>参考读数</dt><dd>{{ metric.benchmark }}</dd></div>
          <div><dt>预警信号</dt><dd>{{ metric.warning }}</dd></div>
        </dl>
        <footer>{{ metric.chapter }}</footer>
      </article>
    </div>
  </section>
</template>
