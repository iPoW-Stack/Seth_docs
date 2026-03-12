import { Home, ChevronRight, Edit3, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';
import { i18n } from '../i18n';

export function ErrorCodes({ lang }: { lang: 'en' | 'zh' }) {
  const t = i18n[lang].errorCodes;

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
        <span className="text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded">Error Codes</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-[var(--color-text-main)]">
        {t.title}
      </h1>
      
      <div className="space-y-6 text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed mb-12">
        <p>{t.description}</p>
      </div>

      <div className="bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--color-bg-main)] border-b border-[var(--color-border)]">
                <th className="py-4 px-6 font-semibold text-[var(--color-text-main)]">Code</th>
                <th className="py-4 px-6 font-semibold text-[var(--color-text-main)]">Message</th>
                <th className="py-4 px-6 font-semibold text-[var(--color-text-main)]">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {t.codes.map((code: any, index: number) => (
                <tr key={index} className="hover:bg-[var(--color-bg-main)]/50 transition-colors">
                  <td className="py-4 px-6 font-mono text-sm text-[var(--color-brand)]">{code.code}</td>
                  <td className="py-4 px-6 text-sm font-medium text-[var(--color-text-main)]">{code.message}</td>
                  <td className="py-4 px-6 text-sm text-[var(--color-text-muted)]">{code.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
