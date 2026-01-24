import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const tripadvisorReviews = [
    {
      name: "victoria v",
      date: "19 January 2026",
      rating: 5,
      title: "Very good",
      review: "My guide was felix,he was very friendly,helpful and very pleasant to talk to,I recommend it with all my heart",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Loren P",
      date: "18 January 2026", 
      rating: 5,
      title: "Amazing day",
      review: "Amazing day with our amazing guide Aristilides the champion to take us as close as possible to the animals! Thanks to him",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Zaynab H",
      date: "18 January 2026",
      rating: 5,
      title: "Great experience with Yohana",
      review: "Had an amazing experience at Mikumi national park, we got to see all the animals and Yohana was a great guide, not only did...",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face"
    }
  ];

  const googleReviews = [
    {
      name: "Mucait Budak",
      date: "18 October 2025",
      rating: 5,
      review: "The tour was simply amazing — we saw all the animals we wanted to see. Thanks to our Guide, we didn't miss a thing and always felt safe. He really went out of his...",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Michael Odle", 
      date: "28 September 2025",
      rating: 5,
      review: "Incredible experience! From start to finish, everything was seamless and well-organized. The flight in was breathtaking, and our guide was amazing—...",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Alba Berenguer",
      date: "15 September 2025", 
      rating: 5,
      review: "We went on an unforgettable safari with this agency and couldn't be happier with the experience. Our guide, Aristides, was simply wonderful: friendly, cheerful, and...",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % googleReviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + googleReviews.length) % googleReviews.length);
  };

  return (
    <section className="py-4 md:py-6 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            What Clients Saying About Us
          </h2>
        </div>

        {/* TripAdvisor Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">TA</span>
                </div>
                <span className="font-semibold text-lg">Tripadvisor</span>
                <span className="text-green-600 font-medium">Excellent</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">●</span>
                  </div>
                ))}
              </div>
              <span className="font-semibold">5.0</span>
              <span className="text-muted-foreground">| 408 reviews</span>
            </div>
            <Button variant="outline" className="px-6">
              Write a review
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tripadvisorReviews.map((review, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={review.avatar} 
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                    <div className="ml-auto w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">TA</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">●</span>
                      </div>
                    ))}
                  </div>
                  
                  <h5 className="font-semibold mb-2">{review.title}</h5>
                  <p className="text-sm text-muted-foreground">{review.review}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Google Reviews Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-blue-600">G</span>
                <span className="text-2xl font-bold text-red-500">o</span>
                <span className="text-2xl font-bold text-yellow-500">o</span>
                <span className="text-2xl font-bold text-blue-600">g</span>
                <span className="text-2xl font-bold text-green-600">l</span>
                <span className="text-2xl font-bold text-red-500">e</span>
                <span className="font-semibold text-lg ml-2">Excellent</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold">4.9</span>
              <span className="text-muted-foreground">| 37 reviews</span>
            </div>
            <Button variant="outline" className="px-6">
              Write a review
            </Button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {googleReviews.map((review, index) => (
                <Card key={index} className="bg-background">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <img 
                        src={review.avatar} 
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                      </div>
                      <div className="ml-auto">
                        <span className="text-2xl font-bold text-blue-600">G</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{review.review}</p>
                    <button className="text-sm text-blue-600 mt-2">Read more</button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;