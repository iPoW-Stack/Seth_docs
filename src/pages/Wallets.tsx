import { Home, ChevronRight, Edit3, Smartphone, Wallet, Shield, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { i18n } from '../i18n';

const copy = {
  en: {
    title: 'Wallets & Clients',
    description: 'The private wallet repositories add a concrete client surface on top of the Seth chain: one Android app and one iOS app, both with dedicated Seth-chain logic instead of relying only on generic Ethereum tooling.',
    androidTitle: 'Seth_Wallet_Android',
    androidBody: [
      'Kotlin + Jetpack Compose app with `compileSdk 36`, `minSdk 26`, `targetSdk 35`.',
      'Depends on Android Security Crypto, biometric auth, Retrofit/OkHttp, ZXing, Web3j, and WebKit.',
      'Implements `SethCrypto` and a Seth-specific transaction repository aligned with the SethPub signing flow.',
      'Current main branch still treats Seth as the active chain while Ethereum / Bitcoin / Solana accounts are derived but only partially surfaced.',
      'Default Seth node in `NetworkModule.kt` is `http://136.110.63.32:23014/`, with an older `35.184.150.163:23001` endpoint left commented out.',
    ],
    androidBranchTitle: 'Android Branch Track',
    androidBranchBody: [
      '`sw_2.0.0` is a major feature branch: the branch tip message is “feat: Polymarket EOA trading, USDC.e approval, and nav restructure”.',
      'That branch adds Manus / OpenClaw repositories, Bitcoin and Solana transaction repositories, OpenClaw screens, expanded browser logic, and major navigation changes.',
    ],
    iosTitle: 'Seth_Wallet',
    iosBody: [
      'SwiftUI app targeting iOS 17+, generated through XcodeGen and also defined as a Swift Package.',
      'Uses `web3swift`, `BigInt`, `Alamofire`, and `ReownAppKit` for WalletConnect.',
      'Contains dedicated `SethChainClient` and `SethChainConfig` modules instead of pretending Seth is just another stock EVM endpoint.',
      'Also ships a MetaMask-compatible `window.ethereum` provider injection layer for the in-app DApp browser.',
      'Feature modules include Wallet, Send/Receive, Swap, Browser, History, Mining, Bridge, OpenClaw, CryptoManus, and Polymarket integration.',
    ],
    iosConfigTitle: 'iOS Defaults Worth Noting',
    iosConfigBody: [
      '`SethChainConfig.swift` defaults to `http://136.110.63.32:23014`, chain ID `7890`, gas limit `50000`, gas price `1`, and an empty explorer URL.',
      '`APIConfiguration.swift` points OpenClaw control-plane calls at `http://34.87.76.205:8082/api/v1`, Polymarket service calls at `http://34.87.76.205:8080/api/v1`, and Manus chat at `http://34.177.101.32:17362` by default.',
    ],
    patternTitle: 'Shared Client Pattern',
    patternBody: [
      'Both wallet codebases implement Seth-specific address derivation, nonce handling, and raw transaction submission logic rather than relying solely on Ethereum JSON-RPC abstractions.',
      'That is consistent with SethPub itself, where the canonical integration path is still the custom HTTP gateway and custom transaction serialization.',
    ],
  },
  zh: {
    title: '钱包与客户端',
    description: '这两个私有钱包仓库把 Seth 的客户端侧能力补得更完整了：一个 Android App，一个 iOS App，而且两边都实现了 Seth 专用逻辑，而不是单纯把它当作通用以太坊链来处理。',
    androidTitle: 'Seth_Wallet_Android',
    androidBody: [
      'Kotlin + Jetpack Compose 应用，`compileSdk 36`、`minSdk 26`、`targetSdk 35`。',
      '依赖 Android Security Crypto、生物认证、Retrofit/OkHttp、ZXing、Web3j 和 WebKit。',
      '内部实现了 `SethCrypto` 以及与 SethPub 签名流程对齐的 Seth 专用交易仓库。',
      '当前 `main` 分支里，Seth 仍然是唯一真正激活的链；Ethereum / Bitcoin / Solana 地址虽然会被推导出来，但 UI 和数据流还只部分开放。',
      '`NetworkModule.kt` 当前默认的 Seth 节点是 `http://136.110.63.32:23014/`，同时还保留了旧的 `35.184.150.163:23001` 注释样例。',
    ],
    androidBranchTitle: 'Android 分支线索',
    androidBranchBody: [
      '`sw_2.0.0` 是一条明显的大功能分支，分支 tip 提交信息就是 “feat: Polymarket EOA trading, USDC.e approval, and nav restructure”。',
      '这条分支新增了 Manus / OpenClaw 仓库层、Bitcoin 与 Solana 交易仓库、OpenClaw 页面，以及更大规模的导航重构。',
    ],
    iosTitle: 'Seth_Wallet',
    iosBody: [
      'SwiftUI 应用，目标平台是 iOS 17+，同时通过 XcodeGen 和 Swift Package 两种方式描述工程。',
      '依赖 `web3swift`、`BigInt`、`Alamofire` 与 `ReownAppKit` 来支持 WalletConnect。',
      '内部有独立的 `SethChainClient` 与 `SethChainConfig`，并没有把 Seth 粗暴地当作普通 EVM RPC 来处理。',
      '同时还内置了一个 MetaMask 兼容的 `window.ethereum` 注入层，用于 App 内 DApp 浏览器。',
      '功能模块已经覆盖 Wallet、Send/Receive、Swap、Browser、History、Mining、Bridge、OpenClaw、CryptoManus 和 Polymarket。',
    ],
    iosConfigTitle: 'iOS 默认配置里值得注意的点',
    iosConfigBody: [
      '`SethChainConfig.swift` 默认 RPC 是 `http://136.110.63.32:23014`，链 ID `7890`，默认 gas limit `50000`，gas price `1`，区块浏览器 URL 默认留空。',
      '`APIConfiguration.swift` 默认把 OpenClaw 控制面请求指向 `http://34.87.76.205:8082/api/v1`，把 Polymarket 服务指向 `http://34.87.76.205:8080/api/v1`，把 Manus 聊天服务指向 `http://34.177.101.32:17362`。',
    ],
    patternTitle: '两端共同的客户端模式',
    patternBody: [
      'Android 和 iOS 两边都在实现 Seth 专用的地址推导、nonce 管理和原始交易提交流程，而不是完全依赖通用 Ethereum JSON-RPC 抽象。',
      '这和 SethPub 自身是一致的，因为当前最标准的集成路径仍然是 Seth 自定义 HTTP 网关与自定义交易序列化。',
    ],
  },
} as const;

export function Wallets({ lang }: { lang: 'en' | 'zh' }) {
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
        <span className="text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded">Wallets & Clients</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-[var(--color-text-main)]">
        {t.title}
      </h1>

      <div className="space-y-6 text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed mb-12">
        <p>{t.description}</p>
      </div>

      <div className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
        <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2 flex items-center gap-2">
          <Smartphone className="w-6 h-6 text-[var(--color-brand)]" />
          {t.androidTitle}
        </h2>
        <ul className="space-y-3">
          {t.androidBody.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] mt-2 shrink-0"></div>
              <span className="text-sm text-[var(--color-text-muted)]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
        <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2 flex items-center gap-2">
          <Shield className="w-6 h-6 text-[var(--color-brand-purple)]" />
          {t.androidBranchTitle}
        </h2>
        <ul className="space-y-3">
          {t.androidBranchBody.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-purple)] mt-2 shrink-0"></div>
              <span className="text-sm text-[var(--color-text-muted)]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
        <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2 flex items-center gap-2">
          <Wallet className="w-6 h-6 text-[var(--color-brand)]" />
          {t.iosTitle}
        </h2>
        <ul className="space-y-3">
          {t.iosBody.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] mt-2 shrink-0"></div>
              <span className="text-sm text-[var(--color-text-muted)]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
        <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2 flex items-center gap-2">
          <Globe className="w-6 h-6 text-[var(--color-brand-purple)]" />
          {t.iosConfigTitle}
        </h2>
        <ul className="space-y-3">
          {t.iosConfigBody.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-purple)] mt-2 shrink-0"></div>
              <span className="text-sm text-[var(--color-text-muted)]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
        <h2 className="text-2xl font-bold mb-4 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2">
          {t.patternTitle}
        </h2>
        <ul className="space-y-3">
          {t.patternBody.map((item) => (
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
