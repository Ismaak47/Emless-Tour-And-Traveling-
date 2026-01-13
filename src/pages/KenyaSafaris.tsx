import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const KenyaSafaris = () => {
  const kenyaSafaris = [
    {
      id: "ks001",
      title: "5-Day Masai Mara Great Migration Safari",
      duration: "5 Days",
      groupSize: "2-6 People",
      rating: 4.9,
      price: "$1,699",
      highlights: ["Great Migration", "Big Five", "Masai Culture", "Balloon Safari"],
      description: "Witness the world's greatest wildlife spectacle in the legendary Masai Mara National Reserve.",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "ks002",
      title: "4-Day Amboseli & Tsavo Safari",
      duration: "4 Days",
      groupSize: "2-8 People",
      rating: 4.8,
      price: "$1,299",
      highlights: ["Mount Kilimanjaro Views", "Elephant Herds", "Red Elephants", "Diverse Wildlife"],
      description: "Explore Amboseli's iconic elephant herds with stunning Kilimanjaro backdrop and Tsavo's red elephants.",
      image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "ks003",
      title: "3-Day Lake Nakuru & Lake Naivasha Safari",
      duration: "3 Days",
      groupSize: "2-10 People",
      rating: 4.7,
      price: "$899",
      highlights: ["Pink Flamingos", "Rhino Sanctuary", "Hell's Gate", "Boat Safari"],
      description: "Discover Kenya's beautiful Rift Valley lakes with spectacular birdlife and unique landscapes.",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "ks004",
      title: "6-Day Kenya Northern Circuit Safari",
      duration: "6 Days",
      groupSize: "2-6 People",
      rating: 4.8,
      price: "$1,999",
      highlights: ["Samburu Reserve", "Unique Species", "Cultural Experience", "Remote Wilderness"],
      description: "Experience Kenya's untamed northern wilderness with unique wildlife and authentic cultural encounters.",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "ks005",
      title: "7-Day Kenya Highlights Safari",
      duration: "7 Days",
      groupSize: "2-6 People",
      rating: 4.9,
      price: "$2,299",
      highlights: ["Masai Mara", "Amboseli", "Lake Nakuru", "Cultural Villages"],
      description: "The ultimate Kenya safari covering all major parks and reserves with authentic cultural experiences.",
      image: "https://images.unsplash.com/photo-1549366021-9f761d040fb2?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "ks006",
      title: "4-Day Meru National Park Safari",
      duration: "4 Days",
      groupSize: "2-8 People",
      rating: 4.6,
      price: "$1,199",
      highlights: ["Born Free Story", "Rhino Sanctuary", "Diverse Landscapes", "River Safaris"],
      description: "Explore the park made famous by the Born Free story with diverse wildlife and beautiful scenery.",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "ks007",
      title: "5-Day Laikipia Conservancy Safari",
      duration: "5 Days",
      groupSize: "2-6 People",
      rating: 4.8,
      price: "$1,799",
      highlights: ["Private Conservancy", "Walking Safaris", "Night Game Drives", "Community Tourism"],
      description: "Experience exclusive wildlife encounters in Kenya's premier private conservancy with community involvement.",
      image: "https://images.unsplash.com/photo-1516052121107-0d4decb9e217?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "ks008",
      title: "3-Day Aberdare National Park Safari",
      duration: "3 Days",
      groupSize: "2-10 People",
      rating: 4.7,
      price: "$799",
      highlights: ["Mountain Forest", "Tree Hotels", "Waterfalls", "Unique Wildlife"],
      description: "Discover Kenya's mountain wilderness with rare forest animals and stunning waterfalls.",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop&crop=center"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary to-primary-glow">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Kenya Safaris</h1>
            <p className="text-xl md:text-2xl">Experience the Heart of Africa</p>
          </div>
        </div>
      </section>

      {/* Safaris Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kenyaSafaris.map((safari) => (
              <Card key={safari.id} className="overflow-hidden hover:shadow-elevated transition-safari group">
                <div className="relative h-64">
                  <img 
                    src={safari.image} 
                    alt={safari.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-safari"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                    {safari.price}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{safari.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{safari.groupSize}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span>{safari.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-safari">
                    {safari.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-sm">
                    {safari.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Highlights:</p>
                    <div className="flex flex-wrap gap-2">
                      {safari.highlights.map((highlight, index) => (
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
                    <Link to={`/tour/${safari.id}`} className="flex-1 mr-2">
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                    <Link to={`/book/${safari.id}`}>
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

export default KenyaSafaris;