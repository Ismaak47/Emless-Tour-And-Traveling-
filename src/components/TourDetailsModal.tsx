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
    zp004: {
      ...tour,
      description: "Action-packed adventure with water sports, diving, snorkeling, and island hopping. Perfect for thrill-seekers and water enthusiasts.",
      itinerary: [
        { time: "Day 1", activity: "Water Sports Intro", description: "Jet skiing, windsurfing lessons, beach setup" },
        { time: "Day 2", activity: "Diving Adventure", description: "Scuba diving certification, coral reef exploration" },
        { time: "Day 3", activity: "Island Hopping", description: "Prison Island, dolphin watching, snorkeling safari" },
        { time: "Day 4", activity: "Kite Surfing", description: "Kite surfing lessons, deep sea fishing" },
        { time: "Day 5", activity: "Final Adventures", description: "Parasailing, sunset cruise, departure" }
      ],
      included: ["All water sports equipment", "Diving certification", "Island transfers", "Professional instructors"],
      notIncluded: ["Accommodation", "Meals", "Travel insurance", "Personal gear"],
      faqs: [
        { question: "Do I need experience?", answer: "No, all activities include professional instruction for beginners." },
        { question: "What's the minimum age?", answer: "12 years for most activities, 16 for scuba diving certification." }
      ]
    },
    zp005: {
      ...tour,
      description: "Romantic honeymoon package with private beaches, couples spa treatments, candlelit dinners, and luxury accommodation for the perfect romantic getaway.",
      itinerary: [
        { time: "Day 1", activity: "Romantic Arrival", description: "Private transfer, champagne welcome, sunset dinner" },
        { time: "Day 2", activity: "Couples Spa Day", description: "Couples massage, private beach picnic, wine tasting" },
        { time: "Day 3", activity: "Island Romance", description: "Private island excursion, snorkeling, beach BBQ" },
        { time: "Day 4", activity: "Cultural Romance", description: "Spice tour for couples, cooking class, traditional dinner" },
        { time: "Day 5", activity: "Sunset Sailing", description: "Private dhow cruise, photography session" },
        { time: "Day 6", activity: "Farewell", description: "Final breakfast, couples massage, departure" }
      ],
      included: ["Luxury suite", "All meals", "Couples spa treatments", "Private excursions", "Photography"],
      notIncluded: ["Flights", "Alcoholic beverages", "Personal shopping", "Tips"],
      faqs: [
        { question: "Is this adults only?", answer: "Yes, designed exclusively for couples and honeymooners." },
        { question: "Can we customize activities?", answer: "Absolutely! We tailor everything to your preferences." }
      ]
    },
    zp006: {
      ...tour,
      description: "Ultimate luxury retreat with 5-star accommodation, butler service, private beaches, gourmet dining, and exclusive experiences.",
      itinerary: [
        { time: "Day 1", activity: "Luxury Arrival", description: "Private jet transfer, butler welcome, presidential suite" },
        { time: "Day 2", activity: "Private Beach", description: "Exclusive beach access, personal chef, water sports" },
        { time: "Day 3", activity: "Helicopter Tour", description: "Aerial island tour, private lunch, spa treatments" },
        { time: "Day 4", activity: "Cultural Luxury", description: "Private Stone Town tour, exclusive spice farm, gourmet dinner" },
        { time: "Day 5", activity: "Yacht Experience", description: "Private yacht charter, deep sea fishing, sunset cocktails" },
        { time: "Day 6", activity: "Wellness Luxury", description: "Private yoga, spa day, meditation sessions" },
        { time: "Day 7", activity: "Farewell", description: "Final luxury experiences, private departure" }
      ],
      included: ["Presidential suite", "Butler service", "All gourmet meals", "Private transfers", "Exclusive experiences"],
      notIncluded: ["International flights", "Personal shopping", "Additional helicopter tours"],
      faqs: [
        { question: "What makes this luxury?", answer: "5-star accommodation, personal butler, private experiences, and gourmet dining." },
        { question: "Is transportation included?", answer: "Yes, all private transfers including helicopter and yacht." }
      ]
    },
    zp007: {
      ...tour,
      description: "Perfect family holiday with kid-friendly activities, family rooms, safe beaches, cultural experiences, and adventures suitable for all ages.",
      itinerary: [
        { time: "Day 1", activity: "Family Arrival", description: "Family room setup, kids club introduction, beach safety briefing" },
        { time: "Day 2", activity: "Beach Family Fun", description: "Snorkeling lessons, sandcastle building, family games" },
        { time: "Day 3", activity: "Cultural Family Tour", description: "Kid-friendly Stone Town tour, spice farm with activities" },
        { time: "Day 4", activity: "Adventure Day", description: "Dolphin watching, safe water sports, family picnic" },
        { time: "Day 5", activity: "Family Departure", description: "Final beach time, souvenir shopping, airport transfer" }
      ],
      included: ["Family accommodation", "Kids club access", "Family meals", "Child-safe activities", "Babysitting service"],
      notIncluded: ["Flights", "Personal expenses", "Additional babysitting", "Shopping"],
      faqs: [
        { question: "What ages are suitable?", answer: "All ages welcome, special programs for 3-12 years old." },
        { question: "Is childcare available?", answer: "Yes, professional babysitting and kids club included." }
      ]
    },
    zp008: {
      ...tour,
      description: "Affordable exploration package with budget accommodation, local transport, authentic experiences, and the best value for money.",
      itinerary: [
        { time: "Day 1", activity: "Budget Arrival", description: "Shared transfer, guesthouse check-in, local orientation" },
        { time: "Day 2", activity: "Local Exploration", description: "Walking Stone Town tour, local market visit, street food" },
        { time: "Day 3", activity: "Beach Day", description: "Public beach access, local transport, budget lunch" }
      ],
      included: ["Budget accommodation", "Shared transfers", "Walking tours", "Local guide"],
      notIncluded: ["Flights", "Most meals", "Private transport", "Entrance fees"],
      faqs: [
        { question: "What type of accommodation?", answer: "Clean budget guesthouses with shared facilities." },
        { question: "Is it safe for budget travelers?", answer: "Yes, we ensure safe and reliable budget options." }
      ]
    },
    zp009: {
      ...tour,
      description: "Marine conservation experience with dolphin tours, coral restoration, marine biology education, and eco-friendly activities.",
      itinerary: [
        { time: "Day 1", activity: "Marine Introduction", description: "Marine center visit, conservation briefing, snorkeling assessment" },
        { time: "Day 2", activity: "Dolphin Research", description: "Dolphin watching, behavior study, data collection" },
        { time: "Day 3", activity: "Coral Restoration", description: "Coral planting, reef monitoring, marine photography" },
        { time: "Day 4", activity: "Conservation Action", description: "Beach cleanup, turtle monitoring, community education" }
      ],
      included: ["Marine guide", "Snorkeling equipment", "Research materials", "Conservation certificate"],
      notIncluded: ["Accommodation", "Meals", "Diving equipment", "Personal gear"],
      faqs: [
        { question: "Do I need diving experience?", answer: "Basic snorkeling skills required, diving experience helpful but not essential." },
        { question: "What will I contribute?", answer: "Real marine conservation work including coral restoration and research." }
      ]
    },
    zp010: {
      ...tour,
      description: "Complete island exploration covering all major attractions, hidden gems, cultural sites, beaches, and authentic local experiences.",
      itinerary: [
        { time: "Day 1", activity: "Stone Town Exploration", description: "UNESCO sites, spice markets, cultural museums, sunset rooftop" },
        { time: "Day 2", activity: "East Coast Beaches", description: "Paje and Jambiani beaches, kite surfing, local fishing" },
        { time: "Day 3", activity: "Spice & Forest Tour", description: "Spice plantations, Jozani Forest, red colobus monkeys" },
        { time: "Day 4", activity: "North Coast Adventure", description: "Nungwi beaches, dhow building, sunset cruise" },
        { time: "Day 5", activity: "Island Hopping", description: "Prison Island, Nakupenda sandbank, snorkeling" },
        { time: "Day 6", activity: "Cultural Immersion", description: "Village visits, traditional crafts, local cooking" },
        { time: "Day 7", activity: "Final Exploration", description: "Hidden beaches, souvenir shopping, farewell dinner" }
      ],
      included: ["Premium accommodation", "Private guide", "All transfers", "Most meals", "All entrance fees"],
      notIncluded: ["Flights", "Alcoholic beverages", "Personal shopping", "Tips"],
      faqs: [
        { question: "What makes this ultimate?", answer: "Covers every major attraction plus hidden local gems with premium service." },
        { question: "Is transport included?", answer: "Yes, private vehicle with driver for entire tour." }
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
    },
    tsp004: {
      ...tour,
      description: "Affordable camping safari experience with basic accommodation, shared facilities, and authentic bush camping under African stars.",
      itinerary: [
        { time: "Day 1", activity: "Tarangire Camping", description: "Drive to Tarangire, game drive, set up camp" },
        { time: "Day 2", activity: "Serengeti Camping", description: "Early game drive, travel to Serengeti, bush camping" },
        { time: "Day 3", activity: "Ngorongoro & Return", description: "Crater tour, camping near crater, return to Arusha" }
      ],
      included: ["Camping equipment", "Safari vehicle", "Guide", "Park fees", "Basic meals"],
      notIncluded: ["Sleeping bags", "Drinks", "Tips", "Comfort items", "Shower facilities"],
      faqs: [
        { question: "What camping facilities?", answer: "Basic bush camping with shared toilet facilities and campfire cooking." },
        { question: "What should I bring?", answer: "Sleeping bag, personal toiletries, flashlight, and warm clothes." }
      ]
    },
    tsp005: {
      ...tour,
      description: "Ultimate luxury safari with 5-star lodges, private guides, gourmet dining, and exclusive wildlife experiences in Tanzania's premier parks.",
      itinerary: [
        { time: "Day 1", activity: "Luxury Arrival", description: "Private jet to Serengeti, luxury tented camp, champagne welcome" },
        { time: "Day 2", activity: "Private Serengeti", description: "Private vehicle and guide, hot air balloon, bush breakfast" },
        { time: "Day 3", activity: "Exclusive Ngorongoro", description: "Private crater access, luxury lodge, spa treatments" },
        { time: "Day 4", activity: "Tarangire Luxury", description: "Exclusive lodge, private game drives, cultural visit" },
        { time: "Day 5", activity: "Lake Manyara Elite", description: "Tree lodge accommodation, canopy dining, night game drive" },
        { time: "Day 6", activity: "Cultural Luxury", description: "Private Maasai village, luxury cultural center, traditional feast" },
        { time: "Day 7", activity: "Departure", description: "Final game drive, private jet departure" }
      ],
      included: ["Luxury lodges", "Private guides", "All meals & drinks", "Private flights", "Spa treatments"],
      notIncluded: ["International flights", "Personal shopping", "Additional helicopter tours"],
      faqs: [
        { question: "What makes this luxury?", answer: "5-star lodges, private guides, gourmet dining, and exclusive experiences." },
        { question: "Group size?", answer: "Maximum 4 guests for intimate and personalized experience." }
      ]
    },
    tsp006: {
      ...tour,
      description: "Family-friendly safari with kid-safe activities, educational programs, family tents, and experiences designed for children of all ages.",
      itinerary: [
        { time: "Day 1", activity: "Family Arrival", description: "Family briefing, kid-friendly lodge, junior ranger program" },
        { time: "Day 2", activity: "Tarangire Family", description: "Elephant research center, family game drive, nature walk" },
        { time: "Day 3", activity: "Serengeti Education", description: "Wildlife education center, family camping, star gazing" },
        { time: "Day 4", activity: "Ngorongoro Learning", description: "Crater education, family picnic, cultural school visit" },
        { time: "Day 5", activity: "Family Departure", description: "Final game drive, certificate ceremony, airport transfer" }
      ],
      included: ["Family accommodation", "Educational activities", "Child-safe vehicles", "Family meals", "Junior ranger program"],
      notIncluded: ["Flights", "Personal expenses", "Additional activities", "Babysitting"],
      faqs: [
        { question: "What ages are suitable?", answer: "All ages welcome, special programs for 5-15 years old." },
        { question: "Are vehicles child-safe?", answer: "Yes, modified vehicles with safety features and child seats." }
      ]
    },
    tsp007: {
      ...tour,
      description: "Epic adventure combining Mount Kilimanjaro trekking with classic safari. Conquer Africa's highest peak then explore world-famous wildlife parks.",
      itinerary: [
        { time: "Day 1-2", activity: "Kilimanjaro Prep", description: "Arrival, equipment check, acclimatization hikes" },
        { time: "Day 3-8", activity: "Kilimanjaro Trek", description: "Machame route ascent, summit attempt, descent" },
        { time: "Day 9", activity: "Rest & Recovery", description: "Hotel rest, celebration dinner, safari preparation" },
        { time: "Day 10", activity: "Tarangire Safari", description: "First game drive, elephant herds, baobab trees" }
      ],
      included: ["Mountain guides", "Camping equipment", "Safari vehicle", "Park fees", "All meals"],
      notIncluded: ["Climbing gear rental", "Tips for guides", "Travel insurance", "Personal equipment"],
      faqs: [
        { question: "Fitness level required?", answer: "Good fitness essential for Kilimanjaro, moderate for safari portion." },
        { question: "Success rate?", answer: "85% summit success rate with our experienced guides." }
      ]
    },
    tsp008: {
      ...tour,
      description: "Specialized photography safari with professional guides, optimal lighting times, and access to the best wildlife photography locations.",
      itinerary: [
        { time: "Day 1", activity: "Photography Briefing", description: "Equipment check, technique workshop, Tarangire golden hour" },
        { time: "Day 2", activity: "Serengeti Action", description: "Predator photography, migration shots, composition training" },
        { time: "Day 3", activity: "Ngorongoro Portraits", description: "Big Five photography, crater landscapes, macro wildlife" },
        { time: "Day 4", activity: "Lake Manyara Birds", description: "Bird photography, tree-climbing lions, reflection shots" },
        { time: "Day 5", activity: "Advanced Techniques", description: "Night photography, star trails, wildlife behavior shots" },
        { time: "Day 6", activity: "Portfolio Review", description: "Image editing workshop, portfolio selection, printing" }
      ],
      included: ["Photography guide", "Specialized vehicle", "Equipment support", "Editing workshop", "Portfolio printing"],
      notIncluded: ["Camera equipment", "Memory cards", "Personal gear", "Image processing software"],
      faqs: [
        { question: "What equipment needed?", answer: "DSLR camera, telephoto lens (300mm+), tripod, and spare batteries." },
        { question: "Skill level required?", answer: "Intermediate to advanced photographers, basic camera knowledge essential." }
      ]
    },
    tsp009: {
      ...tour,
      description: "Romantic safari designed for couples with private accommodations, candlelit dinners, and intimate wildlife experiences.",
      itinerary: [
        { time: "Day 1", activity: "Romantic Arrival", description: "Private transfer, couples suite, champagne sunset" },
        { time: "Day 2", activity: "Serengeti Romance", description: "Private game drive, bush breakfast, couples massage" },
        { time: "Day 3", activity: "Ngorongoro Intimacy", description: "Crater picnic, private dining, star gazing" },
        { time: "Day 4", activity: "Cultural Romance", description: "Maasai village visit, traditional ceremony, cultural dinner" },
        { time: "Day 5", activity: "Adventure Together", description: "Hot air balloon, bush breakfast, photography session" },
        { time: "Day 6", activity: "Farewell Romance", description: "Final game drive, couples spa, farewell dinner" }
      ],
      included: ["Romantic accommodation", "Private vehicle", "Couples activities", "Spa treatments", "Photography"],
      notIncluded: ["Flights", "Alcoholic beverages", "Personal shopping", "Additional spa services"],
      faqs: [
        { question: "Is this adults only?", answer: "Yes, designed exclusively for couples seeking romantic experiences." },
        { question: "Can we customize?", answer: "Absolutely! We tailor all activities to your romantic preferences." }
      ]
    },
    tsp010: {
      ...tour,
      description: "Comprehensive Tanzania safari covering all major parks, cultural sites, and hidden gems for the ultimate East African experience.",
      itinerary: [
        { time: "Day 1-2", activity: "Arusha & Tarangire", description: "City tour, cultural center, Tarangire elephants and baobabs" },
        { time: "Day 3-5", activity: "Serengeti Exploration", description: "Central, northern, and western Serengeti circuits" },
        { time: "Day 6-7", activity: "Ngorongoro Experience", description: "Crater safari, Olduvai Gorge, cultural visits" },
        { time: "Day 8", activity: "Lake Manyara", description: "Tree-climbing lions, flamingos, canopy walk" },
        { time: "Day 9", activity: "Cultural Immersion", description: "Maasai village, traditional ceremonies, local markets" },
        { time: "Day 10", activity: "Grand Finale", description: "Final game drives, souvenir shopping, farewell dinner" }
      ],
      included: ["Premium lodges", "Professional guide", "All park fees", "Cultural visits", "Most meals"],
      notIncluded: ["International flights", "Visa fees", "Travel insurance", "Personal expenses"],
      faqs: [
        { question: "What makes this grand?", answer: "Covers all major parks plus cultural experiences and hidden locations." },
        { question: "Best time to go?", answer: "Year-round destination, June-October for dry season, December-March for calving." }
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