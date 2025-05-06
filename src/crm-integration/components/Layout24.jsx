"use client";

import React from "react";

export function Layout24() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src="/images/crm-integration-hero.png"
                className="size-12"
                alt="Relume logo"
              />
            </div>
            <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Effortless Integration: Connect LeadAura with Your CRM in Minutes
            </h3>
            <p className="md:text-md">
              Our platform seamlessly integrates with top CRMs like Salesforce
              and HubSpot, ensuring a smooth setup process. Experience enhanced
              lead management with real-time updates that keep your sales
              efforts aligned and efficient.
            </p>
          </div>
          <div>
            <img
              src="/images/crm-integration-hero.png"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
