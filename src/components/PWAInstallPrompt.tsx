import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const PWAInstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setOpen(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setOpen(false);
        setDeferredPrompt(null);
      }
    }
  };

  // Hide the prompt if already installed
  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("appinstalled", handler);
    return () => window.removeEventListener("appinstalled", handler);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Install Dino Juice Calc</DialogTitle>
        </DialogHeader>
        <p>
          For the best experience, install Dino Juice Calc to your device. Enjoy offline access and a fullscreen, app-like interface!
        </p>
        <DialogFooter>
          <Button onClick={handleInstall}>Install App</Button>
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Maybe Later
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PWAInstallPrompt;
