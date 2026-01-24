import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ZanzibarTours from "./pages/ZanzibarTours";
import TanzaniaSafaris from "./pages/TanzaniaSafaris";
import Activities from "./pages/Activities";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TourDetail from "./pages/TourDetail";
import BookTour from "./pages/BookTour";
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/zanzibar-tours" element={<ZanzibarTours />} />
              <Route path="/tanzania-safaris" element={<TanzaniaSafaris />} />
              <Route path="/activities" element={<Activities />} />

              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/tour/:tourId" element={<TourDetail />} />
              <Route path="/book/:tourId" element={<BookTour />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
