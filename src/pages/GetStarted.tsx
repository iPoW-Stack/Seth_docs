import { Home, ChevronRight, Edit3, Terminal, Wallet, Coins, Code2 } from 'lucide-react';
import { motion } from 'motion/react';
import { i18n } from '../i18n';

export function GetStarted({ lang }: { lang: 'en' | 'zh' }) {
  const t = i18n[lang].getStarted;

  const steps = [
    {
      id: 1,
      icon: <Terminal className="w-6 h-6 text-[var(--color-brand)]" />,
      title: t.step1Title,
      subtitle: t.step1Subtitle,
      description: t.step1Desc,
    },
    {
      id: 2,
      icon: <Wallet className="w-6 h-6 text-[var(--color-brand-purple)]" />,
      title: t.step2Title,
      subtitle: t.step2Subtitle,
      description: t.step2Desc,
    },
    {
      id: 3,
      icon: <Coins className="w-6 h-6 text-[var(--color-brand)]" />,
      title: t.step3Title,
      subtitle: t.step3Subtitle,
      description: t.step3Desc,
    },
    {
      id: 4,
      icon: <Code2 className="w-6 h-6 text-[var(--color-brand-purple)]" />,
      title: t.step4Title,
      subtitle: t.step4Subtitle,
      description: t.step4Desc,
    }
  ];

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
        <span className="text-gray-400">{i18n[lang].sidebar.sections[1].title}</span>
        <ChevronRight className="w-4 h-4 shrink-0" />
        <span className="text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded">Get Started</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-[var(--color-text-main)]">
        {t.title}
      </h1>
      
      <div className="space-y-4 text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed mb-12">
        <p>{t.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <motion.a 
            key={step.id}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="block p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-brand)]/50 transition-colors shadow-sm"
          >
            <div className="w-12 h-12 rounded-lg bg-[var(--color-bg-main)] border border-[var(--color-border)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              {step.icon}
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-gray-500 bg-black/50 px-2 py-0.5 rounded">STEP {step.id}</span>
            </div>
            <h3 className="text-xl font-semibold text-[var(--color-text-main)] mb-1 group-hover:text-[var(--color-brand)] transition-colors">
              {step.title}
            </h3>
            <p className="text-sm text-gray-500 mb-4 font-medium">{step.subtitle}</p>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
              {step.description}
            </p>
          </motion.a>
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
