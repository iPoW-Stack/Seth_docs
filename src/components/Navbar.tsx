import { Search, Github, Moon, Sun, Command, Menu, Globe } from 'lucide-react';
import { i18n } from '../i18n';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  lang: 'en' | 'zh';
  toggleLang: () => void;
  onMenuClick: () => void;
  onSearchClick: () => void;
  onNavigate: (page: string) => void;
}

export function Navbar({ theme, toggleTheme, lang, toggleLang, onMenuClick, onSearchClick, onNavigate }: NavbarProps) {
  const t = i18n[lang].nav;

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[var(--color-bg-main)]/80 backdrop-blur-md border-b border-[var(--color-border)] z-40 flex items-center justify-between px-4 sm:px-6 transition-colors duration-300">
      <div className="flex items-center gap-4 sm:gap-8">
        <button onClick={onMenuClick} className="md:hidden p-2 -ml-2 text-gray-400 hover:text-[var(--color-text-main)]">
          <Menu className="w-6 h-6" />
        </button>
        
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate('Welcome')}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-purple)] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[var(--color-brand)]/20 group-hover:shadow-[var(--color-brand)]/40 transition-shadow">
            S
          </div>
          <span className="text-xl font-bold tracking-tight text-[var(--color-text-main)] hidden sm:block">
            Seth <span className="text-gray-400 font-medium text-sm ml-1">Docs</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-1">
          <button onClick={() => onNavigate('Welcome')} className="px-3 py-2 text-sm font-medium text-gray-400 hover:text-[var(--color-text-main)] hover:bg-[var(--color-bg-card)] rounded-md transition-colors">{t.docs}</button>
          <button onClick={() => onNavigate('HTTP API Reference')} className="px-3 py-2 text-sm font-medium text-gray-400 hover:text-[var(--color-text-main)] hover:bg-[var(--color-bg-card)] rounded-md transition-colors">{t.api}</button>
          <button onClick={() => onNavigate('Token Economics')} className="px-3 py-2 text-sm font-medium text-gray-400 hover:text-[var(--color-text-main)] hover:bg-[var(--color-bg-card)] rounded-md transition-colors">{t.ecosystem}</button>
        </nav>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <div className="relative hidden lg:block group cursor-pointer" onClick={onSearchClick}>
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[var(--color-brand)] transition-colors" />
          <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-full pl-10 pr-16 py-1.5 text-sm w-64 xl:w-72 text-gray-400 transition-all group-hover:border-[var(--color-brand)] flex items-center">
            {t.search}
          </div>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-60">
            <Command className="w-3 h-3 text-gray-400" />
            <span className="text-xs text-gray-400 font-mono">K</span>
          </div>
        </div>
        
        <button className="lg:hidden p-2 text-gray-400 hover:text-[var(--color-text-main)]" onClick={onSearchClick}>
          <Search className="w-5 h-5" />
        </button>
        
        <div className="h-5 w-px bg-[var(--color-border)] mx-1 hidden sm:block"></div>

        <button onClick={toggleLang} className="flex items-center gap-1 text-gray-400 hover:text-[var(--color-text-main)] transition-colors p-2 hover:bg-[var(--color-bg-card)] rounded-md text-sm font-medium">
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">{lang === 'en' ? 'EN' : '中'}</span>
        </button>

        <a href="https://github.com/iPoW-Stack/Seth" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[var(--color-text-main)] transition-colors p-2 hover:bg-[var(--color-bg-card)] rounded-md hidden sm:block">
          <Github className="w-5 h-5" />
        </a>
        
        <button onClick={toggleTheme} className="text-gray-400 hover:text-[var(--color-text-main)] transition-colors p-2 hover:bg-[var(--color-bg-card)] rounded-md">
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
}
