"use client";

import { AreaTab } from "@/types/dashboard";

interface AreaTabSwitcherProps {
  activeTab: AreaTab;
  onChange: (tab: AreaTab) => void;
}

export function AreaTabSwitcher({ activeTab, onChange }: AreaTabSwitcherProps) {
  return (
    <div className="flex items-center gap-1 bg-[#1e1f25] p-1 rounded-xl border border-white/5 w-fit">
      <button
        onClick={() => onChange("taller")}
        className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
          activeTab === "taller"
            ? "bg-[#2a2b33] text-white shadow-sm"
            : "text-[#abaab0] hover:text-white"
        }`}
      >
        Área de Taller
      </button>
      <button
        onClick={() => onChange("laboratorio")}
        className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
          activeTab === "laboratorio"
            ? "bg-[#2a2b33] text-white shadow-sm"
            : "text-[#abaab0] hover:text-white"
        }`}
      >
        Área de Laboratorio
      </button>
    </div>
  );
}
