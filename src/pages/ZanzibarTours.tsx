import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ZanzibarTours = () => {
  const zanzibarTours = [
    {
      id: "zt001",
      title: "Stone Town Historical & Cultural Tour",
      duration: "Half Day",
      groupSize: "2-12 People",
      rating: 4.8,
      price: "$45",
      highlights: ["UNESCO World Heritage Site", "Spice Markets", "Cultural Sites", "Local Guide"],
      description: "Explore the narrow winding streets of Stone Town, a UNESCO World Heritage Site rich in history and culture.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "zt002",
      title: "Spice Farm Tour & Local Lunch",
      duration: "Full Day",
      groupSize: "2-15 People",
      rating: 4.9,
      price: "$65",
      highlights: ["Spice Plantation", "Traditional Lunch", "Fruit Tasting", "Local Culture"],
      description: "Discover why Zanzibar is called the 'Spice Island' with visits to organic spice farms and traditional cooking.",
      image: "https://images.unsplash.com/photo-1596040905737-8e1f8b6c7be7?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "zt003",
      title: "Prison Island & Giant Tortoises",
      duration: "Half Day",
      groupSize: "2-10 People",
      rating: 4.7,
      price: "$55",
      highlights: ["Historical Prison", "Giant Tortoises", "Snorkeling", "Boat Transfer"],
      description: "Visit the historic Prison Island and meet the giant Aldabra tortoises, some over 100 years old.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "zt004",
      title: "Safari Blue - Dolphin & Snorkeling Adventure",
      duration: "Full Day",
      groupSize: "2-20 People",
      rating: 4.9,
      price: "$85",
      highlights: ["Dolphin Watching", "Snorkeling", "Seafood Lunch", "Sandbank Visit"],
      description: "Experience the crystal clear waters of Menai Bay, swim with dolphins and enjoy pristine coral reefs.",
      image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb1?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "zt005",
      title: "Jozani Forest Red Colobus Monkeys",
      duration: "Half Day",
      groupSize: "2-15 People",
      rating: 4.6,
      price: "$40",
      highlights: ["Endemic Red Colobus", "Nature Walk", "Mangrove Boardwalk", "Conservation"],
      description: "Walk through the indigenous forest and spot the rare Red Colobus monkeys found only in Zanzibar.",
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "zt006",
      title: "Kizimkazi Dolphin Tour",
      duration: "Half Day",
      groupSize: "2-12 People",
      rating: 4.8,
      price: "$50",
      highlights: ["Dolphin Swimming", "Historic Mosque", "Snorkeling", "Local Village"],
      description: "Visit the historic fishing village of Kizimkazi and swim with bottlenose and humpback dolphins.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "zt007",
      title: "Mnemba Island Snorkeling & Diving",
      duration: "Full Day",
      groupSize: "2-8 People",
      rating: 4.8,
      price: "$95",
      highlights: ["Coral Reef", "Marine Life", "White Sand Beach", "Professional Guide"],
      description: "Explore the pristine coral reefs around Mnemba Island with world-class snorkeling and diving.",
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "zt008",
      title: "Nungwi & Kendwa Beach Day Trip",
      duration: "Full Day",
      groupSize: "2-15 People",
      rating: 4.7,
      price: "$55",
      highlights: ["White Sand Beaches", "Sunset Views", "Beach Activities", "Local Culture"],
      description: "Relax on the stunning white sand beaches of Nungwi and Kendwa with crystal clear waters.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "zt009",
      title: "Cultural Village & Traditional Cooking",
      duration: "Half Day",
      groupSize: "2-12 People",
      rating: 4.6,
      price: "$45",
      highlights: ["Local Village", "Traditional Cooking", "Cultural Exchange", "Local Crafts"],
      description: "Experience authentic Zanzibari village life and learn traditional cooking methods.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary to-primary-glow">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Zanzibar Tours</h1>
            <p className="text-xl md:text-2xl">Discover the Spice Island's Magic</p>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {zanzibarTours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-elevated transition-safari group">
                <div className="relative h-64">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-safari"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                    {tour.price}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{tour.groupSize}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span>{tour.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-safari">
                    {tour.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-sm">
                    {tour.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Highlights:</p>
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.map((highlight, index) => (
                        <span 
                          key={index}
                          className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link to={`/tour/${tour.id}`} className="flex-1 mr-2">
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                    <Link to={`/book/${tour.id}`}>
                      <Button variant="safari">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZanzibarTours;