import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, MapPin, Calendar, DollarSign } from "lucide-react";
import { useParams, Link } from "react-router-dom";

const TourDetail = () => {
  const { tourId } = useParams();

  // Mock tour data - in a real app, this would come from an API
  const tourData: Record<string, any> = {
    zt001: {
      title: "Stone Town Historical & Cultural Tour",
      duration: "Half Day",
      groupSize: "2-12 People",
      rating: 4.8,
      price: "$45",
      category: "zanzibar",
      highlights: ["UNESCO World Heritage Site", "Spice Markets", "Cultural Sites", "Local Guide"],
      description: "Explore the narrow winding streets of Stone Town, a UNESCO World Heritage Site rich in history and culture. Discover the fascinating blend of Arabian, Persian, Indian, and European influences that make this ancient city so unique.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop&crop=center",
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
        { question: "Is this tour suitable for children?", answer: "Yes, this tour is family-friendly and suitable for children of all ages." },
        { question: "How much walking is involved?", answer: "This is a walking tour covering approximately 2-3 km at a leisurely pace." }
      ]
    },
    ts001: {
      title: "5-Day Serengeti & Ngorongoro Safari",
      duration: "5 Days",
      groupSize: "2-6 People",
      rating: 4.9,
      price: "$1,899",
      category: "tanzania",
      highlights: ["Great Migration", "Big Five", "Ngorongoro Crater", "Cultural Visit"],
      description: "Experience the world-famous Serengeti National Park and the breathtaking Ngorongoro Crater. Witness the Great Migration, encounter the Big Five, and immerse yourself in Tanzania's incredible wildlife.",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=400&fit=crop&crop=center",
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
        { question: "What type of accommodation?", answer: "Mid-range tented camps and lodges with en-suite facilities." },
        { question: "What should I pack?", answer: "Neutral colored clothing, binoculars, camera, sunscreen, and warm clothes for early mornings." }
      ]
    }
  };

  const tour = tourData[tourId as string];

  if (!tour) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Tour Not Found</h1>
          <p className="text-muted-foreground mb-8">The tour you're looking for doesn't exist.</p>
          <Link to="/">
            <Button variant="safari">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96">
        <img 
          src={tour.image} 
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <div className="text-white">
              <Badge variant="secondary" className="mb-4">
                {tour.category === 'zanzibar' ? 'Zanzibar Tour' : 'Tanzania Safari'}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{tour.title}</h1>
              <div className="flex items-center space-x-6 text-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>{tour.groupSize}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span>{tour.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="included">Included</TabsTrigger>
                  <TabsTrigger value="faqs">FAQs</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Tour Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {tour.description}
                      </p>
                      <div>
                        <h4 className="font-semibold mb-3">Tour Highlights</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {tour.highlights.map((highlight: string, index: number) => (
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

                <TabsContent value="itinerary" className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Detailed Itinerary</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {tour.itinerary.map((item: any, index: number) => (
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

                <TabsContent value="included" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-green-600">What's Included</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {tour.included.map((item: string, index: number) => (
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
                          {tour.notIncluded.map((item: string, index: number) => (
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

                <TabsContent value="faqs" className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Frequently Asked Questions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {tour.faqs.map((faq: any, index: number) => (
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
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-primary mb-2">{tour.price}</div>
                    <p className="text-sm text-muted-foreground">per person</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm">Duration: {tour.duration}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm">Group Size: {tour.groupSize}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm">Rating: {tour.rating}/5</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link to={`/book/${tourId}`}>
                      <Button variant="safari" size="lg" className="w-full">
                        Book This Tour
                      </Button>
                    </Link>
                    <Button variant="outline" size="lg" className="w-full">
                      Contact Us
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourDetail;