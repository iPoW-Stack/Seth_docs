import { motion, AnimatePresence } from 'motion/react';
import { Search, X, FileText, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState, useMemo, KeyboardEvent } from 'react';
import { i18n } from '../i18n';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (page: string) => void;
  lang: 'en' | 'zh';
}

export function SearchModal({ isOpen, onClose, onSelect, lang }: SearchModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const searchResults = useMemo(() => {
    const sections = i18n[lang].sidebar.sections;
    const allItems = sections.flatMap(section =>
      section.items.map(item => ({
        title: item,
        category: section.title,
      })),
    );

    if (!query.trim()) {
      return allItems;
    }

    const lowerQuery = query.toLowerCase();
    return allItems.filter(item =>
      item.title.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery),
    );
  }, [query, lang]);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % searchResults.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + searchResults.length) % searchResults.length);
    } else if (e.key === 'Enter' && searchResults.length > 0) {
      e.preventDefault();
      onSelect(searchResults[selectedIndex].title);
      onClose();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  const resultsLabel = query
    ? (lang === 'en' ? 'Search Results' : '搜索结果')
    : (lang === 'en' ? 'Quick Results' : '快速结果');
  const emptyLabel = lang === 'en' ? 'No results found for' : '没有找到结果';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 sm:px-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
          onClick={onClose}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-2xl bg-[color:color-mix(in_oklab,var(--color-bg-card)_88%,transparent)] border border-[var(--color-border-strong)] rounded-2xl shadow-[0_30px_80px_rgba(2,6,23,0.35)] overflow-hidden backdrop-blur-xl"
        >
          <div className="h-px w-full bg-[linear-gradient(90deg,transparent,var(--color-brand),var(--color-brand-purple),transparent)]"></div>
          <div className="flex items-center px-5 py-4 border-b border-[var(--color-border)]">
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={lang === 'en' ? 'Search documentation...' : '搜索文档...'}
              className="flex-1 bg-transparent border-none outline-none text-[var(--color-text-main)] placeholder-gray-500 text-[1.1rem]"
            />
            <button onClick={onClose} className="p-1 hover:bg-[var(--color-bg-main)] rounded-md text-gray-400 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto p-2">
            <div className="px-4 py-3 text-[13px] font-semibold text-gray-500 uppercase tracking-wider">
              {resultsLabel}
            </div>
            {searchResults.length === 0 ? (
              <div className="px-4 py-8 text-center text-gray-500">
                {emptyLabel} "{query}"
              </div>
            ) : (
              searchResults.map((result, index) => (
                <button
                  key={result.title}
                  onClick={() => {
                    onSelect(result.title);
                    onClose();
                  }}
                  className={`w-full flex items-center justify-between px-4 py-4 rounded-xl group transition-colors text-left ${
                    index === selectedIndex ? 'bg-[linear-gradient(90deg,rgba(0,168,85,0.12),rgba(36,196,255,0.06))] border border-[rgba(0,168,85,0.18)]' : 'hover:bg-[var(--color-bg-main)] border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[var(--color-brand)]/10 flex items-center justify-center text-[var(--color-brand)]">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[var(--color-text-main)] text-[15px] font-medium">{result.title}</div>
                      <div className="text-[13px] text-gray-500">{result.category}</div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-gray-500 transition-opacity ${index === selectedIndex ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                </button>
              ))
            )}
          </div>

          <div className="px-5 py-4 border-t border-[var(--color-border)] bg-[var(--color-bg-main)] flex items-center justify-end gap-4 text-[13px] text-gray-500">
            <div className="flex items-center gap-1">
              <kbd className="bg-[var(--color-bg-card)] border border-[var(--color-border)] px-1.5 py-0.5 rounded font-mono text-[10px]">↑↓</kbd>
              <span>{lang === 'en' ? 'to navigate' : '切换结果'}</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="bg-[var(--color-bg-card)] border border-[var(--color-border)] px-1.5 py-0.5 rounded font-mono text-[10px]">ESC</kbd>
              <span>{lang === 'en' ? 'to close' : '关闭'}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
