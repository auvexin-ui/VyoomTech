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
import { GradientTextHeading } from "../ui/gradient-text-heading";
import { GradientText } from "../ui/gradient-text";

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
      className="py-20 relative overflow-hidden bg-white"
      aria-labelledby="services-heading"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-accent/5 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            id="services-heading"
            className="text-4xl md:text-6xl font-extrabold font-sora text-gray-900 mb-6 tracking-tight leading-tight"
          >
            <span className="">
              <GradientTextHeading>Our Services</GradientTextHeading>
            </span>
            <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 ml-2"></span>
          </h2>
          <p className="mx-auto leading-relaxed">
            <GradientText>
              We craft innovative digital experiences that drive growth and
              deliver exceptional value.
            </GradientText>
          </p>
        </div>

        {/* Auto Scrolling Slider */}
        <div className="relative w-full py-6 ">
          <motion.div
            className="flex gap-12 px-4"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {[...services, ...services].map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={index}
                  className="min-w-[420px] md:min-w-[520px] lg:min-w-[580px] 
                   h-[500px] md:h-[560px] 
                   bg-white rounded-3xl 
                   p-10 shadow-xl hover:shadow-2xl
                   transition-all duration-500 hover:scale-105 
                   group relative overflow-hidden"
                >
                  {/* Gradient Border Effect */}
                  <div
                    className={`absolute inset-0 rounded-3xl p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 
          bg-gradient-to-br ${service.gradient}`}
                  >
                    <div className="absolute inset-0 bg-white rounded-[calc(1.5rem-2px)]" />
                  </div>

                  <div className="relative z-10 h-full flex flex-col justify-between">
                    {/* Header */}
                    <div>
                      <div className="flex items-start justify-between mb-6">
                        <div
                          className={`p-4 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        {service.badge && (
                          <span className="px-4 py-1.5 bg-accent/20 text-accent text-sm font-semibold rounded-full border border-accent/40">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-3xl font-bold font-sora text-gray-900 mb-4 group-hover:text-primary">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                        {service.description}
                      </p>

                      <div className="mb-8">
                        <h4 className="text-base font-semibold text-gray-700 mb-4 uppercase tracking-wider">
                          Key Features
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {service.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center text-base text-gray-600"
                            >
                              <Zap className="w-4 h-4 text-primary mr-3" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button
                      variant="outline"
                      className={`w-full text-lg py-3 px-6 rounded-lg 
              border-2 border-gray-300 text-gray-900 
              hover:bg-gradient-to-r ${service.gradient} hover:border-transparent 
              hover:text-white transition-all duration-300`}
                    >
                      View
                      <Palette className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </article>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-gray-700 text-xl mb-8">
            <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Ready to transform your vision into reality?
            </span>
          </p>
          <Button
            variant="hero"
            size="lg"
            className="px-10 py-5 h-auto text-xl font-semibold rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            Start Your Project Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
