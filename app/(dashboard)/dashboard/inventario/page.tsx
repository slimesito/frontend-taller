import type { Metadata } from "next";
import { InventoryClient } from "./_components/InventoryClient";

export const metadata: Metadata = { title: "Inventario" };

export default function InventoryPage() {
  return <InventoryClient />;
}
