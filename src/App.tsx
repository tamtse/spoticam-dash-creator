import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import EntityDetail from "./pages/EntityDetail";
import ArtistDashboard from "./pages/ArtistDashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import LabelDashboard from "./pages/LabelDashboard";
import CuratorDashboard from "./pages/CuratorDashboard";
import JournalistDashboard from "./pages/JournalistDashboard";
import ListenerDashboard from "./pages/ListenerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import WrappedCameroun2025 from "./pages/WrappedCameroun2025";
import Studio from "./pages/Studio";
import PlaylistDetail from "./pages/PlaylistDetail";
import StudioPitches from "./pages/StudioPitches";
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
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/entity/:type/:id" element={<EntityDetail />} />
          <Route path="/artist" element={<ArtistDashboard />} />
          <Route path="/manager" element={<ManagerDashboard />} />
          <Route path="/label" element={<LabelDashboard />} />
          <Route path="/curator" element={<CuratorDashboard />} />
          <Route path="/journalist" element={<JournalistDashboard />} />
          <Route path="/listener" element={<ListenerDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/wrapped-cameroun-2025" element={<WrappedCameroun2025 />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/studio/playlists/:id" element={<PlaylistDetail />} />
          <Route path="/studio/pitches" element={<StudioPitches />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
