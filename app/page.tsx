'use client';

import { useMemo, useState } from 'react';
import { cases, prices, scenarios, subscriptionPlans, timeline, updateBrief, vendors } from './data';

type RegionFilter = '全部' | '国内' | '海外';
type CurrencyFilter = '全部' | 'USD' | 'CNY';

const capabilityFilters = ['全部能力', '推理', '代码', '多模态', 'Agent', 'RAG', '低成本', '私有化', '开放权重'];
const subscriptionUseFilters = ['全部用途', '日常问答', '写稿办公', '写代码', '做视频', '做研究', '只要免费'];
const years = ['2023', '2024', '2025', '2026'];

function formatMoney(value: number, digits = 2) {
  return new Intl.NumberFormat('zh-CN', { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);
}

export default function Home() {
  const [subscriptionRegion, setSubscriptionRegion] = useState<RegionFilter>('全部');
  const [subscriptionUse, setSubscriptionUse] = useState('全部用途');
  const [subscriptionQuery, setSubscriptionQuery] = useState('');
  const [region, setRegion] = useState<RegionFilter>('全部');
  const [capability, setCapability] = useState('全部能力');
  const [query, setQuery] = useState('');
  const [showAllVendors, setShowAllVendors] = useState(false);
  const [year, setYear] = useState('2026');
  const [currency, setCurrency] = useState<CurrencyFilter>('全部');
  const [tier, setTier] = useState('全部档位');
  const [selectedPriceIndex, setSelectedPriceIndex] = useState(2);
  const [monthlyRequests, setMonthlyRequests] = useState(100000);
  const [inputTokens, setInputTokens] = useState(2000);
  const [outputTokens, setOutputTokens] = useState(500);
  const [cacheRate, setCacheRate] = useState(30);
  const [passRate, setPassRate] = useState(85);
  const [fxRate, setFxRate] = useState(7.2);

  const filteredSubscriptionPlans = useMemo(() => {
    const keyword = subscriptionQuery.trim().toLowerCase();
    return subscriptionPlans.filter((item) => {
      const regionMatch = subscriptionRegion === '全部' || item.region === subscriptionRegion;
      const useMatch = subscriptionUse === '全部用途'
        || (subscriptionUse === '只要免费' ? !item.paid : item.uses.some((use) => use === subscriptionUse));
      const queryMatch = !keyword || [item.vendor, item.product, item.plan, item.coreModel, item.benefits, item.note]
        .join(' ').toLowerCase().includes(keyword);
      return regionMatch && useMatch && queryMatch;
    });
  }, [subscriptionRegion, subscriptionUse, subscriptionQuery]);

  const filteredVendors = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    return vendors.filter((item) => {
      const regionMatch = region === '全部' || item.region === region;
      const capabilityMatch = capability === '全部能力' || item.capabilities.includes(capability);
      const queryMatch = !keyword || [item.vendor, item.family, item.route, item.positioning, item.deployment, ...item.capabilities]
        .join(' ').toLowerCase().includes(keyword);
      return regionMatch && capabilityMatch && queryMatch;
    });
  }, [region, capability, query]);

  const activeVendorFilter = region !== '全部' || capability !== '全部能力' || query.trim().length > 0;
  const visibleVendors = showAllVendors || activeVendorFilter ? filteredVendors : filteredVendors.slice(0, 12);

  const filteredPrices = useMemo(() => prices.filter((item) => {
    const currencyMatch = currency === '全部' || item.currency === currency;
    const tierMatch = tier === '全部档位' || item.tier === tier;
    return currencyMatch && tierMatch;
  }), [currency, tier]);

  const selectedPrice = prices[selectedPriceIndex];
  const normalizedCacheRate = Math.min(Math.max(cacheRate / 100, 0), 1);
  const normalizedPassRate = Math.min(Math.max(passRate / 100, .01), 1);
  const inputPrice = selectedPrice.input * (1 - normalizedCacheRate) + (selectedPrice.cached ?? selectedPrice.input) * normalizedCacheRate;
  const monthlyOriginal = monthlyRequests * (inputTokens * inputPrice + outputTokens * selectedPrice.output) / 1_000_000;
  const monthlyCny = selectedPrice.currency === 'USD' ? monthlyOriginal * fxRate : monthlyOriginal;
  const perThousand = monthlyRequests > 0 ? monthlyCny / monthlyRequests * 1000 : 0;
  const perEffectiveResult = monthlyRequests > 0 ? monthlyCny / (monthlyRequests * normalizedPassRate) : 0;

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回首页"><strong>模界志</strong><span>AI 模型决策周报</span></a>
        <nav aria-label="主要导航">
          <a href="#weekly-update">周更</a><a href="#subscriptions">订阅</a><a href="#vendor-map">厂商</a><a href="#timeline">时间线</a><a href="#pricing">API 价格</a><a href="#scenarios">场景</a><a href="#cases">案例</a>
        </nav>
        <a className="header-download" href="/AI模型厂商全景_2023-2026.xlsx" download>下载数据 ↓</a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">2023—2026 · 每周监测　·　数据核验 {updateBrief.lastVerified}</p>
            <h1>四年模型潮，<br /><span>今天怎么选？</span></h1>
            <p className="hero-lede">不是另一张“谁最强”榜单。把 2023—2026 的厂商路线、代表模型、价格与真实案例，放回产品经理真正要做的场景决策里。</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#subscriptions">选订阅档位</a>
              <a className="button button-secondary" href="#pricing">算一笔账</a>
            </div>
          </div>
          <aside className="issue-card" aria-label="本期摘要">
            <p className="issue-label">完整数据集</p><div className="issue-number">24</div>
            <p>家代表厂商；网页提供精选交互，完整明细可下载 Excel。</p>
            <dl><div><dt>订阅档位</dt><dd>45 个</dd></div><div><dt>时间轴</dt><dd>96 个节点</dd></div><div><dt>API 价格</dt><dd>44 条</dd></div><div><dt>公开案例</dt><dd>25 个</dd></div></dl>
          </aside>
        </section>

        <section className="manifesto" aria-label="核心判断">
          <p>模型不是选美，是系统工程。</p><p>旗舰负责规划，小模型负责执行，专业模型处理语音、OCR 与图像。</p><p>最后比较的不是 Token 单价，而是每个有效结果成本。</p>
        </section>

        <section className="weekly-update" id="weekly-update" aria-labelledby="weekly-title">
          <div className="weekly-update-bar">
            <p><span className="status-dot" aria-hidden="true" /> WEEKLY WATCH</p>
            <span>{updateBrief.cadence}</span>
          </div>
          <div className="weekly-update-grid">
            <div className="weekly-summary">
              <p>最新数据状态</p>
              <h2 id="weekly-title">已核验<br /><span>{updateBrief.lastVerified}</span></h2>
              <dl><div><dt>下次核验</dt><dd>{updateBrief.nextReview}</dd></div><div><dt>监测范围</dt><dd>{updateBrief.scope}</dd></div></dl>
            </div>
            <div className="weekly-changes">
              <div className="weekly-changes-head"><div><p>本周变更</p><h3>这一期，哪里变了</h3></div><span>{String(updateBrief.changes.length).padStart(2, '0')} 项</span></div>
              <ol>{updateBrief.changes.map((item, index) => <li key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><div><small>{item.type}</small><strong>{item.title}</strong></div><p>{item.detail}</p></li>)}</ol>
            </div>
          </div>
        </section>

        <section className="subscription-section" id="subscriptions">
          <div className="section-heading">
            <div><p className="section-kicker">01 / 产品订阅</p><h2>按用途，选到具体档位</h2></div>
            <p>这里比较个人用户实际购买的产品会员，与后文开发者 API 按量价格分开。月费保留官网原币；登录态或应用商店价格会在备注中提示复核。</p>
          </div>
          <div className="subscription-filters" aria-label="订阅档位筛选">
            <div className="filter-row" aria-label="用途">
              {subscriptionUseFilters.map((item) => <button className={subscriptionUse === item ? 'filter-chip active' : 'filter-chip'} key={item} onClick={() => setSubscriptionUse(item)} type="button">{item}</button>)}
            </div>
            <div className="subscription-filter-bottom">
              <div className="filter-row" aria-label="地区">
                {(['全部', '海外', '国内'] as RegionFilter[]).map((item) => <button className={subscriptionRegion === item ? 'filter-chip active' : 'filter-chip'} key={item} onClick={() => setSubscriptionRegion(item)} type="button">{item === '全部' ? '全部地区' : item}</button>)}
              </div>
              <label className="search-box"><span aria-hidden="true">⌕</span><input aria-label="搜索产品订阅档位" onChange={(event) => setSubscriptionQuery(event.target.value)} placeholder="搜厂商、产品、档位或模型…" type="search" value={subscriptionQuery} /></label>
            </div>
          </div>
          <div className="results-meta"><span>找到 {filteredSubscriptionPlans.length} 个订阅档位</span><span>个人月付公开价 · 最后核验 {updateBrief.lastVerified}</span></div>
          <div className="subscription-table-wrap">
            <table className="subscription-table">
              <thead><tr><th>厂商 / 产品</th><th>档位</th><th>月费</th><th>核心模型</th><th>权益</th><th>备注</th><th>数据源</th></tr></thead>
              <tbody>{filteredSubscriptionPlans.map((item) => <tr key={`${item.product}-${item.plan}`}><td><strong>{item.vendor}</strong><span>{item.product} · {item.region}</span></td><td>{item.plan}</td><td><strong className="subscription-fee">{item.monthlyFee}</strong></td><td>{item.coreModel}</td><td>{item.benefits}</td><td>{item.note}</td><td><a href={item.source} target="_blank" rel="noreferrer">官网 ↗</a></td></tr>)}</tbody>
            </table>
          </div>
          <div className="subscription-card-list">
            {filteredSubscriptionPlans.map((item) => <article className="subscription-card" key={`${item.product}-${item.plan}-mobile`}>
              <div className="subscription-card-head"><div><span>{item.region} · {item.product}</span><h3>{item.vendor}</h3></div><strong>{item.monthlyFee}</strong></div>
              <dl><div><dt>档位</dt><dd>{item.plan}</dd></div><div><dt>核心模型</dt><dd>{item.coreModel}</dd></div><div><dt>权益</dt><dd>{item.benefits}</dd></div><div><dt>备注</dt><dd>{item.note}</dd></div></dl>
              <a href={item.source} target="_blank" rel="noreferrer">核对官网 ↗</a>
            </article>)}
          </div>
          {filteredSubscriptionPlans.length === 0 && <div className="empty-state">没有匹配档位。试试切换用途、地区或清空搜索。</div>}
        </section>

        <section className="vendor-section" id="vendor-map">
          <div className="section-heading">
            <div><p className="section-kicker">02 / 厂商地图</p><h2>先看路线，再挑模型</h2></div>
            <p>24 家厂商按同一字段展开。价格为每百万输入 / 输出 Token 的查询日快照，采购前请点击官网复核。</p>
          </div>
          <div className="filter-panel" aria-label="厂商筛选">
            <div className="filter-row" aria-label="地区">
              {(['全部', '海外', '国内'] as RegionFilter[]).map((item) => <button className={region === item ? 'filter-chip active' : 'filter-chip'} key={item} onClick={() => setRegion(item)} type="button">{item === '全部' ? '全部地区' : item}</button>)}
            </div>
            <div className="filter-row" aria-label="能力">
              {capabilityFilters.map((item) => <button className={capability === item ? 'filter-chip active' : 'filter-chip'} key={item} onClick={() => setCapability(item)} type="button">{item}</button>)}
            </div>
            <label className="search-box"><span aria-hidden="true">⌕</span><input aria-label="搜索厂商、模型、部署或能力" onChange={(event) => setQuery(event.target.value)} placeholder="搜厂商、模型、部署或能力…" type="search" value={query} /></label>
          </div>
          <div className="results-meta"><span>显示 {visibleVendors.length} / {filteredVendors.length} 个结果</span><span>官网来源优先 · 非综合排名</span></div>
          <div className="vendor-grid">
            {visibleVendors.map((item, index) => (
              <article className="vendor-card" key={item.vendor}>
                <div className="card-index">{String(index + 1).padStart(2, '0')}</div>
                <div className="card-topline"><span>{item.region}</span><span>{item.route}</span></div>
                <h3>{item.vendor}</h3><p className="model-family">{item.family}</p><p className="positioning">{item.positioning}</p>
                <div className="tags">{item.capabilities.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <dl className="compact-facts"><div><dt>部署</dt><dd>{item.deployment}</dd></div><div><dt>代表价格</dt><dd>{item.price}</dd></div></dl>
                <a href={item.source} target="_blank" rel="noreferrer">核对官网 <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
          {filteredVendors.length === 0 && <div className="empty-state">没有匹配项。试试清空搜索或切换筛选条件。</div>}
          {!activeVendorFilter && filteredVendors.length > 12 && <button className="wide-toggle" onClick={() => setShowAllVendors((value) => !value)} type="button">{showAllVendors ? '收起厂商列表 ↑' : `查看全部 ${filteredVendors.length} 家厂商 ↓`}</button>}
        </section>

        <section className="timeline-section" id="timeline">
          <div className="section-heading light-heading">
            <div><p className="section-kicker">03 / 模型时间线</p><h2>四年，四次换挡</h2></div>
            <p>2023 是聊天与基础模型普及；2024 转向原生多模态和长上下文；2025 推理与 Agent 成为主轴；2026 进入模型系统与成本工程。</p>
          </div>
          <div className="year-switch" role="tablist" aria-label="选择年份">
            {years.map((item) => <button aria-selected={year === item} className={year === item ? 'active' : ''} key={item} onClick={() => setYear(item)} role="tab" type="button">{item}</button>)}
          </div>
          <div className="timeline-list" role="tabpanel">
            {timeline[year].map((item, index) => (
              <a className="timeline-item" href={item.source} key={`${item.vendor}-${item.model}`} target="_blank" rel="noreferrer">
                <span className="timeline-no">{String(index + 1).padStart(2, '0')}</span><span className="timeline-vendor">{item.vendor}</span><strong>{item.model}</strong><span className="timeline-shift">{item.shift}</span><span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="section-heading">
            <div><p className="section-kicker">04 / API 价格实验室</p><h2>别只比 Token 单价</h2></div>
            <p>统一按每百万 Token 展示。缓存命中、长上下文、搜索工具、失败重试与业务通过率都可能改变最终排序。</p>
          </div>
          <div className="calculator-shell">
            <div className="calculator-inputs">
              <label className="model-select">模型<select value={selectedPriceIndex} onChange={(event) => setSelectedPriceIndex(Number(event.target.value))}>{prices.map((item, index) => <option key={`${item.vendor}-${item.model}`} value={index}>{item.vendor} · {item.model}</option>)}</select></label>
              <div className="input-grid">
                <label>月请求数<input min="0" step="10000" type="number" value={monthlyRequests} onChange={(event) => setMonthlyRequests(Number(event.target.value))} /></label>
                <label>平均输入 Token<input min="0" step="100" type="number" value={inputTokens} onChange={(event) => setInputTokens(Number(event.target.value))} /></label>
                <label>平均输出 Token<input min="0" step="100" type="number" value={outputTokens} onChange={(event) => setOutputTokens(Number(event.target.value))} /></label>
                <label>缓存命中率 %<input min="0" max="100" type="number" value={cacheRate} onChange={(event) => setCacheRate(Number(event.target.value))} /></label>
                <label>业务通过率 %<input min="1" max="100" type="number" value={passRate} onChange={(event) => setPassRate(Number(event.target.value))} /></label>
                <label>USD → CNY<input min="0" step="0.1" type="number" value={fxRate} onChange={(event) => setFxRate(Number(event.target.value))} /></label>
              </div>
            </div>
            <div className="calculator-output" aria-live="polite">
              <p className="output-label">按当前假设</p><h3>{selectedPrice.model}</h3>
              <div className="cost-hero"><span>月模型费</span><strong>¥ {formatMoney(monthlyCny)}</strong><small>{selectedPrice.currency === 'USD' ? `$ ${formatMoney(monthlyOriginal)} 原币` : '人民币公开价口径'}</small></div>
              <dl><div><dt>每千次请求</dt><dd>¥ {formatMoney(perThousand, 3)}</dd></div><div><dt>每个有效结果</dt><dd>¥ {formatMoney(perEffectiveResult, 4)}</dd></div><div><dt>缓存后输入价</dt><dd>{selectedPrice.currency === 'USD' ? '$' : '¥'} {formatMoney(inputPrice, 4)} / MTok</dd></div></dl>
              <p>不含搜索、工具、音视频、缓存写入、失败重试、专属吞吐和人工复核。</p>
            </div>
          </div>

          <div className="price-toolbar">
            <div>{(['全部', 'USD', 'CNY'] as CurrencyFilter[]).map((item) => <button className={currency === item ? 'filter-chip active' : 'filter-chip'} key={item} onClick={() => setCurrency(item)} type="button">{item === '全部' ? '全部币种' : item}</button>)}</div>
            <div>{['全部档位', '旗舰', '均衡', '低成本'].map((item) => <button className={tier === item ? 'filter-chip active' : 'filter-chip'} key={item} onClick={() => setTier(item)} type="button">{item}</button>)}</div>
          </div>
          <div className="price-table-wrap">
            <table className="price-table"><thead><tr><th>厂商 / 模型</th><th>档位</th><th>币种</th><th>输入</th><th>缓存读</th><th>输出</th><th>条件</th><th>来源</th></tr></thead>
              <tbody>{filteredPrices.map((item) => <tr key={`${item.vendor}-${item.model}`}><td><strong>{item.model}</strong><span>{item.vendor}</span></td><td>{item.tier}</td><td>{item.currency}</td><td>{item.input}</td><td>{item.cached ?? '—'}</td><td>{item.output}</td><td>{item.condition}</td><td><a href={item.source} target="_blank" rel="noreferrer">官网 ↗</a></td></tr>)}</tbody>
            </table>
          </div>
        </section>

        <section className="scenario-section" id="scenarios">
          <div className="section-heading">
            <div><p className="section-kicker">05 / 场景选型</p><h2>先选任务，再选模型</h2></div>
            <p>候选模型只是第一轮短名单。最终结论必须来自你的数据、工具链、延迟目标与合规边界。</p>
          </div>
          <div className="scenario-list">
            {scenarios.map((item, index) => <details key={item.title} open={index === 0}><summary><span>{String(index + 1).padStart(2, '0')}</span><strong>{item.title}</strong><em>{item.priority}优先级</em><b aria-hidden="true">＋</b></summary><div className="scenario-body"><div><small>首轮 POC 候选</small><p>{item.models}</p></div><div><small>核心指标</small><p>{item.metric}</p></div><div><small>建议动作</small><p>{item.action}</p></div></div></details>)}
          </div>
        </section>

        <section className="case-section" id="cases">
          <div className="section-heading light-heading">
            <div><p className="section-kicker">06 / 应用案例</p><h2>模型如何真正落地</h2></div>
            <p>案例用于发现可复制的方法，不用于证明某个模型在所有任务上更强。A/B 代表证据完整度，不代表效果评分。</p>
          </div>
          <div className="case-grid">
            {cases.map((item, index) => <a className="case-card" href={item.source} key={item.org} target="_blank" rel="noreferrer"><span className="case-number">{String(index + 1).padStart(2, '0')}</span><p className="case-field">{item.field}</p><h3>{item.org}</h3><p className="case-model">{item.model}</p><p>{item.result}</p><div><span>{item.evidence}</span><span>查看来源 ↗</span></div></a>)}
          </div>
        </section>

        <section className="method-section" id="method">
          <div><p className="section-kicker">07 / 方法与边界</p><h2>价格是快照，案例是线索。</h2></div>
          <div className="method-copy"><p>输入、输出、缓存读、缓存写不是同一种价格；USD 与 CNY 不直接排名。思考 Token、长上下文、搜索、工具与多媒体通常另计。</p><p>开放权重不等于开源、免费或可无条件商用。私有化项目还要核查许可证、目标硬件吞吐、量化损失、安全与三年 TCO。</p><p>案例指标多为厂商或客户自报，RAG、Prompt、工具和流程共同贡献结果，不能全部归因于底模。</p><a className="button button-primary" href="/AI模型厂商全景_2023-2026.xlsx" download>下载完整 Excel</a></div>
        </section>
      </main>

      <footer><span>模界志 · AI 模型决策周报</span><span>完整数据集：45 个订阅档位 · 24 家模型厂商 · 44 条 API 价格 · 25 个案例</span><span>每周一更新 · 最后核验 {updateBrief.lastVerified}</span></footer>
    </div>
  );
}
