"use client";

import React, { useState } from "react";
import { useTitle } from "@/hooks/useTitle";
import {
  Calendar,
  ChevronDown,
  TrendingUp,
  CircleDollarSign,
  Wrench,
  FlaskConical,
  ClipboardList,
  Microscope,
  AlertTriangle,
} from "lucide-react";

type Tab = "taller" | "laboratorio";

function DashboardTaller() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Widget: Ventas de Hoy */}
      <div className="col-span-12 lg:col-span-4 bg-[#18191e] rounded-xl p-6 flex flex-col justify-between min-h-[220px] border border-white/5 shadow-xl">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-white">Ventas de Hoy</h3>
            <span className="bg-[#67a0ff]/20 text-[#67a0ff] text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +12.5%
            </span>
          </div>
          <div className="text-5xl font-black text-white leading-none tracking-tighter">$1,250.00</div>
        </div>

        <div className="mt-8">
          <div className="flex h-2 rounded-full overflow-hidden bg-[#24252b] mb-4">
            <div className="bg-[#0072e3] w-[60%]"></div>
            <div className="bg-[#67a0ff] w-[25%]"></div>
            <div className="bg-[#abaab0]/30 w-[15%]"></div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#0072e3]"></div>
              <span className="text-[11px] text-[#abaab0]">Servicios</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#67a0ff]"></div>
              <span className="text-[11px] text-[#abaab0]">Repuestos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Principal de Acción */}
      <div className="col-span-12 lg:col-span-8 bg-gradient-to-br from-[#1B84FF] to-[#005dbb] rounded-xl p-8 relative overflow-hidden flex items-center min-h-[280px] shadow-2xl">
        <div className="absolute right-[-10%] top-[-20%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-md">
          <h3 className="text-3xl font-extrabold text-white leading-tight mb-4">
            Gestión de Taller Mecánico
          </h3>
          <p className="text-white/80 mb-6 text-sm leading-relaxed">
            Controla tu inventario, ventas y servicios desde un solo lugar.
            Optimiza el flujo de trabajo de tus mecánicos y mejora la atención al cliente.
          </p>
          <div className="flex gap-3">
            <button className="inline-flex items-center gap-2 bg-white text-[#0072e3] px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-opacity-90 transition-all active:scale-95 shadow-lg">
              <Wrench className="w-4 h-4" />
              Nueva Orden
            </button>
            <button className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-white/20 transition-all active:scale-95">
              <CircleDollarSign className="w-4 h-4" />
              Facturar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardLaboratorio() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Widget: Muestras del Día */}
      <div className="col-span-12 lg:col-span-4 bg-[#18191e] rounded-xl p-6 flex flex-col justify-between min-h-[220px] border border-white/5 shadow-xl">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-white">Muestras del Día</h3>
            <span className="bg-[#67a0ff]/20 text-[#67a0ff] text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +8.3%
            </span>
          </div>
          <div className="text-5xl font-black text-white leading-none tracking-tighter">48</div>
          <p className="text-[#abaab0] text-xs mt-2">muestras procesadas</p>
        </div>

        <div className="mt-8">
          <div className="flex h-2 rounded-full overflow-hidden bg-[#24252b] mb-4">
            <div className="bg-[#0072e3] w-[50%]"></div>
            <div className="bg-[#67a0ff] w-[30%]"></div>
            <div className="bg-[#abaab0]/30 w-[20%]"></div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#0072e3]"></div>
              <span className="text-[11px] text-[#abaab0]">Completadas</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#67a0ff]"></div>
              <span className="text-[11px] text-[#abaab0]">En proceso</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#abaab0]/30"></div>
              <span className="text-[11px] text-[#abaab0]">Pendientes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Principal Laboratorio */}
      <div className="col-span-12 lg:col-span-8 bg-gradient-to-br from-[#1e6b55] to-[#0d3d30] rounded-xl p-8 relative overflow-hidden flex items-center min-h-[280px] shadow-2xl">
        <div className="absolute right-[-10%] top-[-20%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-md">
          <h3 className="text-3xl font-extrabold text-white leading-tight mb-4">
            Gestión de Laboratorio
          </h3>
          <p className="text-white/80 mb-6 text-sm leading-relaxed">
            Administra análisis, muestras y resultados desde un solo panel.
            Mantén el control de equipos y reactivos con precisión.
          </p>
          <div className="flex gap-3">
            <button className="inline-flex items-center gap-2 bg-white text-[#1e6b55] px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-opacity-90 transition-all active:scale-95 shadow-lg">
              <FlaskConical className="w-4 h-4" />
              Nueva Muestra
            </button>
            <button className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-white/20 transition-all active:scale-95">
              <ClipboardList className="w-4 h-4" />
              Ver Resultados
            </button>
          </div>
        </div>
      </div>

      {/* Widget: Alertas de Reactivos */}
      <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#18191e] rounded-xl p-6 border border-white/5 shadow-xl">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <h3 className="text-sm font-bold text-white">Alertas de Stock</h3>
        </div>
        <div className="space-y-3">
          {[
            { name: "Reactivo A-12", stock: "3 unidades", level: 15 },
            { name: "Buffer pH 7.0", stock: "1 frasco", level: 8 },
            { name: "Solución salina", stock: "5 litros", level: 30 },
          ].map((item) => (
            <div key={item.name} className="flex items-center justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-white truncate">{item.name}</p>
                <p className="text-[10px] text-[#abaab0]">{item.stock}</p>
              </div>
              <div className="flex-shrink-0 w-20">
                <div className="h-1.5 rounded-full bg-[#24252b] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-amber-400"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Widget: Equipos */}
      <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#18191e] rounded-xl p-6 border border-white/5 shadow-xl">
        <div className="flex items-center gap-2 mb-4">
          <Microscope className="w-4 h-4 text-[#80aeff]" />
          <h3 className="text-sm font-bold text-white">Estado de Equipos</h3>
        </div>
        <div className="space-y-3">
          {[
            { name: "Centrífuga #1", status: "Operativo", ok: true },
            { name: "Espectrofotómetro", status: "En mantenimiento", ok: false },
            { name: "Microscopio Óptico", status: "Operativo", ok: true },
          ].map((eq) => (
            <div key={eq.name} className="flex items-center justify-between gap-2">
              <p className="text-xs font-medium text-white">{eq.name}</p>
              <span
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                  eq.ok
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "bg-amber-500/20 text-amber-400"
                }`}
              >
                {eq.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DashboardHome() {
  useTitle("Dashboard");
  const [activeTab, setActiveTab] = useState<Tab>("taller");

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-white tracking-tight">Dashboard</h2>

          {/* Tab Switcher */}
          <div className="flex items-center gap-1 bg-[#1e1f25] p-1 rounded-xl border border-white/5 w-fit">
            <button
              onClick={() => setActiveTab("laboratorio")}
              className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === "laboratorio"
                  ? "bg-[#2a2b33] text-white shadow-sm"
                  : "text-[#abaab0] hover:text-white"
              }`}
            >
              Área de Laboratorio
            </button>
            <button
              onClick={() => setActiveTab("taller")}
              className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === "taller"
                  ? "bg-[#2a2b33] text-white shadow-sm"
                  : "text-[#abaab0] hover:text-white"
              }`}
            >
              Área de Taller
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-[#1e1f25] px-4 py-2.5 rounded-xl border border-white/5 shadow-sm">
          <Calendar className="text-[#80aeff] w-5 h-5" />
          <span className="text-sm font-medium text-white">Hoy, {new Date().toLocaleDateString()}</span>
          <ChevronDown className="text-[#abaab0] w-5 h-5 ml-2" />
        </div>
      </div>

      {/* Dashboard Content */}
      <div
        key={activeTab}
        className="animate-in fade-in duration-300"
      >
        {activeTab === "taller" ? <DashboardTaller /> : <DashboardLaboratorio />}
      </div>
    </div>
  );
}
