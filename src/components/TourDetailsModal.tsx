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
    // Zanzibar Packages
    zp001: {
      ...tour,
      description: "Escape to pristine white sand beaches and crystal-clear turquoise waters. Perfect for relaxation with beachfront accommodation, water sports, and stunning sunsets over the Indian Ocean.",
      itinerary: [
        { time: "Day 1", activity: "Arrival & Beach Check-in", description: "Airport pickup, transfer to beachfront hotel, welcome drink and beach orientation" },
        { time: "Day 2", activity: "Beach Activities", description: "Snorkeling, swimming, beach volleyball, sunset dhow cruise" },
        { time: "Day 3", activity: "Departure", description: "Final beach time, checkout and airport transfer" }
      ],
      included: ["Beachfront accommodation", "Airport transfers", "Daily breakfast", "Snorkeling gear", "Sunset dhow cruise"],
      notIncluded: ["Flights", "Lunch & dinner", "Water sports equipment", "Personal expenses"],
      faqs: [
        { question: "Best time to visit?", answer: "June to September for dry season, December to March for warm weather." },
        { question: "What's included in accommodation?", answer: "Beachfront room with ocean view, daily breakfast, and beach access." }
      ]
    },
    zp002: {
      ...tour,
      description: "Ultimate relaxation package with spa treatments, yoga sessions, and luxury beachfront accommodation. Disconnect from the world and rejuvenate your mind, body, and soul.",
      itinerary: [
        { time: "Day 1", activity: "Arrival & Spa Welcome", description: "Airport transfer, luxury resort check-in, welcome spa treatment" },
        { time: "Day 2", activity: "Wellness Day", description: "Morning yoga, full body massage, meditation session, healthy cuisine" },
        { time: "Day 3", activity: "Beach Relaxation", description: "Private beach access, couples massage, sunset meditation" },
        { time: "Day 4", activity: "Cultural Wellness", description: "Traditional healing session, spice garden visit, aromatherapy" },
        { time: "Day 5", activity: "Departure", description: "Final relaxation session, checkout and airport transfer" }
      ],
      included: ["Luxury accommodation", "All spa treatments", "Daily yoga classes", "Healthy meals", "Airport transfers"],
      notIncluded: ["Flights", "Alcoholic beverages", "Additional spa services", "Personal shopping"],
      faqs: [
        { question: "What spa treatments are included?", answer: "Welcome massage, daily yoga, meditation, aromatherapy, and traditional healing." },
        { question: "Is this suitable for solo travelers?", answer: "Absolutely! Perfect for solo wellness retreats and self-care." }
      ]
    },
    zp003: {
      ...tour,
      description: "Immerse yourself in Zanzibar's rich Swahili culture. Visit Stone Town, spice farms, local villages, and experience traditional music, dance, and cuisine.",
      itinerary: [
        { time: "Day 1", activity: "Stone Town Heritage", description: "UNESCO World Heritage site tour, spice market, cultural museum" },
        { time: "Day 2", activity: "Spice Farm Experience", description: "Guided spice tour, traditional cooking class, local lunch" },
        { time: "Day 3", activity: "Village Life", description: "Local village visit, traditional crafts, community interaction" },
        { time: "Day 4", activity: "Cultural Performance", description: "Traditional music and dance show, farewell dinner" }
      ],
      included: ["Cultural guide", "All entrance fees", "Traditional meals", "Cooking class", "Cultural performances"],
      notIncluded: ["Accommodation", "Personal expenses", "Tips for guides", "Shopping"],
      faqs: [
        { question: "What will I learn about?", answer: "Swahili culture, spice history, traditional crafts, local customs and traditions." },
        { question: "Is photography allowed?", answer: "Yes, but please respect local customs and ask permission for portraits." }
      ]
    },
    // Tanzania Safari Packages
    tsp001: {
      ...tour,
      description: "Witness the greatest wildlife spectacle on Earth. Follow the Great Migration across the endless Serengeti plains, encounter massive herds of wildebeest, zebras, and predators in action.",
      itinerary: [
        { time: "Day 1", activity: "Arrival Arusha", description: "Airport pickup, briefing, overnight in Arusha" },
        { time: "Day 2", activity: "Serengeti Central", description: "Drive to Serengeti, afternoon game drive, camp setup" },
        { time: "Day 3", activity: "Migration Tracking", description: "Full day following herds, river crossings, predator action" },
        { time: "Day 4", activity: "Northern Serengeti", description: "Mara River area, wildebeest crossings, big cats" },
        { time: "Day 5", activity: "Departure", description: "Morning game drive, fly back to Arusha, airport transfer" }
      ],
      included: ["4x4 safari vehicle", "Professional guide", "Park fees", "Camping equipment", "All meals", "Flights Serengeti-Arusha"],
      notIncluded: ["International flights", "Visa fees", "Travel insurance", "Alcoholic drinks", "Tips"],
      faqs: [
        { question: "When is the migration?", answer: "July-October in northern Serengeti, December-March in southern areas." },
        { question: "What animals will we see?", answer: "Wildebeest, zebras, lions, leopards, cheetahs, elephants, and over 500 bird species." }
      ]
    },
    tsp002: {
      ...tour,
      description: "Descend into the world's largest intact volcanic crater, home to 25,000 large animals including the Big Five. Experience the Garden of Eden of Africa.",
      itinerary: [
        { time: "Day 1", activity: "Arusha to Ngorongoro", description: "Drive to crater rim, lodge check-in, crater viewpoint" },
        { time: "Day 2", activity: "Crater Floor Safari", description: "Descend into crater, full day game drive, picnic lunch" },
        { time: "Day 3", activity: "Departure", description: "Morning at leisure, drive back to Arusha, airport transfer" }
      ],
      included: ["Lodge accommodation", "4x4 safari vehicle", "Professional guide", "Park fees", "All meals"],
      notIncluded: ["Flights", "Crater service fee", "Drinks", "Tips", "Personal expenses"],
      faqs: [
        { question: "Why is Ngorongoro special?", answer: "Highest concentration of wildlife in Africa, guaranteed Big Five sightings." },
        { question: "How deep is the crater?", answer: "600 meters deep, 20km wide, covering 300 square kilometers." }
      ]
    },
    tsp003: {
      ...tour,
      description: "Explore two contrasting parks: Tarangire with giant baobab trees and huge elephant herds, and Lake Manyara famous for tree-climbing lions and flamingos.",
      itinerary: [
        { time: "Day 1", activity: "Tarangire National Park", description: "Morning drive to Tarangire, full day game drive, elephant herds" },
        { time: "Day 2", activity: "Lake Manyara", description: "Tree-climbing lions, flamingo flocks, diverse ecosystems" },
        { time: "Day 3", activity: "Manyara Exploration", description: "Canopy walk, hot springs, cultural visit" },
        { time: "Day 4", activity: "Return Arusha", description: "Morning game drive, return to Arusha" }
      ],
      included: ["Mid-range lodges", "Safari vehicle", "Professional guide", "Park fees", "All meals"],
      notIncluded: ["Flights", "Drinks", "Tips", "Personal expenses", "Optional activities"],
      faqs: [
        { question: "Best time for tree-climbing lions?", answer: "Dry season (June-October) when lions seek shade in trees." },
        { question: "What makes Tarangire special?", answer: "Largest elephant herds in Tanzania and iconic baobab trees." }
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