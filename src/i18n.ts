export const i18n = {
  en: {
    nav: {
      docs: 'Documentation',
      api: 'API',
      ecosystem: 'Ecosystem',
      search: 'Search documentation...',
    },
    sidebar: {
      sections: [
        {
          title: 'Learn',
          items: ['Welcome', 'Core Concepts', 'Token Economics']
        },
        {
          title: 'Start Building',
          items: ['Get Started', 'Build Guide', 'Smart Contracts']
        },
        {
          title: 'Infrastructure',
          items: ['Nodes & Operations']
        },
        {
          title: 'References',
          items: ['HTTP API Reference', 'Error Codes', 'CLI Reference']
        }
      ]
    },
    welcome: {
      title: 'Welcome to',
      p1: 'Welcome to the Seth Developer Documentation! Whether you are a novice in blockchain development or an experienced EVM chain developer, this guide will help you build quickly on Seth.',
      p2: 'In the development of decentralized ledger technology, blockchain architects have always been committed to solving the "Blockchain Impossible Triangle" problem, that is, how to simultaneously achieve extreme scalability, impeccable security, and thorough decentralization in a distributed network.',
      p3: 'Against this background, the Seth open-source project based on the iPoW-Stack protocol stack proposes a revolutionary hybrid architecture. Seth not only inherits the Turing completeness of Ethereum EVM, but also introduces the "Shardora" dynamic blockchain sharding system, and adopts the first intelligent Proof of Work (iPoW) consensus algorithm, achieving a peak throughput of up to 8,300 TPS in a single-shard test under a LAN environment.',
      shardoraTitle: 'Shardora Dynamic Sharding',
      shardoraDesc: 'State Sharding divides the state and transaction processing tasks of the entire network into multiple smaller subsets (shards), thereby reducing the overhead of a single node. It introduces a dual-committee structure and a reputation shuffling mechanism to ensure that the consensus committee is always composed of the most reliable nodes.',
      ipowTitle: 'iPoW Intelligent Proof of Work',
      ipowDesc: 'The core idea of iPoW is to redirect the massive hardware computing power in the network to artificial intelligence model training tasks with actual economic and scientific value. Miners must invest computing power to perform gradient descent of deep neural network models (PoDL).',
      advancedTitle: 'Advanced Topics',
      advanced1Title: 'Cross-shard Transactions & Graph Stream Segmentation:',
      advanced1Desc: 'At the end of each epoch, the network globally analyzes the transaction graph, and intelligently migrates frequently interacting accounts to the same shard through the graph stream segmentation algorithm, converting a large number of cross-shard calls into low-latency intra-shard execution.',
      advanced2Title: 'Dual Confirmation Mechanism for Cross-shard Transactions:',
      advanced2Desc: 'When a cross-shard transaction must be executed, the source shard locks the state and generates a proof, relaying it to the target shard; after the target shard executes, it returns a confirmation receipt, and the source shard finally unlocks and updates the state, ensuring atomicity.',
      suggestEdits: 'Suggest Edits'
    },
    coreConcepts: {
      title: 'Core Concepts & Architecture',
      description: 'Deep dive into the fundamental architecture, consensus mechanisms, and network design of Seth.',
      concept1Title: 'PoCE Consensus & FTS Elimination',
      concept1Desc: 'Proof of Credit Election (PoCE) calculates node weight: Weight = τ0(iPoW Stake) + τ1(Historical) + τ2(Recent Epoch) + τ3(Geographic) - τ4(Retention Penalty). Every 10 minutes, the FTS algorithm randomly eliminates 5-10% of nodes to prevent collusion and ensure decentralization.',
      concept2Title: 'Highly Concurrent Sharding',
      concept2Desc: 'The network features 1 Root Shard and up to 1024 Transaction Shards. Each shard contains 256 transaction pools, allowing 256 leaders to process transactions in parallel. This architecture achieves up to 65,536 concurrent transactions globally without forks.',
      concept3Title: 'P2P Network & Height Tree Sync',
      concept3Desc: 'Uses Kademlia DHT for routing and a Random Layered Broadcast algorithm, reducing network overhead from 1:800 to 1:5. Ledger synchronization uses a 64-bit Height Tree instead of Merkle Trees, enabling millisecond-level block verification.',
      concept4Title: 'BLS Threshold Signatures & DKG',
      concept4Desc: 'SETH uses BLS threshold signatures and Decentralized Key Generation (DKG) every 10 minutes. This ensures that 2/3+1 honest nodes can securely sign blocks, maintaining independence and security across the rotating consensus committee.',
      flowTitle: 'Shard Roles & Transaction Flow',
      flowPoints: [
        'The Root shard handles global time, randomness, address allocation, elections, and reward settlement.',
        'Transaction shards execute transactions and maintain state and contract storage.',
        'Cross-shard flow: source shard locks state and emits a proof; target shard executes and returns a receipt; source shard unlocks and updates.',
        'Height Tree synchronization accelerates missing block detection and fast sync.'
      ]
    },
    tokenEconomics: {
      title: 'Token Economics & Settlement',
      description: 'Comprehensive guide to SETH tokenomics, the 15-50-35 settlement protocol, and the dual-pool liquidity system.',
      tokenTitle: 'SETH Token Allocation',
      tokenSubtitle: 'Total Supply: 210,000,000,000 SETH',
      tokenDesc1: 'Distribution: 75% Mining Rewards (released over 99 years with a 5% annual decay), 10% Community Minting, 9% Investment Fund, and 6% Team Allocation.',
      tokenDesc2: 'Utility: Used for OpenClaw University tuition (600 SETH for the full 12-week program), L1 mining staking, and ecosystem governance.',
      tokenDesc3: 'Vesting: team allocation unlocks over 4 years with a 1-year cliff. Mining rewards follow a 99-year schedule with 5% annual decay and a 10-year halving cadence.',
      ecosystemTitle: '15-50-35 Settlement Protocol',
      ecosystemDesc: 'All external revenue (e.g., $50/mo OpenClaw subscriptions) is automatically distributed via the 15-50-35 protocol.',
      ecosystemPoints: [
        '15% referrals paid instantly (10% L1, 5% L2) in Solana USDC.',
        '50% operations & R&D held in Pool A and settled monthly.',
        '35% net retention converted to sUSDC and injected into Pool B to support SETH.'
      ],
      susdcTitle: 'Dual-Pool System & DIRM',
      susdcDesc: 'Dual-pool structure and DIRM-based stability:',
      susdcPoints: [
        'Pool A (Solana, sUSDC/USDC) is the stability pool and price discovery for sUSDC.',
        'DIRM activates only outside a +/-2% band and applies a tanh-based fee or discount capped at 5%.',
        'AI Agent arbitrages in Pool A: sell sUSDC when price > 1, buy sUSDC when price < 1.',
        'Pool B (Seth chain, SETH/sUSDC) is the pricing pool; Treasury is the sole LP to keep value inside the ecosystem.',
        'DIRM penalties accrue to the Treasury; discounts are funded by the Treasury to preserve the pool invariant.'
      ]
    },
    errorCodes: {
      title: 'Error Codes',
      description: 'A comprehensive list of error codes returned by the Seth API and their meanings.',
      codes: [
        { code: '-32700', message: 'Parse error', description: 'Invalid JSON was received by the server.' },
        { code: '-32600', message: 'Invalid Request', description: 'The JSON sent is not a valid Request object.' },
        { code: '-32601', message: 'Method not found', description: 'The method does not exist / is not available.' },
        { code: '-32602', message: 'Invalid params', description: 'Invalid method parameter(s).' },
        { code: '-32603', message: 'Internal error', description: 'Internal JSON-RPC error.' }
      ]
    },
    cliReference: {
      title: 'CLI Reference',
      description: 'Core Seth binaries and test tools (for app integration, use JSON-RPC).',
      commands: [
        { name: 'seth', description: 'Node daemon (Root/Shard roles configured via flags and per-node config).', usage: './seth' },
        { name: 'txcli', description: 'Transaction generator and load-test client (uses TCP local_port and a local txclidb for nonce tracking).', usage: 'cd cbuild_Release && make txcli\n./txcli' },
        { name: 'pkicli', description: 'PKI test utility.', usage: './pkicli' },
        { name: 'hotstuff', description: 'Consensus test harness for HotStuff + BLS.', usage: './hotstuff' },
        { name: 'blsmain', description: 'BLS/DKG test harness.', usage: './blsmain' }
      ]
    },
    smartContracts: {
      title: 'Smart Contracts',
      description: 'Develop and deploy smart contracts on Seth.',
      evmTitle: 'EVM Equivalence',
      evmDesc: 'Seth is fully equivalent to the Ethereum Virtual Machine (EVM Equivalence).',
      opcodesTitle: 'Supported Opcodes',
      opcodesDesc: 'Supports all standard EVM opcodes and Transient Storage such as TSTORE and TLOAD, saving Gas for complex reentrancy locks or cross-contract calls.',
      assetsTitle: 'Asset Standards',
      assetsDesc: 'Supports Ethereum token standards such as ERC-20, ERC-721, ERC-1155 out of the box.',
      publicContractsTitle: 'Public Contracts & Cross-Shard Execution',
      publicContractsDesc: 'Public smart contracts are created on the Root shard network to be shared across shards. All transactions are treated as cross-shard transactions, ensuring global ordering and preventing double-spending.'
    },
    getStarted: {
      title: 'Actionable Quick Start',
      description: 'Follow these exact steps to set up your wallet, purchase a node, train your agent, and start earning.',
      step1Title: 'Step 1: Setup Wallet & Network',
      step1Subtitle: 'Connect to Seth',
      step1Desc: 'Download SETH Wallet v2.4 or configure MetaMask. Add the Seth Mainnet RPC. Ensure you have USDC on Solana for initial purchases and SETH for gas.',
      step2Title: 'Step 2: Purchase OpenClaw Node',
      step2Subtitle: 'Cloud Mining Instance',
      step2Desc: 'Choose a plan: Starter ($49/mo, 2C/4G/10GB), Pro ($75/mo, 4C/8G/50GB), or Enterprise ($126/mo, 8C/16G/100GB). Payment is made in USDC. 85% of funds are locked to generate sUSDC.',
      step3Title: 'Step 3: Enroll Agent in University',
      step3Subtitle: '12-Week Mandatory Training',
      step3Desc: 'Purchase 600 SETH from Pool B and enroll your Agent in the 12-week program (BSc 4w + MSc 3w + PhD 5w). Each week generates SKILL.md updates in the workspace. Mining is locked during training.',
      step4Title: 'Step 4: Activate Mining & Arbitrage',
      step4Subtitle: 'Earn Rewards',
      step4Desc: 'After graduation, your Agent unlocks L1 mining. You can also deploy your Agent to Pool A (Solana) to perform automated DIRM arbitrage when sUSDC deviates from $1.'
    },
    build: {
      title: 'Build & Agent Guide',
      description: 'Actionable guide for developers and users to interact with Seth, deploy contracts, and train AI Agents via OpenClaw University.',
      walletsTitle: 'Wallet & DApp Integration',
      walletsDesc: 'Seth is EVM equivalent. Use ethers.js or viem. Connect MetaMask to the Seth RPC. For advanced trading, the SETH Wallet v2.4 provides built-in Polymarket integration (Crypto Manus) with Fixed Amount and Ratio Follow modes.',
      transactionsTitle: 'Cross-Shard Transactions',
      transactionsDesc: 'All transactions are treated as cross-shard. The source shard locks the state, generates a proof, and relays it to the target shard. The target shard executes and returns a receipt, ensuring global ordering.',
      nonceTitle: 'Nonce & Gas Management',
      nonceDesc: 'Strict client-side nonce management is required due to high-concurrency sharding. Gas follows EIP-1559. Transactions exceeding 60 tx/sec per address or 2MB payload size will be dropped by the Gateway Firewall.',
      gasTitle: 'Smart Contracts',
      gasDesc: 'Public contracts are deployed on the Root Shard and shared. Private contracts are deployed on specific Transaction Shards. Supports TSTORE/TLOAD.',
      smartContractsTitle: 'Smart Contracts',
      smartContractsDesc: 'Seth is fully equivalent to the Ethereum Virtual Machine (EVM Equivalence).',
      opcodesTitle: 'Supported Opcodes',
      opcodesDesc: 'Supports all standard EVM opcodes and Transient Storage such as TSTORE and TLOAD, saving Gas for complex reentrancy locks or cross-contract calls.',
      assetsTitle: 'Asset Standards',
      assetsDesc: 'Supports Ethereum token standards such as ERC-20, ERC-721, ERC-1155 out of the box.',
      universityTitle: 'OpenClaw University (A2A)',
      universityDesc: 'To activate L1 mining, your AI Agent must graduate from OpenClaw University. This process injects real-world capabilities into your agent.',
      uniStep1Title: '1. Enrollment & Tuition',
      uniStep1Desc: 'Pay 600 SETH (approx. $28.20) from Pool B. This locks your capital for 12 weeks, eliminating early sell pressure and supporting the token price.',
      uniStep2Title: '2. Coursework & SKILL.md',
      uniStep2Desc: 'Agents undergo a 12-week program (BSc -> MSc -> PhD). They receive weekly materials, take exams, and automatically write learned capabilities (like trading strategies) into their local workspace `SKILL.md` file.',
      uniStep3Title: '3. Graduation & Deployment',
      uniStep3Desc: 'Upon completing the 12-week PhD, the Agent receives a verifiable certificate on-chain and unlocks L1 mining capabilities, generating daily USDT/SETH yields.',
      universityNotesTitle: 'Training Pipeline & Skill Injection',
      universityNotes: [
        'Courses are delivered in weekly modules with readings, exercises, and exams; GPA and transcripts are tracked.',
        'Knowledge courses produce summary skills; tool courses record commands, parameters, and examples.',
        'Skills are injected into <workspace>/skills and take priority over ~/.openclaw/skills and built-in skills.',
        'Dependencies can be declared via metadata.openclaw.requires.bins and metadata.openclaw.requires.env.',
        'Review third-party skills before enabling them to avoid unsafe code.'
      ]
    },
    nodes: {
      title: 'Nodes & Operations',
      description: 'Practical guide to deploying and operating a Seth node. Learn about hardware requirements, the PoCE election process, and network synchronization.',
      hardwareTitle: 'Hardware Requirements (iPoW & PoDL)',
      hardwareDesc: 'Because iPoW involves Proof of Deep Learning (PoDL), standard CPU mining is insufficient. Required specs:',
      cpuDesc: 'CPU: 8+ cores (16 cores with AVX-512 recommended).',
      gpuDesc: 'GPU: 8GB+ VRAM minimum. Enterprise AI accelerators (RTX 4090, A100) are highly recommended for efficient gradient descent computation.',
      memoryDesc: 'RAM: 32 GB minimum (64 GB recommended to keep AI models in memory).',
      storageDesc: 'Storage: 2 TB NVMe SSD (4 TB recommended) with high IOPS for Height Tree ledger synchronization.',
      architectureTitle: 'PoCE Election & Network Sync',
      consensusNode: 'PoCE Consensus Formula',
      consensusDesc: 'Weight = τ0(iPoW Stake) + τ1(Historical) + τ2(Recent Epoch) + τ3(Geographic) - τ4(Retention Penalty). 10% of nodes are rotated every 10 minutes via FTS random elimination.',
      waitingNode: 'Network Architecture',
      waitingDesc: 'Uses Kademlia DHT for P2P routing. Random Layered Broadcast reduces network overhead from 1:800 to 1:5. Sync uses a 64-bit Height Tree instead of Merkle Trees for millisecond-level block verification.',
      ordinaryNode: 'Sharding Limits',
      ordinaryDesc: '1 Root Shard + up to 1024 Transaction Shards. Each shard runs 256 parallel transaction pools (max 65,536 TPS globally).',
      installationTitle: 'Installation & Compilation',
      installationDesc: 'The core client is developed in C++. Requirements: g++ 8.3+ and cmake 3.25+. Use the commands below to build dependencies and compile the node.',
      step1Title: '1. Build Third-Party Dependencies',
      step1Desc: 'Sync submodules and build dependencies (protobuf, RocksDB, MaxMind). Use build_third_arm.sh on ARM.',
      step1Code: 'bash build_third.sh',
      step2Title: '2. Compile (Release)',
      step2Code: 'cmake -S . -B build_release -DCMAKE_POLICY_VERSION_MINIMUM=3.5 -DCMAKE_BUILD_TYPE=Release\ncmake --build build_release -j 8',
      portsTitle: 'Ports & Runtime Config',
      portsDesc: 'Ports and network fields are defined in node config and must align with DB baselines.',
      portsPoints: [
        'Default node HTTP/gateway port is 23001 (configurable per node).',
        'txcli uses TCP local_port (commonly 13001); do not send txcli traffic to the HTTP port.',
        'Key config fields: net_id, local_ip, local_port.'
      ],
      localDevTitle: 'Local Devnet Quickstart',
      localDevDesc: 'From the repo root on Linux, run the commands below to spin up a local N-node devnet.',
      localDevCode: 'bash build_third.sh\nbash simple_dep.sh 4',
      localDevNote: 'Transaction test: cd cbuild_Release && make txcli && ./txcli'
    },
    api: {
      title: 'HTTP API Reference',
      description: 'Seth strictly follows the Ethereum JSON-RPC specification. All HTTP POST payloads and query parameters (such as eth_sendRawTransaction, eth_estimateGas, etc.) are equivalent to Ethereum, ensuring seamless integration with infrastructure like Alchemy and Infura.',
      warning: 'Note: The current API uses urlencoded POST requests, not standard JSON-RPC. Integrators please refer to the endpoint definitions below.',
      integrationNotesTitle: 'Integration Notes',
      integrationNotes: [
        'EVM tooling: JSON-RPC methods and semantics match Ethereum (eth_sendRawTransaction, eth_call, eth_estimateGas, etc).',
        'The gateway endpoints below currently accept urlencoded POST; use these when interacting with the Seth HTTP gateway.'
      ],
      endpoints: {
        transaction: {
          desc: 'Send a transaction to the Seth network.',
          params: {
            nonce: 'Transaction nonce',
            pubkey: 'Sender public key',
            to: 'Recipient address',
            amount: 'Transfer amount',
            sign: 'Transaction signature (r, s, v)',
            input: 'Contract call data (optional)'
          }
        },
        query_account: {
          desc: 'Query account balance and status.',
          params: {
            address: 'Account address to query'
          }
        },
        query_contract: {
          desc: 'Query smart contract status (no Gas consumed).',
          params: {
            address: 'Contract address',
            from: 'Caller address',
            input: 'Call data'
          }
        }
      }
    }
  },
  zh: {
    nav: {
      docs: '开发者文档',
      api: 'API接口',
      ecosystem: '生态系统',
      search: '搜索文档...',
    },
    sidebar: {
      sections: [
        {
          title: '学习 (Learn)',
          items: ['Welcome', 'Core Concepts', 'Token Economics']
        },
        {
          title: '开始构建 (Start Building)',
          items: ['Get Started', 'Build Guide', 'Smart Contracts']
        },
        {
          title: '基础设施 (Infrastructure)',
          items: ['Nodes & Operations']
        },
        {
          title: '参考资料 (References)',
          items: ['HTTP API Reference', 'Error Codes', 'CLI Reference']
        }
      ]
    },
    welcome: {
      title: '欢迎来到',
      p1: '欢迎来到 Seth 开发者文档！无论您是区块链开发的新手，还是经验丰富的 EVM 链开发者，本指南都将帮助您快速在 Seth 上进行构建。',
      p2: '在去中心化账本技术的发展历程中，区块链架构师们始终在致力于解决所谓的“区块链不可能三角”问题，即如何在一个分布式网络中同时实现极致的可扩展性、无懈可击的安全性以及彻底的去中心化。',
      p3: '在此背景下，基于 iPoW-Stack 协议栈的 Seth 开源项目提出了一种革命性的混合架构综合体。Seth 不仅继承了以太坊 EVM 的图灵完备性，还引入了“Shardora”动态区块链分片系统，并采用了首创的智能工作量证明（iPoW）共识算法，在局域网环境下的单分片测试中实现了高达 8,300 TPS 的峰值吞吐量。',
      shardoraTitle: 'Shardora 动态分片架构',
      shardoraDesc: '状态分片（State Sharding）将整个网络的状态和交易处理任务分割成多个较小的子集（分片），从而降低单个节点的开销。引入了双委员会结构与声誉洗牌机制，确保共识委员会始终由最可靠的节点组成。',
      ipowTitle: 'iPoW 智能工作量证明',
      ipowDesc: 'iPoW 的核心理念是将网络中庞大的硬件算力重定向到具有实际经济和科学价值的人工智能模型训练任务上。矿工必须投入算力执行深度神经网络模型的梯度下降（PoDL）。',
      advancedTitle: '进阶主题',
      advanced1Title: '跨片交易与图流分割:',
      advanced1Desc: '在每个纪元结束时，网络全局分析交易图谱，通过图流分割算法将频繁交互的账户智能地迁移到同一个分片中，将大量跨片调用转化为低延迟的片内执行。',
      advanced2Title: '跨片交易的双重确认机制:',
      advanced2Desc: '当必须执行跨片交易时，源分片锁定状态并生成证明，中继给目标分片；目标分片执行后回传确认收据，源分片最终解锁并更新状态，保障原子性。',
      suggestEdits: '提出修改建议'
    },
    coreConcepts: {
      title: '核心概念与架构',
      description: '深入了解 Seth 的底层架构、共识机制和网络设计。',
      concept1Title: 'PoCE 共识与 FTS 淘汰机制',
      concept1Desc: '信用选举证明 (PoCE) 计算节点权重：权重 = τ0(iPoW 质押) + τ1(历史贡献) + τ2(近期表现) + τ3(地理分散度) - τ4(滞留惩罚)。每 10 分钟，FTS 算法会随机淘汰 5-10% 的节点，以防止串谋并确保去中心化。',
      concept2Title: '高并发分片架构',
      concept2Desc: '网络包含 1 个 Root 根分片和最多 1024 个交易分片。每个分片包含 256 个交易池，允许 256 个 Leader 并行处理交易。这种架构在全球范围内可实现高达 65,536 的并发 TPS，且不会产生分叉。',
      concept3Title: 'P2P 网络与高度树同步',
      concept3Desc: '使用 Kademlia DHT 进行路由，并采用随机分层广播算法，将网络开销从 1:800 降低到 1:5。账本同步使用 64 位高度树 (Height Tree) 代替传统的默克尔树，实现毫秒级的区块验证。',
      concept4Title: 'BLS 门限签名与 DKG',
      concept4Desc: 'SETH 每 10 分钟使用一次 BLS 门限签名和去中心化密钥生成 (DKG)。这确保了 2/3+1 的诚实节点能够安全地对区块进行签名，在不断轮换的共识委员会中保持独立性和安全性。',
      flowTitle: '分片职责与交易流',
      flowPoints: [
        'Root 分片负责全局时钟、随机数、地址分配、选举与奖励结算。',
        '交易分片负责交易共识与执行，维护状态与合约数据。',
        '跨分片流程：源分片锁定状态并生成证明，目标分片执行后回执，源分片解锁更新。',
        'Height Tree 用于缺块检测与快速同步。'
      ]
    },
    tokenEconomics: {
      title: '代币经济学与结算',
      description: '全面了解 SETH 代币经济学、15-50-35 结算协议以及双池流动性系统。',
      tokenTitle: 'SETH 代币分配',
      tokenSubtitle: '总供应量：210,000,000,000 SETH',
      tokenDesc1: '分配明细：75% 挖矿奖励（99年内释放，每年衰减 5%），10% 社区铸造，9% 投资基金，6% 团队分配。',
      tokenDesc2: '代币用途：用于支付 OpenClaw 大学学费（完整 12 周课程需 600 SETH）、L1 挖矿质押以及生态系统治理。',
      tokenDesc3: '解锁规则：团队份额 4 年线性解锁，含 1 年 cliff；挖矿奖励 99 年释放，年衰减 5%，每 10 年减半。',
      ecosystemTitle: '15-50-35 结算协议',
      ecosystemDesc: '所有外部收入（例如 50 美元/月的 OpenClaw 订阅费）将按 15-50-35 协议自动分配。',
      ecosystemPoints: [
        '15% 推广分账实时发放（L1 10%，L2 5%），以 Solana USDC 支付。',
        '50% 运营与研发进入 A 池储备并按月结算。',
        '35% 净留存兑换为 sUSDC 注入 B 池，形成 SETH 底部承托。'
      ],
      susdcTitle: '双池系统与 DIRM 机制',
      susdcDesc: '双池结构与 DIRM 价格稳定机制如下：',
      susdcPoints: [
        'A 池（Solana：sUSDC/USDC）是 sUSDC 稳定与价格发现中心。',
        'DIRM 仅在价格偏离 +/-2% 之外启动，采用 tanh 费率/折扣，最大干预 5%。',
        'AI Agent 在 A 池执行套利：sUSDC > 1 时卖出，sUSDC < 1 时买入。',
        'B 池（Seth 链：SETH/sUSDC）是 SETH 定价池；国库为唯一 LP。',
        'DIRM 罚金进入国库，补贴由国库支付以保持池子不变式。'
      ]
    },
    errorCodes: {
      title: '错误代码',
      description: 'Seth API 返回的错误代码及其含义的完整列表。',
      codes: [
        { code: '-32700', message: '解析错误', description: '服务器接收到无效的 JSON。' },
        { code: '-32600', message: '无效请求', description: '发送的 JSON 不是有效的请求对象。' },
        { code: '-32601', message: '找不到方法', description: '该方法不存在或不可用。' },
        { code: '-32602', message: '无效参数', description: '无效的方法参数。' },
        { code: '-32603', message: '内部错误', description: '内部 JSON-RPC 错误。' }
      ]
    },
    cliReference: {
      title: 'CLI 参考',
      description: 'Seth 核心二进制与测试工具概览（应用集成请使用 JSON-RPC）。',
      commands: [
        { name: 'seth', description: '节点守护进程（Root/Shard 角色由参数与配置决定）。', usage: './seth' },
        { name: 'txcli', description: '交易生成与压测客户端（使用 TCP local_port，并维护本地 nonce）。', usage: 'cd cbuild_Release && make txcli\n./txcli' },
        { name: 'pkicli', description: 'PKI 测试/工具。', usage: './pkicli' },
        { name: 'hotstuff', description: 'HotStuff 共识测试入口。', usage: './hotstuff' },
        { name: 'blsmain', description: 'BLS/DKG 测试入口。', usage: './blsmain' }
      ]
    },
    smartContracts: {
      title: '智能合约',
      description: '在 Seth 上开发和部署 smart contracts。',
      evmTitle: 'EVM 等效兼容',
      evmDesc: 'Seth 对以太坊虚拟机（EVM）完全等效兼容（EVM Equivalence）。',
      opcodesTitle: '支持的操作码',
      opcodesDesc: '支持所有标准 EVM 操作码及瞬态存储（Transient Storage）如 TSTORE 和 TLOAD，为复杂的重入锁或跨合约调用节省 Gas。',
      assetsTitle: '资产标准',
      assetsDesc: '原封不动支持 ERC-20, ERC-721, ERC-1155 等以太坊代币标准。',
      publicContractsTitle: '公共合约与跨片执行',
      publicContractsDesc: '公共智能合约在 Root 根分片网络上创建，以便跨分片共享。所有交易均被视为跨片交易，确保全局排序并防止双花攻击。'
    },
    getStarted: {
      title: '实操快速入门',
      description: '按照以下具体步骤设置您的钱包、购买节点、训练您的 Agent 并开始赚取收益。',
      step1Title: '第 1 步：设置钱包与网络',
      step1Subtitle: '连接到 Seth',
      step1Desc: '下载 SETH Wallet v2.4 或配置 MetaMask。添加 Seth 主网 RPC。确保您在 Solana 上有 USDC 用于初始购买，并有 SETH 用于支付 Gas 费。',
      step2Title: '第 2 步：购买 OpenClaw 节点',
      step2Subtitle: '云端挖矿实例',
      step2Desc: '选择一个套餐：Starter ($49/月, 2C/4G/10GB)、Pro ($75/月, 4C/8G/50GB) 或 Enterprise ($126/月, 8C/16G/100GB)。使用 USDC 支付。85% 的资金将被锁定以生成 sUSDC。',
      step3Title: '第 3 步：Agent 报名大学',
      step3Subtitle: '12 周强制培训',
      step3Desc: '从 B 池购买 600 SETH 并为您的 Agent 报名 12 周课程（BSc 4 周 + MSc 3 周 + PhD 5 周）。每周生成 SKILL.md 更新并写入工作区。训练期内不允许挖矿。',
      step4Title: '第 4 步：激活挖矿与套利',
      step4Subtitle: '赚取奖励',
      step4Desc: '毕业后，您的 Agent 将解锁 L1 挖矿权限。您还可以将 Agent 部署到 A 池 (Solana) 执行自动化 DIRM 套利，当 sUSDC 偏离 1 美元时进行交易。'
    },
    build: {
      title: '开发与 Agent 指南',
      description: '为开发者和用户提供与 Seth 交互、部署合约以及通过 OpenClaw 大学训练 AI Agent 的实操指南。',
      walletsTitle: '钱包与 DApp 集成',
      walletsDesc: 'Seth 与 EVM 完全等效。使用 ethers.js 或 viem。将 MetaMask 连接到 Seth RPC。对于高级交易，SETH Wallet v2.4 提供了内置的 Polymarket 集成 (Crypto Manus)，支持固定金额和比例跟单模式。',
      transactionsTitle: '跨片交易',
      transactionsDesc: '所有交易均被视为跨片交易。源分片锁定状态，生成证明，并将其转播给目标分片。目标分片执行并返回收据，确保全局排序。',
      nonceTitle: 'Nonce 与 Gas 管理',
      nonceDesc: '由于高并发分片，客户端必须严格管理 Nonce。Gas 机制遵循 EIP-1559。超过每个地址 60 tx/sec 或 2MB 负载大小的交易将被网关防火墙丢弃。',
      gasTitle: '智能合约',
      gasDesc: '公共合约部署在 Root 根分片上并共享。私有合约部署在特定的交易分片上。支持 TSTORE/TLOAD 操作码。',
      smartContractsTitle: '智能合约',
      smartContractsDesc: 'Seth 对以太坊虚拟机（EVM）完全等效兼容（EVM Equivalence）。',
      opcodesTitle: '支持的操作码',
      opcodesDesc: '支持所有标准 EVM 操作码及瞬态存储（Transient Storage）如 TSTORE 和 TLOAD，为复杂的重入锁或跨合约调用节省 Gas。',
      assetsTitle: '资产标准',
      assetsDesc: '原封不动支持 ERC-20, ERC-721, ERC-1155 等以太坊代币标准。',
      universityTitle: 'OpenClaw 大学 (A2A)',
      universityDesc: '为了激活 L1 挖矿，您的 AI Agent 必须从 OpenClaw 大学毕业。此过程将真实世界的能力注入到您的 Agent 中。',
      uniStep1Title: '1. 报名与学费',
      uniStep1Desc: '从 B 池支付 600 SETH（约 28.20 美元）。这会将您的资金锁定 12 周，消除早期抛售压力并支撑代币价格。',
      uniStep2Title: '2. 课程与 SKILL.md',
      uniStep2Desc: 'Agent 接受为期 12 周的课程（BSc -> MSc -> PhD）。他们接收每周材料，参加考试，并自动将学到的能力（如交易策略）写入其本地工作区的 `SKILL.md` 文件中。',
      uniStep3Title: '3. 毕业与部署',
      uniStep3Desc: '完成 12 周的 PhD 课程后，Agent 将在链上获得可验证的证书，并解锁 L1 挖矿功能，产生每日 USDT/SETH 收益。',
      universityNotesTitle: '训练流程与技能注入',
      universityNotes: [
        '课程按周推送，包含阅读材料、动手练习与考试；系统记录 GPA 与成绩单。',
        '知识型课程会生成摘要技能；工具型课程会记录命令、参数与示例。',
        '技能写入 <workspace>/skills，并优先于 ~/.openclaw/skills 与内置技能加载。',
        '依赖可在 metadata.openclaw.requires.bins / requires.env 中声明。',
        '第三方技能需审查后启用，避免不安全代码。'
      ]
    },
    nodes: {
      title: '节点与运维',
      description: '部署和运营 Seth 节点的实操指南。了解硬件要求、PoCE 选举过程和网络同步。',
      hardwareTitle: '硬件要求 (iPoW & PoDL)',
      hardwareDesc: '由于 iPoW 涉及深度学习证明 (PoDL)，标准的 CPU 挖矿是不够的。所需配置：',
      cpuDesc: 'CPU: 8 核以上（推荐 16 核并支持 AVX-512）。',
      gpuDesc: 'GPU: 至少 8GB 显存。强烈推荐企业级 AI 加速卡（如 RTX 4090, A100）以进行高效的梯度下降计算。',
      memoryDesc: '内存: 至少 32 GB（推荐 64 GB 以确保 AI 模型常驻内存）。',
      storageDesc: '存储: 2 TB NVMe SSD（推荐 4 TB），具有极高的 IOPS 以应对高度树 (Height Tree) 账本同步。',
      architectureTitle: 'PoCE 选举与网络同步',
      consensusNode: 'PoCE 共识公式',
      consensusDesc: '权重 = τ0(iPoW 质押) + τ1(历史贡献) + τ2(近期表现) + τ3(地理分散度) - τ4(滞留惩罚)。每 10 分钟通过 FTS 随机淘汰算法轮换 10% 的节点。',
      waitingNode: '网络架构',
      waitingDesc: '使用 Kademlia DHT 进行 P2P 路由。随机分层广播将网络开销从 1:800 降低到 1:5。同步使用 64 位高度树代替默克尔树，实现毫秒级区块验证。',
      ordinaryNode: '分片限制',
      ordinaryDesc: '1 个 Root 根分片 + 最多 1024 个交易分片。每个分片运行 256 个并行交易池（全球最高 65,536 TPS）。',
      installationTitle: '安装与编译',
      installationDesc: '核心客户端使用 C++ 开发。要求 g++ 8.3+、cmake 3.25+。以下为依赖构建与编译命令。',
      step1Title: '1. 构建第三方依赖',
      step1Desc: '同步子模块并构建依赖（protobuf、RocksDB、MaxMind 等）；ARM 平台使用 build_third_arm.sh。',
      step1Code: 'bash build_third.sh',
      step2Title: '2. 编译（Release）',
      step2Code: 'cmake -S . -B build_release -DCMAKE_POLICY_VERSION_MINIMUM=3.5 -DCMAKE_BUILD_TYPE=Release\ncmake --build build_release -j 8',
      portsTitle: '端口与配置',
      portsDesc: '端口与网络参数由节点配置决定，需与 DB 基线匹配。',
      portsPoints: [
        '节点 HTTP/网关端口默认 23001（可配置）。',
        'txcli 使用 TCP local_port（常见 13001），不要把 txcli 流量发到 HTTP 端口。',
        '关键配置字段：net_id、local_ip、local_port。'
      ],
      localDevTitle: '本地开发网络',
      localDevDesc: '在仓库根目录执行以下命令即可启动本地 N 节点测试网。',
      localDevCode: 'bash build_third.sh\nbash simple_dep.sh 4',
      localDevNote: '交易压测示例：cd cbuild_Release && make txcli && ./txcli'
    },
    api: {
      title: 'HTTP API 参考',
      description: 'Seth 严格遵循以太坊 JSON-RPC 规范。所有的 HTTP POST 载荷、查询参数（如 eth_sendRawTransaction, eth_estimateGas 等）均与以太坊等效，确保 Alchemy, Infura 等基础设施可无缝接入。',
      warning: '注意：当前 API 采用 urlencoded 的 POST 请求，并非标准 JSON-RPC。集成方请参考以下端点定义。',
      integrationNotesTitle: '集成说明',
      integrationNotes: [
        'EVM 工具链：JSON-RPC 方法与语义保持以太坊一致（eth_sendRawTransaction、eth_call、eth_estimateGas 等）。',
        '当前 HTTP 网关仍支持 urlencoded POST 的旧式接口，请按下方参数提交。'
      ],
      endpoints: {
        transaction: {
          desc: '发送交易到 Seth 网络。',
          params: {
            nonce: '交易 nonce',
            pubkey: '发送方公钥',
            to: '接收方地址',
            amount: '转账金额',
            sign: '交易签名 (r, s, v)',
            input: '合约调用数据 (可选)'
          }
        },
        query_account: {
          desc: '查询账户余额及状态。',
          params: {
            address: '要查询的账户地址'
          }
        },
        query_contract: {
          desc: '查询智能合约状态 (无需消耗 Gas)。',
          params: {
            address: '合约地址',
            from: '调用方地址',
            input: '调用数据'
          }
        }
      }
    }
  }
};
