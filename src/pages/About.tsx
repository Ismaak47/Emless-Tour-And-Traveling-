import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, MapPin, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary to-primary-glow">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Emless Tours and Traveling</h1>
            <p className="text-xl md:text-2xl">Your Gateway to Zanzibar & Tanzania Adventures</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in the heart of Stone Town, Zanzibar, Emless Tours and Traveling is your trusted local partner 
                for discovering the magic of Zanzibar and Tanzania. With years of experience and deep local knowledge, 
                we create authentic, memorable experiences that showcase the best of East Africa's culture, wildlife, and natural beauty.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-3xl font-bold text-foreground mb-2">500+</h3>
                  <p className="text-muted-foreground">Happy Travelers</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-3xl font-bold text-foreground mb-2">5+</h3>
                  <p className="text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-3xl font-bold text-foreground mb-2">25+</h3>
                  <p className="text-muted-foreground">Tour Packages</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-3xl font-bold text-foreground mb-2">24/7</h3>
                  <p className="text-muted-foreground">Support</p>
                </CardContent>
              </Card>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide authentic, sustainable, and unforgettable travel experiences that connect our guests 
                  with the rich culture, stunning landscapes, and incredible wildlife of Zanzibar and Tanzania, 
                  while supporting local communities and conservation efforts.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading tour operator in Zanzibar and Tanzania, recognized for our commitment to 
                  excellence, sustainability, and creating transformative travel experiences that leave a 
                  positive impact on both our guests and the destinations we serve.
                </p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-muted/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Why Choose Emless Tours?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">Local Expertise</h4>
                  <p className="text-sm text-muted-foreground">Born and raised in Zanzibar, we know every hidden gem</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">Competitive Prices</h4>
                  <p className="text-sm text-muted-foreground">Best value tours with no hidden costs</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">Small Groups</h4>
                  <p className="text-sm text-muted-foreground">Intimate experiences with personalized attention</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">Safety First</h4>
                  <p className="text-sm text-muted-foreground">Licensed guides and insured vehicles</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">24/7 Support</h4>
                  <p className="text-sm text-muted-foreground">Always available when you need us</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">Sustainable Tourism</h4>
                  <p className="text-sm text-muted-foreground">Supporting local communities and conservation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;