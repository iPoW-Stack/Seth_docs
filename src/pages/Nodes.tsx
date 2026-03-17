import { Home, ChevronRight, Edit3, Shield, Cpu, Database, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import { i18n } from '../i18n';
import { CodeBlock } from '../components/CodeBlock';

const copy = {
  en: {
    title: 'Nodes & Operations',
    description: 'The public repos document node operation mostly through shell scripts and config templates. This page summarizes the pieces that are actually checked in.',
    reqTitle: 'Build Environment',
    reqDesc: 'The published README for SethPub requires GCC/G++ 13.0+ and CMake 3.25.1+.',
    reqItems: [
      'Linux-focused build flow with `bash build_third.sh` and CMake release builds',
      '`build_third.sh` installs system packages and builds a large static dependency stack',
      'The project is optimized for release builds, LTO, and native CPU instruction sets in `CMakeLists.txt`',
    ],
    localTitle: 'Local Devnet',
    localDesc: 'For a quick local multi-node setup, the repo points developers to `simple_dep.sh` after dependencies are ready.',
    localCode: `cd SethPub\nbash build_third.sh\nbash simple_dep.sh 4`,
    localNote: 'The script copies `nodes_local`, fills template configs, assigns per-node HTTP and local TCP ports, links the compiled `seth` binary, and starts multiple local shard nodes.',
    remoteTitle: 'Remote / Multi-Machine Deployment',
    remoteDesc: 'For larger testnets the repo uses generated YAML templates and remote orchestration scripts.',
    remoteCode: `cd SethPub\nbash build_third.sh\nbash simple_remote.sh <each_machine_node_count> <ip_list>`,
    remoteItems: [
      '`nodes_confs_local/*.yml` and `nodes_confs_remote/*.yml` contain example port layouts',
      'Examples show `http_port` series such as `8201`, `8301`, and `7301`, while node local TCP ports commonly follow `13001`, `23001`, etc.',
      'Remote scripts assume privileged machine access and perform config rewriting plus process startup for many shard nodes at once',
    ],
    minerTitle: 'Mining Node Packaging',
    minerDesc: 'Mining deployment is scripted separately through `start_miner.sh`.',
    minerCode: `cd SethPub\nbash build_third.sh\nbash start_miner.sh <RAW_HEX_PRIVATE_KEY>`,
    minerItems: [
      'If no private key is provided, the script generates a random 32-byte hex key with OpenSSL.',
      'It then runs `./cbuild_Debug/seth -K <raw_private_key>` to produce a sealed key and wallet address.',
      'The resulting systemd service starts `seth -f 0 -g 0` from `/root/seth_miner` with generated config and log paths.',
      'The repo explicitly warns that the raw private key is the only way to access funds and should not be left on the server.',
    ],
    configTitle: 'Key Config And Ports',
    configDesc: 'The checked-in templates are the most reliable source for runtime fields and port expectations.',
    configItems: [
      '`mining_node/conf/seth.conf_temp` shows placeholders for bootstrap peers, sealed private key, local/public IP, `http_port`, and `local_port`.',
      '`simple_dep.sh` derives local node folders under `/root/nodes/` and rewrites `HTTP_PORT`, `LOCAL_PORT`, `NETWORK_ID`, and bootstrap values per node.',
      'The public sample RPC endpoint seen across repos is `35.197.170.240:23001`, but config templates show many other ports depending on topology.',
    ],
  },
  zh: {
    title: '节点与运维',
    description: '公开仓库里关于节点运维的说明，主要都体现在脚本和配置模板里。这一页把仓库中确实存在的部分整理出来。',
    reqTitle: '构建环境',
    reqDesc: 'SethPub 的公开 README 明确写了 GCC/G++ 13.0+ 与 CMake 3.25.1+。',
    reqItems: [
      '整体构建流程偏 Linux，标准入口是 `bash build_third.sh` 加 CMake release 编译',
      '`build_third.sh` 会安装系统包，并编译一大批静态第三方依赖',
      '`CMakeLists.txt` 里默认开启 release 优化、LTO，以及 `-march=native` 这一类面向宿主 CPU 的优化',
    ],
    localTitle: '本地开发网',
    localDesc: '如果只是想快速起一个本地多节点网络，仓库推荐在依赖准备好之后直接执行 `simple_dep.sh`。',
    localCode: `cd SethPub\nbash build_third.sh\nbash simple_dep.sh 4`,
    localNote: '这个脚本会复制 `nodes_local` 模板、填充配置、分配每个节点的 HTTP 和本地 TCP 端口、链接编译好的 `seth` 二进制，并启动多个本地分片节点。',
    remoteTitle: '远端 / 多机部署',
    remoteDesc: '更大规模的测试网则通过生成的 YAML 模板和远端编排脚本来完成。',
    remoteCode: `cd SethPub\nbash build_third.sh\nbash simple_remote.sh <each_machine_node_count> <ip_list>`,
    remoteItems: [
      '`nodes_confs_local/*.yml` 与 `nodes_confs_remote/*.yml` 给出了大量端口编排样例',
      '样例中 `http_port` 常见为 `8201`、`8301`、`7301` 等，而节点本地 TCP 端口通常是 `13001`、`23001` 这一类',
      '远端脚本默认会批量改写配置并在多台机器上启动分片节点，因此更像测试网编排工具，而不是单机启动器',
    ],
    minerTitle: '矿工节点打包',
    minerDesc: '矿工侧部署被单独封装在 `start_miner.sh` 里。',
    minerCode: `cd SethPub\nbash build_third.sh\nbash start_miner.sh <RAW_HEX_PRIVATE_KEY>`,
    minerItems: [
      '如果不传私钥，脚本会用 OpenSSL 自动生成一个 32 字节十六进制私钥',
      '随后脚本调用 `./cbuild_Debug/seth -K <raw_private_key>` 生成 sealed key 和钱包地址',
      '最后它会在 `/root/seth_miner` 下写配置、创建日志目录，并注册一个执行 `seth -f 0 -g 0` 的 systemd 服务',
      '仓库对原始私钥有非常明确的安全警告：它是唯一可恢复资金的凭据，不应长期保留在服务器上',
    ],
    configTitle: '关键配置与端口',
    configDesc: '如果想知道运行时到底需要哪些字段、端口如何安排，最可靠的依据仍然是仓库中的模板文件。',
    configItems: [
      '`mining_node/conf/seth.conf_temp` 展示了 bootstrap 节点、sealed 私钥、本地 / 公网 IP、`http_port`、`local_port` 等关键字段',
      '`simple_dep.sh` 会为 `/root/nodes/` 下的每个节点目录重写 `HTTP_PORT`、`LOCAL_PORT`、`NETWORK_ID` 和 bootstrap 信息',
      '仓库里最常出现的公开示例 RPC 端口是 `35.197.170.240:23001`，但配置模板也表明不同拓扑会使用很多其他端口',
    ],
  },
} as const;

export function Nodes({ lang }: { lang: 'en' | 'zh' }) {
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
        <span className="text-gray-400">{i18n[lang].sidebar.sections[2].title}</span>
        <ChevronRight className="w-4 h-4 shrink-0" />
        <span className="text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded">Nodes & Operations</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-[var(--color-text-main)]">
        {t.title}
      </h1>

      <div className="space-y-6 text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed mb-12">
        <p>{t.description}</p>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2 flex items-center gap-2">
        <Cpu className="w-6 h-6 text-[var(--color-brand)]" />
        {t.reqTitle}
      </h2>

      <div className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
        <p className="text-[var(--color-text-muted)] mb-4">{t.reqDesc}</p>
        <ul className="space-y-3">
          {t.reqItems.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] mt-2 shrink-0"></div>
              <span className="text-sm text-[var(--color-text-muted)]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2 flex items-center gap-2">
        <Terminal className="w-6 h-6 text-[var(--color-brand-purple)]" />
        {t.localTitle}
      </h2>

      <div className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
        <p className="text-[var(--color-text-muted)] mb-4">{t.localDesc}</p>
        <CodeBlock code={t.localCode} language="bash" />
        <p className="text-xs text-gray-500 mt-2">{t.localNote}</p>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2 flex items-center gap-2">
        <Database className="w-6 h-6 text-[var(--color-brand)]" />
        {t.remoteTitle}
      </h2>

      <div className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
        <p className="text-[var(--color-text-muted)] mb-4">{t.remoteDesc}</p>
        <CodeBlock code={t.remoteCode} language="bash" />
        <ul className="space-y-3 mt-4">
          {t.remoteItems.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] mt-2 shrink-0"></div>
              <span className="text-sm text-[var(--color-text-muted)]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2 flex items-center gap-2">
        <Shield className="w-6 h-6 text-[var(--color-brand-purple)]" />
        {t.minerTitle}
      </h2>

      <div className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
        <p className="text-[var(--color-text-muted)] mb-4">{t.minerDesc}</p>
        <CodeBlock code={t.minerCode} language="bash" />
        <ul className="space-y-3 mt-4">
          {t.minerItems.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-purple)] mt-2 shrink-0"></div>
              <span className="text-sm text-[var(--color-text-muted)]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2 flex items-center gap-2">
        <Database className="w-6 h-6 text-[var(--color-brand)]" />
        {t.configTitle}
      </h2>

      <div className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
        <p className="text-[var(--color-text-muted)] mb-4">{t.configDesc}</p>
        <ul className="space-y-3">
          {t.configItems.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] mt-2 shrink-0"></div>
              <span className="text-sm text-[var(--color-text-muted)]">{item}</span>
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
