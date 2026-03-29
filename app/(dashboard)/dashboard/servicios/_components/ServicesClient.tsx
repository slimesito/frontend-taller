"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AreaTabSwitcher } from "@/components/ui/AreaTabSwitcher";
import { ServicesTaller } from "./ServicesTaller";
import { ServicesLaboratorio } from "./ServicesLaboratorio";
import { AreaTab } from "@/types/dashboard";

export function ServicesClient() {
  const [activeTab, setActiveTab] = useState<AreaTab>("taller");

  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            {activeTab === "taller" ? "Órdenes de Servicio" : "Órdenes de Análisis"}
          </h2>
          <AreaTabSwitcher activeTab={activeTab} onChange={setActiveTab} />
        </div>

        <button
          className={`text-white text-sm font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg active:scale-95 transition-all ${
            activeTab === "taller" ? "bg-[#1B84FF]" : "bg-[#1e6b55]"
          }`}
        >
          <Plus className="w-4 h-4" />
          {activeTab === "taller" ? "Nueva Orden" : "Nueva Muestra"}
        </button>
      </div>

      <div key={activeTab} className="animate-in fade-in duration-300">
        {activeTab === "taller" ? <ServicesTaller /> : <ServicesLaboratorio />}
      </div>
    </div>
  );
}
