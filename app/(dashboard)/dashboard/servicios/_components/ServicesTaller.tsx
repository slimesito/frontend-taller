import { Wrench, Clock, CheckCircle2, User, Car, ChevronRight } from "lucide-react";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ServiceStatus } from "@/types/dashboard";

const servicesTaller: {
  id: number;
  car: string;
  owner: string;
  service: string;
  technician: string;
  status: ServiceStatus;
  priority: string;
}[] = [
  { id: 1, car: "Toyota Hilux (ABC-123)", owner: "Carlos Rodríguez", service: "Cambio de Aceite y Filtros", technician: "Marcos V.", status: "In Progress", priority: "High" },
  { id: 2, car: "Ford Fiesta (XYZ-789)", owner: "Ana Belén", service: "Revisión de Frenos", technician: "Luis P.", status: "Pending", priority: "Normal" },
  { id: 3, car: "Honda Civic (DEF-456)", owner: "Roberto G.", service: "Alineación y Balanceo", technician: "Marcos V.", status: "Completed", priority: "Low" },
];

export function ServicesTaller() {
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
