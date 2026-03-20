"use client";

import { useEffect } from "react";

export function useTitle(title: string) {
  useEffect(() => {
    // Cambia el título y le añade el sufijo de tu app
    document.title = `${title} | Taller`;
  }, [title]);
}