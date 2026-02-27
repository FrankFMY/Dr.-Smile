import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import BeforeAfter from "./components/BeforeAfter";
import Reviews from "./components/Reviews";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Doctors />
        <BeforeAfter />
        <Reviews />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
