import type { Metadata } from "next";
import { Search, ChevronRight, ChevronLeft, Plus } from "lucide-react";

export const metadata: Metadata = { title: "Usuarios" };

const users = [
  { id: 1, name: "William Smith", email: "w.smith@taller.com", role: "Administrator", status: "Active", joined: "Oct 12, 2023" },
  { id: 2, name: "Juan Pérez", email: "j.perez@mecanico.io", role: "Editor", status: "Active", joined: "Dec 01, 2023" },
  { id: 3, name: "Admin Guest", email: "admin@customer.net", role: "Customer", status: "Inactive", joined: "Nov 15, 2023" },
];

export default function UserManagementPage() {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white flex items-center gap-3">
            Usuarios
            <span className="bg-[#18191e] px-2.5 py-1 rounded-lg text-xs font-bold text-[#abaab0]">1,284 Total</span>
          </h2>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-[#18191e] rounded-xl p-4 mb-6 flex flex-wrap items-center gap-4 border border-white/5">
        <div className="relative flex-1 min-w-[300px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#abaab0] w-4 h-4" />
          <input className="w-full bg-[#0F1014] border-none rounded-xl pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-[#80aeff]/20 text-white placeholder:text-[#75757a]" placeholder="Buscar usuarios..." type="text" />
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-[#0F1014] text-white text-sm px-4 py-3 rounded-xl flex items-center gap-2 hover:bg-[#24252b] transition-colors border border-white/5">
            Roles <ChevronRight className="w-4 h-4 rotate-90" />
          </button>
          <button className="bg-gradient-to-br from-[#67a0ff] to-[#0072e3] text-white text-sm font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg hover:opacity-90 transition-all active:scale-95">
            <Plus className="w-4 h-4" /> Add User
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#18191e] rounded-xl overflow-hidden border border-white/5 shadow-2xl">
        <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-[#24252b]/30">
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-[#abaab0] border-b border-white/5">Usuario</th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-[#abaab0] border-b border-white/5">Rol</th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-[#abaab0] border-b border-white/5">Estado</th>
              <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-[#abaab0] border-b border-white/5">Fecha Ingreso</th>
              <th className="px-6 py-4 border-b border-white/5"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-[#24252b]/40 transition-colors group cursor-pointer">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#24252b] flex items-center justify-center font-bold text-[#80aeff]">
                      {user.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{user.name}</p>
                      <p className="text-xs text-[#abaab0]">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="bg-[#80aeff]/10 text-[#80aeff] text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${user.status === "Active" ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]"}`}></div>
                    <span className={`text-xs font-medium ${user.status === "Active" ? "text-emerald-500" : "text-orange-500"}`}>{user.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs text-[#abaab0] font-medium">{user.joined}</td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 rounded-lg text-[#abaab0] hover:bg-[#1B84FF]/10 hover:text-[#1B84FF] transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 flex items-center justify-between bg-[#24252b]/10 border-t border-white/5">
          <p className="text-xs text-[#abaab0]">Mostrando <span className="text-white font-bold">1-3</span> de <span className="text-white font-bold">1,284</span></p>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg bg-[#0F1014] text-[#abaab0] hover:text-white"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-8 h-8 rounded-lg bg-[#0072e3] text-white text-xs font-bold">1</button>
            <button className="p-2 rounded-lg bg-[#0F1014] text-[#abaab0] hover:text-white"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
