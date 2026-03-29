import type { Metadata } from "next";
import { ServicesClient } from "./_components/ServicesClient";

export const metadata: Metadata = { title: "Servicios" };

export default function ServicesPage() {
  return <ServicesClient />;
}
