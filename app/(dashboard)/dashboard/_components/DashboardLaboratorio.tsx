import { TrendingUp, FlaskConical, ClipboardList, AlertTriangle, Microscope } from "lucide-react";

export function DashboardLaboratorio() {
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
