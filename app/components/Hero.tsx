"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Clock, Award } from "lucide-react";

const stats = [
  { icon: Shield, value: "15 лет", label: "опыта работы" },
  { icon: Clock, value: "12 000+", label: "довольных пациентов" },
  { icon: Award, value: "24", label: "врача в команде" },
];

export default function Hero() {
  return (
    <section className="pt-20 lg:pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-light rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-sky" />
              <span className="text-sm font-medium text-sky-dark">
                Клиника в центре Москвы
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-6">
              Улыбка, которой вы{" "}
              <span className="text-sky">гордитесь</span>
            </h1>

            <p className="text-lg text-gray mb-8 max-w-lg">
              Современное оборудование, опытные врачи и индивидуальный подход к
              каждому пациенту. Лечим без боли — гарантируем результат.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#booking"
                className="px-8 py-3.5 bg-sky hover:bg-sky-dark text-white font-semibold rounded-full text-center transition-colors"
              >
                Записаться на приём
              </a>
              <a
                href="#services"
                className="px-8 py-3.5 border-2 border-gray-border hover:border-sky text-dark hover:text-sky font-semibold rounded-full text-center transition-colors"
              >
                Наши услуги
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <stat.icon className="w-5 h-5 text-mint mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-dark">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative pb-8 lg:pb-10"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=900&fit=crop&q=80"
                alt="Beautiful smile"
                width={800}
                height={900}
                className="w-full h-[400px] md:h-[460px] lg:h-[540px] object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 hidden md:flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-mint-light flex items-center justify-center">
                <Shield className="w-6 h-6 text-mint-dark" />
              </div>
              <div>
                <div className="text-sm font-bold text-dark">Гарантия</div>
                <div className="text-xs text-gray">на все виды работ</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
