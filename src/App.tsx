import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ArrowRight, Scissors, Clock, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function App() {
  const features = [
    {
      icon: <Scissors className="h-10 w-10" />,
      title: "Expert Stylists",
      description:
        "Our experienced barbers are masters of both classic and modern styles.",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Flexible Hours",
      description:
        "Open 7 days a week with convenient morning and evening appointments.",
    },
    {
      icon: <Star className="h-10 w-10" />,
      title: "Premium Service",
      description:
        "Enjoy complimentary beverages and a relaxing atmosphere during your visit.",
    },
  ];

  const services = [
    {
      name: "Classic Haircut",
      price: "$25",
      description: "Precision cut with professional styling",
      duration: "30 min",
    },
    {
      name: "Beard Trim",
      price: "$15",
      description: "Shape and style your beard",
      duration: "20 min",
    },
    {
      name: "Hot Towel Shave",
      price: "$35",
      description: "Traditional straight razor shave",
      duration: "45 min",
    },
    {
      name: "Complete Package",
      price: "$65",
      description: "Haircut, beard trim, and hot towel shave",
      duration: "90 min",
    },
  ];

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        {/* Hero Section */}
        <main className="flex-grow">
          <section className="relative pt-20 lg:pt-32 pb-16">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80"
                alt="Barbershop interior"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-6">
                  Classic Cuts &
                  <span className="text-primary block mt-2"> Modern Style</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 px-4">
                  Experience the perfect blend of traditional barbering and contemporary style at our premium barbershop.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
                  <Button size="lg" className="w-full sm:w-auto">
                    Book Appointment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    View Services
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-12 md:py-16 bg-muted/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
              >
                {features.map((feature, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="mb-4 text-primary">{feature.icon}</div>
                      <CardTitle className="text-xl md:text-2xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Services</h2>
                <p className="text-muted-foreground px-4">Professional grooming services for the modern gentleman</p>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
              >
                {services.map((service, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg md:text-xl">{service.name}</CardTitle>
                      <CardDescription>
                        <span className="text-xl md:text-2xl font-bold text-primary">{service.price}</span>
                        <span className="text-sm text-muted-foreground"> / {service.duration}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm md:text-base">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Location Section */}
          <section id="location" className="py-12 md:py-16 bg-muted/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="order-2 md:order-1"
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Visit Our Shop</h2>
                  <div className="space-y-4">
                    <p className="flex items-center text-muted-foreground">
                      <MapPin className="mr-2 h-5 w-5 flex-shrink-0" />
                      <span>123 Main Street, City, State 12345</span>
                    </p>
                    <p className="flex items-center text-muted-foreground">
                      <Clock className="mr-2 h-5 w-5 flex-shrink-0" />
                      <span>
                        Mon-Sat: 9am - 8pm<br />
                        Sun: 10am - 6pm
                      </span>
                    </p>
                    <Button className="mt-4 w-full sm:w-auto">
                      Get Directions
                      <MapPin className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="order-1 md:order-2 rounded-lg overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&q=80"
                    alt="Barbershop interior"
                    className="w-full h-[300px] md:h-[400px] object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;