import { motion } from "framer-motion";
import { Scissors, Phone, Mail, Instagram, Facebook, MapPin } from "lucide-react";

export function Footer() {

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scissors className="h-6 w-6" />
              <span className="font-bold text-xl">BarberStyle</span>
            </div>
            <p className="text-muted-foreground text-sm md:text-base">
              Premium grooming services for the modern gentleman.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-foreground flex items-center text-sm md:text-base">
                  <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>(123) 456-7890</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@barberstyle.com" className="text-muted-foreground hover:text-foreground flex items-center text-sm md:text-base">
                  <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>info@barberstyle.com</span>
                </a>
              </li>
              <li>
                <span className="text-muted-foreground flex items-center text-sm md:text-base">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>123 Main Street</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Hours</h3>
            <ul className="space-y-2 text-muted-foreground text-sm md:text-base">
              <li>Monday - Friday: 9am - 8pm</li>
              <li>Saturday: 9am - 6pm</li>
              <li>Sunday: 10am - 5pm</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground p-2">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground p-2">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t text-center"
        >
          <p className="text-xs sm:text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://raldprojects.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors duration-300"
            >
              raldprojects
            </a>
            . All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}