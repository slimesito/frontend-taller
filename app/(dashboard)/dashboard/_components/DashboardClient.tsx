"use client";

import { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";
import { AreaTabSwitcher } from "@/components/ui/AreaTabSwitcher";
import { DashboardTaller } from "./DashboardTaller";
import { DashboardLaboratorio } from "./DashboardLaboratorio";
import { AreaTab } from "@/types/dashboard";

export function DashboardClient() {
  const [activeTab, setActiveTab] = useState<AreaTab>("taller");

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-white tracking-tight">Dashboard</h2>
          <AreaTabSwitcher activeTab={activeTab} onChange={setActiveTab} />
        </div>

        <div className="flex items-center gap-3 bg-[#1e1f25] px-4 py-2.5 rounded-xl border border-white/5 shadow-sm">
          <Calendar className="text-[#80aeff] w-5 h-5" />
          <span className="text-sm font-medium text-white">Hoy, {new Date().toLocaleDateString()}</span>
          <ChevronDown className="text-[#abaab0] w-5 h-5 ml-2" />
        </div>
      </div>

      <div key={activeTab} className="animate-in fade-in duration-300">
        {activeTab === "taller" ? <DashboardTaller /> : <DashboardLaboratorio />}
      </div>
    </div>
  );
}
