import { Home, ChevronRight, Edit3, Link2, ShieldAlert, TerminalSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { i18n } from '../i18n';
import { CodeBlock } from '../components/CodeBlock';

const copy = {
  en: {
    title: 'HTTP API Reference',
    description:
      'The current Seth gateway exposed by SethPub is a custom POST API implemented in `src/init/http_handler.cc` and mirrored in `api.json` plus the language client examples.',
    warning:
      'Do not assume a bare `eth_*` JSON-RPC root endpoint exists. A read-only probe of the sample public host `http://35.197.170.240:23001/` on March 17, 2026 returned `404`, while `/query_init` and `/transaction_receipt` responded successfully.',
    quickFacts: [
      { label: 'Transport', value: 'Custom HTTP POST' },
      { label: 'Default style', value: 'Form-style params' },
      { label: 'Canonical host', value: '35.197.170.240:23001' },
    ],
    notesTitle: 'Gateway Reality',
    notes: [
      'Most write and query paths use form-style POST parameters rather than JSON-RPC request envelopes.',
      '`SethExplorer` contains JSON-RPC probe scripts because explorer-side compatibility still needs explicit verification.',
      'The cleanest client reference remains `clipy/cli.py`, which uses `/query_account`, `/transaction`, `/query_contract`, and `/transaction_receipt` directly.',
    ],
    endpointsTitle: 'Endpoints',
    sdkTitle: 'Python Reference Flow',
    sdkDesc:
      'The Python client is the most useful source for end-to-end integration because it shows address derivation, nonce lookup, hash construction, signing, receipt polling, Solidity compilation, deployment, CREATE2 derivation, and contract query flow in one file.',
    sdkSteps: [
      'Derive address from `secp256k1` public key with `keccak(pubkey[1:])[-20:]`',
      'Fetch nonce from `/query_account`; if absent, treat it as `0` and use the next nonce',
      'Serialize `nonce`, `pubkey`, `to`, `amount`, `gas_limit`, `gas_price`, `step`, plus optional code/input/prepayment fields',
      'Sign the resulting Keccak hash and POST the fields to `/transaction`',
      'Poll `/transaction_receipt` until the status leaves the in-flight states',
    ],
    sdkExample: `client = SethClient("35.197.170.240", 23001)\ntx_hash = client.send_transaction_auto(\n    private_key_hex=MY_PRIVATE_KEY,\n    to_hex=TO_ADDR,\n    amount=5000,\n)\nclient.wait_for_receipt(tx_hash)`,
    tocTitle: 'On this page',
  },
  zh: {
    title: 'HTTP API 参考',
    description:
      '当前 Seth 网关以 SethPub 中 `src/init/http_handler.cc` 的自定义 POST 接口为准，`api.json` 和多语言客户端示例对它做了二次说明。',
    warning:
      '不要默认存在一个可直接调用的 `eth_*` JSON-RPC 根路径。对仓库示例主机 `http://35.197.170.240:23001/` 在 2026 年 3 月 17 日做的只读探测中，裸根路径返回 `404`，而 `/query_init` 与 `/transaction_receipt` 可以正常响应。',
    quickFacts: [
      { label: '传输层', value: '自定义 HTTP POST' },
      { label: '参数风格', value: '表单式参数' },
      { label: '示例主机', value: '35.197.170.240:23001' },
    ],
    notesTitle: '先明确网关现实',
    notes: [
      '大多数写入与查询接口都使用表单式 POST 参数，而不是标准 JSON-RPC 请求包。',
      '`SethExplorer` 之所以带有 JSON-RPC 探测脚本，正是因为浏览器兼容性目前还需要逐条确认。',
      '当前最值得信赖的客户端参考仍然是 `clipy/cli.py`，它直接调用 `/query_account`、`/transaction`、`/query_contract` 和 `/transaction_receipt`。',
    ],
    endpointsTitle: '接口列表',
    sdkTitle: 'Python 参考流程',
    sdkDesc:
      '如果想快速把一整套调用链跑通，Python 客户端是最值得先读的文件：它在一个脚本里把地址推导、nonce 查询、hash 组装、签名提交、回执轮询、Solidity 编译、合约部署、CREATE2 地址计算和合约查询都串起来了。',
    sdkSteps: [
      '从 `secp256k1` 公钥按 `keccak(pubkey[1:])[-20:]` 推导地址',
      '通过 `/query_account` 拉 nonce；如果不存在就按 `0` 处理，再用下一个 nonce',
      '按顺序序列化 `nonce`、`pubkey`、`to`、`amount`、`gas_limit`、`gas_price`、`step`，以及可选代码 / 输入 / 预付费字段',
      '对得到的 Keccak 哈希签名，并把字段 POST 到 `/transaction`',
      '持续轮询 `/transaction_receipt`，直到状态不再处于处理中',
    ],
    sdkExample: `client = SethClient("35.197.170.240", 23001)\ntx_hash = client.send_transaction_auto(\n    private_key_hex=MY_PRIVATE_KEY,\n    to_hex=TO_ADDR,\n    amount=5000,\n)\nclient.wait_for_receipt(tx_hash)`,
    tocTitle: '本页导航',
  },
} as const;

const endpoints = [
  {
    id: 'transaction',
    path: '/transaction',
    summary: {
      en: 'Submit a signed Seth transaction.',
      zh: '提交一笔已签名的 Seth 交易。',
    },
    params: {
      en: [
        '`nonce`, `pubkey`, `to`, `amount`, `gas_limit`, `gas_price`, `shard_id`',
        '`type` is the transaction step enum from `src/protos/pools.proto`',
        '`sign_r`, `sign_s`, `sign_v` are required',
        'Optional: `bytes_code`, `input`, `pepay`, `key`, `val`',
      ],
      zh: [
        '必填：`nonce`、`pubkey`、`to`、`amount`、`gas_limit`、`gas_price`、`shard_id`',
        '`type` 对应 `src/protos/pools.proto` 里的 StepType 枚举',
        '签名字段 `sign_r`、`sign_s`、`sign_v` 必填',
        '可选字段：`bytes_code`、`input`、`pepay`、`key`、`val`',
      ],
    },
    example: `curl -X POST http://35.197.170.240:23001/transaction \\\n  -d "nonce=1" \\\n  -d "pubkey=<full_uncompressed_pubkey_hex>" \\\n  -d "to=<20_byte_address_hex>" \\\n  -d "amount=0" \\\n  -d "gas_limit=5000000" \\\n  -d "gas_price=1" \\\n  -d "shard_id=0" \\\n  -d "type=0" \\\n  -d "sign_r=<r>" \\\n  -d "sign_s=<s>" \\\n  -d "sign_v=<v>"`,
  },
  {
    id: 'receipt',
    path: '/transaction_receipt',
    summary: {
      en: 'Poll transaction status by `tx_hash`.',
      zh: '按 `tx_hash` 轮询交易状态。',
    },
    params: {
      en: [
        '`tx_hash` is required',
        'Returns JSON with numeric `status` and string `msg`',
        'Used directly by `clipy/cli.py` in `wait_for_receipt()`',
      ],
      zh: [
        '必须提供 `tx_hash`',
        '返回 JSON，其中 `status` 为数值，`msg` 为字符串',
        '`clipy/cli.py` 的 `wait_for_receipt()` 直接使用了这个接口',
      ],
    },
    example: `curl -X POST http://35.197.170.240:23001/transaction_receipt \\\n  -d "tx_hash=<transaction_hash_hex>"`,
  },
  {
    id: 'account',
    path: '/query_account',
    summary: {
      en: 'Fetch account state and current nonce.',
      zh: '查询账户状态和当前 nonce。',
    },
    params: {
      en: [
        '`address` is required and must be hex without the `0x` prefix in repo examples',
        'If the address is missing from DB and cache, the gateway returns plain text rather than JSON',
      ],
      zh: [
        '必填参数是 `address`，仓库示例里一般传不带 `0x` 前缀的 hex',
        '如果地址在 DB 和缓存里都找不到，网关返回的是纯文本错误，而不是 JSON',
      ],
    },
    example: `curl -X POST http://35.197.170.240:23001/query_account \\\n  -d "address=<20_byte_address_hex>"`,
  },
  {
    id: 'contract',
    path: '/query_contract & /abi_query_contract',
    summary: {
      en: 'Execute a read-only contract call through the Seth gateway.',
      zh: '通过 Seth 网关执行只读合约调用。',
    },
    params: {
      en: [
        'Both expect `address`, `from`, and `input`',
        'Source code checks for a caller-specific prepayment record before executing the call',
        '`/query_contract` attempts to decode ABI-style string output, while `/abi_query_contract` returns hex output directly',
      ],
      zh: [
        '两者都要求 `address`、`from`、`input`',
        '源码会先检查调用者对应的合约预付费记录是否存在',
        '`/query_contract` 会尝试按 ABI 风格解码字符串输出，而 `/abi_query_contract` 直接返回 hex 输出',
      ],
    },
    example: `curl -X POST http://35.197.170.240:23001/abi_query_contract \\\n  -d "address=<contract_hex>" \\\n  -d "from=<caller_hex>" \\\n  -d "input=<calldata_hex>"`,
  },
  {
    id: 'validation',
    path: '/accounts_valid & /prepayment_valid',
    summary: {
      en: 'Batch-check accounts or contract prepayments against a minimum balance.',
      zh: '批量检查账户余额或合约预付费余额是否达到阈值。',
    },
    params: {
      en: [
        '`accounts_valid` takes `balance` and underscore-separated `addrs`',
        '`prepayment_valid` takes `balance`, `contract`, and underscore-separated `addrs`',
      ],
      zh: [
        '`accounts_valid` 接收 `balance` 与下划线分隔的 `addrs`',
        '`prepayment_valid` 接收 `balance`、`contract` 与下划线分隔的 `addrs`',
      ],
    },
    example: `curl -X POST http://35.197.170.240:23001/accounts_valid \\\n  -d "balance=1000" \\\n  -d "addrs=<addr1>_<addr2>_<addr3>"`,
  },
  {
    id: 'utility',
    path: '/query_init & /get_block_with_gid',
    summary: {
      en: 'Utility and diagnostic endpoints.',
      zh: '偏工具型 / 诊断型接口。',
    },
    params: {
      en: [
        '`/query_init` currently just returns plain text `ok` from the source code',
        '`/get_block_with_gid` currently expects `addr` and `nonce`; its implementation is present but looks more diagnostic than stable',
      ],
      zh: [
        '从源码看，`/query_init` 当前只是简单返回纯文本 `ok`',
        '`/get_block_with_gid` 需要 `addr` 和 `nonce`，但实现更像诊断代码，不宜当成稳定接口依赖',
      ],
    },
    example: `curl -X POST http://35.197.170.240:23001/query_init`,
  },
];

export function ApiReference({ lang }: { lang: 'en' | 'zh' }) {
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
        <span className="text-gray-400">{i18n[lang].sidebar.sections[3].title}</span>
        <ChevronRight className="w-4 h-4 shrink-0" />
        <span className="text-[var(--color-brand)] bg-[var(--color-bg-card)] px-2 py-0.5 rounded">HTTP API Reference</span>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_18rem] gap-10 items-start">
        <div>
          <div className="rounded-3xl border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-bg-card)_90%,transparent),color-mix(in_oklab,var(--color-bg-main)_98%,transparent))] p-7 shadow-[0_24px_50px_rgba(15,23,42,0.10)] mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,168,85,0.18)] bg-[linear-gradient(90deg,rgba(0,168,85,0.12),rgba(36,196,255,0.08))] px-4 py-2 text-[13px] font-medium text-[var(--color-text-main)] mb-5">
              <Link2 className="w-4 h-4 text-[var(--color-brand)]" />
              <span>{lang === 'en' ? 'Gateway interface' : '网关接口'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-5 tracking-tight text-[var(--color-text-main)]">
              {t.title}
            </h1>
            <p className="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed mb-6">{t.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {t.quickFacts.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-main)]/55 px-4 py-4">
                  <div className="text-[12px] uppercase tracking-[0.14em] text-gray-500 mb-2">{fact.label}</div>
                  <div className="text-[15px] leading-6 font-medium text-[var(--color-text-main)]">{fact.value}</div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 px-5 py-4 text-yellow-700 dark:text-yellow-400">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 mt-0.5 shrink-0" />
                <p className="text-[15px] leading-7">{t.warning}</p>
              </div>
            </div>
          </div>

          <section id="gateway-reality" className="docs-section mb-12">
            <h2 className="text-2xl font-bold mb-5 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-3">
              {t.notesTitle}
            </h2>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-[0_16px_36px_rgba(15,23,42,0.08)]">
              <ul className="space-y-3">
                {t.notes.map((note) => (
                  <li key={note} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-brand)] shadow-[0_0_0_4px_rgba(0,168,85,0.12)] shrink-0"></span>
                    <span className="text-[15px] leading-7 text-[var(--color-text-muted)]">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="endpoints" className="docs-section mb-12">
            <h2 className="text-2xl font-bold mb-5 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-3">
              {t.endpointsTitle}
            </h2>
            <div className="space-y-8">
              {endpoints.map((endpoint) => (
                <section key={endpoint.id} id={endpoint.id} className="docs-section rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-bg-card)_88%,transparent),color-mix(in_oklab,var(--color-bg-main)_97%,transparent))] overflow-hidden shadow-[0_18px_36px_rgba(15,23,42,0.08)]">
                  <div className="px-6 py-5 border-b border-[var(--color-border)] flex items-center justify-between gap-4 bg-[var(--color-bg-card)]/80">
                    <div>
                      <div className="text-[12px] uppercase tracking-[0.16em] text-gray-500 mb-1">{lang === 'en' ? 'Endpoint' : '接口'}</div>
                      <h3 className="text-[1.3rem] font-semibold text-[var(--color-text-main)]">{endpoint.path}</h3>
                    </div>
                    <span className="bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-3 py-1.5 rounded-full text-[12px] font-mono font-semibold">
                      POST
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-[15px] leading-7 text-[var(--color-text-muted)] mb-5">
                      {endpoint.summary[lang]}
                    </p>
                    <ul className="space-y-3 mb-5">
                      {endpoint.params[lang].map((param) => (
                        <li key={param} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-brand)] shrink-0"></span>
                          <span className="text-[15px] leading-7 text-[var(--color-text-muted)]">{param}</span>
                        </li>
                      ))}
                    </ul>
                    <CodeBlock code={endpoint.example} language="bash" />
                  </div>
                </section>
              ))}
            </div>
          </section>

          <section id="python-flow" className="docs-section mb-12">
            <h2 className="text-2xl font-bold mb-5 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-3">
              {t.sdkTitle}
            </h2>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-[0_16px_36px_rgba(15,23,42,0.08)]">
              <p className="text-[15px] leading-7 text-[var(--color-text-muted)] mb-5">{t.sdkDesc}</p>
              <ul className="space-y-3 mb-6">
                {t.sdkSteps.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-brand-purple)] shrink-0"></span>
                    <span className="text-[15px] leading-7 text-[var(--color-text-muted)]">{step}</span>
                  </li>
                ))}
              </ul>
              <CodeBlock code={t.sdkExample} language="python" />
            </div>
          </section>
        </div>

        <aside className="hidden xl:block">
          <div className="sticky top-24 space-y-5">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-bg-card)_90%,transparent),color-mix(in_oklab,var(--color-bg-main)_98%,transparent))] p-5 shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
              <div className="text-[12px] uppercase tracking-[0.16em] text-gray-500 mb-3">{t.tocTitle}</div>
              <nav className="space-y-1.5">
                <a href="#gateway-reality" className="block rounded-xl px-3 py-2 text-[14px] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-main)] hover:text-[var(--color-text-main)] transition-colors">
                  {t.notesTitle}
                </a>
                <a href="#endpoints" className="block rounded-xl px-3 py-2 text-[14px] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-main)] hover:text-[var(--color-text-main)] transition-colors">
                  {t.endpointsTitle}
                </a>
                {endpoints.map((endpoint) => (
                  <a key={endpoint.id} href={`#${endpoint.id}`} className="block rounded-xl px-3 py-2 text-[14px] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-main)] hover:text-[var(--color-text-main)] transition-colors">
                    {endpoint.path}
                  </a>
                ))}
                <a href="#python-flow" className="block rounded-xl px-3 py-2 text-[14px] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-main)] hover:text-[var(--color-text-main)] transition-colors">
                  {t.sdkTitle}
                </a>
              </nav>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-2 mb-3">
                <TerminalSquare className="w-4 h-4 text-[var(--color-brand)]" />
                <span className="text-[12px] uppercase tracking-[0.16em] text-gray-500">
                  {lang === 'en' ? 'Implementation note' : '实现提示'}
                </span>
              </div>
              <p className="text-[14px] leading-6 text-[var(--color-text-muted)]">
                {lang === 'en'
                  ? 'Treat this page as the most stable integration guide for Seth today: gateway-first, form-style, and source-backed by client examples.'
                  : '把这一页视为当前 Seth 最稳定的集成指南：以网关为先、以表单式参数为主，并由客户端示例和源码共同支撑。'}
              </p>
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
