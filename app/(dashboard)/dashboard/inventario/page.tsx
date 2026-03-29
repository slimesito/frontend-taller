"use client";

import { useState } from "react";
import { useTitle } from "@/hooks/useTitle";
import { AreaTabSwitcher } from "@/components/ui/AreaTabSwitcher";
import { InventoryTaller } from "./_components/InventoryTaller";
import { InventoryLaboratorio } from "./_components/InventoryLaboratorio";
import { AreaTab } from "@/types/dashboard";

export default function InventoryPage() {
  useTitle("Inventario");
  const [activeTab, setActiveTab] = useState<AreaTab>("taller");

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            {activeTab === "taller" ? "Stock de Repuestos" : "Stock de Reactivos"}
          </h2>
          <AreaTabSwitcher activeTab={activeTab} onChange={setActiveTab} />
        </div>
      </div>

      <div key={activeTab} className="animate-in fade-in duration-300">
        {activeTab === "taller" ? <InventoryTaller /> : <InventoryLaboratorio />}
      </div>
    </div>
  );
}
