import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const TanzaniaSafaris = () => {
  const tanzaniaSafaris = [
    {
      id: "ts001",
      title: "5-Day Serengeti & Ngorongoro Safari",
      duration: "5 Days",
      groupSize: "2-6 People",
      rating: 4.9,
      price: "$1,899",
      highlights: ["Great Migration", "Big Five", "Ngorongoro Crater", "Cultural Visit"],
      description: "Experience the world-famous Serengeti National Park and the breathtaking Ngorongoro Crater.",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "ts002",
      title: "3-Day Tarangire & Lake Manyara Safari",
      duration: "3 Days",
      groupSize: "2-8 People",
      rating: 4.7,
      price: "$899",
      highlights: ["Elephant Herds", "Tree Climbing Lions", "Baobab Trees", "Bird Watching"],
      description: "Discover the elephant paradise of Tarangire and the unique tree-climbing lions of Lake Manyara.",
      image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "ts003",
      title: "7-Day Kilimanjaro Trekking - Machame Route",
      duration: "7 Days",
      groupSize: "2-12 People",
      rating: 4.8,
      price: "$2,299",
      highlights: ["Uhuru Peak", "Machame Route", "Professional Guide", "All Equipment"],
      description: "Conquer Africa's highest peak via the scenic Machame route with experienced guides.",
      image: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "ts004",
      title: "4-Day Selous Game Reserve Safari",
      duration: "4 Days",
      groupSize: "2-8 People",
      rating: 4.7,
      price: "$1,299",
      highlights: ["Boat Safari", "Walking Safari", "Wild Dogs", "Rufiji River"],
      description: "Explore Africa's largest game reserve with boat safaris and walking adventures.",
      image: "https://images.unsplash.com/photo-1549366021-9f761d040fb2?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "ts005",
      title: "6-Day Northern Circuit Complete Safari",
      duration: "6 Days",
      groupSize: "2-6 People",
      rating: 4.9,
      price: "$2,199",
      highlights: ["Serengeti", "Ngorongoro", "Tarangire", "Lake Manyara"],
      description: "The ultimate Northern Tanzania safari covering all major national parks.",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "ts006",
      title: "3-Day Mikumi National Park Safari",
      duration: "3 Days",
      groupSize: "2-8 People",
      rating: 4.6,
      price: "$699",
      highlights: ["Savannah Plains", "Hippo Pools", "Wildlife Viewing", "Baobab Trees"],
      description: "Explore the accessible Mikumi National Park with diverse wildlife and beautiful landscapes.",
      image: "https://images.unsplash.com/photo-1549366021-9f761d040fb2?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "ts007",
      title: "5-Day Ruaha National Park Safari",
      duration: "5 Days",
      groupSize: "2-6 People",
      rating: 4.8,
      price: "$1,599",
      highlights: ["Great Ruaha River", "Predator Capital", "Remote Wilderness", "Baobab Forest"],
      description: "Discover Tanzania's largest national park, famous for its predators and remote wilderness.",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "ts008",
      title: "8-Day Tanzania Highlights Safari",
      duration: "8 Days",
      groupSize: "2-6 People",
      rating: 4.9,
      price: "$2,799",
      highlights: ["Serengeti", "Ngorongoro", "Tarangire", "Lake Manyara", "Olduvai Gorge"],
      description: "The comprehensive Tanzania safari experience covering all the iconic destinations.",
      image: "https://images.unsplash.com/photo-1516052121107-0d4decb9e217?w=400&h=300&fit=crop&crop=center"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary to-primary-glow">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Tanzania Safaris</h1>
            <p className="text-xl md:text-2xl">Wildlife Adventures of a Lifetime</p>
          </div>
        </div>
      </section>

      {/* Safaris Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tanzaniaSafaris.map((safari) => (
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

export default TanzaniaSafaris;