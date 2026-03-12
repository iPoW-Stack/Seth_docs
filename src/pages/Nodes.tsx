import { Home, ChevronRight, Edit3, Shield, Cpu, Database, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import { i18n } from '../i18n';
import { CodeBlock } from '../components/CodeBlock';

export function Nodes({ lang }: { lang: 'en' | 'zh' }) {
  const t = i18n[lang].nodes;

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
        <span className="text-gray-400">{i18n[lang].sidebar.sections[2].title}</span>
        <ChevronRight className="w-4 h-4 shrink-0" />
        <span className="text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded">Nodes & Operations</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-[var(--color-text-main)]">
        {t.title}
      </h1>
      
      <div className="space-y-6 text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed mb-12">
        <p>{t.description}</p>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2 flex items-center gap-2">
        <Cpu className="w-6 h-6 text-[var(--color-brand)]" />
        {t.hardwareTitle}
      </h2>
      
      <div className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
        <p className="text-[var(--color-text-muted)] mb-6">{t.hardwareDesc}</p>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] mt-2 shrink-0"></div>
            <div>
              <strong className="text-[var(--color-text-main)] block">CPU</strong>
              <span className="text-[var(--color-text-muted)]">{t.cpuDesc}</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-purple)] mt-2 shrink-0"></div>
            <div>
              <strong className="text-[var(--color-text-main)] block">GPU</strong>
              <span className="text-[var(--color-text-muted)]">{t.gpuDesc}</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] mt-2 shrink-0"></div>
            <div>
              <strong className="text-[var(--color-text-main)] block">Memory</strong>
              <span className="text-[var(--color-text-muted)]">{t.memoryDesc}</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-purple)] mt-2 shrink-0"></div>
            <div>
              <strong className="text-[var(--color-text-main)] block">Storage</strong>
              <span className="text-[var(--color-text-muted)]">{t.storageDesc}</span>
            </div>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2 flex items-center gap-2">
        <Database className="w-6 h-6 text-[var(--color-brand-purple)]" />
        {t.architectureTitle}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <motion.div whileHover={{ y: -5 }} className="bg-[var(--color-bg-card)] p-5 rounded-xl border border-[var(--color-border)] shadow-sm">
          <h3 className="text-lg font-semibold text-[var(--color-text-main)] mb-2">{t.consensusNode}</h3>
          <p className="text-[var(--color-text-muted)] text-sm">{t.consensusDesc}</p>
        </motion.div>
        <motion.div whileHover={{ y: -5 }} className="bg-[var(--color-bg-card)] p-5 rounded-xl border border-[var(--color-border)] shadow-sm">
          <h3 className="text-lg font-semibold text-[var(--color-text-main)] mb-2">{t.waitingNode}</h3>
          <p className="text-[var(--color-text-muted)] text-sm">{t.waitingDesc}</p>
        </motion.div>
        <motion.div whileHover={{ y: -5 }} className="bg-[var(--color-bg-card)] p-5 rounded-xl border border-[var(--color-border)] shadow-sm">
          <h3 className="text-lg font-semibold text-[var(--color-text-main)] mb-2">{t.ordinaryNode}</h3>
          <p className="text-[var(--color-text-muted)] text-sm">{t.ordinaryDesc}</p>
        </motion.div>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2 flex items-center gap-2">
        <Shield className="w-6 h-6 text-[var(--color-brand)]" />
        {t.installationTitle}
      </h2>

      <div className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
        <p className="text-[var(--color-text-muted)] mb-4">{t.installationDesc}</p>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-[var(--color-text-main)] font-medium mb-2">{t.step1Title}</h4>
            <CodeBlock code={t.step1Code} language="bash" />
            <p className="text-xs text-gray-500 mt-2">{t.step1Desc}</p>
          </div>
          
          <div>
            <h4 className="text-[var(--color-text-main)] font-medium mb-2">{t.step2Title}</h4>
            <CodeBlock code={t.step2Code} language="bash" />
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2 flex items-center gap-2">
        <Database className="w-6 h-6 text-[var(--color-brand-purple)]" />
        {t.portsTitle}
      </h2>

      <div className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
        <p className="text-[var(--color-text-muted)] mb-4">{t.portsDesc}</p>
        {t.portsPoints && (
          <ul className="space-y-3">
            {t.portsPoints.map((point: string) => (
              <li key={point} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] mt-2 shrink-0"></div>
                <span className="text-sm text-[var(--color-text-muted)]">{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <h2 className="text-2xl font-bold mb-6 text-[var(--color-text-main)] border-b border-[var(--color-border)] pb-2 flex items-center gap-2">
        <Terminal className="w-6 h-6 text-[var(--color-brand)]" />
        {t.localDevTitle}
      </h2>

      <div className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] mb-12 shadow-sm">
        <p className="text-[var(--color-text-muted)] mb-4">{t.localDevDesc}</p>
        <CodeBlock code={t.localDevCode} language="bash" />
        {t.localDevNote && <p className="text-xs text-gray-500 mt-2">{t.localDevNote}</p>}
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
