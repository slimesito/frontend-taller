import { Search, Plus } from "lucide-react";
import { InventoryTable } from "./InventoryTable";

const inventoryLab = [
  { id: 1, name: "Reactivo A-12 (HCl 37%)", sku: "REA-001", category: "Ácidos", stock: 3, minStock: 10, price: "$22.00", status: "Low Stock" as const },
  { id: 2, name: "Buffer pH 7.0", sku: "BUF-202", category: "Soluciones", stock: 1, minStock: 5, price: "$15.00", status: "Low Stock" as const },
  { id: 3, name: "Tubos de Ensayo 15ml", sku: "TUB-305", category: "Cristalería", stock: 200, minStock: 50, price: "$0.80", status: "In Stock" as const },
  { id: 4, name: "Agar Mueller-Hinton", sku: "MED-101", category: "Medios de cultivo", stock: 0, minStock: 10, price: "$35.00", status: "Out of Stock" as const },
];

export function InventoryLaboratorio() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-[#18191e] p-5 rounded-xl border border-white/5">
          <p className="text-[10px] uppercase tracking-widest text-[#abaab0] font-bold mb-1">Total Reactivos</p>
          <p className="text-2xl font-black text-white">318</p>
        </div>
        <div className="bg-[#18191e] p-5 rounded-xl border border-white/5">
          <p className="text-[10px] uppercase tracking-widest text-orange-400 font-bold mb-1">Bajo Stock</p>
          <p className="text-2xl font-black text-white">7</p>
        </div>
        <div className="bg-[#18191e] p-5 rounded-xl border border-white/5">
          <p className="text-[10px] uppercase tracking-widest text-[#80aeff] font-bold mb-1">Categorías</p>
          <p className="text-2xl font-black text-white">11</p>
        </div>
        <div className="bg-[#18191e] p-5 rounded-xl border border-white/5">
          <p className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold mb-1">Valor Total</p>
          <p className="text-2xl font-black text-white">$8,920</p>
        </div>
      </div>

      <div className="bg-[#18191e] rounded-xl p-4 mb-6 flex flex-wrap items-center gap-4 border border-white/5">
        <div className="relative flex-1 min-w-[300px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#abaab0] w-4 h-4" />
          <input
            className="w-full bg-[#0F1014] border-none rounded-xl pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-[#80aeff]/20 text-white placeholder:text-[#75757a]"
            placeholder="Buscar por nombre o código..."
            type="text"
          />
        </div>
        <button className="bg-gradient-to-br from-[#2a8a6a] to-[#1e6b55] text-white text-sm font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg active:scale-95 transition-all">
          <Plus className="w-4 h-4" /> Agregar Reactivo
        </button>
      </div>

      <InventoryTable data={inventoryLab} />
    </>
  );
}
