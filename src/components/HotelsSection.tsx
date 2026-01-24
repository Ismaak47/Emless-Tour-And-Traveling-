import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star } from "lucide-react";

// Import hotel images
import royalZanzibar from "@/assets/hotels/royal-zanzibar.jpg";
import riuJambo from "@/assets/hotels/riu-jambo.jpg";
import oceanParadise from "@/assets/hotels/ocean-paradise.jpg";
import amaniBungalows from "@/assets/hotels/amani-bungalows.jpg";
import kwendwaRocks from "@/assets/hotels/kwendwa-rocks.jpg";
import temboHotel from "@/assets/hotels/tembo-hotel.jpg";
import marijaniHotel from "@/assets/hotels/marijani-hotel.jpg";
import essqueZalu from "@/assets/hotels/essque-zalu.jpg";
import blueBay from "@/assets/hotels/blue-bay.jpg";
import theMora from "@/assets/hotels/the-mora.jpg";

const hotels = [
  {
    id: 1,
    name: "Royal Zanzibar",
    image: royalZanzibar,
    alt: "Royal Zanzibar luxury hotel with colonial architecture",
    price: "$250",
    duration: "Per Night",
    groupSize: "2 Guests",
    rating: 4.8,
    highlights: ["Luxury Spa", "Infinity Pool", "Private Beach", "Fine Dining"]
  },
  {
    id: 2,
    name: "Riu Jambo Zanzibar",
    image: riuJambo,
    alt: "Riu Jambo Zanzibar resort with infinity pool",
    price: "$220",
    duration: "Per Night",
    groupSize: "2 Guests",
    rating: 4.7,
    highlights: ["All Inclusive", "Water Sports", "Evening Shows", "Kids Club"]
  },
  {
    id: 3,
    name: "Ocean Paradise Hotel",
    image: oceanParadise,
    alt: "Ocean Paradise Hotel beachfront property",
    price: "$180",
    duration: "Per Night",
    groupSize: "2 Guests",
    rating: 4.6,
    highlights: ["Tropical Garden", "Large Pool", "Beachfront", "Live Music"]
  },
  {
    id: 4,
    name: "Amani Bungalows",
    image: amaniBungalows,
    alt: "Amani Bungalows eco-friendly overwater bungalows",
    price: "$120",
    duration: "Per Night",
    groupSize: "2 Guests",
    rating: 4.5,
    highlights: ["Eco Friendly", "Ocean View", "Cozy Rooms", "Local Cuisine"]
  },
  {
    id: 5,
    name: "Kwendwa Rocks Hotel",
    image: kwendwaRocks,
    alt: "Kwendwa Rocks Hotel boutique accommodation",
    price: "$150",
    duration: "Per Night",
    groupSize: "2 Guests",
    rating: 4.6,
    highlights: ["Full Moon Party", "Beach Bar", "Snorkeling", "Sunset Views"]
  },
  {
    id: 6,
    name: "Tembo Hotel",
    image: temboHotel,
    alt: "Tembo Hotel historic Stone Town waterfront",
    price: "$140",
    duration: "Per Night",
    groupSize: "2 Guests",
    rating: 4.7,
    highlights: ["Historic Site", "Waterfront", "Museum Access", "Traditional Decor"]
  },
  {
    id: 7,
    name: "Marijani Hotel",
    image: marijaniHotel,
    alt: "Marijani Hotel charming boutique property",
    price: "$190",
    duration: "Per Night",
    groupSize: "2 Guests",
    rating: 4.8,
    highlights: ["Boutique Style", "Gourmet Food", "Quiet Beach", "Personal Service"]
  },
  {
    id: 8,
    name: "Essque Zalu",
    image: essqueZalu,
    alt: "Essque Zalu luxury resort with ocean views",
    price: "$300",
    duration: "Per Night",
    groupSize: "2 Guests",
    rating: 4.9,
    highlights: ["Art Gallery", "Jetty Bar", "Luxury Suites", "Holistic Spa"]
  },
  {
    id: 9,
    name: "Blue Bay Beach Resort",
    image: blueBay,
    alt: "Blue Bay Beach Resort tropical paradise",
    price: "$210",
    duration: "Per Night",
    groupSize: "2 Guests",
    rating: 4.7,
    highlights: ["Palm Groves", "Tennis Courts", "Diving Center", "Beach BBQ"]
  },
  {
    id: 10,
    name: "The Mora Zanzibar",
    image: theMora,
    alt: "The Mora Zanzibar luxury beachfront hotel",
    price: "$280",
    duration: "Per Night",
    groupSize: "2 Guests",
    rating: 4.8,
    highlights: ["Modern Luxury", "Rooftop Bar", "Infinity Pool", "Wellness Center"]
  },
];

const HotelsSection = () => {
  const navigate = useNavigate();

  const handleBookNow = (hotelName: string) => {
    // Navigate to booking form with hotel parameter
    navigate(`/book/hotel-${hotelName.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <section className="pt-3 md:pt-4 pb-4 md:pb-6 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Top Hotels in Zanzibar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the finest accommodations in Zanzibar, from luxury resorts to charming boutique hotels
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {hotels.map((hotel) => (
                <CarouselItem key={hotel.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Card className="overflow-hidden hover:shadow-elevated transition-safari group h-full flex flex-col">
                    <div className="relative h-48">
                      <img
                        src={hotel.image}
                        alt={hotel.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-safari"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-20"></div>
                    </div>

                    <CardContent className="p-4 flex flex-col flex-1">
                      <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{hotel.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{hotel.groupSize}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-primary text-primary" />
                          <span>{hotel.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-safari min-h-[3.5rem] flex items-center">
                        {hotel.name}
                      </h3>

                      <div className="mb-4 flex-1">
                        <p className="text-sm text-muted-foreground mb-2">Highlights:</p>
                        <div className="flex flex-wrap gap-2">
                          {hotel.highlights.map((highlight, index) => (
                            <span
                              key={index}
                              className="bg-muted text-muted-foreground px-2 py-0.5 rounded-md text-[10px]"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-auto gap-2">
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => handleBookNow(hotel.name)}
                        >
                          View Details
                        </Button>
                        <Button
                          variant="safari"
                          className="flex-1"
                          onClick={() => handleBookNow(hotel.name)}
                        >
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="flex -left-4 md:-left-12 bg-background/80 backdrop-blur-sm border-border hover:bg-accent" />
            <CarouselNext className="flex -right-4 md:-right-12 bg-background/80 backdrop-blur-sm border-border hover:bg-accent" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HotelsSection;