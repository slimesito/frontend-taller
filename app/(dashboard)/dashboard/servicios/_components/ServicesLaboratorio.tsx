import { Clock, CheckCircle2, User, ChevronRight, FlaskConical, Microscope, TestTube } from "lucide-react";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ServiceStatus } from "@/types/dashboard";

const servicesLab: {
  id: number;
  sample: string;
  patient: string;
  analysis: string;
  analyst: string;
  status: ServiceStatus;
  priority: string;
}[] = [
  { id: 1, sample: "MUE-2024-041", patient: "María Torres", analysis: "Hemograma Completo", analyst: "Dra. Pérez", status: "In Progress", priority: "High" },
  { id: 2, sample: "MUE-2024-042", patient: "Jorge Salinas", analysis: "Cultivo y Antibiograma", analyst: "Dr. Vega", status: "Pending", priority: "Normal" },
  { id: 3, sample: "MUE-2024-039", patient: "Lucía Méndez", analysis: "Perfil Lipídico", analyst: "Dra. Pérez", status: "Completed", priority: "Low" },
];

export function ServicesLaboratorio() {
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
