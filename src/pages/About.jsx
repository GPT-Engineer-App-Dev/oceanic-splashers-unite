const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">About Our Club</h2>
          <p className="text-gray-700">
            The Open Sea Swimmers Club is a community of passionate individuals who share a love for open water swimming. 
            We organize regular swims, training sessions, and events for swimmers of all levels. 
            Our goal is to promote the sport, improve safety awareness, and create lasting friendships among our members.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <img
            src="/placeholder.svg"
            alt="Club members swimming"
            className="rounded-lg shadow-md w-full h-[300px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;