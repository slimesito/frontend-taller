import { ServiceStatus } from "@/types/dashboard";

const statusConfig: Record<ServiceStatus, { label: string; className: string }> = {
  "In Progress": { label: "En proceso", className: "bg-[#1B84FF]/10 text-[#1B84FF]" },
  "Pending":     { label: "Pendiente",  className: "bg-orange-500/10 text-orange-500" },
  "Completed":   { label: "Completado", className: "bg-emerald-500/10 text-emerald-500" },
};

interface StatusBadgeProps {
  status: ServiceStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const { label, className } = statusConfig[status];
  return (
    <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${className}`}>
      {label}
    </div>
  );
}
