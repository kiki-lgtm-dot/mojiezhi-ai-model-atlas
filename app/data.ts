export type Region = '国内' | '海外';

export const updateBrief = {
  cadence: '每周一 09:00（北京时间）',
  lastVerified: '2026-09-07',
  nextReview: '2026-09-14 09:00',
  scope: '订阅档位 · API 价格 · 模型发布 · 应用案例',
  changes: [
    { type: '模型发布', title: '9 月前沿模型集中更新', detail: '新增 GPT-6 Astra、Claude Fable 5.1、Gemini 3.8 Flash / Lyria 3.5，以及 MAI-Transcribe-2。' },
    { type: 'API 价格', title: '旗舰价格表补齐', detail: '补入 Astra、Fable 5.1、Gemini 3.8 Flash、Qwen3.8-Max、ERNIE 5.1、Hy4 Preview、GLM-5.3 与 MiniMax M3。' },
    { type: '订阅权益', title: '消费者模型与额度校正', detail: '更新 ChatGPT、Claude、Google AI 与 Perplexity 的模型、Projects 和 Computer credits 口径；新增 SenseNova 免费 Token Plan。' },
    { type: '模型下线', title: '未来退役计划补记', detail: '补记 Sora 2 / Videos API、xAI Imagine 旧端点与 Mistral Leanstral 1.5 的计划停用日期。' },
  ],
};

export type Vendor = {
  region: Region;
  vendor: string;
  family: string;
  route: string;
  positioning: string;
  capabilities: string[];
  deployment: string;
  price: string;
  source: string;
};

export const vendors: Vendor[] = [
  { region: '海外', vendor: 'OpenAI', family: 'GPT-6 Astra / GPT-5.6 / Codex / Sora', route: '前沿闭源', positioning: '复杂推理、代码 Agent、多模态与开发者平台', capabilities: ['推理', '代码', '多模态'], deployment: 'API / 云市场', price: 'Astra $10 / $50；Luna $0.20 / $1.20；Sol $4 / $20', source: 'https://developers.openai.com/api/docs/models/gpt-6-astra' },
  { region: '海外', vendor: 'Anthropic', family: 'Claude Fable 5.1 / Opus / Sonnet / Haiku', route: '长任务与企业安全', positioning: '长上下文、代码、工具使用与复杂企业工作流', capabilities: ['长任务', '代码', '企业'], deployment: 'API / AWS / Google Cloud / Microsoft', price: 'Fable $10 / $50；Sonnet $2 / $10；Opus $5 / $25', source: 'https://platform.claude.com/docs/en/about-claude/pricing' },
  { region: '海外', vendor: 'Google DeepMind', family: 'Gemini 3.8 / 3.x / Gemma / Lyria', route: '原生多模态', positioning: '搜索、多模态、长上下文与 Workspace 生态', capabilities: ['多模态', '搜索', '长上下文'], deployment: 'Gemini API / Vertex AI / 端侧', price: '3.8 Flash 推广价 $0.75 / $3.75；Flash-Lite $0.30 / $2.50', source: 'https://ai.google.dev/gemini-api/docs/pricing' },
  { region: '海外', vendor: 'Meta', family: 'Llama 4 / Muse Spark 1.3 / Muse Voice / Muse Image', route: '开放权重与第一方 API', positioning: '开放权重、可控私有化、多模态生成与庞大开发者生态', capabilities: ['开放权重', '私有化', '多模态'], deployment: 'Meta Model API / 自建 / 云厂商托管', price: 'Voice Transcribe $0.18 / 小时；Muse Image $0.01 / 张；Llama 自建按算力计费', source: 'https://developer.meta.com/ai/' },
  { region: '海外', vendor: 'xAI', family: 'Grok 4.6 / Voice / Imagine', route: '实时搜索与 Agent', positioning: '实时网页与 X 搜索、代码、语音和内容生成', capabilities: ['推理', '搜索', '语音'], deployment: 'xAI API / 云市场', price: 'Grok 4.6 $2 / $6（短上下文）', source: 'https://docs.x.ai/developers/pricing' },
  { region: '海外', vendor: 'Mistral AI', family: 'Mistral 3 / Small 4 / OCR 4.1', route: '开放与私有化', positioning: '轻量模型、代码、OCR 与欧洲可控部署', capabilities: ['低成本', 'OCR', '私有化'], deployment: 'API / VPC / 自建', price: 'Small 4 $0.15 / $0.60', source: 'https://docs.mistral.ai/resources/changelogs' },
  { region: '海外', vendor: 'Cohere', family: 'Command A+ / Embed / Rerank', route: '企业检索', positioning: '企业 RAG、检索、重排、多语言与数据驻留', capabilities: ['RAG', '企业', '多语言'], deployment: 'API / VPC / Model Vault', price: 'Command A+ 免费至速率限制；生产经 Model Vault 按实例 / 方案计费', source: 'https://docs.cohere.com/docs/command-a-plus' },
  { region: '海外', vendor: 'Amazon AWS', family: 'Nova / Bedrock 模型市场 / Claude Fable 5.1', route: '企业模型平台', positioning: '统一托管多家模型，兼顾治理、评测与企业采购', capabilities: ['模型平台', '企业', 'RAG'], deployment: 'Amazon Bedrock / SageMaker', price: '随模型、区域与吞吐档位变化', source: 'https://aws.amazon.com/about-aws/whats-new/2026/09/claude-fable-5-1-aws/' },
  { region: '海外', vendor: 'Microsoft', family: 'Phi / MAI-Transcribe-2 / Azure AI / GPT-6 Astra', route: '端侧与企业平台', positioning: '端侧小模型、语音、Copilot 与 Azure 企业模型组合', capabilities: ['端侧', '企业', '工具'], deployment: '本地 / Azure / Copilot', price: 'Foundry Astra 短上下文 $10 / $50；其他模型按服务计费', source: 'https://azure.microsoft.com/en-us/blog/gpt-6-astra-frontier-intelligence-for-work-now-generally-available-in-microsoft-foundry/' },
  { region: '海外', vendor: 'NVIDIA', family: 'Nemotron / NIM / NeMo', route: '算力与模型系统', positioning: '高吞吐 Agent、开放模型配方与 GPU 推理优化', capabilities: ['私有化', '推理优化', 'Agent'], deployment: 'NIM / 自建 GPU / 云端', price: '按 GPU、NIM 或 AI Enterprise 计费', source: 'https://www.nvidia.com/en-us/ai-data-science/foundation-models/nemotron/' },
  { region: '国内', vendor: '阿里云 / 通义千问', family: 'Qwen3.8 / Qwen Coder / VL', route: '开放生态', positioning: '中文、代码、全模态与开放权重模型生态', capabilities: ['中文', '代码', '开放权重'], deployment: '百炼 API / 云市场 / 自建', price: 'Qwen3.8-Max ≤1M ¥12 / ¥36；Qwen3-Max ≤32K ¥2.5 / ¥10', source: 'https://help.aliyun.com/zh/model-studio/model-pricing' },
  { region: '国内', vendor: '百度 / 文心 ERNIE', family: 'ERNIE 5.1 / 5.0 / 4.5 Turbo', route: '企业知识与搜索', positioning: '中文知识、搜索、企业 RAG、Agent 与私有化', capabilities: ['中文', 'RAG', '企业'], deployment: '千帆 API / 专属资源 / 私有化', price: 'ERNIE 5.1 ≤32K ¥4 / ¥18；4.5 Turbo ¥0.8 / ¥3.2', source: 'https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya' },
  { region: '国内', vendor: '字节跳动 / 豆包 Seed', family: 'Seed 2.x / Seedream / Seedance', route: '高并发多模态', positioning: 'Agent、代码、实时语音、图像视频与内容生产', capabilities: ['多模态', '低成本', '语音'], deployment: '火山方舟 API / 批量 / 专属', price: '文本与多媒体按模型和档位计费', source: 'https://www.volcengine.com/product/doubao' },
  { region: '国内', vendor: '腾讯 / 混元', family: 'Hunyuan Hy4 Preview / Hy3 / 图像 / 3D', route: '企业与工具生态', positioning: '中文、企业 Agent、办公、代码及社交内容生态', capabilities: ['企业', 'Agent', '多模态'], deployment: '腾讯云 API / 专属部署', price: 'Hy4 Preview ¥6 / ¥18；Hy3 ¥1 / ¥4', source: 'https://cloud.tencent.com/document/product/1823/130055' },
  { region: '国内', vendor: '智谱 AI', family: 'GLM-5.3 / GLM Coding / GLM-4.7 Flash', route: '中文 Agent', positioning: '中文 Agent、代码、工具调用与开放模型', capabilities: ['Agent', '中文', '私有化'], deployment: 'BigModel API / 自建', price: 'GLM-5.3 ¥8 / ¥28；FlashX ¥0.5 / ¥3', source: 'https://bigmodel.cn/pricing' },
  { region: '国内', vendor: 'DeepSeek', family: 'DeepSeek V4 / R1', route: '高性价比推理', positioning: '推理、代码、开放权重与低成本 API', capabilities: ['推理', '代码', '低成本'], deployment: 'API / 自建 / 云厂商托管', price: 'V4 Flash 空闲 ¥1.5 / ¥4.5；高峰 ¥3 / ¥9；缓存命中 ¥0.05 / ¥0.10', source: 'https://api-docs.deepseek.com/zh-cn/quick_start/pricing/' },
  { region: '国内', vendor: '月之暗面 / Kimi', family: 'Kimi K3 / K2.7 Code', route: '长上下文 Agent', positioning: '研究、长文档、代码 Agent 与工具链', capabilities: ['长上下文', '研究', '代码'], deployment: 'Kimi API / 开放权重', price: 'K3 ¥20 / ¥100；K2.7 Code ¥6.5 / ¥27', source: 'https://platform.kimi.com/' },
  { region: '国内', vendor: 'MiniMax', family: 'M3 / M2.7 / Hailuo / Speech', route: 'Agent 与内容生成', positioning: '长任务 Agent、语音、视频、角色互动与办公', capabilities: ['Agent', '语音', '视频'], deployment: 'API / 订阅 / 专属部署', price: 'M3 ≤512K 当前 ¥2.1 / ¥8.4；M2.7 ¥2.1 / ¥8.4', source: 'https://platform.minimaxi.com/docs/guides/pricing-paygo' },
  { region: '国内', vendor: '科大讯飞 / 星火', family: '星火 X2 / 语音识别合成', route: '语音与行业知识', positioning: '中文语音、方言、教育、行业知识和国产化部署', capabilities: ['语音', '教育', '私有化'], deployment: 'API / 私有化 / 硬件', price: '按模型、语音时长与字符计费', source: 'https://xinghuo.xfyun.cn/' },
  { region: '国内', vendor: '华为云 / 盘古', family: '盘古 5.x / 气象 / 矿山', route: '行业模型', positioning: '行业模型、科学计算、国产算力与安全部署', capabilities: ['行业', '科学计算', '私有化'], deployment: '华为云 / 专属云 / 私有化', price: '按调用、资源或行业方案报价', source: 'https://www.huaweicloud.com/product/pangu.html' },
  { region: '国内', vendor: '商汤 / 日日新', family: 'SenseNova 6.8 Flash Lite / U1 Fast', route: '视觉与企业 Agent', positioning: '视觉、多模态、办公数据分析与企业交付', capabilities: ['视觉', '多模态', '企业'], deployment: 'Token Plan / API / 企业平台 / 私有化', price: 'Token Plan 公测 ¥0；60,000 积分 / 5 小时', source: 'https://www.sensenova.cn/token-plan' },
  { region: '国内', vendor: '阶跃星辰', family: 'Step 3.x / Step Audio', route: '多模态与 Agent', positioning: 'Agent、搜索、本地部署及多模态工具调用', capabilities: ['Agent', '多模态', '低成本'], deployment: 'API / 本地工作站', price: 'Step-3.5 Flash ¥0.7 / ¥2.1', source: 'https://platform.stepfun.com/docs/zh/guides/pricing/details' },
  { region: '国内', vendor: '百川智能', family: 'Baichuan4 Air / 医疗 M3', route: '医疗与企业知识', positioning: '中文、医疗知识、角色企业任务与私有化', capabilities: ['医疗', '中文', '私有化'], deployment: 'API / 医疗方案 / 私有化', price: 'Baichuan4 Air ¥0.98 / ¥0.98', source: 'https://platform.baichuan-ai.com/prices' },
  { region: '国内', vendor: '零一万物 / Yi', family: 'Yi-1.5 / Yi-Coder', route: '开放权重', positioning: '中小开放模型、代码、本地部署与轻量私有化', capabilities: ['开放权重', '代码', '本地部署'], deployment: '自建 / 第三方托管', price: '以开放权重和托管资源成本为主', source: 'https://github.com/01-ai/Yi' },
];

export type SubscriptionUse = '日常问答' | '写稿办公' | '写代码' | '做视频' | '做研究';

export type SubscriptionPlan = {
  region: Region;
  vendor: string;
  product: string;
  plan: string;
  monthlyFee: string;
  coreModel: string;
  benefits: string;
  note: string;
  uses: SubscriptionUse[];
  paid: boolean;
  source: string;
};

export const subscriptionPlans: SubscriptionPlan[] = [
  { region: '海外', vendor: 'OpenAI', product: 'ChatGPT', plan: 'Free', monthlyFee: '$0', coreModel: 'GPT-5.6 Luna（逐步推送）', benefits: '日常文本对话；文件、图片、语音和数据分析等功能另有限额', note: '模型与功能按账号逐步开放；部分地区可能展示广告。', uses: ['日常问答'], paid: false, source: 'https://chatgpt.com/pricing/' },
  { region: '海外', vendor: 'OpenAI', product: 'ChatGPT', plan: 'Go', monthlyFee: '$8 / 月', coreModel: 'GPT-5.6 Luna（逐步推送）', benefits: '比免费版更高的文件、图片与数据分析额度，以及更长记忆', note: '美国官网基准价；部分地区可能展示广告。', uses: ['日常问答'], paid: true, source: 'https://chatgpt.com/pricing/' },
  { region: '海外', vendor: 'OpenAI', product: 'ChatGPT', plan: 'Plus', monthlyFee: '$20 / 月', coreModel: 'GPT-6 Astra、GPT-5.6、Codex（逐步推送）', benefits: '更高推理、文件、Deep Research、图像、语音和代码额度', note: 'Astra 正在逐步开放；无年付方案，用量采用消息滚动限额。', uses: ['日常问答', '写稿办公', '写代码', '做视频', '做研究'], paid: true, source: 'https://chatgpt.com/pricing/' },
  { region: '海外', vendor: 'OpenAI', product: 'ChatGPT', plan: 'Pro 5×', monthlyFee: '$100 / 月', coreModel: 'GPT-6 Astra / Astra Pro、Codex', benefits: '约 5× Plus 用量；更高优先级 Codex 与 Deep Research', note: 'Astra Pro 随地区与账号逐步开放；面向高频个人用户。', uses: ['写代码', '做研究'], paid: true, source: 'https://help.openai.com/en/articles/9793128-about-chatgpt-pro-tiers' },
  { region: '海外', vendor: 'OpenAI', product: 'ChatGPT', plan: 'Pro 20×', monthlyFee: '$200 / 月', coreModel: 'GPT-6 Astra / Astra Pro、Codex', benefits: '约 20× Plus 用量；最高个人推理、Codex 与 Deep Research 额度', note: 'Astra Pro 随地区与账号逐步开放；API 使用另行计费。', uses: ['写代码', '做视频', '做研究'], paid: true, source: 'https://help.openai.com/en/articles/9793128-about-chatgpt-pro-tiers' },

  { region: '海外', vendor: 'Anthropic', product: 'Claude', plan: 'Free', monthlyFee: '$0', coreModel: 'Claude 最新模型（限额）', benefits: '基础对话、文件创建、代码执行与联网搜索；不含 Projects', note: '会话额度按窗口重置；高峰期可能排队。', uses: ['日常问答'], paid: false, source: 'https://claude.com/pricing' },
  { region: '海外', vendor: 'Anthropic', product: 'Claude', plan: 'Pro', monthlyFee: '$20 / 月', coreModel: 'Fable 5.1、Sonnet、Opus、Haiku，以选择器与 credits 为准', benefits: 'Claude Code、Cowork、Design、Science、Research 与无限 Projects', note: 'Fable 5.1 可通过 usage credits 使用；年付折算约 $17/月。', uses: ['写稿办公', '写代码', '做研究'], paid: true, source: 'https://claude.com/pricing' },
  { region: '海外', vendor: 'Anthropic', product: 'Claude', plan: 'Max 5×', monthlyFee: '$100 / 月', coreModel: 'Claude 最新模型，以选择器为准', benefits: '约 5× Pro 会话用量；优先使用新模型', note: '个人高用量档；Web、App 与 Claude Code 共享额度池。', uses: ['写代码'], paid: true, source: 'https://claude.com/pricing' },
  { region: '海外', vendor: 'Anthropic', product: 'Claude', plan: 'Max 20×', monthlyFee: '$200 / 月', coreModel: 'Claude 最新模型，以选择器为准', benefits: '约 20× Pro 用量；最高优先级', note: '存在滚动窗口与周度限制；团队功能需使用 Team。', uses: ['写代码'], paid: true, source: 'https://claude.com/pricing' },

  { region: '海外', vendor: 'Google', product: 'Gemini', plan: 'Free', monthlyFee: '$0', coreModel: 'Gemini Flash / 有限 Pro', benefits: '基础 Gemini 与 15GB 云端存储', note: 'Workspace 内嵌能力和高级模型额度有限。', uses: ['日常问答'], paid: false, source: 'https://one.google.com/about/' },
  { region: '海外', vendor: 'Google', product: 'Gemini', plan: 'AI Plus', monthlyFee: '$4.99 / 月', coreModel: 'Gemini 3.1 Pro、有限 Omni Flash', benefits: '2× Gemini 用量、400GB 云盘、Flow、Gmail 与 NotebookLM', note: '美国官网 400GB 方案基准价；另有 2TB 版本。', uses: ['日常问答', '写稿办公'], paid: true, source: 'https://one.google.com/intl/en/about/google-ai-plans/' },
  { region: '海外', vendor: 'Google', product: 'Gemini', plan: 'AI Plus · 2TB', monthlyFee: '$9.99 / 月', coreModel: 'Gemini Flash Thinking', benefits: '2× Gemini 用量、2TB 云盘、Flow、Gmail 与 NotebookLM', note: '参考页展示档；Google 公共 AI 套餐页未统一展示，购买前按账号复核。', uses: ['日常问答', '写稿办公'], paid: true, source: 'https://one.google.com/about/plans' },
  { region: '海外', vendor: 'Google', product: 'Gemini', plan: 'AI Pro', monthlyFee: '$19.99 / 月', coreModel: 'Gemini 3.1 Pro、Omni Flash、Deep Research', benefits: '4× 用量、5TB 云盘、Deep Research、NotebookLM Plus 与 Workspace 内嵌', note: '美国官网基准方案；存储规格可能随账号变化。', uses: ['写稿办公', '做视频', '做研究'], paid: true, source: 'https://one.google.com/intl/en/about/google-ai-plans/' },
  { region: '海外', vendor: 'Google', product: 'Gemini', plan: 'AI Ultra 5×', monthlyFee: '$99.99 / 月', coreModel: 'Gemini 3.1 Pro、Omni Flash、Deep Think', benefits: '约 5× Pro 用量、20TB 云盘及更高 Veo 额度', note: '美国官网基准价；地区、税费与账号方案可能不同。', uses: ['写代码', '做视频'], paid: true, source: 'https://one.google.com/intl/en/about/google-ai-plans/' },
  { region: '海外', vendor: 'Google', product: 'Gemini', plan: 'AI Ultra 20×', monthlyFee: '$199.99 / 月', coreModel: 'Gemini 3.1 Pro、Omni Flash、Deep Think', benefits: '约 20× Pro 用量、30TB 云盘及最高创作额度', note: '个人高用量档；价格为美国官网基准。', uses: ['做视频'], paid: true, source: 'https://one.google.com/intl/en/about/google-ai-plans/' },

  { region: '海外', vendor: 'xAI', product: 'Grok', plan: 'Free', monthlyFee: '$0', coreModel: 'Grok 4.6（限额）', benefits: '有限对话、实时网页与 X 搜索、语音和连接器', note: '额度有限；与 X Premium 系列订阅分开。', uses: ['日常问答'], paid: false, source: 'https://x.ai/pricing' },
  { region: '海外', vendor: 'xAI', product: 'Grok', plan: 'SuperGrok', monthlyFee: '$30 / 月', coreModel: 'Grok 4.6', benefits: '更高全功能额度、Expert、Imagine 图片与视频、实时网页与 X 搜索', note: 'SuperGrok 与 X Premium+ 为不同订阅。', uses: ['日常问答', '做研究'], paid: true, source: 'https://x.ai/pricing' },
  { region: '海外', vendor: 'xAI', product: 'Grok', plan: 'SuperGrok Plus', monthlyFee: '$100 / 月', coreModel: 'Grok 4.6', benefits: 'SuperGrok 全部权益、1080p 视频、更高用量、峰值优先与新功能抢先', note: '美国官网基准价。', uses: ['日常问答', '做视频', '做研究'], paid: true, source: 'https://x.ai/pricing' },
  { region: '海外', vendor: 'xAI', product: 'Grok', plan: 'SuperGrok Heavy', monthlyFee: '$300 / 月', coreModel: '最高档 Grok', benefits: 'SuperGrok Plus 全部权益、最高用量与速度、多 Agent 协作及 X Premium+', note: '购买页显示价；公开静态定价页未单列，付款前需复核。', uses: ['写代码'], paid: true, source: 'https://grok.com/#subscribe' },

  { region: '海外', vendor: 'Perplexity', product: 'Perplexity', plan: 'Standard / Free', monthlyFee: '$0', coreModel: 'Sonar（基础额度）', benefits: '基础搜索、引用来源与有限文件上传', note: '美国官网 Web 基准方案。', uses: ['日常问答', '做研究'], paid: false, source: 'https://www.perplexity.ai/help-center/en/articles/11187416-which-perplexity-subscription-plan-is-right-for-you' },
  { region: '海外', vendor: 'Perplexity', product: 'Perplexity', plan: 'Pro', monthlyFee: '$20 / 月', coreModel: '高级模型名单以实际选择器为准', benefits: '扩展 Pro Search 与 Research、模型切换、文件应用创建、图片与视频生成', note: '新订阅可获一次性 4,000 bonus credits；并非每月续发，模型名单需登录复核。', uses: ['做研究'], paid: true, source: 'https://www.perplexity.ai/help-center/en/articles/13838041-how-credits-work-on-perplexity' },
  { region: '海外', vendor: 'Perplexity', product: 'Perplexity', plan: 'Education Pro', monthlyFee: '$10 / 月', coreModel: '与 Pro 同级的高级模型', benefits: 'Pro 搜索与研究权益，面向通过 SheerID 验证的学生和教师', note: '需验证教育资格；支持地区与学校以官网为准。', uses: ['做研究'], paid: true, source: 'https://www.perplexity.ai/help-center/en/articles/11187416-which-perplexity-subscription-plan-is-right-for-you' },
  { region: '海外', vendor: 'Perplexity', product: 'Perplexity', plan: 'Max', monthlyFee: '$200 / 月', coreModel: 'Pro 模型与高阶研究能力，以实际选择器为准', benefits: '最高研究额度、Model Council、Brain 预览与每月 10,000 Computer credits', note: '美国官网 Web 基准价；年付 $2,000。', uses: ['做研究'], paid: true, source: 'https://www.perplexity.ai/help-center/en/articles/13838041-how-credits-work-on-perplexity' },

  { region: '海外', vendor: 'Microsoft', product: 'Copilot', plan: 'Free', monthlyFee: '$0', coreModel: 'Microsoft Copilot 当前模型', benefits: '网页与应用内基础问答、搜索和有限 AI 图片额度', note: '功能和地区可用性按账号为准。', uses: ['日常问答'], paid: false, source: 'https://www.microsoft.com/en-us/microsoft-365-copilot/pricing/individuals' },
  { region: '海外', vendor: 'Microsoft', product: 'Microsoft 365', plan: 'Personal', monthlyFee: '$9.99 / 月', coreModel: 'Microsoft Copilot 当前模型', benefits: '1 人、1TB 云盘及 Office 桌面应用内 Copilot', note: '美国官网基准价；年付 $99.99。', uses: ['写稿办公'], paid: true, source: 'https://www.microsoft.com/en-us/microsoft-365-copilot/pricing/individuals' },
  { region: '海外', vendor: 'Microsoft', product: 'Microsoft 365', plan: 'Family', monthlyFee: '$12.99 / 月', coreModel: 'Microsoft Copilot 当前模型', benefits: '最多 6 人、共 6TB 云盘和 Office 应用', note: '美国官网基准价；年付 $129.99；AI 权益仅订阅所有者使用。', uses: ['写稿办公'], paid: true, source: 'https://www.microsoft.com/en-us/microsoft-365-copilot/pricing/individuals' },
  { region: '海外', vendor: 'Microsoft', product: 'Microsoft 365', plan: 'Premium', monthlyFee: '$19.99 / 月', coreModel: 'Microsoft Copilot 当前模型', benefits: 'Family 权益、最高 Copilot 用量、Researcher / Analyst agents 与高级 Office Copilot', note: '美国官网基准价；年付 $199.99；AI 权益仅订阅所有者使用。', uses: ['写稿办公'], paid: true, source: 'https://www.microsoft.com/en-us/microsoft-365-copilot/pricing/individuals' },

  { region: '国内', vendor: '字节跳动', product: '豆包', plan: '免费版', monthlyFee: '¥0', coreModel: '豆包当前模型（免费额度）', benefits: '基础对话、联网搜索、附件问答，以及有限工作任务、PPT、表格和图片视频功能', note: '高消耗功能有独立额度；高峰期可能排队。', uses: ['日常问答'], paid: false, source: 'https://www.doubao.com/member/subscription' },
  { region: '国内', vendor: '字节跳动', product: '豆包', plan: '专业版 · 标准', monthlyFee: '¥68 / 月', coreModel: '豆包 2.1 Pro', benefits: '豆包工作 5× 免费额度、高峰优先；Seedream 5.0 Pro、Seedance 2.5 和电脑版去水印', note: '登录购买页查询日快照；公开静态页未披露统一价，付款前需复核。', uses: ['写稿办公', '写代码'], paid: true, source: 'https://www.doubao.com/member/subscription' },
  { region: '国内', vendor: '字节跳动', product: '豆包', plan: '专业版 · 加强', monthlyFee: '¥200 / 月', coreModel: '豆包 2.1 Pro', benefits: '豆包工作 20× 免费额度；Seedream 5.0 Pro、Seedance 2.5 和电脑版去水印', note: '登录购买页查询日快照；公开静态页未披露统一价，付款前需复核。', uses: ['写稿办公', '做视频'], paid: true, source: 'https://www.doubao.com/member/subscription' },
  { region: '国内', vendor: '字节跳动', product: '豆包', plan: '专业版 · 高级', monthlyFee: '¥500 / 月', coreModel: '豆包 2.1 Pro', benefits: '豆包工作 50× 免费额度；Seedream 5.0 Pro、Seedance 2.5 和电脑版去水印', note: '登录购买页查询日快照；公开静态页未披露统一价，付款前需复核。', uses: ['写稿办公', '写代码'], paid: true, source: 'https://www.doubao.com/member/subscription' },

  { region: '国内', vendor: '月之暗面', product: 'Kimi', plan: '基础免费', monthlyFee: '¥0', coreModel: 'Kimi K2.6 免费对话', benefits: '基础聊天；不含付费会员 Agent 额度池', note: '免费对话和会员 Agent 额度为不同口径。', uses: ['日常问答'], paid: false, source: 'https://www.kimi.com/zh-cn/help/membership/membership-pricing' },
  { region: '国内', vendor: '月之暗面', product: 'Kimi', plan: 'Andante', monthlyFee: '¥49 / 月', coreModel: 'Kimi K3 / K2.6、Kimi Code', benefits: '约 30 个 Agent、4× 优先队列、专业数据库约 1000 次', note: '会员功能共享额度池，并按 Token 消耗。', uses: ['写稿办公', '写代码'], paid: true, source: 'https://www.kimi.com/zh-cn/help/membership/membership-pricing' },
  { region: '国内', vendor: '月之暗面', product: 'Kimi', plan: 'Moderato', monthlyFee: '¥99 / 月', coreModel: 'Kimi 当前模型、Kimi Code', benefits: '约 60 个 Agent、任务并行 2、Agent 集群 25 次、专业数据库约 2000 次', note: '会员功能共享额度池，并按 Token 消耗。', uses: ['写稿办公', '写代码', '做研究'], paid: true, source: 'https://www.kimi.com/zh-cn/help/membership/membership-pricing' },
  { region: '国内', vendor: '月之暗面', product: 'Kimi', plan: 'Allegretto', monthlyFee: '¥199 / 月', coreModel: 'Kimi 当前模型、Kimi Code', benefits: '约 150 个 Agent、Agent 集群 50 次、Kimi Claw 群聊、专业数据库约 5000 次', note: '会员功能共享额度池；包年价格以官网为准。', uses: ['写稿办公', '写代码', '做研究'], paid: true, source: 'https://www.kimi.com/zh-cn/help/membership/membership-pricing' },
  { region: '国内', vendor: '月之暗面', product: 'Kimi', plan: 'Allegro', monthlyFee: '¥699 / 月', coreModel: 'Kimi 当前模型、Kimi Code', benefits: '约 360 个 Agent、任务并行 4、Agent 集群 120 次和百万 Tokens 长对话', note: '会员最高档；功能共享额度池。', uses: ['写稿办公', '写代码', '做研究'], paid: true, source: 'https://www.kimi.com/zh-cn/help/membership/membership-pricing' },

  { region: '国内', vendor: '阿里巴巴', product: '通义千问', plan: '办公助理 · 高级', monthlyFee: '¥19 / 月', coreModel: 'Qwen 系', benefits: '提高办公助理使用额度；基础对话仍免费', note: 'App Store 内购快照；Web 标准月费未确认，视频生成使用独立点数。', uses: ['写稿办公'], paid: true, source: 'https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE-%E9%98%BF%E9%87%8C%E6%97%97%E4%B8%8Bai%E5%8A%A9%E6%89%8B/id6752689384?mt=12' },
  { region: '国内', vendor: '阿里巴巴', product: '通义千问', plan: '办公助理 · 精英', monthlyFee: '¥49 / 月', coreModel: 'Qwen 系', benefits: '比高级档提供更多办公助理使用额度', note: 'App Store 内购快照；Web 标准月费未确认，百炼 Token Plan 另计。', uses: ['写稿办公'], paid: true, source: 'https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE-%E9%98%BF%E9%87%8C%E6%97%97%E4%B8%8Bai%E5%8A%A9%E6%89%8B/id6752689384?mt=12' },
  { region: '国内', vendor: '阿里巴巴', product: '通义千问', plan: '办公助理 · 旗舰', monthlyFee: '¥128 / 月', coreModel: 'Qwen 系', benefits: '三档中最高的办公助理使用额度', note: 'App Store 内购快照；Web 标准月费未确认，不是百炼 API 包。', uses: ['写稿办公', '写代码'], paid: true, source: 'https://apps.apple.com/cn/app/%E5%8D%83%E9%97%AE-%E9%98%BF%E9%87%8C%E6%97%97%E4%B8%8Bai%E5%8A%A9%E6%89%8B/id6752689384?mt=12' },

  { region: '国内', vendor: '百度', product: '文心一言', plan: '全面免费', monthlyFee: '¥0', coreModel: '文心系列最新模型', benefits: '个人对话、文档和检索增强等功能', note: '2025-04-01 起取消个人会员；企业 API 仍通过千帆计费。', uses: ['日常问答', '写稿办公'], paid: false, source: 'https://wenxin.baidu.com/?enter_type=yiyan_site' },

  { region: '国内', vendor: '智谱', product: '智谱清言', plan: '免费版', monthlyFee: '¥0', coreModel: 'GLM-5 系', benefits: '每日登录 200 积分、100MB 云知识库、画图清晰下载及限次 PPT 智能体', note: '积分和权益以会员付款页实时信息为准。', uses: ['日常问答', '写稿办公'], paid: false, source: 'https://chatglm.cn/main/alltoolsdetail?lang=zh&vipDialogOpen=1' },
  { region: '国内', vendor: '智谱', product: '智谱清言', plan: 'VIP · 连续包月', monthlyFee: '首月 ¥49', coreModel: 'GLM-5 系', benefits: '每日登录 400 积分、每月 10000 积分、1GB 云知识库、生视频加速和不限次 PPT 智能体', note: '登录付款页快照；首购后续费价与积分权益需在账号内复核。', uses: ['日常问答', '写稿办公', '做视频'], paid: true, source: 'https://chatglm.cn/main/alltoolsdetail?lang=zh&vipDialogOpen=1' },
  { region: '国内', vendor: '智谱', product: '智谱清言', plan: 'SVIP · 连续包月', monthlyFee: '首月 ¥149', coreModel: 'GLM-5 系', benefits: '每日登录 800 积分、每月 33000 积分、10GB 云知识库、超清画图及视频高阶参数', note: '登录付款页快照；首购后续费价与积分权益需在账号内复核。', uses: ['日常问答', '写稿办公', '做视频'], paid: true, source: 'https://chatglm.cn/main/alltoolsdetail?lang=zh&vipDialogOpen=1' },

  { region: '国内', vendor: '腾讯', product: '元宝', plan: '个人版免费', monthlyFee: '¥0', coreModel: '混元 Hy3、DeepSeek 等，按入口调度', benefits: '联网搜索、文件解析、会议问答与 PPT、Word、Excel 等文件交付', note: '个人版免费；混元云 API 独立计费。', uses: ['日常问答', '写稿办公'], paid: false, source: 'https://yuanbao.tencent.com/' },
  { region: '国内', vendor: '深度求索', product: 'DeepSeek', plan: '网页版 / App 免费；API 按量', monthlyFee: '对话 ¥0', coreModel: 'DeepSeek V4 Pro', benefits: '网页与 App 免费对话、搜索、推理和文件处理；API 另按量计费', note: '不属于月费会员；消费者入口与 API 是两种计费口径。', uses: ['日常问答', '写代码'], paid: false, source: 'https://www.deepseek.com/' },
  { region: '国内', vendor: '商汤', product: 'SenseNova Token Plan', plan: 'Free · 公测', monthlyFee: '¥0', coreModel: 'SenseNova 6.8 Flash Lite、U1 Fast', benefits: '60,000 积分 / 5 小时；最多 20 个 API Key；支持 Hermes Agent 与 OpenClaw', note: '公测期免费，Lite / Pro 付费档位尚未上线。', uses: ['写稿办公', '写代码'], paid: false, source: 'https://www.sensenova.cn/token-plan' },
];

export type PriceRow = {
  vendor: string; model: string; currency: 'USD' | 'CNY'; input: number; cached?: number; output: number; tier: '旗舰' | '均衡' | '低成本'; condition: string; source: string;
};

export const prices: PriceRow[] = [
  { vendor: 'OpenAI', model: 'GPT-6 Astra', currency: 'USD', input: 10, cached: 1, output: 50, tier: '旗舰', condition: '标准价；缓存写入 $12.50；输入超过 272K 时整次请求输入 / 缓存 2×、输出 1.5×', source: 'https://developers.openai.com/api/docs/models/gpt-6-astra' },
  { vendor: 'OpenAI', model: 'GPT-5.6 Sol', currency: 'USD', input: 4, cached: .4, output: 20, tier: '旗舰', condition: '当前推广价；长上下文另计', source: 'https://developers.openai.com/api/docs/models/gpt-5.6-sol' },
  { vendor: 'OpenAI', model: 'GPT-5.6 Terra', currency: 'USD', input: 2, cached: .2, output: 12, tier: '均衡', condition: '标准短上下文', source: 'https://developers.openai.com/api/docs/models/gpt-5.6-terra' },
  { vendor: 'OpenAI', model: 'GPT-5.6 Luna', currency: 'USD', input: .2, cached: .02, output: 1.2, tier: '低成本', condition: '高并发执行模型', source: 'https://developers.openai.com/api/docs/models/gpt-5.6-luna' },
  { vendor: 'Anthropic', model: 'Claude Fable 5.1', currency: 'USD', input: 10, cached: .25, output: 50, tier: '旗舰', condition: '5 分钟 / 1 小时缓存写入为 $12.50 / $20；Batch 输入输出 5 折', source: 'https://platform.claude.com/docs/en/about-claude/pricing' },
  { vendor: 'Anthropic', model: 'Claude Sonnet 5', currency: 'USD', input: 2, cached: .2, output: 10, tier: '均衡', condition: '已转为标准价，原计划 2026-09-01 上调至 $3 / $15 的方案取消', source: 'https://platform.claude.com/docs/en/about-claude/pricing' },
  { vendor: 'Anthropic', model: 'Claude Opus 5', currency: 'USD', input: 5, cached: .5, output: 25, tier: '旗舰', condition: '复杂长任务', source: 'https://platform.claude.com/docs/en/about-claude/pricing' },
  { vendor: 'Google', model: 'Gemini 3.7 Flash', currency: 'USD', input: .75, cached: .075, output: 3.75, tier: '均衡', condition: '推广价截至 2026-12-31', source: 'https://ai.google.dev/gemini-api/docs/pricing' },
  { vendor: 'Google', model: 'Gemini 3.8 Flash', currency: 'USD', input: .75, cached: .075, output: 3.75, tier: '均衡', condition: '推广价截至 2026-12-31；2027-01-01 起为 $1.50 / $0.15 / $7.50', source: 'https://ai.google.dev/gemini-api/docs/pricing' },
  { vendor: 'Google', model: 'Gemini 3.5 Flash-Lite', currency: 'USD', input: .3, cached: .03, output: 2.5, tier: '低成本', condition: '搜索 Grounding 另计', source: 'https://ai.google.dev/gemini-api/docs/pricing' },
  { vendor: 'Google', model: 'Gemini 3.1 Pro Preview', currency: 'USD', input: 2, cached: .2, output: 12, tier: '旗舰', condition: '标准价 ≤200K；>200K 为 $4 / $0.40 / $18', source: 'https://ai.google.dev/gemini-api/docs/pricing' },
  { vendor: 'xAI', model: 'Grok 4.6', currency: 'USD', input: 2, cached: .5, output: 6, tier: '旗舰', condition: '<200K；≥200K 价格提高', source: 'https://docs.x.ai/developers/pricing' },
  { vendor: 'Mistral', model: 'Mistral Small 4', currency: 'USD', input: .15, cached: .015, output: .6, tier: '低成本', condition: '标准 API', source: 'https://docs.mistral.ai/inference/pricing' },
  { vendor: 'Mistral', model: 'Mistral Large 3', currency: 'USD', input: .5, cached: .05, output: 1.5, tier: '均衡', condition: '标准 API', source: 'https://docs.mistral.ai/inference/pricing' },
  { vendor: 'Cohere', model: 'Command A+', currency: 'USD', input: 0, output: 0, tier: '均衡', condition: 'API 免费至速率限制；生产经 Model Vault 按实例 / 方案计费', source: 'https://docs.cohere.com/docs/command-a-plus' },
  { vendor: 'Qwen', model: 'Qwen3.8-Max ≤1M', currency: 'CNY', input: 12, output: 36, tier: '旗舰', condition: '中国内地公开价；Prime 为 ¥24 / ¥72', source: 'https://help.aliyun.com/zh/model-studio/model-pricing' },
  { vendor: 'Qwen', model: 'Qwen3-Max ≤32K', currency: 'CNY', input: 2.5, output: 10, tier: '均衡', condition: '上下文越长阶梯价越高', source: 'https://help.aliyun.com/zh/model-studio/model-pricing' },
  { vendor: '百度', model: 'ERNIE 5.1 ≤32K', currency: 'CNY', input: 4, output: 18, tier: '旗舰', condition: '32K—128K 为 ¥6 / ¥22', source: 'https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya' },
  { vendor: '百度', model: 'ERNIE 4.5 Turbo', currency: 'CNY', input: .8, cached: .2, output: 3.2, tier: '低成本', condition: '标准公开价', source: 'https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya' },
  { vendor: '腾讯', model: 'Hunyuan Hy4 Preview', currency: 'CNY', input: 6, cached: .3, output: 18, tier: '旗舰', condition: 'TokenHub 预览模型公开价', source: 'https://cloud.tencent.com/document/product/1823/130055' },
  { vendor: '腾讯', model: 'Hunyuan Hy3', currency: 'CNY', input: 1, cached: .25, output: 4, tier: '均衡', condition: 'TokenHub 公开价', source: 'https://cloud.tencent.com/document/product/1823/130055' },
  { vendor: '智谱', model: 'GLM-5.3', currency: 'CNY', input: 8, cached: 2, output: 28, tier: '旗舰', condition: 'BigModel 公开价', source: 'https://bigmodel.cn/pricing' },
  { vendor: '智谱', model: 'GLM-4.7-FlashX', currency: 'CNY', input: .5, cached: .1, output: 3, tier: '低成本', condition: '200K 上下文', source: 'https://bigmodel.cn/pricing' },
  { vendor: 'DeepSeek', model: 'DeepSeek V4 Flash', currency: 'CNY', input: 1.5, cached: .05, output: 4.5, tier: '低成本', condition: '空闲时段；工作日高峰为 ¥3 / ¥0.10 / ¥9', source: 'https://api-docs.deepseek.com/zh-cn/quick_start/pricing/' },
  { vendor: 'Kimi', model: 'Kimi K2.7 Code', currency: 'CNY', input: 6.5, cached: 1.3, output: 27, tier: '均衡', condition: '代码专用', source: 'https://platform.kimi.com/' },
  { vendor: 'MiniMax', model: 'MiniMax M3 ≤512K', currency: 'CNY', input: 2.1, cached: .42, output: 8.4, tier: '旗舰', condition: '当前五折价；>512K 为 ¥4.2 / ¥0.84 / ¥16.8', source: 'https://platform.minimaxi.com/docs/guides/pricing-paygo' },
  { vendor: 'MiniMax', model: 'MiniMax M2.7', currency: 'CNY', input: 2.1, cached: .42, output: 8.4, tier: '均衡', condition: '高速档价格可能不同', source: 'https://platform.minimaxi.com/docs/guides/pricing-paygo' },
  { vendor: '阶跃星辰', model: 'Step-3.5 Flash', currency: 'CNY', input: .7, cached: .14, output: 2.1, tier: '低成本', condition: '搜索与工具费另计', source: 'https://platform.stepfun.com/docs/zh/guides/pricing/details' },
  { vendor: '百川', model: 'Baichuan4 Air', currency: 'CNY', input: .98, output: .98, tier: '低成本', condition: '输入输出同价', source: 'https://platform.baichuan-ai.com/prices' },
];

export const timeline: Record<string, { vendor: string; model: string; shift: string; source: string }[]> = {
  '2023': [
    { vendor: 'OpenAI', model: 'GPT-4', shift: '强通用能力与工具调用成为产品基础', source: 'https://openai.com/index/gpt-4-research/' },
    { vendor: 'Anthropic', model: 'Claude 2', shift: '长上下文与安全路线形成差异化', source: 'https://www.anthropic.com/news/claude-2' },
    { vendor: 'Google', model: 'Gemini 1', shift: '原生多模态模型家族首次发布', source: 'https://blog.google/technology/ai/google-gemini-ai/' },
    { vendor: 'Meta', model: 'Llama 2', shift: '开放权重生态快速扩张', source: 'https://ai.meta.com/llama/' },
    { vendor: 'Qwen', model: 'Qwen-7B / Qwen-VL', shift: '中文开源与视觉语言模型进入主流', source: 'https://qwenlm.github.io/' },
    { vendor: '百度', model: 'ERNIE 3.5 / 4.0', shift: '国内云上大模型产品化加速', source: 'https://cloud.baidu.com/product-s/qianfan_home' },
    { vendor: 'DeepSeek', model: 'DeepSeek Coder', shift: '代码模型成为独立竞争赛道', source: 'https://github.com/deepseek-ai/DeepSeek-Coder' },
  ],
  '2024': [
    { vendor: 'OpenAI', model: 'GPT-4o / o1', shift: '实时多模态与推理模型分层', source: 'https://openai.com/index/hello-gpt-4o/' },
    { vendor: 'Anthropic', model: 'Claude 3 / 3.5', shift: '模型分档与代码能力显著增强', source: 'https://www.anthropic.com/news/claude-3-5-sonnet' },
    { vendor: 'Google', model: 'Gemini 1.5 / 2.0', shift: '百万上下文与 Agent 工具链', source: 'https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/' },
    { vendor: 'Meta', model: 'Llama 3', shift: '开放生态进入更大规模和多模态', source: 'https://ai.meta.com/blog/meta-llama-3/' },
    { vendor: 'Qwen', model: 'Qwen2 / 2.5', shift: '中文、代码与多尺寸模型体系成熟', source: 'https://qwenlm.github.io/' },
    { vendor: 'DeepSeek', model: 'V2 / V3', shift: 'MoE 与低成本 API 引发关注', source: 'https://github.com/deepseek-ai/DeepSeek-V3' },
    { vendor: '智谱', model: 'GLM-4', shift: '中文 Agent、工具调用与多模态平台化', source: 'https://docs.bigmodel.cn/cn/guide/start/model-overview' },
  ],
  '2025': [
    { vendor: 'OpenAI', model: 'GPT-5', shift: '统一模型与推理路由进入主产品', source: 'https://developers.openai.com/api/docs/models' },
    { vendor: 'Anthropic', model: 'Claude 4', shift: '长周期 Agent 与代码任务强化', source: 'https://www.anthropic.com/news' },
    { vendor: 'Google', model: 'Gemini 2.5 / 3', shift: '思考、多模态与实时产品融合', source: 'https://ai.google.dev/gemini-api/docs/models' },
    { vendor: 'Meta', model: 'Llama 4', shift: '多模态开放权重家族更新', source: 'https://ai.meta.com/llama/' },
    { vendor: 'DeepSeek', model: 'DeepSeek-R1', shift: '开放推理与蒸馏链路成为行业模板', source: 'https://github.com/deepseek-ai/DeepSeek-R1' },
    { vendor: 'Qwen', model: 'Qwen3', shift: '混合思考、代码与 Agent 能力升级', source: 'https://qwenlm.github.io/' },
    { vendor: 'Kimi', model: 'Kimi K2', shift: '长上下文转向代码与工具型 Agent', source: 'https://platform.moonshot.cn/' },
  ],
  '2026': [
    { vendor: 'OpenAI', model: 'GPT-5.6 Sol / Terra / Luna', shift: '旗舰、均衡、低成本三层模型系统', source: 'https://developers.openai.com/api/docs/models' },
    { vendor: 'OpenAI', model: 'GPT-6 Astra', shift: '9 月 3 日发布；面向复杂推理、代码、计算机使用、研究与文档交付', source: 'https://openai.com/index/gpt-6-astra/' },
    { vendor: 'OpenAI', model: 'Sora 2 / Videos API', shift: '计划于 9 月 24 日停止服务', source: 'https://developers.openai.com/api/docs/deprecations' },
    { vendor: 'Anthropic', model: 'Claude Fable 5.1', shift: '9 月 1 日发布；1M 上下文、128K 输出与长周期 Agent 工作', source: 'https://platform.claude.com/docs/en/release-notes/overview' },
    { vendor: 'Google', model: 'Gemini 3.x', shift: '搜索、长上下文和 Flash 系列继续细分', source: 'https://ai.google.dev/gemini-api/docs/latest-model' },
    { vendor: 'Google', model: 'Gemini 3.5 Transcribe / Omni 1.1 Flash', shift: '8 月 26—27 日转为 GA；旧 Omni Flash Preview 计划 9 月 30 日停用', source: 'https://ai.google.dev/gemini-api/docs/changelog' },
    { vendor: 'Google', model: 'Gemini 3.8 Flash / Lyria 3.5', shift: '9 月 2—3 日发布；分别面向长周期 Agent 与完整歌曲生成', source: 'https://ai.google.dev/gemini-api/docs/changelog' },
    { vendor: 'xAI', model: 'Grok 4.6', shift: '实时搜索、语音和长任务 Agent 融合', source: 'https://docs.x.ai/developers/grok-4-6' },
    { vendor: 'xAI', model: 'grok-imagine-image-quality', shift: '计划于 11 月 2 日退役并路由到 Imagine 2.0 low 档', source: 'https://docs.x.ai/developers/release-notes' },
    { vendor: 'Mistral AI', model: 'OCR 4.1 / Leanstral 1.5', shift: 'OCR 4.1 转为 GA；Leanstral 1.5 计划于 9 月 30 日退役', source: 'https://docs.mistral.ai/resources/changelogs' },
    { vendor: 'Microsoft', model: 'MAI-Transcribe-2', shift: '9 月 3 日发布，面向高速低成本语音识别', source: 'https://microsoft.ai/news/mai-transcribe-2-is-the-fastest-most-accurate-and-cheapest-speech-recognition-model-in-the-world/' },
    { vendor: 'DeepSeek', model: 'DeepSeek V4', shift: 'Flash / Pro 路由与百万上下文', source: 'https://api-docs.deepseek.com/news/news260424' },
    { vendor: 'Qwen', model: 'Qwen3.8', shift: '旗舰、Coder、视觉与开放权重并行', source: 'https://qwenlm.github.io/' },
    { vendor: 'GLM / Kimi', model: 'GLM-5.3 / Kimi K3', shift: '国内厂商聚焦代码、Agent 和复杂任务', source: 'https://bigmodel.cn/pricing' },
    { vendor: 'MiniMax', model: 'MiniMax M3', shift: '6 月 1 日发布；强化长任务 Agent 与代码工作流', source: 'https://www.minimax.io/blog/minimax-m3' },
    { vendor: '腾讯混元', model: 'Hy4 Preview', shift: '8 月 28 日加入 TokenHub，继续强化企业 Agent 工作负载', source: 'https://cloud.tencent.com/document/product/1823/130675' },
    { vendor: '腾讯云', model: 'youtu-agent / youtu-mrc-pro', shift: '8 月 28 日停止平台调用，官方建议迁移至 DeepSeek V4 Pro', source: 'https://cloud.tencent.com/announce/detail/2393' },
    { vendor: '腾讯 ADP', model: 'Kimi K2.5 / Hy3 Preview', shift: '8 月 31 日下线；Hy3 稳定版仍继续可用', source: 'https://cloud.tencent.com/document/product/1759/127342' },
  ],
};

export const scenarios = [
  { title: '复杂推理 / 长周期 Agent', priority: '高', models: 'GPT-6 Astra、Claude Fable / Opus、GLM-5.3、DeepSeek V4 Pro、Kimi K3', metric: '任务成功率、人工接管率、步骤数、每成功任务成本', action: '用 100—300 条真实任务做端到端评测。' },
  { title: '代码 Agent', priority: '高', models: 'GPT-6 Astra / GPT-5.6、Claude、Grok、Qwen Coder、DeepSeek、GLM、Kimi Code、MiniMax M3', metric: 'SWE 任务通过率、测试通过率、仓库理解和时延', action: '补全与仓库级 Agent 分开评测。' },
  { title: '智能客服 / 企业 RAG', priority: '高', models: 'Claude、Cohere、Gemini、Qwen、文心、混元、GLM、讯飞', metric: '解决率、引用正确率、转人工率、CSAT、P95', action: '先建立离线 gold set，再灰度 A/B。' },
  { title: '低成本高并发', priority: '高', models: 'Luna、Flash-Lite、Mistral Small、DeepSeek Flash、Step Flash、ERNIE Turbo', metric: '业务通过率、tokens/成功任务、P95、429 率', action: '按每个有效结果成本排序。' },
  { title: '多模态文档', priority: '中', models: 'Gemini、GPT、Claude、Qwen-VL、GLM-V、ERNIE、Seed、Mistral OCR', metric: '字段 F1、跨页问答、每页成本、失败重试率', action: 'OCR 与通用 VLM 分开评测。' },
  { title: '私有化 / 国产化', priority: '高', models: 'Llama、Mistral、Qwen、DeepSeek、GLM、Step、盘古、讯飞、Nemotron', metric: '量化后通过率、吞吐、能耗、升级周期、三年 TCO', action: '先在目标硬件做小规模 POC。' },
];

export const cases = [
  { field: '金融 RAG', org: 'Morgan Stanley', model: 'GPT-4 + Whisper', result: '约 10 万份文档；顾问团队采用率 98%', evidence: 'A｜官方案例', source: 'https://openai.com/index/morgan-stanley/' },
  { field: '语音客服', org: 'DoorDash', model: 'Claude 3 Haiku on Bedrock', result: '响应延迟不超过 2.5 秒；通过 A/B 测试与评估框架验证', evidence: 'A｜AWS 案例', source: 'https://aws.amazon.com/solutions/case-studies/doordash-bedrock-case-study/' },
  { field: '代码', org: 'Palo Alto Networks', model: 'Claude Haiku + Sonnet', result: '分层使用小模型补全、强模型处理复杂任务', evidence: 'A｜官方案例', source: 'https://claude.com/customers/palo-alto-networks' },
  { field: '开源代码', org: 'Codeium', model: '微调 Llama 3.1', result: '围绕私有化吞吐、延迟与 TCO 优化', evidence: 'A｜Meta 案例', source: 'https://ai.meta.com/blog/codeium-ai-coding-assistant-llama/' },
  { field: '蒸馏 / 底模', org: 'DeepSeek-R1-Distill', model: 'Qwen / Llama 底座', result: '模型卡明确披露底模与蒸馏关系', evidence: 'A｜模型卡', source: 'https://github.com/deepseek-ai/DeepSeek-R1' },
  { field: '日语领域底模', org: 'Lightblue Qarasu', model: 'Qwen-14B 底座', result: '基于 Qwen 进行日语领域微调与商用', evidence: 'A｜官方案例', source: 'https://www.alibabacloud.com/blog/lightblue-releases-japanese-language-llms-based-on-qwen-14b-for-commercial-use_600933' },
  { field: '医疗理赔', org: 'MediConCen', model: 'Gemini + Vertex AI', result: '字段级数据抽取准确率 98%；理赔处理时间从数天缩短到数小时', evidence: 'A｜官方案例', source: 'https://cloud.google.com/customers/mediconcen' },
  { field: '端侧', org: 'Google Pixel', model: 'Gemini Nano', result: '录音摘要、智能回复在设备侧运行', evidence: 'A｜产品事实', source: 'https://blog.google/products-and-platforms/devices/pixel/pixel-feature-drop-december-2023/' },
  { field: '游戏客服', org: '三七互娱', model: '文心大模型 + RAG', result: '复杂问题路由能力提升；SLA 提升', evidence: 'B｜官方案例', source: 'https://cloud.baidu.com/customer/case/sanqihuyu.html' },
  { field: '气象科学', org: '深圳市气象局', model: '智霁 1.0（基于盘古气象大模型）', result: '未来 5 天深圳及周边地区、3 公里分辨率的气温、降雨和风速预报', evidence: 'A｜官方案例', source: 'https://www.huawei.com/cn/news/2024/3/pangu-weather' },
];
