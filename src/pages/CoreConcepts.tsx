import { Home, ChevronRight, Edit3, Layers, Zap, Shield, Key } from 'lucide-react';
import { motion } from 'motion/react';
import { i18n } from '../i18n';

export function CoreConcepts({ lang }: { lang: 'en' | 'zh' }) {
  const t = i18n[lang].coreConcepts;

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
        <span className="text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded">Core Concepts</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-[var(--color-text-main)]">
        {t.title}
      </h1>
      
      <div className="space-y-6 text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed mb-12">
        <p>{t.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <motion.div whileHover={{ y: -5 }} className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] shadow-sm">
          <Shield className="w-8 h-8 text-[var(--color-brand)] mb-4" />
          <h3 className="text-xl font-semibold text-[var(--color-text-main)] mb-3">{t.concept1Title}</h3>
          <p className="text-[var(--color-text-muted)]">{t.concept1Desc}</p>
        </motion.div>
        
        <motion.div whileHover={{ y: -5 }} className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] shadow-sm">
          <Zap className="w-8 h-8 text-[var(--color-brand-purple)] mb-4" />
          <h3 className="text-xl font-semibold text-[var(--color-text-main)] mb-3">{t.concept2Title}</h3>
          <p className="text-[var(--color-text-muted)]">{t.concept2Desc}</p>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] shadow-sm">
          <Layers className="w-8 h-8 text-[var(--color-brand)] mb-4" />
          <h3 className="text-xl font-semibold text-[var(--color-text-main)] mb-3">{t.concept3Title}</h3>
          <p className="text-[var(--color-text-muted)]">{t.concept3Desc}</p>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] shadow-sm">
          <Key className="w-8 h-8 text-[var(--color-brand-purple)] mb-4" />
          <h3 className="text-xl font-semibold text-[var(--color-text-main)] mb-3">{t.concept4Title}</h3>
          <p className="text-[var(--color-text-muted)]">{t.concept4Desc}</p>
        </motion.div>
      </div>

      {t.flowTitle && t.flowPoints && (
        <>
          <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2 flex items-center gap-2">
            <Layers className="w-6 h-6 text-[var(--color-brand)]" />
            {t.flowTitle}
          </h2>
          <div className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
            <ul className="space-y-3">
              {t.flowPoints.map((point: string) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] mt-2 shrink-0"></div>
                  <span className="text-sm text-[var(--color-text-muted)]">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

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
