import { Home, ChevronRight, Edit3, Layers, Zap, Shield, Key } from 'lucide-react';
import { motion } from 'motion/react';
import { i18n } from '../i18n';

const copy = {
  en: {
    title: 'Core Concepts & Repo Architecture',
    description: 'This overview is intentionally limited to what the public repositories actually expose through source layout, build targets, scripts, and checked-in protocol files.',
    cards: [
      {
        title: 'Dynamic Sharding System',
        body: 'The SethPub README describes Seth as a high-performance blockchain sharding system with resilient and seamless shard reconfiguration. Repo structure, shard configs, and deployment scripts all support a multi-shard operational model.',
      },
      {
        title: 'Consensus, Election, Time Blocks',
        body: 'Core consensus-related code is split across `src/consensus`, `src/elect`, `src/timeblock`, and the `hotstuff` target. The protobuf definitions also expose step types for election, time blocks, and cross-shard coordination.',
      },
      {
        title: 'BLS / DKG And Security',
        body: 'BLS and distributed key generation are first-class build concerns: the repo ships `src/bls`, `src/vss`, `blsmain`, plus third-party `libbls` build logic in `build_third.sh`.',
      },
      {
        title: 'EVM Execution Layer',
        body: 'Contract execution lives in `src/zjcvm` and depends on `evmone` / `evmc`. The public Python reference compiles Solidity with `solc 0.8.30` and `evm_version=shanghai`, which is the best concrete clue about the current smart-contract execution target.',
      },
    ],
    modulesTitle: 'Useful Source Directories',
    modules: [
      '`src/init` for HTTP gateway registration and request handlers',
      '`src/protos` for transaction schema, step enums, and protocol messages',
      '`src/contract` and `src/zjcvm` for contract execution and host behavior',
      '`src/ck` for ClickHouse export and analytics-oriented persistence',
      '`src/network`, `src/dht`, `src/transport`, and `src/broadcast` for node networking',
      '`src/sync` for ledger synchronization and catch-up paths',
    ],
    fitTitle: 'Explorer Relationship',
    fitPoints: [
      '`SethExplorer` is not the chain implementation; it is the public explorer/indexer workstream.',
      'Its Blockscout ancestry means explorer-side expectations are Ethereum-flavored even when the SethPub gateway is still custom.',
      'For developers, the practical pattern is: read SethPub for chain behavior, then read SethExplorer for indexing and UI assumptions.',
    ],
  },
  zh: {
    title: '核心概念与仓库架构',
    description: '这一页刻意只总结公开仓库中能通过源码目录、构建目标、脚本和协议文件验证出来的内容。',
    cards: [
      {
        title: '动态分片系统',
        body: 'SethPub 的 README 把 Seth 描述为一个高性能区块链分片系统，并强调分片重配置能力。仓库里的分片配置模板和部署脚本也确实围绕多分片运行模型组织。',
      },
      {
        title: '共识、选举与时间块',
        body: '共识相关代码主要分布在 `src/consensus`、`src/elect`、`src/timeblock`，并有单独的 `hotstuff` 目标。协议定义中也能看到面向选举、时间块和跨分片协调的 step 类型。',
      },
      {
        title: 'BLS / DKG 与安全子系统',
        body: 'BLS 与分布式密钥生成是构建一等公民：仓库里有 `src/bls`、`src/vss`、`blsmain`，而 `build_third.sh` 也专门编译了 `libbls` 相关依赖。',
      },
      {
        title: 'EVM 执行层',
        body: '合约执行主要落在 `src/zjcvm`，并依赖 `evmone` / `evmc`。公开的 Python 参考实现使用 `solc 0.8.30` 和 `evm_version=shanghai`，这是当前合约执行目标最清晰的代码信号。',
      },
    ],
    modulesTitle: '值得优先阅读的源码目录',
    modules: [
      '`src/init`：HTTP 网关路由注册与请求处理',
      '`src/protos`：交易结构、step 枚举与协议消息',
      '`src/contract` 与 `src/zjcvm`：合约执行与宿主环境',
      '`src/ck`：ClickHouse 导出与分析向持久化',
      '`src/network`、`src/dht`、`src/transport`、`src/broadcast`：节点网络通信',
      '`src/sync`：账本同步与追块逻辑',
    ],
    fitTitle: '和 Explorer 的关系',
    fitPoints: [
      '`SethExplorer` 不是链本身，而是公开的浏览器 / 索引器工作流。',
      '由于它继承自 Blockscout，所以浏览器侧默认假设更偏以太坊风格，即便 SethPub 网关目前仍然是自定义接口。',
      '对开发者来说，最实用的阅读顺序是：先用 SethPub 理解链行为，再用 SethExplorer 理解索引和 UI 假设。',
    ],
  },
} as const;

export function CoreConcepts({ lang }: { lang: 'en' | 'zh' }) {
  const t = copy[lang];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="docs-page max-w-5xl xl:max-w-6xl mx-auto px-5 sm:px-10 py-12 relative pb-32"
    >
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-8 overflow-x-auto whitespace-nowrap pb-2">
        <Home className="w-4 h-4 shrink-0" />
        <ChevronRight className="w-4 h-4 shrink-0" />
        <span className="text-gray-400">{i18n[lang].sidebar.sections[0].title}</span>
        <ChevronRight className="w-4 h-4 shrink-0" />
        <span className="text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded">Core Concepts</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-[var(--color-text-main)]">
        {t.title}
      </h1>

      <div className="space-y-6 text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed mb-12">
        <p>{t.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {t.cards.map((card, idx) => {
          const icon =
            idx === 0 ? <Layers className="w-8 h-8 text-[var(--color-brand)] mb-4" /> :
            idx === 1 ? <Zap className="w-8 h-8 text-[var(--color-brand-purple)] mb-4" /> :
            idx === 2 ? <Key className="w-8 h-8 text-[var(--color-brand)] mb-4" /> :
            <Shield className="w-8 h-8 text-[var(--color-brand-purple)] mb-4" />;

          return (
            <motion.div key={card.title} whileHover={{ y: -5 }} className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] shadow-sm">
              {icon}
              <h3 className="text-xl font-semibold text-[var(--color-text-main)] mb-3">{card.title}</h3>
              <p className="text-[var(--color-text-muted)]">{card.body}</p>
            </motion.div>
          );
        })}
      </div>

      <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2 flex items-center gap-2">
        <Layers className="w-6 h-6 text-[var(--color-brand)]" />
        {t.modulesTitle}
      </h2>

      <div className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
        <ul className="space-y-3">
          {t.modules.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] mt-2 shrink-0"></div>
              <span className="text-sm text-[var(--color-text-muted)]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2 flex items-center gap-2">
        <Shield className="w-6 h-6 text-[var(--color-brand-purple)]" />
        {t.fitTitle}
      </h2>

      <div className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
        <ul className="space-y-3">
          {t.fitPoints.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-purple)] mt-2 shrink-0"></div>
              <span className="text-sm text-[var(--color-text-muted)]">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-brand-purple)] text-white px-4 py-2 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-[var(--color-brand)]/20 z-10"
      >
        <Edit3 className="w-4 h-4" />
        <span className="hidden sm:inline">{i18n[lang].welcome.suggestEdits}</span>
      </motion.button>
    </motion.div>
  );
}
