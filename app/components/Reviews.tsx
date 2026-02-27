"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Мария Соколова",
    rating: 5,
    service: "Виниры",
    text: "Долго не решалась на виниры, но результат превзошёл все ожидания. Естественный цвет, идеальная форма. Улыбаюсь теперь постоянно!",
  },
  {
    name: "Андрей Васильев",
    rating: 5,
    service: "Имплантация",
    text: "Установил 2 импланта у доктора Иванова. Операция прошла быстро и безболезненно. Через полгода поставили коронки — как родные зубы.",
  },
  {
    name: "Елена Новикова",
    rating: 5,
    service: "Отбеливание",
    text: "Сделала отбеливание ZOOM — результат моментальный! Зубы стали на 6 тонов светлее. Чувствительности почти не было. Рекомендую!",
  },
  {
    name: "Дмитрий Орлов",
    rating: 4,
    service: "Лечение кариеса",
    text: "Лечил сложный кариес на шестёрке. Врач всё объяснила, показала на снимке. Пломба стоит уже год — никаких нареканий.",
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  const review = reviews[current];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-sky uppercase tracking-wider">
            Отзывы
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-2">
            Что говорят пациенты
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                className="bg-bg-alt rounded-2xl p-8"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? "text-amber-400 fill-amber-400"
                          : "text-gray-border"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-dark text-lg leading-relaxed mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div>
                  <div className="font-bold text-dark">{review.name}</div>
                  <div className="text-sm text-gray">
                    Услуга: {review.service}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-border hover:border-sky hover:text-sky flex items-center justify-center text-gray transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-sky" : "bg-gray-border"
                  }`}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-border hover:border-sky hover:text-sky flex items-center justify-center text-gray transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
