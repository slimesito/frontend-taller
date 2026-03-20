"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="bottom-right"
      theme="dark"
      // Expandimos el toast por defecto para que se vea como el de ReUI
      expand={false} 
      toastOptions={{
        classNames: {
          // Estilos base de la tarjeta (fondo oscuro de Metronic, bordes suaves)
          toast: "group bg-[#121318] border border-white/10 text-white shadow-2xl rounded-xl p-4 flex gap-3 w-full",
          // Estilo del título
          title: "text-sm font-bold text-white",
          // Estilo de la descripción
          description: "text-xs text-[#abaab0] mt-1",
          // Contenedor del ícono
          icon: "mt-0.5 shrink-0",
          // Variantes para cuando es éxito o error
          success: "border-[#67a0ff]/30", // Un borde azulado/verde según prefieras
          error: "border-[#ff716c]/30",   // Borde rojizo para errores
        },
      }}
    />
  );
}