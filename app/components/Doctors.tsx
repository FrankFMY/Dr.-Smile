"use client";

import { motion } from "framer-motion";

const doctors = [
  {
    name: "Иванов Алексей Петрович",
    initials: "АИ",
    specialization: "Хирург-имплантолог",
    experience: 18,
  },
  {
    name: "Смирнова Елена Викторовна",
    initials: "ЕС",
    specialization: "Терапевт-эндодонтист",
    experience: 12,
  },
  {
    name: "Козлов Дмитрий Сергеевич",
    initials: "ДК",
    specialization: "Ортопед",
    experience: 15,
  },
  {
    name: "Петрова Анна Михайловна",
    initials: "АП",
    specialization: "Ортодонт",
    experience: 9,
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-sky uppercase tracking-wider">
            Команда
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-2">
            Наши врачи
          </h2>
          <p className="text-gray mt-4 max-w-2xl mx-auto">
            Квалифицированные специалисты с многолетним опытом и постоянным
            повышением квалификации
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, i) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-bg-alt rounded-2xl p-6 text-center"
            >
              <div className="w-24 h-24 rounded-full bg-sky-light flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sky">
                  {doctor.initials}
                </span>
              </div>
              <h3 className="text-base font-bold text-dark mb-1">
                {doctor.name}
              </h3>
              <p className="text-sm text-sky font-medium mb-2">
                {doctor.specialization}
              </p>
              <p className="text-sm text-gray">
                Стаж {doctor.experience} лет
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
