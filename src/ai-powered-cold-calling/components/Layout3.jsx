"use client";

import React from "react";

export function Layout3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Unlock the Future of Sales with AI-Powered Cold Calling Solutions
            </h1>
            <p className="md:text-md">
              AI-powered cold calling revolutionizes how you engage with leads,
              making every interaction count. Our intelligent system analyzes
              behavior patterns to ensure your outreach is timely and effective.
            </p>
          </div>
          <div>
            <img
              src="/images/ai-driven_solutions_20250505_190808.png"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
