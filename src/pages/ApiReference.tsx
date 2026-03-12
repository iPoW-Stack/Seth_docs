import { Home, ChevronRight, Edit3 } from 'lucide-react';
import { motion } from 'motion/react';
import { i18n } from '../i18n';
import { CodeBlock } from '../components/CodeBlock';

export function ApiReference({ lang }: { lang: 'en' | 'zh' }) {
  const t = i18n[lang].api;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 sm:px-8 py-10 relative pb-32"
    >
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-8 overflow-x-auto whitespace-nowrap pb-2">
        <Home className="w-4 h-4 shrink-0" />
        <ChevronRight className="w-4 h-4 shrink-0" />
        <span className="text-gray-400">{i18n[lang].sidebar.sections[3].title}</span>
        <ChevronRight className="w-4 h-4 shrink-0" />
        <span className="text-[var(--color-brand)] bg-[var(--color-bg-card)] px-2 py-0.5 rounded">HTTP API Reference</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-[var(--color-text-main)]">{t.title}</h1>
      
      <div className="space-y-4 text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed mb-12">
        <p>{t.description}</p>
        <div className="text-sm bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 p-4 rounded-lg border border-yellow-500/20">
          <strong>{lang === 'zh' ? '注意：' : 'Note:'}</strong> {t.warning}
        </div>
        {t.integrationNotes && (
          <div className="text-sm bg-[var(--color-bg-card)] p-4 rounded-lg border border-[var(--color-border)]">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              {t.integrationNotesTitle}
            </h4>
            <ul className="space-y-2">
              {t.integrationNotes.map((note: string) => (
                <li key={note} className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] shrink-0"></span>
                  <span className="text-[var(--color-text-muted)]">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="space-y-8">
        {/* Endpoint 1 */}
        <motion.div whileHover={{ y: -2 }} className="border border-[var(--color-border)] rounded-xl overflow-hidden bg-[var(--color-bg-sidebar)] shadow-sm">
          <div className="bg-[var(--color-bg-card)] px-6 py-4 border-b border-[var(--color-border)] flex items-center justify-between">
            <h3 className="text-xl font-semibold text-[var(--color-text-main)]">/transaction</h3>
            <span className="bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded text-xs font-mono font-medium">POST</span>
          </div>
          <div className="p-6">
            <p className="text-[var(--color-text-muted)] mb-6">{t.endpoints.transaction.desc}</p>
            <h4 className="text-sm font-semibold text-[var(--color-text-muted)] mb-3 uppercase tracking-wider">Parameters</h4>
            <div className="bg-[var(--color-bg-main)] rounded-lg p-4 font-mono text-sm text-[var(--color-text-muted)] border border-[var(--color-border)] overflow-x-auto">
              <div className="min-w-[500px]">
                <div className="grid grid-cols-12 gap-4 mb-3 border-b border-[var(--color-border)] pb-2 text-gray-500 font-sans text-xs uppercase tracking-wider">
                  <span className="col-span-3">Name</span>
                  <span className="col-span-2">Type</span>
                  <span className="col-span-7">Description</span>
                </div>
                <div className="grid grid-cols-12 gap-4 py-2">
                  <span className="col-span-3 text-[var(--color-brand)]">nonce</span>
                  <span className="col-span-2 text-emerald-600 dark:text-emerald-300">uint64</span>
                  <span className="col-span-7">{t.endpoints.transaction.params.nonce}</span>
                </div>
                <div className="grid grid-cols-12 gap-4 py-2">
                  <span className="col-span-3 text-[var(--color-brand)]">pubkey</span>
                  <span className="col-span-2 text-emerald-600 dark:text-emerald-300">string</span>
                  <span className="col-span-7">{t.endpoints.transaction.params.pubkey}</span>
                </div>
                <div className="grid grid-cols-12 gap-4 py-2">
                  <span className="col-span-3 text-[var(--color-brand)]">to</span>
                  <span className="col-span-2 text-emerald-600 dark:text-emerald-300">string</span>
                  <span className="col-span-7">{t.endpoints.transaction.params.to}</span>
                </div>
                <div className="grid grid-cols-12 gap-4 py-2">
                  <span className="col-span-3 text-[var(--color-brand)]">amount</span>
                  <span className="col-span-2 text-emerald-600 dark:text-emerald-300">uint256</span>
                  <span className="col-span-7">{t.endpoints.transaction.params.amount}</span>
                </div>
                <div className="grid grid-cols-12 gap-4 py-2">
                  <span className="col-span-3 text-[var(--color-brand)]">sign_r, sign_s, sign_v</span>
                  <span className="col-span-2 text-emerald-600 dark:text-emerald-300">string</span>
                  <span className="col-span-7">{t.endpoints.transaction.params.sign}</span>
                </div>
                <div className="grid grid-cols-12 gap-4 py-2 opacity-70">
                  <span className="col-span-3 text-[var(--color-brand)]">input</span>
                  <span className="col-span-2 text-emerald-600 dark:text-emerald-300">string</span>
                  <span className="col-span-7">{t.endpoints.transaction.params.input}</span>
                </div>
              </div>
            </div>
            
            <h4 className="text-sm font-semibold text-[var(--color-text-muted)] mt-6 mb-3 uppercase tracking-wider">Example Request</h4>
            <CodeBlock 
              language="json"
              code={`{
  "jsonrpc": "2.0",
  "method": "eth_sendRawTransaction",
  "params": ["0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"],
  "id": 1
}`} 
            />
          </div>
        </motion.div>

        {/* Endpoint 2 */}
        <motion.div whileHover={{ y: -2 }} className="border border-[var(--color-border)] rounded-xl overflow-hidden bg-[var(--color-bg-sidebar)] shadow-sm">
          <div className="bg-[var(--color-bg-card)] px-6 py-4 border-b border-[var(--color-border)] flex items-center justify-between">
            <h3 className="text-xl font-semibold text-[var(--color-text-main)]">/query_account</h3>
            <span className="bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded text-xs font-mono font-medium">POST</span>
          </div>
          <div className="p-6">
            <p className="text-[var(--color-text-muted)] mb-6">{t.endpoints.query_account.desc}</p>
            <h4 className="text-sm font-semibold text-[var(--color-text-muted)] mb-3 uppercase tracking-wider">Parameters</h4>
            <div className="bg-[var(--color-bg-main)] rounded-lg p-4 font-mono text-sm text-[var(--color-text-muted)] border border-[var(--color-border)] overflow-x-auto">
              <div className="min-w-[500px]">
                <div className="grid grid-cols-12 gap-4 mb-3 border-b border-[var(--color-border)] pb-2 text-gray-500 font-sans text-xs uppercase tracking-wider">
                  <span className="col-span-3">Name</span>
                  <span className="col-span-2">Type</span>
                  <span className="col-span-7">Description</span>
                </div>
                <div className="grid grid-cols-12 gap-4 py-2">
                  <span className="col-span-3 text-[var(--color-brand)]">address</span>
                  <span className="col-span-2 text-emerald-600 dark:text-emerald-300">string</span>
                  <span className="col-span-7">{t.endpoints.query_account.params.address}</span>
                </div>
              </div>
            </div>
            
            <h4 className="text-sm font-semibold text-[var(--color-text-muted)] mt-6 mb-3 uppercase tracking-wider">Example Request</h4>
            <CodeBlock 
              language="json"
              code={`{
  "jsonrpc": "2.0",
  "method": "eth_getBalance",
  "params": ["0x407d73d8a49eeb85d32cf465507dd71d507100c1", "latest"],
  "id": 1
}`} 
            />
          </div>
        </motion.div>

        {/* Endpoint 3 */}
        <motion.div whileHover={{ y: -2 }} className="border border-[var(--color-border)] rounded-xl overflow-hidden bg-[var(--color-bg-sidebar)] shadow-sm">
          <div className="bg-[var(--color-bg-card)] px-6 py-4 border-b border-[var(--color-border)] flex items-center justify-between">
            <h3 className="text-xl font-semibold text-[var(--color-text-main)]">/query_contract</h3>
            <span className="bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded text-xs font-mono font-medium">POST</span>
          </div>
          <div className="p-6">
            <p className="text-[var(--color-text-muted)] mb-6">{t.endpoints.query_contract.desc}</p>
            <h4 className="text-sm font-semibold text-[var(--color-text-muted)] mb-3 uppercase tracking-wider">Parameters</h4>
            <div className="bg-[var(--color-bg-main)] rounded-lg p-4 font-mono text-sm text-[var(--color-text-muted)] border border-[var(--color-border)] overflow-x-auto">
              <div className="min-w-[500px]">
                <div className="grid grid-cols-12 gap-4 mb-3 border-b border-[var(--color-border)] pb-2 text-gray-500 font-sans text-xs uppercase tracking-wider">
                  <span className="col-span-3">Name</span>
                  <span className="col-span-2">Type</span>
                  <span className="col-span-7">Description</span>
                </div>
                <div className="grid grid-cols-12 gap-4 py-2">
                  <span className="col-span-3 text-[var(--color-brand)]">address</span>
                  <span className="col-span-2 text-emerald-600 dark:text-emerald-300">string</span>
                  <span className="col-span-7">{t.endpoints.query_contract.params.address}</span>
                </div>
                <div className="grid grid-cols-12 gap-4 py-2">
                  <span className="col-span-3 text-[var(--color-brand)]">from</span>
                  <span className="col-span-2 text-emerald-600 dark:text-emerald-300">string</span>
                  <span className="col-span-7">{t.endpoints.query_contract.params.from}</span>
                </div>
                <div className="grid grid-cols-12 gap-4 py-2">
                  <span className="col-span-3 text-[var(--color-brand)]">input</span>
                  <span className="col-span-2 text-emerald-600 dark:text-emerald-300">string</span>
                  <span className="col-span-7">{t.endpoints.query_contract.params.input}</span>
                </div>
              </div>
            </div>
            
            <h4 className="text-sm font-semibold text-[var(--color-text-muted)] mt-6 mb-3 uppercase tracking-wider">Example Request</h4>
            <CodeBlock 
              language="json"
              code={`{
  "jsonrpc": "2.0",
  "method": "eth_call",
  "params": [{
    "to": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
    "data": "0x70a08231000000000000000000000000407d73d8a49eeb85d32cf465507dd71d507100c1"
  }, "latest"],
  "id": 1
}`} 
            />
          </div>
        </motion.div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2">
        {t.sdkTitle}
      </h2>

      <div className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
        <p className="text-[var(--color-text-muted)] mb-6">{t.sdkDesc}</p>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
              {t.sdkDepsTitle}
            </h3>
            <ul className="space-y-2">
              {t.sdkDeps.map((dep: string) => (
                <li key={dep} className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] shrink-0"></span>
                  <span className="text-sm text-[var(--color-text-muted)]">{dep}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
              {t.sdkStepsTitle}
            </h3>
            <ul className="space-y-2">
              {t.sdkSteps.map((step: string) => (
                <li key={step} className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--color-brand-purple)] shrink-0"></span>
                  <span className="text-sm text-[var(--color-text-muted)]">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
              {t.sdkExampleTitle}
            </h3>
            <CodeBlock code={t.sdkExampleCode} language="python" />
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
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
