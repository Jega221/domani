// Components/ImportCalculator.jsx
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";

const CalculatorSection = () => {
  const [category, setCategory] = useState("general_goods");
  const [fob, setFob] = useState("");
  const [freight, setFreight] = useState("");
  const [insurance, setInsurance] = useState("");
  const [exchangeRate, setExchangeRate] = useState(1600);

  const DUTY_RATES = {
    electronics: 0.20,
    machinery: 0.10,
    textiles: 0.35,
    furniture: 0.20,
    auto_parts: 0.15,
    plastics: 0.10,
    general_goods: 0.15,
  };

  const result = (() => {
    const FOB = parseFloat(fob) || 0;
    const FREIGHT = parseFloat(freight) || 0;
    const INS = parseFloat(insurance) || 0;
    const RATE = parseFloat(exchangeRate) || 1;

    const CIF = (FOB + FREIGHT + INS) * RATE;

    const dutyRate = DUTY_RATES[category] || 0.15;
    const importDuty = CIF * dutyRate;

    const surcharge = importDuty * 0.07;
    const etls = CIF * 0.005;
    const ciss = FOB * RATE * 0.01;

    const vatBase = CIF + importDuty + surcharge + etls + ciss;
    const vat = vatBase * 0.075;

    const total = vatBase + vat;

    return { CIF, importDuty, surcharge, etls, ciss, vat, total };
  })();

  return (
    <section id="calculator" className="w-full py-20 bg-gray-50 flex justify-center px-4">
      <div className="w-full max-w-xl">
        
        <h3 className="text-3xl font-bold text-center mb-4">
          Customs Clearance Cost Calculator
        </h3>
        <p className="text-center text-gray-600 mb-8">
          Get an accurate estimate based on Nigerian customs import formulas.
        </p>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>Clearance Cost Calculator</CardTitle>
            <CardDescription>Enter your details below</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* category */}
            <div>
              <label className="font-medium text-sm">Product Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full mt-1 p-3 border rounded-lg"
              >
                {Object.entries(DUTY_RATES).map(([key, rate]) => (
                  <option key={key} value={key}>
                    {key.replace("_", " ").toUpperCase()} ({rate * 100}%)
                  </option>
                ))}
              </select>
            </div>

            {/* FOB */}
            <div>
              <label className="font-medium text-sm">FOB Value (USD)</label>
              <input
                type="number"
                value={fob}
                onChange={(e) => setFob(e.target.value)}
                className="w-full mt-1 p-3 border rounded-lg"
              />
            </div>

            {/* Freight */}
            <div>
              <label className="font-medium text-sm">Freight (USD)</label>
              <input
                type="number"
                value={freight}
                onChange={(e) => setFreight(e.target.value)}
                className="w-full mt-1 p-3 border rounded-lg"
              />
            </div>

            {/* Insurance */}
            <div>
              <label className="font-medium text-sm">Insurance (USD)</label>
              <input
                type="number"
                value={insurance}
                onChange={(e) => setInsurance(e.target.value)}
                className="w-full mt-1 p-3 border rounded-lg"
              />
            </div>

            {/* exchange */}
            <div>
              <label className="font-medium text-sm">Exchange Rate (₦/USD)</label>
              <input
                type="number"
                value={exchangeRate}
                onChange={(e) => setExchangeRate(e.target.value)}
                className="w-full mt-1 p-3 border rounded-lg"
              />
            </div>

            {/* results */}
            {fob ? (
              <div className="bg-white border rounded-lg p-4 space-y-2">
                <p className="flex justify-between text-sm"><span>CIF Value:</span> <span>₦{result.CIF.toLocaleString()}</span></p>
                <p className="flex justify-between text-sm"><span>Import Duty:</span> <span>₦{result.importDuty.toLocaleString()}</span></p>
                <p className="flex justify-between text-sm"><span>Surcharge:</span> <span>₦{result.surcharge.toLocaleString()}</span></p>
                <p className="flex justify-between text-sm"><span>ETLS:</span> <span>₦{result.etls.toLocaleString()}</span></p>
                <p className="flex justify-between text-sm"><span>CISS:</span> <span>₦{result.ciss.toLocaleString()}</span></p>
                <p className="flex justify-between text-base font-bold border-t pt-2">
                  <span>Total Estimated Cost:</span>
                  <span className="text-emerald-600">₦{result.total.toLocaleString()}</span>
                </p>
              </div>
            ) : (
              <div className="text-center text-gray-500 text-sm py-8">
                Enter values to see estimate
              </div>
            )}

            <Button className="w-full mt-3 bg-emerald-600 text-white hover:bg-emerald-700 cursor-pointer ">
              Request Detailed Quote
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CalculatorSection;
