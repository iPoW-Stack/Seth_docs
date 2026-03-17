import { Home, ChevronRight, Edit3, FolderGit2, Code2, SearchCode, GitBranch } from 'lucide-react';
import { motion } from 'motion/react';
import { i18n } from '../i18n';

const copy = {
  en: {
    title: 'Welcome to Seth',
    badge: 'Developer documentation rebuilt from code, contracts, and branch review',
    intro: [
      'This documentation now reflects a read-only review of the accessible iPoW-Stack repositories, including the additional private repos supplied on March 17, 2026.',
      'The repo landscape is now much broader than the original public-only view: core chain code, docs, explorer, wallets, OpenClaw and AI tooling, ecosystem contracts, and a separate x402 mint backend all coexist in the org.',
      'The purpose of this site is to tell developers what is actually implemented, where that implementation lives, which branches carry active workstreams, and where the code still shows mismatches or unfinished integration seams.',
    ],
    quickStats: [
      { label: 'Repos Reviewed', value: '9' },
      { label: 'Branch Tracks', value: '10+' },
      { label: 'Coverage', value: 'Chain, AI, Wallet, Contracts' },
    ],
    startTitle: 'Start Here',
    startCards: [
      {
        title: 'DApp Developers',
        desc: 'Need the fastest path from repo checkout to contract calls and app integration.',
        page: 'Get Started',
      },
      {
        title: 'Node Operators',
        desc: 'Need build scripts, deployment patterns, ports, and operational expectations.',
        page: 'Nodes & Operations',
      },
      {
        title: 'API Integrators',
        desc: 'Need gateway semantics, endpoint shapes, and client-side signing flow.',
        page: 'HTTP API Reference',
      },
      {
        title: 'Protocol Readers',
        desc: 'Need architecture, sharding, economics, and ecosystem implementation detail.',
        page: 'Core Concepts',
      },
    ],
    coverageTitle: 'What This Docs Set Covers',
    coveragePoints: [
      'Core chain and gateway behavior from SethPub',
      'Explorer assumptions from SethExplorer',
      'Wallet client logic from Android and iOS repos',
      'OpenClaw, agent hub, and x402 application flows',
      'Treasury, bridge, pool, and DIRM contract behavior',
    ],
    sourceTitle: 'Repository Landscape',
    sourceItems: [
      {
        name: 'Docs & Explorer',
        role: 'Developer-facing explanation and indexing',
        bullets: [
          '`whitepaper`: Vite + React docs source',
          '`SethExplorer`: Blockscout-derived explorer and indexer workstream',
          'Useful when you need docs UX or explorer-side runtime assumptions',
        ],
      },
      {
        name: 'Core Protocol',
        role: 'Node, gateway, consensus, execution',
        bullets: [
          '`SethPub`: primary C++ chain implementation and client examples',
          'Custom HTTP gateway in `src/init/http_handler.cc`',
          'Consensus, sharding, BLS/DKG, and EVM execution paths live here',
        ],
      },
      {
        name: 'AI & OpenClaw',
        role: 'Agent tooling and application workflows',
        bullets: [
          '`Seth-AI-Pub`: local agent hub and tool service with `/v1/execute` and `/v1/chat`',
          '`Seth-x-Openclaw`: cloud-mining and university frontend plus control-plane branches',
          'Several named branches represent active OpenClaw and backend integration workstreams',
        ],
      },
      {
        name: 'Wallet Clients',
        role: 'End-user and DApp surfaces',
        bullets: [
          '`Seth_Wallet_Android`: Kotlin + Compose wallet with Seth-specific crypto logic',
          '`Seth_Wallet`: SwiftUI iOS wallet with SethChainClient and injected web3 provider',
          'Both clients implement Seth-specific transaction behavior instead of assuming stock Ethereum RPC',
        ],
      },
      {
        name: 'Ecosystem Contracts',
        role: 'Bridge, treasury, pricing, settlement',
        bullets: [
          '`Seth-AI-ecosystem`: Solidity + Solana Anchor contracts and relayer',
          '`Seth`: x402 mint backend plus static launch and mint site with additional backend branches',
          'This is where protocol-level economics become concrete enough to document',
        ],
      },
    ],
    branchTitle: 'Notable Branch Tracks',
    branchPoints: [
      '`Seth-AI-Pub`: `main`, `hsq0316`',
      '`Seth-x-Openclaw`: `main`, `dev`, `hsq`, `zlatan`',
      '`Seth_Wallet_Android`: `main`, `sw_2.0.0`',
      '`Seth`: `main`, `hsq`, `lsz`, `lsz_transfer`, `qjc`',
    ],
    fitTitle: 'What Changed In This Docs Set',
    fitPoints: [
      'Wallets are now treated as first-class code artifacts, not as a hand-wavy compatibility note.',
      'OpenClaw and AI application layers now have their own documentation surface instead of being squeezed into generic build pages.',
      'Token economics is now sourced from actual contracts and Solana programs, including settlement logic, DIRM parameters, and bridge/treasury flows.',
      'Where the code still disagrees with itself, the docs call that out instead of hiding the inconsistency.',
    ],
  },
  zh: {
    title: '欢迎来到 Seth 开发者文档',
    badge: '基于代码、合约和分支审阅重建的开发者文档',
    intro: [
      '这套文档现在已经覆盖到你在 2026 年 3 月 17 日补充给我的私有仓库，并基于这些仓库做了只读梳理。',
      '现在的仓库版图已经明显比最初的公开视角更完整：既有核心链代码、文档站和浏览器，也有钱包、OpenClaw / AI 工具链、生态合约，以及单独的 x402 mint 后端。',
      '这套站点的目标就是把这些实现讲清楚：哪些功能已经落地、代码在哪、哪些分支承载了重要工作流、哪些地方还存在实现不一致或尚未打磨完成的接缝。',
    ],
    quickStats: [
      { label: '已审阅仓库', value: '9' },
      { label: '关键分支线', value: '10+' },
      { label: '覆盖范围', value: '主链 / AI / 钱包 / 合约' },
    ],
    startTitle: '从这里开始',
    startCards: [
      {
        title: 'DApp 开发者',
        desc: '想最快从仓库 checkout 走到合约调用和应用接入。',
        page: 'Get Started',
      },
      {
        title: '节点运维',
        desc: '关心构建脚本、部署模式、端口和运行期要求。',
        page: 'Nodes & Operations',
      },
      {
        title: '接口集成方',
        desc: '关心网关语义、接口形态和客户端签名提交流程。',
        page: 'HTTP API Reference',
      },
      {
        title: '协议研究者',
        desc: '关心架构、分片、经济模型和生态实现细节。',
        page: 'Core Concepts',
      },
    ],
    coverageTitle: '这套文档当前覆盖什么',
    coveragePoints: [
      '来自 SethPub 的主链与网关行为',
      '来自 SethExplorer 的浏览器与索引器假设',
      '来自 Android / iOS 仓库的钱包客户端逻辑',
      '来自 OpenClaw / Agent Hub / x402 的应用层流程',
      '来自生态合约仓库的国库、桥、资金池与 DIRM 行为',
    ],
    sourceTitle: '仓库版图',
    sourceItems: [
      {
        name: '文档与浏览器',
        role: '开发者说明与索引层',
        bullets: [
          '`whitepaper`：Vite + React 文档站源码',
          '`SethExplorer`：基于 Blockscout 的浏览器 / 索引器工作流',
          '适合用来理解文档呈现和 explorer 侧运行假设',
        ],
      },
      {
        name: '核心协议层',
        role: '节点、网关、共识、执行',
        bullets: [
          '`SethPub`：核心 C++ 链实现与多语言客户端示例',
          '自定义 HTTP 网关入口在 `src/init/http_handler.cc`',
          '共识、分片、BLS / DKG 和 EVM 执行路径都主要在这里',
        ],
      },
      {
        name: 'AI 与 OpenClaw',
        role: '代理工具链与应用流程',
        bullets: [
          '`Seth-AI-Pub`：本地 agent hub / tool service，核心接口是 `/v1/execute` 与 `/v1/chat`',
          '`Seth-x-Openclaw`：云挖矿 / university 前端，以及若干 control-plane 分支',
          '多个命名分支都在承载 OpenClaw 和后端接入的重要工作流',
        ],
      },
      {
        name: '钱包客户端',
        role: '终端用户与 DApp 接入面',
        bullets: [
          '`Seth_Wallet_Android`：Kotlin + Compose 钱包，并实现 Seth 专用加密逻辑',
          '`Seth_Wallet`：SwiftUI iOS 钱包，内置 SethChainClient 与 web3 provider 注入',
          '两端都在实现 Seth 专用交易逻辑，而不是简单套用 Ethereum RPC',
        ],
      },
      {
        name: '生态合约层',
        role: '桥、国库、定价与结算',
        bullets: [
          '`Seth-AI-ecosystem`：Solidity + Solana Anchor 合约与 relayer',
          '`Seth`：x402 mint 后端、静态站点以及更多后端分支',
          '这部分仓库让协议经济首次有了足够具体的代码来源可供文档化',
        ],
      },
    ],
    branchTitle: '值得关注的分支线',
    branchPoints: [
      '`Seth-AI-Pub`：`main`、`hsq0316`',
      '`Seth-x-Openclaw`：`main`、`dev`、`hsq`、`zlatan`',
      '`Seth_Wallet_Android`：`main`、`sw_2.0.0`',
      '`Seth`：`main`、`hsq`、`lsz`、`lsz_transfer`、`qjc`',
    ],
    fitTitle: '这轮文档补充带来的变化',
    fitPoints: [
      '钱包仓库现在被视为一等代码资产，不再只是“兼容性备注”。',
      'OpenClaw 与 AI 应用层现在有了独立文档面，而不是继续塞在泛化的构建页里。',
      'Token economics 现在可以直接引用实际合约与 Solana 程序，包括结算逻辑、DIRM 参数以及 bridge / treasury 流程。',
      '凡是代码之间仍然互相矛盾的地方，文档会直接指出，而不是继续掩盖。',
    ],
  },
} as const;

export function Welcome({ lang }: { lang: 'en' | 'zh' }) {
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
        <span className="text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded">Welcome</span>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.25fr)_23rem] gap-10 mb-14 items-start">
        <div>
          <div className="inline-flex items-center rounded-full border border-[rgba(0,168,85,0.18)] bg-[linear-gradient(90deg,rgba(0,168,85,0.12),rgba(36,196,255,0.08))] px-4 py-2 text-[13px] font-medium text-[var(--color-text-main)] mb-5">
            {t.badge}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-[var(--color-text-main)]">
            {t.title}
          </h1>

          <div className="max-w-4xl space-y-6 text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed">
            {t.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {t.quickStats.map((stat) => (
              <div
                key={stat.label}
                className="min-h-[7.25rem] rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-bg-card)_90%,transparent),color-mix(in_oklab,var(--color-bg-main)_96%,transparent))] px-5 py-4 shadow-[0_14px_28px_rgba(15,23,42,0.08)]"
              >
                <div className="text-[12px] uppercase tracking-[0.16em] text-gray-500 mb-2">{stat.label}</div>
                <div className="text-[1.25rem] leading-8 font-semibold text-[var(--color-text-main)]">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-bg-card)_92%,transparent),color-mix(in_oklab,var(--color-bg-main)_98%,transparent))] p-7 shadow-[0_22px_50px_rgba(15,23,42,0.12)]">
          <div className="text-[12px] uppercase tracking-[0.16em] text-gray-500 mb-3">{t.coverageTitle}</div>
          <ul className="space-y-4">
            {t.coveragePoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-brand)] shadow-[0_0_0_4px_rgba(0,168,85,0.12)] shrink-0"></span>
                <span className="text-[15px] leading-7 text-[var(--color-text-muted)]">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2 flex items-center gap-2">
        <SearchCode className="w-6 h-6 text-[var(--color-brand-purple)]" />
        {t.startTitle}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-14">
        {t.startCards.map((card) => (
          <motion.button
            key={card.title}
            whileHover={{ y: -4 }}
            onClick={() => {
              const url = new URL(window.location.href);
              const slugMap: Record<string, string> = {
                'Get Started': 'get-started',
                'Nodes & Operations': 'nodes-and-operations',
                'HTTP API Reference': 'http-api-reference',
                'Core Concepts': 'core-concepts',
              };
              url.searchParams.set('page', slugMap[card.page] ?? 'welcome');
              url.hash = '';
              window.history.pushState({}, '', url);
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            className="text-left rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-bg-card)_88%,transparent),color-mix(in_oklab,var(--color-bg-main)_96%,transparent))] p-5 shadow-[0_14px_28px_rgba(15,23,42,0.08)] hover:border-[rgba(0,168,85,0.18)] transition-all"
          >
            <div className="text-[1rem] font-semibold text-[var(--color-text-main)] mb-2">{card.title}</div>
            <p className="text-[14px] leading-6 text-[var(--color-text-muted)]">{card.desc}</p>
          </motion.button>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2 flex items-center gap-2">
        <FolderGit2 className="w-6 h-6 text-[var(--color-brand)]" />
        {t.sourceTitle}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6 mb-12">
        {t.sourceItems.map((item, idx) => {
          const icon =
            idx === 0 ? <GitBranch className="w-6 h-6 text-[var(--color-brand)]" /> :
            idx === 1 ? <Code2 className="w-6 h-6 text-[var(--color-brand-purple)]" /> :
            idx === 2 ? <SearchCode className="w-6 h-6 text-[var(--color-brand)]" /> :
            idx === 3 ? <Code2 className="w-6 h-6 text-[var(--color-brand-purple)]" /> :
            <GitBranch className="w-6 h-6 text-[var(--color-brand)]" />;

          const spanClass = idx < 3 ? 'xl:col-span-2' : 'xl:col-span-3';

          return (
            <motion.div
              key={item.name}
              whileHover={{ y: -4 }}
              className={`${spanClass} p-6 rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-bg-card)_88%,transparent),color-mix(in_oklab,var(--color-bg-main)_95%,transparent))] shadow-[0_18px_36px_rgba(15,23,42,0.10)]`}
            >
              <div className="w-11 h-11 rounded-xl bg-[var(--color-bg-main)] border border-[var(--color-border)] flex items-center justify-center mb-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                {icon}
              </div>
              <h3 className="text-[1.15rem] font-semibold text-[var(--color-text-main)] mb-2">{item.name}</h3>
              <p className="text-[15px] leading-7 text-[var(--color-text-muted)] mb-4">{item.role}</p>
              <ul className="space-y-2.5">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-[15px] leading-7 text-[var(--color-text-muted)]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] shrink-0"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2 flex items-center gap-2">
        <GitBranch className="w-6 h-6 text-[var(--color-brand-purple)]" />
        {t.branchTitle}
      </h2>

      <div className="bg-[var(--color-bg-card)] p-7 rounded-2xl border border-[var(--color-border)] mb-12 shadow-[0_18px_36px_rgba(15,23,42,0.08)]">
        <ul className="space-y-3">
          {t.branchPoints.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[var(--color-brand-purple)] mt-2.5 shrink-0"></div>
              <span className="text-[15px] leading-7 text-[var(--color-text-muted)]">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2 flex items-center gap-2">
        <Code2 className="w-6 h-6 text-[var(--color-brand)]" />
        {t.fitTitle}
      </h2>

      <div className="bg-[var(--color-bg-card)] p-7 rounded-2xl border border-[var(--color-border)] mb-12 shadow-[0_18px_36px_rgba(15,23,42,0.08)]">
        <ul className="space-y-3">
          {t.fitPoints.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[var(--color-brand)] mt-2.5 shrink-0"></div>
              <span className="text-[15px] leading-7 text-[var(--color-text-muted)]">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-brand-purple)] text-white px-5 py-2.5 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-[var(--color-brand)]/20 z-10"
      >
        <Edit3 className="w-4 h-4" />
        <span className="hidden sm:inline">{i18n[lang].welcome.suggestEdits}</span>
      </motion.button>
    </motion.div>
  );
}
