import FuelCalculator from "@/components/FuelCalculator";
import ThemeToggle from "@/components/ThemeToggle";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";

function App() {
  return (
    <>
      <ThemeToggle />
      <PWAInstallPrompt />
      <FuelCalculator />
    </>
  );
}

export default App;
