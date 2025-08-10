import { Switch, Route } from "wouter";
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
