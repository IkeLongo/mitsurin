import {Button} from "@heroui/button";

export default function HeroSection() {
  return (
    <div className="font-sans min-h-screen flex items-center justify-center bg-red-300">
      <main className="flex flex-col items-center text-center max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Placeholder Logo */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-gray-600 font-semibold text-sm">LOGO</span>
          </div>
        </div>

        <h2 className="text-lg md:text-xl text-gray-600 mb-4 font-medium">
          Welcome to Our Platform
        </h2>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Build Something Amazing Today
        </h1>

        <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
          Transform your ideas into reality with our powerful tools and intuitive design. 
          Join thousands of creators who are already building the future.
        </p>

        <Button className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition cursor-pointer">
          Get Started
        </Button>
      </main>
    </div>
  );
}