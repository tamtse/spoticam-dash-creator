import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ArtistDashboard from "./pages/ArtistDashboard";
import LabelDashboard from "./pages/LabelDashboard";
import CuratorDashboard from "./pages/CuratorDashboard";
import JournalistDashboard from "./pages/JournalistDashboard";
import ListenerDashboard from "./pages/ListenerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/artist" element={<ArtistDashboard />} />
          <Route path="/label" element={<LabelDashboard />} />
          <Route path="/curator" element={<CuratorDashboard />} />
          <Route path="/journalist" element={<JournalistDashboard />} />
          <Route path="/listener" element={<ListenerDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
