"use client";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "/logo.png"; // Ensure this path is correct
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden py-12 md:py-20"
      aria-labelledby="hero-heading"
    >
      {/* Background Logo with Low Opacity */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-5 dark:opacity-0"
        style={{ backgroundImage: `url(${logoImage})` }}
        aria-hidden="true"
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[10%] left-[5%] w-80 h-80 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob" />
        <div className="absolute top-[30%] right-[10%] w-96 h-96 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-[20%] left-[20%] w-72 h-72 bg-pink-200 dark:bg-pink-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
          {/* Tagline */}
          <div className="inline-flex mt-11 items-center justify-center w-full px-8 py-5 rounded-full mb-10 animate-fade-in border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-md">
            <Sparkles className="w-7 h-7 text-indigo-500 dark:text-indigo-400 mr-3" />
            <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              Building Future-Ready Digital Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1
            id="hero-heading"
            className="w-full text-6xl md:text-7xl lg:text-8xl font-extrabold font-sora mb-8 leading-tight animate-fade-in bg-gradient-to-r from-blue-500 via-purple-500 to-gray-700 text-transparent bg-clip-text"
          >
            Digital Innovation
          </h1>

          {/* Subtitle / Description */}
          <p
            className="w-full max-w-5xl text-xl md:text-2xl mb-10 mx-auto leading-relaxed animate-fade-in bg-gradient-to-r from-gray-700 via-purple-500 to-blue-500 dark:from-gray-300 dark:via-purple-300 dark:to-blue-300 text-transparent bg-clip-text"
            style={{ animationDelay: "0.4s" }}
          >
            We create cutting-edge mobile apps, modern websites, and powerful AI
            solutions. Our mission is to transform businesses with innovation,
            helping you scale globally with digital-first strategies.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in mb-12"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white"
              aria-label="Start your project with Vyoom Tech"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 h-auto border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 shadow-md"
              aria-label="Watch demo video"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats Section with CountUp */}
          <div
            ref={ref}
            className="grid grid-cols-2 md:grid-cols-4 gap-y-14 gap-x-10 mt-12 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            {[
              { value: 10, suffix: "+", label: "Projects Delivered" },
              { value: 5, suffix: "+", label: "Happy Clients" },
              { value: 3, suffix: "+", label: "Years Experience" },
              { value: 2, suffix: "+", label: "Countries Served" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl md:text-6xl font-extrabold font-sora mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-300 dark:to-purple-300 group-hover:scale-110 transition-transform duration-300">
                  {inView ? (
                    <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                  ) : (
                    "0"
                  )}
                </div>
                <div className="text-base md:text-lg text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-custom"
        aria-hidden="true"
      >
        <div className="w-7 h-11 border-2 border-indigo-500 dark:border-indigo-400 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-indigo-500 dark:bg-indigo-400 rounded-full animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
