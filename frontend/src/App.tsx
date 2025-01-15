import { Toaster } from "@/components/ui/toaster.tsx";
import { Toaster as Sonner } from "@/components/ui/sonner.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar,.tsx";
import { AppSidebar } from "@/components/layout/AppSidebar.tsx";
import Navbar from "@/components/layout/Navbar.tsx";
import Index from "@/pages/Index.tsx";
import Inicio from "@/pages/Inicio.tsx";
import Materiales from "@/pages/Materiales.tsx";
import PuntosReciclaje from "@/pages/PuntosReciclaje.tsx";
import Foro from "@/pages/Foro.tsx";
import Perfil from "@/pages/Perfil.tsx";
import Login from "@/pages/auth/Login.tsx";
import Registro from "@/pages/auth/Registro.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full bg-eco-bg">
            <AppSidebar />
            <main className="flex-1">
              <Navbar />
              <div className="container mx-auto px-4 py-8 animate-fade-in">
                <SidebarTrigger className="mb-4" />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/inicio" element={<Inicio />} />
                  <Route path="/materiales" element={<Materiales />} />
                  <Route path="/puntos-reciclaje" element={<PuntosReciclaje />} />
                  <Route path="/foro" element={<Foro />} />
                  <Route path="/perfil" element={<Perfil />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/registro" element={<Registro />} />
                </Routes>
              </div>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;