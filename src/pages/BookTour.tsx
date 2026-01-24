import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Users, Clock, Star } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";

const BookTour = () => {
  const { tourId } = useParams();
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    adults: "2",
    children: "0",
    accommodation: "",
    specialRequests: ""
  });

  // Mock tour data
  const tourData: Record<string, any> = {
    zt001: {
      title: "Stone Town Historical & Cultural Tour",
      duration: "Half Day",
      price: "$45",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center"
    },
    zt002: {
      title: "Spice Farm Tour & Local Lunch",
      duration: "Full Day",
      price: "$65",
      image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/11/f9/2b/92.jpg"
    },
    zt003: {
      title: "Prison Island & Giant Tortoises",
      duration: "Half Day",
      price: "$55",
      image: "https://res.cloudinary.com/tourhq/image/upload/fl_progressive,f_auto,h_507,w_900,g_auto,c_fill,q_auto/ggzg4peuyxm6giluowp3"
    },
    zt004: {
      title: "Safari Blue - Dolphin & Snorkeling Adventure",
      duration: "Full Day",
      price: "$85",
      image: "https://cdn.getyourguide.com/img/tour/88915ee2118200079559ca15ba2711be430da9f4773f74b32c7be8dd3d248551.jpg/99.jpg"
    },
    zt005: {
      title: "Jozani Forest Red Colobus Monkeys",
      duration: "Half Day",
      price: "$40",
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=300&fit=crop&crop=center"
    },
    zt006: {
      title: "Kizimkazi Dolphin Tour",
      duration: "Half Day",
      price: "$50",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&crop=center"
    },
    zt007: {
      title: "Mnemba Island Snorkeling & Diving",
      duration: "Full Day",
      price: "$95",
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop&crop=center"
    },
    zt008: {
      title: "Nungwi & Kendwa Beach Day Trip",
      duration: "Full Day",
      price: "$55",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&crop=center"
    },
    zt009: {
      title: "Cultural Village & Traditional Cooking",
      duration: "Half Day",
      price: "$45",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center"
    },
    ts001: {
      title: "5-Day Serengeti & Ngorongoro Safari",
      duration: "5 Days",
      price: "$1,899",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop&crop=center"
    }
  };

  const tour = tourData[tourId as string];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log("Booking submitted:", { ...formData, date, tourId });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateTotal = () => {
    const basePrice = parseInt(tour?.price.replace('$', '') || '0');
    const adults = parseInt(formData.adults);
    const children = parseInt(formData.children);
    return basePrice * adults + (basePrice * 0.7) * children; // Children 30% discount
  };

  if (!tour) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Tour Not Found</h1>
          <p className="text-muted-foreground mb-8">The tour you're trying to book doesn't exist.</p>
          <Link to="/">
            <Button variant="safari">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Book Your Tour</h1>
            <p className="text-muted-foreground">Complete the form below to secure your adventure</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Booking Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>

                    {/* Tour Date */}
                    <div>
                      <Label>Preferred Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal mt-1"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Group Size */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="adults">Adults *</Label>
                        <Select value={formData.adults} onValueChange={(value) => setFormData({...formData, adults: value})}>
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[1,2,3,4,5,6,7,8].map(num => (
                              <SelectItem key={num} value={num.toString()}>{num} Adult{num > 1 ? 's' : ''}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="children">Children (3-12 years)</Label>
                        <Select value={formData.children} onValueChange={(value) => setFormData({...formData, children: value})}>
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[0,1,2,3,4,5,6].map(num => (
                              <SelectItem key={num} value={num.toString()}>{num} Child{num > 1 ? 'ren' : ''}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Accommodation Preference */}
                    <div>
                      <Label htmlFor="accommodation">Accommodation Preference</Label>
                      <Input
                        id="accommodation"
                        name="accommodation"
                        type="text"
                        value={formData.accommodation}
                        onChange={handleChange}
                        placeholder="Hotel name or area preference"
                        className="mt-1"
                      />
                    </div>

                    {/* Special Requests */}
                    <div>
                      <Label htmlFor="specialRequests">Special Requests</Label>
                      <Textarea
                        id="specialRequests"
                        name="specialRequests"
                        rows={4}
                        value={formData.specialRequests}
                        onChange={handleChange}
                        placeholder="Dietary requirements, mobility needs, special occasions, etc."
                        className="mt-1"
                      />
                    </div>

                    <Button type="submit" variant="safari" size="lg" className="w-full">
                      Confirm Booking
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <img 
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    
                    <div>
                      <h3 className="font-semibold text-foreground">{tour.title}</h3>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                        <Clock className="w-4 h-4" />
                        <span>{tour.duration}</span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Adults ({formData.adults})</span>
                          <span>${parseInt(tour.price.replace('$', '')) * parseInt(formData.adults)}</span>
                        </div>
                        {parseInt(formData.children) > 0 && (
                          <div className="flex justify-between">
                            <span>Children ({formData.children})</span>
                            <span>${Math.round(parseInt(tour.price.replace('$', '')) * 0.7 * parseInt(formData.children))}</span>
                          </div>
                        )}
                        <div className="border-t pt-2 font-semibold flex justify-between">
                          <span>Total</span>
                          <span>${calculateTotal()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground">
                      * Final price may vary based on specific requirements and seasonal rates
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTour;