"use client";

import { motion } from "framer-motion";

const cases = [
  { title: "Виниры E-max", description: "Установка 8 виниров на верхнюю челюсть" },
  { title: "Имплантация", description: "Восстановление 2 жевательных зубов" },
  { title: "Отбеливание ZOOM", description: "Осветление на 6 тонов за 1 сеанс" },
];

export default function BeforeAfter() {
  return (
    <section id="before-after" className="py-20 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-sky uppercase tracking-wider">
            Результаты
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-2">
            До и после
          </h2>
          <p className="text-gray mt-4 max-w-2xl mx-auto">
            Реальные результаты наших пациентов — лучшее доказательство качества
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-border/50"
            >
              <div className="grid grid-cols-2">
                <div className="relative h-48 bg-gradient-to-br from-gray-border to-gray-light/40 flex items-center justify-center">
                  <span className="text-sm font-semibold text-gray">До</span>
                </div>
                <div className="relative h-48 bg-gradient-to-br from-sky-light to-mint-light flex items-center justify-center">
                  <span className="text-sm font-semibold text-sky-dark">
                    После
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                <p className="text-sm text-gray">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
