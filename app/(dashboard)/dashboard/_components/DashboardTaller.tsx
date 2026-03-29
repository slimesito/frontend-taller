import { TrendingUp, Wrench, CircleDollarSign } from "lucide-react";

export function DashboardTaller() {
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
