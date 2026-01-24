import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, MapPin, Calendar, X } from "lucide-react";

interface TourDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  tour: any;
}

const TourDetailsModal = ({ isOpen, onClose, tour }: TourDetailsModalProps) => {
  if (!tour) return null;

  const tourDetails = {
    // Zanzibar Tours
    zt001: {
      ...tour,
      description: "Explore the narrow winding streets of Stone Town, a UNESCO World Heritage Site rich in history and culture. Discover the fascinating blend of Arabian, Persian, Indian, and European influences that make this ancient city so unique.",
      itinerary: [
        { time: "9:00 AM", activity: "Pick up from hotel", description: "Our guide will collect you from your accommodation" },
        { time: "9:30 AM", activity: "Stone Town Walking Tour", description: "Explore the historic streets and learn about the city's rich history" },
        { time: "11:00 AM", activity: "Visit Spice Market", description: "Experience the vibrant local market and spice trading" },
        { time: "12:00 PM", activity: "Cultural Sites Tour", description: "Visit mosques, palaces and other cultural landmarks" },
        { time: "1:00 PM", activity: "Return to hotel", description: "End of tour with drop-off at your accommodation" }
      ],
      included: ["Licensed guide", "Hotel transfers", "Entrance fees", "Bottled water"],
      notIncluded: ["Lunch", "Personal expenses", "Tips"],
      faqs: [
        { question: "What should I wear?", answer: "Comfortable walking shoes and modest clothing are recommended as we'll visit religious sites." },
        { question: "Is this tour suitable for children?", answer: "Yes, this tour is family-friendly and suitable for children of all ages." }
      ]
    },
    zt002: {
      ...tour,
      description: "Visit authentic spice plantations and learn about Zanzibar's famous spices. Enjoy a traditional lunch prepared with fresh spices and tropical fruits.",
      itinerary: [
        { time: "8:30 AM", activity: "Hotel pickup", description: "Collection from your accommodation" },
        { time: "9:30 AM", activity: "Spice Farm Tour", description: "Guided tour of spice plantations" },
        { time: "11:30 AM", activity: "Fruit Tasting", description: "Sample fresh tropical fruits" },
        { time: "12:30 PM", activity: "Traditional Lunch", description: "Enjoy local cuisine with fresh spices" },
        { time: "2:00 PM", activity: "Return to hotel", description: "Drop-off at accommodation" }
      ],
      included: ["Transport", "Guide", "Lunch", "Fruit tasting", "Spice samples"],
      notIncluded: ["Personal expenses", "Tips", "Drinks"],
      faqs: [
        { question: "What spices will we see?", answer: "Cardamom, cinnamon, nutmeg, cloves, vanilla, and many more tropical spices." },
        { question: "Is lunch included?", answer: "Yes, a traditional Swahili lunch is included in the tour." }
      ]
    },
    // Tanzania Safaris
    ts001: {
      ...tour,
      description: "Experience the world-famous Serengeti National Park and the breathtaking Ngorongoro Crater. Witness the Great Migration, encounter the Big Five, and immerse yourself in Tanzania's incredible wildlife.",
      itinerary: [
        { time: "Day 1", activity: "Arrival & Tarangire", description: "Airport pickup and drive to Tarangire National Park for game drive" },
        { time: "Day 2", activity: "Serengeti National Park", description: "Full day game drive in Central Serengeti" },
        { time: "Day 3", activity: "Serengeti - Northern Circuit", description: "Explore the northern Serengeti following the migration" },
        { time: "Day 4", activity: "Ngorongoro Crater", description: "Descend into the crater for wildlife viewing" },
        { time: "Day 5", activity: "Cultural Visit & Departure", description: "Maasai village visit and transfer to airport" }
      ],
      included: ["4x4 Safari Vehicle", "Professional Guide", "Park Fees", "Accommodation", "All Meals", "Airport Transfers"],
      notIncluded: ["Flights", "Visa", "Travel Insurance", "Personal Expenses", "Tips"],
      faqs: [
        { question: "When is the best time to visit?", answer: "June to October for dry season, December to March for calving season." },
        { question: "What type of accommodation?", answer: "Mid-range tented camps and lodges with en-suite facilities." }
      ]
    }
  };

  // Generate details for any tour/package that doesn't have specific data
  const getDetails = (tour: any) => {
    if (tourDetails[tour.id as keyof typeof tourDetails]) {
      return tourDetails[tour.id as keyof typeof tourDetails];
    }
    
    return {
      ...tour,
      description: `Experience the best of ${tour.name || tour.title} with our carefully crafted ${tour.duration} adventure. This package offers unforgettable memories and authentic experiences in Tanzania's most beautiful destinations.`,
      itinerary: [
        { time: "Day 1", activity: "Arrival & Welcome", description: "Airport pickup and transfer to accommodation with welcome briefing" },
        { time: "Day 2", activity: "Main Activities", description: "Full day of planned activities and cultural experiences" },
        { time: "Day 3", activity: "Adventure & Exploration", description: "Discover local culture, nature, and authentic experiences" },
        { time: "Final Day", activity: "Departure", description: "Final activities and transfer to airport for departure" }
      ],
      included: ["Accommodation", "Professional Guide", "Transport", "Entrance Fees", "Some Meals", "Airport Transfers"],
      notIncluded: ["International Flights", "Visa Fees", "Travel Insurance", "Personal Expenses", "Tips & Gratuities"],
      faqs: [
        { question: "What's the best time to visit?", answer: "Year-round destination with different seasonal highlights and weather patterns." },
        { question: "What should I pack?", answer: "Comfortable clothing, sunscreen, camera, personal medications, and appropriate footwear." },
        { question: "Is this suitable for families?", answer: "Yes, this package can be customized for families with children of all ages." }
      ]
    };
  };

  const details = getDetails(tour);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{tour.title || tour.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Hero Image */}
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img
              src={tour.image || "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop"}
              alt={tour.title || tour.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              {tour.price}
            </div>
          </div>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{tour.groupSize || "Small Group"}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{tour.category || "Adventure"}</span>
            </div>
            {tour.rating && (
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span>{tour.rating}</span>
              </div>
            )}
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
              <TabsTrigger value="included">Included</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {details.description}
                  </p>
                  <div>
                    <h4 className="font-semibold mb-3">Highlights</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {(tour.highlights || [tour.highlights || "Amazing experience"]).map((highlight: string, index: number) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="itinerary" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {details.itinerary.map((item: any, index: number) => (
                      <div key={index} className="flex space-x-4">
                        <div className="flex-shrink-0 w-20 text-sm font-semibold text-primary">
                          {item.time}
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{item.activity}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="included" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">What's Included</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {details.included.map((item: string, index: number) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600">Not Included</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {details.notIncluded.map((item: string, index: number) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="faqs" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {details.faqs.map((faq: any, index: number) => (
                      <div key={index}>
                        <h4 className="font-semibold mb-2">{faq.question}</h4>
                        <p className="text-sm text-muted-foreground">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <Button variant="safari" className="flex-1">
              Book Now - {tour.price}
            </Button>
            <Button variant="outline" className="flex-1">
              Contact Us
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TourDetailsModal;