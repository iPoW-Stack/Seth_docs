import { Home, ChevronRight, Edit3, Coins, PieChart, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { i18n } from '../i18n';

const copy = {
  en: {
    title: 'Token Economics & Settlement',
    description:
      'With the private ecosystem repositories and the two internal strategy PDFs included, the economic model is no longer just aspirational prose. We can now separate what is already represented in code from what is still an internal operating strategy.',
    splitTitle: 'On-Chain Settlement Logic',
    splitSubtitle: 'Defined in Solana-side constants and revenue processing',
    splitBody: [
      '`contracts/solana/src/constants.rs` defines `COMMISSION_L1_RATE = 1000`, `COMMISSION_L2_RATE = 500`, `TEAM_INCENTIVE_RATE = 500`, `PROJECT_RESERVE_RATE = 4500`, and `ECOSYSTEM_RATE = 3500` with `BASIS_POINTS = 10000`.',
      'That resolves to 10% L1 commission, 5% L2 commission, 5% team incentive, 45% project reserve, and 35% ecosystem funds.',
      '`contracts/solana/src/revenue.rs` applies those rates in `handle_process_revenue()` and records the 35% ecosystem portion as a cross-chain message destined for Seth.',
    ],
    settlementTitle: 'Settlement Cadence & Product Types',
    settlementBody: [
      '`SETTLEMENT_DAY = 28` and `MIN_SETTLEMENT_INTERVAL = 25 * 86400` are defined on the Solana side for monthly settlement behavior.',
      'The same constants file also names product categories: cloud mining (`1`), doctorate tuition (`2`), and smart device (`3`).',
      'That means cloud-mining and university-style tuition flows are not just UI copy; they are represented in the settlement program constants.',
    ],
    bridgeTitle: 'Bridge & Pool Flow',
    bridgeBody: [
      '`SethBridge.sol` is the trusted-relayer bridge contract for Solana -> Seth.',
      'Its documented ecosystem path is: Solana revenue event -> relayer -> `SethBridge.injectEcosystemFunds()` -> `PoolB.addLiquidity()`.',
      '`PoolB.sol` is the SETH / sUSDC pricing pool and explicitly restricts liquidity-provider control to the treasury side.',
      '`PoolB.sol` also states that SETH is treated as the native Seth coin, not as an ERC-20 token.',
    ],
    dirmTitle: 'sUSDC & DIRM Parameters',
    dirmBody: [
      '`sUSDC.sol` implements mint / burn plus an internal DIRM-style curve layer.',
      'The checked-in constants are `A = 100`, `TAU = 0.02`, `K = 30`, `R_MAX = 0.05`, and `TARGET_P = 1.00` in fixed-point form.',
      'The Solana `dirm` program mirrors this with explicit fixed-point math and a Padé tanh approximation in `contracts/solana/dirm/src/math.rs`.',
    ],
    internalTitle: 'Internal Strategy Documents',
    internalBody: [
      'The one-page `SETH-MassAdopt-快速市场策略.pdf` frames the product entry as a `29.99 USD` OpenClaw cloud server package; owner clarification now fixes the working spec at `2C / 4G / 80G` plus `10U AI Token`.',
      'Owner clarification also fixes OpenClaw University at the final policy of free enrollment with `0 SETH` tuition, while keeping the `12-week` PhD-style path.',
      'The longer `SETH_自动化模型_v1.8_CN.pdf` instead models a `29.99 USDC` invite-only entry fee, two Gnosis Safe wallets (`MCP-Wallet` and `Controller-Wallet`), a total supply of `210,000,000,000 SETH`, a target price of `0.00476 USDC`, and a dual-pool A/B structure.',
      'That automation model still contains older tuition-sink language in some sections, but developer docs should now treat those references as superseded by the owner-confirmed free / `0 SETH` policy.',
    ],
    caveatTitle: 'Developer Caveats',
    caveatBody: [
      'There is a decimals mismatch worth documenting: `sUSDC.sol` declares `decimals = 6`, while `SethBridge.sol` applies `DECIMALS_SCALE = 1e12` and comments describe a 6-decimal Solana USDC to 18-decimal Seth-side conversion.',
      'There is still a treasury-rule mismatch to track: the one-page strategy note says `85%` goes straight to a multisig wallet, while the newer automation model and the current Solana program constants align more closely with a structured `50 / 30 / 15 / 5` split.',
      'On the university side, the business decision is now resolved: final product policy is free / `0 SETH`, even though some older internal documents and code paths still reference tuition-related typing.',
      'For developers, the safe rule is: treat contracts and checked-in program constants as implementation truth, and treat the PDFs as internal planning context unless or until the code catches up.',
    ],
    tocTitle: 'On this page',
  },
  zh: {
    title: '代币经济与结算',
    description:
      '把私有生态仓库和老板给的两份内部策略 PDF 一起纳入后，协议经济终于不再只是口头叙述。这一页现在会明确区分：哪些规则已经进入代码，哪些仍然只是内部经营策略。',
    splitTitle: '链上结算逻辑',
    splitSubtitle: '由 Solana 侧常量和 revenue 处理逻辑定义',
    splitBody: [
      '`contracts/solana/src/constants.rs` 定义了 `COMMISSION_L1_RATE = 1000`、`COMMISSION_L2_RATE = 500`、`TEAM_INCENTIVE_RATE = 500`、`PROJECT_RESERVE_RATE = 4500`、`ECOSYSTEM_RATE = 3500`，基准是 `BASIS_POINTS = 10000`。',
      '换算后就是 L1 推荐 10%、L2 推荐 5%、团队激励 5%、项目储备 45%、生态资金 35%。',
      '`contracts/solana/src/revenue.rs` 的 `handle_process_revenue()` 会应用这组比例，并把 35% 的生态资金记录成一个发往 Seth 的跨链消息。',
    ],
    settlementTitle: '结算节奏与产品类型',
    settlementBody: [
      'Solana 侧常量中定义了 `SETTLEMENT_DAY = 28` 和 `MIN_SETTLEMENT_INTERVAL = 25 * 86400`，用于月度结算控制。',
      '同一个常量文件还定义了产品类型：云算力 (`1`)、博士学费 (`2`)、智能设备 (`3`)。',
      '这意味着云挖矿和 university 风格学费流程不只是前端文案，而是已经进入了结算程序常量层。',
    ],
    bridgeTitle: '跨链与资金池路径',
    bridgeBody: [
      '`SethBridge.sol` 是 Solana -> Seth 方向的 trusted-relayer bridge 合约。',
      '它文档化的生态资金路径是：Solana revenue 事件 -> relayer -> `SethBridge.injectEcosystemFunds()` -> `PoolB.addLiquidity()`。',
      '`PoolB.sol` 是 SETH / sUSDC 定价池，并明确把流动性提供者权限限制在 treasury 一侧。',
      '`PoolB.sol` 还明确说明 SETH 被视为 Seth 链原生币，而不是 ERC-20。',
    ],
    dirmTitle: 'sUSDC 与 DIRM 参数',
    dirmBody: [
      '`sUSDC.sol` 不只是一个 mint / burn 代币，还内置了一层 DIRM 风格曲线逻辑。',
      '当前代码里的关键常量是 `A = 100`、`TAU = 0.02`、`K = 30`、`R_MAX = 0.05`、`TARGET_P = 1.00`，均以定点数表达。',
      'Solana 侧 `contracts/solana/dirm/src/math.rs` 也实现了对应的定点数学和 Padé tanh 近似。',
    ],
    internalTitle: '内部策略文件补充',
    internalBody: [
      '`SETH-MassAdopt-快速市场策略.pdf` 把业务入口描述成一个 `29.99 USD` 的 OpenClaw 云服务器套餐；结合老板刚刚的明确要求，当前工作规格应固定为 `2C / 4G / 80G`，并附带 `10U AI Token`。',
      '老板也已经明确拍板：OpenClaw University 的最终方案就是完全免费，也就是 `0 SETH` 学费，并保留 `12 周` 的博士式培养路径。',
      '更长的 `SETH_自动化模型_v1.8_CN.pdf` 则把入口建模成 `29.99 USDC`、邀请码访问、双 Gnosis Safe 钱包（`MCP-Wallet` 与 `Controller-Wallet`）、`210,000,000,000 SETH` 总量、`0.00476 USDC` 目标价格，以及 A/B 双池结构。',
      '但这份自动化模型里仍然保留了较早版本的“大学学费回收 / 锁仓”口径。对当前开发文档来说，这些段落已经应被视为旧口径。',
    ],
    caveatTitle: '开发者必须知道的口径风险',
    caveatBody: [
      '当前代码里存在一个 decimals 不一致：`sUSDC.sol` 声明 `decimals = 6`，而 `SethBridge.sol` 却使用 `DECIMALS_SCALE = 1e12`，并把这条链路注释成 Solana 6 位到 Seth 18 位的转换。',
      '目前仍然存在国库口径不一致：一页纸策略写的是 `85%` 直接进多签，而较新的自动化模型和当前 Solana 程序常量则更接近结构化的 `50 / 30 / 15 / 5` 分流。',
      '但在大学方案上，业务口径已经被老板定稿为“免费 / `0 SETH`”。因此，代码里仍然残留的学费相关 product type 或旧文档描述，都应该被视为待收敛的历史实现残留。',
      '对开发者来说，最安全的原则是：优先信任合约和程序常量，把 PDF 视为内部规划背景，直到代码层真正跟上这些口径为止。',
    ],
    tocTitle: '本页导航',
  },
} as const;

export function TokenEconomics({ lang }: { lang: 'en' | 'zh' }) {
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
        <span className="text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded">Token Economics</span>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_18rem] gap-10 items-start">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-[var(--color-text-main)]">
            {t.title}
          </h1>

          <div className="space-y-6 text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed mb-12">
            <p>{t.description}</p>
          </div>

          <section id="split" className="docs-section bg-[var(--color-bg-card)] p-8 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[var(--color-brand)]/10 rounded-lg">
                <PieChart className="w-8 h-8 text-[var(--color-brand)]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-text-main)]">{t.splitTitle}</h2>
                <p className="text-[var(--color-text-muted)]">{t.splitSubtitle}</p>
              </div>
            </div>
            <div className="space-y-4 text-[var(--color-text-muted)]">
              {t.splitBody.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </section>

          <section id="settlement" className="docs-section bg-[var(--color-bg-card)] p-8 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[var(--color-brand-purple)]/10 rounded-lg">
                <Activity className="w-8 h-8 text-[var(--color-brand-purple)]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-text-main)]">{t.settlementTitle}</h2>
              </div>
            </div>
            <div className="space-y-4 text-[var(--color-text-muted)]">
              {t.settlementBody.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </section>

          <section id="bridge" className="docs-section bg-[var(--color-bg-card)] p-8 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[var(--color-brand)]/10 rounded-lg">
                <Coins className="w-8 h-8 text-[var(--color-brand)]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-text-main)]">{t.bridgeTitle}</h2>
              </div>
            </div>
            <div className="space-y-4 text-[var(--color-text-muted)]">
              {t.bridgeBody.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </section>

          <section id="dirm" className="docs-section bg-[var(--color-bg-card)] p-8 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[var(--color-brand-purple)]/10 rounded-lg">
                <Activity className="w-8 h-8 text-[var(--color-brand-purple)]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-text-main)]">{t.dirmTitle}</h2>
              </div>
            </div>
            <div className="space-y-4 text-[var(--color-text-muted)]">
              {t.dirmBody.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </section>

          <section id="internal" className="docs-section bg-[var(--color-bg-card)] p-8 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[var(--color-brand)]/10 rounded-lg">
                <Coins className="w-8 h-8 text-[var(--color-brand)]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-text-main)]">{t.internalTitle}</h2>
              </div>
            </div>
            <div className="space-y-4 text-[var(--color-text-muted)]">
              {t.internalBody.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </section>

          <section id="caveats" className="docs-section bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 p-5 rounded-xl border border-yellow-500/20 mb-12">
            <h3 className="text-lg font-semibold mb-2">{t.caveatTitle}</h3>
            <div className="space-y-3 text-sm leading-relaxed">
              {t.caveatBody.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </section>
        </div>

        <aside className="hidden xl:block">
          <div className="sticky top-24 space-y-5">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-bg-card)_90%,transparent),color-mix(in_oklab,var(--color-bg-main)_98%,transparent))] p-5 shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
              <div className="text-[12px] uppercase tracking-[0.16em] text-gray-500 mb-3">{t.tocTitle}</div>
              <nav className="space-y-1.5">
                <a href="#split" className="block rounded-xl px-3 py-2 text-[14px] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-main)] hover:text-[var(--color-text-main)] transition-colors">
                  {t.splitTitle}
                </a>
                <a href="#settlement" className="block rounded-xl px-3 py-2 text-[14px] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-main)] hover:text-[var(--color-text-main)] transition-colors">
                  {t.settlementTitle}
                </a>
                <a href="#bridge" className="block rounded-xl px-3 py-2 text-[14px] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-main)] hover:text-[var(--color-text-main)] transition-colors">
                  {t.bridgeTitle}
                </a>
                <a href="#dirm" className="block rounded-xl px-3 py-2 text-[14px] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-main)] hover:text-[var(--color-text-main)] transition-colors">
                  {t.dirmTitle}
                </a>
                <a href="#internal" className="block rounded-xl px-3 py-2 text-[14px] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-main)] hover:text-[var(--color-text-main)] transition-colors">
                  {t.internalTitle}
                </a>
                <a href="#caveats" className="block rounded-xl px-3 py-2 text-[14px] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-main)] hover:text-[var(--color-text-main)] transition-colors">
                  {t.caveatTitle}
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
