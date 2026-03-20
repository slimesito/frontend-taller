"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Info, ShieldCheck, CircleCheckIcon, CircleX } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Login hardcodeado para pruebas
    if (email === "admin@gmail.com" && password === "pass123") {
      toast.success("Login Exitoso", {
        description: "Bienvenido de vuelta al sistema.",
        icon: <CircleCheckIcon className="text-primary w-5 h-5" />,
      });

      // Redirigir al Dashboard después de 1 segundo para que se vea la alerta
      setTimeout(() => router.push("/dashboard"), 1000);
    } else {
      toast.error("Error de Autenticación", {
        description: "El correo o la contraseña son incorrectos.",
        icon: <CircleX className="text-error w-5 h-5" />,
      });
    }
  };

  return (
    <main className="flex h-screen w-full font-body antialiased overflow-hidden bg-surface">
      {/* Side A: Form Section */}
      <section className="w-full lg:w-[45%] h-full flex flex-col items-center justify-center p-6 sm:p-8 lg:px-16 xl:px-24 pb-16 lg:pb-24 bg-surface-container-lowest z-10 relative">
        <div className="w-full max-w-[400px] space-y-6 md:space-y-8">
          <div className="lg:hidden text-center sm:text-left">
            <span className="text-3xl font-extrabold tracking-tighter text-slate-900">
              Taller Mecánico
            </span>
          </div>

          <div className="space-y-2 md:space-y-3">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-on-surface">
              Iniciar Sesión
            </h1>
            <div className="flex items-center gap-2 px-4 py-2.5 md:py-3 bg-primary-fixed rounded-xl border border-primary/10">
              <Info className="text-primary w-5 h-5 shrink-0" />
              <p className="text-xs md:text-sm font-medium text-on-primary-fixed-variant">
                Demo use: admin@gmail.com / pass123
              </p>
            </div>
          </div>

          <div className="space-y-5 md:space-y-6">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-2.5 md:py-3 px-4 bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/20 rounded-xl transition-all duration-200 group"
            >
              <Image
                alt="Google Logo"
                src="/icons/google-icon-logo.svg"
                width={18}
                height={18}
                priority
              />
              <span className="text-sm font-semibold text-on-surface-variant group-hover:text-on-surface">
                Inicia sesión con Google
              </span>
            </button>

            <div className="relative flex items-center py-1">
              <div className="flex-grow border-t border-outline-variant/30"></div>
              <span className="flex-shrink mx-4 text-[10px] md:text-xs font-bold tracking-widest text-outline uppercase">
                O
              </span>
              <div className="flex-grow border-t border-outline-variant/30"></div>
            </div>

            <form className="space-y-4 md:space-y-5" onSubmit={handleLogin}>
              <div className="space-y-1.5">
                <label
                  className="block text-[10px] md:text-xs font-semibold tracking-wider text-on-surface-variant uppercase ml-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-4 py-2.5 md:py-3 bg-surface-container-lowest border border-outline-variant/30 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all duration-200 text-sm"
                  id="email"
                  placeholder="name@company.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center ml-1">
                  <label
                    className="block text-[10px] md:text-xs font-semibold tracking-wider text-on-surface-variant uppercase"
                    htmlFor="password"
                  >
                    Contraseña
                  </label>
                  <Link
                    href="#"
                    className="text-[10px] md:text-xs font-bold text-primary hover:text-primary-container transition-colors"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
                <input
                  className="w-full px-4 py-2.5 md:py-3 bg-surface-container-lowest border border-outline-variant/30 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all duration-200 text-sm"
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center gap-2 px-1 pt-1">
                <input
                  className="w-3.5 h-3.5 md:w-4 md:h-4 rounded border-outline-variant text-primary focus:ring-primary"
                  id="remember"
                  type="checkbox"
                />
                <label
                  className="text-xs md:text-sm font-medium text-on-surface-variant select-none"
                  htmlFor="remember"
                >
                  Recordarme
                </label>
              </div>

              <button
                className="w-full py-3 md:py-3.5 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-xl ambient-shadow hover:opacity-90 active:scale-[0.98] transition-all duration-200 mt-2"
                type="submit"
              >
                Iniciar Sesión
              </button>
            </form>
          </div>

          <div className="pt-2 md:pt-4 text-center">
            <p className="text-xs md:text-sm font-medium text-on-surface-variant">
              Eres nuevo aquí?
              <Link
                href="#"
                className="text-primary font-bold ml-1 hover:underline"
              >
                Crea tu Cuenta
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Side B: Dashboard Preview */}
      <section className="hidden lg:flex w-[55%] h-full bg-surface-container-high relative overflow-hidden flex-col items-center justify-center p-8 xl:p-20">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 w-full max-w-2xl text-center space-y-8 xl:space-y-12">
          <div className="space-y-4 xl:space-y-6">
            <div className="inline-flex items-center justify-center p-3 xl:p-4 bg-surface-container-lowest rounded-2xl ambient-shadow mb-2 xl:mb-4">
              <span className="text-3xl xl:text-4xl font-extrabold tracking-tighter text-slate-900">
                Taller Mecánico
              </span>
            </div>
            <h2 className="text-4xl xl:text-5xl font-extrabold tracking-tight text-on-surface leading-tight">
              Gestión <br />
              <span className="text-primary">Inventario y Servicios.</span>
            </h2>
            <p className="text-base xl:text-lg text-on-surface-variant max-w-lg mx-auto leading-relaxed">
              Conecta tu taller mecánico con servicios de inventario y gestión
              de clientes. Soluciones robustas para mantenimiento, repuestos y
              control de órdenes.
            </p>
          </div>

          <div className="relative mt-8 xl:mt-12 w-full max-w-xl mx-auto">
            <div className="ambient-shadow rounded-2xl overflow-hidden border border-outline-variant/20 bg-surface-container-lowest translate-y-4 xl:translate-y-8 scale-100 xl:scale-105">
              <div className="bg-surface-container flex items-center px-4 py-2.5 xl:py-3 gap-2 border-b border-outline-variant/10">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 xl:w-3 xl:h-3 rounded-full bg-error/40"></div>
                  <div className="w-2.5 h-2.5 xl:w-3 xl:h-3 rounded-full bg-tertiary/20"></div>
                  <div className="w-2.5 h-2.5 xl:w-3 xl:h-3 rounded-full bg-primary/20"></div>
                </div>
                <div className="mx-auto w-1/3 h-3 xl:h-4 bg-surface-container-highest rounded-full"></div>
              </div>

              <div className="p-4 xl:p-6 grid grid-cols-12 gap-3 xl:gap-4 h-48 xl:h-64 bg-surface-container-low">
                <div className="col-span-3 space-y-2 xl:space-y-3">
                  <div className="h-6 xl:h-8 w-full bg-surface-container-highest rounded-lg"></div>
                  <div className="h-3 xl:h-4 w-3/4 bg-outline-variant/20 rounded-md"></div>
                  <div className="h-3 xl:h-4 w-1/2 bg-outline-variant/20 rounded-md"></div>
                </div>
                <div className="col-span-9 bg-surface-container-lowest rounded-xl p-3 xl:p-4 shadow-sm border border-outline-variant/10">
                  <div className="flex justify-between items-center mb-4 xl:mb-6">
                    <div className="h-4 xl:h-6 w-24 xl:w-32 bg-primary/5 rounded-md"></div>
                    <div className="h-4 xl:h-6 w-4 xl:w-6 bg-surface-container-high rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 xl:gap-3">
                    <div className="h-16 xl:h-24 bg-surface-container-low rounded-lg"></div>
                    <div className="h-16 xl:h-24 bg-surface-container-low rounded-lg"></div>
                    <div className="h-16 xl:h-24 bg-surface-container-low rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 xl:-right-8 top-1/2 glass-effect ambient-shadow p-4 xl:p-6 rounded-2xl border border-white/40 flex items-center gap-3 xl:gap-4 z-20">
              <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="text-primary w-5 h-5 xl:w-6 xl:h-6" />
              </div>
              <div className="text-left">
                <p className="text-[10px] xl:text-xs font-bold text-outline uppercase tracking-widest">
                  Status
                </p>
                <p className="text-xs xl:text-sm font-extrabold text-on-surface">
                  Calidad y Seguridad
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <footer className="fixed bottom-0 w-full hidden lg:block pointer-events-none z-50 bg-gradient-to-t from-surface to-transparent pt-4">
        <div className="flex flex-row justify-between items-center px-12 py-6 w-full backdrop-blur-sm">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-outline/50 pointer-events-auto pl-12">
            © 2024 Taller Mecánico Workspace. Precision meets prestige.
          </p>
          <div className="flex gap-8 pointer-events-auto">
            <Link
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-outline/50 hover:text-primary transition-colors"
              href="#"
            >
              Terms
            </Link>
            <Link
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-outline/50 hover:text-primary transition-colors"
              href="#"
            >
              Privacy
            </Link>
            <Link
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-outline/50 hover:text-primary transition-colors"
              href="#"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
