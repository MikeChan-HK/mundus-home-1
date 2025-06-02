import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CareersPageIndex from "./pages/CareersPage/Index";
import MobileNotSupported from "./pages/MobileNotSupported"; // Added import
import { useIsMobile } from "./hooks/use-mobile"; // Added import

const queryClient = new QueryClient();

const App = () => {
  const isMobile = useIsMobile();

  if (isMobile === undefined) {
    // Still determining device type, render nothing or a loading indicator
    return null;
  }

  if (isMobile) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/mobile-not-supported" element={<MobileNotSupported />} />
          <Route path="*" element={<Navigate to="/mobile-not-supported" replace />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/careers" element={<CareersPageIndex />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
