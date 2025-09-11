"use client";
import {
  Smartphone,
  Globe,
  Brain,
  Code,
  Palette,
  Zap,
  PenTool,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GradientTextHeading } from "../ui/gradient-text-heading";
import { GradientText } from "../ui/gradient-text";

// ✅ Responsive Motion wrapper
const ResponsiveMotion = ({ children }: { children: React.ReactNode }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (isLargeScreen) {
    return (
      <motion.div
        className="flex gap-4 px-3"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
      >
        {children}
      </motion.div>
    );
  }

  // 👉 On small screens: swipeable but static
  return (
    <div className="flex gap-3 px-3 overflow-x-auto snap-x snap-mandatory">
      {children}
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Android App Development",
      description:
        "Native Android applications with cutting-edge features, optimal performance, and beautiful user interfaces that engage users.",
      features: [
        "Native Development",
        "Material Design",
        "Performance Optimization",
        "Play Store Publishing",
      ],
      gradient: "from-green-400 to-emerald-600",
    },
    {
      icon: Code,
      title: "Flutter App Development",
      description:
        "Cross-platform mobile applications using Flutter framework for iOS and Android with a single codebase and native performance.",
      features: [
        "Cross-Platform",
        "Single Codebase",
        "Hot Reload",
        "Native Performance",
      ],
      gradient: "from-blue-400 to-cyan-600",
    },
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Modern, responsive websites and web applications built with the latest technologies for optimal user experience and SEO.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Modern Tech Stack",
      ],
      gradient: "from-purple-400 to-pink-600",
    },
    {
      icon: PenTool,
      title: "UI/UX Design",
      description:
        "Crafting intuitive, beautiful, and user-friendly designs that deliver seamless experiences across devices.",
      features: [
        "Wireframing",
        "Prototyping",
        "User Research",
        "Modern Aesthetics",
      ],
      gradient: "from-indigo-400 to-fuchsia-600",
    },
    {
      icon: Brain,
      title: "AI & ML Solutions",
      description:
        "Intelligent solutions powered by artificial intelligence and machine learning to automate processes and provide insights.",
      features: [
        "Machine Learning",
        "Data Analytics",
        "Automation",
        "Predictive Models",
      ],
      gradient: "from-orange-400 to-red-600",
      badge: "Coming Soon",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 relative overflow-hidden bg-white"
      aria-labelledby="services-heading"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 left-1/6 w-60 h-60 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/6 w-72 h-72 bg-accent/5 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-5 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            id="services-heading"
            className="text-3xl md:text-5xl font-extrabold font-sora text-gray-900 mb-4 tracking-tight leading-tight"
          >
            <span>
              <GradientTextHeading>Our Services</GradientTextHeading>
            </span>
          </h2>
          <p className="mx-auto text-sm md:text-base leading-relaxed max-w-2xl">
            <GradientText>
              We craft innovative digital experiences that drive growth and
              deliver exceptional value.
            </GradientText>
          </p>
        </div>

        {/* Auto Scrolling Slider */}
        <div className="relative w-full py-4">
          <ResponsiveMotion>
            {[...services, ...services].map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={index}
                  className="min-w-[200px] md:min-w-[280px] lg:min-w-[320px] 
                   h-[360px] md:h-[380px] 
                   bg-white rounded-xl 
                   p-4 shadow-md hover:shadow-xl
                   transition-all duration-500 hover:scale-105 
                   group relative overflow-hidden snap-center
                   mb-3 md:mb-0"
                >
                  {/* Gradient Border Effect */}
                  <div
                    className={`absolute inset-0 rounded-xl p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 
          bg-gradient-to-br ${service.gradient}`}
                  >
                    <div className="absolute inset-0 bg-white rounded-[calc(0.75rem-2px)]" />
                  </div>

                  <div className="relative z-10 h-full flex flex-col justify-between">
                    {/* Header */}
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <div
                          className={`p-2 rounded-md bg-gradient-to-br ${service.gradient} shadow-md`}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        {service.badge && (
                          <span className="px-2 py-0.5 bg-accent/20 text-accent text-[10px] font-semibold rounded-full border border-accent/40">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold font-sora text-gray-900 mb-2 group-hover:text-primary">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 mb-3 leading-relaxed text-xs">
                        {service.description}
                      </p>

                      <div className="mb-3">
                        <h4 className="text-[10px] font-semibold text-gray-700 mb-1 uppercase tracking-wider">
                          Key Features
                        </h4>
                        <div className="grid grid-cols-2 gap-1.5">
                          {service.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center text-[10px] text-gray-600"
                            >
                              <Zap className="w-3 h-3 text-primary mr-1" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button
                      variant="outline"
                      className={`w-full text-xs py-1.5 px-3 rounded-md 
              border border-gray-300 text-gray-900 
              hover:bg-gradient-to-r ${service.gradient} hover:border-transparent 
              hover:text-white transition-all duration-300`}
                    >
                      View
                      <Palette className="ml-1 w-3.5 h-3.5" />
                    </Button>
                  </div>
                </article>
              );
            })}
          </ResponsiveMotion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-700 text-sm md:text-base mb-3">
            <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Ready to transform your vision into reality?
            </span>
          </p>
          <Button
            variant="hero"
            size="lg"
            className="px-5 py-2.5 h-auto text-sm md:text-base font-semibold rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            Start Your Project Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
