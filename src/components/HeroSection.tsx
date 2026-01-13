import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Crown, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import heroImage from "@/assets/hero-africa-coast.jpg";
import zanzibarBeach from "@/assets/zanzibar-beach.jpg";
import serengetiElephants from "@/assets/serengeti-elephants.jpg";
import stoneTown from "@/assets/stone-town.jpg";
import dolphinTour from "@/assets/dolphin-tour.jpg";

const HeroSection = () => {
  const heroImages = [
    { src: heroImage, alt: "Beautiful African coastal city with turquoise waters" },
    { src: zanzibarBeach, alt: "Pristine Zanzibar beach with crystal clear water" },
    { src: serengetiElephants, alt: "Elephants in Serengeti National Park" },
    { src: stoneTown, alt: "Historic Stone Town architecture" },
    { src: dolphinTour, alt: "Dolphins in Zanzibar waters" }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navigate = useNavigate();
  const [destination, setDestination] = useState<string>("");
  const [safariStyle, setSafariStyle] = useState<string>("");
  const [tourType, setTourType] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);
  const handleSearch = () => {
    if (!destination) {
      toast({
        title: "Tafadhali chagua 'Destination'",
        description: "Chagua mahali unapotaka kwenda kisha bonyeza Search Tours.",
      });
      return;
    }

    const params = new URLSearchParams();
    if (safariStyle) params.set("style", safariStyle);
    if (tourType) params.set("tourType", tourType);

    if (destination === "tanzania") {
      navigate(`/tanzania-safaris${params.toString() ? `?${params.toString()}` : ""}`);
    } else if (destination === "zanzibar") {
      navigate(`/zanzibar-tours${params.toString() ? `?${params.toString()}` : ""}`);
    } else if (destination === "kenya") {
      navigate(`/kenya-safaris${params.toString() ? `?${params.toString()}` : ""}`);
    }
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImages[currentImageIndex].src} 
          alt={heroImages[currentImageIndex].alt}
          className="w-full h-full object-cover transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-semibold mb-4 drop-shadow-lg">
          Your African Safari Awaits
        </h1>
        <p className="text-xl md:text-2xl mb-12 drop-shadow-lg font-normal">
          Discover. Compare. Book.
        </p>

        {/* Search Form */}
        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-elevated">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Destination Select */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-white/90 text-sm font-medium">
                <MapPin className="w-4 h-4" />
                <span>Choose Destination</span>
              </div>
              <Select value={destination} onValueChange={setDestination}>
                <SelectTrigger className="bg-white/10 border-white/30 text-white placeholder:text-white/70 hover:bg-white/20 transition-safari">
                  <SelectValue placeholder="Select destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tanzania">Tanzania</SelectItem>
                  <SelectItem value="zanzibar">Zanzibar</SelectItem>
                  <SelectItem value="kenya">Kenya</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Safari Style Select */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-white/90 text-sm font-medium">
                <Crown className="w-4 h-4" />
                <span>Safari Style</span>
              </div>
              <Select value={safariStyle} onValueChange={setSafariStyle}>
                <SelectTrigger className="bg-white/10 border-white/30 text-white placeholder:text-white/70 hover:bg-white/20 transition-safari">
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="budget">Budget</SelectItem>
                  <SelectItem value="mid-range">Mid-Range</SelectItem>
                  <SelectItem value="semi-luxury">Semi-Luxury</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                  <SelectItem value="luxury-plus">Luxury+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Specialized Tour Select */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-white/90 text-sm font-medium">
                <Star className="w-4 h-4" />
                <span>Specialized Tour</span>
              </div>
              <Select value={tourType} onValueChange={setTourType}>
                <SelectTrigger className="bg-white/10 border-white/30 text-white placeholder:text-white/70 hover:bg-white/20 transition-safari">
                  <SelectValue placeholder="Select tour type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="adventure">Adventure Safari Tours</SelectItem>
                  <SelectItem value="beach">Beach time</SelectItem>
                  <SelectItem value="drive-in">Drive-in safaris</SelectItem>
                  <SelectItem value="family">Family Safaris</SelectItem>
                  <SelectItem value="flying">Flying Safaris</SelectItem>
                  <SelectItem value="migration">Great Migration Safaris</SelectItem>
                  <SelectItem value="honeymoon">Honeymoon Safaris</SelectItem>
                  <SelectItem value="mountain">Mountain Climbing</SelectItem>
                  <SelectItem value="photography">Photographic safaris</SelectItem>
                  <SelectItem value="safari-beach">Safari & Beach Holiday</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Search Button */}
            <div className="flex flex-col justify-end">
              <Button variant="safari" size="lg" className="w-full h-12 text-lg font-medium" onClick={handleSearch} aria-label="Search tours based on selected filters">
                Search Tours
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;