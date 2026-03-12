import { Home, ChevronRight, Edit3, Coins, PieChart, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { i18n } from '../i18n';

export function TokenEconomics({ lang }: { lang: 'en' | 'zh' }) {
  const t = i18n[lang].tokenEconomics;

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
        <span className="text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded">Token Economics</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-[var(--color-text-main)]">
        {t.title}
      </h1>
      
      <div className="space-y-6 text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed mb-12">
        <p>{t.description}</p>
      </div>

      <div className="bg-[var(--color-bg-card)] p-8 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-[var(--color-brand)]/10 rounded-lg">
            <PieChart className="w-8 h-8 text-[var(--color-brand)]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-text-main)]">{t.tokenTitle}</h2>
            <p className="text-[var(--color-text-muted)]">{t.tokenSubtitle}</p>
          </div>
        </div>
        
        <div className="space-y-4 text-[var(--color-text-muted)]">
          <p>{t.tokenDesc1}</p>
          <p>{t.tokenDesc2}</p>
          {t.tokenDesc3 && <p>{t.tokenDesc3}</p>}
        </div>
      </div>

      <div className="bg-[var(--color-bg-card)] p-8 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-[var(--color-brand-purple)]/10 rounded-lg">
            <Activity className="w-8 h-8 text-[var(--color-brand-purple)]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-text-main)]">{t.ecosystemTitle}</h2>
          </div>
        </div>
        
        <div className="space-y-4 text-[var(--color-text-muted)]">
          <p>{t.ecosystemDesc}</p>
          {t.ecosystemPoints && (
            <ul className="space-y-3">
              {t.ecosystemPoints.map((point: string) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] mt-2 shrink-0"></div>
                  <span className="text-sm text-[var(--color-text-muted)]">{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="bg-[var(--color-bg-card)] p-8 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-[var(--color-brand)]/10 rounded-lg">
            <Coins className="w-8 h-8 text-[var(--color-brand)]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-text-main)]">{t.susdcTitle}</h2>
          </div>
        </div>
        
        <div className="space-y-4 text-[var(--color-text-muted)]">
          <p>{t.susdcDesc}</p>
          {t.susdcPoints && (
            <ul className="space-y-3">
              {t.susdcPoints.map((point: string) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-purple)] mt-2 shrink-0"></div>
                  <span className="text-sm text-[var(--color-text-muted)]">{point}</span>
                </li>
              ))}
            </ul>
          )}
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
