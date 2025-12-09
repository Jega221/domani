// File: components/WhyDomani.tsx
"use server";

import { Card, CardContent } from "./ui/card";
import { Clock, Shield, CheckCircle2, Truck, Gem, BadgeCent} from "lucide-react";

const WhyDomani = () => {
  return (
    <section className="bg-[#122741] px-6 sm:px-10 lg:px-[140px] py-20">
      <div className="max-w-6xl mx-auto">
        <h2
  className="text-3xl sm:text-4xl text-white font-bold mb-12 max-w-2xl leading-snug">
  Why Importers Choose Domani Transport
</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <Card className="benefit-card border-2 bg-white border-gray-200 hover:border-[#1e4d7b] transition-colors">
              <CardContent className="p-6">
                <Clock className="w-10 h-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">3 to 5 Days Clearance</h3>
                <p className="text-gray-600 leading-relaxed">Fast and efficient clearance for compliant shipments.</p>
              </CardContent>
            </Card>

            <Card className="benefit-card bg-white border-2 border-gray-200 hover:border-[#1e4d7b] transition-colors">
              <CardContent className="p-6">
                <Shield className="w-10 h-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Zero Hidden Charges</h3>
                <p className="text-gray-600 leading-relaxed">All fees explained upfront before clearance begins.</p>
              </CardContent>
            </Card>

            <Card className="benefit-card bg-white border-2 border-gray-200 hover:border-[#1e4d7b] transition-colors">
              <CardContent className="p-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Accurate HS Code Classification</h3>
                <p className="text-gray-600 leading-relaxed">Avoid unnecessary customs queries or fines.</p>
              </CardContent>
            </Card>

            <Card className="benefit-card bg-white border-2 border-gray-200 hover:border-[#1e4d7b] transition-colors">
              <CardContent className="p-6">
                <Gem className="w-10 h-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Dedicated Clearance Agent</h3>
                <p className="text-gray-600 leading-relaxed">One point of contact updating you via WhatsApp/SMS.</p>
              </CardContent>
            </Card>

            <Card className="benefit-card bg-white border-2 border-gray-200 hover:border-[#1e4d7b] transition-colors">
              <CardContent className="p-6">
                <BadgeCent className="w-10 h-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Avoid Expensive Demurrage</h3>
                <p className="text-gray-600 leading-relaxed">
                  We prepare documents before cargo arrives to prevent delays.
                </p>
              </CardContent>
            </Card>

            <Card className="benefit-card bg-white border-2 border-gray-200 hover:border-[#1e4d7b] transition-colors">
              <CardContent className="p-6">
                <Truck className="w-10 h-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">End-to-End Service</h3>
                <p className="text-gray-600 leading-relaxed">From port arrival to final delivery at your warehouse.</p>
              </CardContent>
            </Card>
          </div>
        </div>
    </section>
  );
};

export default WhyDomani;
