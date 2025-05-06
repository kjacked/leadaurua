"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header26() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                Seamless CRM Integration with LeadAura
              </h1>
              <p className="md:text-md">
                Effortlessly integrate LeadAura with your existing CRM system
                and supercharge your lead management. Our powerful integration
                keeps your leads and contacts aligned with your sales efforts.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title="Get Started">Get Started</Button>
                <Button title="Contact Us" variant="secondary">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/crm-hero-landscape.png"
              className="size-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
