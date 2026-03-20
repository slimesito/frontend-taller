"use client";
import React from "react";
import { 
  Search, Plus, Package, AlertTriangle, 
  Filter, MoreVertical, ChevronRight, ChevronLeft 
} from "lucide-react";
import { useTitle } from "@/hooks/useTitle";

const inventory = [
  { id: 1, name: "Aceite Sintético 5W-30", sku: "OIL-001", category: "Lubricantes", stock: 45, minStock: 10, price: "$12.50", status: "In Stock" },
  { id: 2, name: "Filtro de Aire - Corolla", sku: "FIL-202", category: "Filtros", stock: 8, minStock: 15, price: "$18.00", status: "Low Stock" },
  { id: 3, name: "Pastillas de Freno Del.", sku: "BRK-405", category: "Frenos", stock: 20, minStock: 5, price: "$45.00", status: "In Stock" },
  { id: 4, name: "Bujía Iridium", sku: "SPK-101", category: "Encendido", stock: 0, minStock: 20, price: "$8.50", status: "Out of Stock" },
];

export default function InventoryPage() {
  useTitle("Inventario");
  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center gap-2 text-xs font-medium text-[#abaab0] mb-2">
          <span className="hover:text-[#80aeff] cursor-pointer">Dashboard</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white">Inventario</span>
        </nav>
        <h2 className="text-3xl font-extrabold tracking-tight text-white">Stock de Repuestos</h2>
      </div>

      {/* Stats Bento */}
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

      {/* Filter Bar */}
      <div className="bg-[#18191e] rounded-xl p-4 mb-6 flex flex-wrap items-center gap-4 border border-white/5">
        <div className="relative flex-1 min-w-[300px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#abaab0] w-4 h-4" />
          <input className="w-full bg-[#0F1014] border-none rounded-xl pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-[#80aeff]/20 text-white placeholder:text-[#75757a]" placeholder="Buscar por nombre o SKU..." type="text"/>
        </div>
        <button className="bg-gradient-to-br from-[#67a0ff] to-[#0072e3] text-white text-sm font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg active:scale-95 transition-all">
          <Plus className="w-4 h-4" /> Agregar Producto
        </button>
      </div>

      {/* Inventory Table */}
      <div className="bg-[#18191e] rounded-xl overflow-hidden border border-white/5 shadow-2xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#24252b]/30">
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-[#abaab0] border-b border-white/5">Producto / SKU</th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-[#abaab0] border-b border-white/5">Categoría</th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-[#abaab0] border-b border-white/5">Stock</th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-[#abaab0] border-b border-white/5">Precio</th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-[#abaab0] border-b border-white/5">Estado</th>
              <th className="px-6 py-4 border-b border-white/5"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {inventory.map((item) => (
              <tr key={item.id} className="hover:bg-[#24252b]/40 transition-colors group">
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-bold text-white">{item.name}</p>
                    <p className="text-[10px] text-[#abaab0] font-mono uppercase">{item.sku}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs text-[#abaab0] bg-white/5 px-2 py-1 rounded-md">{item.category}</span>
                </td>
                <td className="px-6 py-4">
                  <p className={`text-sm font-bold ${item.stock <= item.minStock ? 'text-orange-400' : 'text-white'}`}>
                    {item.stock} <span className="text-[10px] text-[#abaab0] font-normal">unidades</span>
                  </p>
                </td>
                <td className="px-6 py-4 text-sm font-bold text-white">{item.price}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      item.status === 'In Stock' ? 'bg-emerald-500' : 
                      item.status === 'Low Stock' ? 'bg-orange-500' : 'bg-red-500'
                    }`}></div>
                    <span className={`text-[10px] font-bold uppercase ${
                      item.status === 'In Stock' ? 'text-emerald-500' : 
                      item.status === 'Low Stock' ? 'text-orange-500' : 'text-red-500'
                    }`}>{item.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 text-[#abaab0] hover:text-white"><MoreVertical className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}