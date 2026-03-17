import { Home, ChevronRight, Edit3, Bot, Cloud, Server, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { i18n } from '../i18n';

const copy = {
  en: {
    title: 'AI Ecosystem & OpenClaw',
    description:
      'The private repositories add a real application layer on top of Seth: local agent tooling, OpenClaw-facing frontend flows, revenue-sharing contracts, cross-chain bridge logic, wallet clients, and a minting backend around x402 and Solana.',
    sections: [
      {
        id: 'hub',
        title: 'Seth-AI-Pub',
        icon: <Bot className="w-6 h-6 text-[var(--color-brand)]" />,
        body: [
          'Main branch is a local `demo/` service built with Node.js, TypeScript, Fastify, and AJV.',
          'It exposes `POST /v1/execute` for skill execution and `POST /v1/chat` for natural-language orchestration.',
          'The demo includes optional Telegram bot support, mock or Seth backends, runtime ops scripts, E2E checks, and an OpenAPI file.',
          'Known validated live endpoints in the checked-in README include `101.47.158.85:23001`, `101.47.158.9:23003`, `101.47.158.131:23008`, and `101.47.158.163:23010` for read-only skills.',
          '`hsq0316` is a major branch that adds BytePlus/OpenClaw handoff artifacts, live retrieval plumbing, `search` and `read_url` style capabilities, plus a mining readonly addon stack.',
        ],
      },
      {
        id: 'openclaw',
        title: 'Seth-x-Openclaw',
        icon: <Cloud className="w-6 h-6 text-[var(--color-brand-purple)]" />,
        body: [
          'Main branch is a Vite + React + Express frontend with routes for Home, Mobile Mining, Dashboard, Installation, University, Invitation Code, and Connect Wallet.',
          'The UI is focused on OpenClaw cloud-mining, agent installation, and university-style onboarding flows.',
          '`dev` adds a Go control-plane backend with OpenAPI-described routes such as `/api/v1/auth/nonce`, `/api/v1/auth/verify`, invitation/profile APIs, instance metrics, agent purchase/install/run/stop, and university endpoints.',
          '`hsq` adds a frontend API abstraction layer, integration tests, backend handoff docs, and route/data mappers.',
          '`zlatan` adds Solana auth and x402-oriented frontend/server work, including purchase-flow and wallet integration changes.',
        ],
      },
      {
        id: 'economy',
        title: 'Seth-AI-ecosystem',
        icon: <Layers className="w-6 h-6 text-[var(--color-brand)]" />,
        body: [
          'This repo contains the concrete on-chain economy pieces that were missing from the earlier public-only review.',
          'On Seth-side Solidity, it ships `PoolB.sol`, `sUSDC.sol`, `SethBridge.sol`, and `Treasury.sol`.',
          'On Solana-side Anchor, it ships a bridge/revenue program and a separate DIRM math/swap program under `contracts/solana/dirm`.',
          'The relayer is a Node.js + PostgreSQL service that listens for Solana events and drives the Seth bridge path.',
        ],
      },
      {
        id: 'backend',
        title: 'Seth',
        icon: <Server className="w-6 h-6 text-[var(--color-brand-purple)]" />,
        body: [
          'Main branch combines a Go backend, a static frontend site, and an Anchor workspace.',
          'Current backend routes in `backend/internal/httpserver/server.go` are `GET /api/status`, `POST /api/mint`, and `POST /api/verify`.',
          'The static frontend is an x402/Solana minting site around SETH fair launch and wallet connection.',
          '`hsq` adds a large docs + SEO + content track and legacy route fallback for mint/verify.',
          '`lsz` and `lsz_transfer` introduce a `Seth_backend` variant with richer APIs such as minted-number, leaderboard, user profile, invites, and rebates.',
          '`qjc` is the branch where the initial frontend landing-page work was introduced.',
        ],
      },
    ],
    strategyTitle: 'What The Internal PDFs Add',
    strategyBody: [
      'They confirm the intended product funnel around OpenClaw preinstalled cloud servers, invite-code gated access, and SOL/x402 payment entry.',
      'They introduce a business-facing packaging layer: `29.99 USD/USDC`, owner-confirmed starter spec `2C / 4G / 80G`, referral automation, and treasury automation language.',
      'Owner clarification now resolves the University decision as well: OpenClaw University is finalised as free / `0 SETH`.',
      'That makes this page the right place to document the current business intent, while the exact financial truth still belongs in contracts and program constants.',
    ],
    branchTitle: 'How To Read The Branches',
    branchBody: [
      'Treat `main` as the baseline product surface for each repo.',
      'Treat named feature branches like `hsq0316`, `dev`, `hsq`, `zlatan`, `sw_2.0.0`, `lsz`, and `lsz_transfer` as active workstreams: they often contain substantial product direction that has not yet been merged.',
      'For internal developer docs, it is useful to call out those branch tracks explicitly, but they should still be labeled as branch-specific rather than current default behavior.',
    ],
    tocTitle: 'On this page',
  },
  zh: {
    title: 'AI 生态与 OpenClaw',
    description:
      '这些私有仓库把 Seth 上层应用层补得很完整：本地 Agent Tooling、面向 OpenClaw 的前端流程、收益分账合约、跨链桥逻辑、钱包客户端，以及围绕 x402 和 Solana 的 mint 后端。',
    sections: [
      {
        id: 'hub',
        title: 'Seth-AI-Pub',
        icon: <Bot className="w-6 h-6 text-[var(--color-brand)]" />,
        body: [
          '主分支核心是 `demo/`，技术栈是 Node.js + TypeScript + Fastify + AJV。',
          '它暴露 `POST /v1/execute` 作为技能执行入口，暴露 `POST /v1/chat` 作为自然语言编排入口。',
          '仓库还包含可选 Telegram bot、mock/seth 两种后端模式、运行脚本、E2E 检查以及 OpenAPI 文件。',
          'README 中列出的已验证只读节点包括 `101.47.158.85:23001`、`101.47.158.9:23003`、`101.47.158.131:23008`、`101.47.158.163:23010`。',
          '`hsq0316` 是一条很重的分支，增加了 BytePlus/OpenClaw 交接物料、live retrieval 能力、`search` / `read_url` 风格能力，以及 mining readonly addon。',
        ],
      },
      {
        id: 'openclaw',
        title: 'Seth-x-Openclaw',
        icon: <Cloud className="w-6 h-6 text-[var(--color-brand-purple)]" />,
        body: [
          '主分支是一个 Vite + React + Express 前端，路由覆盖 Home、Mobile Mining、Dashboard、Installation、University、Invitation Code、Connect Wallet。',
          '它的 UI 重点是 OpenClaw 云挖矿、代理安装和大学式 onboarding 流程。',
          '`dev` 分支新增了一个 Go control-plane 后端，并通过 OpenAPI 定义了 `/api/v1/auth/nonce`、`/api/v1/auth/verify`、邀请 / 用户资料、实例指标、代理购买 / 安装 / 启停、大学等路由。',
          '`hsq` 分支重点在前端 API 抽象层、集成测试和后端对接文档。',
          '`zlatan` 分支则明显在推进 Solana auth 和 x402 风格的购买与钱包接入逻辑。',
        ],
      },
      {
        id: 'economy',
        title: 'Seth-AI-ecosystem',
        icon: <Layers className="w-6 h-6 text-[var(--color-brand)]" />,
        body: [
          '这个仓库把之前仅靠公开仓库无法确认的那部分协议经济补了出来。',
          'Seth 侧 Solidity 合约包括 `PoolB.sol`、`sUSDC.sol`、`SethBridge.sol` 和 `Treasury.sol`。',
          'Solana 侧 Anchor 程序包含 bridge/revenue 主程序，以及单独的 DIRM 数学 / swap 程序 `contracts/solana/dirm`。',
          'Relayer 是一个 Node.js + PostgreSQL 服务，用来监听 Solana 事件并驱动 Seth 侧桥接执行。',
        ],
      },
      {
        id: 'backend',
        title: 'Seth',
        icon: <Server className="w-6 h-6 text-[var(--color-brand-purple)]" />,
        body: [
          '主分支把 Go 后端、静态前端站点和一个 Anchor workspace 放在一起。',
          '当前主分支后端在 `backend/internal/httpserver/server.go` 中定义的路由是 `GET /api/status`、`POST /api/mint`、`POST /api/verify`。',
          '静态前端则是一个围绕 SETH fair launch、Solana 钱包连接和 x402 mint 流程的站点。',
          '`hsq` 分支增加了大量文档、SEO 内容页以及 mint/verify 的兼容性 fallback。',
          '`lsz` 和 `lsz_transfer` 分支引入了 `Seth_backend` 变体，扩展出 minted-number、排行榜、用户资料、邀请与返佣等接口。',
          '`qjc` 是初始落地前端 landing page 的那条分支。',
        ],
      },
    ],
    strategyTitle: '内部 PDF 带来的补充',
    strategyBody: [
      '它们确认了业务入口确实围绕 OpenClaw 预装云服务器、邀请码访问和 SOL/x402 支付展开。',
      '它们还补充了更偏经营层的包装口径：`29.99 USD/USDC`、老板确认的入门云服务器规格 `2C / 4G / 80G`、推荐自动分成以及国库自动化。',
      '同时，老板也已经把 OpenClaw University 的最终方案定成“免费 / `0 SETH`”。',
      '因此，AI 生态页适合承接这些业务背景，而真正的技术和财务事实仍然必须以下层代码、合约和程序常量为准。',
    ],
    branchTitle: '这些分支该怎么读',
    branchBody: [
      '把 `main` 当成每个仓库当前默认产品面的基线。',
      '把 `hsq0316`、`dev`、`hsq`、`zlatan`、`sw_2.0.0`、`lsz`、`lsz_transfer` 这一类命名分支当成正在推进中的工作流，它们往往承载了大量尚未合并的产品方向。',
      '对内部开发文档来说，最合适的写法是明确标出这些分支在做什么，但同时把它们标记成“分支工作线”，而不是默认现状。',
    ],
    tocTitle: '本页导航',
  },
} as const;

export function AIEcosystem({ lang }: { lang: 'en' | 'zh' }) {
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
        <span className="text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded">AI Ecosystem</span>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_18rem] gap-10 items-start">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-[var(--color-text-main)]">
            {t.title}
          </h1>

          <div className="space-y-6 text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed mb-12">
            <p>{t.description}</p>
          </div>

          {t.sections.map((section) => (
            <section key={section.id} id={section.id} className="docs-section bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2 flex items-center gap-2">
                {section.icon}
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.body.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] mt-2 shrink-0"></div>
                    <span className="text-sm text-[var(--color-text-muted)]">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section id="strategy" className="docs-section bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2">
              {t.strategyTitle}
            </h2>
            <ul className="space-y-3">
              {t.strategyBody.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] mt-2 shrink-0"></div>
                  <span className="text-sm text-[var(--color-text-muted)]">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="branches" className="docs-section bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2">
              {t.branchTitle}
            </h2>
            <ul className="space-y-3">
              {t.branchBody.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-purple)] mt-2 shrink-0"></div>
                  <span className="text-sm text-[var(--color-text-muted)]">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="hidden xl:block">
          <div className="sticky top-24 space-y-5">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-bg-card)_90%,transparent),color-mix(in_oklab,var(--color-bg-main)_98%,transparent))] p-5 shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
              <div className="text-[12px] uppercase tracking-[0.16em] text-gray-500 mb-3">{t.tocTitle}</div>
              <nav className="space-y-1.5">
                {t.sections.map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="block rounded-xl px-3 py-2 text-[14px] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-main)] hover:text-[var(--color-text-main)] transition-colors">
                    {section.title}
                  </a>
                ))}
                <a href="#strategy" className="block rounded-xl px-3 py-2 text-[14px] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-main)] hover:text-[var(--color-text-main)] transition-colors">
                  {t.strategyTitle}
                </a>
                <a href="#branches" className="block rounded-xl px-3 py-2 text-[14px] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-main)] hover:text-[var(--color-text-main)] transition-colors">
                  {t.branchTitle}
                </a>
              </nav>
            </div>
          </div>
        </aside>
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
