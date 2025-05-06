"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header15() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-y-8 lg:mb-20 lg:gap-x-20 lg:gap-y-16">
          <div>
            <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">
              Lead Automation that Works. Simplified and Streamlined.
            </h1>
          </div>
          <div>
            <p className="md:text-md">
              You need to simplify your lead management, but are you doing it in
              the smartest way possible? With Laura, managing leads is no longer
              a tedious process.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Start Your Free Trial Now">
                Start Your Free Trial Now
              </Button>
              <Button title="Book a Demo Today" variant="secondary">
                Book a Demo Today
              </Button>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/images/manual_management_20250505_190746.png"
            className="w-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
