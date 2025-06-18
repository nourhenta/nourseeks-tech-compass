
export const HeroSection = () => {
  return (
    <div className="text-center py-12 mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Find Your Dream Tech Job
        <span className="text-blue-600"> Locally</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        Discover companies in your region that match your DevOps, Cloud, and tech career interests. 
        Connect with opportunities that align with your skills and location preferences.
      </p>
      <div className="flex flex-wrap justify-center gap-4 text-sm">
        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">DevOps</div>
        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Cloud</div>
        <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Frontend</div>
        <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">Backend</div>
        <div className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full">AI/ML</div>
      </div>
    </div>
  );
};
