import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Plans from "@/components/sections/Plans";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Plans />
        {/* More sections will go here */}
      </main>
    </>
  );
}
