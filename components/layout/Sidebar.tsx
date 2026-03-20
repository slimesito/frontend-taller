"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, Users, ShieldCheck, History, 
  Key, LifeBuoy, LogOut, Plus 
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "User Management", icon: Users, href: "/dashboard/users" },
  { name: "Inventario", icon: ShieldCheck, href: "/dashboard/inventario" },
  { name: "Servicios", icon: History, href: "/dashboard/servicios" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 z-50 bg-[#0F1014] flex flex-col p-6 border-r border-white/5">
      <div className="mb-10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#67a0ff] to-[#0072e3] flex items-center justify-center shadow-lg">
          <LayoutDashboard className="text-white w-6 h-6" />
        </div>
        <div>
          <h1 className="text-lg font-black bg-gradient-to-br from-[#67a0ff] to-[#0072e3] bg-clip-text text-transparent">
            Taller Mecánico
          </h1>
          <p className="text-[10px] uppercase tracking-widest text-[#abaab0] font-bold">Taller Mecánico</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all active:translate-x-1 ${
                isActive 
                  ? "bg-[#18191e] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]" 
                  : "text-gray-500 hover:text-gray-300 hover:bg-[#18191e]/50"
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? "text-[#1B84FF]" : ""}`} />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-4">
        <button className="w-full py-3 bg-[#1e1f25] rounded-xl text-[#80aeff] font-bold hover:bg-[#24252b] transition-colors active:scale-95 flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" />
          Invitar Miembro
        </button>
        <div className="pt-4 border-t border-white/5 space-y-1">
          <div className="text-gray-500 hover:text-gray-300 flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-[#18191e]/50 rounded-xl transition-all">
            <LifeBuoy className="w-5 h-5" />
            <span className="text-sm font-medium">Soporte</span>
          </div>
          <Link href="/login" className="text-gray-500 hover:text-red-400 flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-red-500/5 rounded-xl transition-all">
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Salir</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}