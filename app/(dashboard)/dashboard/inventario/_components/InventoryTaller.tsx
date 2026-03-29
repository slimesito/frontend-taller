import { Search, Plus } from "lucide-react";
import { InventoryTable } from "./InventoryTable";

const inventoryTaller = [
  { id: 1, name: "Aceite Sintético 5W-30", sku: "OIL-001", category: "Lubricantes", stock: 45, minStock: 10, price: "$12.50", status: "In Stock" as const },
  { id: 2, name: "Filtro de Aire - Corolla", sku: "FIL-202", category: "Filtros", stock: 8, minStock: 15, price: "$18.00", status: "Low Stock" as const },
  { id: 3, name: "Pastillas de Freno Del.", sku: "BRK-405", category: "Frenos", stock: 20, minStock: 5, price: "$45.00", status: "In Stock" as const },
  { id: 4, name: "Bujía Iridium", sku: "SPK-101", category: "Encendido", stock: 0, minStock: 20, price: "$8.50", status: "Out of Stock" as const },
];

export function InventoryTaller() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-[#18191e] p-5 rounded-xl border border-white/5">
          <p className="text-[10px] uppercase tracking-widest text-[#abaab0] font-bold mb-1">Total Productos</p>
          <p className="text-2xl font-black text-white">1,420</p>
        </div>
        <div className="bg-[#18191e] p-5 rounded-xl border border-white/5">
          <p className="text-[10px] uppercase tracking-widest text-orange-400 font-bold mb-1">Bajo Stock</p>
          <p className="text-2xl font-black text-white">12</p>
        </div>
        <div className="bg-[#18191e] p-5 rounded-xl border border-white/5">
          <p className="text-[10px] uppercase tracking-widest text-[#80aeff] font-bold mb-1">Categorías</p>
          <p className="text-2xl font-black text-white">24</p>
        </div>
        <div className="bg-[#18191e] p-5 rounded-xl border border-white/5">
          <p className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold mb-1">Valor Total</p>
          <p className="text-2xl font-black text-white">$12,450</p>
        </div>
      </div>

      <div className="bg-[#18191e] rounded-xl p-4 mb-6 flex flex-wrap items-center gap-4 border border-white/5">
        <div className="relative flex-1 min-w-[300px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#abaab0] w-4 h-4" />
          <input
            className="w-full bg-[#0F1014] border-none rounded-xl pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-[#80aeff]/20 text-white placeholder:text-[#75757a]"
            placeholder="Buscar por nombre o SKU..."
            type="text"
          />
        </div>
        <button className="bg-gradient-to-br from-[#67a0ff] to-[#0072e3] text-white text-sm font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg active:scale-95 transition-all">
          <Plus className="w-4 h-4" /> Agregar Producto
        </button>
      </div>

      <InventoryTable data={inventoryTaller} />
    </>
  );
}
