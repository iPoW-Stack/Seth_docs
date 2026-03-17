import { Home, ChevronRight, Edit3, GitBranch, Hammer, Terminal, SearchCode, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { i18n } from '../i18n';
import { CodeBlock } from '../components/CodeBlock';

const copy = {
  en: {
    title: 'Developer Quick Start',
    badge: 'Recommended path for new developers',
    description:
      'Use this path when you want to understand the current Seth stack from source, contracts, and internal operating documents instead of from a single marketing snapshot.',
    quickFacts: [
      { label: 'Chain entrypoint', value: 'SethPub gateway' },
      { label: 'Current product spec', value: '2C / 4G / 80G' },
      { label: 'University policy', value: 'Free / 0 SETH' },
    ],
    assumptionsTitle: 'Current Product Assumptions',
    assumptions: [
      '`29.99 USD/USDC` is the active internal entry-point price direction for the OpenClaw cloud-server offer.',
      'Owner-confirmed starter machine spec is `2C / 4G / 80G`.',
      'OpenClaw University is finalised at free / `0 SETH`.',
      'The chain integration truth still comes from repo code and contracts, not from PDF-only language.',
    ],
    sections: [
      {
        id: 'core-repos',
        title: 'Clone the core repos first',
        subtitle: 'Docs, chain, explorer',
        description:
          'Start with `whitepaper`, `SethPub`, and `SethExplorer`. Those three still define the core public developer baseline.',
        code: `git clone https://github.com/iPoW-Stack/whitepaper.git\ngit clone https://github.com/iPoW-Stack/SethPub.git\ngit clone https://github.com/iPoW-Stack/SethExplorer.git`,
      },
      {
        id: 'build-core',
        title: 'Build SethPub first',
        subtitle: 'Dependencies before binaries',
        description:
          'The core repo expects you to build third-party dependencies first, then configure and compile the C++ targets.',
        code: `cd SethPub\nbash build_third.sh\ncmake -S . -B build_release -DCMAKE_POLICY_VERSION_MINIMUM=3.5 -DCMAKE_BUILD_TYPE=Release\ncmake --build build_release -j 8`,
      },
      {
        id: 'run-client',
        title: 'Run a gateway client example',
        subtitle: 'Best starting point: Python',
        description:
          'The cleanest reference flow today is `clipy/cli.py`: derive address, fetch nonce, compute the Seth-specific hash, sign, submit, then poll `/transaction_receipt`.',
        code: `cd SethPub\npip install requests ecdsa pycryptodome py-solc-x eth-abi eth-utils\npython clipy/cli.py`,
      },
      {
        id: 'app-layer',
        title: 'Then layer in explorer and app repos',
        subtitle: 'Blockscout, wallets, OpenClaw, ecosystem',
        description:
          'After the core chain path works, add `SethExplorer`, wallet repos, OpenClaw repos, and ecosystem contracts. That is where product behavior and treasury logic start to matter.',
        code: `# Suggested second-pass review order\nSethExplorer\nSeth_Wallet_Android\nSeth_Wallet\nSeth-AI-Pub\nSeth-x-Openclaw\nSeth-AI-ecosystem\nSeth`,
      },
    ],
    notesTitle: 'Immediate Expectations',
    notes: [
      'The public sample host used in repo examples is `35.197.170.240:23001`.',
      'The gateway exposed by `SethPub` is currently a custom HTTP form API, not a plain `eth_*` JSON-RPC root endpoint.',
      'The current internal product direction is now clearer: the OpenClaw cloud-server entry offer is centered around `29.99 USD/USDC`, with owner-confirmed starter spec `2C / 4G / 80G`.',
      'OpenClaw University has also been resolved at the business level as free / `0 SETH`.',
      'Treat the PDFs as product and operations context. Treat repo code, contracts, and checked-in constants as implementation truth.',
    ],
    tocTitle: 'On this page',
  },
  zh: {
    title: '开发者快速起步',
    badge: '新开发者建议路径',
    description:
      '如果你想从源码、合约和内部运营材料一起理解当前 Seth 栈，而不是只看单一市场口径，可以按这个路径走。',
    quickFacts: [
      { label: '主链入口', value: 'SethPub 网关' },
      { label: '当前产品规格', value: '2C / 4G / 80G' },
      { label: '大学方案', value: '免费 / 0 SETH' },
    ],
    assumptionsTitle: '当前产品口径',
    assumptions: [
      'OpenClaw 云服务器当前内部入口价格方向是 `29.99 USD/USDC`。',
      '老板确认的入门机器规格是 `2C / 4G / 80G`。',
      'OpenClaw University 已经定稿为免费 / `0 SETH`。',
      '真正的链上实现事实仍然要以仓库代码和合约为准，而不是只看 PDF。',
    ],
    sections: [
      {
        id: 'core-repos',
        title: '先拉核心仓库',
        subtitle: '文档、主链、浏览器',
        description:
          '优先从 `whitepaper`、`SethPub`、`SethExplorer` 开始。这三个仓库仍然定义了开发者最基础的公共能力面。',
        code: `git clone https://github.com/iPoW-Stack/whitepaper.git\ngit clone https://github.com/iPoW-Stack/SethPub.git\ngit clone https://github.com/iPoW-Stack/SethExplorer.git`,
      },
      {
        id: 'build-core',
        title: '先编 SethPub',
        subtitle: '先依赖，再二进制',
        description:
          '核心仓库的标准路径是先执行第三方依赖构建脚本，再用 CMake 生成并编译 C++ 目标。',
        code: `cd SethPub\nbash build_third.sh\ncmake -S . -B build_release -DCMAKE_POLICY_VERSION_MINIMUM=3.5 -DCMAKE_BUILD_TYPE=Release\ncmake --build build_release -j 8`,
      },
      {
        id: 'run-client',
        title: '跑一个网关客户端示例',
        subtitle: '建议从 Python 开始',
        description:
          '当前最完整、最直观的参考流程仍然在 `clipy/cli.py`：推导地址、查询 nonce、按 Seth 规则拼 hash、签名提交，然后轮询 `/transaction_receipt`。',
        code: `cd SethPub\npip install requests ecdsa pycryptodome py-solc-x eth-abi eth-utils\npython clipy/cli.py`,
      },
      {
        id: 'app-layer',
        title: '再叠加应用层仓库',
        subtitle: 'Blockscout、钱包、OpenClaw、生态合约',
        description:
          '当核心链路跑通以后，再去看 `SethExplorer`、钱包、OpenClaw 仓库和生态合约。真正的产品行为、入口套餐和国库规则主要在这一层体现。',
        code: `# 建议第二轮阅读顺序\nSethExplorer\nSeth_Wallet_Android\nSeth_Wallet\nSeth-AI-Pub\nSeth-x-Openclaw\nSeth-AI-ecosystem\nSeth`,
      },
    ],
    notesTitle: '一开始就要建立的预期',
    notes: [
      '仓库里反复出现的公开示例主机是 `35.197.170.240:23001`。',
      '`SethPub` 当前暴露的是自定义 HTTP 表单接口，不是直接可用的 `eth_*` JSON-RPC 根路径。',
      '当前入口产品口径已经更清楚了：OpenClaw 云服务器围绕 `29.99 USD/USDC`，基础规格固定为 `2C / 4G / 80G`。',
      'OpenClaw University 的最终业务方案也已经确定为免费 / `0 SETH`。',
      '对开发者来说，PDF 更适合被看成业务背景；真正要落地实现时，仍然应优先信任仓库里的代码、合约和常量定义。',
    ],
    tocTitle: '本页导航',
  },
} as const;

export function GetStarted({ lang }: { lang: 'en' | 'zh' }) {
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
        <span className="text-gray-400">{i18n[lang].sidebar.sections[1].title}</span>
        <ChevronRight className="w-4 h-4 shrink-0" />
        <span className="text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded">Get Started</span>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_18rem] gap-10 items-start">
        <div>
          <div className="rounded-3xl border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-bg-card)_90%,transparent),color-mix(in_oklab,var(--color-bg-main)_98%,transparent))] p-7 shadow-[0_24px_50px_rgba(15,23,42,0.10)] mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,168,85,0.18)] bg-[linear-gradient(90deg,rgba(0,168,85,0.12),rgba(36,196,255,0.08))] px-4 py-2 text-[13px] font-medium text-[var(--color-text-main)] mb-5">
              <Sparkles className="w-4 h-4 text-[var(--color-brand)]" />
              <span>{t.badge}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-5 tracking-tight text-[var(--color-text-main)]">
              {t.title}
            </h1>
            <p className="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed mb-6">{t.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {t.quickFacts.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-main)]/55 px-4 py-4">
                  <div className="text-[12px] uppercase tracking-[0.14em] text-gray-500 mb-2">{fact.label}</div>
                  <div className="text-[15px] leading-6 font-medium text-[var(--color-text-main)]">{fact.value}</div>
                </div>
              ))}
            </div>
          </div>

          <section className="docs-section mb-12" id="assumptions">
            <h2 className="text-2xl font-bold mb-5 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-3">
              {t.assumptionsTitle}
            </h2>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-[0_16px_36px_rgba(15,23,42,0.08)]">
              <ul className="space-y-3">
                {t.assumptions.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-brand)] shadow-[0_0_0_4px_rgba(0,168,85,0.12)] shrink-0"></span>
                    <span className="text-[15px] leading-7 text-[var(--color-text-muted)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="docs-section mb-12" id="workflow">
            <h2 className="text-2xl font-bold mb-5 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-3">
              {lang === 'en' ? 'Suggested workflow' : '建议工作流'}
            </h2>
            <div className="space-y-8">
              {t.sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="docs-section rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-bg-card)_88%,transparent),color-mix(in_oklab,var(--color-bg-main)_97%,transparent))] overflow-hidden shadow-[0_18px_36px_rgba(15,23,42,0.08)]"
                >
                  <div className="px-6 py-5 border-b border-[var(--color-border)] flex items-center gap-4 bg-[var(--color-bg-card)]/80">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-bg-main)] border border-[var(--color-border)] flex items-center justify-center shrink-0">
                      {index === 0 ? <GitBranch className="w-5 h-5 text-[var(--color-brand)]" /> :
                        index === 1 ? <Hammer className="w-5 h-5 text-[var(--color-brand-purple)]" /> :
                        index === 2 ? <Terminal className="w-5 h-5 text-[var(--color-brand)]" /> :
                        <SearchCode className="w-5 h-5 text-[var(--color-brand-purple)]" />}
                    </div>
                    <div>
                      <div className="text-[12px] uppercase tracking-[0.16em] text-gray-500 mb-1">Step {index + 1}</div>
                      <h3 className="text-[1.3rem] font-semibold text-[var(--color-text-main)]">{section.title}</h3>
                      <p className="text-[14px] text-gray-500 mt-1">{section.subtitle}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[15px] leading-7 text-[var(--color-text-muted)] mb-5">{section.description}</p>
                    <CodeBlock code={section.code} language="bash" />
                  </div>
                </section>
              ))}
            </div>
          </section>

          <section className="docs-section mb-12" id="expectations">
            <h2 className="text-2xl font-bold mb-5 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-3">
              {t.notesTitle}
            </h2>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-[0_16px_36px_rgba(15,23,42,0.08)]">
              <ul className="space-y-3">
                {t.notes.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-brand)] shrink-0"></span>
                    <span className="text-[15px] leading-7 text-[var(--color-text-muted)]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <aside className="hidden xl:block">
          <div className="sticky top-24 space-y-5">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-bg-card)_90%,transparent),color-mix(in_oklab,var(--color-bg-main)_98%,transparent))] p-5 shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
              <div className="text-[12px] uppercase tracking-[0.16em] text-gray-500 mb-3">{t.tocTitle}</div>
              <nav className="space-y-1.5">
                <a href="#assumptions" className="block rounded-xl px-3 py-2 text-[14px] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-main)] hover:text-[var(--color-text-main)] transition-colors">
                  {t.assumptionsTitle}
                </a>
                {t.sections.map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="block rounded-xl px-3 py-2 text-[14px] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-main)] hover:text-[var(--color-text-main)] transition-colors">
                    {section.title}
                  </a>
                ))}
                <a href="#expectations" className="block rounded-xl px-3 py-2 text-[14px] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-main)] hover:text-[var(--color-text-main)] transition-colors">
                  {t.notesTitle}
                </a>
              </nav>
            </div>
          </div>
        </aside>
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
