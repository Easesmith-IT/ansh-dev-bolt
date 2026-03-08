"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Building2, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 useEffect(() => {
   const handleScroll = () => {
     setIsScrolled(window.scrollY > 50);
   };

   handleScroll();

   window.addEventListener("scroll", handleScroll);
   return () => window.removeEventListener("scroll", handleScroll);
 }, []);

  const router = useRouter();

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", id: "hero", href: "/" },
    { name: "About", id: "about", href: "/#about" },
    { name: "Services", id: "services", href: "/#services" },
    { name: "Our Projects", id: "projects", href: "/projects" },
    { name: "Process", id: "process", href: "/#process" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        true ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-3"
          >
            {/* <Building2
              className={`h-8 w-8 ${
                isScrolled ? 'text-[#1F7A63]' : 'text-white'
              }`}
            />
            <span
              className={`text-2xl font-bold ${
                isScrolled ? 'text-[#111111]' : 'text-white'
              }`}
            >
              Ansh Developers
            </span> */}

            <Link href="/">
              <Image src="/logo.webp" alt="logo" width={200} height={30} />
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.href ? (
                <Link
                  href={link.href}
                  key={link.id}
                  className={`font-medium transition-colors hover:text-[#FFC107] ${
                    true ? "text-[#111111]" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`font-medium transition-colors hover:text-[#FFC107] ${
                    true ? "text-[#111111]" : "text-white"
                  }`}
                >
                  {link.name}
                </button>
              ),
            )}
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#FFC107] text-[#111111] px-6 py-2 rounded-md font-semibold hover:bg-[#ffb300] transition-all duration-300 hover:shadow-lg"
            >
              Contact Us
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            {isMobileMenuOpen ? (
              <X
                className={`h-6 w-6 ${
                  true ? "text-[#111111]" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${
                  true ? "text-[#111111]" : "text-white"
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) =>
              link.href ? (
                <Link
                  href={link.href}
                  key={link.id}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left text-[#111111] font-medium py-2 hover:text-[#FFC107]"
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-[#111111] font-medium py-2 hover:text-[#FFC107]"
                >
                  {link.name}
                </button>
              ),
            )}
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-[#FFC107] text-[#111111] px-6 py-3 rounded-md font-semibold hover:bg-[#ffb300]"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
