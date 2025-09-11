import { Smartphone, Globe, Brain, Code, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Android App Development",
      description: "Native Android applications with cutting-edge features, optimal performance, and beautiful user interfaces that engage users.",
      features: ["Native Development", "Material Design", "Performance Optimization", "Play Store Publishing"],
      gradient: "from-green-400 to-emerald-600",
    },
    {
      icon: Code,
      title: "Flutter App Development", 
      description: "Cross-platform mobile applications using Flutter framework for iOS and Android with a single codebase and native performance.",
      features: ["Cross-Platform", "Single Codebase", "Hot Reload", "Native Performance"],
      gradient: "from-blue-400 to-cyan-600",
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Modern, responsive websites and web applications built with the latest technologies for optimal user experience and SEO.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern Tech Stack"],
      gradient: "from-purple-400 to-pink-600",
    },
    {
      icon: Brain,
      title: "AI & ML Solutions",
      description: "Intelligent solutions powered by artificial intelligence and machine learning to automate processes and provide insights.",
      features: ["Machine Learning", "Data Analytics", "Automation", "Predictive Models"],
      gradient: "from-orange-400 to-red-600",
      badge: "Coming Soon",
    },
  ];

  return (
    <section 
      id="services" 
      className="py-20 bg-dark-section relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-2xl animate-float" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            id="services-heading"
            className="text-3xl md:text-5xl font-bold font-sora text-card-dark-foreground mb-6"
          >
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions to help your business thrive in the modern digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="glass-card bg-card-dark/50 border border-white/10 hover:border-primary/30 transition-all duration-500 hover:transform hover:scale-105 group"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Card Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  {service.badge && (
                    <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full border border-accent/30">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <h3 className="text-2xl font-bold font-sora text-card-dark-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-card-dark-foreground mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-gray-400">
                        <Zap className="w-3 h-3 text-accent mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  variant="glass" 
                  className="w-full group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <Palette className="ml-2 w-4 h-4" />
                </Button>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Ready to bring your ideas to life?
          </p>
          <Button variant="hero" size="lg" className="px-8 py-4 h-auto text-lg">
            Start Your Project Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;