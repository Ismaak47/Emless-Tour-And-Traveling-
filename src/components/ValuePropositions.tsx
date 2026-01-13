import { Check, Shield, Star, Trophy } from "lucide-react";

const ValuePropositions = () => {
  const values = [
    {
      icon: Trophy,
      title: "The Ultimate Collection of African Safaris",
      description: "Curated experiences across East Africa's most spectacular destinations"
    },
    {
      icon: Shield,
      title: "Unmatched Value, Every Time", 
      description: "Best price guarantee with premium service and authentic experiences"
    },
    {
      icon: Star,
      title: "Exceptional Customer Satisfaction",
      description: "5-star rated service with personalized attention to every detail"
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 bg-background rounded-xl p-6 shadow-safari hover:shadow-elevated transition-safari"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-sunset rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;