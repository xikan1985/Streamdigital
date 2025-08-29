import { Switch, Route } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Features from "@/pages/features";
import Contact from "@/pages/contact";
import Plans from "@/pages/plans";
import Resources from "@/pages/resources";
import Booking from "@/pages/booking";
import BookingTest from "@/pages/booking-test";
import { Privacy } from "@/pages/privacy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Features} />
      <Route path="/home" component={Home} />
      <Route path="/features" component={Features} />
      <Route path="/contact" component={Contact} />
      <Route path="/plans" component={Plans} />
      <Route path="/resources" component={Resources} />
      <Route path="/booking" component={Booking} />
      <Route path="/booking-test" component={BookingTest} />
      <Route path="/privacy" component={Privacy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Load chat widget on all devices
    const script = document.createElement('script');
    script.src = 'https://widgets.leadconnectorhq.com/loader.js';
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
    script.setAttribute('data-widget-id', '68b1352d9f6f1f223342c5f5');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://widgets.leadconnectorhq.com/loader.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
