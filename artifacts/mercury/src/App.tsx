import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import Features from "@/pages/Features";
import Casinos from "@/pages/Casinos";
import Bonuses from "@/pages/Bonuses";
import SlotsNews from "@/pages/SlotsNews";
import GamblingNews from "@/pages/GamblingNews";
import BuyMercury from "@/pages/BuyMercury";
import NotFound from "@/pages/not-found";
import favicon from "@/assets/favicon.png";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/features" component={Features} />
        <Route path="/casinos" component={Casinos} />
        <Route path="/bonuses" component={Bonuses} />
        <Route path="/slots-news" component={SlotsNews} />
        <Route path="/gambling-news" component={GamblingNews} />
        <Route path="/buy" component={BuyMercury} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  useEffect(() => {
    const href = favicon;
    let link = document.querySelector<HTMLLinkElement>("link[rel='icon']");

    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }

    link.type = "image/png";
    link.href = href;

    let shortcut = document.querySelector<HTMLLinkElement>("link[rel='shortcut icon']");
    if (!shortcut) {
      shortcut = document.createElement("link");
      shortcut.rel = "shortcut icon";
      document.head.appendChild(shortcut);
    }
    shortcut.type = "image/png";
    shortcut.href = href;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
