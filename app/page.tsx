import Hero from "@/components/sections/hero";
import Navbar from "@/components/sections/navbar";
import Image from "next/image";
import Counter from "@/components/sections/counter";
import Grants from "@/components/sections/grants";
import Schemes from "@/components/sections/schemes";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Counter />
      <Schemes />
      <Grants />
    </main>
  );
}
