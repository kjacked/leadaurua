"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header36() {
  return (
    <section
      id="relume"
      className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0"
    >
      <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:mr-20 lg:ml-[5vw] lg:justify-self-end">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          Discover the Power of AI-Driven Cold Calling
        </h1>
        <p className="md:text-md">
          Automate and optimize your cold calling process to engage leads more
          effectively. With LeadAura's AI technology, you can ensure every
          interaction is impactful and timely.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <Button title="Get Started">Get Started</Button>
          <Button title="Learn More" variant="secondary">
            Learn More
          </Button>
        </div>
      </div>
      <div>
        <img
          src="/images/ai-driven_solutions_20250505_190808.png"
          alt="Relume placeholder image"
          className="w-full object-cover lg:h-screen lg:max-h-[60rem]"
        />
      </div>
    </section>
  );
}
