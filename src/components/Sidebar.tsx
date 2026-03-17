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
        fixed md:sticky top-16 left-0 z-50 md:z-30
        w-72 bg-[color:color-mix(in_oklab,var(--color-bg-sidebar)_96%,transparent)] border-r border-[var(--color-border-strong)] 
        h-[calc(100vh-4rem)] md:h-auto flex flex-col shrink-0 md:self-start
        backdrop-blur-xl shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="flex items-center justify-between p-4 md:hidden border-b border-[var(--color-border)]">
          <span className="font-semibold text-[var(--color-text-main)]">Menu</span>
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-[var(--color-text-main)]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-4 pt-4 pb-2">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-bg-card)_88%,transparent),color-mix(in_oklab,var(--color-bg-main)_92%,transparent))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500 mb-2">Developer Docs</div>
            <div className="text-[15px] font-semibold text-[var(--color-text-main)] mb-1.5">Source-backed reference</div>
            <p className="text-[13px] leading-6 text-[var(--color-text-muted)]">
              Chain, wallets, OpenClaw, explorer, and ecosystem contracts in one place.
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto md:overflow-visible py-4 px-4 md:pr-4">
          {t.sections.map((section, idx) => (
            <div key={section.title} className={idx !== 0 ? 'mt-8' : ''}>
              <h4 className="text-[12px] font-semibold text-gray-500 uppercase tracking-[0.18em] mb-3 px-2">
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
                        className={`relative w-full flex items-center justify-between px-4 py-3 rounded-xl text-[15px] transition-all duration-200 ${
                          isActive 
                            ? 'bg-[linear-gradient(90deg,rgba(0,168,85,0.12),rgba(36,196,255,0.06))] text-[var(--color-text-main)] font-semibold border border-[rgba(0,168,85,0.18)] shadow-[0_12px_24px_rgba(0,168,85,0.10)]' 
                            : 'text-gray-400 hover:bg-[var(--color-bg-card)] hover:text-[var(--color-text-main)] border border-transparent'
                        }`}
                      >
                        {isActive && <span className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-[linear-gradient(180deg,var(--color-brand),var(--color-brand-purple))]"></span>}
                        {item}
                        {isActive && <div className="w-2 h-2 rounded-full bg-[var(--color-brand)] shadow-[0_0_0_4px_rgba(0,168,85,0.15)]"></div>}
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
