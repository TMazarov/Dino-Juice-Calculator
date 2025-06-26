import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

// Define the available unit systems
const unitSystems = {
  metric: {
    distance: "km",
    fuel: "liters",
  },
  imperial: {
    distance: "miles",
    fuel: "gallons",
  },
};

// Utility functions for calculations
function calculateLPer100km(distance: number, fuel: number, unitSystem: "metric" | "imperial") {
  // Convert to metric if needed
  if (unitSystem === "imperial") {
    // 1 mile = 1.60934 km, 1 gallon = 3.78541 liters
    distance = distance * 1.60934;
    fuel = fuel * 3.78541;
  }
  if (distance === 0) return 0;
  return (fuel / distance) * 100;
}

function calculateMPG(distance: number, fuel: number, unitSystem: "metric" | "imperial") {
  // Convert to imperial if needed
  if (unitSystem === "metric") {
    // 1 km = 0.621371 miles, 1 liter = 0.264172 gallons
    distance = distance * 0.621371;
    fuel = fuel * 0.264172;
  }
  if (fuel === 0) return 0;
  return distance / fuel;
}

const FuelCalculator: React.FC = () => {
  // State for user input
  const [unitSystem, setUnitSystem] = useState<"metric" | "imperial">("metric");
  const [distance, setDistance] = useState("");
  const [fuel, setFuel] = useState("");
  // State for results
  const [lPer100km, setLPer100km] = useState<number | null>(null);
  const [mpg, setMPG] = useState<number | null>(null);
  // State for error messages
  const [error, setError] = useState<string | null>(null);

  // Reset inputs and results when unit system changes
  useEffect(() => {
    setDistance("");
    setFuel("");
    setLPer100km(null);
    setMPG(null);
    setError(null);
  }, [unitSystem]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dist = parseFloat(distance);
    const fuelAmt = parseFloat(fuel);
    if (isNaN(dist) || isNaN(fuelAmt) || dist <= 0 || fuelAmt <= 0) {
      setLPer100km(null);
      setMPG(null);
      setError("Please enter positive numbers for both fields.");
      return;
    }
    setError(null);
    setLPer100km(Number(calculateLPer100km(dist, fuelAmt, unitSystem).toFixed(2)));
    setMPG(Number(calculateMPG(dist, fuelAmt, unitSystem).toFixed(2)));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      {/* Card provides a clean, modern container */}
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Dino Juice Calc
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Unit system switcher */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className={unitSystem === "metric" ? "font-bold" : ""}>Metric</span>
            <Switch
              checked={unitSystem === "imperial"}
              onCheckedChange={(checked) => setUnitSystem(checked ? "imperial" : "metric")}
              id="unit-switch"
              aria-label="Switch between Metric and Imperial units"
            />
            <span className={unitSystem === "imperial" ? "font-bold" : ""}>Imperial</span>
          </div>

          {/* Error message */}
          {error && (
            <div className="mb-2 text-red-500 text-center" role="alert">
              {error}
            </div>
          )}

          {/* Main form */}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Distance Input */}
            <div>
              <Label htmlFor="distance" className="mb-1 block">
                Distance Traveled
              </Label>
              <div className="flex gap-2">
                <Input
                  id="distance"
                  type="number"
                  min="0"
                  step="any"
                  placeholder={`Enter distance in ${unitSystems[unitSystem].distance}`}
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  required
                  aria-describedby="distance-help"
                />
                <span className="self-center text-muted-foreground">
                  {unitSystems[unitSystem].distance}
                </span>
              </div>
            </div>

            {/* Fuel Input */}
            <div>
              <Label htmlFor="fuel" className="mb-1 block">
                Fuel Used
              </Label>
              <div className="flex gap-2">
                <Input
                  id="fuel"
                  type="number"
                  min="0"
                  step="any"
                  placeholder={`Enter fuel in ${unitSystems[unitSystem].fuel}`}
                  value={fuel}
                  onChange={(e) => setFuel(e.target.value)}
                  required
                  aria-describedby="fuel-help"
                />
                <span className="self-center text-muted-foreground">
                  {unitSystems[unitSystem].fuel}
                </span>
              </div>
            </div>

            {/* Calculate Button */}
            <Button type="submit" className="mt-2">
              Calculate
            </Button>
          </form>

          {/* Results */}
          {(lPer100km !== null || mpg !== null) && (
            <div className="mt-6 p-4 rounded-md bg-muted flex flex-col gap-2 text-center">
              <div>
                <span className="font-semibold">L/100km:</span>{" "}
                {lPer100km !== null ? lPer100km : "--"}
              </div>
              <div>
                <span className="font-semibold">MPG:</span>{" "}
                {mpg !== null ? mpg : "--"}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FuelCalculator; 