/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { SearchModal } from './components/SearchModal';
import { Welcome } from './pages/Welcome';
import { GetStarted } from './pages/GetStarted';
import { Build } from './pages/Build';
import { Nodes } from './pages/Nodes';
import { ApiReference } from './pages/ApiReference';
import { CoreConcepts } from './pages/CoreConcepts';
import { TokenEconomics } from './pages/TokenEconomics';
import { SmartContracts } from './pages/SmartContracts';
import { ErrorCodes } from './pages/ErrorCodes';
import { CliReference } from './pages/CliReference';
import { Wallets } from './pages/Wallets';
import { AIEcosystem } from './pages/AIEcosystem';

const PAGE_TO_SLUG: Record<string, string> = {
  Welcome: 'welcome',
  'Core Concepts': 'core-concepts',
  'Token Economics': 'token-economics',
  'AI Ecosystem': 'ai-ecosystem',
  'Get Started': 'get-started',
  'Build Guide': 'build-guide',
  'Smart Contracts': 'smart-contracts',
  'Wallets & Clients': 'wallets-and-clients',
  'Nodes & Operations': 'nodes-and-operations',
  'HTTP API Reference': 'http-api-reference',
  'Error Codes': 'error-codes',
  'CLI Reference': 'cli-reference',
};

const SLUG_TO_PAGE = Object.fromEntries(
  Object.entries(PAGE_TO_SLUG).map(([page, slug]) => [slug, page]),
) as Record<string, string>;

function getPageFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('page');
  return (slug && SLUG_TO_PAGE[slug]) || 'Welcome';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => getPageFromUrl());
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [lang, setLang] = useState<'en' | 'zh'>('en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromUrl());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
  const toggleLang = () => setLang(l => l === 'en' ? 'zh' : 'en');

  const navigateToPage = (page: string) => {
    const slug = PAGE_TO_SLUG[page];
    const url = new URL(window.location.href);
    if (slug) {
      url.searchParams.set('page', slug);
    } else {
      url.searchParams.delete('page');
    }
    url.hash = '';
    window.history.pushState({ page }, '', url);
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Welcome':
        return <Welcome lang={lang} />;
      case 'Core Concepts':
        return <CoreConcepts lang={lang} />;
      case 'Token Economics':
        return <TokenEconomics lang={lang} />;
      case 'AI Ecosystem':
        return <AIEcosystem lang={lang} />;
      case 'Get Started':
        return <GetStarted lang={lang} />;
      case 'Build Guide':
        return <Build lang={lang} />;
      case 'Smart Contracts':
        return <SmartContracts lang={lang} />;
      case 'Wallets & Clients':
        return <Wallets lang={lang} />;
      case 'Nodes & Operations':
        return <Nodes lang={lang} />;
      case 'HTTP API Reference':
        return <ApiReference lang={lang} />;
      case 'Error Codes':
        return <ErrorCodes lang={lang} />;
      case 'CLI Reference':
        return <CliReference lang={lang} />;
      default:
        return <Welcome lang={lang} />;
    }
  };

  return (
    <div className="relative isolate min-h-screen flex flex-col bg-[var(--color-bg-main)] text-[var(--color-text-main)] font-sans selection:bg-[var(--color-brand)] selection:text-white transition-colors duration-300">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,168,85,0.08),transparent_32%),radial-gradient(circle_at_top_right,rgba(36,196,255,0.08),transparent_28%),linear-gradient(to_bottom,transparent,rgba(15,23,42,0.03))]" />
        <div className="absolute inset-0 opacity-[0.26] [background-image:linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.05),transparent_18%,transparent_82%,rgba(2,6,23,0.05))]" />
        <div className="absolute -top-24 left-[-10rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(0,168,85,0.18),transparent_68%)] blur-3xl" />
        <div className="absolute top-32 right-[-12rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(0,196,255,0.14),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[-12rem] left-1/3 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(0,168,85,0.10),transparent_70%)] blur-3xl" />
      </div>
      <Navbar 
        currentPage={currentPage}
        theme={theme} 
        toggleTheme={toggleTheme} 
        lang={lang} 
        toggleLang={toggleLang} 
        onMenuClick={() => setIsMobileMenuOpen(true)}
        onSearchClick={() => setIsSearchOpen(true)}
        onNavigate={navigateToPage}
      />
      <div className="flex flex-1 pt-16">
        <Sidebar 
          currentPage={currentPage} 
          setCurrentPage={navigateToPage} 
          lang={lang}
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
        <main className="flex-1 min-w-0">
          {renderPage()}
        </main>
      </div>
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onSelect={navigateToPage}
        lang={lang}
      />
    </div>
  );
}
