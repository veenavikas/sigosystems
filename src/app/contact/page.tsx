import React from "react";
import { ContactForm } from "@/components/ui/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface-container-low">
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
            
            {/* Left side info */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-background mb-6 font-heading">
                Let's discuss the future.
              </h1>
              <p className="text-lg text-on-surface-variant mb-8">
                Request a technical brief, schedule a demo, or connect with our specialized teams across AIQU, GIS, ACADEMY, and LABS.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-on-background">Headquarters</h4>
                  <p className="text-on-surface-variant text-sm mt-1">
                    6th Floor, T Hub<br />
                    Plot No 1/C, Sy No 83/1, Raidurgam Panmaktha<br />
                    Hyderabad Knowledge City, Serilingampally<br />
                    Hyderabad, Telangana 500081
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-on-background">Contact</h4>
                  <p className="text-on-surface-variant text-sm mt-1">
                    contact@sigosys.com<br />
                    +919700144794
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right side form */}
            <div className="flex-1 w-full max-w-md">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
