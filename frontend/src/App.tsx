import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "./components/layout/Navbar";
import Index from "./pages/Index";
import Inicio from "./pages/Inicio";
import Materiales from "./pages/Materiales";
import PuntosReciclaje from "./pages/PuntosReciclaje";
import Foro from "./pages/Foro";
import Perfil from "./pages/Perfil";
import Login from "./pages/auth/Login";
import Registro from "./pages/auth/Registro";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen bg-eco-bg">
            <Navbar />
            <main className="container mx-auto px-4 py-8 animate-fade-in">
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
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;
