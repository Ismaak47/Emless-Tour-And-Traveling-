import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import waterSportsImg from "@/assets/activities/water-sports.jpg";
import divingImg from "@/assets/activities/diving.jpg";
import aerialImg from "@/assets/activities/aerial.jpg";
import culturalImg from "@/assets/activities/cultural.jpg";
import windSurfingImg from "@/assets/activities/wind-surfing.jpg";
import jetSkiImg from "@/assets/activities/jet-ski.jpg";
import bananaBoatImg from "@/assets/activities/banana-boat.jpg";
import kiteBoardImg from "@/assets/activities/kite-board.jpg";
import scubaDivingImg from "@/assets/activities/scuba-diving.jpg";
import snorkelingImg from "@/assets/activities/snorkeling.jpg";
import nightDivingImg from "@/assets/activities/night-diving.jpg";
import wreckDivingImg from "@/assets/activities/wreck-diving.jpg";
import parasailingImg from "@/assets/activities/parasailing.jpg";
import kiteFlyingImg from "@/assets/activities/kite-flying.jpg";
import helicopterTourImg from "@/assets/activities/helicopter-tour.jpg";
import paraglidingImg from "@/assets/activities/paragliding.jpg";
import villageToursImg from "@/assets/activities/village-tours.jpg";
import mwakakogwaFestivalImg from "@/assets/activities/mwakakogwa-festival.jpg";
import seaweedToursImg from "@/assets/activities/seaweed-tours.jpg";
import quadToursImg from "@/assets/activities/quad-tours.jpg";
import cyclingAdventureImg from "@/assets/activities/cycling-adventure.jpg";

interface Activity {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
  duration: string;
  groupSize: string;
  rating: number;
  highlights: string[];
  subActivities: {
    name: string;
    description: string;
    image: string;
  }[];
}

const activities: Activity[] = [
  {
    id: "water-sports",
    name: "Water Sports",
    image: waterSportsImg,
    description: "Experience the thrill of Zanzibar's crystal-clear waters with our exciting water sport adventures.",
    price: "From $30",
    duration: "1-4 Hours",
    groupSize: "1-10 People",
    rating: 4.8,
    highlights: ["Wind Surfing", "Jet Ski", "Banana Boat", "Kite Boarding"],
    subActivities: [
      {
        name: "Wind Surfing",
        description: "Harness the power of trade winds across pristine lagoons with professional instruction and equipment.",
        image: windSurfingImg
      },
      {
        name: "Jet Ski",
        description: "High-speed adventures exploring hidden coves and pristine coastlines of Zanzibar.",
        image: jetSkiImg
      },
      {
        name: "Banana Boat",
        description: "Fun-filled group rides perfect for families and friends seeking shared water adventures.",
        image: bananaBoatImg
      },
      {
        name: "Kite Board",
        description: "Advanced kiteboarding sessions for thrill-seekers in ideal wind conditions.",
        image: kiteBoardImg
      }
    ]
  },
  {
    id: "diving",
    name: "Diving",
    image: divingImg,
    description: "Discover the underwater wonders of Zanzibar's marine sanctuaries and coral reefs.",
    price: "From $50",
    duration: "2-6 Hours",
    groupSize: "2-8 People",
    rating: 4.9,
    highlights: ["Scuba Diving", "Snorkeling", "Night Diving", "Wreck Diving"],
    subActivities: [
      {
        name: "Scuba Diving",
        description: "Explore vibrant coral reefs, underwater caves, and diverse marine life with certified instructors.",
        image: scubaDivingImg
      },
      {
        name: "Snorkeling",
        description: "Surface exploration of shallow reefs perfect for beginners and families.",
        image: snorkelingImg
      },
      {
        name: "Night Diving",
        description: "Experience the ocean's nocturnal life with guided night diving expeditions.",
        image: nightDivingImg
      },
      {
        name: "Wreck Diving",
        description: "Explore historical shipwrecks and artificial reefs around Zanzibar waters.",
        image: wreckDivingImg
      }
    ]
  },
  {
    id: "aerial",
    name: "Aerial Activities",
    image: aerialImg,
    description: "Soar above Zanzibar's stunning landscapes and coastlines with our aerial adventures.",
    price: "From $120",
    duration: "15-60 Mins",
    groupSize: "1-4 People",
    rating: 4.7,
    highlights: ["Parasailing", "Helicopter Tours", "Paragliding", "Kite Flying"],
    subActivities: [
      {
        name: "Parasailing",
        description: "Fly high above turquoise waters with panoramic views of Zanzibar's coastline.",
        image: parasailingImg
      },
      {
        name: "Kite Flying",
        description: "Traditional and modern kite flying experiences on pristine beaches.",
        image: kiteFlyingImg
      },
      {
        name: "Helicopter Tours",
        description: "Scenic helicopter flights showcasing Zanzibar's beauty from above.",
        image: helicopterTourImg
      },
      {
        name: "Paragliding",
        description: "Tandem paragliding adventures for breathtaking aerial perspectives.",
        image: paraglidingImg
      }
    ]
  },
  {
    id: "cultural",
    name: "Cultural Village Tours",
    image: culturalImg,
    description: "Immerse yourself in authentic Zanzibar culture and traditional ways of life.",
    price: "From $40",
    duration: "3-5 Hours",
    groupSize: "2-15 People",
    rating: 4.8,
    highlights: ["Village Visits", "Mwakakogwa", "Seaweed Farming", "Cycling"],
    subActivities: [
      {
        name: "Village Tours",
        description: "Authentic visits to local villages experiencing traditional daily life and customs.",
        image: villageToursImg
      },
      {
        name: "Mwakakogwa Festival",
        description: "Participate in traditional cultural festivals celebrating Zanzibar heritage.",
        image: mwakakogwaFestivalImg
      },
      {
        name: "Seaweed Tours",
        description: "Learn about traditional seaweed farming with local women farmers.",
        image: seaweedToursImg
      },
      {
        name: "Quad Tours",
        description: "Adventure quad biking through villages, farms, and scenic countryside.",
        image: quadToursImg
      },
      {
        name: "Cycling Adventure",
        description: "Guided bicycle tours through rural landscapes and traditional communities.",
        image: cyclingAdventureImg
      }
    ]
  }
];

const ActivitiesSection = ({ showAll = false }: { showAll?: boolean }) => {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  const displayedActivities = showAll ? activities : activities.slice(0, 3);

  return (
    <section className="pt-4 md:pt-6 pb-4 md:pb-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Activities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover exciting adventures and cultural experiences in Zanzibar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedActivities.map((activity) => (
            <Card key={activity.id} className="overflow-hidden hover:shadow-elevated transition-safari group">
              <div className="relative h-48">
                <img
                  src={activity.image}
                  alt={activity.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-safari"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {activity.price}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-20"></div>
              </div>

              <CardContent className="p-4">
                <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{activity.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{activity.groupSize}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span>{activity.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-safari">
                  {activity.name}
                </h3>

                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Highlights:</p>
                  <div className="flex flex-wrap gap-2">
                    {activity.highlights.map((highlight, index) => (
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
                  <Button
                    variant="outline"
                    className="flex-1 mr-2"
                    onClick={() => setSelectedActivity(activity)}
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

        {!showAll && (
          <div className="text-center mt-6 md:mt-8">
            <Link to="/activities">
              <Button
                variant="safari"
                size="lg"
                className="px-12"
              >
                See More Activities
              </Button>
            </Link>
          </div>
        )}

        <Dialog open={!!selectedActivity} onOpenChange={() => setSelectedActivity(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedActivity && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold">
                    {selectedActivity.name}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  <p className="text-muted-foreground text-base">
                    {selectedActivity.description}
                  </p>

                  <div className="relative">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {selectedActivity.subActivities.map((subActivity, index) => (
                          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <Card className="border-border overflow-hidden">
                              <div className="relative h-40 overflow-hidden">
                                <img
                                  src={subActivity.image}
                                  alt={subActivity.name}
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-3 left-3 right-3">
                                  <h4 className="text-white font-semibold text-base mb-1">
                                    {subActivity.name}
                                  </h4>
                                </div>
                              </div>
                              <CardContent className="p-3">
                                <p className="text-xs text-muted-foreground">
                                  {subActivity.description}
                                </p>
                              </CardContent>
                            </Card>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                    </Carousel>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ActivitiesSection;