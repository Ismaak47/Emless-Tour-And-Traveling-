import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const [tripadvisorIndex, setTripadvisorIndex] = useState(0);
  const [googleIndex, setGoogleIndex] = useState(0);

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
    },
    {
      name: "James M",
      date: "17 January 2026",
      rating: 5,
      title: "Unforgettable Safari",
      review: "The best safari experience ever! Our guide was knowledgeable and made sure we saw the Big Five. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Sarah K",
      date: "16 January 2026",
      rating: 5,
      title: "Perfect honeymoon trip",
      review: "Everything was perfectly organized for our honeymoon. The romantic dinner under the stars was magical!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "David R",
      date: "15 January 2026",
      rating: 5,
      title: "Family adventure",
      review: "Our kids loved every moment of the safari. The guide was patient and educational. Great family experience!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Maria L",
      date: "14 January 2026",
      rating: 5,
      title: "Cultural immersion",
      review: "The Stone Town tour was incredible. Learning about the spice trade and local culture was fascinating!",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Robert T",
      date: "13 January 2026",
      rating: 5,
      title: "Beach paradise",
      review: "The beaches in Zanzibar are pristine! Crystal clear waters and white sand. Perfect for relaxation.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Emma W",
      date: "12 January 2026",
      rating: 5,
      title: "Adventure of a lifetime",
      review: "From diving to cultural tours, this trip had everything. The team was professional and friendly throughout.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Michael B",
      date: "11 January 2026",
      rating: 5,
      title: "Exceeded expectations",
      review: "Every detail was taken care of. The luxury accommodations and personalized service made this trip unforgettable.",
      avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=50&h=50&fit=crop&crop=face"
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
    },
    {
      name: "Jennifer Smith",
      date: "10 September 2025",
      rating: 5,
      review: "Outstanding service from booking to the end of our trip. The wildlife viewing was spectacular and our guide's knowledge was impressive.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Carlos Rodriguez",
      date: "5 September 2025",
      rating: 5,
      review: "Perfect organization and timing. We saw lions, elephants, and zebras up close. The photography opportunities were endless!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Lisa Johnson",
      date: "1 September 2025",
      rating: 5,
      review: "The cultural tour of Stone Town was educational and fun. Our guide shared fascinating stories about the history and architecture.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Ahmed Hassan",
      date: "25 August 2025",
      rating: 5,
      review: "Excellent value for money. The accommodations were comfortable and the food was delicious. Highly recommend this tour company!",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Sophie Martin",
      date: "20 August 2025",
      rating: 5,
      review: "The snorkeling and diving experiences were world-class. Crystal clear waters and abundant marine life made it magical.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Thomas Anderson",
      date: "15 August 2025",
      rating: 5,
      review: "Professional guides, comfortable transportation, and amazing wildlife encounters. This trip exceeded all our expectations!",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Rachel Green",
      date: "10 August 2025",
      rating: 5,
      review: "The sunset dhow cruise was romantic and peaceful. The whole Zanzibar experience was like a dream come true!",
      avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=50&h=50&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const tripadvisorInterval = setInterval(() => {
      setTripadvisorIndex((prev) => (prev + 3) % tripadvisorReviews.length);
    }, 2000);

    const googleInterval = setInterval(() => {
      setGoogleIndex((prev) => (prev + 3) % googleReviews.length);
    }, 2000);

    return () => {
      clearInterval(tripadvisorInterval);
      clearInterval(googleInterval);
    };
  }, [tripadvisorReviews.length, googleReviews.length]);

  const getVisibleReviews = (reviews, startIndex) => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(startIndex + i) % reviews.length]);
    }
    return visible;
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
                <svg width="32" height="32" viewBox="0 0 32 32" className="">
                  <circle cx="16" cy="16" r="16" fill="#00AA6C"/>
                  <path d="M8.5 12.5c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4zm11 0c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4zm-5.5 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="white"/>
                </svg>
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
            {getVisibleReviews(tripadvisorReviews, tripadvisorIndex).map((review, index) => (
              <Card key={`${tripadvisorIndex}-${index}`} className="bg-background">
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
                      <svg width="24" height="24" viewBox="0 0 32 32">
                        <circle cx="16" cy="16" r="16" fill="#00AA6C"/>
                        <path d="M8.5 12.5c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4zm11 0c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4zm-5.5 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="white"/>
                      </svg>
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
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <path d="M16.319 13.713v5.484h9.075c-.369 2.006-2.731 5.484-9.075 5.484-5.456 0-9.906-4.519-9.906-10.094S10.938 4.493 16.394 4.493c3.106 0 5.188 1.325 6.375 2.469l4.344-4.181C24.669 0.719 20.756-0.781 16.319-0.781 7.219-0.781 0 6.469 0 15.587s7.219 16.369 16.319 16.369c9.419 0 15.681-6.625 15.681-15.956 0-1.069-.119-1.881-.262-2.694H16.319z" fill="#4285f4"/>
                  <path d="M16.319 13.713v5.484h9.075c-.369 2.006-2.731 5.484-9.075 5.484-5.456 0-9.906-4.519-9.906-10.094S10.938 4.493 16.394 4.493c3.106 0 5.188 1.325 6.375 2.469l4.344-4.181C24.669 0.719 20.756-0.781 16.319-0.781 7.219-0.781 0 6.469 0 15.587s7.219 16.369 16.319 16.369c9.419 0 15.681-6.625 15.681-15.956 0-1.069-.119-1.881-.262-2.694H16.319z" fill="#34a853"/>
                  <path d="M16.319 13.713v5.484h9.075c-.369 2.006-2.731 5.484-9.075 5.484-5.456 0-9.906-4.519-9.906-10.094S10.938 4.493 16.394 4.493c3.106 0 5.188 1.325 6.375 2.469l4.344-4.181C24.669 0.719 20.756-0.781 16.319-0.781 7.219-0.781 0 6.469 0 15.587s7.219 16.369 16.319 16.369c9.419 0 15.681-6.625 15.681-15.956 0-1.069-.119-1.881-.262-2.694H16.319z" fill="#fbbc05"/>
                  <path d="M16.319 13.713v5.484h9.075c-.369 2.006-2.731 5.484-9.075 5.484-5.456 0-9.906-4.519-9.906-10.094S10.938 4.493 16.394 4.493c3.106 0 5.188 1.325 6.375 2.469l4.344-4.181C24.669 0.719 20.756-0.781 16.319-0.781 7.219-0.781 0 6.469 0 15.587s7.219 16.369 16.319 16.369c9.419 0 15.681-6.625 15.681-15.956 0-1.069-.119-1.881-.262-2.694H16.319z" fill="#ea4335"/>
                </svg>
                <span className="font-semibold text-lg ml-2">Google</span>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getVisibleReviews(googleReviews, googleIndex).map((review, index) => (
              <Card key={`${googleIndex}-${index}`} className="bg-background">
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
                      <svg width="24" height="24" viewBox="0 0 32 32">
                        <path d="M16.319 13.713v5.484h9.075c-.369 2.006-2.731 5.484-9.075 5.484-5.456 0-9.906-4.519-9.906-10.094S10.938 4.493 16.394 4.493c3.106 0 5.188 1.325 6.375 2.469l4.344-4.181C24.669 0.719 20.756-0.781 16.319-0.781 7.219-0.781 0 6.469 0 15.587s7.219 16.369 16.319 16.369c9.419 0 15.681-6.625 15.681-15.956 0-1.069-.119-1.881-.262-2.694H16.319z" fill="#4285f4"/>
                      </svg>
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
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;