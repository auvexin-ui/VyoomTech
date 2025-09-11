import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg"; // Assuming this is a subtle background pattern or texture

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden py-16 md:py-24" // Light background, added padding
      aria-labelledby="hero-heading"
    >
      {/* Background Image/Pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 dark:opacity-10" // Reduced opacity, subtle for light mode
        style={{ backgroundImage: `url(${heroImage})` }}
        role="presentation"
        aria-hidden="true"
      />
      
      {/* Animated Background Elements - Brighter, more defined for modern look */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[10%] left-[5%] w-80 h-80 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob" />
        <div className="absolute top-[30%] right-[10%] w-96 h-96 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-[20%] left-[20%] w-72 h-72 bg-pink-200 dark:bg-pink-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge - More prominent with a gradient border */}
          <div className="inline-flex items-center px-5 py-2 rounded-full mb-8 animate-fade-in border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-sm">
            <Sparkles className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-2" />
            <span className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200">Building Future-Ready Digital Solutions</span>
          </div>

          {/* Main Heading - Larger, more impactful, improved gradient */}
          <h1 
            id="hero-heading"
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-sora mb-6 leading-tight animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Vyoom Tech
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              Digital Innovation
            </span>
          </h1>

          {/* Subtitle - Slightly larger, better line height */}
          <p 
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            We create cutting-edge mobile apps, websites, and AI solutions that transform businesses and deliver exceptional user experiences.
          </p>

          {/* CTA Buttons - More distinct styles and spacing */}
          <div 
            className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button 
              variant="hero" // Assuming 'hero' variant has a strong primary style
              size="lg" 
              className="text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white"
              aria-label="Start your project with Vyoom Tech"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" // Changed to outline for secondary action
              size="lg" 
              className="text-lg px-8 py-4 h-auto border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 shadow-md"
              aria-label="Watch demo video"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats - More visual separation and stronger typography */}
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 mt-20 animate-fade-in" // Increased gap and top margin
            style={{ animationDelay: "0.8s" }}
          >
            {[
              { value: "10+", label: "Projects Delivered" },
              { value: "5+", label: "Happy Clients" },
              { value: "3+", label: "Years Experience" },
              { value: "2+", label: "Countries Served" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-extrabold font-sora mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-300 dark:to-purple-300 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - More refined */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-custom" // Custom bounce animation
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