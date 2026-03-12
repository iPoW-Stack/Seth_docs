import { Home, ChevronRight, Edit3, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import { i18n } from '../i18n';
import { CodeBlock } from '../components/CodeBlock';

export function CliReference({ lang }: { lang: 'en' | 'zh' }) {
  const t = i18n[lang].cliReference;

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
        <span className="text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded">CLI Reference</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-[var(--color-text-main)]">
        {t.title}
      </h1>
      
      <div className="space-y-6 text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed mb-12">
        <p>{t.description}</p>
      </div>

      <div className="space-y-8">
        {t.commands.map((cmd: any, index: number) => (
          <motion.div 
            key={index}
            whileHover={{ y: -2 }} 
            className="border border-[var(--color-border)] rounded-xl overflow-hidden bg-[var(--color-bg-sidebar)] shadow-sm"
          >
            <div className="bg-[var(--color-bg-card)] px-6 py-4 border-b border-[var(--color-border)] flex items-center justify-between">
              <h3 className="text-xl font-semibold text-[var(--color-text-main)] font-mono">{cmd.name}</h3>
            </div>
            <div className="p-6">
              <p className="text-[var(--color-text-muted)] mb-6">{cmd.description}</p>
              <CodeBlock code={cmd.usage} language="bash" />
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
