"use client";
import { useState } from "react";
import {
  Wrench, Clock, CheckCircle2, Search,
  Plus, User, Car, ChevronRight,
  FlaskConical, Microscope, TestTube,
} from "lucide-react";
import { useTitle } from "@/hooks/useTitle";

type Tab = "taller" | "laboratorio";

const servicesTaller = [
  { id: 1, car: "Toyota Hilux (ABC-123)", owner: "Carlos Rodríguez", service: "Cambio de Aceite y Filtros", technician: "Marcos V.", status: "In Progress", priority: "High" },
  { id: 2, car: "Ford Fiesta (XYZ-789)", owner: "Ana Belén", service: "Revisión de Frenos", technician: "Luis P.", status: "Pending", priority: "Normal" },
  { id: 3, car: "Honda Civic (DEF-456)", owner: "Roberto G.", service: "Alineación y Balanceo", technician: "Marcos V.", status: "Completed", priority: "Low" },
];

const servicesLab = [
  { id: 1, sample: "MUE-2024-041", patient: "María Torres", analysis: "Hemograma Completo", analyst: "Dra. Pérez", status: "In Progress", priority: "High" },
  { id: 2, sample: "MUE-2024-042", patient: "Jorge Salinas", analysis: "Cultivo y Antibiograma", analyst: "Dr. Vega", status: "Pending", priority: "Normal" },
  { id: 3, sample: "MUE-2024-039", patient: "Lucía Méndez", analysis: "Perfil Lipídico", analyst: "Dra. Pérez", status: "Completed", priority: "Low" },
];

function StatusBadge({ status }: { status: string }) {
  const styles =
    status === "In Progress" ? "bg-[#1B84FF]/10 text-[#1B84FF]" :
    status === "Pending"     ? "bg-orange-500/10 text-orange-500" :
                               "bg-emerald-500/10 text-emerald-500";
  const label =
    status === "In Progress" ? "En proceso" :
    status === "Pending"     ? "Pendiente"  : "Completado";
  return (
    <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${styles}`}>
      {label}
    </div>
  );
}

function ServicesTaller() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#18191e] p-6 rounded-2xl border-l-4 border-orange-500 border-y-white/5 border-r-white/5">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500"><Clock className="w-6 h-6" /></div>
            <span className="text-2xl font-black text-white">05</span>
          </div>
          <p className="text-sm font-bold text-white">Pendientes</p>
          <p className="text-xs text-[#abaab0]">Esperando aprobación</p>
        </div>
        <div className="bg-[#18191e] p-6 rounded-2xl border-l-4 border-[#1B84FF] border-y-white/5 border-r-white/5">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-[#1B84FF]/10 rounded-lg text-[#1B84FF]"><Wrench className="w-6 h-6" /></div>
            <span className="text-2xl font-black text-white">08</span>
          </div>
          <p className="text-sm font-bold text-white">En Proceso</p>
          <p className="text-xs text-[#abaab0]">En bahía de trabajo</p>
        </div>
        <div className="bg-[#18191e] p-6 rounded-2xl border-l-4 border-emerald-500 border-y-white/5 border-r-white/5">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500"><CheckCircle2 className="w-6 h-6" /></div>
            <span className="text-2xl font-black text-white">12</span>
          </div>
          <p className="text-sm font-bold text-white">Finalizados</p>
          <p className="text-xs text-[#abaab0]">Listos para entrega</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white mb-4">Servicios Activos</h3>
        {servicesTaller.map((s) => (
          <div key={s.id} className="bg-[#18191e] p-5 rounded-2xl border border-white/5 hover:bg-[#1e1f25] transition-all cursor-pointer group">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0F1014] flex items-center justify-center text-[#80aeff] border border-white/5">
                  <Car className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{s.car}</h4>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="flex items-center gap-1 text-[10px] text-[#abaab0] font-medium">
                      <User className="w-3 h-3" /> {s.owner}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-[#abaab0] font-medium">
                      <Wrench className="w-3 h-3" /> {s.technician}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="px-3 py-1 bg-white/5 rounded-lg border border-white/5">
                  <p className="text-[10px] text-[#abaab0] font-bold uppercase tracking-tighter">Servicio</p>
                  <p className="text-xs text-white font-medium">{s.service}</p>
                </div>
                <StatusBadge status={s.status} />
                <ChevronRight className="text-[#abaab0] group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function ServicesLaboratorio() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#18191e] p-6 rounded-2xl border-l-4 border-orange-500 border-y-white/5 border-r-white/5">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500"><Clock className="w-6 h-6" /></div>
            <span className="text-2xl font-black text-white">04</span>
          </div>
          <p className="text-sm font-bold text-white">Pendientes</p>
          <p className="text-xs text-[#abaab0]">En espera de procesamiento</p>
        </div>
        <div className="bg-[#18191e] p-6 rounded-2xl border-l-4 border-[#2a8a6a] border-y-white/5 border-r-white/5">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-[#2a8a6a]/10 rounded-lg text-[#2a8a6a]"><Microscope className="w-6 h-6" /></div>
            <span className="text-2xl font-black text-white">06</span>
          </div>
          <p className="text-sm font-bold text-white">En Análisis</p>
          <p className="text-xs text-[#abaab0]">Siendo procesadas</p>
        </div>
        <div className="bg-[#18191e] p-6 rounded-2xl border-l-4 border-emerald-500 border-y-white/5 border-r-white/5">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500"><CheckCircle2 className="w-6 h-6" /></div>
            <span className="text-2xl font-black text-white">38</span>
          </div>
          <p className="text-sm font-bold text-white">Con Resultados</p>
          <p className="text-xs text-[#abaab0]">Listos para entregar</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white mb-4">Análisis Activos</h3>
        {servicesLab.map((s) => (
          <div key={s.id} className="bg-[#18191e] p-5 rounded-2xl border border-white/5 hover:bg-[#1e1f25] transition-all cursor-pointer group">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0F1014] flex items-center justify-center text-[#2a8a6a] border border-white/5">
                  <TestTube className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm font-mono">{s.sample}</h4>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="flex items-center gap-1 text-[10px] text-[#abaab0] font-medium">
                      <User className="w-3 h-3" /> {s.patient}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-[#abaab0] font-medium">
                      <FlaskConical className="w-3 h-3" /> {s.analyst}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="px-3 py-1 bg-white/5 rounded-lg border border-white/5">
                  <p className="text-[10px] text-[#abaab0] font-bold uppercase tracking-tighter">Análisis</p>
                  <p className="text-xs text-white font-medium">{s.analysis}</p>
                </div>
                <StatusBadge status={s.status} />
                <ChevronRight className="text-[#abaab0] group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default function ServicesPage() {
  useTitle("Servicios");
  const [activeTab, setActiveTab] = useState<Tab>("taller");

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            {activeTab === "taller" ? "Órdenes de Servicio" : "Órdenes de Análisis"}
          </h2>

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

        <button className={`text-white text-sm font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg active:scale-95 transition-all ${
          activeTab === "taller"
            ? "bg-[#1B84FF]"
            : "bg-[#1e6b55]"
        }`}>
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
