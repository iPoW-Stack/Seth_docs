import { X } from 'lucide-react';
import { i18n } from '../i18n';

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  lang: 'en' | 'zh';
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ currentPage, setCurrentPage, lang, isOpen, onClose }: SidebarProps) {
  const t = i18n[lang].sidebar;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`
        fixed md:sticky top-16 left-0 z-50
        w-64 bg-[var(--color-bg-main)] border-r border-[var(--color-border)] 
        h-[calc(100vh-4rem)] flex flex-col shrink-0
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="flex items-center justify-between p-4 md:hidden border-b border-[var(--color-border)]">
          <span className="font-semibold text-[var(--color-text-main)]">Menu</span>
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-[var(--color-text-main)]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4">
          {t.sections.map((section, idx) => (
            <div key={section.title} className={idx !== 0 ? 'mt-8' : ''}>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
                {section.title}
              </h4>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const isActive = currentPage === item;
                  return (
                    <li key={item}>
                      <button 
                        onClick={() => {
                          setCurrentPage(item);
                          onClose();
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                          isActive 
                            ? 'bg-[var(--color-brand)]/10 text-[var(--color-brand)] font-medium' 
                            : 'text-gray-400 hover:bg-[var(--color-bg-card)] hover:text-[var(--color-text-main)]'
                        }`}
                      >
                        {item}
                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)]"></div>}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
