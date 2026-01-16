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
  },
  {
    id: 2,
    name: "Riu Jambo Zanzibar",
    image: riuJambo,
    alt: "Riu Jambo Zanzibar resort with infinity pool",
  },
  {
    id: 3,
    name: "Ocean Paradise Hotel",
    image: oceanParadise,
    alt: "Ocean Paradise Hotel beachfront property",
  },
  {
    id: 4,
    name: "Amani Bungalows",
    image: amaniBungalows,
    alt: "Amani Bungalows eco-friendly overwater bungalows",
  },
  {
    id: 5,
    name: "Kwendwa Rocks Hotel",
    image: kwendwaRocks,
    alt: "Kwendwa Rocks Hotel boutique accommodation",
  },
  {
    id: 6,
    name: "Tembo Hotel",
    image: temboHotel,
    alt: "Tembo Hotel historic Stone Town waterfront",
  },
  {
    id: 7,
    name: "Marijani Hotel",
    image: marijaniHotel,
    alt: "Marijani Hotel charming boutique property",
  },
  {
    id: 8,
    name: "Essque Zalu",
    image: essqueZalu,
    alt: "Essque Zalu luxury resort with ocean views",
  },
  {
    id: 9,
    name: "Blue Bay Beach Resort",
    image: blueBay,
    alt: "Blue Bay Beach Resort tropical paradise",
  },
  {
    id: 10,
    name: "The Mora Zanzibar",
    image: theMora,
    alt: "The Mora Zanzibar luxury beachfront hotel",
  },
];

const HotelsSection = () => {
  const navigate = useNavigate();

  const handleBookNow = (hotelName: string) => {
    // Navigate to booking form with hotel parameter
    navigate(`/book/hotel-${hotelName.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <section className="-mt-6 md:-mt-12 pb-8 md:pb-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Top Hotels in Zanzibar
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
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
                  <Card className="group overflow-hidden border-0 shadow-safari hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={hotel.image}
                          alt={hotel.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-4 bg-card">
                        <h3 className="text-lg font-semibold text-card-foreground mb-4 min-h-[3rem] flex items-center">
                          {hotel.name}
                        </h3>
                        <Button
                          onClick={() => handleBookNow(hotel.name)}
                          variant="safari"
                          size="lg"
                          className="w-full"
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