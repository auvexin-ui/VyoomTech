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
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientTextHeading } from "../ui/gradient-text-heading";
import { GradientText } from "../ui/gradient-text";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      image: "/android.png", // ✅ From public folder
      title: "Android App Development",
      tagline: "High-performance native apps",
      description:
        "We build powerful, secure, and user-friendly Android applications designed to scale and engage millions of users.",
      points: [
        "Material Design UI",
        "Optimized performance",
        "Play Store publishing support",
        "Offline-first architecture",
      ],
      gradient: "from-green-400 to-emerald-600",
    },
    {
      icon: Code,
      image: "/flutter.png",
      title: "Flutter App Development",
      tagline: "One codebase, multiple platforms",
      description:
        "Our Flutter apps deliver native-like performance across Android and iOS, saving cost and development time.",
      points: [
        "Cross-platform support",
        "Hot reload for faster iterations",
        "Pixel-perfect UI",
        "Seamless API integrations",
      ],
      gradient: "from-blue-400 to-cyan-600",
    },
    {
      icon: Globe,
      image: "/web.png",
      title: "Website Development",
      tagline: "Responsive & modern websites",
      description:
        "We design and develop websites that load fast, rank higher on search engines, and deliver an exceptional user experience.",
      points: [
        "SEO-friendly architecture",
        "Blazing-fast loading speed",
        "Scalable backend solutions",
        "Modern design principles",
      ],
      gradient: "from-purple-400 to-pink-600",
    },
    {
      icon: PenTool,
      image: "/design.png",
      title: "UI/UX Design",
      tagline: "Designs that delight users",
      description:
        "Our design team creates visually stunning and intuitive user interfaces backed by real user research.",
      points: [
        "Wireframes & prototypes",
        "User journey mapping",
        "Interactive prototypes",
        "Modern, minimal aesthetics",
      ],
      gradient: "from-indigo-400 to-fuchsia-600",
    },
    {
      icon: Brain,
      image: "/ai.png",
      title: "AI & ML Solutions",
      tagline: "Data-driven intelligent apps",
      description:
        "We harness the power of Artificial Intelligence and Machine Learning to automate, predict, and innovate.",
      points: [
        "Predictive analytics",
        "Process automation",
        "Data-driven insights",
        "Natural Language Processing",
      ],
      gradient: "from-orange-400 to-red-600",
      badge: "Coming Soon",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 relative overflow-hidden bg-black"
      aria-labelledby="services-heading"
    >
      {/* Central Line */}
      <div className="absolute left-1/2 top-96 bottom-24 w-[2px] bg-gradient-to-b from-primary/60 via-gray-700/50 to-accent/60 transform -translate-x-1/2"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2
            id="services-heading"
            className="text-3xl md:text-5xl font-extrabold font-sora text-white mb-4 tracking-tight"
          >
            <GradientTextHeading>Our Services</GradientTextHeading>
          </h2>
          <p className="mx-auto text-sm md:text-base max-w-2xl text-gray-300 mb-6">
            <GradientText>
              From concept to execution, we design and build digital solutions
              that transform businesses and delight users.
            </GradientText>
          </p>

          {/* CTA */}
          <div className="text-center mt-6">
            <p className="text-gray-300 text-sm md:text-base mb-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 font-semibold">
                Ready to start your digital journey with us?
              </span>
            </p>
            <Button
              variant="hero"
              size="lg"
              className="px-6 py-3 h-auto text-sm md:text-base font-semibold rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300"
            >
              Start Your Project Today 🚀
            </Button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative space-y-28">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -120 : 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* Dot on timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-black relative">
                    <span className="absolute inset-0 rounded-full animate-ping bg-gradient-to-br from-primary to-accent opacity-70"></span>
                  </div>
                </div>

                {/* Card */}
                <div className="w-[92%] sm:w-[46%] bg-gray-900/95 rounded-2xl p-7 shadow-lg hover:shadow-primary/30 transition-all duration-500 hover:scale-[1.02]">
                  {/* Image + Icon */}
                  <div className="flex items-center mb-4 space-x-3">
                    {service.image && (
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary shadow-md">
                        <img
                          src={service.image}
                          alt={service.title}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div
                      className={`p-3 rounded-md bg-gradient-to-br ${service.gradient} shadow-md`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    {service.badge && (
                      <span className="ml-3 px-2 py-1 bg-accent/20 text-accent text-[11px] font-semibold rounded-full border border-accent/40">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-primary/70 mb-3 italic">
                    {service.tagline}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    {service.description}
                  </p>

                  {/* Points */}
                  <ul className="space-y-2 mb-4">
                    {service.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-center text-gray-300 text-sm"
                      >
                        <Zap className="w-3.5 h-3.5 text-primary mr-2" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="text-xs py-1.5 px-4 rounded-md border border-gray-600 text-gray-200 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition-all duration-300"
                  >
                    Learn More <Palette className="ml-1 w-3.5 h-3.5" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
