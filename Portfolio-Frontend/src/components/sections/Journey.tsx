import { GradientTextHeading } from "../ui/gradient-text-heading";

const Journey = () => {
  return (
    <section
      id="journey"
      className="py-20 bg-gray-50 relative overflow-hidden"
      aria-labelledby="journey-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <GradientTextHeading>
            <h3
              id="journey-heading"
              className="text-2xl md:text-3xl font-bold font-sora text-gray-800 mb-4"
            >
              Our Journey
            </h3>
          </GradientTextHeading>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse into our story and how we’ve evolved over the years.
          </p>
        </div>

        {/* Content with Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Founded with a vision to bridge the gap between innovative
              technology and practical business solutions, Vyoom Tech has grown
              from a small team of passionate developers to a trusted partner
              for businesses worldwide.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              We specialize in creating mobile applications, responsive
              websites, and intelligent AI solutions that not only meet current
              needs but anticipate future challenges. Our commitment to
              excellence and customer satisfaction drives us to continuously
              evolve and stay ahead of technological trends.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="flex justify-center">
            <img
              src="/journey.jpg" // 👉 Replace with your image path
              alt="Our Journey"
              className="rounded-2xl shadow-lg object-cover w-full max-w-md h-[450px] md:h-[550px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
