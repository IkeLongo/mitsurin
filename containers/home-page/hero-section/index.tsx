import {Button} from "@heroui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center bg-red-400">
      <section className="flex flex-col items-center text-center max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Mitsurin Logo */}
        <div className="mb-8">
          <Image
            src="/mitsurin-monogram-white.svg"
            alt="Mitsurin Wagyu Ranch Logo"
            width={96}
            height={96}
            className="w-40 h-40"
            priority
          />
        </div>

        <h2 className="text-lg md:text-xl text-white mb-4 font-medium">
          Exceptional Japanese Genetics Raised in Texas.
        </h2>

        <h1 className="text-4xl md:text-6xl font-bold font-[Montserrat] text-white mb-6 leading-tight">
          Mitsurin Wagyu
        </h1>

        <p className="text-white text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
          Experience the finest beef in the world — full-blooded Wagyu, 
          pasture-raised with precision and care in Hondo, Texas.
        </p>

        <Button className="bg-red-900 text-white px-6 py-3 rounded-md hover:bg-red-950 transition cursor-pointer">
          About Mitsurin
        </Button>
      </section>
    </div>
  );
}