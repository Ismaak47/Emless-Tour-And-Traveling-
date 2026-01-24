import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import TourDetailsModal from "@/components/TourDetailsModal";

const TanzaniaSafarisSection = () => {
    const [selectedSafari, setSelectedSafari] = useState(null);
    const safaris = [
        {
            id: "ts001",
            title: "5-Day Serengeti & Ngorongoro Safari",
            duration: "5 Days",
            groupSize: "2-6 People",
            rating: 4.9,
            price: "$1,899",
            category: "tanzania",
            highlights: ["Great Migration", "Big Five", "Ngorongoro Crater", "Cultural Visit"],
            image: "https://goeastafricasafaris.com/wp-content/uploads/2025/05/5-Days-Tanzania-Lodge-Safari-L.Manyara-Ngorongoro-Crater-Serengeti-National-Park-2.jpg"
        },
        {
            id: "ts002",
            title: "3-Day Tarangire & Lake Manyara Safari",
            duration: "3 Days",
            groupSize: "2-8 People",
            rating: 4.7,
            price: "$899",
            category: "tanzania",
            highlights: ["Elephant Herds", "Tree Climbing Lions", "Baobab Trees", "Bird Watching"],
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlYw48vutslOzvc7Zz6lkV6H4kcsLq-rHs1w&s"
        },
        {
            id: "ts003",
            title: "7-Day Kilimanjaro Trekking - Machame Route",
            duration: "7 Days",
            groupSize: "2-12 People",
            rating: 4.8,
            price: "$2,299",
            category: "tanzania",
            highlights: ["Uhuru Peak", "Machame Route", "Professional Guide", "All Equipment"],
            image: "https://mountkenyaclimbingtours.com/wp-content/uploads/2024/05/machame-route-climbing.jpg"
        },
        {
            id: "ts004",
            title: "4-Day Selous Game Reserve Safari",
            duration: "4 Days",
            groupSize: "2-8 People",
            rating: 4.7,
            price: "$1,299",
            category: "tanzania",
            highlights: ["Boat Safari", "Walking Safari", "Wild Dogs", "Rufiji River"],
            image: "https://images.unsplash.com/photo-1549366021-9f761d040fb2?w=400&h=300&fit=crop&crop=center"
        }
    ];

    return (
        <>
        <section className="py-4 md:py-6 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-4 md:mb-6">
                    <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                        Tanzania Safaris
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Discover the wild beauty of East Africa with our expert-guided safaris to Serengeti, Ngorongoro, and beyond.
                    </p>
                </div>

                {/* Safaris Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {safaris.slice(0, 3).map((safari) => (
                        <Card key={safari.id} className="overflow-hidden hover:shadow-elevated transition-safari group bg-background">
                            <div className="relative h-48">
                                <img
                                    src={safari.image}
                                    alt={safari.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-safari"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-20"></div>
                            </div>

                            <CardContent className="p-4">
                                <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                                    <div className="flex items-center space-x-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{safari.duration}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Users className="w-4 h-4" />
                                        <span>{safari.groupSize}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Star className="w-4 h-4 fill-primary text-primary" />
                                        <span>{safari.rating}</span>
                                    </div>
                                </div>

                                <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-safari">
                                    {safari.title}
                                </h3>

                                <div className="mb-4">
                                    <p className="text-sm text-muted-foreground mb-2">Highlights:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {safari.highlights.map((highlight, index) => (
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
                                        onClick={() => setSelectedSafari(safari)}
                                    >
                                        View Details
                                    </Button>
                                    <Link to={`/book/${safari.id}`}>
                                        <Button variant="safari">
                                            Book Now
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-4 md:mt-6">
                    <Link to="/tanzania-safaris">
                        <Button
                            variant="safari"
                            className="px-8"
                        >
                            See More Tanzania Safaris
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
        
        <TourDetailsModal 
            isOpen={!!selectedSafari} 
            onClose={() => setSelectedSafari(null)} 
            tour={selectedSafari} 
        />
    </>
    );
};

export default TanzaniaSafarisSection;
