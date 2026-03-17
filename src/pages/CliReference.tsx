import { Home, ChevronRight, Edit3 } from 'lucide-react';
import { motion } from 'motion/react';
import { i18n } from '../i18n';
import { CodeBlock } from '../components/CodeBlock';

const copy = {
  en: {
    title: 'CLI Reference',
    description: 'These commands and scripts are derived from SethPub build targets and operational shell scripts, not from external marketing docs.',
    commands: [
      {
        name: 'seth',
        description: 'Main node binary produced by `CMakeLists.txt` from `src/main/main.cc`.',
        usage: './seth',
      },
      {
        name: 'txcli',
        description: 'Transaction generator / load client built from `src/main/tx_cli.cc`.',
        usage: 'cd cbuild_Release && make txcli\n./txcli',
      },
      {
        name: 'pkicli',
        description: 'PKI helper binary produced by the native build.',
        usage: './pkicli',
      },
      {
        name: 'blsmain',
        description: 'BLS and DKG test / utility entrypoint.',
        usage: './blsmain',
      },
      {
        name: 'hotstuff',
        description: 'Consensus test harness for the HotStuff-related code path.',
        usage: './hotstuff',
      },
      {
        name: 'build_third.sh',
        description: 'Build third-party dependencies required by SethPub.',
        usage: 'bash build_third.sh',
      },
      {
        name: 'simple_dep.sh',
        description: 'Spin up a local multi-node devnet from the checked-in templates.',
        usage: 'bash simple_dep.sh 4',
      },
      {
        name: 'simple_remote.sh',
        description: 'Create and start a distributed testnet across multiple machines.',
        usage: 'bash simple_remote.sh <each_machine_node_count> <ip_list>',
      },
      {
        name: 'start_miner.sh',
        description: 'Package and install a mining node service using a raw or generated private key.',
        usage: 'bash start_miner.sh <RAW_HEX_PRIVATE_KEY>',
      },
      {
        name: 'run_indexer_local.ps1',
        description: 'SethExplorer helper script for starting a local Blockscout indexer against Seth.',
        usage: '.\\scripts\\run_indexer_local.ps1',
      },
    ],
  },
  zh: {
    title: 'CLI 参考',
    description: '这里列出的命令和脚本都来自 SethPub 的构建目标与运维脚本，以及 SethExplorer 的本地辅助脚本，不再引用外部宣传文档。',
    commands: [
      {
        name: 'seth',
        description: '主节点二进制，定义在 `CMakeLists.txt`，入口是 `src/main/main.cc`。',
        usage: './seth',
      },
      {
        name: 'txcli',
        description: '交易生成 / 压测客户端，来自 `src/main/tx_cli.cc`。',
        usage: 'cd cbuild_Release && make txcli\n./txcli',
      },
      {
        name: 'pkicli',
        description: '原生构建产物中的 PKI 工具入口。',
        usage: './pkicli',
      },
      {
        name: 'blsmain',
        description: 'BLS / DKG 测试与工具入口。',
        usage: './blsmain',
      },
      {
        name: 'hotstuff',
        description: 'HotStuff 相关共识路径的测试入口。',
        usage: './hotstuff',
      },
      {
        name: 'build_third.sh',
        description: '构建 SethPub 依赖的第三方静态库。',
        usage: 'bash build_third.sh',
      },
      {
        name: 'simple_dep.sh',
        description: '基于仓库模板快速拉起本地多节点开发网。',
        usage: 'bash simple_dep.sh 4',
      },
      {
        name: 'simple_remote.sh',
        description: '在多台机器上生成并启动分布式测试网。',
        usage: 'bash simple_remote.sh <each_machine_node_count> <ip_list>',
      },
      {
        name: 'start_miner.sh',
        description: '用原始私钥或自动生成私钥打包并安装矿工节点服务。',
        usage: 'bash start_miner.sh <RAW_HEX_PRIVATE_KEY>',
      },
      {
        name: 'run_indexer_local.ps1',
        description: 'SethExplorer 中用于本地启动 Blockscout 索引器的脚本。',
        usage: '.\\scripts\\run_indexer_local.ps1',
      },
    ],
  },
} as const;

export function CliReference({ lang }: { lang: 'en' | 'zh' }) {
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
        <span className="text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded">CLI Reference</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-[var(--color-text-main)]">
        {t.title}
      </h1>

      <div className="space-y-6 text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed mb-12">
        <p>{t.description}</p>
      </div>

      <div className="space-y-8">
        {t.commands.map((cmd) => (
          <motion.div key={cmd.name} whileHover={{ y: -2 }} className="border border-[var(--color-border)] rounded-xl overflow-hidden bg-[var(--color-bg-sidebar)] shadow-sm">
            <div className="bg-[var(--color-bg-card)] px-6 py-4 border-b border-[var(--color-border)] flex items-center justify-between">
              <h3 className="text-xl font-semibold text-[var(--color-text-main)] font-mono">{cmd.name}</h3>
            </div>
            <div className="p-6">
              <p className="text-[var(--color-text-muted)] mb-6">{cmd.description}</p>
              <CodeBlock code={cmd.usage} language={cmd.name.endsWith('.ps1') ? 'powershell' : 'bash'} />
            </div>
          </motion.div>
        ))}
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
