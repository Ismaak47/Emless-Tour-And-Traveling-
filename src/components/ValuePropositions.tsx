import { Check, Shield, Star, Trophy } from "lucide-react";

const ValuePropositions = () => {
  const values = [
    {
      icon: Trophy,
      title: "The Ultimate Collection Safaris",
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
    <section className="py-3 md:py-5 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 bg-background rounded-lg p-4 shadow-safari hover:shadow-elevated transition-safari"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-sunset rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-medium text-foreground mb-1">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-normal">
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