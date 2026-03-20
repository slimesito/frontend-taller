import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#0d0e12] min-h-screen">
      <Sidebar />
      <Navbar />
      
      {/* CAMBIO: De pt-16 a pt-24 para dar más aire bajo el Navbar */}
      <main className="ml-72 pt-24 p-8">
        <div className="max-w-[1600px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}