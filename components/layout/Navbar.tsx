"use client";

import { Search, Bell, Settings, HelpCircle, Menu } from "lucide-react";

interface NavbarProps {
  onMenuClick: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="fixed top-0 right-0 w-full lg:w-[calc(100%-288px)] h-16 z-40 bg-[#0F1014]/80 backdrop-blur-xl flex items-center justify-between px-4 sm:px-6 lg:px-8 shadow-[0px_4px_40px_rgba(0,0,0,0.3)] border-b border-white/5">
      {/* Left: hamburger (mobile) + search (desktop) */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 text-gray-400 hover:bg-[#24252b] rounded-lg transition-colors active:scale-95"
          aria-label="Abrir menú"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#abaab0] w-4 h-4" />
          <input
            className="bg-[#18191e] border-none rounded-xl pl-10 pr-4 py-2 text-sm w-48 lg:w-64 focus:ring-1 focus:ring-[#80aeff]/40 text-[#faf8fe] placeholder:text-[#75757a] transition-all"
            placeholder="Buscar recursos..."
            type="text"
          />
        </div>
      </div>

      {/* Right: icons + avatar */}
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          {[Bell, Settings, HelpCircle].map((Icon, i) => (
            <button key={i} className="p-2 text-gray-400 hover:bg-[#24252b] rounded-lg transition-colors active:scale-95">
              <Icon className="w-5 h-5" />
            </button>
          ))}
        </div>
        <div className="h-8 w-[1px] bg-white/5 mx-1 sm:mx-2"></div>
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-white leading-none">William Dev</p>
            <p className="text-[10px] text-[#1B84FF]">Super Admin</p>
          </div>
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center font-bold ring-2 ring-white/5 group-hover:ring-[#80aeff]/40 transition-all">
            W
          </div>
        </div>
      </div>
    </header>
  );
}
