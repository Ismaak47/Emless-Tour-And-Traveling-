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
    zt002: {
      title: "Spice Farm Tour & Local Lunch",
      duration: "Full Day",
      groupSize: "2-15 People",
      rating: 4.9,
      price: "$65",
      category: "zanzibar",
      highlights: ["Spice Plantation", "Traditional Lunch", "Fruit Tasting", "Local Culture"],
      description: "Discover why Zanzibar is called the 'Spice Island' with visits to organic spice farms and traditional cooking.",
      image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/11/f9/2b/92.jpg",
      itinerary: [
        { time: "9:00 AM", activity: "Hotel pickup", description: "Collection from your accommodation" },
        { time: "10:00 AM", activity: "Spice farm visit", description: "Tour organic spice plantations" },
        { time: "12:00 PM", activity: "Traditional lunch", description: "Enjoy local cuisine prepared with fresh spices" },
        { time: "2:00 PM", activity: "Fruit tasting", description: "Sample tropical fruits grown on the farm" },
        { time: "3:30 PM", activity: "Return to hotel", description: "Drop-off at your accommodation" }
      ],
      included: ["Transportation", "Guide", "Lunch", "Fruit tasting", "Spice samples"],
      notIncluded: ["Personal expenses", "Tips", "Additional drinks"],
      faqs: [
        { question: "What spices will we see?", answer: "Cardamom, cinnamon, nutmeg, cloves, vanilla, and many more tropical spices." },
        { question: "Is lunch included?", answer: "Yes, a traditional Zanzibari lunch prepared with farm-fresh spices is included." }
      ]
    },
    zt003: {
      title: "Prison Island & Giant Tortoises",
      duration: "Half Day",
      groupSize: "2-10 People",
      rating: 4.7,
      price: "$55",
      category: "zanzibar",
      highlights: ["Historical Prison", "Giant Tortoises", "Snorkeling", "Boat Transfer"],
      description: "Visit the historic Prison Island and meet the giant Aldabra tortoises, some over 100 years old.",
      image: "https://res.cloudinary.com/tourhq/image/upload/fl_progressive,f_auto,h_507,w_900,g_auto,c_fill,q_auto/ggzg4peuyxm6giluowp3",
      itinerary: [
        { time: "9:00 AM", activity: "Boat departure", description: "Depart from Stone Town harbor" },
        { time: "9:30 AM", activity: "Prison Island tour", description: "Explore the historical prison ruins" },
        { time: "10:30 AM", activity: "Tortoise sanctuary", description: "Meet the giant Aldabra tortoises" },
        { time: "11:30 AM", activity: "Snorkeling", description: "Snorkel in crystal clear waters" },
        { time: "12:30 PM", activity: "Return to Stone Town", description: "Boat transfer back to harbor" }
      ],
      included: ["Boat transfer", "Guide", "Snorkeling equipment", "Island entry fees"],
      notIncluded: ["Lunch", "Personal expenses", "Tips"],
      faqs: [
        { question: "Can I touch the tortoises?", answer: "Yes, under supervision you can gently interact with these gentle giants." },
        { question: "Is snorkeling equipment provided?", answer: "Yes, masks, snorkels, and fins are provided." }
      ]
    },
    zt004: {
      title: "Safari Blue - Dolphin & Snorkeling Adventure",
      duration: "Full Day",
      groupSize: "2-20 People",
      rating: 4.9,
      price: "$85",
      category: "zanzibar",
      highlights: ["Dolphin Watching", "Snorkeling", "Seafood Lunch", "Sandbank Visit"],
      description: "Experience the crystal clear waters of Menai Bay, swim with dolphins and enjoy pristine coral reefs.",
      image: "https://cdn.getyourguide.com/img/tour/88915ee2118200079559ca15ba2711be430da9f4773f74b32c7be8dd3d248551.jpg/99.jpg",
      itinerary: [
        { time: "8:00 AM", activity: "Hotel pickup", description: "Collection from South Coast hotels" },
        { time: "9:00 AM", activity: "Dolphin watching", description: "Search for dolphins in Menai Bay" },
        { time: "11:00 AM", activity: "Snorkeling", description: "Explore coral reefs and marine life" },
        { time: "1:00 PM", activity: "Seafood lunch", description: "Fresh seafood BBQ on the beach" },
        { time: "3:00 PM", activity: "Sandbank visit", description: "Relax on pristine white sandbank" },
        { time: "5:00 PM", activity: "Return to hotel", description: "Drop-off at your accommodation" }
      ],
      included: ["Transportation", "Boat trip", "Snorkeling gear", "Seafood lunch", "Soft drinks", "Guide"],
      notIncluded: ["Alcoholic drinks", "Tips", "Personal expenses"],
      faqs: [
        { question: "Will we definitely see dolphins?", answer: "While we can't guarantee sightings, we have a 90% success rate in dolphin encounters." },
        { question: "What's included in lunch?", answer: "Fresh grilled fish, lobster, calamari, rice, and tropical fruits." }
      ]
    },
    zt005: {
      title: "Jozani Forest Red Colobus Monkeys",
      duration: "Half Day",
      groupSize: "2-15 People",
      rating: 4.6,
      price: "$40",
      category: "zanzibar",
      highlights: ["Endemic Red Colobus", "Nature Walk", "Mangrove Boardwalk", "Conservation"],
      description: "Walk through the indigenous forest and spot the rare Red Colobus monkeys found only in Zanzibar.",
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=300&fit=crop&crop=center",
      itinerary: [
        { time: "9:00 AM", activity: "Forest entrance", description: "Meet your guide at Jozani Forest" },
        { time: "9:30 AM", activity: "Nature walk", description: "Guided walk through indigenous forest" },
        { time: "10:30 AM", activity: "Monkey spotting", description: "Observe Red Colobus monkeys in their habitat" },
        { time: "11:30 AM", activity: "Mangrove boardwalk", description: "Walk through mangrove ecosystem" },
        { time: "12:00 PM", activity: "Return", description: "End of forest tour" }
      ],
      included: ["Park fees", "Professional guide", "Transportation"],
      notIncluded: ["Lunch", "Personal expenses", "Tips"],
      faqs: [
        { question: "Are the monkeys dangerous?", answer: "No, Red Colobus monkeys are gentle and pose no threat to visitors." },
        { question: "What should I wear?", answer: "Comfortable walking shoes and long pants are recommended." }
      ]
    },
    zt006: {
      title: "Kizimkazi Dolphin Tour",
      duration: "Half Day",
      groupSize: "2-12 People",
      rating: 4.8,
      price: "$50",
      category: "zanzibar",
      highlights: ["Dolphin Swimming", "Historic Mosque", "Snorkeling", "Local Village"],
      description: "Visit the historic fishing village of Kizimkazi and swim with bottlenose and humpback dolphins.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&crop=center",
      itinerary: [
        { time: "8:00 AM", activity: "Village visit", description: "Explore Kizimkazi fishing village" },
        { time: "9:00 AM", activity: "Dolphin tour", description: "Boat trip to find dolphins" },
        { time: "10:30 AM", activity: "Swimming with dolphins", description: "Swim alongside these magnificent creatures" },
        { time: "11:30 AM", activity: "Historic mosque", description: "Visit 12th century Shirazi mosque" },
        { time: "12:00 PM", activity: "Return", description: "End of tour" }
      ],
      included: ["Boat trip", "Guide", "Snorkeling equipment", "Village tour"],
      notIncluded: ["Lunch", "Transportation to Kizimkazi", "Tips"],
      faqs: [
        { question: "Best time for dolphins?", answer: "Early morning (7-10 AM) offers the best chance of dolphin encounters." },
        { question: "Can I swim with dolphins?", answer: "Yes, if conditions allow and dolphins are comfortable with human presence." }
      ]
    },
    zt007: {
      title: "Mnemba Island Snorkeling & Diving",
      duration: "Full Day",
      groupSize: "2-8 People",
      rating: 4.8,
      price: "$95",
      category: "zanzibar",
      highlights: ["Coral Reef", "Marine Life", "White Sand Beach", "Professional Guide"],
      description: "Explore the pristine coral reefs around Mnemba Island with world-class snorkeling and diving.",
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop&crop=center",
      itinerary: [
        { time: "8:00 AM", activity: "Departure", description: "Boat departure from Nungwi" },
        { time: "9:00 AM", activity: "Mnemba arrival", description: "Arrive at Mnemba Island waters" },
        { time: "9:30 AM", activity: "Snorkeling session 1", description: "Explore coral gardens" },
        { time: "11:00 AM", activity: "Beach time", description: "Relax on pristine white sand" },
        { time: "1:00 PM", activity: "Lunch", description: "Beachside seafood lunch" },
        { time: "2:30 PM", activity: "Snorkeling session 2", description: "Discover more marine life" },
        { time: "4:00 PM", activity: "Return", description: "Boat trip back to Nungwi" }
      ],
      included: ["Boat transfer", "Snorkeling equipment", "Lunch", "Soft drinks", "Professional guide"],
      notIncluded: ["Diving equipment rental", "Alcoholic drinks", "Tips"],
      faqs: [
        { question: "Do I need diving certification?", answer: "No certification needed for snorkeling. PADI certification required for diving." },
        { question: "What marine life will we see?", answer: "Tropical fish, sea turtles, dolphins, and vibrant coral formations." }
      ]
    },
    zt008: {
      title: "Nungwi & Kendwa Beach Day Trip",
      duration: "Full Day",
      groupSize: "2-15 People",
      rating: 4.7,
      price: "$55",
      category: "zanzibar",
      highlights: ["White Sand Beaches", "Sunset Views", "Beach Activities", "Local Culture"],
      description: "Relax on the stunning white sand beaches of Nungwi and Kendwa with crystal clear waters.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&crop=center",
      itinerary: [
        { time: "9:00 AM", activity: "Nungwi arrival", description: "Arrive at Nungwi beach" },
        { time: "10:00 AM", activity: "Beach activities", description: "Swimming, sunbathing, beach games" },
        { time: "1:00 PM", activity: "Lunch", description: "Beachside seafood lunch" },
        { time: "3:00 PM", activity: "Kendwa beach", description: "Move to Kendwa for afternoon" },
        { time: "6:00 PM", activity: "Sunset viewing", description: "Watch spectacular sunset" },
        { time: "7:00 PM", activity: "Return", description: "Transfer back to hotel" }
      ],
      included: ["Transportation", "Beach access", "Lunch", "Soft drinks"],
      notIncluded: ["Water sports equipment", "Alcoholic drinks", "Tips"],
      faqs: [
        { question: "Are there tides at these beaches?", answer: "Nungwi and Kendwa have minimal tidal variation, perfect for all-day swimming." },
        { question: "What activities are available?", answer: "Swimming, snorkeling, beach volleyball, dhow sailing, and sunset viewing." }
      ]
    },
    zt009: {
      title: "Cultural Village & Traditional Cooking",
      duration: "Half Day",
      groupSize: "2-12 People",
      rating: 4.6,
      price: "$45",
      category: "zanzibar",
      highlights: ["Local Village", "Traditional Cooking", "Cultural Exchange", "Local Crafts"],
      description: "Experience authentic Zanzibari village life and learn traditional cooking methods.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
      itinerary: [
        { time: "9:00 AM", activity: "Village arrival", description: "Welcome to local village" },
        { time: "9:30 AM", activity: "Village tour", description: "Meet locals and see daily life" },
        { time: "10:30 AM", activity: "Cooking class", description: "Learn to prepare traditional dishes" },
        { time: "12:00 PM", activity: "Lunch", description: "Enjoy the meal you prepared" },
        { time: "1:00 PM", activity: "Craft demonstration", description: "Watch local artisans at work" },
        { time: "2:00 PM", activity: "Return", description: "End of cultural experience" }
      ],
      included: ["Village guide", "Cooking class", "Lunch", "Cultural activities"],
      notIncluded: ["Transportation", "Personal expenses", "Tips"],
      faqs: [
        { question: "What will we cook?", answer: "Traditional dishes like pilau rice, coconut curry, and chapati bread." },
        { question: "Is this suitable for vegetarians?", answer: "Yes, we can accommodate vegetarian and vegan dietary requirements." }
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