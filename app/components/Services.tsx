"use client";

import { motion } from "framer-motion";
import { Sparkles, CircleDot, Gem, Sun, AlignLeft, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: CircleDot,
    title: "Лечение кариеса",
    description: "Безболезненное лечение с использованием современных материалов и технологий",
    price: "от 3 500 ₽",
  },
  {
    icon: Gem,
    title: "Имплантация",
    description: "Установка имплантов ведущих мировых производителей с пожизненной гарантией",
    price: "от 35 000 ₽",
  },
  {
    icon: Sparkles,
    title: "Виниры",
    description: "Керамические и циркониевые виниры для идеальной улыбки за 2 визита",
    price: "от 25 000 ₽",
  },
  {
    icon: Sun,
    title: "Отбеливание",
    description: "Профессиональное отбеливание ZOOM и Amazing White — до 8 тонов за сеанс",
    price: "от 12 000 ₽",
  },
  {
    icon: AlignLeft,
    title: "Брекеты и элайнеры",
    description: "Исправление прикуса металлическими, керамическими брекетами и прозрачными капами",
    price: "от 45 000 ₽",
  },
  {
    icon: ShieldCheck,
    title: "Профгигиена",
    description: "Ультразвуковая чистка, Air Flow и фторирование — комплексный уход за полостью рта",
    price: "от 4 500 ₽",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-sky uppercase tracking-wider">
            Услуги
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-2">
            Что мы лечим
          </h2>
          <p className="text-gray mt-4 max-w-2xl mx-auto">
            Полный спектр стоматологических услуг — от профилактики до сложной
            имплантации
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-border/50 transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-light flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-sky" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="text-sky-dark font-bold">{service.price}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
