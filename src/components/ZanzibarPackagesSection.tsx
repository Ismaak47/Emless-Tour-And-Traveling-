import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Star } from "lucide-react";
import TourDetailsModal from "@/components/TourDetailsModal";

const ZanzibarPackagesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Beach");
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const categories = ["Beach", "Cultural", "Adventure", "Honeymoon", "Luxury", "Family", "Budget"];

  const packages = [
    {
      id: "zp001",
      name: "Zanzibar Beach Escape",
      duration: "3 Days",
      category: "Beach",
      highlights: "Pristine beaches, crystal waters, sunset views",
      price: "$299",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop"
    },
    {
      id: "zp002", 
      name: "Zanzibar Relaxation Getaway",
      duration: "5 Days",
      category: "Beach",
      highlights: "Spa treatments, beach lounging, tropical paradise",
      price: "$499",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    },
    {
      id: "zp003",
      name: "Zanzibar Cultural Experience", 
      duration: "4 Days",
      category: "Cultural",
      highlights: "Stone Town, spice tours, local traditions",
      price: "$399",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    },
    {
      id: "zp004",
      name: "Zanzibar Adventure Package",
      duration: "5 Days", 
      category: "Adventure",
      highlights: "Water sports, diving, island hopping",
      price: "$599",
      image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=400&h=300&fit=crop"
    },
    {
      id: "zp005",
      name: "Zanzibar Honeymoon Package",
      duration: "6 Days",
      category: "Honeymoon", 
      highlights: "Romantic dinners, private beaches, couples spa",
      price: "$899",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      id: "zp006",
      name: "Zanzibar Luxury Retreat",
      duration: "7 Days",
      category: "Luxury",
      highlights: "5-star resorts, butler service, premium dining",
      price: "$1299",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop"
    },
    {
      id: "zp007",
      name: "Zanzibar Family Holiday",
      duration: "5 Days",
      category: "Family",
      highlights: "Kid-friendly activities, family rooms, safe beaches",
      price: "$699",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
    },
    {
      id: "zp008",
      name: "Zanzibar Budget Explorer",
      duration: "3 Days",
      category: "Budget",
      highlights: "Affordable stays, local transport, authentic experience",
      price: "$199",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop"
    },
    {
      id: "zp009",
      name: "Zanzibar Marine Experience",
      duration: "4 Days",
      category: "Nature & Marine",
      highlights: "Dolphin tours, snorkeling, marine conservation",
      price: "$549",
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop"
    },
    {
      id: "zp010",
      name: "Zanzibar Ultimate Island Tour",
      duration: "7 Days",
      category: "Premium",
      highlights: "Complete island exploration, exclusive experiences",
      price: "$1099",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    }
  ];

  const displayedPackages = showMore ? packages : packages.slice(0, 3);

  return (
    <section className="py-4 md:py-6 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Zanzibar Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our curated Zanzibar travel packages for every type of traveler
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
            <Card key={pkg.id} className="overflow-hidden hover:shadow-elevated transition-safari group bg-background">
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
        
        {packages.length > 3 && (
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

export default ZanzibarPackagesSection;