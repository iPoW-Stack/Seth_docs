import { Search, Github, Moon, Sun, Command, Menu, Globe } from 'lucide-react';
import { i18n } from '../i18n';

interface NavbarProps {
  currentPage: string;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  lang: 'en' | 'zh';
  toggleLang: () => void;
  onMenuClick: () => void;
  onSearchClick: () => void;
  onNavigate: (page: string) => void;
}

const docsPages = new Set([
  'Welcome',
  'Core Concepts',
  'Token Economics',
  'AI Ecosystem',
  'Get Started',
  'Build Guide',
  'Smart Contracts',
  'Wallets & Clients',
  'Nodes & Operations',
  'Error Codes',
  'CLI Reference',
]);

export function Navbar({
  currentPage,
  theme,
  toggleTheme,
  lang,
  toggleLang,
  onMenuClick,
  onSearchClick,
  onNavigate,
}: NavbarProps) {
  const t = i18n[lang].nav;

  const navItems = [
    { key: 'docs', label: t.docs, page: 'Welcome', active: docsPages.has(currentPage) && currentPage !== 'HTTP API Reference' },
    { key: 'api', label: t.api, page: 'HTTP API Reference', active: currentPage === 'HTTP API Reference' },
    { key: 'ecosystem', label: t.ecosystem, page: 'AI Ecosystem', active: currentPage === 'AI Ecosystem' || currentPage === 'Token Economics' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[color:color-mix(in_oklab,var(--color-bg-main)_86%,transparent)] backdrop-blur-xl border-b border-[var(--color-border-strong)] z-50 flex items-center justify-between px-4 sm:px-6 transition-colors duration-300 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
      <div className="flex items-center gap-4 sm:gap-8">
        <button onClick={onMenuClick} className="md:hidden p-2 -ml-2 text-gray-400 hover:text-[var(--color-text-main)]">
          <Menu className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate('Welcome')}>
          <div className="relative w-9 h-9 rounded-xl bg-[linear-gradient(135deg,var(--color-brand),var(--color-brand-purple))] flex items-center justify-center text-white font-bold text-lg shadow-[0_12px_30px_rgba(0,168,85,0.28)] group-hover:shadow-[0_16px_38px_rgba(0,168,85,0.34)] transition-all">
            <span className="relative z-10">S</span>
            <span className="absolute inset-[2px] rounded-[10px] border border-white/20"></span>
          </div>
          <span className="text-[1.35rem] font-bold tracking-tight text-[var(--color-text-main)] hidden sm:block">
            Seth <span className="text-gray-400 font-medium text-[0.95rem] ml-1">Docs</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[color:color-mix(in_oklab,var(--color-bg-card)_76%,transparent)] px-2 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => onNavigate(item.page)}
              className={`px-4 py-2.5 text-[15px] font-medium rounded-full transition-all ${
                item.active
                  ? 'bg-[linear-gradient(90deg,rgba(0,168,85,0.16),rgba(36,196,255,0.12))] text-[var(--color-text-main)] border border-[rgba(0,168,85,0.18)] shadow-[0_10px_20px_rgba(0,168,85,0.08)]'
                  : 'text-gray-400 hover:text-[var(--color-text-main)] hover:bg-[var(--color-bg-main)]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <div className="relative hidden lg:block group cursor-pointer" onClick={onSearchClick}>
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[var(--color-brand)] transition-colors" />
          <div className="bg-[color:color-mix(in_oklab,var(--color-bg-card)_86%,transparent)] border border-[var(--color-border)] rounded-full pl-10 pr-16 py-2.5 text-[15px] w-72 xl:w-80 text-gray-400 transition-all group-hover:border-[var(--color-brand)] flex items-center shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
            {t.search}
          </div>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-60">
            <Command className="w-3 h-3 text-gray-400" />
            <span className="text-xs text-gray-400 font-mono">K</span>
          </div>
        </div>

        <button className="lg:hidden p-2.5 text-gray-400 hover:text-[var(--color-text-main)]" onClick={onSearchClick}>
          <Search className="w-5 h-5" />
        </button>

        <div className="h-5 w-px bg-[var(--color-border)] mx-1 hidden sm:block"></div>

        <button onClick={toggleLang} className="flex items-center gap-1.5 text-gray-400 hover:text-[var(--color-text-main)] transition-colors px-3 py-2.5 hover:bg-[var(--color-bg-card)] rounded-full text-[15px] font-medium">
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">{lang === 'en' ? 'EN' : '中'}</span>
        </button>

        <a href="https://github.com/iPoW-Stack" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[var(--color-text-main)] transition-colors p-2.5 hover:bg-[var(--color-bg-card)] rounded-full hidden sm:block">
          <Github className="w-5 h-5" />
        </a>

        <button onClick={toggleTheme} className="text-gray-400 hover:text-[var(--color-text-main)] transition-colors p-2.5 hover:bg-[var(--color-bg-card)] rounded-full">
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
}
