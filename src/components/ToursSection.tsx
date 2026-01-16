import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Users, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ToursSection = () => {
  const [showAllTours, setShowAllTours] = useState(false);
  const tours = [
    // Zanzibar Tours
    {
      id: "zt001",
      title: "Stone Town Historical & Cultural Tour",
      duration: "Half Day",
      groupSize: "2-12 People",
      rating: 4.8,
      price: "$45",
      category: "zanzibar",
      highlights: ["UNESCO World Heritage Site", "Spice Markets", "Cultural Sites", "Local Guide"],
      image: "https://ucarecdn.com/19e59ca1-023f-4b5b-b13f-5799c8a0ff6b/-/crop/4218x2215/0,78/-/resize/1200x630/"
    },
    {
      id: "zt002",
      title: "Spice Farm Tour & Local Lunch",
      duration: "Full Day",
      groupSize: "2-15 People",
      rating: 4.9,
      price: "$65",
      category: "zanzibar",
      highlights: ["Spice Plantation", "Traditional Lunch", "Fruit Tasting", "Local Culture"],
      image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/11/f9/2b/92.jpg"
    },
    {
      id: "zt003",
      title: "Prison Island & Giant Tortoises",
      duration: "Half Day",
      groupSize: "2-10 People",
      rating: 4.7,
      price: "$55",
      category: "zanzibar",
      highlights: ["Historical Prison", "Giant Tortoises", "Snorkeling", "Boat Transfer"],
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "zt004",
      title: "Safari Blue - Dolphin & Snorkeling Adventure",
      duration: "Full Day",
      groupSize: "2-20 People",
      rating: 4.9,
      price: "$85",
      category: "zanzibar",
      highlights: ["Dolphin Watching", "Snorkeling", "Seafood Lunch", "Sandbank Visit"],
      image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb1?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "zt005",
      title: "Jozani Forest Red Colobus Monkeys",
      duration: "Half Day",
      groupSize: "2-15 People",
      rating: 4.6,
      price: "$40",
      category: "zanzibar",
      highlights: ["Endemic Red Colobus", "Nature Walk", "Mangrove Boardwalk", "Conservation"],
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "zt006",
      title: "Kizimkazi Dolphin Tour",
      duration: "Half Day",
      groupSize: "2-12 People",
      rating: 4.8,
      price: "$50",
      category: "zanzibar",
      highlights: ["Dolphin Swimming", "Historic Mosque", "Snorkeling", "Local Village"],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&crop=center"
    },
    // Tanzania Safaris
    {
      id: "ts001",
      title: "5-Day Serengeti & Ngorongoro Safari",
      duration: "5 Days",
      groupSize: "2-6 People",
      rating: 4.9,
      price: "$1,899",
      category: "tanzania",
      highlights: ["Great Migration", "Big Five", "Ngorongoro Crater", "Cultural Visit"],
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "ts002",
      title: "3-Day Tarangire & Lake Manyara Safari",
      duration: "3 Days",
      groupSize: "2-8 People",
      rating: 4.7,
      price: "$899",
      category: "tanzania",
      highlights: ["Elephant Herds", "Tree Climbing Lions", "Baobab Trees", "Bird Watching"],
      image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "ts003",
      title: "7-Day Kilimanjaro Trekking - Machame Route",
      duration: "7 Days",
      groupSize: "2-12 People",
      rating: 4.8,
      price: "$2,299",
      category: "tanzania",
      highlights: ["Uhuru Peak", "Machame Route", "Professional Guide", "All Equipment"],
      image: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "combo001",
      title: "10-Day Tanzania Safari & Zanzibar Beach",
      duration: "10 Days",
      groupSize: "2-6 People",
      rating: 4.9,
      price: "$2,799",
      category: "combo",
      highlights: ["Serengeti Safari", "Ngorongoro Crater", "Stone Town", "Beach Relaxation"],
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "ts004",
      title: "4-Day Selous Game Reserve Safari",
      duration: "4 Days",
      groupSize: "2-8 People",
      rating: 4.7,
      price: "$1,299",
      category: "tanzania",
      highlights: ["Boat Safari", "Walking Safari", "Wild Dogs", "Rufiji River"],
      image: "https://images.unsplash.com/photo-1549366021-9f761d040fb2?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: "ts005",
      title: "6-Day Northern Circuit Complete Safari",
      duration: "6 Days",
      groupSize: "2-6 People",
      rating: 4.9,
      price: "$2,199",
      category: "tanzania",
      highlights: ["Serengeti", "Ngorongoro", "Tarangire", "Lake Manyara"],
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop&crop=center"
    }
  ];

  const toursToShow = showAllTours ? tours : tours.slice(0, 4);

  return (
    <section className="py-2 md:py-4 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-2 md:mb-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Zanzibar Tours & Tanzania Safaris
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the magic of Zanzibar's pristine beaches and Stone Town culture, combined with Tanzania's world-renowned safari destinations including Serengeti and Ngorongoro.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {toursToShow.map((tour) => (
            <Card key={tour.id} className="overflow-hidden hover:shadow-elevated transition-safari group">
              <div className="relative h-48">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-safari"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {tour.price}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-20"></div>
              </div>

              <CardContent className="p-4">
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

                <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-safari">
                  {tour.title}
                </h3>

                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Highlights:</p>
                  <div className="flex flex-wrap gap-2">
                    {tour.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-muted text-muted-foreground px-2 py-0.5 rounded-md text-[10px]"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Link to={`/tour/${tour.id}`}>
                    <Button variant="outline" className="flex-1 mr-2">
                      View Details
                    </Button>
                  </Link>
                  <Link to="/book">
                    <Button variant="safari">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Tours Button */}
        <div className="text-center mt-10 md:mt-16">
          {!showAllTours ? (
            <Button
              variant="safari"
              size="lg"
              className="px-12"
              onClick={() => setShowAllTours(true)}
            >
              See More Tours & Safaris
            </Button>
          ) : (
            <Button
              variant="outline"
              size="lg"
              className="px-12"
              onClick={() => setShowAllTours(false)}
            >
              Show Less
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ToursSection;