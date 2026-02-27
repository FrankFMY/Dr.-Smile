"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Врачи", href: "#doctors" },
  { label: "Результаты", href: "#before-after" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#footer" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-sky flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="text-xl font-bold text-dark">
              Dr. <span className="text-sky">Smile</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray hover:text-sky transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+74951234567"
              className="flex items-center gap-2 text-sm font-medium text-dark hover:text-sky transition-colors"
            >
              <Phone className="w-4 h-4" />
              +7 (495) 123-45-67
            </a>
            <a
              href="#booking"
              className="px-5 py-2.5 bg-sky hover:bg-sky-dark text-white text-sm font-semibold rounded-full transition-colors"
            >
              Записаться
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-dark"
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-dark hover:text-sky transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+74951234567"
                className="flex items-center gap-2 text-base font-medium text-dark"
              >
                <Phone className="w-4 h-4" />
                +7 (495) 123-45-67
              </a>
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="block w-full text-center px-5 py-2.5 bg-sky hover:bg-sky-dark text-white font-semibold rounded-full transition-colors"
              >
                Записаться
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
