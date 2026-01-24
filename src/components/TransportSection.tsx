import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { X, Clock, Users, Star } from "lucide-react";

// Import images
import landTransportImg from "@/assets/transport/land-transport.jpg";
import marineTransportImg from "@/assets/transport/marine-transport.jpg";
import airTransportImg from "@/assets/transport/air-transport.jpg";
import costerBusImg from "@/assets/transport/coster-bus.jpg";
import toyotaHiaceImg from "@/assets/transport/toyota-hiace.jpg";
import toyotaAlphardImg from "@/assets/transport/toyota-alphard.jpg";
import kilimanjaroFerryImg from "@/assets/transport/kilimanjaro-ferry.jpg";
import zanFastFerryImg from "@/assets/transport/zan-fast-ferry.jpg";
import catamaranImg from "@/assets/transport/catamaran.jpg";
import yachtImg from "@/assets/transport/yacht.jpg";
import auricAirImg from "@/assets/transport/auric-air.jpg";
import precisionAirImg from "@/assets/transport/precision-air.jpg";

const transportData = [
  {
    id: 1,
    title: "Land Transport",
    description: "Comfortable and reliable ground transportation",
    image: landTransportImg,
    price: "From $20",
    duration: "Flexible",
    groupSize: "1-30 People",
    rating: 4.8,
    highlights: ["Luxury Bus", "Mini Bus", "VIP Alphard", "Professional Drivers"],
    details: [
      {
        name: "Coster Luxury Bus",
        image: costerBusImg,
        description: "Premium comfort for large groups with spacious seating and air conditioning. Perfect for safari tours and city transfers with capacity for 25-30 passengers."
      },
      {
        name: "Toyota Hiace Mini Bus",
        image: toyotaHiaceImg,
        description: "Versatile and reliable transport for small to medium groups. Ideal for family tours with comfortable seating for 8-14 passengers and excellent fuel efficiency."
      },
      {
        name: "Toyota Alphard",
        image: toyotaAlphardImg,
        description: "Luxury VIP transport with premium leather seats, entertainment system, and climate control. Perfect for executive travel and special occasions."
      }
    ]
  },
  {
    id: 2,
    title: "Marine Transport",
    description: "Ferry and boat services across the Indian Ocean",
    image: marineTransportImg,
    price: "From $35",
    duration: "2-3 Hours",
    groupSize: "1-200 People",
    rating: 4.7,
    highlights: ["Fast Ferry", "Catamaran", "Private Yacht", "Ocean Views"],
    details: [
      {
        name: "Kilimanjaro No. 7",
        image: kilimanjaroFerryImg,
        description: "Large passenger ferry offering comfortable seating and stunning ocean views. Regular service between Dar es Salaam and Zanzibar with onboard facilities."
      },
      {
        name: "Zan Fast Ferry",
        image: zanFastFerryImg,
        description: "High-speed ferry service providing quick and efficient transportation. Modern vessel with comfortable seating and shorter travel times between mainland and islands."
      },
      {
        name: "Catamaran",
        image: catamaranImg,
        description: "Luxury twin-hull vessel offering smooth sailing experience with premium amenities. Perfect for leisure trips and special occasions with stunning ocean views."
      },
      {
        name: "Yacht",
        image: yachtImg,
        description: "Private luxury yacht charter for exclusive experiences. Complete with crew, catering, and water sports equipment for the ultimate maritime adventure."
      }
    ]
  },
  {
    id: 3,
    title: "Air Transport",
    description: "Domestic and regional flight services",
    image: airTransportImg,
    price: "From $80",
    duration: "20-60 Mins",
    groupSize: "1-50 People",
    rating: 4.9,
    highlights: ["National Carrier", "Safari Flights", "Charter Options", "Quick Transfers"],
    details: [
      {
        name: "Air Tanzania",
        image: airTransportImg,
        description: "National carrier providing domestic and international flights with modern fleet and professional service. Connects major cities and tourist destinations across Tanzania."
      },
      {
        name: "Auric Air",
        image: auricAirImg,
        description: "Regional airline specializing in scheduled and charter flights to safari destinations. Small aircraft perfect for reaching remote airstrips and game parks."
      },
      {
        name: "Precision Air",
        image: precisionAirImg,
        description: "Reliable domestic airline with regular flights to major Tanzanian cities. Known for punctuality and safety with modern aircraft and experienced crew."
      }
    ]
  }
];

const TransportSection = () => {
  const [selectedTransport, setSelectedTransport] = useState<typeof transportData[0] | null>(null);

  return (
    <section className="py-6 md:py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/10 mb-6 md:mb-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Transport Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Reliable and comfortable transportation options for all your travel needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transportData.map((transport) => (
            <Card key={transport.id} className="overflow-hidden hover:shadow-elevated transition-safari group h-full flex flex-col">
              <div className="relative h-48">
                <img
                  src={transport.image}
                  alt={transport.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-safari"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {transport.price}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-20"></div>
              </div>

              <CardContent className="p-4 flex flex-col flex-1">
                <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{transport.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{transport.groupSize}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span>{transport.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-safari">
                  {transport.title}
                </h3>

                <div className="mb-4 flex-1">
                  <p className="text-sm text-muted-foreground mb-2">Highlights:</p>
                  <div className="flex flex-wrap gap-2">
                    {transport.highlights.map((highlight, index) => (
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
                    onClick={() => setSelectedTransport(transport)}
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

        <Dialog open={!!selectedTransport} onOpenChange={() => setSelectedTransport(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-foreground">
                {selectedTransport?.title}
              </DialogTitle>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4"
                onClick={() => setSelectedTransport(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogHeader>

            {selectedTransport && (
              <div className="space-y-6">
                <Carousel className="w-full">
                  <CarouselContent>
                    {selectedTransport.details.map((detail, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-2">
                          <Card className="border-0 bg-card/50">
                            <CardContent className="p-0">
                              <div className="relative overflow-hidden rounded-t-lg">
                                <img
                                  src={detail.image}
                                  alt={detail.name}
                                  className="w-full h-40 object-cover"
                                />
                              </div>
                              <div className="p-3">
                                <h4 className="text-base font-semibold text-foreground mb-2">
                                  {detail.name}
                                </h4>
                                <p className="text-xs text-muted-foreground">
                                  {detail.description}
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Choose from our premium transport options for a comfortable and memorable journey
                  </p>
                  <Button variant="safari" size="lg">
                    Book Transport
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default TransportSection;