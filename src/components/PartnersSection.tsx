const PartnersSection = () => {
  const partners = [
    {
      name: "Partner One",
      logo: "https://avatars.githubusercontent.com/u/55230053?s=280&v=4",
    },
    {
      name: "Pesapal",
      logo: "https://media.tekpon.com/2025/08/pesapal-logo.webp",
    },
    {
      name: "KCB Bank",
      logo: "https://images.africanfinancials.com/tz-kcb-logo.png",
    },
    {
      name: "CRDB Bank",
      logo: "https://images.africanfinancials.com/tz-crdb-logo.png",
    },
  ];

  return (
    <section className="py-4 md:py-6 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with trusted partners to provide you with the best travel experience
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-[200px] h-[120px] flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;