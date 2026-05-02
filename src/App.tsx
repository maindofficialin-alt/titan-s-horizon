import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import AiEdge from "./pages/AiEdge.tsx";
import Logistics from "./pages/Logistics.tsx";
import Energy from "./pages/Energy.tsx";
import Evs from "./pages/Evs.tsx";
import CinematicMedia from "./pages/CinematicMedia.tsx";
import Governance from "./pages/Governance.tsx";
import Environment from "./pages/Environment.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/service/ai-edge" element={<AiEdge />} />
        <Route path="/service/logistics" element={<Logistics />} />
        <Route path="/service/energy" element={<Energy />} />
        <Route path="/service/evs" element={<Evs />} />
        <Route path="/service/cinematic-media" element={<CinematicMedia />} />
        <Route path="/service/governance" element={<Governance />} />
        <Route path="/service/environment" element={<Environment />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
