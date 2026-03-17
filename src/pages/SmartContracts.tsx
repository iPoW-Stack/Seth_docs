import { Home, ChevronRight, Edit3, Code } from 'lucide-react';
import { motion } from 'motion/react';
import { i18n } from '../i18n';
import { CodeBlock } from '../components/CodeBlock';

const copy = {
  en: {
    title: 'Smart Contracts',
    description: 'The smart-contract picture now spans both SethPub and the private ecosystem contracts repo: SethPub owns execution and gateway behavior, while Seth-AI-ecosystem adds the concrete bridge, treasury, pricing-pool, and Solana program contracts.',
    stackTitle: 'Execution Stack',
    stackLead: 'What the repos show today:',
    stackItems: [
      '`src/zjcvm` is the contract execution layer and integrates with `evmone` / `evmc` via the third-party build script',
      '`clipy/cli.py` compiles Solidity using `solc 0.8.30` with `evm_version="shanghai"`',
      '`src/protos/pools.proto` defines `kContractCreate = 6`, `kContractGasPrepayment = 7`, and `kContractExcute = 8`',
      'The language clients all serialize the same Seth transaction payload instead of sending Ethereum RLP transactions',
      '`Seth-AI-ecosystem` adds concrete application contracts: `PoolB.sol`, `sUSDC.sol`, `SethBridge.sol`, `Treasury.sol`, plus Solana Anchor programs and a relayer',
    ],
    flowTitle: 'Reference Lifecycle',
    flowItems: [
      'Compile Solidity source to ABI and bytecode',
      'Deploy with step `6` and `bytes_code`, usually alongside a non-zero prepayment value',
      'Top up contract-call prepayment with step `7` when needed',
      'Execute with step `8` and hex calldata in `input`',
      'Read state with `/query_contract` or `/abi_query_contract`',
    ],
    caveatTitle: 'Important Caveat',
    caveat: 'The current read-call handlers in `src/init/http_handler.cc` check for a caller-specific prepayment record before executing the contract query. That means the Seth gateway should not be documented as a drop-in `eth_call` equivalent without qualification.',
    exampleTitle: 'Python Reference Snippet',
    example: `interface = compile_contract(source_code)\nconstructor_args = eth_abi.encode(['string'], ['Hello Seth!']).hex()\ndeploy_code = interface['bin'] + constructor_args\ncontract_addr = calc_create2_address(client.get_address(MY_PK), '00', deploy_code)\n\nclient.send_transaction_auto(\n    MY_PK,\n    contract_addr,\n    step=6,\n    contract_code=deploy_code,\n    prepayment=10000000,\n)\n\nselector_set = get_selector('setMessage(string)')\ninput_set = selector_set + eth_abi.encode(['string'], ['Updated']).hex()\nclient.send_transaction_auto(MY_PK, contract_addr, step=8, input_hex=input_set)`,
  },
  zh: {
    title: '智能合约',
    description: '从公开仓库能确认下来的合约能力主要有三块：SethPub 自带一套 EVM 执行路径，协议里定义了部署 / 预付费 / 执行这几个 step，客户端示例已经把合约编译、部署和调用跑通了。',
    stackTitle: '执行栈',
    stackLead: '从仓库可以明确看到：',
    stackItems: [
      '`src/zjcvm` 是合约执行层，并通过第三方构建脚本接入 `evmone` / `evmc`',
      '`clipy/cli.py` 使用 `solc 0.8.30` 且设置 `evm_version="shanghai"` 来编译 Solidity',
      '`src/protos/pools.proto` 定义了 `kContractCreate = 6`、`kContractGasPrepayment = 7`、`kContractExcute = 8`',
      '多语言客户端都在按 Seth 自己的交易结构序列化字段，而不是直接发送以太坊 RLP 交易',
    ],
    flowTitle: '参考生命周期',
    flowItems: [
      '先把 Solidity 源码编译成 ABI 和字节码',
      '用 step `6` 和 `bytes_code` 进行部署，通常同时给出非零预付费',
      '如果需要，使用 step `7` 为后续合约调用补充预付费',
      '执行时使用 step `8`，并把 calldata hex 放进 `input`',
      '读状态时调用 `/query_contract` 或 `/abi_query_contract`',
    ],
    caveatTitle: '一个非常重要的限制',
    caveat: '`src/init/http_handler.cc` 中当前的只读合约查询逻辑，会先检查调用者对应的合约预付费记录。因此不能不加说明地把 Seth 网关描述成一个完全等价的 `eth_call` 替代品。',
    exampleTitle: 'Python 参考片段',
    example: `interface = compile_contract(source_code)\nconstructor_args = eth_abi.encode(['string'], ['Hello Seth!']).hex()\ndeploy_code = interface['bin'] + constructor_args\ncontract_addr = calc_create2_address(client.get_address(MY_PK), '00', deploy_code)\n\nclient.send_transaction_auto(\n    MY_PK,\n    contract_addr,\n    step=6,\n    contract_code=deploy_code,\n    prepayment=10000000,\n)\n\nselector_set = get_selector('setMessage(string)')\ninput_set = selector_set + eth_abi.encode(['string'], ['Updated']).hex()\nclient.send_transaction_auto(MY_PK, contract_addr, step=8, input_hex=input_set)`,
  },
} as const;

export function SmartContracts({ lang }: { lang: 'en' | 'zh' }) {
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
        <span className="text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded">Smart Contracts</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-[var(--color-text-main)]">
        {t.title}
      </h1>

      <div className="space-y-6 text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed mb-12">
        <p>{t.description}</p>
      </div>

      <div className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
        <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2 flex items-center gap-2">
          <Code className="w-6 h-6 text-[var(--color-brand)]" />
          {t.stackTitle}
        </h2>
        <p className="text-[var(--color-text-muted)] mb-4">{t.stackLead}</p>
        <ul className="space-y-3">
          {t.stackItems.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] mt-2 shrink-0"></div>
              <span className="text-sm text-[var(--color-text-muted)]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
        <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2 flex items-center gap-2">
          <Code className="w-6 h-6 text-[var(--color-brand-purple)]" />
          {t.flowTitle}
        </h2>
        <ul className="space-y-3">
          {t.flowItems.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-purple)] mt-2 shrink-0"></div>
              <span className="text-sm text-[var(--color-text-muted)]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 p-5 rounded-xl border border-yellow-500/20 mb-12">
        <h3 className="text-lg font-semibold mb-2">{t.caveatTitle}</h3>
        <p className="text-sm leading-relaxed">{t.caveat}</p>
      </div>

      <div className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
        <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2">
          {t.exampleTitle}
        </h2>
        <CodeBlock code={t.example} language="python" />
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
