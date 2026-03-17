import { Home, ChevronRight, Edit3, Code, FolderGit2, Hammer, SearchCode, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { i18n } from '../i18n';
import { CodeBlock } from '../components/CodeBlock';

const copy = {
  en: {
    title: 'Build & Integration Guide',
    badge: 'How the stack fits together',
    description:
      'This page ties together the concrete build, client, explorer, and adjacent application artifacts surfaced across the currently reviewed iPoW-Stack repositories.',
    summary: [
      { label: 'Core build', value: 'C++20 + CMake + static deps' },
      { label: 'Gateway style', value: 'Custom HTTP form API' },
      { label: 'App layer', value: 'Wallets, OpenClaw, x402' },
    ],
    sections: [
      {
        id: 'repos',
        title: 'Repository responsibilities',
        subtitle: 'Know where to look first',
        body: [
          '`whitepaper` owns the docs site, while `SethExplorer` owns the Blockscout-derived explorer and indexer path.',
          '`SethPub` owns the node, gateway, deployment scripts, contract execution path, and language client examples.',
          'Wallet clients, OpenClaw flows, ecosystem contracts, and x402 mint services are split across `Seth_Wallet*`, `Seth-AI-*`, `Seth-x-Openclaw`, and `Seth`.',
        ],
      },
      {
        id: 'native-build',
        title: 'Native build path',
        subtitle: 'Dependencies before binaries',
        body: [
          'The repo README and scripts agree on a two-stage flow: build third-party dependencies first, then compile release binaries.',
          'README lists GCC/G++ 13.0+ and CMake 3.25.1+.',
          '`CMakeLists.txt` uses C++20 and produces `seth`, `txcli`, `pkicli`, `blsmain`, `hotstuff`, and several network test binaries.',
          '`build_third.sh` pulls and builds evmone, evmc, libsodium, RocksDB, secp256k1, protobuf, libbls, gmssl, openssl, and many other static dependencies.',
        ],
        code: `cd SethPub\nbash build_third.sh\ncmake -S . -B build_release -DCMAKE_POLICY_VERSION_MINIMUM=3.5 -DCMAKE_BUILD_TYPE=Release\ncmake --build build_release -j 8`,
      },
      {
        id: 'sdk-surface',
        title: 'Client SDK surface',
        subtitle: 'Multiple languages, one payload model',
        body: [
          'SethPub includes reference clients in Python, Go, Java, Kotlin, Node.js, and C++.',
          'They all implement the same flow: derive address from secp256k1 key, query nonce, serialize Seth transaction fields in little-endian order, sign, submit, then optionally poll for receipt.',
          '`clipy/cli.py` is the richest reference because it also shows contract compilation and CREATE2 address calculation.',
        ],
      },
      {
        id: 'explorer-path',
        title: 'Explorer integration path',
        subtitle: 'Blockscout-derived but still adapting',
        body: [
          'SethExplorer is the source of truth for explorer-side setup.',
          'Its Seth-specific files show the intended direction, but also make it clear this path is still distinct from the custom SethPub gateway.',
          '`docker-compose/envs/local-seth.env` points to `http://35.197.170.240:23001` and sets `ETHEREUM_JSONRPC_VARIANT=geth`.',
          '`scripts/run_indexer_local.ps1` bootstraps a local Postgres-backed Blockscout indexer against that Seth endpoint.',
        ],
        code: `cd SethExplorer\n$env:ETHEREUM_JSONRPC_HTTP_URL = "http://35.197.170.240:23001"\n$env:ETHEREUM_JSONRPC_VARIANT = "geth"\n$env:DISABLE_MARKET = "true"\nmix phx.server`,
      },
      {
        id: 'application-layer',
        title: 'Application layer build-out',
        subtitle: 'Where product behavior starts',
        body: [
          '`Seth_Wallet_Android` and `Seth_Wallet` add Seth-specific wallet and DApp flows.',
          '`Seth-AI-Pub` adds agent-hub tooling and local skill execution services.',
          '`Seth-x-Openclaw` adds cloud-mining and university-facing UI, with backend branches for control-plane logic.',
          '`Seth-AI-ecosystem` and `Seth` add concrete treasury, bridge, relayer, and x402 mint services.',
        ],
      },
    ],
    tocTitle: 'On this page',
  },
  zh: {
    title: '构建与集成指南',
    badge: '理解整套栈如何拼起来',
    description:
      '这一页把当前已审阅的 iPoW-Stack 仓库里真正存在的构建、客户端、浏览器和应用层资产串起来，帮助你快速建立全局图。',
    summary: [
      { label: '核心构建', value: 'C++20 + CMake + 静态依赖' },
      { label: '网关风格', value: '自定义 HTTP 表单接口' },
      { label: '应用层', value: '钱包、OpenClaw、x402' },
    ],
    sections: [
      {
        id: 'repos',
        title: '仓库职责划分',
        subtitle: '先知道该去哪里看',
        body: [
          '`whitepaper` 负责文档站，`SethExplorer` 负责基于 Blockscout 的浏览器 / 索引器路径。',
          '`SethPub` 负责节点、网关、部署脚本、合约执行链路，以及多语言客户端示例。',
          '钱包、OpenClaw、生态合约和 x402 mint 服务则分散在 `Seth_Wallet*`、`Seth-AI-*`、`Seth-x-Openclaw` 和 `Seth` 中。',
        ],
      },
      {
        id: 'native-build',
        title: '原生构建路径',
        subtitle: '先依赖，再二进制',
        body: [
          '从 README 和脚本来看，标准流程非常明确：先构建第三方依赖，再编译 release 二进制。',
          'README 写明要求 GCC/G++ 13.0+ 与 CMake 3.25.1+。',
          '`CMakeLists.txt` 使用 C++20，并产出 `seth`、`txcli`、`pkicli`、`blsmain`、`hotstuff` 等二进制。',
          '`build_third.sh` 会拉起并编译 evmone、evmc、libsodium、RocksDB、secp256k1、protobuf、libbls、gmssl、openssl 等大量静态依赖。',
        ],
        code: `cd SethPub\nbash build_third.sh\ncmake -S . -B build_release -DCMAKE_POLICY_VERSION_MINIMUM=3.5 -DCMAKE_BUILD_TYPE=Release\ncmake --build build_release -j 8`,
      },
      {
        id: 'sdk-surface',
        title: '客户端 SDK 轮廓',
        subtitle: '多语言，但同一套交易模型',
        body: [
          'SethPub 内置了 Python、Go、Java、Kotlin、Node.js、C++ 多语言客户端参考实现。',
          '它们都在做同一条链路：从 secp256k1 私钥推导地址、查询 nonce、按 Seth 规则做 little-endian 序列化、签名提交、再按需轮询回执。',
          '`clipy/cli.py` 是最完整的参考实现，因为它还把合约编译和 CREATE2 地址计算串起来了。',
        ],
      },
      {
        id: 'explorer-path',
        title: '浏览器接入路径',
        subtitle: '基于 Blockscout，但仍在适配',
        body: [
          'SethExplorer 是 explorer 侧的事实来源。',
          '它的 Seth 专用文件说明了接入方向，但也同时说明这条链路仍然不同于 SethPub 的自定义网关。',
          '`docker-compose/envs/local-seth.env` 指向 `http://35.197.170.240:23001`，并设置 `ETHEREUM_JSONRPC_VARIANT=geth`。',
          '`scripts/run_indexer_local.ps1` 可以在本地 Postgres 环境下拉起 Blockscout 索引器。',
        ],
        code: `cd SethExplorer\n$env:ETHEREUM_JSONRPC_HTTP_URL = "http://35.197.170.240:23001"\n$env:ETHEREUM_JSONRPC_VARIANT = "geth"\n$env:DISABLE_MARKET = "true"\nmix phx.server`,
      },
      {
        id: 'application-layer',
        title: '应用层建设',
        subtitle: '产品行为主要在这里出现',
        body: [
          '`Seth_Wallet_Android` 和 `Seth_Wallet` 补上了 Seth 专用钱包和 DApp 客户端能力。',
          '`Seth-AI-Pub` 增加了 agent hub 和本地 skill 执行服务。',
          '`Seth-x-Openclaw` 增加了云挖矿和 university UI，并通过分支推进 control-plane 后端。',
          '`Seth-AI-ecosystem` 与 `Seth` 则补上了国库、桥、relayer 与 x402 mint 服务。',
        ],
      },
    ],
    tocTitle: '本页导航',
  },
} as const;

export function Build({ lang }: { lang: 'en' | 'zh' }) {
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
        <span className="text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded">Build Guide</span>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_18rem] gap-10 items-start">
        <div>
          <div className="rounded-3xl border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-bg-card)_90%,transparent),color-mix(in_oklab,var(--color-bg-main)_98%,transparent))] p-7 shadow-[0_24px_50px_rgba(15,23,42,0.10)] mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,168,85,0.18)] bg-[linear-gradient(90deg,rgba(0,168,85,0.12),rgba(36,196,255,0.08))] px-4 py-2 text-[13px] font-medium text-[var(--color-text-main)] mb-5">
              <Layers className="w-4 h-4 text-[var(--color-brand)]" />
              <span>{t.badge}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-5 tracking-tight text-[var(--color-text-main)]">
              {t.title}
            </h1>
            <p className="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed mb-6">{t.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {t.summary.map((item) => (
                <div key={item.label} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-main)]/55 px-4 py-4">
                  <div className="text-[12px] uppercase tracking-[0.14em] text-gray-500 mb-2">{item.label}</div>
                  <div className="text-[15px] leading-6 font-medium text-[var(--color-text-main)]">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {t.sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="docs-section rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-bg-card)_88%,transparent),color-mix(in_oklab,var(--color-bg-main)_97%,transparent))] overflow-hidden shadow-[0_18px_36px_rgba(15,23,42,0.08)]"
              >
                <div className="px-6 py-5 border-b border-[var(--color-border)] flex items-center gap-4 bg-[var(--color-bg-card)]/80">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-bg-main)] border border-[var(--color-border)] flex items-center justify-center shrink-0">
                    {index === 0 ? <FolderGit2 className="w-5 h-5 text-[var(--color-brand)]" /> :
                      index === 1 ? <Hammer className="w-5 h-5 text-[var(--color-brand-purple)]" /> :
                      index === 2 ? <Code className="w-5 h-5 text-[var(--color-brand)]" /> :
                      index === 3 ? <SearchCode className="w-5 h-5 text-[var(--color-brand-purple)]" /> :
                      <Layers className="w-5 h-5 text-[var(--color-brand)]" />}
                  </div>
                  <div>
                    <div className="text-[12px] uppercase tracking-[0.16em] text-gray-500 mb-1">{lang === 'en' ? 'Section' : '章节'}</div>
                    <h2 className="text-[1.3rem] font-semibold text-[var(--color-text-main)]">{section.title}</h2>
                    <p className="text-[14px] text-gray-500 mt-1">{section.subtitle}</p>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {section.body.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-brand)] shrink-0"></span>
                        <span className="text-[15px] leading-7 text-[var(--color-text-muted)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {'code' in section && section.code ? (
                    <div className="mt-5">
                      <CodeBlock code={section.code} language="bash" />
                    </div>
                  ) : null}
                </div>
              </section>
            ))}
          </div>
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
