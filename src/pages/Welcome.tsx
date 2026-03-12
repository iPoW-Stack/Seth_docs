import { Home, ChevronRight, Edit3, Layers, Zap, Code, Terminal, Wallet } from 'lucide-react';
import { motion } from 'motion/react';
import { i18n } from '../i18n';

export function Welcome({ lang }: { lang: 'en' | 'zh' }) {
  const t = i18n[lang].welcome;

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
        <span className="text-gray-400">{i18n[lang].sidebar.sections[0].title}</span>
        <ChevronRight className="w-4 h-4 shrink-0" />
        <span className="text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded">Welcome</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-[var(--color-text-main)]">
        {t.title} <span className="text-gradient">Seth</span>
      </h1>
      
      <div className="space-y-6 text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed mb-12">
        <p>{t.p1}</p>
        <p>{t.p2}</p>
        <p>{t.p3}</p>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2">
        {t.devFocusTitle}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {t.devFocusItems.map((item, idx) => {
          const icon = idx === 0 ? <Code className="w-6 h-6 text-[var(--color-brand)]" /> :
            idx === 1 ? <Terminal className="w-6 h-6 text-[var(--color-brand-purple)]" /> :
            <Wallet className="w-6 h-6 text-[var(--color-brand)]" />;
          return (
            <motion.div
              key={item.title}
              whileHover={{ y: -4 }}
              className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--color-bg-main)] border border-[var(--color-border)] flex items-center justify-center mb-4">
                {icon}
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-main)] mb-2">{item.title}</h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <motion.div whileHover={{ y: -5 }} className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-brand)]/50 transition-colors shadow-sm">
          <div className="w-12 h-12 rounded-lg bg-[var(--color-brand)]/10 flex items-center justify-center mb-4">
            <Layers className="w-6 h-6 text-[var(--color-brand)]" />
          </div>
          <h3 className="text-xl font-semibold text-[var(--color-text-main)] mb-2">{t.shardoraTitle}</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            {t.shardoraDesc}
          </p>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-brand-purple)]/50 transition-colors shadow-sm">
          <div className="w-12 h-12 rounded-lg bg-[var(--color-brand-purple)]/10 flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-[var(--color-brand-purple)]" />
          </div>
          <h3 className="text-xl font-semibold text-[var(--color-text-main)] mb-2">{t.ipowTitle}</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            {t.ipowDesc}
          </p>
        </motion.div>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2">{t.advancedTitle}</h2>
      
      <div className="space-y-6 text-[var(--color-text-muted)]">
        <div className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] shadow-sm">
          <h3 className="text-lg font-semibold text-[var(--color-text-main)] mb-3">{t.advanced1Title}</h3>
          <ul className="space-y-3 list-disc list-inside text-[var(--color-text-muted)]">
            <li><strong className="text-[var(--color-text-main)]">{t.advanced1Title}</strong> {t.advanced1Desc}</li>
            <li><strong className="text-[var(--color-text-main)]">{t.advanced2Title}</strong> {t.advanced2Desc}</li>
          </ul>
        </div>
      </div>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-brand-purple)] text-white px-4 py-2 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-[var(--color-brand)]/20 z-10"
      >
        <Edit3 className="w-4 h-4" />
        <span className="hidden sm:inline">{t.suggestEdits}</span>
      </motion.button>
    </motion.div>
  );
}
