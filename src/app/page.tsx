import Navbar from "@/components/montrix/Navbar";
import Footer from "@/components/montrix/Footer";
import PremiumBackground from "@/components/montrix/PremiumBackground";
import Hero from "@/components/montrix/Hero";
import ServicesBento from "@/components/montrix/ServicesBento";
import Process from "@/components/montrix/Process";
import WorkshopsTeaser from "@/components/montrix/WorkshopsTeaser";
import ContactPreview from "@/components/montrix/ContactPreview";

export default function Home() {
  return (
    <main className="relative isolate flex min-h-screen flex-col">
      <PremiumBackground />

      <div className="relative z-10 flex flex-1 flex-col">
        <Navbar />
        <Hero />
        <ServicesBento />
        <Process />
        <WorkshopsTeaser />
        <ContactPreview />
        <Footer />
      </div>
    </main>
  );
}