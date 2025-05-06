"use client";

import { Button, Card } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout380() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Efficiency</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Revolutionize Your Outreach
          </h1>
          <p className="md:text-md">
            Transform your lead engagement with AI-driven solutions.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <Card className="flex flex-col sm:col-span-2">
              <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8 lg:p-12">
                <div>
                  <p className="mb-2 font-semibold">Automation</p>
                  <h2 className="rb-5 mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    How Our AI Works
                  </h2>
                  <p>
                    Our AI integrates with your CRM for optimized calling
                    strategies and personalized lead interactions.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Learn More" variant="secondary">
                    Learn More
                  </Button>
                  <Button
                    title="Demo"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Demo
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img
                  src="/images/ai-driven_solutions_20250505_190808.png"
                  alt="Relume placeholder image 2"
                />
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <img
                      src="/images/ai-driven_solutions_20250505_190808.png"
                      alt="Relume logo 1"
                      className="size-12"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Key Features of Our System
                  </h3>
                  <p>
                    Experience seamless integration and enhanced lead
                    engagement.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Explore"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Explore
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <img
                      src="/images/ai-driven_solutions_20250505_190808.png"
                      alt="Relume logo 2"
                      className="size-12"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Key Features of Our System
                  </h3>
                  <p>
                    Experience seamless integration and enhanced lead
                    engagement.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Explore"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Explore
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <Card className="flex flex-col sm:col-span-2 sm:grid sm:auto-cols-fr sm:grid-cols-2">
              <div className="flex size-full flex-col items-center justify-center self-start">
                <img
                  src="/images/ai-driven_solutions_20250505_190808.png"
                  alt="Relume placeholder image 1"
                />
              </div>
              <div className="block flex-col justify-center p-6 sm:flex">
                <p className="mb-2 font-semibold">Intelligence</p>
                <h2 className="mb-2 text-xl font-bold md:text-2xl">
                  Continuous Learning and Improvement
                </h2>
                <p>Our AI adapts to optimize every call interaction.</p>
                <div className="mt-5 md:mt-6">
                  <Button
                    title="Contact"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="flex flex-col sm:col-span-2">
              <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8 lg:p-12">
                <div>
                  <p className="mb-2 font-semibold">Engagement</p>
                  <h2 className="rb-5 mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    Ready to Transform Your Strategy?
                  </h2>
                  <p>
                    Schedule your free demo today and see the results for
                    yourself!
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Sign Up" variant="secondary">
                    Sign Up
                  </Button>
                  <Button
                    title="Join"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Join
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img
                  src="/images/ai-driven_solutions_20250505_190808.png"
                  alt="Relume placeholder image 2"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
