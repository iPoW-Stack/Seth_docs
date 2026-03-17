import { Home, ChevronRight, Edit3 } from 'lucide-react';
import { motion } from 'motion/react';
import { i18n } from '../i18n';

const copy = {
  en: {
    title: 'Error Codes',
    description: 'The most explicit status enum in the public repos is the transaction receipt status used by `clipy/cli.py` and returned by `/transaction_receipt`.',
    columns: ['Code', 'Message', 'Meaning'],
    codes: [
      { code: '0', message: 'kConsensusSuccess', description: 'Transaction finished successfully.' },
      { code: '1', message: 'kMessageHandle', description: 'The transaction is still being handled.' },
      { code: '2', message: 'kMessageHandleError', description: 'Handling failed before success was reached.' },
      { code: '3', message: 'kTxAccept', description: 'Transaction was accepted and is still in an in-flight state.' },
      { code: '4', message: 'kTxInvalidSignature', description: 'Signature verification failed.' },
      { code: '5', message: 'kTxInvalidAddress', description: 'The submitted address or derived sender address is invalid.' },
      { code: '6', message: 'kTxPoolFullReject', description: 'The transaction pool rejected the submission because it is full.' },
      { code: '7', message: 'kTxUserNonceInvalid', description: 'Nonce does not match the account state expected by the node.' },
      { code: '8', message: 'kUnknown', description: 'Unknown status.' },
      { code: '9', message: 'kRequestInvalid', description: 'The request itself is malformed, such as missing required parameters.' },
      { code: '10', message: 'kNotExists', description: 'The requested transaction hash or object does not exist.' },
    ],
    note: 'Outside `/transaction_receipt`, many gateway validation failures are still returned as plain-text strings, so not every error is normalized into this table.',
  },
  zh: {
    title: '错误码',
    description: '公开仓库里最明确的一组状态枚举，来自 `clipy/cli.py` 中的交易回执状态，并由 `/transaction_receipt` 返回。',
    columns: ['代码', '名称', '含义'],
    codes: [
      { code: '0', message: 'kConsensusSuccess', description: '交易已经成功完成。' },
      { code: '1', message: 'kMessageHandle', description: '交易仍在处理中。' },
      { code: '2', message: 'kMessageHandleError', description: '处理过程中失败，尚未到达成功状态。' },
      { code: '3', message: 'kTxAccept', description: '交易已经被接受，但仍处于进行中的状态。' },
      { code: '4', message: 'kTxInvalidSignature', description: '签名校验失败。' },
      { code: '5', message: 'kTxInvalidAddress', description: '提交地址或推导出的发送方地址无效。' },
      { code: '6', message: 'kTxPoolFullReject', description: '交易池已满，提交被拒绝。' },
      { code: '7', message: 'kTxUserNonceInvalid', description: 'nonce 与节点预期的账户状态不一致。' },
      { code: '8', message: 'kUnknown', description: '未知状态。' },
      { code: '9', message: 'kRequestInvalid', description: '请求本身不合法，例如缺少必要参数。' },
      { code: '10', message: 'kNotExists', description: '请求的交易哈希或对象不存在。' },
    ],
    note: '除了 `/transaction_receipt` 外，很多网关参数校验失败仍然直接返回纯文本，因此并不是所有错误都会被规范化成这张表里的状态。',
  },
} as const;

export function ErrorCodes({ lang }: { lang: 'en' | 'zh' }) {
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
        <span className="text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded">Error Codes</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-[var(--color-text-main)]">
        {t.title}
      </h1>

      <div className="space-y-6 text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed mb-12">
        <p>{t.description}</p>
      </div>

      <div className="bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] overflow-hidden shadow-sm mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--color-bg-main)] border-b border-[var(--color-border)]">
                <th className="py-4 px-6 font-semibold text-[var(--color-text-main)]">{t.columns[0]}</th>
                <th className="py-4 px-6 font-semibold text-[var(--color-text-main)]">{t.columns[1]}</th>
                <th className="py-4 px-6 font-semibold text-[var(--color-text-main)]">{t.columns[2]}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {t.codes.map((code) => (
                <tr key={code.code} className="hover:bg-[var(--color-bg-main)]/50 transition-colors">
                  <td className="py-4 px-6 font-mono text-sm text-[var(--color-brand)]">{code.code}</td>
                  <td className="py-4 px-6 text-sm font-medium text-[var(--color-text-main)]">{code.message}</td>
                  <td className="py-4 px-6 text-sm text-[var(--color-text-muted)]">{code.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-sm bg-[var(--color-bg-card)] p-4 rounded-lg border border-[var(--color-border)] mb-12 text-[var(--color-text-muted)]">
        {t.note}
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
