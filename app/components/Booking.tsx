"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CalendarDays, CheckCircle } from "lucide-react";

const serviceOptions = [
  "Лечение кариеса",
  "Имплантация",
  "Виниры",
  "Отбеливание",
  "Брекеты и элайнеры",
  "Профгигиена",
];

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="booking" className="py-20 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="text-sm font-semibold text-sky uppercase tracking-wider">
              Запись
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-2">
              Запишитесь на приём
            </h2>
            <p className="text-gray mt-4">
              Оставьте заявку — мы перезвоним и подберём удобное время
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-10 text-center shadow-sm border border-gray-border/50"
            >
              <CheckCircle className="w-16 h-16 text-mint mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-dark mb-2">
                Заявка отправлена!
              </h3>
              <p className="text-gray">
                Мы перезвоним вам в течение 15 минут для подтверждения записи
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-border/50"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-3 rounded-xl border border-gray-border focus:border-sky focus:ring-2 focus:ring-sky/20 outline-none transition-all text-dark placeholder:text-gray-light"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-3 rounded-xl border border-gray-border focus:border-sky focus:ring-2 focus:ring-sky/20 outline-none transition-all text-dark placeholder:text-gray-light"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-8">
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">
                    Услуга
                  </label>
                  <select
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-xl border border-gray-border focus:border-sky focus:ring-2 focus:ring-sky/20 outline-none transition-all text-dark appearance-none bg-white"
                  >
                    <option value="" disabled>
                      Выберите услугу
                    </option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">
                    Желаемая дата
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-border focus:border-sky focus:ring-2 focus:ring-sky/20 outline-none transition-all text-dark"
                    />
                    <CalendarDays className="w-5 h-5 text-gray-light absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-sky hover:bg-sky-dark text-white font-semibold rounded-full transition-colors"
              >
                Записаться на приём
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}
