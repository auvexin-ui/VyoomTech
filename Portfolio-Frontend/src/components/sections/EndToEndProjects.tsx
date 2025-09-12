"use client";
import React, { useState, useEffect } from "react";
import { Sparkles, CheckCircle2, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const GradientTextHeading: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <h2 className="text-3xl md:text-4xl font-extrabold font-sora text-gray-900 dark:text-white mb-6 leading-tight bg-gradient-to-r from-emerald-500 to-teal-500 text-transparent bg-clip-text">
    {children}
  </h2>
);

interface ProjectFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  tagline: string;
  description: string;
  features: ProjectFeature[];
  blurred?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  tagline,
  description,
  features,
  blurred = false,
}) => (
  <div
    className={`w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 text-center transition-all duration-500 ${
      blurred ? "opacity-40 blur-sm scale-90" : "opacity-100 blur-0 scale-100"
    }`}
  >
    <img
      src={imageSrc}
      alt={imageAlt}
      className="rounded-xl object-cover w-full h-52 shadow-md mb-4"
    />
    <span className="inline-block bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs font-medium px-3 py-1 rounded-full mb-3">
      {tagline}
    </span>
    <h3 className="text-lg font-extrabold font-sora text-gray-900 dark:text-white mb-2">
      {title}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
      {description}
    </p>
    <div className="space-y-2 text-left">
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-start">
          <feature.icon className="w-4 h-4 text-emerald-500 dark:text-emerald-400 mr-2 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-0.5">
              {feature.title}
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const projectData = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1556740758-94420824b010?q=80&w=2940&auto=format&fit=crop",
    imageAlt: "E-commerce Platform Project",
    title: "NextGen E-commerce Platform",
    tagline: "Retail & Consumer Goods",
    description:
      "We engineered a robust and scalable e-commerce platform that offers a seamless shopping experience and advanced inventory management.",
    features: [
      {
        icon: CheckCircle2,
        title: "Intuitive UX",
        description: "Effortless navigation.",
      },
      {
        icon: Sparkles,
        title: "AI Recommendations",
        description: "Personalized product suggestions.",
      },
      {
        icon: Award,
        title: "Scalable Cloud",
        description: "Resilient cloud architecture.",
      },
    ],
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1519389950473-47ba0fd0e158?q=80&w=2940&auto=format&fit=crop",
    imageAlt: "FinTech Solution Project",
    title: "Secure FinTech Portal",
    tagline: "Financial Services",
    description:
      "Developed a secure and compliant financial technology portal for seamless transactions and data management.",
    features: [
      {
        icon: CheckCircle2,
        title: "Bank-Grade Security",
        description: "MFA and encryption.",
      },
      {
        icon: Sparkles,
        title: "Real-time Analytics",
        description: "Interactive dashboards.",
      },
      {
        icon: Award,
        title: "Compliance",
        description: "Adherence to industry standards.",
      },
    ],
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1521737711867-ee1d8841a4a6?q=80&w=2940&auto=format&fit=crop",
    imageAlt: "Healthcare Management System",
    title: "Digital Health Platform",
    tagline: "Healthcare & Wellness",
    description:
      "Created an integrated digital health platform to streamline patient management, appointments, and medical records.",
    features: [
      {
        icon: CheckCircle2,
        title: "Patient-Centric",
        description: "Easy access to health info.",
      },
      {
        icon: Sparkles,
        title: "Telemedicine",
        description: "Virtual consultations.",
      },
      {
        icon: Award,
        title: "HIPAA Compliant",
        description: "Secure patient data.",
      },
    ],
  },
];

const EndToEndProjects = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projectData.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const prevIndex = (current - 1 + projectData.length) % projectData.length;
  const nextIndex = (current + 1) % projectData.length;

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <GradientTextHeading>Our End-to-End Projects</GradientTextHeading>
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Discover how we transform ideas into successful digital realities,
          from concept to deployment and beyond.
        </p>

        <div className="relative flex items-center justify-center">
          <AnimatePresence initial={false}>
            {/* Left (blurred) */}
            <motion.div
              key={`prev-${prevIndex}`}
              initial={{ opacity: 0, x: -150, scale: 0.8 }}
              animate={{ opacity: 0.5, x: -220, scale: 0.85 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute"
            >
              <ProjectCard {...projectData[prevIndex]} blurred />
            </motion.div>

            {/* Current (center focus) */}
            <motion.div
              key={`current-${current}`}
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.6, y: -20 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="relative z-20"
            >
              <ProjectCard {...projectData[current]} />
            </motion.div>

            {/* Right (blurred) */}
            <motion.div
              key={`next-${nextIndex}`}
              initial={{ opacity: 0, x: 150, scale: 0.8 }}
              animate={{ opacity: 0.5, x: 220, scale: 0.85 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute"
            >
              <ProjectCard {...projectData[nextIndex]} blurred />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default EndToEndProjects;