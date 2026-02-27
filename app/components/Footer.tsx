import { Phone, Mail, MapPin, Clock } from "lucide-react";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Врачи", href: "#doctors" },
  { label: "Результаты", href: "#before-after" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Запись", href: "#booking" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-sky flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold">
                Dr. <span className="text-sky">Smile</span>
              </span>
            </div>
            <p className="text-gray-light text-sm leading-relaxed">
              Современная стоматологическая клиника в центре Москвы. Заботимся о
              вашей улыбке с 2009 года.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-base mb-4">Навигация</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-light hover:text-sky transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky mt-0.5 shrink-0" />
                <span className="text-sm text-gray-light">
                  г. Москва, ул. Тверская, д. 18, стр. 1
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky shrink-0" />
                <a
                  href="tel:+74951234567"
                  className="text-sm text-gray-light hover:text-sky transition-colors"
                >
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky shrink-0" />
                <a
                  href="mailto:info@drsmile.ru"
                  className="text-sm text-gray-light hover:text-sky transition-colors"
                >
                  info@drsmile.ru
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base mb-4">Время работы</h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sky shrink-0" />
                <span className="text-sm text-gray-light">
                  Пн–Пт: 9:00–21:00
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sky shrink-0" />
                <span className="text-sm text-gray-light">
                  Сб: 10:00–18:00
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sky shrink-0" />
                <span className="text-sm text-gray-light">
                  Вс: выходной
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-light">
            &copy; 2025 Dr. Smile. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
