import { MoreVertical } from "lucide-react";
import { StockStatus } from "@/types/dashboard";

interface InventoryItem {
  id: number;
  name: string;
  sku: string;
  category: string;
  stock: number;
  minStock: number;
  price: string;
  status: StockStatus;
}

const stockStatusStyles: Record<StockStatus, string> = {
  "In Stock":    "bg-emerald-500",
  "Low Stock":   "bg-orange-500",
  "Out of Stock":"bg-red-500",
};

const stockStatusTextStyles: Record<StockStatus, string> = {
  "In Stock":    "text-emerald-500",
  "Low Stock":   "text-orange-500",
  "Out of Stock":"text-red-500",
};

interface InventoryTableProps {
  data: InventoryItem[];
}

export function InventoryTable({ data }: InventoryTableProps) {
  return (
    <div className="bg-[#18191e] rounded-xl overflow-hidden border border-white/5 shadow-2xl">
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[640px]">
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
          {data.map((item) => (
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
                <p className={`text-sm font-bold ${item.stock <= item.minStock ? "text-orange-400" : "text-white"}`}>
                  {item.stock} <span className="text-[10px] text-[#abaab0] font-normal">unidades</span>
                </p>
              </td>
              <td className="px-6 py-4 text-sm font-bold text-white">{item.price}</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${stockStatusStyles[item.status]}`}></div>
                  <span className={`text-[10px] font-bold uppercase ${stockStatusTextStyles[item.status]}`}>
                    {item.status}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="p-2 text-[#abaab0] hover:text-white">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
