import { GradientTextHeading } from "../ui/gradient-text-heading";

const Journey = () => {
  return (
    <section
      id="journey"
      className="relative py-20 bg-gradient-to-br from-gray-900 to-black overflow-hidden" // Enhanced background
      aria-labelledby="journey-heading"
    >
      {/* Background Lights/Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <GradientTextHeading>
            <h3
              id="journey-heading"
              className="text-3xl md:text-5xl font-extrabold font-sora text-white mb-6 tracking-tight" // Larger, bolder text
            >
              Our Journey
            </h3>
          </GradientTextHeading>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            A captivating exploration of our story, milestones, and how we've
            shaped the future, one innovation at a time.
          </p>
        </div>

        {/* Content with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Text */}
          <div className="lg:col-span-3">
            <p className="text-xl text-gray-200 leading-relaxed mb-8 font-light">
              Founded with an audacious vision to seamlessly integrate cutting-edge
              technology with strategic business imperatives, Vyoom Tech has
              blossomed from a nascent collective of ardent innovators into a global
              beacon of digital transformation.
            </p>

            <p className="text-xl text-gray-200 leading-relaxed mb-8 font-light">
              Our expertise spans the creation of intuitive mobile applications,
              adaptive web platforms, and sophisticated AI-driven ecosystems. We
              don't just address contemporary needs; we architect solutions that
              proactively anticipate the technological landscape of tomorrow. Our
              unwavering pursuit of excellence and profound dedication to client
              triumph propels our continuous evolution, ensuring we perpetually
              remain at the vanguard of innovation.
            </p>
            <button className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
              Discover Our Milestones
            </button>
          </div>

          {/* Image */}
          <div className="lg:col-span-2 w-full h-full flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image path
              alt="Our Journey"
              className="rounded-3xl shadow-2xl object-cover w-full h-[600px] lg:h-[700px] transform hover:scale-105 transition-transform duration-500 ease-in-out border-4 border-purple-500" // Full width, dynamic height, enhanced styling
            />
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Journey;