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

export default function App() {
  const [currentPage, setCurrentPage] = useState('Welcome');
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

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
  const toggleLang = () => setLang(l => l === 'en' ? 'zh' : 'en');

  const renderPage = () => {
    switch (currentPage) {
      case 'Welcome':
        return <Welcome lang={lang} />;
      case 'Core Concepts':
        return <CoreConcepts lang={lang} />;
      case 'Token Economics':
        return <TokenEconomics lang={lang} />;
      case 'Get Started':
        return <GetStarted lang={lang} />;
      case 'Build Guide':
        return <Build lang={lang} />;
      case 'Smart Contracts':
        return <SmartContracts lang={lang} />;
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
    <div className="min-h-screen flex flex-col bg-[var(--color-bg-main)] text-[var(--color-text-main)] font-sans selection:bg-[var(--color-brand)] selection:text-white transition-colors duration-300">
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        lang={lang} 
        toggleLang={toggleLang} 
        onMenuClick={() => setIsMobileMenuOpen(true)}
        onSearchClick={() => setIsSearchOpen(true)}
        onNavigate={setCurrentPage}
      />
      <div className="flex flex-1 overflow-hidden pt-16">
        <Sidebar 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          lang={lang}
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
        <main className="flex-1 overflow-y-auto">
          {renderPage()}
        </main>
      </div>
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onSelect={setCurrentPage}
        lang={lang}
      />
    </div>
  );
}
