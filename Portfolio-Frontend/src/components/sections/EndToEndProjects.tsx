import React from "react";
import { Sparkles, CheckCircle2, Award } from "lucide-react";

// Assuming you have a GradientTextHeading component
// import { GradientTextHeading } from "../ui/gradient-text-heading";

// Placeholder for GradientTextHeading if you don't have it yet
const GradientTextHeading: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <>{children}</>;

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
  isReversed?: boolean; // To alternate image/text layout
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  tagline,
  description,
  features,
  isReversed = false,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-10 lg:gap-16 p-6 md:p-10 bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out border border-gray-100 dark:border-gray-700 ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image Section (Left or Right based on isReversed) */}
      <div className="w-full md:w-1/2 flex justify-center p-4">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="rounded-2xl object-cover w-full h-[350px] md:h-[450px] lg:h-[500px] shadow-lg border border-gray-200 dark:border-gray-600 transform hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Text Content Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
          {tagline}
        </span>
        <h3 className="text-3xl lg:text-4xl font-extrabold font-sora text-gray-900 dark:text-white mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          {description}
        </p>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start text-left">
              <feature.icon className="w-6 h-6 text-indigo-500 dark:text-indigo-400 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                  {feature.title}
                </h4>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const EndToEndProjects = () => {
  return (
    <section
      id="projects"
      className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Background Shapes for Visual Interest */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10 dark:opacity-5">
        <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-slow" />
        <div className="absolute -bottom-1/4 -right-1/4 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-slow animation-delay-3000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <GradientTextHeading>
            <h2
              id="projects-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-sora text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Our End-to-End Projects
            </h2>
          </GradientTextHeading>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how we transform ideas into successful digital realities,
            from concept to deployment and beyond.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-20 lg:space-y-28">
          <ProjectCard
            imageSrc="https://images.unsplash.com/photo-1556740758-94420824b010?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imageAlt="E-commerce Platform Project"
            title="NextGen E-commerce Platform"
            tagline="Retail & Consumer Goods"
            description="We engineered a robust and scalable e-commerce platform that offers a seamless shopping experience, advanced inventory management, and personalized customer journeys, leading to a 30% increase in sales for our client."
            features={[
              {
                icon: CheckCircle2,
                title: "Intuitive User Experience",
                description:
                  "Designed for effortless navigation and a delightful shopping flow.",
              },
              {
                icon: Sparkles,
                title: "AI-Powered Recommendations",
                description:
                  "Integrated machine learning for personalized product suggestions.",
              },
              {
                icon: Award,
                title: "Scalable Cloud Infrastructure",
                description:
                  "Built on a resilient cloud architecture to handle peak traffic.",
              },
            ]}
          />

          <ProjectCard
            imageSrc="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imageAlt="AI-driven Analytics Dashboard"
            title="Intelligent Data Analytics Dashboard"
            tagline="Business Intelligence"
            description="Our AI-driven dashboard transforms raw data into actionable insights, empowering businesses to make informed decisions quickly. It features real-time reporting, predictive analytics, and customizable visualizations."
            features={[
              {
                icon: CheckCircle2,
                title: "Real-time Data Processing",
                description:
                  "Instant insights from continuously updated data streams.",
              },
              {
                icon: Sparkles,
                title: "Predictive Modeling",
                description:
                  "Forecast future trends and identify potential opportunities.",
              },
              {
                icon: Award,
                title: "Customizable Reporting",
                description:
                  "Tailor reports and dashboards to specific business needs.",
              },
            ]}
            isReversed // This will flip the image to the right
          />

          <ProjectCard
            imageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imageAlt="Mobile Health Application"
            title="Intuitive Mobile Health App"
            tagline="Healthcare & Wellness"
            description="Developed a user-friendly mobile application for health monitoring and wellness management. Features include personalized health plans, progress tracking, appointment scheduling, and secure data handling."
            features={[
              {
                icon: CheckCircle2,
                title: "Personalized Health Plans",
                description:
                  "Customized wellness journeys based on individual goals.",
              },
              {
                icon: Sparkles,
                title: "Secure Data Management",
                description:
                  "Ensuring privacy and compliance with health regulations.",
              },
              {
                icon: Award,
                title: "Seamless Appointment Booking",
                description:
                  "Integrates with calendars for easy scheduling and reminders.",
              },
            ]}
          />
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes blob-slow {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(60px, -80px) scale(1.1);
          }
          66% {
            transform: translate(-40px, 40px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob-slow {
          animation: blob-slow 12s infinite ease-in-out;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
};

export default EndToEndProjects;