import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Plans from "@/components/sections/Plans";
import Features from "@/components/sections/Features";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Plans />
        <Features />
        {/* More sections will go here */}
      </main>
    </>
  );
}
