"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coffee, MapPin, Clock, Star, Menu, X, Instagram, Facebook, Twitter, Leaf, Award, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import coffeeImage from "./coffee_image.jpg"

export default function CoffeeShopLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "The best coffee in NYC! The atmosphere is cozy and the baristas are incredibly skilled.",
      image: "",
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Finally found my new favorite spot. Their single-origin beans are exceptional!",
      image: "",
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "Perfect place to work or catch up with friends. Great coffee and even better vibes.",
      image: "",
    },
  ]

  const galleryImages = [
    "https://lh3.googleusercontent.com/p/AF1QipN0Rvx8jK-CmCC2p5N-AwA-Jz9J-Ox9y9IaYoOw=w141-h176-n-k-no-nu",
    "https://lh3.googleusercontent.com/p/AF1QipOVUuo0IBVzrRk6nEl64KHWnkZ5VygrcaUkvqn0=w141-h235-n-k-no-nu",
    "https://lh3.googleusercontent.com/p/AF1QipOsGGUhVI5NIDE48wwHt7TVgkS1GGrWUWsB2rrQ=w141-h141-n-k-no-nu",
    "https://lh3.googleusercontent.com/p/AF1QipPLRXXSfawTuOKk_ry6TNMSJamXZYa8nmG3V0im=w141-h141-n-k-no-nu",
    "https://lh3.googleusercontent.com/p/AF1QipP9Ue7bswTUyLEJpDEoGHGNIoE3mFC_TdWZn1PA=w141-h235-n-k-no-nu",
    "https://lh3.googleusercontent.com/p/AF1QipMZA-ssXqZMosvCsRnIFYBoUzh7vgACWvWMvbSC=w141-h176-n-k-no-nu",
  ]

  const menuCategories = [
    {
      title: "Signature Coffee",
      icon: <Coffee className="h-6 w-6" />,
      items: [
        { name: "Espresso", price: "$3.50", description: "Rich, bold shot of our signature blend" },
        { name: "Cappuccino", price: "$4.75", description: "Perfect balance of espresso, steamed milk, and foam" },
        { name: "Latte", price: "$5.25", description: "Smooth espresso with velvety steamed milk" },
        { name: "Americano", price: "$4.00", description: "Espresso shots with hot water for a clean taste" },
        
      ],
    },
    {
      title: "Specialty Beverages",
      icon: <Leaf className="h-6 w-6" />,
      items: [
        { name: "Cold Brew", price: "$4.25", description: "Smooth, less acidic coffee brewed cold for 12 hours" },
        { name: "Nitro Coffee", price: "$5.50", description: "Cold brew infused with nitrogen for a creamy texture" },
        { name: "Golden Milk", price: "$5.00", description: "Turmeric latte with coconut milk and spices" },
        { name: "Hot Chocolate", price: "$4.75", description: "Rich Belgian chocolate with whipped cream" },
      ],
    },
    {
      title: "Fresh Pastries",
      icon: <Heart className="h-6 w-6" />,
      items: [
        { name: "Croissant", price: "$3.25", description: "Buttery, flaky French pastry baked fresh daily" },
        {
          name: "Almond Croissant",
          price: "$4.50",
          description: "Croissant filled with almond cream and sliced almonds",
        },
        { name: "Blueberry Muffin", price: "$3.75", description: "Moist muffin bursting with fresh blueberries" },
        { name: "Banana Bread", price: "$3.50", description: "Homemade with ripe bananas and walnuts" },
      ],
    },
    {
      title: "Light Bites",
      icon: <Award className="h-6 w-6" />,
      items: [
        {
          name: "Avocado Toast",
          price: "$8.50",
          description: "Smashed avocado on sourdough with everything seasoning",
        },
        {
          name: "Breakfast Sandwich",
          price: "$9.75",
          description: "Egg, cheese, and choice of bacon or sausage on brioche",
        },
        { name: "Bagel & Cream Cheese", price: "$4.50", description: "Fresh bagel with house-made cream cheese" },
        { name: "Soup of the Day", price: "$6.50", description: "Chef's daily selection served with artisan bread" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Coffee className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
              <span className="text-lg sm:text-xl font-bold text-black">Cafe La Fe</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <Link href="#home" className="text-sm lg:text-base text-black hover:text-amber-600 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-sm lg:text-base text-black hover:text-amber-600 transition-colors">
                About
              </Link>
              <Link href="#services" className="text-sm lg:text-base text-black hover:text-amber-600 transition-colors">
                Menu
              </Link>
              <Link href="#gallery" className="text-sm lg:text-base text-black hover:text-amber-600 transition-colors">
                Gallery
              </Link>
              <Link href="#testimonials" className="text-sm lg:text-base text-black hover:text-amber-600 transition-colors">
                Reviews
              </Link>
              <Button className="text-sm lg:text-base bg-amber-600 hover:bg-amber-700 text-white">Visit Us</Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t animate-in slide-in-from-top-2 duration-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="#home" className="block px-3 py-2 text-base text-gray-700 hover:text-amber-600">
                  Home
                </Link>
                <Link href="#about" className="block px-3 py-2 text-base text-gray-700 hover:text-amber-600">
                  About
                </Link>
                <Link href="#services" className="block px-3 py-2 text-base text-gray-700 hover:text-amber-600">
                  Menu
                </Link>
                <Link href="#gallery" className="block px-3 py-2 text-base text-gray-700 hover:text-amber-600">
                  Gallery
                </Link>
                <Link href="#testimonials" className="block px-3 py-2 text-base text-gray-700 hover:text-amber-600">
                  Reviews
                </Link>
                <Button className="w-full mt-2 bg-amber-600 hover:bg-amber-700 text-white">Visit Us</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[80vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full object-cover" style={{
          backgroundImage: `url(${coffeeImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 w-full h-full bg-white/15" />

        <div className="relative z-10 text-center w-full px-4 sm:px-8 max-w-lg sm:max-w-2xl md:max-w-4xl mx-auto">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200 text-sm sm:text-base">✨ Now Open in NYC!</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-2xl">
              Welcome to
              <span className="block text-amber-300">Cafe La Fe</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto drop-shadow-lg px-4">
              Experience the finest artisanal coffee in the heart of New York City. Every cup tells a story of passion
              and perfection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg transform hover:scale-105 transition-all duration-200"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Find Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-black hover:bg-white hover:text-amber-900 px-6 sm:px-8 py-3 text-base sm:text-lg transform hover:scale-105 transition-all duration-200"
              >
                <Clock className="mr-2 h-5 w-5" />
                Opens 10AM
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left duration-1000">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Our Story</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              We are a specialty coffee shop serving la colombe coffee with a variety of styles and flavors. We also serve baked dominican empanadas, arepas, pastries, natural fruit smoothies, flan, tres leches, buble teas, pastel de nata, ice cream and much more!
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                Our skilled baristas craft each drink with precision and care, creating not just coffee, but moments of
                joy and connection. Whether you are starting your day, taking a break, or meeting friends, we are here to
                make every visit special.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center p-4 sm:p-6 bg-amber-50 rounded-lg transform hover:scale-105 transition-transform duration-200">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-600">20+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Coffee Varieties</div>
                </div>
                <div className="text-center p-4 sm:p-6 bg-amber-50 rounded-lg transform hover:scale-105 transition-transform duration-200">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-600">50+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Pastries and Cakes</div>
                </div>
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-right duration-1000">
              <div className="relative">
                <Image
                  src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4noVMGAr_EqruktcDR7VA0yrY1Do4hCp6nT7q3obRSauyobMNQcjOTtK2mIGTbdmJpVJGvF6sEPP6Q4us5fn_n_8p4ePHHJDfjRGCFqxWH76B6m6wOUZNlCCUEcj2e3fKurwUf70PQ=s1360-w1360-h1020-rw"
                  alt="Coffee shop interior"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 w-full h-auto"
                />
                <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-amber-600 text-white p-4 sm:p-6 rounded-xl shadow-lg">
                  <Coffee className="h-6 w-6 sm:h-8 sm:w-8 mb-2" />
                  <div className="font-bold text-sm sm:text-base">Fresh Daily</div>
                  <div className="text-xs sm:text-sm opacity-90">Roasted in-house</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Menu Section */}
      <section id="services" className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Menu</h2>
            <p className="text-base sm:text-xl text-gray-700 max-w-2xl mx-auto px-4">
              Discover our carefully crafted selection of premium coffee, specialty beverages, and fresh treats
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {menuCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 bg-amber-100 text-amber-600 rounded-lg mr-3 sm:mr-4">
                      {category.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex justify-between items-start p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-amber-50 transition-colors duration-300 border border-gray-100"
                      >
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1 sm:mb-2">
                            <h4 className="font-semibold text-sm sm:text-base text-gray-900">{item.name}</h4>
                            <span className="text-base sm:text-lg font-bold text-amber-600">{item.price}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Gallery</h2>
            <p className="text-base sm:text-xl text-gray-700 max-w-2xl mx-auto px-4">
              Take a peek inside our cozy space and see what makes Cafe La Fe special
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg animate-in fade-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Image
                  src={galleryImages[index]}
                  alt={`Gallery image ${index}`}
                  width={400}
                  height={300}
                  className="w-full h-48 sm:h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-base sm:text-xl text-gray-700 max-w-2xl mx-auto px-4">
              Do not just take our word for it - hear from our amazing community
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-in fade-in slide-in-from-bottom shadow-lg"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4">
                  {testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4 w-12 h-12 sm:w-14 sm:h-14 object-cover"
                    />
                  ) : (
                    <div className="bg-[#00754a] text-white rounded-full mr-4 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center font-bold text-lg uppercase">
                      {testimonial.name?.slice(0, 2) || "NA"}
                    </div>
                  )}
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-gray-900">{testimonial.name}</h4>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 italic">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-in fade-in slide-in-from-bottom duration-1000">
              <div className="flex items-center space-x-2 mb-4">
                <Coffee className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400" />
                <span className="text-xl sm:text-2xl font-bold">Cafe La Fe</span>
              </div>
              <p className="text-sm sm:text-base text-gray-400 mb-4">Crafting exceptional coffee experiences in the heart of NYC.</p>
              <div className="flex space-x-4">
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400 hover:text-white cursor-pointer transition-colors" />
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom duration-1000" style={{ animationDelay: "200ms" }}>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 text-amber-400">Location</h4>
              <p className="text-sm sm:text-base text-gray-400 mb-2">70 E 1st St</p>
              <p className="text-sm sm:text-base text-gray-400 mb-2">New York, NY 10003, United States</p>
              <p className="text-sm sm:text-base text-gray-400">+1 212-718-0443</p>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom duration-1000" style={{ animationDelay: "400ms" }}>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 text-amber-400">Hours</h4>
              <p className="text-sm sm:text-base text-gray-400 mb-2">Opens 10 AM</p>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom duration-1000" style={{ animationDelay: "600ms" }}>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 text-amber-400">Quick Links</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-sm sm:text-base text-gray-400 hover:text-amber-400 transition-colors">
                  Menu
                </Link>
                <Link href="#" className="block text-sm sm:text-base text-gray-400 hover:text-amber-400 transition-colors">
                  Catering
                </Link>
                <Link href="#" className="block text-sm sm:text-base text-gray-400 hover:text-amber-400 transition-colors">
                  Events
                </Link>
                <Link href="#" className="block text-sm sm:text-base text-gray-400 hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-sm sm:text-base text-gray-400">
              © {new Date().getFullYear()} Cafe La Fe. All rights reserved. Made with ❤️ in NYC.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

