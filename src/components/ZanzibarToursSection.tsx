import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ZanzibarToursSection = () => {
    const tours = [
        {
            id: "zt001",
            title: "Stone Town Historical & Cultural Tour",
            duration: "Half Day",
            groupSize: "2-12 People",
            rating: 4.8,
            price: "$45",
            category: "zanzibar",
            highlights: ["UNESCO World Heritage Site", "Spice Markets", "Cultural Sites", "Local Guide"],
            image: "https://ucarecdn.com/19e59ca1-023f-4b5b-b13f-5799c8a0ff6b/-/crop/4218x2215/0,78/-/resize/1200x630/"
        },
        {
            id: "zt002",
            title: "Spice Farm Tour & Local Lunch",
            duration: "Full Day",
            groupSize: "2-15 People",
            rating: 4.9,
            price: "$65",
            category: "zanzibar",
            highlights: ["Spice Plantation", "Traditional Lunch", "Fruit Tasting", "Local Culture"],
            image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/11/f9/2b/92.jpg"
        },
        {
            id: "zt003",
            title: "Prison Island & Giant Tortoises",
            duration: "Half Day",
            groupSize: "2-10 People",
            rating: 4.7,
            price: "$55",
            category: "zanzibar",
            highlights: ["Historical Prison", "Giant Tortoises", "Snorkeling", "Boat Transfer"],
            image: "https://res.cloudinary.com/tourhq/image/upload/fl_progressive,f_auto,h_507,w_900,g_auto,c_fill,q_auto/ggzg4peuyxm6giluowp3"
        },
        {
            id: "zt004",
            title: "Safari Blue - Dolphin & Snorkeling Adventure",
            duration: "Full Day",
            groupSize: "2-20 People",
            rating: 4.9,
            price: "$85",
            category: "zanzibar",
            highlights: ["Dolphin Watching", "Snorkeling", "Seafood Lunch", "Sandbank Visit"],
            image: "https://cdn.getyourguide.com/img/tour/88915ee2118200079559ca15ba2711be430da9f4773f74b32c7be8dd3d248551.jpg/99.jpg"
        }
    ];

    return (
        <section className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                        Zanzibar Tours
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Experience the magic of Zanzibar's pristine beaches, Stone Town culture, and turquoise waters.
                    </p>
                </div>

                {/* Tours Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {tours.map((tour) => (
                        <Card key={tour.id} className="overflow-hidden hover:shadow-elevated transition-safari group">
                            <div className="relative h-48">
                                <img
                                    src={tour.image}
                                    alt={tour.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-safari"
                                />
                                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                                    {tour.price}
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-20"></div>
                            </div>

                            <CardContent className="p-4">
                                <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                                    <div className="flex items-center space-x-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{tour.duration}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Users className="w-4 h-4" />
                                        <span>{tour.groupSize}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Star className="w-4 h-4 fill-primary text-primary" />
                                        <span>{tour.rating}</span>
                                    </div>
                                </div>

                                <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-safari">
                                    {tour.title}
                                </h3>

                                <div className="mb-4">
                                    <p className="text-sm text-muted-foreground mb-2">Highlights:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {tour.highlights.map((highlight, index) => (
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
                                    <Link to={`/tour/${tour.id}`}>
                                        <Button variant="outline" className="flex-1 mr-2">
                                            View Details
                                        </Button>
                                    </Link>
                                    <Link to={`/book/${tour.id}`}>
                                        <Button variant="safari">
                                            Book Now
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* See More Button */}
                <div className="text-center mt-10 md:mt-16">
                    <Link to="/zanzibar-tours">
                        <Button
                            variant="safari"
                            size="lg"
                            className="px-12"
                        >
                            See More Zanzibar Tours
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ZanzibarToursSection;
