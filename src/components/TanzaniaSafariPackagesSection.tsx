import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Star } from "lucide-react";
import TourDetailsModal from "@/components/TourDetailsModal";

const TanzaniaSafariPackagesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Wildlife");
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const categories = ["Budget", "Mid-Range", "Luxury", "Wildlife", "Family", "Honeymoon", "Adventure"];

  const packages = [
    {
      id: "tsp001",
      name: "Serengeti Migration Safari",
      duration: "5 Days",
      category: "Wildlife",
      highlights: "Great Migration, Big Five, endless plains",
      price: "$1899",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop"
    },
    {
      id: "tsp002",
      name: "Ngorongoro Crater Safari", 
      duration: "3 Days",
      category: "Wildlife",
      highlights: "World's largest crater, dense wildlife, UNESCO site",
      price: "$1299",
      image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?w=400&h=300&fit=crop"
    },
    {
      id: "tsp003",
      name: "Tarangire & Lake Manyara Safari",
      duration: "4 Days", 
      category: "Mid-Range",
      highlights: "Elephant herds, tree-climbing lions, baobab trees",
      price: "$999",
      image: "https://images.unsplash.com/photo-1549366021-9f761d040fb2?w=400&h=300&fit=crop"
    },
    {
      id: "tsp004",
      name: "Budget Camping Safari",
      duration: "3 Days",
      category: "Budget",
      highlights: "Affordable adventure, camping experience, wildlife viewing",
      price: "$599",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop"
    },
    {
      id: "tsp005",
      name: "Luxury Tanzania Safari",
      duration: "7 Days",
      category: "Luxury", 
      highlights: "5-star lodges, private guides, gourmet dining",
      price: "$3999",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop"
    },
    {
      id: "tsp006",
      name: "Family Safari Experience",
      duration: "5 Days",
      category: "Family",
      highlights: "Kid-friendly activities, family tents, educational tours",
      price: "$1599",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop"
    },
    {
      id: "tsp007",
      name: "Kilimanjaro & Safari Combo",
      duration: "10 Days",
      category: "Adventure",
      highlights: "Mountain climbing, wildlife safari, ultimate adventure",
      price: "$2999",
      image: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=400&h=300&fit=crop"
    },
    {
      id: "tsp008",
      name: "Photographic Safari",
      duration: "6 Days",
      category: "Photography",
      highlights: "Professional guides, best photo spots, wildlife photography",
      price: "$2299",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop"
    },
    {
      id: "tsp009",
      name: "Honeymoon Safari",
      duration: "6 Days",
      category: "Honeymoon",
      highlights: "Romantic lodges, private dinners, couples activities",
      price: "$2799",
      image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?w=400&h=300&fit=crop"
    },
    {
      id: "tsp010",
      name: "Tanzania Grand Safari",
      duration: "10 Days",
      category: "Premium",
      highlights: "Complete Tanzania experience, all major parks, luxury service",
      price: "$4999",
      image: "https://images.unsplash.com/photo-1549366021-9f761d040fb2?w=400&h=300&fit=crop"
    }
  ];

  const filteredPackages = packages.filter(pkg => pkg.category === selectedCategory);
  const displayedPackages = showMore ? filteredPackages : filteredPackages.slice(0, 3);

  return (
    <section className="py-4 md:py-6 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Tanzania Safari Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover Wildlife, Big Five, and Luxury Safari Adventures
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "safari" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPackages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden hover:shadow-elevated transition-safari group">
              <div className="relative h-48">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-safari"
                />
              </div>

              <CardContent className="p-4">
                <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{pkg.category}</span>
                  </div>
                </div>

                <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-safari">
                  {pkg.name}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {pkg.highlights}
                </p>

                <div className="flex items-center justify-between gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setSelectedPackage(pkg)}
                  >
                    View Details
                  </Button>
                  <Button variant="safari" className="flex-1">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredPackages.length > 3 && (
          <div className="text-center mt-8">
            <Button 
              variant="safari" 
              onClick={() => setShowMore(!showMore)}
              className="px-8"
            >
              {showMore ? "Show Less" : "See More Packages"}
            </Button>
          </div>
        )}
      </div>
      
      <TourDetailsModal 
        isOpen={!!selectedPackage} 
        onClose={() => setSelectedPackage(null)} 
        tour={selectedPackage} 
      />
    </section>
  );
};

export default TanzaniaSafariPackagesSection;