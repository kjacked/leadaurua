"use client";

import React from "react";

export function Layout12() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Ensure Your CRM is Always in Sync with LeadAura
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              With LeadAura's Enhanced Data Sync, your CRM remains up-to-date in
              real-time. Experience seamless updates as leads progress through
              the sales cycle.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="/images/crm-sync-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Real-Time Updates
                </h6>
                <p>
                  Keep your sales team informed with accurate, timely data at
                  their fingertips.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="/images/crm-sync-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Data Accuracy
                </h6>
                <p>
                  Eliminate errors with precise data synchronization across all
                  your integrated platforms.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/crm-sync-icon.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
